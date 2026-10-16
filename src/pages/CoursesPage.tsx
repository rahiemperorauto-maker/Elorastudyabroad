import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { COURSES } from '../data/courses';
import { COUNTRIES } from '../data/countries';
import { UNIVERSITIES } from '../data/universities';
import { SUBJECT_CATEGORIES, DEGREE_LEVELS, COMPANY_INFO } from '../data/company';
import {
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  Clock,
  DollarSign,
  Calendar,
  Building2,
  Globe2,
  MessageCircle,
  RotateCcw
} from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedUniversity, setSelectedUniversity] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedIntake, setSelectedIntake] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const availableUniversities = useMemo(() => {
    if (!selectedCountry) return UNIVERSITIES;
    return UNIVERSITIES.filter((u) => u.countryId === selectedCountry);
  }, [selectedCountry]);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchCountry = !selectedCountry || course.countryId === selectedCountry;
      const matchUni = !selectedUniversity || course.universityId === selectedUniversity;
      const matchSubject = !selectedSubject || course.subjectCategory === selectedSubject;
      const matchLevel = !selectedLevel || course.degreeLevel === selectedLevel;
      const matchIntake = !selectedIntake || course.intakeEn.toLowerCase().includes(selectedIntake.toLowerCase());
      const matchQuery =
        !searchQuery ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subjectCategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCountry && matchUni && matchSubject && matchLevel && matchIntake && matchQuery;
    });
  }, [selectedCountry, selectedUniversity, selectedSubject, selectedLevel, selectedIntake, searchQuery]);

  const handleReset = () => {
    setSelectedCountry('');
    setSelectedUniversity('');
    setSelectedSubject('');
    setSelectedLevel('');
    setSelectedIntake('');
    setSearchQuery('');
  };

  return (
    <div className="py-12 md:py-16 bg-[#F5F7FB]">
      <SEOHead
        title="Find Your Perfect Course - Global Degree Search"
        description="Search accredited Bachelor's, Master's, MBA, and PhD courses across top global universities. Filter by country, subject, degree level, and intake."
        canonicalPath="/courses"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Academic Programs Search
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081F45] mt-2">
            {lang === 'bn' ? 'আপনার কাঙ্ক্ষিত কোর্স খুঁজুন' : 'Find Your Perfect Course'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {lang === 'bn'
              ? 'কম্পিউটার সায়েন্স, এআই, বিজনেস, ইঞ্জিনিয়ারিং ও মেডিসিনসহ ৩০টি ক্যাটাগরির বিশ্বস্বীকৃত ডিগ্রি প্রোগ্রাম অনুসন্ধান করুন।'
              : 'Search verified degree programs across 30 subject categories. Filter by destination country, accredited university, degree level, and upcoming intakes.'}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Keyword Search */}
            <div className="relative">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Keyword Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Data Science, MBA, Software..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Country Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Select Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedUniversity('');
                }}
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

            {/* University Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Select University
              </label>
              <select
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
              >
                <option value="">All Universities</option>
                {availableUniversities.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Select Subject
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
                Select Degree Level
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

            {/* Intake Filter */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Select Intake
              </label>
              <select
                value={selectedIntake}
                onChange={(e) => setSelectedIntake(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081F45]/20 focus:border-[#081F45]"
              >
                <option value="">All Intakes</option>
                <option value="September">Fall / September</option>
                <option value="January">Winter / January</option>
                <option value="February">February</option>
                <option value="July">Summer / July</option>
                <option value="October">October</option>
              </select>
            </div>
          </div>

          {(selectedCountry || selectedUniversity || selectedSubject || selectedLevel || selectedIntake || searchQuery) && (
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Found <span className="font-semibold text-slate-900">{filteredCourses.length}</span> matching programs
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

        {/* Courses Results Grid */}
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#081F45]/30 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-800 text-xs font-semibold rounded">
                    {course.degreeLevel}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {course.subjectCategory}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                    {course.countryName}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#081F45] hover:text-[#102D58] transition-colors">
                  <Link to={`/courses/${course.id}`}>
                    {lang === 'bn' ? course.nameBn : course.name}
                  </Link>
                </h2>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Building2 className="w-3.5 h-3.5 text-[#E8B13C]" />
                  <span className="font-semibold text-slate-800">{course.universityName}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {lang === 'bn' ? course.overviewBn : course.overviewEn}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Duration: <strong className="text-slate-700">{lang === 'bn' ? course.durationBn : course.durationEn}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    <span>Tuition: <strong className="text-slate-700">{lang === 'bn' ? course.tuitionBn : course.tuitionEn}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Intake: <strong className="text-slate-700">{lang === 'bn' ? course.intakeBn : course.intakeEn}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                <Link
                  to={`/courses/${course.id}`}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-[#081F45] hover:text-white text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>{t('common.view_details')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Elora Study Abroad, I would like guidance on enrolling in "${course.name}" at ${course.universityName} (${course.countryName}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#E8B13C] hover:bg-[#dba129] text-[#081F45] rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t('common.ask_elora')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#081F45]">
              No exact verified match found for this filter combination
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
              We guide students across hundreds of additional accredited programs not yet indexed in this instant preview. Contact our counselors for personalized curriculum shortlisting.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
              <Link
                to="/contact"
                className="px-4 py-2 text-xs font-semibold text-[#081F45] bg-[#E8B13C] hover:bg-[#dba129] rounded-lg transition-colors"
              >
                Request Free Course Guidance
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
