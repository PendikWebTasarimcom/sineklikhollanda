import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://sineklikhollanda.com'),
  title: {
    default: 'Hızlı Sineklik Hollanda - Plise, Jaluzi, Zip Perde Çözü',
    template: '%s | Sineklik Hollanda',
  },
  description:
    "Kaliteli Hollanda sineklik ve perde sistemleri. Plise, jaluzi, honeycomb, zip perde çözümleri. Hızlı teslimat, profesyonel kurulum, uygun fiyatlı hizmetler. Hemen sipariş verin.",
  keywords: [
    'sineklik hollanda',
    'hollanda sineklik',
    'plise sineklik hollanda',
    'plise perde hollanda',
    'jaluzi perde hollanda',
    'honeycomb perde hollanda',
    'zip perde hollanda',
    'düet perde hollanda',
    'vliegenscherm nederland',
    'insect screen netherlands',
    'raamdecoratie nederland',
    'sineklik amsterdam',
    'sineklik rotterdam',
  ],
  authors: [{ name: 'Sineklik Hollanda', url: 'https://sineklikhollanda.com' }],
  creator: 'Sineklik Hollanda',
  publisher: 'Sineklik Hollanda',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['nl_NL'],
    url: 'https://sineklikhollanda.com',
    siteName: 'Sineklik Hollanda',
    title: 'Sineklik Hollanda - Plise, Jaluzi, Zip Perde',
    description:
      "Hollanda her yere 4-10 günde plise sineklik, jaluzi, honeycomb, zip perde teslimatı. Kaliteli ürünler, hızlı kurulum.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sineklik Hollanda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SineklikNL',
    creator: '@SineklikNL',
    title: 'Sineklik Hollanda',
    description:
      "Hollanda'nın tüm bölgelerine 4-10 gün sineklik ve perde sistemi teslimatı.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sineklikhollanda.com',
    languages: {
      'tr-TR': 'https://sineklikhollanda.com',
      'nl-NL': 'https://sineklikhollanda.com/?lang=nl',
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  category: 'home improvement',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sineklikhollanda.com/#organization',
      name: 'Sineklik Hollanda',
      url: 'https://sineklikhollanda.com',
      sameAs: [
        'https://www.facebook.com/FenetreSystems/',
        'https://www.instagram.com/fenetresystems/',
        'https://x.com/FenetreSystems',
        'https://www.linkedin.com/company/fenetresystems/',
        'https://tr.pinterest.com/fenetresystems/',
        'https://www.youtube.com/@FenetreSystems',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+90-540-336-3873',
        contactType: 'customer service',
        availableLanguage: ['Turkish', 'Dutch'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sineklikhollanda.com/#website',
      url: 'https://sineklikhollanda.com',
      name: 'Sineklik Hollanda',
      description: "Hollanda'ya sineklik ve perde sistemi",
      publisher: { '@id': 'https://sineklikhollanda.com/#organization' },
      inLanguage: ['tr-TR', 'nl-NL'],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sineklikhollanda.com/#localbusiness',
      name: 'Sineklik Hollanda',
      image: 'https://sineklikhollanda.com/og-image.jpg',
      url: 'https://sineklikhollanda.com',
      telephone: '+905403363873',
      email: 'info@fenetresystems.com',
      priceRange: '€€',
      servesCuisine: undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cumhuriyet Mah. 2233 Sok. No:4/A',
        addressLocality: 'Gebze',
        addressRegion: 'Kocaeli',
        addressCountry: 'TR',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Netherlands',
      },
      hasMap: 'https://maps.google.com/?q=Cumhuriyet+Mah+2233+Sok+Gebze+Kocaeli',
      openingHours: 'Mo-Fr 08:00-18:00',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://sineklikhollanda.com/#products',
      name: 'Ürünlerimiz',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Sineklik', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 2, name: 'Plise Sineklik', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 3, name: 'Plise Perde', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 4, name: 'Jaluzi Perde', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 5, name: 'Düet Perde', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 6, name: 'Honeycomb Perde', url: 'https://sineklikhollanda.com/#urunler' },
        { '@type': 'ListItem', position: 7, name: 'Zip Perde', url: 'https://sineklikhollanda.com/#urunler' },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
