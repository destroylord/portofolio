'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../common/hooks';
import { ThemeContextType, Theme } from '../common/types';
import { THEME } from '../common/constants';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [storedTheme, setStoredTheme] = useLocalStorage<Theme>('theme', THEME.LIGHT);
  const [theme, setTheme] = useState<Theme>(storedTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check system preference if no stored theme
    if (!localStorage.getItem('theme')) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? THEME.DARK 
        : THEME.LIGHT;
      setTheme(systemTheme);
      setStoredTheme(systemTheme);
    } else {
      setTheme(storedTheme);
    }
  }, [storedTheme, setStoredTheme]);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Add/remove dark class for Tailwind
    if (theme === THEME.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update stored theme
    setStoredTheme(theme);
  }, [theme, mounted, setStoredTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: THEME.LIGHT, toggleTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};