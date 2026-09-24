import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RevealEffects from '@/components/Reveal';
import { SITE } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline} — Göktürk, İstanbul`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'psikolog', 'klinik psikolog', 'göktürk psikolog', 'oyun terapisi',
    'grup terapisi', 'gebelikte psikolojik destek', 'doğum psikoloğu',
    'yeme bozukluğu', 'obezite psikolojisi', 'çocuk terapisi',
    'ergen terapisi', 'psikodrama', 'freya psikoloji',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Freya Psikoloji',
  alternateName: ['Freya', 'Freya Psikolojik Danışmanlık'],
  url: SITE.url,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <RevealEffects />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
