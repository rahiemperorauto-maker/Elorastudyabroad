import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-[#F5F7FB] text-center">
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
        canonicalPath="/404"
      />
      <div className="max-w-md mx-auto px-4">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-200 text-[#081F45] mx-auto flex items-center justify-center mb-4">
          <Compass className="w-8 h-8 text-[#E8B13C]" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#081F45]">404</h1>
        <h2 className="text-lg font-bold text-slate-800 mt-1">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          The page you requested may have moved or does not exist. Explore our study destinations or university directories.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-4 py-2.5 bg-[#081F45] text-white rounded-xl text-xs font-semibold hover:bg-[#102D58] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/destinations"
            className="px-4 py-2.5 bg-white border border-slate-300 text-slate-800 rounded-xl text-xs font-semibold hover:border-[#081F45] transition-colors"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};
