// ==========================================================================
// Appliances Maintenance Contract (AMC) - Consolidated Page Data
// Content sourced word-for-word from AppliancesMaintenanceContractDetail.jsx,
// MaintenanceContract.jsx, AMCTestimonial.json, and AMCFaqs.json.
// Layout & section structure aligned with Figma AMC design (node 341:3159).
// ==========================================================================

const seoData = {
  title: "Home Appliances AMC Services | Maintenance Contract Dubai",
  description: "Explore reliable home appliances AMC services in Dubai. FAJ provides expert annual maintenance contracts for both built-in and freestanding appliances",
  keywords: "Home appliances, Appliances AMC, Appliances Maintenance Contract, Kitchen Equipment AMC, Kitchen Appliances AMC, Dubai Appliances Service, Appliance Repair Dubai, Appliance Service Dubai",
  author: "FAJ Technical Services L.L.C",
  businessName: "Home Appliances AMC Services with Best Maintenance Contract in Dubai",
  url: "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/",
  image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/home-appliances-repair-new-design-images/home-appliance-amc-service-top/public",
  serviceType: [
    "Home Appliance AMC",
    "Annual Maintenance Contract",
    "Planned Preventive Maintenance",
    "Refrigerator AMC",
    "Washing Machine AMC",
    "Oven AMC",
    "Dishwasher AMC"
  ],
  areaServed: [
    "Dubai",
    "Sharjah",
    "Abu Dhabi"
  ],
  breadcrumbs: [
    {
      name: "Home",
      url: "https://www.fajservices.ae/"
    },
    {
      name: "Services",
      url: "https://www.fajservices.ae/services/"
    },
    {
      name: "Home Appliances Repair",
      url: "https://www.fajservices.ae/services/home-appliances-repair/"
    },
    {
      name: "Appliances AMC Service",
      url: "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/"
    }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Home Appliances AMC Services with Best Maintenance Contract in Dubai",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/",
      "telephone": "+971 4 330 0002",
      "priceRange": "AED 100 - AED 2500",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3430",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Appliances AMC Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "AMC Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Refrigerator AMC" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washing Machine AMC" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oven AMC" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwasher AMC" } }
            ]
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.fajservices.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.fajservices.ae/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Home Appliances Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Appliances AMC Service",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/"
        }
      ]
    }
  ]
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae"
};

// Section 1: Hero
const heroData = {
  title: "Best Home Appliances AMC Services - Maintenance Contract in Dubai, UAE",
  hideSubtitle: true,
  paragraphs: [
    "FAJ has been providing commercial kitchen equipment and appliance maintenance contract services in Dubai, Sharjah, and Abu Dhabi since 2010.",
    "Regular Planned Preventive Maintenance (PPM) is essential for keeping appliances efficient and minimising unexpected failures. As appliances age, they become more prone to breakdowns, often at inconvenient times."
  ],
  highlights: [
    {
      icon: "award",
      title: "Established Since 2010",
      description: "Reliability, Diversity, Integrity, and Quality."
    },
    {
      icon: "shield",
      title: "Workmanship Warranty",
      description: "Repair and service warranty support."
    },
    {
      icon: "clock",
      title: "7-Day Service Response",
      description: "Fast assistance across Dubai"
    }
  ],
  buttonStyle: "classic",
  showPhone: false,
  showCall: false,
  showWhatsapp: true,
  whatsapp: "971507464712",
  phone: "",
  image: {
    id: "home-appliances-repair-new-design-images/home-appliance-amc-service-top",
    src: "/img/home-appliances-repair-new-design-images/home-appliance-amc-service-top.webp",
    alt: "Best Home Appliances AMC Services - Maintenance Contract in Dubai, UAE",
    width: 853,
    height: 853
  }
};

