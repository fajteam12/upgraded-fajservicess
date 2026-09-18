const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name":
        "McQuay AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public",
      ],
      "url":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/",
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
        "name": "McQuay AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "McQuay AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "McQuay Split AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "McQuay Central AC Repair",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "McQuay AC Maintenance",
                },
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "McQuay AC Gas Refilling",
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
            "FAJ’s McQuay AC repair service was excellent. The technician diagnosed my split AC problem quickly and fixed it efficiently. Highly recommended!",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Max R.",
          },
          "reviewBody":
            "I had my central McQuay AC serviced by FAJ. The team was professional, thorough, and courteous. Everything works perfectly now.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ahsan R.",
          },
          "reviewBody":
            "Emergency repair for my McQuay AC was handled quickly. FAJ technicians arrived on time and resolved the issue without delay.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Aleem A.",
          },
          "reviewBody":
            "FAJ Technical Services took care of my McQuay AC maintenance. From scheduling to completion, the service was smooth, professional, and reliable.",
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mohsin S.",
          },
          "reviewBody":
            "My McQuay AC stopped cooling on a hot day. FAJ team arrived promptly and fixed it efficiently. Highly recommend their services!",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/#breadcrumb",
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
          "name": "McQuay",
          "item":
            "https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/",
        },
      ],
    },
  ],
};

export default structuredData;