const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Daikool AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1200",
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
        "name": "Daikool AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Daikool AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daikool Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daikool Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daikool AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daikool AC Gas Refilling",
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
            "name": "Ali H.",
          },
          "reviewBody":
            "FAJ Technical Services provided excellent service for my Daikool AC in Dubai Marina. The technician was punctual, professional, and fixed the AC quickly. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fatima S.",
          },
          "reviewBody":
            "I scheduled maintenance for my Daikool AC and the team cleaned the filters, checked the gas, and ensured optimal performance. Very satisfied with the service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Omar R.",
          },
          "reviewBody":
            "Our Daikool AC showed EP error, and FAJ's team diagnosed and fixed it efficiently. Professional and reliable AC repair service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara T.",
          },
          "reviewBody":
            "Prompt and affordable Daikool AC repair service from FAJ. The technician explained the issues clearly and completed the job quickly. Highly recommended!",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/#breadcrumb",
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
          "name": "Daikool",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/",
        },
      ],
    },
  ],
};

export default structuredData;