export const COMPANY_INFO = {
  name: 'Elora Study Abroad',
  nameBn: 'ইলোরা স্টাডি অ্যাব্রোড',
  tagline: 'DREAM • EXPLORE • ACHIEVE',
  taglineBn: 'স্বপ্ন দেখুন • অন্বেষণ করুন • অর্জন করুন',
  website: 'elorastudyaboard.com',
  websiteUrl: 'https://elorastudyaboard.com',
  whatsappNumber: '+8801348223630',
  whatsappRaw: '8801348223630',
  whatsappUrl: 'https://wa.me/8801348223630',
  defaultWhatsAppMessage: 'Hello Elora Study Abroad, I would like to get information about studying abroad.',
  defaultWhatsAppMessageBn: 'হ্যালো ইলোরা স্টাডি অ্যাব্রোড, আমি বিদেশে উচ্চশিক্ষা সংক্রান্ত তথ্য জানতে আগ্রহী।',

  offices: [
    {
      id: 'bangladesh',
      title: 'Bangladesh Office',
      titleBn: 'বাংলাদেশ অফিস (প্রধান কার্যালয়)',
      city: 'Dhaka',
      cityBn: 'ঢাকা',
      country: 'Bangladesh',
      countryBn: 'বাংলাদেশ',
      address: '128 Lake Circus, Kalabagan, Dhaka, Bangladesh',
      addressBn: '১২৮ লেক সার্কাস, কলাবাগান, ঢাকা, বাংলাদেশ',
      phone: '+8801348223630',
      phoneDisplay: '+880 1348-223630',
      phoneCall: 'tel:+8801348223630',
      email: 'admissions@elorastudyaboard.com',
      hours: 'Saturday – Thursday: 10:00 AM – 6:30 PM',
      hoursBn: 'শনিবার – বৃহস্পতিবার: সকাল ১০:০০ – সন্ধ্যা ৬:৩০',
      mapQuery: 'https://maps.google.com/?q=128+Lake+Circus+Kalabagan+Dhaka+Bangladesh'
    },
    {
      id: 'canada',
      title: 'Canada Office',
      titleBn: 'কানাডা অফিস',
      city: 'Toronto',
      cityBn: 'টরন্টো',
      country: 'Canada',
      countryBn: 'কানাডা',
      address: '166 Wallace Avenue, Toronto, ON, Canada',
      addressBn: '১৬৬ ওয়ালেস এভিনিউ, টরন্টো, ওন্টারিও, কানাডা',
      phone: '+1 (514) 567-8734',
      phoneDisplay: '+1 (514) 567-8734',
      phoneCall: 'tel:+15145678734',
      email: 'canada@elorastudyaboard.com',
      hours: 'Monday – Friday: 9:30 AM – 5:30 PM (EST)',
      hoursBn: 'সোমবার – শুক্রবার: সকাল ৯:৩০ – বিকাল ৫:৩০ (ইএসটি)',
      mapQuery: 'https://maps.google.com/?q=166+Wallace+Avenue+Toronto+Canada'
    }
  ]
};

export const SUBJECT_CATEGORIES = [
  'Computer Science',
  'Information Technology',
  'Software Engineering',
  'Artificial Intelligence',
  'Data Science',
  'Cybersecurity',
  'Business Administration',
  'Accounting',
  'Finance',
  'Marketing',
  'Economics',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
  'Architecture',
  'Medicine',
  'Nursing',
  'Public Health',
  'Pharmacy',
  'Law',
  'Aviation Management',
  'Hospitality Management',
  'Tourism',
  'Education',
  'Psychology',
  'International Relations',
  'Media and Communication',
  'Agriculture',
  'Environmental Science',
  'Arts and Humanities'
];

export const DEGREE_LEVELS = [
  "Foundation",
  "Diploma",
  "Bachelor's",
  "Master's",
  "MBA",
  "PhD"
] as const;
