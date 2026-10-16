import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json({ limit: '1mb' }));

// Simple in-memory rate limiting for anti-abuse
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

const rateLimiter = (req: Request, res: Response, next: () => void) => {
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown-ip';
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 10;

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return next();
  }

  if (record.count >= maxRequests) {
    return res.status(429).json({
      error: 'Too many consultation inquiries submitted from your network. Please wait a few minutes or contact us via WhatsApp.'
    });
  }

  record.count += 1;
  next();
};

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Elora Study Abroad API',
    timestamp: new Date().toISOString()
  });
});

// Contact & Student Consultation API
app.post('/api/contact', rateLimiter, async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      phone,
      preferredCountry,
      preferredUniversity,
      interestedSubject,
      currentEducation,
      preferredIntake,
      message,
      consent,
      _honey
    } = req.body;

    // 1. Honeypot check (anti-bot)
    if (_honey && _honey.trim().length > 0) {
      // Silently discard spam submission
      return res.json({ success: true, message: 'Inquiry received.' });
    }

    // 2. Strict Input Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 3 || fullName.length > 100) {
      return res.status(400).json({ error: 'Full name is required (3 to 100 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.length > 120) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const phoneRegex = /^[+0-9\s\-()]{7,30}$/;
    if (!phone || typeof phone !== 'string' || !phoneRegex.test(phone.trim())) {
      return res.status(400).json({ error: 'A valid phone or WhatsApp number is required (7 to 30 characters).' });
    }

    if (!preferredCountry || typeof preferredCountry !== 'string' || preferredCountry.length > 60) {
      return res.status(400).json({ error: 'Please select your preferred study country.' });
    }

    if (!interestedSubject || typeof interestedSubject !== 'string' || interestedSubject.length > 100) {
      return res.status(400).json({ error: 'Please select your interested subject area.' });
    }

    if (!currentEducation || typeof currentEducation !== 'string' || currentEducation.length > 100) {
      return res.status(400).json({ error: 'Please specify your current education level.' });
    }

    if (message && (typeof message !== 'string' || message.length > 2000)) {
      return res.status(400).json({ error: 'Message cannot exceed 2000 characters.' });
    }

    if (!consent) {
      return res.status(400).json({ error: 'Consent to contact is required.' });
    }

    // Sanitized record
    const lead = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      preferredCountry: preferredCountry.trim(),
      preferredUniversity: (preferredUniversity || 'Not specified').trim(),
      interestedSubject: interestedSubject.trim(),
      currentEducation: currentEducation.trim(),
      preferredIntake: (preferredIntake || 'Not specified').trim(),
      message: (message || '').trim(),
      timestamp: new Date().toISOString()
    };

    console.log('[Elora Study Abroad - Lead Received]:', lead);

    // 3. SMTP Delivery handling
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'admissions@elorastudyaboard.com';

    const isSmtpConfigured =
      smtpHost &&
      smtpUser &&
      smtpPass &&
      smtpHost !== 'smtp.example.com' &&
      smtpPass !== 'your-smtp-password';

    if (isSmtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const mailContent = `
New Student Inquiry - Elora Study Abroad:
----------------------------------------
Student Name: ${lead.fullName}
Email: ${lead.email}
Phone/WhatsApp: ${lead.phone}
Target Country: ${lead.preferredCountry}
Preferred University: ${lead.preferredUniversity}
Subject: ${lead.interestedSubject}
Education Level: ${lead.currentEducation}
Intake: ${lead.preferredIntake}
Message: ${lead.message || 'No additional message'}
Received: ${lead.timestamp}
----------------------------------------
      `;

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"Elora Study Abroad" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: lead.email,
        subject: `[Inquiry] ${lead.fullName} - Study in ${lead.preferredCountry} (${lead.interestedSubject})`,
        text: mailContent
      });

      return res.json({
        success: true,
        message: 'Thank you! Your inquiry has been sent to our admissions team.'
      });
    } else {
      // SMTP is not configured in this environment
      return res.json({
        success: true,
        message: 'Inquiry submitted and logged successfully with our admissions team.',
        note: 'Notice: Production SMTP email server is currently awaiting credential configuration in .env.'
      });
    }
  } catch (error: any) {
    console.error('[Elora API Error]:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while processing your inquiry. Please try again or chat via WhatsApp.'
    });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true'
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[Elora Study Abroad Server] running on http://localhost:${PORT} in ${isProd ? 'production' : 'development'} mode.`);
  });
}

startServer();
