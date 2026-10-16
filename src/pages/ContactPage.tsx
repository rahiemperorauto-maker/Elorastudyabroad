import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { LeadConsultationForm } from '../components/LeadConsultationForm';
import { COMPANY_INFO } from '../data/company';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Building2,
  Globe2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Contact Us - Dhaka & Toronto Offices"
        description="Connect with Elora Study Abroad. Visit our Dhaka office at 128 Lake Circus, Kalabagan or Toronto office at 166 Wallace Avenue. WhatsApp: +8801348223630."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Direct Advisory Access
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'যোগাযোগ করুন' : 'Connect with Elora Study Abroad'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'আমাদের ঢাকা বা টরন্টো অফিসে সরাসরি আসুন, ফোনে কথা বলুন অথবা অনলাইনে বিনামূল্যে স্টুডেন্ট কাউন্সেলিংয়ের জন্য আবেদন করুন।'
              : 'Visit our offices in Dhaka, Bangladesh and Toronto, Canada, chat via WhatsApp, or submit your academic inquiry online.'}
          </p>
        </div>

        {/* Office Location Cards (Dhaka & Toronto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {COMPANY_INFO.offices.map((office) => (
            <div
              key={office.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:border-[#081F45]/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {office.city}, {office.country}
                    </span>
                    <h2 className="text-xl font-bold text-[#081F45]">
                      {lang === 'bn' ? office.titleBn : office.title}
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#081F45] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#E8B13C]" />
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#081F45] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Physical Address:</div>
                      <div className="mt-0.5">{lang === 'bn' ? office.addressBn : office.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#E8B13C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Direct Telephone:</div>
                      <a
                        href={office.phoneCall}
                        className="text-[#081F45] hover:text-[#E8B13C] font-mono font-bold mt-0.5 block"
                      >
                        {office.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Visiting Hours:</div>
                      <div className="mt-0.5">{lang === 'bn' ? office.hoursBn : office.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Inquiry Email:</div>
                      <div className="mt-0.5 text-slate-700">{office.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={office.phoneCall}
                  className="px-4 py-2 bg-[#081F45] hover:bg-[#102D58] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E8B13C]" />
                  <span>Call {office.city}</span>
                </a>

                {office.id === 'bangladesh' && (
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                )}

                <a
                  href={office.mapQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Map Location</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <LeadConsultationForm />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#081F45]">
                {lang === 'bn' ? 'হোয়াটসঅ্যাপ সরাসরি কাউন্সেলিং' : 'Fast WhatsApp Advising'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need immediate answers about IELTS waivers, upcoming intake deadlines, or country eligibility? Chat directly with an educational counselor.
              </p>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: +8801348223630</span>
              </a>
            </div>

            <div className="bg-[#081F45] text-white rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold text-[#E8B13C]">
                Visiting Guidelines:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prior appointment is recommended to ensure a dedicated senior education counselor is reserved for your personalized evaluation.
              </p>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-700">
                Official Web: <span className="text-white font-medium">elorastudyaboard.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
