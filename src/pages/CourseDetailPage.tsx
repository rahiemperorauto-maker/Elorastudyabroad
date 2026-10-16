import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { COURSES } from '../data/courses';
import { UNIVERSITIES } from '../data/universities';
import { COUNTRIES } from '../data/countries';
import { COMPANY_INFO } from '../data/company';
import {
  BookOpen,
  Building2,
  Globe2,
  Clock,
  DollarSign,
  Calendar,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLanguage();

  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#081F45]">Course Not Found</h2>
        <p className="text-sm text-slate-600 mt-2">
          The requested course record could not be found in our database.
        </p>
        <Link
          to="/courses"
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#081F45] text-white rounded-lg text-xs font-semibold"
        >
          <span>Return to Course Finder</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  const university = UNIVERSITIES.find((u) => u.id === course.universityId);
  const country = COUNTRIES.find((c) => c.id === course.countryId);

  const courseWhatsAppText = encodeURIComponent(
    lang === 'bn'
      ? `হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি ${course.nameBn} (${course.name})-এ ভর্তির আবেদন ও প্রয়োজনীয় যোগ্যতা সম্পর্কে জানতে চাই।`
      : `Hello Elora Study Abroad, I would like guidance on applying for "${course.name}" at ${course.universityName} (${course.countryName}).`
  );

  return (
    <div>
      <SEOHead
        title={`${course.name} - ${course.universityName}`}
        description={`${course.name} at ${course.universityName}, ${course.countryName}. Tuition, duration, entry requirements, and application advising with Elora Study Abroad.`}
        canonicalPath={`/courses/${course.id}`}
      />

      {/* Hero Header */}
      <section className="relative bg-[#081F45] text-white py-14 md:py-18 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#081F45] via-[#102D58] to-[#081F45] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8B13C] mb-3">
            <Link to="/courses" className="hover:underline">
              Courses
            </Link>
            <span>/</span>
            <span>{course.subjectCategory}</span>
            <span>/</span>
            <span>{course.degreeLevel}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-[#102D58] border border-slate-600 font-semibold text-[#E8B13C]">
                  {course.degreeLevel}
                </span>
                <span>•</span>
                <span>{course.universityName}</span>
                <span>•</span>
                <span>{course.countryName}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {lang === 'bn' ? course.nameBn : course.name}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
                {lang === 'bn' ? course.overviewBn : course.overviewEn}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${courseWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Elora on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main 8-Column Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Duration
                  </div>
                  <div className="text-sm font-bold text-[#081F45]">
                    {lang === 'bn' ? course.durationBn : course.durationEn}
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Tuition Fee
                  </div>
                  <div className="text-sm font-bold text-[#081F45]">
                    {lang === 'bn' ? course.tuitionBn : course.tuitionEn}
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Primary Intake
                  </div>
                  <div className="text-sm font-bold text-[#081F45]">
                    {lang === 'bn' ? course.intakeBn : course.intakeEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Entry Prerequisites */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <h2 className="text-xl font-bold text-[#081F45] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#E8B13C]" />
                <span>Entry & Language Prerequisites</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {lang === 'bn' ? course.entryRequirementsBn : course.entryRequirementsEn}
              </p>
            </section>

            {/* University Summary Card */}
            {university && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Awarding Institution
                    </span>
                    <h3 className="text-xl font-bold text-[#081F45]">{university.name}</h3>
                    <div className="text-xs text-slate-500">{university.city}, {university.countryName}</div>
                  </div>

                  <Link
                    to={`/universities/${university.slug}`}
                    className="px-4 py-2 bg-slate-100 hover:bg-[#081F45] hover:text-white text-xs font-semibold text-[#081F45] rounded-xl transition-colors inline-flex items-center gap-1"
                  >
                    <span>View University Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'bn' ? university.overviewBn : university.overviewEn}
                </p>
              </section>
            )}

            {/* Step-by-step Application assistance */}
            <section className="bg-[#F5F7FB] rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-bold text-[#081F45] mb-2">
                How Elora Study Abroad Assists Your Application:
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B13C]" />
                  <span>Transcript credential evaluation and minimum prerequisite check</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B13C]" />
                  <span>Statement of Purpose (SOP) drafting guidance with zero plagiarism</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8B13C]" />
                  <span>Application deadline monitoring and direct institutional portal submission</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Right 4-Column Consultation Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <LeadConsultationForm
                defaultCountry={course.countryId}
                defaultUniversity={course.universityName}
                defaultSubject={course.subjectCategory}
                className="shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
