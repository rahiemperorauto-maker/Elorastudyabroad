import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Privacy Policy - Elora Study Abroad"
        description="Review our transparent privacy commitment regarding student academic data protection and confidentiality."
        canonicalPath="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#081F45] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#E8B13C]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#081F45]">
                {lang === 'bn' ? 'গোপনীয়তা ও তথ্য সুরক্ষা নীতি' : 'Privacy & Student Data Policy'}
              </h1>
              <p className="text-xs text-slate-500">Effective Date: October 2026</p>
            </div>
          </div>

          <div className="space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-base font-bold text-[#081F45] mb-1.5">
                1. Information We Collect
              </h2>
              <p>
                Elora Study Abroad collects contact information (name, email address, phone/WhatsApp number) and voluntary educational records (current qualification, GPA, target degree level, and subject preferences) exclusively to facilitate educational counseling and university application submissions.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#081F45] mb-1.5">
                2. No Collection of Sensitive Credentials
              </h2>
              <p>
                In strict adherence to ethical standards, this public website never collects passport scans, financial bank login credentials, credit card details, or national identity cards. Document submissions for formal university filings occur under direct counselor oversight through verified, secure transmission channels.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#081F45] mb-1.5">
                3. Purpose of Data Processing
              </h2>
              <p>
                Your inquiry data is utilized solely to provide requested study abroad advising, match institutional prerequisites, communicate upcoming university application deadlines, and assist with admission documentation. We never sell, lease, or distribute student records to third-party commercial marketing entities.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#081F45] mb-1.5">
                4. Data Storage & Security
              </h2>
              <p>
                Inquiries submitted through our forms are processed with industry-standard TLS encryption. Server communications are safeguarded against spam bots via honeypot filtering and rate-limiting protocols.
              </p>
            </div>

            <div>
              <h2 className="text-base font-bold text-[#081F45] mb-1.5">
                5. Contact Regarding Your Data
              </h2>
              <p>
                If you wish to review, update, or request the deletion of your consultation contact details, please contact our administrative team at <span className="font-semibold text-slate-800">admissions@elorastudyaboard.com</span> or visit our Dhaka or Toronto offices.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              to="/"
              className="text-xs font-semibold text-[#081F45] hover:text-[#E8B13C] inline-flex items-center gap-1"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