// Section 2: Centered Overview Copy
const overviewData = {
  id: "appliance-amc-overview",
  title: "Complete AMC & Emergency Support",
  plain: true,
  paragraphs: [
    "With FAJ Appliance Services, our annual Domestic or Commercial Appliances Contract offers peace of mind by providing a predictable budget for maintenance, helping you avoid unexpected repair costs.",
    "Contact us today to book a technician for an inspection and arrange your Appliances AMC Services Contract Cover to start now."
  ]
};

// Section 3: Service Video (YouTube video on left, copy + WhatsApp CTA on right)
const videoData = {
  id: "appliance-amc-video",
  eyebrow: "RELIABLE MAINTENANCE CONTRACTS",
  title: "Appliances Maintenance Contract",
  description: [
    "If you need AMC services for kitchen equipment and appliances, contact us for the best and most reliable service throughout the year.",
    "Enjoy peace of mind knowing that your kitchen equipment and appliances are running smoothly for your business. We've got you covered with cooking, baking, cooling, refrigeration, laundry equipment, ice makers, dishwashers, and other appliances."
  ],
  frameTitle: "Home appliance annual maintenance contract service video",
  videoId: "boj7h-gOf7M",
  variant: "framed",
  blockInteraction: true,
  allowFullScreen: false,
  parameters: {
    autoplay: "1",
    mute: "0",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    showinfo: "0",
    loop: "1",
    playlist: "boj7h-gOf7M",
    playsinline: "1",
    cc_load_policy: "0",
    disablekb: "1"
  }
};

// Section 4: Planned Preventative Maintenance (PPM) Services (Centered block below video)
const ppmOverviewData = {
  id: "appliance-amc-ppm",
  eyebrow: "Reliable Maintenance Contracts",
  title: "Planned Preventative Maintenance (PPM) Services",
  plain: true,
  paragraphs: [
    "Our appliances technician can create a customized Planned Preventative Maintenance Package for your house or business properties.",
    "This package is created to keep your washing machines, dryers, dishwashers, ovens, refrigerators, and coffee machines running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and the costs associated with them.",
    "Our Planned Preventative Maintenance Package includes repair, maintenance, and testing, making it ideal for both major and small appliances across all properties. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns."
  ]
};

// Section 5: Split Media (Header above, 5 bullets left, image right)
const maintenanceImportanceData = {
  id: "appliance-amc-importance",
  eyebrow: "QUALITY ASSURANCE",
  title: "The Importance of Kitchen Equipment Maintenance Contract Service",
  description: "In a commercial kitchen, keeping your equipment efficient and safe is essential. Regular maintenance is not merely a routine task but a vital necessity that can greatly affect your business.",
  headerAbove: true,
  imageSide: "right",
  checklistColumns: 1,
  image: {
    id: "Cooking-Range-Repair-Nearby-You",
    alt: "Appliances AMC Services",
    width: 800,
    height: 600
  },
  bullets: [
    {
      title: "Ensures Compliance:",
      description: "Food safety is vital for food service businesses. Regular equipment maintenance prevents contamination and ensures hygienic food preparation."
    },
    {
      title: "Enhances Efficiency and Productivity:",
      description: "In a bustling kitchen, effective equipment is crucial for maintaining productivity and satisfying customer demands."
    },
    {
      title: "Enhances Safety for Staff:",
      description: "A safe working environment is crucial for your staff's well-being. Regular maintenance helps prevent accidents and injuries from faulty equipment."
    },
    {
      title: "Maintains Consistent Food Quality:",
      description: "Consistent food quality is vital for customer satisfaction and repeat business. Regular maintenance ensures your equipment functions properly for uniform cooking results."
    },
    {
      title: "Cost Savings on Repairs:",
      description: "Addressing minor issues quickly can save your business on repairs and emergency calls. Regular kitchen maintenance is essential for the longevity, efficiency, and safety of your equipment."
    }
  ]
};

