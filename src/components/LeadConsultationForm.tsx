import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { SUBJECT_CATEGORIES, DEGREE_LEVELS, COMPANY_INFO } from '../data/company';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck
} from 'lucide-react';

interface LeadConsultationFormProps {
  defaultCountry?: string;
  defaultUniversity?: string;
  defaultSubject?: string;
  className?: string;
}

export const LeadConsultationForm: React.FC<LeadConsultationFormProps> = ({
  defaultCountry = '',
  defaultUniversity = '',
  defaultSubject = '',
  className = ''
}) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredCountry: defaultCountry,
    preferredUniversity: defaultUniversity,
    interestedSubject: defaultSubject,
    currentEducation: '',
    preferredIntake: '',
    message: '',
    consent: false,
    _honey: '' // Honeypot anti-spam field
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    serverDetails?: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Client-side validations
    if (!formData.fullName.trim() || formData.fullName.length < 3) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন (কমপক্ষে ৩ অক্ষর)।' : 'Please provide your full name (minimum 3 characters).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে সঠিক ইমেইল ঠিকানা দিন।' : 'Please enter a valid email address.'
      });
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে আপনার সঠিক ফোন বা হোয়াটসঅ্যাপ নম্বর দিন।' : 'Please provide a valid phone or WhatsApp number.'
      });
      return;
    }

    if (!formData.preferredCountry) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে আপনার পছন্দের দেশ নির্বাচন করুন।' : 'Please select your preferred study country.'
      });
      return;
    }

    if (!formData.interestedSubject) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে আপনার আগ্রহের বিষয় নির্বাচন করুন।' : 'Please select your interested subject area.'
      });
      return;
    }

    if (!formData.currentEducation) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে আপনার বর্তমান শিক্ষাগত যোগ্যতা নির্বাচন করুন।' : 'Please select your current education level.'
      });
      return;
    }

    if (!formData.consent) {
      setStatus({
        type: 'error',
        message: lang === 'bn' ? 'অনুগ্রহ করে সম্মতি বক্সে টিক দিন।' : 'Please check the consent box to proceed.'
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server error occurred during submission.');
      }

      setStatus({
        type: 'success',
        message: lang === 'bn' ? t('form.success_msg') : data.message || 'Your inquiry has been received!',
        serverDetails: data.note || undefined
      });

      // Clear form on success
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredCountry: defaultCountry,
        preferredUniversity: defaultUniversity,
        interestedSubject: defaultSubject,
        currentEducation: '',
        preferredIntake: '',
        message: '',
        consent: false,
        _honey: ''
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || (lang === 'bn' ? 'দুঃখিত, আবেদনটি পাঠানো সম্ভব হয়নি। পরে আবার চেষ্টা করুন।' : 'Submission failed. Please try again or chat via WhatsApp.')
      });
    } finally {
      setSubmitting(false);
    }
  };

  const selectedCountryUniversities = UNIVERSITIES.filter(
    (u) => !formData.preferredCountry || u.countryId === formData.preferredCountry
  );

  const directWhatsAppText = encodeURIComponent(
    `Hello Elora Study Abroad, my name is ${formData.fullName || '[Student]'}. I am inquiring about studying ${formData.interestedSubject || 'abroad'} in ${formData.preferredCountry || 'a top destination'}. Phone: ${formData.phone || 'N/A'}`
  );

  return (
    <div
      id="consultation-form"
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#081F45]">
          {t('form.title')}
        </h3>
        <p className="text-sm text-slate-600 mt-1.5">
          {t('form.subtitle')}
        </p>
      </div>

      {status.type === 'success' ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <h4 className="text-base font-semibold text-emerald-900">
              {t('form.success_title')}
            </h4>
          </div>
          <p className="text-sm text-emerald-800 leading-relaxed">
            {status.message}
          </p>
          {status.serverDetails && (
            <p className="text-xs text-emerald-700 bg-white/70 p-2.5 rounded border border-emerald-100">
              {status.serverDetails}
            </p>
          )}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setStatus({ type: null, message: '' })}
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100/50 transition-colors"
            >
              {lang === 'bn' ? 'আরেকটি আবেদন পাঠান' : 'Submit Another Inquiry'}
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20b858] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t('common.chat_whatsapp')}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.type === 'error' && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{status.message}</span>
            </div>
          )}

          {/* Honeypot field (hidden from real users to catch bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_honey">Do not fill this field</label>
            <input
              type="text"
              id="_honey"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Grid 1: Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.full_name')} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'e.g. Tanvir Ahmed'}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.email')} <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Grid 2: Phone & Preferred Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.phone')} <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1712-345678"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="preferredCountry" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.preferred_country')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredCountry"
                name="preferredCountry"
                required
                value={formData.preferredCountry}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              >
                <option value="">{t('form.select_country')}</option>
                {COUNTRIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {lang === 'bn' ? c.nameBn : c.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid 3: University (optional) & Interested Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredUniversity" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.preferred_university')}
              </label>
              <select
                id="preferredUniversity"
                name="preferredUniversity"
                value={formData.preferredUniversity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              >
                <option value="">
                  {lang === 'bn' ? 'নির্দিষ্ট কোনো পছন্দ নেই / আলোচনার মাধ্যমে নির্ধারণ' : 'Any / Open to recommendations'}
                </option>
                {selectedCountryUniversities.map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name} ({u.countryName})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="interestedSubject" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.interested_subject')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="interestedSubject"
                name="interestedSubject"
                required
                value={formData.interestedSubject}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              >
                <option value="">{t('form.select_subject')}</option>
                {SUBJECT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid 4: Current Education & Preferred Intake */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="currentEducation" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.current_education')} <span className="text-rose-500">*</span>
              </label>
              <select
                id="currentEducation"
                name="currentEducation"
                required
                value={formData.currentEducation}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              >
                <option value="">{t('form.select_education')}</option>
                <option value="HSC / A-Levels / High School">HSC / A-Levels / 12th Grade</option>
                <option value="Diploma / Polytechnic">Diploma / Polytechnic Graduate</option>
                <option value="Bachelor's Graduate">Bachelor’s Degree Graduate</option>
                <option value="Master's Graduate">Master’s Degree Graduate</option>
                <option value="Other">Other Qualifications</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredIntake" className="block text-xs font-semibold text-slate-700 mb-1">
                {t('form.preferred_intake')}
              </label>
              <select
                id="preferredIntake"
                name="preferredIntake"
                value={formData.preferredIntake}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
              >
                <option value="">{t('form.select_intake')}</option>
                <option value="Fall / September 2026">Fall / September 2026 (Upcoming)</option>
                <option value="Winter / January 2027">Winter / January 2027</option>
                <option value="Spring / Summer 2027">Spring / Summer 2027</option>
                <option value="Fall / September 2027">Fall / September 2027</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
              {t('form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={t('form.message_placeholder')}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white transition-colors"
            />
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-[#081F45] focus:ring-[#081F45]"
            />
            <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
              {t('form.consent')}
            </label>
          </div>

          {/* Action Buttons: Submit & WhatsApp */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] active:bg-[#c99220] disabled:opacity-70 rounded-xl transition-all shadow-xs hover:shadow"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t('form.submitting')}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t('form.submit')}</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${directWhatsAppText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20b858] rounded-xl transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('common.chat_whatsapp')}</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
