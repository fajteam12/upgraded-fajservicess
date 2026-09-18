const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "LG AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3200",
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
        "name": "LG AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "LG AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "LG Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "LG Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "LG AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "LG AC Gas Refilling",
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
            "name": "Rashid A.",
          },
          "reviewBody":
            "FAJ repaired my LG AC in Dubai Marina. The technician was professional and completed the repair quickly. Highly satisfied.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara M.",
          },
          "reviewBody":
            "My LG AC was not cooling. FAJ refilled gas and cleaned the coils. Excellent service and very reliable team.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Omar K.",
          },
          "reviewBody":
            "Scheduled maintenance for my LG split AC. Filters and compressor were inspected. Service was punctual and professional.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima R.",
          },
          "reviewBody":
            "Quick and efficient LG AC repair in Jumeirah. FAJ team was friendly and knowledgeable. Highly recommend.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/#breadcrumb",
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
          "name": "LG",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/",
        },
      ],
    },
  ],
};

export default structuredData;