// Section 6: Common Kitchen Equipment Problems (4x2 Numbered Grid)
const commonProblemsData = {
  id: "amc-common-problems",
  eyebrow: "RISK MANAGEMENT",
  title: "Common Kitchen Equipment Problems That May Require Maintenance",
  items: [
    {
      title: "Poor Maintenance",
      description: "Ignoring regular maintenance of kitchen equipment can cause wear and tear, greatly impacting its overall efficiency and long-term lifespan."
    },
    {
      title: "Equipment Failure",
      description: "In the hospitality industry, commercial kitchen equipment is a crucial asset. Its design optimizes operations, so any failure can cause significant disruptions."
    },
    {
      title: "Improper Storage",
      description: "To prevent food contamination, it's essential to store food at the correct temperatures, label and date all items, and use appropriate storage containers."
    },
    {
      title: "Food Poisoning",
      description: "Foodborne illness occurs when food contaminated with harmful bacteria, viruses, or toxins is consumed. Examples include aflatoxins and raw kidney beans."
    },
    {
      title: "Leaking Appliances",
      description: "Leaks in kitchen appliances are usually due to damaged gaskets, seals, or hoses. If you spot a leak, turn off the appliance and the water supply to prevent damage."
    },
    {
      title: "Commercial Kitchen Fires",
      description: "Commercial kitchen fires pose a serious hazard in the restaurant industry, occurring frequently and leading to devastating consequences."
    },
    {
      title: "Equipment Overheating",
      description: "Overheating is a common issue with commercial kitchen equipment like ovens and fryers, often resulting from various performance-affecting factors."
    },
    {
      title: "Electrical Issues",
      description: "As we enhance kitchen efficiency with electrical appliances, increased reliance can lead to issues that need prompt attention to ensure safety and functionality."
    }
  ]
};

// Section 7: Maintenance Services Offered (5 Cards 3+2 with Corner Accent + Bottom Callout + WhatsApp CTA)
const servicesOfferedData = {
  id: "appliance-amc-services",
  eyebrow: "PROFESSIONAL SOLUTIONS",
  title: "HERE ARE THE MAINTENANCE SERVICES WE OFFER FOR KITCHEN EQUIPMENTS",
  description: "Here are some key points to consider for maintaining commercial kitchen equipment:",
  items: [
    {
      icon: "calendar",
      title: "SERVICE SCHEDULING",
      description: "Regular maintenance should be scheduled at specific intervals, such as weekly, monthly, or quarterly, depending on the equipment type and its usage."
    },
    {
      icon: "amc-contract",
      title: "Preventive Maintenance",
      description: "This involves cleaning, lubricating, and inspecting kitchen equipment to identify and resolve potential issues before they escalate into major problems."
    },
    {
      icon: "repair",
      title: "Repair and Replacements",
      description: "Timely repairs or replacements are essential to prevent equipment failure and reduce downtime."
    },
    {
      icon: "safety-compliance",
      title: "SAFETY",
      description: "Safety should be a top priority when maintaining equipment. Staff should be trained on proper safety procedures and equipment should be regularly inspected for potential hazards."
    },
    {
      icon: "certified-expert",
      title: "Professional Assistance",
      description: "FAJ professional technician for major repairs and maintenance is important, especially for equipment requiring specialized skills."
    }
  ],
  bottomTitle: "Schedule Your FAJ Appliances Maintenance Contract Services Today!",
  bottomDescription: "We provide hotel kitchen equipment maintenance in the UAE to ensure safe operations and extend kitchen equipment life."
};

