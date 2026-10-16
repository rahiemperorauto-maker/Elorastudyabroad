import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { COURSES } from '../data/courses';
import { COMPANY_INFO } from '../data/company';
import {
  Globe2,
  Building2,
  GraduationCap,
  BookOpen,
  DollarSign,
  Calendar,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const CountryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  // Match country by slug or id
  const country = COUNTRIES.find(
    (c) => c.slug === slug || c.id === slug || `study-in-${c.id}` === slug
  );

  if (!country) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#081F45]">Destination Not Found</h2>
        <p className="text-sm text-slate-600 mt-2">
          The requested study destination could not be found.
        </p>
        <Link
          to="/destinations"
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#081F45] text-white rounded-lg text-xs font-semibold"
        >
          <span>View All 18 Destinations</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  // Related universities & courses
  const countryUniversities = UNIVERSITIES.filter((u) => u.countryId === country.id);
  const countryCourses = COURSES.filter((c) => c.countryId === country.id);

  const countryWhatsAppText = encodeURIComponent(
    lang === 'bn'
      ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি ${country.nameBn}-এ উচ্চশিক্ষা ও ভর্তি সম্পর্কিত তথ্য জানতে চাই।`
      : `Hello Elora Study Abroad, I would like to get information about studying abroad in ${country.nameEn}.`
  );

  return (
    <div>
      <SEOHead
        title={`Study in ${country.nameEn} - Universities, Fees & Visa Guide`}
        description={`Complete guide to studying in ${country.nameEn}. Admission requirements, English proficiency, verified tuition fees, living costs, and student visa guidance.`}
        canonicalPath={`/${country.slug}`}
      />

      {/* Country Hero Header */}
      <section className="relative bg-[#081F45] text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081F45] via-[#102D58] to-[#081F45] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8B13C] mb-3">
            <Link to="/destinations" className="hover:underline">
              Destinations
            </Link>
            <span>/</span>
            <span>{country.region}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{country.flag}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  {lang === 'bn' ? `স্টাডি ইন ${country.nameBn}` : `Study in ${country.nameEn}`}
                </h1>
              </div>
              <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
                {lang === 'bn' ? country.overviewBn : country.overviewEn}
              </p>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="shrink-0 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${countryWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে পরামর্শ নিন' : `Inquire on WhatsApp`}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sticky Sub-bar / Key Facts */}
      <div className="bg-white border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">Capital: </span>
              <span>{country.capital}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900">Currency: </span>
              <span>{country.currency}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-900">Main Intake: </span>
              <span>{country.intakesEn.split(',')[0]}</span>
            </div>
          </div>

          <div>
            <a
              href="#consultation-form"
              className="font-semibold text-[#081F45] hover:text-[#E8B13C] flex items-center gap-1"
            >
              <span>{t('form.title')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main 8-Column Articles */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Why Study in this country */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#E8B13C]" />
                <span>{lang === 'bn' ? `কেন ${country.nameBn}-এ পড়বেন?` : `Why Study in ${country.nameEn}?`}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {(lang === 'bn' ? country.whyStudyBn : country.whyStudyEn).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F7FB]">
                    <span className="w-2 h-2 rounded-full bg-[#E8B13C] mt-1.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Education System & Degree Levels */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-3 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#081F45]" />
                <span>{lang === 'bn' ? 'শিক্ষাব্যবস্থা ও ডিগ্রি লেভেল' : 'Education System & Degree Levels'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === 'bn' ? country.educationSystemBn : country.educationSystemEn}
              </p>

              <div className="mt-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Available Degree Qualifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {country.degreeLevels.map((lvl) => (
                    <span
                      key={lvl}
                      className="px-3 py-1.5 bg-[#F5F7FB] border border-slate-200 text-[#081F45] text-xs font-semibold rounded-lg"
                    >
                      {lvl}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Admission & English Language Requirements */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#081F45]" />
                <span>{lang === 'bn' ? 'ভর্তি যোগ্যতা ও ইংরেজি ভাষা দক্ষতা' : 'Admission & English Language Criteria'}</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/80">
                  <div className="font-bold text-[#081F45] mb-1">
                    {lang === 'bn' ? 'সাধারণ শিক্ষাগত যোগ্যতা:' : 'General Academic Prerequisites:'}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {lang === 'bn' ? country.generalRequirementsBn : country.generalRequirementsEn}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/80">
                  <div className="font-bold text-[#081F45] mb-1">
                    {lang === 'bn' ? 'ইংরেজি ভাষা স্কোর (IELTS / PTE / TOEFL):' : 'English Language Requirements:'}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {lang === 'bn' ? country.englishRequirementsBn : country.englishRequirementsEn}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Estimated Tuition Fees & Cost of Living */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-[#E8B13C]" />
                <span>{lang === 'bn' ? 'টিউশন ফি ও জীবনযাত্রার খরচ' : 'Verified Tuition & Living Cost Ranges'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60">
                  <div className="font-bold text-amber-900 mb-1">
                    {lang === 'bn' ? 'বাৎসরিক আনুমানিক টিউশন ফি' : 'Estimated Annual Tuition'}
                  </div>
                  <p className="text-amber-950 font-medium">
                    {lang === 'bn' ? country.estimatedTuitionBn : country.estimatedTuitionEn}
                  </p>
                  <p className="text-[11px] text-amber-700 mt-2">
                    *Fees vary significantly by university, degree level, and laboratory requirements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-[#081F45] mb-1">
                    {lang === 'bn' ? 'জীবনযাত্রার ব্যয় (থাকা-খাওয়া)' : 'Living Expenses & Maintenance'}
                  </div>
                  <p className="text-slate-700 font-medium">
                    {lang === 'bn' ? country.estimatedLivingBn : country.estimatedLivingEn}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-2">
                    *Covers student accommodation, meals, insurance, and transit.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Scholarships & Intakes */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#E8B13C]" />
                <span>{lang === 'bn' ? 'স্কলারশিপ ও ইনটেক তথ্য' : 'Scholarships & Application Intakes'}</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-[#081F45] mb-1">
                    {lang === 'bn' ? 'স্কলারশিপ সুযোগ:' : 'Scholarship Opportunities:'}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {lang === 'bn' ? country.scholarshipsBn : country.scholarshipsEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-bold text-[#081F45] mb-1">
                    {lang === 'bn' ? 'প্রধান ইনটেকসমূহ:' : 'Primary Admission Intakes:'}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {lang === 'bn' ? country.intakesBn : country.intakesEn}
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Student Visa Guidance & Official Link */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#081F45] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#081F45]" />
                <span>{lang === 'bn' ? 'স্টুডেন্ট ভিসা নির্দেশিকা' : 'Student Visa & Immigration Overview'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {lang === 'bn' ? country.visaGuidanceBn : country.visaGuidanceEn}
              </p>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-blue-950">Official Government Authority:</div>
                  <div className="text-blue-800">{country.officialSourceName}</div>
                </div>
                <a
                  href={country.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold inline-flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Official Visa Rules</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </section>

            {/* 7. Universities in this country */}
            {countryUniversities.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#081F45]">
                    {lang === 'bn'
                      ? `${country.nameBn}-এর বিশ্ববিদ্যালয়সমূহ`
                      : `Universities in ${country.nameEn}`}
                  </h2>
                  <Link
                    to="/universities"
                    className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] flex items-center gap-1"
                  >
                    <span>View Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {countryUniversities.map((uni) => (
                    <div
                      key={uni.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-[#081F45]/30 hover:shadow-xs transition-all bg-[#F5F7FB]"
                    >
                      <h3 className="font-bold text-[#081F45] text-sm mb-1">{uni.name}</h3>
                      <div className="text-xs text-slate-500 mb-2">{uni.city}</div>
                      <div className="text-xs text-slate-600 mb-3 line-clamp-2">
                        {lang === 'bn' ? uni.overviewBn : uni.overviewEn}
                      </div>
                      <Link
                        to={`/universities/${uni.slug}`}
                        className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] inline-flex items-center gap-1"
                      >
                        <span>{t('common.view_details')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right 4-Column Sticky Consultation Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <LeadConsultationForm
                defaultCountry={country.id}
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
