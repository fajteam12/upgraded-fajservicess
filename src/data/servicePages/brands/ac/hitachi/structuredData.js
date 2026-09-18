const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Hitachi AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3300",
        "bestRating": "5",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai",
        },
        {
          "@type": "City",
          "name": "Sharjah",
        },
        {
          "@type": "City",
          "name": "Abu Dhabi",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hitachi AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Hitachi AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hitachi Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hitachi Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hitachi AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Hitachi AC Gas Refilling",
                },
              },
            ],
          },
        ],
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ali R.",
          },
          "reviewBody":
            "FAJ fixed my Hitachi AC quickly in JLT. Technician was professional and thorough. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara K.",
          },
          "reviewBody":
            "Our Hitachi AC was not cooling due to low refrigerant. FAJ refilled it and checked the entire system. Excellent service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Omar H.",
          },
          "reviewBody":
            "Scheduled maintenance for my Hitachi AC. Filters, coils, and compressor were cleaned and serviced. Very satisfied.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nadia T.",
          },
          "reviewBody":
            "Highly recommend FAJ for Hitachi AC repair. Technician arrived on time and repaired the AC efficiently.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.fajservices.ae/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.fajservices.ae/services/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Air Conditioning Repair",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Brands",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Hitachi",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/",
        },
      ],
    },
  ],
};

export default structuredData;