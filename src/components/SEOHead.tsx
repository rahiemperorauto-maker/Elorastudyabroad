import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = ''
}) => {
  const { lang } = useLanguage();

  useEffect(() => {
    // Update document title
    const formattedTitle = `${title} | Elora Study Abroad`;
    document.title = formattedTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const currentOrigin = window.location.origin;
    linkCanonical.setAttribute('href', `${currentOrigin}${canonicalPath || window.location.pathname}`);

    // Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonicalPath, lang]);

  return null;
};
