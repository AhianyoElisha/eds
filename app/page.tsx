import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Truck from "@/components/Truck";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ezar Delivery Service',
    url: 'https://edsghana.com',
    logo: 'https://edsghana.com/ezarlogo.png',
    description: 'Leading delivery and logistics service in Ghana specializing in warehouse pickup, multi-stop delivery, and pickup station network',
    telephone: '+233558773182',
    email: 'ezardelivery2@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GH',
      addressLocality: 'Ghana'
    },
    sameAs: [
      'https://facebook.com/ezardelivery',
      'https://instagram.com/ezardelivery',
      'https://twitter.com/ezardelivery',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500'
    },
    serviceType: [
      'Delivery Service',
      'Logistics Service',
      'Warehouse Pickup',
      'Multi-Stop Delivery',
      'Manifest Management',
      'Fleet Services'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Ghana'
    }
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://edsghana.com',
    name: 'Ezar Delivery Service',
    image: 'https://edsghana.com/ezarlogo.png',
    telephone: '+233558773182',
    email: 'ezardelivery2@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GH'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.6037,
      longitude: -0.1870
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    priceRange: '$$'
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Delivery and Logistics',
    provider: {
      '@type': 'Organization',
      name: 'Ezar Delivery Service',
      telephone: '+233558773182'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ghana'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Warehouse Pickup Service'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Multi-Stop Delivery'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manifest Management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Route Optimization'
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      
      <Hero />
      <VisionMission />
      <Truck />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
