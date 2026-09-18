const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Samsung AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3500",
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
        "name": "Samsung AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Samsung AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Samsung Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Samsung Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Samsung AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Samsung AC Gas Refilling",
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
            "name": "Omar H.",
          },
          "reviewBody":
            "Professional Samsung AC repair service in Dubai. The technician diagnosed the issue quickly and restored cooling efficiently.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima A.",
          },
          "reviewBody":
            "Excellent Samsung AC maintenance service. The team cleaned the filters and coils thoroughly and improved performance.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Yousef K.",
          },
          "reviewBody":
            "Quick response and reliable repair. My Samsung AC was not cooling properly, and FAJ fixed it the same day.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous (via Google)",
          },
          "reviewBody":
            "Highly recommended Samsung AC servicing company in Dubai. Skilled technicians and transparent pricing.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/#breadcrumb",
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
          "name": "Samsung",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/",
        },
      ],
    },
  ],
};

export default structuredData;