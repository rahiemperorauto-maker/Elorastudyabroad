import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<string, { en: string; bn: string }> = {
  // Navigation
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.destinations': { en: 'Study Destinations', bn: 'স্টাডি ডেস্টিনেশন' },
  'nav.universities': { en: 'Universities', bn: 'বিশ্ববিদ্যালয়সমূহ' },
  'nav.courses': { en: 'Courses', bn: 'কোর্স ও বিষয়' },
  'nav.services': { en: 'Our Services', bn: 'আমাদের সেবাসমূহ' },
  'nav.about': { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
  'nav.contact': { en: 'Contact Us', bn: 'যোগাযোগ' },
  'nav.free_consultation': { en: 'Free Consultation', bn: 'ফ্রি কাউন্সেলিং' },
  'nav.all_destinations': { en: 'View All 18 Destinations', bn: 'সব ১৮টি দেশ দেখুন' },
  'nav.popular_countries': { en: 'Top Study Destinations', bn: 'জনপ্রিয় স্টাডি ডেস্টিনেশন' },

  // Brand & Tagline
  'brand.name': { en: 'Elora Study Abroad', bn: 'ইলোরা স্টাডি অ্যাব্রোড' },
  'brand.tagline': { en: 'DREAM • EXPLORE • ACHIEVE', bn: 'স্বপ্ন দেখুন • অন্বেষণ করুন • অর্জন করুন' },
  'brand.description': {
    en: 'Elora Study Abroad is a dedicated international education consultancy assisting aspiring students with university admissions, visa documentation guidance, and comprehensive pre-departure support.',
    bn: 'ইলোরা স্টাডি অ্যাব্রোড একটি নিবেদিত আন্তর্জাতিক শিক্ষা পরামর্শক প্রতিষ্ঠান, যা শিক্ষার্থীদের বিশ্ববিদ্যালয়ে ভর্তি, ভিসা ডকুমেন্টেশন নির্দেশনা এবং প্রি-ডিপার্চার সহায়তা প্রদান করে।'
  },

  // Hero Section
  'hero.title': { en: 'Your Global Education Journey Starts Here', bn: 'আপনার বৈশ্বিক শিক্ষার যাত্রা শুরু হোক এখান থেকেই' },
  'hero.subtitle': {
    en: 'Explore universities, discover your ideal course, and take the next step toward studying abroad with guidance from Elora Study Abroad.',
    bn: 'বিশ্ববিদ্যালয় অন্বেষণ করুন, পছন্দের কোর্স নির্বাচন করুন এবং ইলোরা স্টাডি অ্যাব্রোডের নির্ভরযোগ্য দিকনির্দেশনায় উচ্চশিক্ষার স্বপ্নের পথে এগিয়ে যান।'
  },
  'hero.btn_destinations': { en: 'Explore Destinations', bn: 'দেশসমূহ দেখুন' },
  'hero.btn_universities': { en: 'Find Your University', bn: 'বিশ্ববিদ্যালয় খুঁজুন' },
  'hero.btn_consultation': { en: 'Get Free Consultation', bn: 'ফ্রি কাউন্সেলিং নিন' },

  // Trust Highlights
  'trust.countries_count': { en: '18 Study Destinations', bn: '১৮টি স্টাডি ডেস্টিনেশন' },
  'trust.countries_desc': { en: 'Across North America, Europe, Asia & Pacific', bn: 'উত্তর আমেরিকা, ইউরোপ, এশিয়া ও প্যাসিফিক জুড়ে' },
  'trust.verified_unis': { en: 'Verified Universities', bn: 'যাচাইকৃত শীর্ষ বিশ্ববিদ্যালয়' },
  'trust.verified_desc': { en: 'Direct guidance on real programs & entry criteria', bn: 'সঠিক প্রোগ্রাম ও ভর্তি যোগ্যতার সুস্পষ্ট তথ্য' },
  'trust.dual_offices': { en: 'Global Presence', bn: 'আন্তর্জাতিক উপস্থিতি' },
  'trust.dual_desc': { en: 'Offices in Dhaka, Bangladesh & Toronto, Canada', bn: 'ঢাকা, বাংলাদেশ এবং টরন্টো, কানাডায় নিজস্ব অফিস' },
  'trust.honest_guidance': { en: 'Transparent Advising', bn: 'স্বচ্ছ ও দায়িত্বশীল পরামর্শ' },
  'trust.honest_desc': { en: 'Zero false promises. Genuine educational pathways', bn: 'কোনো মিথ্যা প্রতিশ্রুতি নয়, সঠিক ক্যারিয়ার পথ' },

  // Common UI
  'common.learn_more': { en: 'Learn More', bn: 'বিস্তারিত দেখুন' },
  'common.explore_unis': { en: 'Explore Universities', bn: 'বিশ্ববিদ্যালয়সমূহ দেখুন' },
  'common.view_details': { en: 'View Details', bn: 'বিস্তারিত দেখুন' },
  'common.ask_elora': { en: 'Ask Elora', bn: 'ইলোরাকে জিজ্ঞেস করুন' },
  'common.chat_whatsapp': { en: 'Chat on WhatsApp', bn: 'হোয়াটসঅ্যাপে কথা বলুন' },
  'common.call_us': { en: 'Call Us', bn: 'ফোন করুন' },
  'common.email_us': { en: 'Email Us', bn: 'ইমেইল করুন' },
  'common.office_dhaka': { en: 'Bangladesh Office', bn: 'বাংলাদেশ অফিস' },
  'common.office_canada': { en: 'Canada Office', bn: 'কানাডা অফিস' },
  'common.dhaka_address': { en: '128 Lake Circus, Kalabagan, Dhaka, Bangladesh', bn: '১২৮ লেক সার্কাস, কলাবাগান, ঢাকা, বাংলাদেশ' },
  'common.canada_address': { en: '166 Wallace Avenue, Toronto, Canada', bn: '১৬৬ ওয়ালেস এভিনিউ, টরন্টো, কানাডা' },
  'common.filter_by_country': { en: 'Filter by Country', bn: 'দেশ অনুযায়ী বাছাই' },
  'common.all_countries': { en: 'All Countries', bn: 'সকল দেশ' },
  'common.all_levels': { en: 'All Degree Levels', bn: 'সকল ডিগ্রি লেভেল' },
  'common.all_subjects': { en: 'All Subject Areas', bn: 'সকল বিষয়' },
  'common.search_placeholder': { en: 'Search by university or subject name...', bn: 'বিশ্ববিদ্যালয় বা বিষয়ের নাম দিয়ে খুঁজুন...' },
  'common.reset_filters': { en: 'Reset Filters', bn: 'ফিল্টার রিসেট করুন' },
  'common.no_results': { en: 'No matching records found with current filters.', bn: 'আপনার বর্তমান ফিল্টারের সাথে কোনো তথ্য মেলেনি।' },

  // Consultation Form
  'form.title': { en: 'Request Free Student Consultation', bn: 'বিনামূল্যে স্টুডেন্ট কাউন্সেলিং আবেদন' },
  'form.subtitle': {
    en: 'Share your academic background and study preferences. Our educational advisors will connect with you.',
    bn: 'আপনার শিক্ষাগত পটভূমি এবং পছন্দের তথ্য দিন। আমাদের সিনিয়র এডুকেশন এডভাইজার আপনার সাথে যোগাযোগ করবেন।'
  },
  'form.full_name': { en: 'Full Name', bn: 'পূর্ণ নাম' },
  'form.email': { en: 'Email Address', bn: 'ইমেইল অ্যাড্রেস' },
  'form.phone': { en: 'Phone / WhatsApp Number', bn: 'ফোন / হোয়াটসঅ্যাপ নম্বর' },
  'form.preferred_country': { en: 'Preferred Study Destination', bn: 'পছন্দের স্টাডি ডেস্টিনেশন' },
  'form.select_country': { en: 'Select a country', bn: 'একটি দেশ নির্বাচন করুন' },
  'form.preferred_university': { en: 'Preferred University (Optional)', bn: 'পছন্দের বিশ্ববিদ্যালয় (ঐচ্ছিক)' },
  'form.interested_subject': { en: 'Interested Subject Area', bn: 'আগ্রহের বিষয়' },
  'form.select_subject': { en: 'Select subject area', bn: 'বিষয় নির্বাচন করুন' },
  'form.current_education': { en: 'Current / Highest Education Level', bn: 'বর্তমান / সর্বোচ্চ শিক্ষাগত যোগ্যতা' },
  'form.select_education': { en: 'Select education level', bn: 'শিক্ষাগত যোগ্যতা নির্বাচন করুন' },
  'form.preferred_intake': { en: 'Preferred Intake (Optional)', bn: 'পছন্দের ইনটেক (ঐচ্ছিক)' },
  'form.select_intake': { en: 'Select target intake', bn: 'লক্ষ্যমাত্রার ইনটেক নির্বাচন করুন' },
  'form.message': { en: 'Your Questions or Academic Goals', bn: 'আপনার প্রশ্ন বা শিক্ষাগত লক্ষ্য' },
  'form.message_placeholder': {
    en: 'Tell us about your background, GPA, English test score (IELTS/PTE if taken), and questions...',
    bn: 'আপনার পরীক্ষার ফলাফল, আইইএলটিএস/পিটিই স্কোর (যদি থাকে) এবং আপনার লক্ষ্য সম্পর্কে লিখুন...'
  },
  'form.consent': {
    en: 'I agree to allow Elora Study Abroad to contact me regarding my international education inquiry in accordance with the Privacy Policy.',
    bn: 'আমি সম্মতি জানাচ্ছি যে ইলোরা স্টাডি অ্যাব্রোড আমার উচ্চশিক্ষার আবেদনের ব্যাপারে আমার সাথে যোগাযোগ করতে পারে।'
  },
  'form.submit': { en: 'Submit Free Inquiry', bn: 'আবেদন জমা দিন' },
  'form.submitting': { en: 'Submitting Your Details...', bn: 'তথ্য জমা হচ্ছে...' },
  'form.success_title': { en: 'Inquiry Submitted Successfully!', bn: 'আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে!' },
  'form.success_msg': {
    en: 'Thank you for reaching out to Elora Study Abroad. An educational counselor will review your inquiry and connect via WhatsApp or phone.',
    bn: 'ইলোরা স্টাডি অ্যাব্রোডের সাথে যোগাযোগের জন্য ধন্যবাদ। আমাদের কাউন্সেলর শীঘ্রই আপনার সাথে হোয়াটসঅ্যাপ বা ফোনে যোগাযোগ করবেন।'
  },

  // 5-Step Journey
  'journey.title': { en: 'Your 5-Step Path to Study Abroad', bn: 'উচ্চশিক্ষায় আপনার ৫-ধাপের সুবিন্যস্ত পথ' },
  'journey.subtitle': {
    en: 'A structured, transparent roadmap from course selection to your arrival on campus.',
    bn: 'কোর্স নির্বাচন থেকে ক্যাম্পাসে পৌঁছানো পর্যন্ত একটি কাঠামোগত ও স্বচ্ছ রোডম্যাপ।'
  },
  'journey.step1_title': { en: '1. Choose Destination', bn: '১. দেশ নির্বাচন' },
  'journey.step1_desc': { en: 'Select from 18 verified countries based on budget, career scope, and stay-back rights.', bn: 'বাজেট, সুযোগ ও ক্যারিয়ারের ভিত্তিতে ১৮টি দেশ থেকে সঠিকটি নির্বাচন।' },
  'journey.step2_title': { en: '2. Find Your University', bn: '২. বিশ্ববিদ্যালয় নির্বাচন' },
  'journey.step2_desc': { en: 'Shortlist accredited public and private universities matching your academic profile.', bn: 'আপনার ফলাফল অনুযায়ী সেরা বিশ্ববিদ্যালয়গুলো বাছাই।' },
  'journey.step3_title': { en: '3. Select Your Course', bn: '৩. কোর্স বাছাই' },
  'journey.step3_desc': { en: 'Identify career-oriented programs across Bachelor’s, Master’s, MBA, or PhD.', bn: 'আপনার ক্যারিয়ার লক্ষ্যের সাথে মানানসই ডিগ্রি প্রোগ্রাম নির্বাচন।' },
  'journey.step4_title': { en: '4. Request Consultation', bn: '৪. ফ্রি কাউন্সেলিং' },
  'journey.step4_desc': { en: 'Review document requirements, application deadlines, and scholarship possibilities.', bn: 'কাউন্সেলরের সাথে ডকুমেন্টেশন ও স্কলারশিপের সম্ভাবনা যাচাই।' },
  'journey.step5_title': { en: '5. Prepare Your Application', bn: '৫. আবেদন ও ভিসা প্রস্তুতি' },
  'journey.step5_desc': { en: 'Submit error-free applications and prepare visa documentation with professional guidance.', bn: 'ভুলহীন আবেদন এবং বাস্তবসম্মত ভিসা ডকুমেন্টেশন প্রস্তুতি।' },

  // Footer
  'footer.quick_links': { en: 'Quick Links', bn: 'প্রয়োজনীয় লিংক' },
  'footer.destinations': { en: 'Study Destinations', bn: 'স্টাডি ডেস্টিনেশন' },
  'footer.services': { en: 'Our Services', bn: 'আমাদের সেবাসমূহ' },
  'footer.offices': { en: 'Our Global Offices', bn: 'আমাদের অফিসসমূহ' },
  'footer.disclaimer': {
    en: 'Elora Study Abroad provides educational advisory and application guidance. We do not guarantee university admission or visa issuance; decisions rest solely with university admission boards and respective government immigration authorities.',
    bn: 'ইলোরা স্টাডি অ্যাব্রোড উচ্চশিক্ষার পরামর্শ ও আবেদন সহযোগিতা প্রদান করে। ভর্তি বা ভিসা অনুমোদনের কোনো অযৌক্তিক গ্যারান্টি আমরা প্রদান করি না; এই সিদ্ধান্ত সম্পূর্ণভাবে সংশ্লিষ্ট বিশ্ববিদ্যালয় ও দূতাবাস কর্তৃপক্ষের আওতাধীন।'
  },
  'footer.copyright': {
    en: '© Elora Study Abroad. All Rights Reserved.',
    bn: '© ইলোরা স্টাডি অ্যাব্রোড। সর্বস্বত্ব সংরক্ষিত।'
  },
  'footer.privacy': { en: 'Privacy Policy', bn: 'গোপনীয়তা নীতি' },
  'footer.terms': { en: 'Terms & Conditions', bn: 'শর্তাবলী' },
  'footer.faqs': { en: 'FAQs', bn: 'সাধারণ প্রশ্নোত্তর' },
  'footer.view_all_countries': { en: 'View All 18 Countries', bn: 'সব ১৮টি দেশ দেখুন' }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('elora_lang');
    return (saved === 'bn' || saved === 'en') ? saved : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('elora_lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.setAttribute('data-lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const t = (key: string, fallback?: string): string => {
    const item = translations[key];
    if (item) {
      return item[lang] || item.en;
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
