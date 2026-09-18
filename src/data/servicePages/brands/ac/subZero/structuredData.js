const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Sub Zero AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/sub-zero/",
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
        "name": "Sub Zero AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Sub Zero AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sub Zero Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sub Zero Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sub Zero AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sub Zero AC Gas Refilling",
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
            "Professional Sub Zero AC repair service in Dubai. The technician quickly identified the issue and restored the cooling system efficiently. Very satisfied with the service.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nadia S.",
          },
          "reviewBody":
            "Excellent maintenance service for my Sub Zero AC. The team cleaned the filters and coils thoroughly and ensured everything was working perfectly.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rashid M.",
          },
          "reviewBody":
            "Quick response and reliable repair service. My Sub Zero AC was not cooling properly, and they fixed it the same day.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Anonymous (via Google)",
          },
          "reviewBody":
            "Highly recommended Sub Zero AC servicing company. Professional technicians and fair pricing.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/sub-zero/#breadcrumb",
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
          "name": "Sub Zero",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/sub-zero/",
        },
      ],
    },
  ],
};

export default structuredData;