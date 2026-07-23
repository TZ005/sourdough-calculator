import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://sourdough-hydrationcalculator.com/'),
  title: 'Sourdough Hydration Calculator - Free Tool (2026) | SourdoughCalc',
  description: 'Free sourdough hydration calculator. Input flour weight, get water, salt & starter ratios instantly. Includes hydration chart for 50 percent to 100 percent.',
  keywords: ['sourdough hydration calculator', 'sourdough hydration', 'hydration calculator', 'sourdough recipe calculator'],
  openGraph: {
    title: 'Sourdough Hydration Calculator - Free Tool',
    description: 'Calculate water, salt, and starter ratios for any sourdough recipe instantly.',
    type: 'website',
    url: 'https://sourdough-hydrationcalculator.com/',
    siteName: 'SourdoughCalc',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SourdoughCalc - Free Hydration Calculator for Bakers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourdough Hydration Calculator - Free Tool',
    description: 'Calculate water, salt, and starter ratios for any sourdough recipe instantly.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.amazon.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://m.media-amazon.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.amazon.com" />
        {/* Cloudflare Web Analytics */}
        <script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ed533c19d9f74eb88d3b8c58833aea24"}'></script>
        {/* End Cloudflare Web Analytics */}
      </head>
      <body className="bg-brand-cream text-brand-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
