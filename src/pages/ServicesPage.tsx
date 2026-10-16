import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../data/services';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import {
  Building2,
  GraduationCap,
  Send,
  FileText,
  ShieldCheck,
  Award,
  MessageSquare,
  Compass,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    GraduationCap,
    Send,
    FileText,
    ShieldCheck,
    Award,
    MessageSquare,
    Compass,
    Users
  };

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Our Services - Comprehensive Student Advisory"
        description="Explore Elora Study Abroad's 9 core services: University Selection, Course Matching, Application Guidance, SOP Drafting, Visa Guidance, Scholarships, and Pre-departure."
        canonicalPath="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Professional Education Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'আমাদের পূর্ণাঙ্গ সেবাসমূহ' : 'Our Comprehensive Student Services'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'প্রাথমিক প্রোফাইল মূল্যায়ন থেকে শুরু করে বিশ্ববিদ্যালয়ে ভর্তি, ভিসা ডকুমেন্টেশন এবং বিদেশে পৌঁছানোর সার্বিক প্রস্তুতিতে আমরা শিক্ষার্থীদের পাশে থাকি।'
              : 'End-to-end guidance from preliminary university shortlisting through to visa filing and campus arrival. Ethical, transparent, and student-centered.'}
          </p>
        </div>

        {/* Services Grid (9 Core Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || GraduationCap;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#081F45] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[#E8B13C]" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#081F45] mb-2 leading-snug">
                    {lang === 'bn' ? service.titleBn : service.titleEn}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {lang === 'bn' ? service.fullDescBn : service.fullDescEn}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Inclusions:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {(lang === 'bn' ? service.deliverablesBn : service.deliverablesEn).map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B13C] mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href="#consultation-form"
                    className="w-full py-2.5 px-3 bg-[#F5F7FB] hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{lang === 'bn' ? 'এই সেবার জন্য কাউন্সেলিং নিন' : 'Request Consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Standards Banner */}
        <div className="bg-[#081F45] text-white rounded-2xl p-8 mb-16 border border-slate-700">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E8B13C] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Ethical Consulting Pledge</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {lang === 'bn'
                ? 'সততা ও স্বচ্ছতার সাথে শিক্ষার্থীদের ভবিষ্যৎ নির্মাণ'
                : 'Our Commitment to Complete Academic Transparency'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'bn'
                ? 'ইলোরা স্টাডি অ্যাব্রোড কোনো বিভ্রান্তিকর বা অযৌক্তিক ভর্তির গ্যারান্টি প্রদান করে না। আমরা প্রতিটি আবেদন নিয়ম অনুযায়ী সর্বোচ্চ নিষ্ঠার সাথে প্রস্তুত করি।'
                : 'Elora Study Abroad maintains strict educational standards. We never guarantee admissions or student visa approvals. We empower applicants through authentic information, error-free documentation, and diligent adherence to sovereign immigration regulations.'}
            </p>
          </div>
        </div>

        {/* Embedded Consultation Form */}
        <div className="max-w-4xl mx-auto">
          <LeadConsultationForm />
        </div>
      </div>
    </div>
  );
};
