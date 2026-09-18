const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Whirlpool AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/whirlpool/",
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
        "name": "Whirlpool AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Whirlpool AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Whirlpool Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Whirlpool Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Whirlpool AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Whirlpool AC Gas Refilling",
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
            "Professional Whirlpool AC repair service. Technicians quickly resolved the cooling issue and ensured everything was working efficiently.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Leena S.",
          },
          "reviewBody":
            "Excellent maintenance service. Filters and coils of my Whirlpool AC were cleaned thoroughly and the unit works perfectly.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Fahad M.",
          },
          "reviewBody":
            "Fast and reliable repair service. My Whirlpool AC was not cooling properly, and they fixed it the same day.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous (via Google)",
          },
          "reviewBody":
            "Highly recommended Whirlpool AC servicing company. Skilled technicians and fair pricing.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/whirlpool/#breadcrumb",
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
          "name": "Whirlpool",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/whirlpool/",
        },
      ],
    },
  ],
};

export default structuredData;