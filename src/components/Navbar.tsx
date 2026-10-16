import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { EloraLogo } from './EloraLogo';
import { COUNTRIES } from '../data/countries';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
  GraduationCap,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdown, setDestinationsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsDropdown(false);
  }, [location.pathname]);

  // Handle sticky navbar scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDestinationsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.universities'), path: '/universities' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: Original Brand Logo (Rectangular, Transparent) */}
          <div className="flex-shrink-0">
            <EloraLogo size="md" />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-[#18253B]">
            <Link
              to="/"
              className={`hover:text-[#081F45] transition-colors whitespace-nowrap ${
                location.pathname === '/' ? 'text-[#081F45] font-semibold' : ''
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* Destinations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDestinationsDropdown(!destinationsDropdown)}
                className={`flex items-center gap-1 hover:text-[#081F45] transition-colors whitespace-nowrap ${
                  location.pathname.startsWith('/study-in') || location.pathname === '/destinations'
                    ? 'text-[#081F45] font-semibold'
                    : ''
                }`}
                aria-expanded={destinationsDropdown}
              >
                <span>{t('nav.destinations')}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    destinationsDropdown ? 'rotate-180 text-[#E8B13C]' : ''
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {destinationsDropdown && (
                <div className="absolute top-full left-0 mt-3 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200/80 py-3 px-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {t('nav.popular_countries')}
                    </span>
                    <Link
                      to="/destinations"
                      onClick={() => setDestinationsDropdown(false)}
                      className="text-xs font-medium text-[#081F45] hover:text-[#E8B13C] flex items-center gap-1"
                    >
                      {t('nav.all_destinations')}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {COUNTRIES.slice(0, 10).map((country) => (
                      <Link
                        key={country.id}
                        to={`/${country.slug}`}
                        onClick={() => setDestinationsDropdown(false)}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-base">{country.flag}</span>
                        <span className="text-xs font-medium text-slate-800 group-hover:text-[#081F45]">
                          {lang === 'bn' ? country.nameBn : country.nameEn}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link
                      to="/destinations"
                      onClick={() => setDestinationsDropdown(false)}
                      className="w-full py-1.5 px-3 bg-slate-50 hover:bg-[#081F45] hover:text-white rounded-lg text-xs font-medium text-center text-slate-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>{t('nav.all_destinations')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-[#081F45] transition-colors whitespace-nowrap ${
                  location.pathname === link.path ? 'text-[#081F45] font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & Consultation CTA Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Button */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-[#081F45] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all font-bangla ${
                  lang === 'bn'
                    ? 'bg-[#081F45] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="বাংলায় পরিবর্তন করুন"
              >
                বাংলা
              </button>
            </div>

            {/* Free Consultation CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] active:bg-[#c99220] rounded-lg transition-all shadow-xs hover:shadow whitespace-nowrap"
            >
              <span>{t('nav.free_consultation')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white z-40 border-t border-slate-200 overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.home')}
            </Link>

            <Link
              to="/destinations"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>{t('nav.destinations')}</span>
              <span className="text-xs bg-slate-100 text-[#081F45] font-semibold px-2 py-0.5 rounded">
                18 Countries
              </span>
            </Link>

            <Link
              to="/universities"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.universities')}
            </Link>

            <Link
              to="/courses"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.courses')}
            </Link>

            <Link
              to="/services"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.services')}
            </Link>

            <Link
              to="/about"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/contact"
              className="text-base font-medium text-slate-800 hover:text-[#081F45] py-2 border-b border-slate-100"
            >
              {t('nav.contact')}
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full py-3 text-center text-sm font-semibold text-[#081F45] bg-[#E8B13C] rounded-lg shadow-sm"
              >
                {t('nav.free_consultation')}
              </Link>
              <a
                href="https://wa.me/8801348223630"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#25D366] rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <span>WhatsApp: +8801348223630</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
