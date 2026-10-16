import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { StudentJourney } from '../components/StudentJourney';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { SERVICES } from '../data/services';
import { FAQS } from '../data/faqs';
import { COMPANY_INFO } from '../data/company';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Building2,
  GraduationCap,
  ShieldCheck,
  Compass,
  MapPin,
  MessageCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();

  // Top 6 featured destinations
  const featuredCountries = COUNTRIES.slice(0, 6);
  // Top 4 universities spotlight
  const spotlightUniversities = UNIVERSITIES.slice(0, 4);

  return (
    <div>
      <SEOHead
        title="DREAM • EXPLORE • ACHIEVE"
        description="Explore accredited universities, discover your ideal course, and prepare your study visa with trusted guidance from Elora Study Abroad."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#081F45] text-white pt-12 pb-20 md:py-24 lg:py-28">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081F45] via-[#102D58] to-[#081F45] opacity-95" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8B13C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#102D58] border border-slate-700/60 text-xs font-semibold text-[#E8B13C]">
                <span>🎓</span>
                <span>{t('brand.tagline')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('hero.title')}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  to="/destinations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] active:bg-[#c99220] rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <span>{t('hero.btn_destinations')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/universities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#102D58] hover:bg-[#183d73] border border-slate-600/60 rounded-xl transition-all"
                >
                  <Building2 className="w-4 h-4 text-[#E8B13C]" />
                  <span>{t('hero.btn_universities')}</span>
                </Link>

                <a
                  href="#consultation-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-transparent hover:bg-white/5 border border-slate-700 rounded-xl transition-all"
                >
                  <span>{t('hero.btn_consultation')}</span>
                </a>
              </div>

              {/* Key Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-700/50 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#E8B13C]">18</div>
                  <div className="text-xs text-slate-300 font-medium">Study Destinations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#E8B13C]">500+</div>
                  <div className="text-xs text-slate-300 font-medium">Verified Programs</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#E8B13C]">2 Global</div>
                  <div className="text-xs text-slate-300 font-medium">Offices: BD & Canada</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#E8B13C]">100%</div>
                  <div className="text-xs text-slate-300 font-medium">Honest Guidance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 aspect-[16/10] lg:aspect-[4/3] group">
                <img
                  src="/src/assets/images/hero_global_education_1792003839912.jpg"
                  alt="International university students walking on a prestigious historic campus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081F45]/90 via-[#081F45]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-[#081F45] shadow-lg border border-white/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Admissions Advisory
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {lang === 'bn'
                      ? 'যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির প্রস্তুতি'
                      : 'Connecting ambitious students to accredited world-class universities'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <Globe2 className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.countries_count')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.countries_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <Building2 className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.verified_unis')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.verified_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <MapPin className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.dual_offices')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.dual_desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/60">
              <div className="p-2.5 rounded-lg bg-[#081F45] text-white shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#E8B13C]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#081F45]">{t('trust.honest_guidance')}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{t('trust.honest_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Study Destinations */}
      <section className="py-16 md:py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Explore Destinations
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-1.5">
                {lang === 'bn' ? 'শীর্ষ উচ্চশিক্ষা গন্তব্যসমূহ' : 'Popular Study Destinations'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {lang === 'bn'
                  ? '১৮টি শীর্ষ দেশের মানসম্মত শিক্ষাব্যবস্থা, ডিগ্রি ও ভিসা নিয়মাবলী সম্পর্কে জানুন।'
                  : 'Discover verified academic criteria, post-study work rights, and living estimates across our 18 destinations.'}
              </p>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#081F45] hover:text-[#E8B13C] transition-colors"
            >
              <span>{t('nav.all_destinations')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCountries.map((country) => (
              <div
                key={country.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={country.heroImage}
                      alt={`Study in ${country.nameEn}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                      <span>{country.flag}</span>
                      <span>{country.region}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors">
                        {lang === 'bn' ? country.nameBn : country.nameEn}
                      </h3>
                      <span className="text-xs text-slate-500 font-mono">
                        {country.capital}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {lang === 'bn' ? country.overviewBn : country.overviewEn}
                    </p>

                    <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span>Intakes:</span>
                        <span className="font-medium text-slate-700">{country.intakesEn.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Currency:</span>
                        <span className="font-medium text-slate-700">{country.currency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/${country.slug}`}
                    className="w-full py-2.5 px-4 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t('common.explore_unis')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Roadmap Section */}
      <StudentJourney />

      {/* Popular Universities Spotlight */}
      <section className="py-16 md:py-24 bg-[#F5F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                World-Class Campuses
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-1.5">
                {lang === 'bn' ? 'শীর্ষস্থানীয় বিশ্ববিদ্যালয়সমূহ' : 'Curated Top Universities'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                {lang === 'bn'
                  ? 'গবেষণা, সুযোগ-সুবিধা ও বৈশ্বিক খ্যাতির ভিত্তিতে যাচাইকৃত বিশ্ববিদ্যালয়সমূহ।'
                  : 'Explore verified admission guidance, tuition estimates, and programs for world-renowned institutions.'}
              </p>
            </div>
            <Link
              to="/universities"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#081F45] hover:text-[#E8B13C] transition-colors"
            >
              <span>{lang === 'bn' ? 'সকল বিশ্ববিদ্যালয় দেখুন' : 'Explore All Universities'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightUniversities.map((uni) => (
              <div
                key={uni.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#081F45]/90 text-white text-[11px] font-semibold">
                      {uni.countryName}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-medium text-slate-500 mb-1">{uni.city}</div>
                    <h3 className="text-base font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors mb-2 leading-snug">
                      {lang === 'bn' ? uni.nameBn : uni.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {lang === 'bn' ? uni.overviewBn : uni.overviewEn}
                    </p>

                    <div className="text-[11px] text-slate-500 space-y-1">
                      <div>
                        <span className="font-semibold text-slate-700">English: </span>
                        <span>{uni.englishRequirementsEn.slice(0, 30)}...</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Type: </span>
                        <span>{uni.type} University</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/universities/${uni.slug}`}
                    className="w-full py-2 px-3 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>{t('common.view_details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Banner */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Comprehensive Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] leading-tight">
                {lang === 'bn'
                  ? 'আপনার লক্ষ্য অর্জনে আমাদের নিবেদিত সেবাসমূহ'
                  : 'Tailored Services for Every Step of Your Global Journey'}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'বিশ্ববিদ্যালয় নির্বাচন, কোর্স বাছাই, এসওপি নির্দেশনা, ভিসা ডকুমেন্টেশন এবং প্রি-ডিপার্চার প্রস্তুতি—প্রতিটি ধাপে আমরা দিচ্ছি সঠিক পথনির্দেশ।'
                  : 'From personalized university matching to rigorous documentation guidance, our advisors stand beside you with complete integrity.'}
              </p>

              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#081F45] hover:bg-[#102D58] rounded-xl transition-colors shadow-xs"
                >
                  <span>{lang === 'bn' ? 'সকল ৯টি সেবা দেখুন' : 'Explore All 9 Services'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E8B13C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.slice(0, 4).map((srv) => (
                <div
                  key={srv.id}
                  className="p-5 rounded-2xl bg-[#F5F7FB] border border-slate-200/80 hover:border-[#081F45]/30 hover:bg-white transition-all shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#081F45] text-white flex items-center justify-center mb-3">
                    <GraduationCap className="w-4 h-4 text-[#E8B13C]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#081F45] mb-1.5">
                    {lang === 'bn' ? srv.titleBn : srv.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'bn' ? srv.shortDescBn : srv.shortDescEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Student Consultation Form Section */}
      <section id="consultation-section" className="py-16 md:py-24 bg-[#081F45] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081F45] via-[#102D58] to-[#081F45] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Information */}
            <div className="lg:col-span-5 text-white space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {lang === 'bn'
                  ? 'আপনার বিদেশে উচ্চশিক্ষার স্বপ্ন পূরণ করুন'
                  : 'Begin Your Free Consultation Today'}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'bn'
                  ? 'আমাদের অভিজ্ঞ কাউন্সেলরদের সাথে আলোচনা করুন এবং ১৮টি দেশের সেরা বিকল্পটি আপনার জন্য নিশ্চিত করুন।'
                  : 'Submit your inquiry to schedule a free 1-on-1 session with our education consultants in Dhaka or Toronto.'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#102D58] flex items-center justify-center shrink-0 text-[#E8B13C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">Dhaka Office:</div>
                    <div className="text-slate-300">{COMPANY_INFO.offices[0].address}</div>
                    <div className="text-[#E8B13C] font-mono mt-0.5">{COMPANY_INFO.offices[0].phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#102D58] flex items-center justify-center shrink-0 text-[#E8B13C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">Toronto Office:</div>
                    <div className="text-slate-300">{COMPANY_INFO.offices[1].address}</div>
                    <div className="text-[#E8B13C] font-mono mt-0.5">{COMPANY_INFO.offices[1].phone}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('common.chat_whatsapp')}</span>
                </a>
              </div>
            </div>

            {/* Right Column Consultation Form */}
            <div className="lg:col-span-7">
              <LeadConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081F45] mt-1.5">
              {lang === 'bn' ? 'সাধারণ জিজ্ঞাসাসমূহ' : 'Clear Answers to Student Queries'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'bn'
                ? 'ভর্তি, খরচ এবং ভিসা সংক্রান্ত বাস্তব ও তথ্যভিত্তিক উত্তর।'
                : 'Honest, verified insights on study destinations, language requirements, and realistic costs.'}
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className="p-5 rounded-2xl bg-[#F5F7FB] border border-slate-200/80"
              >
                <h3 className="text-base font-bold text-[#081F45] mb-2">
                  {lang === 'bn' ? faq.questionBn : faq.questionEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'bn' ? faq.answerBn : faq.answerEn}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] transition-colors"
            >
              <span>{lang === 'bn' ? 'সকল প্রশ্নোত্তর দেখুন' : 'View All Frequently Asked Questions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
