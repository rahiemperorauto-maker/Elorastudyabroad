import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/company';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  // Generate dynamic prefilled message based on current path
  const getDynamicMessage = () => {
    const path = location.pathname;

    // Country page
    const country = COUNTRIES.find((c) => path === `/${c.slug}` || path === `/destinations/${c.id}`);
    if (country) {
      return lang === 'bn'
        ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি ${country.nameBn}-এ উচ্চশিক্ষা সম্পর্কে জানতে আগ্রহী।`
        : `Hello Elora Study Abroad, I would like to get information about studying in ${country.nameEn}.`;
    }

    // University page
    const university = UNIVERSITIES.find((u) => path === `/universities/${u.slug}`);
    if (university) {
      return lang === 'bn'
        ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি ${university.nameBn} (${university.name})-এ ভর্তি প্রক্রিয়া সম্পর্কে জানতে চাই।`
        : `Hello Elora Study Abroad, I would like to inquire about admission requirements at ${university.name} in ${university.countryName}.`;
    }

    // Courses page
    if (path.startsWith('/courses')) {
      return lang === 'bn'
        ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি বিদেশে বিভিন্ন ডিগ্রি কোর্স এবং এন্ট্রি রিকোয়ারমেন্ট সম্পর্কে জানতে আগ্রহী।`
        : `Hello Elora Study Abroad, I would like guidance on finding the right degree program and course.`;
    }

    // Default message
    return lang === 'bn'
      ? COMPANY_INFO.defaultWhatsAppMessageBn
      : COMPANY_INFO.defaultWhatsAppMessage;
  };

  const dynamicMsg = getDynamicMessage();
  const encodedMsg = encodeURIComponent(dynamicMsg);
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="WhatsApp Consultation"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 select-none"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex flex-col bg-white rounded-xl shadow-2xl border border-slate-200 p-3 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">
                Elora Study Abroad
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close message preview"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-slate-600 mt-2 line-clamp-3">
            {dynamicMsg}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center text-xs font-semibold py-1.5 bg-[#25D366] hover:bg-[#20b858] text-white rounded-lg transition-colors"
          >
            {lang === 'bn' ? 'মেসেজ পাঠান' : 'Send WhatsApp Message'}
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b858] active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Direct consultation on WhatsApp: +8801348223630"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Chat with Elora Study Abroad on WhatsApp</span>
        {/* Subtle ping ripple */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};
