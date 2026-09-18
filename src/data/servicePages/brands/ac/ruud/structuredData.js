const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Ruud AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/ruud/",
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
        "name": "Ruud AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Ruud AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ruud Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ruud Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ruud AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ruud AC Gas Refilling",
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
            "name": "Omar U.",
          },
          "reviewBody":
            "FAJ’s Ruud AC repair service was fantastic. The technician arrived on time, diagnosed the problem quickly, and fixed my split AC efficiently. Highly recommend!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Max R.",
          },
          "reviewBody":
            "I had my central Ruud AC serviced by FAJ. The team was professional, courteous, and thorough. Everything works perfectly now.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahsan R.",
          },
          "reviewBody":
            "Emergency repair for my Ruud AC was handled exceptionally. FAJ technicians reached quickly and resolved the issue without delay.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/ruud/#breadcrumb",
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
          "name": "Ruud",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/ruud/",
        },
      ],
    },
  ],
};

export default structuredData;