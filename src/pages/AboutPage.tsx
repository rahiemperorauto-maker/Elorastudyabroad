import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';
import {
  Globe2,
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="About Us - Elora Study Abroad"
        description="Learn about Elora Study Abroad: our student-centered philosophy, mission, vision, and dual global offices in Dhaka, Bangladesh and Toronto, Canada."
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Our Identity & Philosophy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'ইলোরা স্টাডি অ্যাব্রোড সম্পর্কে' : 'About Elora Study Abroad'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'সততা, স্বচ্ছতা এবং নির্ভরযোগ্য দিকনির্দেশনার মাধ্যমে শিক্ষার্থীদের বৈশ্বিক উচ্চশিক্ষার পথ সুগম করাই আমাদের অঙ্গীকার।'
              : 'Dedicated to empowering aspiring students with objective university counseling, reliable course discovery, and meticulous documentation guidance.'}
          </p>
        </div>

        {/* Section 1: Who We Are Split with Real Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E8B13C]">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081F45]">
              {lang === 'bn'
                ? 'একটি দায়িত্বশীল ও আন্তর্জাতিক শিক্ষা পরামর্শক প্রতিষ্ঠান'
                : 'A Dedicated Global Education Consultancy'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'bn'
                ? 'ইলোরা স্টাডি অ্যাব্রোড একটি নির্ভরযোগ্য আন্তর্জাতিক শিক্ষার্থী পরামর্শক প্রতিষ্ঠান। আমাদের মূল লক্ষ্য শিক্ষার্থীদের শিক্ষাগত পটভূমি, মেধা এবং দীর্ঘমেয়াদী লক্ষ্য বিবেচনা করে ১৮টি শীর্ষ দেশের মধ্য থেকে উপযুক্ত বিশ্ববিদ্যালয় ও প্রোগ্রামে ভর্তির বাস্তবমুখী সমাধান দেওয়া।'
                : 'Elora Study Abroad operates as a transparent education advisory bridge connecting students from Bangladesh and worldwide with accredited universities across Canada, the UK, Australia, the USA, Europe, and Asia.'}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'bn'
                ? 'আমরা কোনো ধরণের মিথ্যা প্রতিশ্রুতি বা ভিত্তিহীন ভিসা গ্যারান্টিতে বিশ্বাস করি না। প্রতিটি আবেদনকারীকে আমরা সততা, স্বচ্ছ তথ্য এবং প্রাতিষ্ঠানিক নির্দেশিকার ভিত্তিতে দিকনির্দেশনা প্রদান করি।'
                : 'Our consultancy rejects artificial gimmicks and unverified claims. We prioritize student welfare, delivering structured evaluations that match academic credentials to verified institutional entry requirements.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#081F45] hover:bg-[#102D58] text-white rounded-xl text-xs font-semibold transition-colors shadow-xs"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8B13C]" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-300 hover:border-[#081F45] text-slate-800 rounded-xl text-xs font-semibold transition-colors"
              >
                <span>Visit Our Offices</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 aspect-[16/10] bg-slate-100">
              <img
                src="/src/assets/images/student_consultation_advising_1792003840438.jpg"
                alt="Educational consultation advising session at Elora Study Abroad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#081F45] flex items-center justify-center">
              <Target className="w-6 h-6 text-[#E8B13C]" />
            </div>
            <h3 className="text-xl font-bold text-[#081F45]">
              {lang === 'bn' ? 'আমাদের লক্ষ্য (Our Mission)' : 'Our Mission'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'bn'
                ? 'বিশ্বমানের আন্তর্জাতিক উচ্চশিক্ষাকে উচ্চাভিলাষী শিক্ষার্থীদের জন্য স্বচ্ছ, সহজপ্রাপ্য এবং নির্ভেজাল দিকনির্দেশনার মাধ্যমে সফল করে তোলা।'
                : 'To demystify international education by providing unbiased, merit-based, and compassionate guidance that aligns each student’s academic aptitude with high-value global universities.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#081F45] flex items-center justify-center">
              <Eye className="w-6 h-6 text-[#E8B13C]" />
            </div>
            <h3 className="text-xl font-bold text-[#081F45]">
              {lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি (Our Vision)' : 'Our Vision'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'bn'
                ? 'দক্ষিণ এশিয়া ও উত্তর আমেরিকার মধ্যে সততা, পেশাদারিত্ব ও ছাত্রবান্ধব সেবায় সর্বাধিক বিশ্বস্ত আন্তর্জাতিক শিক্ষা পরামর্শক হিসেবে প্রতিষ্ঠা লাভ করা।'
                : 'To be universally recognized as the most dependable and ethical cross-border student consultancy connecting emerging global scholars with life-transforming academic futures.'}
            </p>
          </div>
        </div>

        {/* Section 3: Global Presence (Dhaka & Toronto Offices) */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
              Cross-Border Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#081F45] mt-1.5">
              {lang === 'bn' ? 'আমাদের বৈশ্বিক উপস্থিতি' : 'Our Global Presence'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              With offices in Dhaka, Bangladesh and Toronto, Canada, we offer local consultation before departure and overseas connectivity on the ground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANY_INFO.offices.map((office) => (
              <div
                key={office.id}
                className="p-6 rounded-2xl bg-[#F5F7FB] border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#081F45]">
                    {lang === 'bn' ? office.titleBn : office.title}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-white font-medium text-slate-600 border border-slate-200">
                    {office.city}, {office.country}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#081F45] shrink-0 mt-0.5" />
                    <span>{lang === 'bn' ? office.addressBn : office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E8B13C] shrink-0" />
                    <a href={office.phoneCall} className="hover:text-[#081F45] font-semibold text-slate-800">
                      {office.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Globe2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{lang === 'bn' ? office.hoursBn : office.hours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={office.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] inline-flex items-center gap-1"
                  >
                    <span>View Location on Map</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Student-Centered Approach */}
        <div className="bg-[#081F45] text-white rounded-2xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E8B13C]">
                Core Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                {lang === 'bn' ? 'শিক্ষার্থীকেন্দ্রিক আমাদের নীতিমালা' : 'Our Student-Centered Approach'}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                  <span>
                    <strong>Personalized Advising:</strong> Every student has unique academic strengths, budget limits, and life goals. We never enforce cookie-cutter recommendations.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero False Claims:</strong> We strictly avoid fabricated scholarship numbers, fake rankings, or illegitimate admission promises.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                  <span>
                    <strong>Authentic Documentation:</strong> We instruct students on compiling genuine financial evidence and writing genuine Statements of Purpose.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-[4/3]">
                <img
                  src="/src/assets/images/graduation_celebration_1792003840507.jpg"
                  alt="Graduation success celebration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8B13C] hover:bg-[#dba129] text-[#081F45] rounded-xl text-sm font-bold shadow-sm transition-colors"
          >
            <span>{t('nav.free_consultation')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