// Section 8: Benefits Of Regular Appliance Service and Maintenance (Dark Blue 8 Cards)
const benefitsData = {
  eyebrow: "PREVENTIVE MAINTENANCE OUTCOMES",
  title: "Benefits Of Regular Appliance Service and Maintenance in Dubai",
  description: "",
  stats: [
    {
      value: "2010",
      label: "SERVING THE UAE SINCE"
    },
    {
      value: "7 DAY",
      label: "SUPPORT AVAILABLE"
    }
  ],
  benefits: [
    {
      id: "amc-routine",
      number: "01",
      title: "Routine Service",
      description: "Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.",
      icon: "gear-precision"
    },
    {
      id: "amc-on-call",
      number: "02",
      title: "On-call services",
      description: "Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.",
      icon: "phone-support"
    },
    {
      id: "amc-parts",
      number: "03",
      title: "Genuine Spare Parts",
      description: "Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.",
      icon: "genuine-parts"
    },
    {
      id: "amc-costs",
      number: "04",
      title: "Maintenance Costs",
      description: "High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.",
      icon: "dollar-savings"
    },
    {
      id: "amc-efficiency",
      number: "05",
      title: "Increased Efficiency",
      description: "Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.",
      icon: "zap"
    },
    {
      id: "amc-value",
      number: "06",
      title: "Cost Efficiency",
      description: "FAJ a Save hand maintenance. Here's a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.",
      icon: "budget-check"
    },
    {
      id: "amc-reporting",
      number: "07",
      title: "Report and Updates",
      description: "FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.",
      icon: "inspection-checklist"
    },
    {
      id: "amc-experts",
      number: "08",
      title: "Experts and Trained",
      description: "FAJ technicians to provide customers with effective maintenance, repair for commercial kitchen equipment to ensure satisfaction.",
      icon: "certified-expert"
    }
  ]
};

// Section 9: Why Choose FAJ (6 Cards 3x2 + WhatsApp CTA)
const whyChooseUsData = {
  id: "why-choose-faj-appliance-amc",
  eyebrow: "WHY CHOOSE FAJ ?",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "Flexible appliance maintenance coverage, practical scheduling and experienced technicians across the UAE.",
  items: [
    {
      icon: "fast-response",
      badge: "PRIORITY SUPPORT",
      title: "Reliable, Priority, and Quick",
      description: "You can count on efficient service! Our same-day repair or next-day service visits ensure that your needs are met quickly."
    },
    {
      icon: "gear-precision",
      badge: "TECHNICAL EXPERTISE",
      title: "We Are Experts",
      description: "We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs."
    },
    {
      icon: "peace-of-mind",
      badge: "PREVENTIVE CARE",
      title: "Feeling Of Calm",
      description: "With a maintenance contract, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind."
    },
    {
      icon: "coins-stack",
      badge: "CLEAR VALUE",
      title: "Great Value",
      description: "Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai."
    },
    {
      icon: "calendar-check",
      badge: "FLEXIBLE SCHEDULING",
      title: "You Are in Control",
      description: "Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
      icon: "shield",
      badge: "SINCE 2010",
      title: "Trustworthy",
      description: "Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands."
    }
  ]
};

