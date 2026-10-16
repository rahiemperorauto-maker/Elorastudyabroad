import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { UniversitiesPage } from './pages/UniversitiesPage';
import { UniversityDetailPage } from './pages/UniversityDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#F5F7FB] text-[#18253B]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Destinations */}
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/study-in-:slug" element={<CountryDetailPage />} />
              <Route path="/destinations/:slug" element={<CountryDetailPage />} />

              {/* Universities */}
              <Route path="/universities" element={<UniversitiesPage />} />
              <Route path="/universities/:slug" element={<UniversityDetailPage />} />

              {/* Courses */}
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailPage />} />

              {/* Services, About, Contact, FAQs, Privacy */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
