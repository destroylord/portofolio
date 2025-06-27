// Application constants and configuration
export const APP_CONFIG = {
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Portfolio',
  SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Personal Portfolio Website',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR_NAME || 'Your Name',
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
  EMAIL: process.env.NEXT_PUBLIC_AUTHOR_EMAIL || 'your.email@example.com',
} as const;

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const;

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

export const API_ENDPOINTS = {
  DATA: '/data/data.json',
  CONTACT: '/api/contact',
  ANALYTICS: '/api/analytics',
} as const;

export const SEO_CONFIG = {
  DEFAULT_TITLE: APP_CONFIG.SITE_NAME,
  TITLE_TEMPLATE: `%s | ${APP_CONFIG.SITE_NAME}`,
  DEFAULT_DESCRIPTION: APP_CONFIG.SITE_DESCRIPTION,
  SITE_URL: APP_CONFIG.SITE_URL,
  DEFAULT_OG_IMAGE: `${APP_CONFIG.SITE_URL}/og-image.jpg`,
  TWITTER_HANDLE: '@yourusername',
} as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: APP_CONFIG.GITHUB_URL,
    icon: 'mdi:github',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: APP_CONFIG.LINKEDIN_URL,
    icon: 'mdi:linkedin',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    url: `mailto:${APP_CONFIG.EMAIL}`,
    icon: 'mdi:email',
    color: 'hover:text-green-600',
  },
  {
    name: 'Twitter',
    url: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
    icon: 'mdi:twitter',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    icon: 'mdi:instagram',
    color: 'hover:text-pink-600',
  },
] as const;