// Section 10: Brands Directory (44 Brands from old site)
const brandsData = {
  eyebrow: "MULTI-BRAND EXPERTISE",
  title: "We are specialise in Appliances services for the following brands",
  description: "Search supported appliance brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search appliance brands",
  searchPlaceholder: "Search appliance brand",
  emptyMessage: "No matching appliance brand was found. Contact us with the model details.",
  showAllLabel: "Show All Brands",
  showLessLabel: "Show Fewer Brands",
  initialCount: 12,
  actionLabel: "Request AMC Service",
  items: [
    {
      name: "LG Appliance Service",
      href: "/services/home-appliances-repair/brands/lg/",
      description: "FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked."
    },
    {
      name: "Samsung Appliance Service",
      href: "/services/home-appliances-repair/brands/samsung/",
      description: "If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai."
    },
    {
      name: "Electrolux Appliance Service",
      href: "/services/home-appliances-repair/brands/electrolux/",
      description: "When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE."
    },
    {
      name: "Bosch Appliance Service",
      href: "/services/home-appliances-repair/brands/bosch/",
      description: "If you are looking for the best Bosch refrigerator repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range, Washing machine, refrigerator service provider in the area."
    },
    {
      name: "Viking Appliance Service",
      href: "/services/home-appliances-repair/brands/viking/",
      description: "Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking refrigerator, range or oven repair in Dubai, rely on FAJ."
    },
    {
      name: "Daewoo Appliance Service",
      href: "/services/home-appliances-repair/brands/daewoo/",
      description: "We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more."
    },
    {
      name: "Siemens Appliance Service",
      href: "/services/home-appliances-repair/brands/siemens/",
      description: "Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!"
    },
    {
      name: "Teka Appliance Service",
      href: "/services/home-appliances-repair/brands/teka/",
      description: "If you're searching for the best Teka appliances repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area."
    },
    {
      name: "AEG",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Ariston",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Beko",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Blomberg",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Faber",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Fagor",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Fisher and Paykel",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Foster",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Gaggenau",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Hitachi",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Hoover",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Indesit",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Neff",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Smeg",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Sub Zero",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Terim",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Whirlpool",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Zanussi",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "De Dietrich",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Baumatic",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Bertazzoni",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Bompani",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Boston",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Brandt",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Gibson",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Gorenje",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Hisense",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Kelvinator",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Kenmore",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Panasonic",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Sanyo",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Sears",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Wolf",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Haier",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Elica",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Marvel",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Miele",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Maytag",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Toshiba",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Thermador",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Sharp",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Admiral",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Aftron",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    },
    {
      name: "Unimac",
      description: "Domestic and commercial appliance maintenance support in Dubai."
    }
  ]
};

// Section 11: Service Contracts (3 Dark-Theme Plan Cards matching MaintenanceContract.jsx)
const contractsData = {
  id: "appliance-amc-maintenance-contracts",
  eyebrow: "Service Contracts",
  title: "Flexible Home Appliance Maintenance Plans",
  description: "Choose scheduled preventive care and breakdown support suited to your appliances, property and service priorities.",
  featuredIndex: 0,
  actionLabel: "Get a quick quote",
  plans: [
    {
      title: "Maintenance Contract (Yearly)",
      badge: "BEST VALUE",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "2 and 3 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      title: "Maintenance Contract (6 Months)",
      badge: "POPULAR",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 and 2 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      title: "Maintenance Contract (3 Months)",
      badge: "FLEXIBLE",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    }
  ],
  footnote: "Terms and conditions apply. Custom packages are available for villas, apartments, landlords and multi-property customers."
};

// Section 12: News & Updates / Blogs (Shared 3 Real Linked Home Appliance Articles)
const blogsData = {
  id: "appliance-amc-blogs",
  eyebrow: "NEWS & UPDATES",
  title: "WE DELIVER RELIABLE, AFFORDABLE APPLIANCE AMC SERVICES WITH EXPERT SUPPORT",
  description: "Helpful advice and guides from our appliance service engineers on keeping your home and kitchen equipment running smoothly with planned maintenance.",
  button: {
    label: "VIEW ALL ARTICLES",
    href: "/blog/"
  },
  items: [
    {
      image: "How-to-Ensure",
      title: "How to Ensure a Safe, Successful Installation and Upgradation of Kitchen Appliances",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description: "Learn how to ensure safe and successful installation and upgradation of freestanding and built-in kitchen appliances with expert technician guidance.",
      href: "/blog/safe-successful-kitchen-appliance-installation/"
    },
    {
      image: "blogs/gas-cooker",
      title: "The Gas Cooker: A Reliable Appliance for Modern Kitchens",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description: "The gas cooker is well-known and dependable among kitchen appliances. Explore its features, benefits, and safety aspects for modern kitchens.",
      href: "/blog/the-gas-cooker-a-reliable-appliance-for-modern-kitchens/"
    },
    {
      image: "How-to-Clean-Your-Oven",
      title: "How to Clean Your Oven: Tips for Domestic and Commercial Kitchens",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description: "Discover expert tips and proven methods for cleaning appliances, removing tough grease, and keeping equipment in pristine condition.",
      href: "/blog/how-to-clean-your-oven/"
    }
  ]
};

// Section 13: Testimonials (Exact 10 reviews from AMCTestimonial.json)
const testimonialsData = {
  id: "appliance-amc-reviews",
  eyebrow: "Customer Testimonials",
  title: "What Our Clients Say",
  description: "Customer feedback on FAJ maintenance contracts across domestic and commercial properties.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Rohit Mehra",
      subtitle: "Resident",
      description: "FAJ’s home appliances AMC plan is totally worth it. Regular servicing keeps my washer and fridge in perfect condition. Hassle-free and affordable!"
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Nadia Hussain",
      subtitle: "Resident",
      description: "I’ve tried many companies but FAJ truly offers the best annual maintenance service in Dubai. Professional staff, on-time visits, and reliable results every time."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Suwaidi",
      subtitle: "Resident",
      description: "Needed urgent help, and FAJ came through. Their machine maintenance team handled my washing machine issue quickly. Excellent work, highly recommend!"
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Jessica Brown",
      subtitle: "Resident",
      description: "The AMC maintenance from FAJ gave me peace of mind. Technicians are well-trained, polite, and always ensure everything is checked thoroughly."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Mohammed Raza",
      subtitle: "Resident",
      description: "Whenever I need appliances maintenance, FAJ is the first name that comes to mind. They keep my cooking range and fridge running smoothly without delays."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Priya Nair",
      subtitle: "Resident",
      description: "Finding a dependable maintenance service provider was difficult until I tried FAJ. They manage all my home appliances with care and consistency."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "David Wilson",
      subtitle: "Resident",
      description: "Super quick service! FAJ’s team handled my refrigerator service repair in Dubai in just a few hours. Cooling perfectly again."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Fatima Khalid",
      subtitle: "Resident",
      description: "We signed up for their annual maintenance contract for home appliances, and it’s been a great decision. Zero stress, they handle everything."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Ahmed Khan",
      subtitle: "Resident",
      description: "Impressed with FAJ’s punctuality. Their fast AMC service meant my oven and washing machine were inspected and serviced the same day."
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Elena Petrova",
      subtitle: "Resident",
      description: "FAJ is definitely one of the top annual maintenance contract service providers in Dubai. Their support team and technicians are both outstanding."
    }
  ]
};

