import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { UNIVERSITIES } from '../data/universities';
import { COURSES } from '../data/courses';
import { COUNTRIES } from '../data/countries';
import { COMPANY_INFO } from '../data/company';
import {
  Building2,
  MapPin,
  ExternalLink,
  GraduationCap,
  BookOpen,
  DollarSign,
  Calendar,
  Award,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const UniversityDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const university = UNIVERSITIES.find((u) => u.slug === slug || u.id === slug);

  if (!university) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#081F45]">University Not Found</h2>
        <p className="text-sm text-slate-600 mt-2">
          The requested university profile could not be located.
        </p>
        <Link
          to="/universities"
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#081F45] text-white rounded-lg text-xs font-semibold"
        >
          <span>Return to University Directory</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  const relatedCountry = COUNTRIES.find((c) => c.id === university.countryId);
  const universityCourses = COURSES.filter((c) => c.universityId === university.id);

  const uniWhatsAppText = encodeURIComponent(
    lang === 'bn'
      ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি ${university.nameBn} (${university.name})-এ ভর্তির যোগ্যতা ও কোর্স সম্পর্কে কাউন্সেলিং নিতে চাই।`
      : `Hello Elora Study Abroad, I am interested in admission requirements and application procedures for ${university.name} in ${university.countryName}.`
  );

  return (
    <div>
      <SEOHead
        title={`${university.name} - Admission & Programs`}
        description={`Admission requirements, English language criteria, courses, and application guide for ${university.name} in ${university.city}, ${university.countryName}.`}
        canonicalPath={`/universities/${university.slug}`}
      />

      {/* University Hero Header */}
      <section className="relative bg-[#081F45] text-white py-14 md:py-18 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081F45] via-[#102D58] to-[#081F45] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8B13C] mb-3">
            <Link to="/universities" className="hover:underline">
              Universities
            </Link>
            <span>/</span>
            {relatedCountry && (
              <Link to={`/${relatedCountry.slug}`} className="hover:underline">
                {relatedCountry.nameEn}
              </Link>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                <MapPin className="w-4 h-4 text-[#E8B13C]" />
                <span>{university.city}, {university.countryName}</span>
                <span>•</span>
                <span>{university.type} University</span>
                <span>•</span>
                <span>Est. {university.establishedYear}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {lang === 'bn' ? university.nameBn : university.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
                {lang === 'bn' ? university.overviewBn : university.overviewEn}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-slate-500/50 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                <span>Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${uniWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Advising</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main 8-Column Profile */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Admission Guidance */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl font-bold text-[#081F45] mb-3 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#E8B13C]" />
                <span>{lang === 'bn' ? 'ভর্তি যোগ্যতা ও গাইডলাইন' : 'Admission Guidance & Criteria'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {lang === 'bn' ? university.admissionGuidanceBn : university.admissionGuidanceEn}
              </p>

              <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#081F45] shrink-0">English Language Requirements:</span>
                  <span className="text-slate-600">
                    {lang === 'bn' ? university.englishRequirementsBn : university.englishRequirementsEn}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#081F45] shrink-0">Upcoming Intakes:</span>
                  <span className="text-slate-600">{university.intakes.join(', ')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-[#081F45] shrink-0">Estimated Tuition:</span>
                  <span className="text-slate-600">
                    {lang === 'bn' ? university.tuitionRangeBn : university.tuitionRangeEn}
                  </span>
                </div>
              </div>
            </section>

            {/* 2. Available Degree Levels */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl font-bold text-[#081F45] mb-3 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#081F45]" />
                <span>Available Study Levels</span>
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {university.degreeLevels.map((lvl) => (
                  <span
                    key={lvl}
                    className="px-3 py-1.5 bg-[#F5F7FB] border border-slate-200 text-[#081F45] text-xs font-semibold rounded-lg"
                  >
                    {lvl}
                  </span>
                ))}
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 mt-4">
                Key Verified Disciplines
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {university.popularSubjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </section>

            {/* 3. Verified Courses Offered at this Institution */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#081F45]">
                  {lang === 'bn' ? 'উপলব্ধ ডিগ্রি কোর্সসমূহ' : 'Available Verified Courses'}
                </h2>
                <Link
                  to="/courses"
                  className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] flex items-center gap-1"
                >
                  <span>All Courses Finder</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {universityCourses.length > 0 ? (
                <div className="space-y-3">
                  {universityCourses.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-xl border border-slate-200 bg-[#F5F7FB] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {c.degreeLevel}
                          </span>
                          <span className="text-[11px] text-slate-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lang === 'bn' ? c.durationBn : c.durationEn}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-[#081F45]">{c.name}</h3>
                        <div className="text-xs text-slate-500 mt-0.5">
                          Tuition: <span className="font-semibold text-slate-700">{lang === 'bn' ? c.tuitionBn : c.tuitionEn}</span>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <Link
                          to={`/courses/${c.id}`}
                          className="px-3 py-1.5 bg-white border border-slate-300 hover:border-[#081F45] text-xs font-semibold text-[#081F45] rounded-lg transition-colors"
                        >
                          View Details
                        </Link>
                        <a
                          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                            `Hello Elora, I want details about ${c.name} at ${university.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#E8B13C] hover:bg-[#dba129] text-xs font-semibold text-[#081F45] rounded-lg transition-colors"
                        >
                          Ask Elora
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <p className="text-xs text-slate-600 mb-2">
                    Additional specific program records for this institution are confirmed on a case-by-case basis based on student transcript evaluation.
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${uniWhatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#081F45] hover:text-[#E8B13C]"
                  >
                    <span>Request Custom Course Verification on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>

            {/* 4. Official Notice & Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 leading-relaxed border border-slate-200">
              <span className="font-semibold text-slate-800">Notice: </span>
              Elora Study Abroad provides independent educational consulting and application assistance. Admission requirements, quotas, and tuition rates are determined solely by {university.name}.
            </div>
          </div>

          {/* Right 4-Column Consultation Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <LeadConsultationForm
                defaultCountry={university.countryId}
                defaultUniversity={university.name}
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
