const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Fujitsu AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3400",
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
        "name": "Fujitsu AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Fujitsu AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fujitsu Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fujitsu Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fujitsu AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fujitsu AC Gas Refilling",
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
            "name": "Ahmed M.",
          },
          "reviewBody":
            "FAJ Technical Services provided prompt and professional service for my Fujitsu AC in Dubai Marina. The technician fixed the issue quickly and explained everything clearly. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara H.",
          },
          "reviewBody":
            "Our Fujitsu AC was showing an E3 error. FAJ team diagnosed and repaired it efficiently. Very reliable and professional service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mohammed R.",
          },
          "reviewBody":
            "I scheduled maintenance for my Fujitsu AC and the technicians cleaned the filters, checked gas levels, and ensured everything worked perfectly. Excellent service!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Leena T.",
          },
          "reviewBody":
            "Highly satisfied with the Fujitsu AC repair service from FAJ. Punctual, professional, and affordable. My AC works like new again.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/#breadcrumb",
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
          "name": "Fujitsu",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/",
        },
      ],
    },
  ],
};

export default structuredData;