// Section 14: FAQs (2nd to last - 4 kept non-AC AMCFaqs + 7 Home Appliances AMC FAQs replacing AC FAQs)
const faqsData = {
  id: "appliance-amc-faqs",
  eyebrow: "HAVE QUESTIONS?",
  title: "Appliance AMC FAQs",
  description: "Direct answers about annual maintenance contracts, plan terms, coverage and preventive service.",
  items: [
    {
      question: "What is included in a Home Appliances AMC in Dubai?",
      answer: "FAJ Technical Services L.L.C provides home appliances AMC, which includes scheduled preventive maintenance, appliance inspections and breakdown support, depending on your selected package."
    },
    {
      question: "How many types of AMC are there?",
      answer: "Annual Maintenance Contracts (AMCs) are classified into two types: comprehensive and non-comprehensive/call-based. Comprehensive AMCs cover the repair and replacement of faulty equipment parts for one flat fee. Non-inclusive/Call-based AMCs, on the other hand, only provide maintenance services as needed, with each service request billed separately."
    },
    {
      question: "Is it worth getting your AMC contract?",
      answer: "With the FAJ Technical Service LLC Annual Maintenance Contract (AMC), you receive a range of customized services at a reasonable price. Enjoy peace of mind for an entire year as we streamline maintenance and provide high-quality support results"
    },
    {
      question: "Which home appliances are covered under an AMC?",
      answer: [
        "At FAJ Technical Services L.L.C we provide AMC for all home appliances, such as:",
        {
          type: "bullets",
          items: [
            "Refrigerators",
            "Washing Machines",
            "Dryers",
            "Dishwashers",
            "Ovens",
            "Cooking Ranges",
            "Coffee Machines"
          ]
        }
      ]
    },
    {
      question: "How much does a Home Appliances AMC cost in Dubai?",
      answer: "The cost depends on the number of appliances, contract duration, maintenance visits and spare-parts coverage. Contact the FAJ Technical Services L.L.C team for a customized quotation."
    },
    {
      question: "What is an AMC annual maintenance contract?",
      answer: "An Annual Maintenance Contract (AMC) is a specific type of service agreement that ensures ongoing maintenance and support for designated equipment or assets. This contract is designed to keep the equipment in optimal working condition through regular servicing and inspections, thereby minimizing the risk of unexpected breakdowns and enhancing overall performance."
    },
    {
      question: "What are the advantages of the AMC contract?",
      answer: "An AMC ensures regular maintenance, reducing repair costs and extending the equipment’s lifespan with professional service."
    },
    {
      question: "Does the AMC include spare parts and repair costs?",
      answer: "Yes, selected comprehensive AMC packages include spare parts and repair coverage. Other packages charge separately for parts and additional repairs."
    },
    {
      question: "How many maintenance visits are included in an AMC?",
      answer: "FAJ Technical Services L.L.C offers 2–3 preventive maintenance visits for yearly contracts, 1–2 for six-month contracts and 1 for three-month contracts."
    },
    {
      question: "Can I get emergency appliance repair under an AMC?",
      answer: "Yes, we offer limited or unlimited breakdown callouts depending on your selected AMC package and contract terms."
    },
    {
      question: "Do you provide Home Appliances AMC for apartments and villas in Dubai?",
      answer: "Yes, FAJ Technical Services L.L.C provides customized home appliance maintenance contracts for apartments, villas, landlords and residential properties across Dubai."
    }
  ]
};

