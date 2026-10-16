export type Language = 'en' | 'bn';

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  googleMapUrl: string;
}

export interface CountryData {
  id: string;
  slug: string;
  nameEn: string;
  nameBn: string;
  region: 'North America' | 'Europe' | 'Asia-Pacific' | 'Eurasia';
  flag: string;
  heroImage: string;
  capital: string;
  currency: string;
  overviewEn: string;
  overviewBn: string;
  whyStudyEn: string[];
  whyStudyBn: string[];
  educationSystemEn: string;
  educationSystemBn: string;
  degreeLevels: string[];
  popularSubjects: string[];
  generalRequirementsEn: string;
  generalRequirementsBn: string;
  englishRequirementsEn: string;
  englishRequirementsBn: string;
  estimatedTuitionEn: string;
  estimatedTuitionBn: string;
  estimatedLivingEn: string;
  estimatedLivingBn: string;
  scholarshipsEn: string;
  scholarshipsBn: string;
  intakesEn: string;
  intakesBn: string;
  visaGuidanceEn: string;
  visaGuidanceBn: string;
  officialSourceUrl: string;
  officialSourceName: string;
}

export interface UniversityData {
  id: string;
  slug: string;
  name: string;
  nameBn: string;
  countryId: string;
  countryName: string;
  city: string;
  cityBn: string;
  website: string;
  type: 'Public' | 'Private';
  establishedYear: number;
  image: string;
  degreeLevels: string[];
  popularSubjects: string[];
  overviewEn: string;
  overviewBn: string;
  admissionGuidanceEn: string;
  admissionGuidanceBn: string;
  englishRequirementsEn: string;
  englishRequirementsBn: string;
  tuitionRangeEn: string;
  tuitionRangeBn: string;
  intakes: string[];
}

export interface CourseData {
  id: string;
  name: string;
  nameBn: string;
  universityId: string;
  universityName: string;
  countryId: string;
  countryName: string;
  subjectCategory: string;
  degreeLevel: "Foundation" | "Diploma" | "Bachelor's" | "Master's" | "MBA" | "PhD";
  durationEn: string;
  durationBn: string;
  tuitionEn: string;
  tuitionBn: string;
  intakeEn: string;
  intakeBn: string;
  overviewEn: string;
  overviewBn: string;
  entryRequirementsEn: string;
  entryRequirementsBn: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleBn: string;
  shortDescEn: string;
  shortDescBn: string;
  fullDescEn: string;
  fullDescBn: string;
  iconName: string;
  deliverablesEn: string[];
  deliverablesBn: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Destinations' | 'Admissions' | 'Visa' | 'Costs';
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
}
