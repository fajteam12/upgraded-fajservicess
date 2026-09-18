const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Haier AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/haier/",
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
        "name": "Haier AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Haier AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Haier Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Haier Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Haier AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Haier AC Gas Refilling",
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
            "name": "Sami R.",
          },
          "reviewBody":
            "FAJ repaired my Haier AC in Dubai Marina quickly. Technician was professional and explained the repair process. Excellent service!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mona A.",
          },
          "reviewBody":
            "Our Haier AC was not cooling due to low refrigerant. FAJ refilled the gas and checked the system. Very reliable and professional.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Hassan F.",
          },
          "reviewBody":
            "Scheduled maintenance for my Haier AC. Filters, coils, and compressor were serviced thoroughly. Happy with the service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Laila T.",
          },
          "reviewBody":
            "Highly recommended Haier AC repair by FAJ. Technician arrived on time and fixed the AC efficiently.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/haier/#breadcrumb",
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
          "name": "Haier",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/haier/",
        },
      ],
    },
  ],
};

export default structuredData;