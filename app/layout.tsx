import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
  title: 'Yosef Abire — Information Systems & Technology Professional',
  description:
    'Portfolio of Yosef Abire, an Information Systems professional focused on technology systems, backend engineering, AI, digital marketplaces, and data-driven solutions.',
  keywords: [
    'Yosef Abire',
    'Information Systems Manager',
    'Technology Project Manager',
    'IT Program Manager',
    'Information Systems Analyst',
    'Backend Engineer',
    'Bahir Dar University',
    'AgroGebeya',
    'System Architecture',
    'LLM Evaluation',
  ],
  authors: [{ name: 'Yosef Abire' }],
  openGraph: {
    title: 'Yosef Abire — Information Systems & Technology Professional',
    description:
      'Designing backend-heavy digital systems, AI solutions, and data-driven platforms at the intersection of business and technology.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Yosef Abire Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yosef Abire — Information Systems & Technology Professional',
    description:
      'Designing backend-heavy digital systems, AI solutions, and data-driven platforms at the intersection of business and technology.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-theme="ocean">
      <body className="antialiased min-h-screen selection:bg-sky-500 selection:text-white font-sans text-base transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

