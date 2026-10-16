import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { UNIVERSITIES } from '../data/universities';
import { COUNTRIES } from '../data/countries';
import { SUBJECT_CATEGORIES, DEGREE_LEVELS, COMPANY_INFO } from '../data/company';
import {
  Building2,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  MessageCircle,
  RotateCcw
} from 'lucide-react';

export const UniversitiesPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      const matchCountry = !selectedCountry || uni.countryId === selectedCountry;
      const matchSubject = !selectedSubject || uni.popularSubjects.includes(selectedSubject);
      const matchLevel = !selectedLevel || uni.degreeLevels.includes(selectedLevel);
      const matchQuery =
        !searchQuery ||
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.countryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCountry && matchSubject && matchLevel && matchQuery;
    });
  }, [selectedCountry, selectedSubject, selectedLevel, searchQuery]);

  const handleReset = () => {
    setSelectedCountry('');
    setSelectedSubject('');
    setSelectedLevel('');
    setSearchQuery('');
  };

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Universities Directory - Verified Global Institutions"
        description="Search accredited universities across Canada, UK, Australia, Germany, Malaysia, and more. Filter by country, degree level, and subject."
        canonicalPath="/universities"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Institutions Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'শীর্ষ বিশ্ববিদ্যালয় ডিরেক্টরি' : 'Global University Directory'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'কানাডা, যুক্তরাজ্য, অস্ট্রেলিয়া ও ইউরোপের শীর্ষ পাবলিক ও স্বনামধন্য বিশ্ববিদ্যালয়ে ভর্তির প্রস্তুতি ও সঠিক তথ্যের জন্য অনুসন্ধান করুন।'
              : 'Search and filter accredited universities across 18 countries. Verified study levels, admission guidelines, and direct counseling support.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Search University
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Toronto, Manchester..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Country Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
              >
                <option value="">{t('common.all_countries')}</option>
                {COUNTRIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.flag} {lang === 'bn' ? c.nameBn : c.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Subject Category
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
              >
                <option value="">{t('common.all_subjects')}</option>
                {SUBJECT_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Degree Level Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Degree Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
              >
                <option value="">{t('common.all_levels')}</option>
                {DEGREE_LEVELS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(selectedCountry || selectedSubject || selectedLevel || searchQuery) && (
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Found <span className="font-semibold text-slate-900">{filteredUniversities.length}</span> matching universities
              </span>
              <button
                onClick={handleReset}
                className="text-[#081F45] hover:text-[#E8B13C] font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('common.reset_filters')}</span>
              </button>
            </div>
          )}
        </div>

        {/* Universities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#081F45]/90 backdrop-blur-md text-white text-xs font-semibold shadow-xs">
                    {uni.countryName}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-medium shadow-xs">
                    Est. {uni.establishedYear}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{uni.city}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors mb-2 leading-snug">
                    {lang === 'bn' ? uni.nameBn : uni.name}
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'bn' ? uni.overviewBn : uni.overviewEn}
                  </p>

                  {/* Degree Levels */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider block mb-1.5">
                      Available Levels:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.degreeLevels.map((lvl) => (
                        <span
                          key={lvl}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* English & Intakes */}
                  <div className="text-xs text-slate-500 space-y-1.5 pt-3 border-t border-slate-100">
                    <div>
                      <span className="font-semibold text-slate-700">English: </span>
                      <span>{uni.englishRequirementsEn.slice(0, 36)}...</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Intakes: </span>
                      <span>{uni.intakes.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Details & Consultation */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <Link
                  to={`/universities/${uni.slug}`}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Elora Study Abroad, I am interested in applying to ${uni.name} in ${uni.countryName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#E8B13C] hover:bg-[#dba129] text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consult Elora</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">
              {t('common.no_results')}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your search criteria or reset filters to view all accredited institutions.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#081F45] bg-[#E8B13C] rounded-lg"
            >
              {t('common.reset_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
