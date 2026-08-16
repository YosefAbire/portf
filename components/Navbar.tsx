'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, ChevronRight, Palette, Check } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { useTheme, THEMES, ThemeMode } from '@/lib/ThemeContext';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'summary', 'case-studies', 'systems', 'architecture-lab', 'tech-stack', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Capabilities', href: '#summary', id: 'summary' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Systems Delivery', href: '#systems', id: 'systems' },
    { label: 'Architecture Lab', href: '#architecture-lab', id: 'architecture-lab' },
    { label: 'Tech Ecosystem', href: '#tech-stack', id: 'tech-stack' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const currentThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
          : 'bg-slate-950/60 backdrop-blur-sm py-4 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-extrabold text-white text-lg shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            YA
          </div>
          <div>
            <div className="font-bold text-slate-100 text-lg tracking-tight flex items-center gap-2">
              {PERSONAL_INFO.name}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                IS Professional
              </span>
            </div>
            <div className="text-xs text-slate-300 font-mono font-medium">
              Systems • Architecture • Engineering
            </div>
          </div>
        </a>

        {/* Desktop Nav - High Contrast & Large Text */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Color Theme Switcher Dropdown */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-sky-400 transition-all shadow-sm"
              title="Change Color Theme"
              aria-label="Color Theme Switcher"
            >
              <Palette className="w-4 h-4 text-sky-400" />
              <span className="w-3 h-3 rounded-full border border-white/40 shadow-sm" style={{ backgroundColor: currentThemeObj.color }} />
              <span className="hidden md:inline text-xs">{currentThemeObj.name}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  Select Color Theme
                </div>
                <div className="space-y-1">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                        theme === t.id
                          ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40'
                          : 'text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full border border-white/40 shadow-sm shrink-0"
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.name}</span>
                      </div>
                      {theme === t.id && <Check className="w-4 h-4 text-sky-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-sky-400 border border-sky-500/40 hover:border-sky-400 transition-all shadow-sm group"
          >
            <FileText className="w-4.5 h-4.5 text-sky-400 group-hover:rotate-6 transition-transform" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Contact</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              const themeKeys = THEMES.map((t) => t.id);
              const nextIndex = (themeKeys.indexOf(theme) + 1) % themeKeys.length;
              setTheme(themeKeys[nextIndex]);
            }}
            className="p-2.5 rounded-xl text-slate-200 bg-slate-900 border border-slate-700 flex items-center gap-1.5 text-xs font-bold"
            aria-label="Toggle Color Theme"
          >
            <Palette className="w-5 h-5 text-sky-400" />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: currentThemeObj.color }} />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-900 border border-slate-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-sky-500/25 text-sky-300 border border-sky-500/50 font-bold'
                    : 'bg-slate-900 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">Theme Mode</span>
              <div className="flex gap-1.5">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${
                      theme === t.id ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-60'
                    }`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold bg-slate-900 text-sky-400 border border-sky-500/40 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center gap-2"
            >
              <span>Contact Yosef</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
