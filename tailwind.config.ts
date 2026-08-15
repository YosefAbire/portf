import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0E17',
          surface: '#111827',
          card: '#1F2937',
          cardBorder: '#374151',
          accent: '#0EA5E9',
          accentHover: '#0284C7',
          emerald: '#10B981',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          amber: '#F59E0B',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flow 3s linear infinite',
        'subtle-bounce': 'subtleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'executive-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, rgba(11, 15, 23, 0) 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
