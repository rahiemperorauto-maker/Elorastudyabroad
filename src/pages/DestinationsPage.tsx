import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { COUNTRIES } from '../data/countries';
import {
  Globe2,
  ArrowRight,
  Sparkles,
  MapPin,
  Coins,
  GraduationCap
} from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = ['All', 'North America', 'Europe', 'Asia-Pacific', 'Eurasia'];

  const filteredCountries = COUNTRIES.filter((country) => {
    const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
    const matchesSearch =
      country.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.nameBn.includes(searchQuery) ||
      country.capital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Study Destinations - 18 Countries"
        description="Explore 18 global study abroad destinations across North America, Europe, and Asia-Pacific. Verified admission guidance and realistic costs."
        canonicalPath="/destinations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Global Education Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? '১৮টি শীর্ষ স্টাডি ডেস্টিনেশন' : 'Explore 18 Top Study Destinations'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'কানাডা, যুক্তরাজ্য, অস্ট্রেলিয়া, জার্মানি ও মালয়েশিয়াসহ বিশ্বের শীর্ষ ১৮টি দেশে উচ্চশিক্ষার সঠিক তথ্য, বিশ্ববিদ্যালয় এবং ভিসা নির্দেশিকা জানুন।'
              : 'Choose from 18 verified countries across North America, Europe, Asia-Pacific, and Eurasia. Explore universities, tuition ranges, and student visa frameworks.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region Tabs (Interactive Filter Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedRegion === region
                    ? 'bg-[#081F45] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {region === 'All' && (lang === 'bn' ? 'সকল অঞ্চল' : 'All Regions')}
                {region === 'North America' && (lang === 'bn' ? 'উত্তর আমেরিকা' : 'North America')}
                {region === 'Europe' && (lang === 'bn' ? 'ইউরোপ' : 'Europe')}
                {region === 'Asia-Pacific' && (lang === 'bn' ? 'এশিয়া-প্যাসিফিক' : 'Asia-Pacific')}
                {region === 'Eurasia' && (lang === 'bn' ? 'ইউরেশিয়া' : 'Eurasia')}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bn' ? 'দেশ বা রাজধানী খুঁজুন...' : 'Search by country or capital...'}
              className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45] focus:bg-white"
            />
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Hero Photo */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={country.heroImage}
                    alt={`Study in ${country.nameEn}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-1.5">
                    <span>{country.flag}</span>
                    <span>{country.region}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#081F45]/80 text-white text-[10px] font-mono">
                    {country.currency}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-[#081F45] group-hover:text-[#102D58] transition-colors">
                      {lang === 'bn' ? country.nameBn : country.nameEn}
                    </h2>
                    <span className="text-xs text-slate-500 font-mono">
                      {country.capital}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'bn' ? country.overviewBn : country.overviewEn}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-600">English Req:</span>
                      <span className="text-slate-800 font-medium">IELTS / PTE / MOI</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-600">Main Intake:</span>
                      <span className="text-slate-800 font-medium">{country.intakesEn.split(',')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/${country.slug}`}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'bn' ? `${country.nameBn} গাইড ও বিশ্ববিদ্যালয়` : `Explore ${country.nameEn} Guide`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Globe2 className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">
              {t('common.no_results')}
            </h3>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-[#081F45] bg-[#E8B13C] rounded-lg"
            >
              {t('common.reset_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
