const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Nikai AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/nikai/",
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
        "name": "Nikai AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Nikai AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nikai Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nikai Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nikai AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nikai AC Gas Refilling",
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
            "name": "Hassan R.",
          },
          "reviewBody":
            "Very professional Nikai AC repair service in Dubai. The technician quickly fixed the cooling issue and explained everything clearly.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aisha K.",
          },
          "reviewBody":
            "Excellent Nikai AC maintenance service. The filters and coils were cleaned properly and cooling improved significantly.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Bilal M.",
          },
          "reviewBody":
            "Fast response and reliable Nikai AC repair. My AC was not working and FAJ repaired it the same day.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous (via Google)",
          },
          "reviewBody":
            "Highly recommended Nikai AC servicing company in Dubai. Skilled technicians and fair pricing.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/nikai/#breadcrumb",
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
          "name": "Nikai",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/nikai/",
        },
      ],
    },
  ],
};

export default structuredData;