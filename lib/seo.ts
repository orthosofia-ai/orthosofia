export const siteConfig = {
  name: 'Cabinet Pluridisciplinaire Centre Ville | Casablanca',
  description: 'Cabinet pluridisciplinaire à Casablanca. Orthophoniste, Psychologue et Psychomotricienne. Prise en charge des troubles du langage, apprentissages et développement. Rendez-vous: 0654182804',
  url: 'https://www.orthophonistecasablanca.ma',
  ogImage: 'https://www.orthophonistecasablanca.ma/og-image.jpg',
  locale: 'fr_MA',
  author: 'Sofia EL FENE',
  keywords: [
    'orthophoniste casablanca',
    'orthophonie casablanca centre ville',
    'psychologue casablanca',
    'psychomotricienne casablanca',
    'troubles langage maroc',
    'dyslexie casablanca',
    'autisme casablanca',
    'bilan orthophonique casablanca',
    'rééducation langage maroc',
    'cabinet pluridisciplinaire casablanca',
    'Sofia EL FENE',
    'troubles apprentissages casablanca',
    'bégaiement casablanca',
    'retard langage maroc',
    'TDAH casablanca'
  ],
  phone: '0654182804',
  email: 'contact@orthophonistecasablanca.ma',
  address: {
    streetAddress: '23, Rue Abou Soufiane, Bd de Paris',
    addressLocality: 'Casablanca',
    addressRegion: 'Casablanca-Settat',
    postalCode: '20000',
    addressCountry: 'MA'
  },
  plusCode: 'H9VH+MR Casablanca',
  googleMapsUrl: 'https://maps.app.goo.gl/UZYhYESKLgGYDV866',
  openingHours: 'Mo-Sa',
  googleMapsPlaceId: '', // To be filled with actual Google My Business Place ID
  socialMedia: {
    facebook: 'https://www.facebook.com/share/1G8rLLtkJ3/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/cabinet_orthophonie_sofia?igsh=bmdwaHdsa2ZvazRp'
  }
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.ogImage,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5941,
      longitude: -7.6204
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Sofia EL FENE',
      jobTitle: 'Orthophoniste et Cadre de santé',
      description: 'Orthophoniste diplômée depuis plus de 10 ans'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'orthophonie et accompagnement',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Orthophonie',
            description: 'Évaluation et rééducation des troubles du langage oral et écrit'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psychologie',
            description: 'Accompagnement psychologique et bilans cognitifs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Psychomotricité',
            description: 'Prise en charge des troubles psychomoteurs'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '0'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
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
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    },
    url: article.url
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
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: '5'
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'MedicalBusiness',
      name: siteConfig.name,
      address: siteConfig.address
    }
  };
}