// Section 15: Booking Form (Very last section)
const bookingData = {
  eyebrow: "BOOK YOUR SERVICE",
  title: "Request AMC Service",
  description: "Book your AMC service appointment with our expert team. We provide professional appliance maintenance contracts, cleaning, and repair services to ensure efficient performance and a longer lifespan for your appliances.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage: "Your AMC details are ready. Continue in WhatsApp to send the request to the FAJ contracts team.",
  defaultService: "Maintenance Contract (Yearly)",
  locations: [
    "Dubai",
    "Sharjah",
    "Abu Dhabi"
  ],
  fields: {
    name: {
      label: "FULL NAME",
      placeholder: "e.g. John Doe"
    },
    phone: {
      label: "PHONE NUMBER (UAE)",
      placeholder: "e.g. +971 50 123 4567"
    },
    location: {
      label: "PROPERTY LOCATION / CITY"
    },
    date: {
      label: "PREFERRED APPOINTMENT DATE"
    }
  },
  modal: {
    eyebrow: "Request AMC coverage",
    description: "Enter your details and continue through WhatsApp to discuss appliance maintenance-contract options.",
    submitLabel: "Continue with AMC request",
    closeLabel: "Close AMC dialog"
  },
  messageGreeting: "Hello FAJ Technical Services, I would like to request appliance AMC coverage:",
  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page"
  }
};

export const seo = seoData;
export { structuredData };
export const contact = contactData;
export const hero = heroData;
export const overview = overviewData;
export const video = videoData;
export const ppmOverview = ppmOverviewData;
export const maintenanceImportance = maintenanceImportanceData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedData;
export const benefits = benefitsData;
export const whyChooseUs = whyChooseUsData;
export const brands = brandsData;
export const contracts = contractsData;
export const blogs = blogsData;
export const testimonials = testimonialsData;
export const faqs = faqsData;
export const booking = bookingData;

const applianceAmcData = {
  seo: seoData,
  structuredData,
  contact: contactData,
  hero: heroData,
  overview: overviewData,
  video: videoData,
  ppmOverview: ppmOverviewData,
  maintenanceImportance: maintenanceImportanceData,
  commonProblems: commonProblemsData,
  servicesOffered: servicesOfferedData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  brands: brandsData,
  contracts: contractsData,
  blogs: blogsData,
  testimonials: testimonialsData,
  faqs: faqsData,
  booking: bookingData
};

export default applianceAmcData;
