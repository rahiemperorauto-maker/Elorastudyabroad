import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { EloraLogo } from './EloraLogo';
import { COMPANY_INFO } from '../data/company';
import { COUNTRIES } from '../data/countries';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#081F45] text-white pt-16 pb-12 border-t border-[#102D58]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-700/50">
          {/* Column 1 & 2: Brand Lockup & Global Offices */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block">
              <EloraLogo theme="dark" size="lg" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {t('brand.description')}
            </p>

            {/* Offices Cards (Dhaka & Toronto) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMPANY_INFO.offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-[#102D58]/70 border border-slate-600/40 rounded-xl p-4 text-xs space-y-2 hover:border-[#E8B13C]/50 transition-colors"
                >
                  <div className="font-semibold text-[#E8B13C] text-sm flex items-center justify-between">
                    <span>{lang === 'bn' ? office.titleBn : office.title}</span>
                  </div>
                  <div className="text-slate-200 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span>{lang === 'bn' ? office.addressBn : office.address}</span>
                  </div>
                  <div className="text-slate-200 flex items-center gap-1.5 pt-1">
                    <Phone className="w-3.5 h-3.5 text-[#E8B13C] shrink-0" />
                    <a
                      href={office.phoneCall}
                      className="hover:text-[#E8B13C] transition-colors font-medium"
                    >
                      {office.phoneDisplay}
                    </a>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    {lang === 'bn' ? office.hoursBn : office.hours}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-slate-200 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-slate-200 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-slate-200 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#102D58] hover:bg-[#E8B13C] hover:text-[#081F45] text-slate-200 transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E8B13C]">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/universities" className="hover:text-white transition-colors">
                  {t('nav.universities')}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  {t('footer.faqs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Study Destinations */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E8B13C]">
              {t('footer.destinations')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {COUNTRIES.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/${c.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.flag}</span>
                    <span>{lang === 'bn' ? c.nameBn : c.nameEn}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/destinations"
                  className="text-[#E8B13C] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>{t('footer.view_all_countries')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Our Services & Direct Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#E8B13C]">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/services#university-selection" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'বিশ্ববিদ্যালয় নির্বাচন' : 'University Selection'}
                </Link>
              </li>
              <li>
                <Link to="/services#course-selection" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ক্যারিয়ারভিত্তিক কোর্স বাছাই' : 'Course Selection'}
                </Link>
              </li>
              <li>
                <Link to="/services#application-guidance" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'আবেদন নির্দেশনা' : 'Application Guidance'}
                </Link>
              </li>
              <li>
                <Link to="/services#admission-documentation" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'এসওপি ও সিভি প্রস্তুতি' : 'SOP & Documentation'}
                </Link>
              </li>
              <li>
                <Link to="/services#visa-documentation" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ভিসা ডকুমেন্টেশন প্রস্তুতি' : 'Visa Documentation'}
                </Link>
              </li>
              <li>
                <Link to="/services#scholarship-guidance" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'স্কলারশিপ কাউন্সেলিং' : 'Scholarship Guidance'}
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20b858] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <span>{t('common.chat_whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Disclaimer */}
        <div className="py-6 border-b border-slate-700/40 text-[11px] text-slate-400 leading-relaxed">
          <p>{t('footer.disclaimer')}</p>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-4 text-slate-300">
            <Link to="/privacy" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <span>•</span>
            <Link to="/faqs" className="hover:text-white transition-colors">
              {t('footer.faqs')}
            </Link>
            <span>•</span>
            <a
              href="https://elorastudyaboard.com"
              className="text-[#E8B13C] hover:underline"
            >
              elorastudyaboard.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
