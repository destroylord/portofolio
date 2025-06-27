'use client';

import Head from 'next/head';
import { SEOProps } from '../common/types';
import { SEO_CONFIG } from '../common/constants';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

const SEO: React.FC<SEOComponentProps> = ({
  title,
  description = SEO_CONFIG.DEFAULT_DESCRIPTION,
  keywords = [],
  ogImage = SEO_CONFIG.DEFAULT_OG_IMAGE,
  canonical,
  children,
}) => {
  const pageTitle = title 
    ? SEO_CONFIG.TITLE_TEMPLATE.replace('%s', title)
    : SEO_CONFIG.DEFAULT_TITLE;

  const pageUrl = canonical 
    ? `${SEO_CONFIG.SITE_URL}${canonical}`
    : SEO_CONFIG.SITE_URL;

  const keywordsString = keywords.length > 0 
    ? keywords.join(', ')
    : 'portfolio, web developer, frontend, backend, fullstack';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={SEO_CONFIG.DEFAULT_TITLE} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={SEO_CONFIG.DEFAULT_TITLE} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONFIG.TWITTER_HANDLE} />
      <meta name="twitter:creator" content={SEO_CONFIG.TWITTER_HANDLE} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: SEO_CONFIG.DEFAULT_TITLE,
            url: SEO_CONFIG.SITE_URL,
            sameAs: [
              process.env.NEXT_PUBLIC_GITHUB_URL,
              process.env.NEXT_PUBLIC_LINKEDIN_URL,
              process.env.NEXT_PUBLIC_TWITTER_URL,
            ].filter(Boolean),
            jobTitle: 'Web Developer',
            description: description,
            image: ogImage,
          }),
        }}
      />
      
      {children}
    </Head>
  );
};

export default SEO;