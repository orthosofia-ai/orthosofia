export const siteConfig = {
  name: "Cabinet d'orthophonie Centre ville",
  shortName: 'Orthophoniste Centre Ville',
  description:
    "Cabinet d'orthophonie Centre ville à Casablanca. Orthophonie, psychologie et psychomotricité. 23, Rue Abou Soufiane, Bd de Paris. Rendez-vous : 0654 18 28 04.",
  url: 'https://www.orthophonistecentreville.com',
  ogImage: 'https://www.orthophonistecentreville.com/og-image.svg',
  locale: 'fr_MA',
  author: 'Sofia EL FENE',
  keywords: [
    'orthophoniste centre ville',
    'orthophonistecentreville',
    'orthophoniste casablanca',
    'orthophonie casablanca centre ville',
    'cabinet orthophonie centre ville',
    'psychologue casablanca',
    'psychomotricienne casablanca',
    'troubles langage maroc',
    'dyslexie casablanca',
    'autisme casablanca',
    'bilan orthophonique casablanca',
    'rééducation langage maroc',
    'Sofia EL FENE',
    'Sofia Elfenne',
    'bégaiement casablanca',
    'TDAH casablanca',
  ],
  phone: '0654182804',
  phoneDisplay: '0654 18 28 04',
  phoneIntl: '+212654182804',
  email: 'contact@orthophonistecentreville.com',
  address: {
    streetAddress: '23, Rue Abou Soufiane, Bd de Paris',
    addressLocality: 'Casablanca',
    addressRegion: 'Casablanca-Settat',
    postalCode: '20000',
    addressCountry: 'MA',
  },
  plusCode: 'H9VH+MR Casablanca',
  geo: {
    latitude: 33.594152,
    longitude: -7.620405,
  },
  googleMapsUrl: 'https://maps.app.goo.gl/UZYhYESKLgGYDV866',
  googleListingUrl: 'https://share.google/ISsWYzdE3WCNcYi2X',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=33.594152,-7.620405&z=17&output=embed',
  openingHours: 'Mo-Sa 09:00-18:00',
  openingHoursDisplay: 'Lundi – Samedi, 9h – 18h',
  ratingValue: '5.0',
  reviewCount: '30',
  googleMapsPlaceId: '',
  socialMedia: {
    facebook: 'https://www.facebook.com/share/1G8rLLtkJ3/?mibextid=wwXIfr',
    instagram:
      'https://www.instagram.com/cabinet_orthophonie_sofia?igsh=bmdwaHdsa2ZvazRp',
  },
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${siteConfig.url}#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+212${siteConfig.phone.slice(1)}`,
    email: siteConfig.email,
    image: siteConfig.ogImage,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Sofia EL FENE',
      jobTitle: 'Orthophoniste et Cadre de santé',
      description: 'Orthophoniste diplômée depuis plus de 10 ans',
    },
    sameAs: [
      siteConfig.googleListingUrl,
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: "Services d'orthophonie et accompagnement",
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Orthophonie',
            description:
              'Évaluation et rééducation des troubles du langage oral et écrit',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psychologie',
            description: 'Accompagnement psychologique et bilans cognitifs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psychomotricité',
            description: 'Prise en charge des troubles psychomoteurs',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.ratingValue,
      reviewCount: siteConfig.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    url: article.url,
  };
}

export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'MedicalBusiness',
      name: siteConfig.name,
      address: siteConfig.address,
    },
  };
}
