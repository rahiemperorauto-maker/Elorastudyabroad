import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe2,
  Building,
  BookOpen,
  CalendarCheck,
  Send,
  ArrowRight
} from 'lucide-react';

export const StudentJourney: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('journey.step1_title'),
      desc: t('journey.step1_desc'),
      icon: Globe2,
      link: '/destinations'
    },
    {
      number: '02',
      title: t('journey.step2_title'),
      desc: t('journey.step2_desc'),
      icon: Building,
      link: '/universities'
    },
    {
      number: '03',
      title: t('journey.step3_title'),
      desc: t('journey.step3_desc'),
      icon: BookOpen,
      link: '/courses'
    },
    {
      number: '04',
      title: t('journey.step4_title'),
      desc: t('journey.step4_desc'),
      icon: CalendarCheck,
      link: '/contact'
    },
    {
      number: '05',
      title: t('journey.step5_title'),
      desc: t('journey.step5_desc'),
      icon: Send,
      link: '/services'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E8B13C]">
            Step-by-Step Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F45] mt-2">
            {t('journey.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t('journey.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.number}
                to={step.link}
                className="group relative bg-[#F5F7FB] hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#081F45]/20 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#081F45] bg-[#E8B13C]/20 px-2.5 py-1 rounded-md">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#081F45] group-hover:text-white text-[#081F45] shadow-xs flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#081F45] group-hover:text-[#102D58] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#081F45] group-hover:text-[#E8B13C] transition-colors">
                  <span>{t('common.learn_more')}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
