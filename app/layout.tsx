import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
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
        url: '/sourdough-baking-tools.png',
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
    images: ['/sourdough-baking-tools.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" type="image/avif" href="/sourdough-baking-tools.avif" fetchPriority="high"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="preconnect" href="https://www.amazon.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://m.media-amazon.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.amazon.com" />
        {/* Cloudflare Web Analytics */}
        <script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ed533c19d9f74eb88d3b8c58833aea24"}'></script>
        {/* End Cloudflare Web Analytics */}

        {/* Google Analytics 4 */}
        <meta name="msvalidate.01" content="84E8964BD8ED98FC77391F61BC3B0433" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-58KC5RL1PG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-58KC5RL1PG');`
          }}
        />
      </head>
      <body className="bg-brand-cream text-brand-dark">
        <Header />
        <main>{children}</main>
        
        {/* Schema.org: WebSite + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://sourdough-hydrationcalculator.com/#website",
                  "url": "https://sourdough-hydrationcalculator.com/",
                  "name": "SourdoughCalc",
                  "description": "Free sourdough hydration calculator for home bakers.",
                  "dateModified": "2026-08-01",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://sourdough-hydrationcalculator.com/#organization",
                  "name": "SourdoughCalc",
                  "url": "https://sourdough-hydrationcalculator.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sourdough-hydrationcalculator.com/sourdough-baking-tools.png",
                    "width": 1200,
                    "height": 630
                  },
                  "sameAs": [
                    "https://x.com/sourdoughcalc"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "yanxi001studio@sourdough-hydrationcalculator.com",
                    "contactType": "customer support"
                  }
                }
              ]
            })
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
