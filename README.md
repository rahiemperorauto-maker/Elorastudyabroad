# Elora Study Abroad — Official Web Platform

> **DREAM • EXPLORE • ACHIEVE**  
> A premium, fully responsive, bilingual (English & Bengali / বাংলা) international education consultancy web platform for **Elora Study Abroad**.

---

## 🌟 Overview & Key Features

- **Brand Identity & Rectangular Logo**: Preserves the official Elora Study Abroad logo (Navy serif typography, gold-and-navy orbital globe with airplane, graduation cap, and open book icons) without oval frames or white background boxes.
- **Bilingual English & বাংলা System**: Complete real-time language switching with natural professional Bengali translations, persistent across user sessions via `localStorage`.
- **18 Study Destination Portals**: Dedicated SEO-optimized pages for Canada, United Kingdom, New Zealand, Russia, Malaysia, Australia, United States, Germany, Finland, Sweden, Denmark, Ireland, France, Italy, Hungary, Poland, China, and Japan.
- **Accredited University Directory**: Searchable and filterable by country, subject, degree level, and keyword with verified admission guidance.
- **Interactive Course Finder**: 30 subject categories (Computer Science, AI, Business, Engineering, Medicine, Law, Aviation, etc.) across 6 degree tiers (Foundation, Diploma, Bachelor's, Master's, MBA, PhD).
- **Dual Global Presence**: Prominently highlights offices in **Dhaka, Bangladesh** and **Toronto, Canada**.
- **Context-Aware WhatsApp Integration**: Direct floating WhatsApp button on every page with prefilled contextual messaging (prefills destination, university, or course).
- **Backend Consultation API (`POST /api/contact`)**: Secure Express API with server-side validation, honeypot anti-spam protection, rate limiting, and configurable SMTP email delivery.
- **Ethical Academic Standards**: Strict adherence to truth in advertising—no fake rankings, no false admission or visa approval guarantees.

---

## 🎨 Brand Design System

| Color Role | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Navy** | `#081F45` | Main headers, hero sections, primary buttons, footer |
| **Secondary Navy** | `#102D58` | Gradients, card accents, borders |
| **Accent Gold** | `#E8B13C` | CTAs, active highlights, icons, emblems |
| **Light Background** | `#F5F7FB` | Neutral page background |
| **Text Primary** | `#18253B` | High-contrast body typography |

### Typography
- **English**: Poppins & Plus Jakarta Sans
- **Bengali**: Hind Siliguri

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js 18+ or 20+
- npm or bun

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your SMTP credentials if you want contact form submissions emailed to admissions:
```env
SMTP_HOST=smtp.yourmailserver.com
SMTP_PORT=587
SMTP_USER=admissions@elorastudyaboard.com
SMTP_PASSWORD=your-secure-password
SMTP_FROM="Elora Study Abroad <inquiries@elorastudyaboard.com>"
CONTACT_RECEIVER_EMAIL=admissions@elorastudyaboard.com
PORT=3000
```
*(If SMTP credentials are not set, the API will log the leads securely and notify that SMTP is in setup mode).*

### 4. Running the Development Server
```bash
npm run dev
```
The application will be live at `http://localhost:3000`.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🏢 Global Office Locations

### 🇧🇩 Bangladesh Office (Head Office)
- **Address**: 128 Lake Circus, Kalabagan, Dhaka, Bangladesh
- **Phone / WhatsApp**: [+8801348223630](https://wa.me/8801348223630)
- **Hours**: Saturday – Thursday: 10:00 AM – 6:30 PM

### 🇨🇦 Canada Office
- **Address**: 166 Wallace Avenue, Toronto, ON, Canada
- **Phone**: [+1 (514) 567-8734](tel:+15145678734)
- **Hours**: Monday – Friday: 9:30 AM – 5:30 PM (EST)

**Official Domain**: `elorastudyaboard.com`

---

## 🌐 Custom Domain & Production Hosting Guide

### Deploying with Node.js / PM2 on a VPS (Ubuntu / Debian)
1. Clone the repository and install dependencies:
   ```bash
   git clone <repo-url> elora-web && cd elora-web
   npm install
   npm run build
   ```
2. Start using PM2 process manager:
   ```bash
   npm install -g pm2
   pm2 start server.ts --name "elora-web" --interpreter tsx -- --port 3000
   pm2 save
   pm2 startup
   ```

### Reverse Proxy & Free SSL via Nginx & Certbot
Configure Nginx (`/etc/nginx/sites-available/elorastudyaboard.com`):
```nginx
server {
    server_name elorastudyaboard.com www.elorastudyaboard.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Obtain free HTTPS certificate via Let's Encrypt:
```bash
sudo certbot --nginx -d elorastudyaboard.com -d www.elorastudyaboard.com
```

---

## 📄 License & Intellectual Property
© Elora Study Abroad. All Rights Reserved.
DREAM • EXPLORE • ACHIEVE
