// Type definitions for the portfolio application

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  techstack: string[];
  links: {
    github?: string;
    demo?: string;
    download?: string;
  };
  featured?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  projects: Project[];
  skills: string[];
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Utility types
export type Theme = 'light' | 'dark';
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'primary' | 'secondary' | 'accent' | 'ghost';