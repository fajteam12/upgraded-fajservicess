const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Goodman AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1100",
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
        "name": "Goodman AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Goodman AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Goodman Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Goodman Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Goodman AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Goodman AC Gas Refilling",
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
            "name": "Khalid A.",
          },
          "reviewBody":
            "FAJ Technical Services fixed my Goodman AC promptly in Jumeirah. The technician was professional and explained the issue clearly. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Reem S.",
          },
          "reviewBody":
            "Our Goodman AC was not cooling due to low gas. FAJ team refilled it and checked the system thoroughly. Efficient and reliable service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Omar H.",
          },
          "reviewBody":
            "Scheduled maintenance for my Goodman AC and the filters, coils, and compressor were serviced perfectly. Very satisfied!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Lina T.",
          },
          "reviewBody":
            "Excellent Goodman AC repair by FAJ. Technician arrived on time, worked efficiently, and ensured my AC worked perfectly.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/#breadcrumb",
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
          "name": "Goodman",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/",
        },
      ],
    },
  ],
};

export default structuredData;