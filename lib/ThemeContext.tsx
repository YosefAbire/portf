'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'ocean' | 'emerald' | 'indigo' | 'amber';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  color: string; // Preview swatch color hex
  bgPreview: string;
  gradient: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'ocean',
    name: 'Ocean Sky',
    color: '#0EA5E9',
    bgPreview: '#0A0E17',
    gradient: 'from-sky-400 to-indigo-500',
  },
  {
    id: 'emerald',
    name: 'Cyber Emerald',
    color: '#10B981',
    bgPreview: '#051813',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'indigo',
    name: 'Deep Violet',
    color: '#8B5CF6',
    bgPreview: '#0E0C1D',
    gradient: 'from-purple-400 to-indigo-500',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    color: '#F59E0B',
    bgPreview: '#180D08',
    gradient: 'from-amber-400 to-orange-500',
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'ocean',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('ocean');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('yosef_portfolio_theme') as ThemeMode;
    if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setThemeState('ocean');
      document.documentElement.setAttribute('data-theme', 'ocean');
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('yosef_portfolio_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
