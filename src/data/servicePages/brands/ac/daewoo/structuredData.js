const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "Daewoo AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/daewoo/",
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
        "name": "Daewoo AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Daewoo AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daewoo Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daewoo Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daewoo AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daewoo AC Gas Refilling",
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
            "name": "Sarah K.",
          },
          "reviewBody":
            "FAJ Technical Services provided excellent service for my Daewoo AC in Jumeirah. The technician was punctual, professional, and repaired the AC efficiently. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahmed R.",
          },
          "reviewBody":
            "I called FAJ for Daewoo AC maintenance and they were amazing. Cleaned the coils, checked gas levels, and made sure everything worked perfectly. Very satisfied.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Leena T.",
          },
          "reviewBody":
            "Prompt and affordable Daewoo AC repair service from FAJ. The technician explained the issues clearly and completed the job quickly. I would definitely use them again.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mohammed S.",
          },
          "reviewBody":
            "Our Daewoo inverter AC showed E2 error. FAJ team diagnosed and fixed it in no time. Professional and reliable service!",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/daewoo/#breadcrumb",
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
          "name": "Daewoo",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/daewoo/",
        },
      ],
    },
  ],
};

export default structuredData;