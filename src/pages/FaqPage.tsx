import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { FAQS } from '../data/faqs';
import { COMPANY_INFO } from '../data/company';
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Destinations', 'Admissions', 'Visa', 'Costs'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesQuery =
      faq.questionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.questionBn.includes(searchQuery) ||
      faq.answerEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answerBn.includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Frequently Asked Questions - Elora Study Abroad"
        description="Find verified answers to student queries regarding study abroad admissions, IELTS requirements, blocked accounts, student visas, and tuition fees."
        canonicalPath="/faqs"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Clarity & Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'সাধারণ প্রশ্নোত্তর (FAQs)' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'বিদেশে উচ্চশিক্ষার ভর্তি প্রক্রিয়া, স্কলারশিপ, খরচ ও ভিসা সংক্রান্ত সকল প্রয়োজনীয় তথ্যভিত্তিক উত্তর।'
              : 'Clear, transparent answers regarding admissions, English requirements, student visas, and tuition costs across 18 countries.'}
          </p>
        </div>

        {/* Filter & Search */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#081F45] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-60">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#081F45]">
                    {lang === 'bn' ? faq.questionBn : faq.questionEn}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E8B13C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{lang === 'bn' ? faq.answerBn : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Consultation Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center space-y-4">
          <h3 className="text-lg font-bold text-[#081F45]">
            {lang === 'bn' ? 'আপনার কি আরও প্রশ্ন রয়েছে?' : 'Still Have Questions About Studying Abroad?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Speak directly with a senior counselor who can review your specific transcripts, GPA, and country preference.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Counselors on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#081F45] hover:bg-[#102D58] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <span>{t('nav.free_consultation')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
