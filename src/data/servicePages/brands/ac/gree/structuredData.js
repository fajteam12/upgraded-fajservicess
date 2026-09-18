const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Gree AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/",
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
        "name": "Gree AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Gree AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gree Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gree Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gree AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gree AC Gas Refilling",
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
            "name": "Omar S.",
          },
          "reviewBody":
            "Excellent Gree AC repair service. The technician fixed my unit quickly and explained all the maintenance tips. Highly professional!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara K.",
          },
          "reviewBody":
            "Reliable Gree AC maintenance. Filters and coils cleaned thoroughly, cooling improved instantly. Very happy with the service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ali R.",
          },
          "reviewBody":
            "Quick and efficient Gree AC repair. My unit was not cooling properly, but the FAJ team fixed it the same day.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous (via Google)",
          },
          "reviewBody":
            "Professional and trustworthy Gree AC servicing company. Fair pricing and skilled technicians.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/#breadcrumb",
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
          "name": "Gree",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/",
        },
      ],
    },
  ],
};

export default structuredData;