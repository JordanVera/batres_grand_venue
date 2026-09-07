import type { Metadata } from 'next';
import { COMPANY } from './data';

export const SITE_URL = 'https://www.batresgrandvenue.com';

export const SEO = {
  title: 'Batres Grand Venue | Wedding & Quinceañera Hall in Humble, TX',
  description:
    'Family-owned banquet hall at 14803 Vera Dr in Humble, TX. 4,500 sq ft, grand staircase, crystal chandeliers, VIP suite, and packages for weddings and quinceañeras up to 250 guests.',
  keywords: [
    'Batres Grand Venue',
    'Humble TX wedding venue',
    'Humble quinceañera hall',
    'North Houston banquet hall',
    '14803 Vera Drive',
    'wedding reception Humble',
    'Houston quinceañera venue',
  ],
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = `${title} | ${COMPANY.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/hero.jpg', width: 1200, height: 800, alt: `${COMPANY.name} reception hall` }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function venueJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EventVenue', 'LocalBusiness'],
    name: COMPANY.name,
    description: SEO.description,
    url: SITE_URL,
    image: [`${SITE_URL}/hero.jpg`],
    telephone: COMPANY.phoneHref,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Humble',
      addressRegion: 'TX',
      postalCode: '77396',
      addressCountry: 'US',
    },
    maximumAttendeeCapacity: COMPANY.maxGuests,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(COMPANY.googleRating),
      reviewCount: String(COMPANY.reviewCount),
      bestRating: '5',
    },
    sameAs: [COMPANY.website, COMPANY.instagram, COMPANY.facebook].filter(Boolean),
  };
}
