// ==========================================================================
// Commercial Refrigeration AMC Services - Consolidated Page Data
// Content strictly sourced from RefrigerationAMCServicesDetail.jsx,
// RefrigerationAMCServicesFaqs.json, RefrigerationAMCServicesTestimonial.json,
// and aligned with Figma design node 358:4253.
// ==========================================================================

const seoData = {
  title: "Refrigeration Annual Maintenance Contract Services in Dubai",
  description:
    "FAJ offers commercial refrigeration, including restaurant, hotel, hospital freezer, chiller, cold room, refrigerator annual maintenance contract services Dubai",
  keywords:
    "Refrigeration Annual Maintenance Contract Service, commercial refrigeration AMC Dubai, refrigeration PPM service, cold room AMC, freezer maintenance contract",
  author: "FAJ Technical Services L.L.C.",
  businessName:
    "FAJ Commercial Refrigeration AMC Services - FAJ Technical Services L.L.C",
  url: "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/",
  canonical:
    "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/",
  image:
    "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/refrigeration-equipment-service-page-new-design-images/refrigeration-amc-services-top-hero/public",
  serviceType: [
    "Commercial Refrigeration AMC",
    "Refrigeration Planned Preventive Maintenance",
    "Cold Room Maintenance Contract",
    "Walk-in Cooler Maintenance Contract",
    "Commercial Freezer Maintenance",
    "Commercial Chiller Maintenance"
  ],
  areaServed: ["Dubai", "Sharjah", "Abu Dhabi"],
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
      name: "Refrigeration Equipment",
      url: "https://www.fajservices.ae/services/refrigeration-equipment/"
    },
    {
      name: "Refrigeration AMC Services",
      url: "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/"
    }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name":
        "Commercial Refrigeration Maintenance, Commercial Refrigeration Service Dubai, Commercial Refrigerator Repair, Commercial Freezer Repair, Walk in Cooler Maintenance, Walk in Freezer Repair, Refrigeration Unit Service, Commercial Refrigeration Preventive Maintenance, Refrigeration Compressor Repair, Commercial Refrigeration Technician, Refrigeration System Maintenance, Cold Room Maintenance, Commercial Refrigeration Contract",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url":
        "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3452",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/#breadcrumb",
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
          "name": "Refrigeration Equipment",
          "item": "https://www.fajservices.ae/services/refrigeration-equipment/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Commercial Refrigeration Maintenance Contract Services",
          "item":
            "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/"
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

// Section 1: Hero (Figma Section 1, node 358:4254)
const heroData = {
  title:
    "Top-Rated Commercial Refrigeration Maintenance Contract Services - AMC in Dubai, UAE",
  hideSubtitle: true,
  paragraphs: [
    "Keep your cold room, walk-in cooler, freezer and chiller system running efficiently year-round with an Annual Maintenance Contract (AMC)."
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
      icon: "support",
      title: "7-Day Service Response",
      description: "Fast assistance across Dubai"
    }
  ],
  buttonStyle: "classic",
  showPhone: false,
  showCall: false,
  showWhatsapp: true,
  whatsapp:
    "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  phone: "",
  image: {
    id: "refrigeration-equipment-service-page-new-design-images/refrigeration-amc-services-top-hero",
    src: "/img/refrigeration-equipment-service-page-new-design-images/refrigeration-amc-services-top-hero.webp",
    alt: "Commercial refrigeration annual maintenance contract services in Dubai",
    width: 853,
    height: 853
  },
  contentWidth: "50%"
};

// Section 2: Complete AMC & Emergency Support (Figma Section 2, node 358:4296)
const overviewData = {
  id: "complete-amc-emergency-support",
  title: "Complete AMC & Emergency Support",
  plain: false,
  paragraphs: [
    "Our reliable maintenance contracts, available in Dubai and Sharjah, UAE, will help you keep your refrigeration systems running at their best. This proactive approach not only helps maintain excellent cooling performance but also prevents costly breakdowns.",
    "Having a planned preventive maintenance (PPM) in place can help you avoid unexpected expenses, improve energy efficiency, and create a comfortable indoor environment. It is crucial to choose a reputable service provider to maximize the benefits of your contract."
  ]
};

// Section 3: Split Media / Service Video (Figma Section 4, node 358:4305)
const videoData = {
  id: "faj-refrigeration-maintenance-service",
  eyebrow: "PROVEN HVAC EXPERTISE",
  title: "Faj's Refrigeration Maintenance Service",
  frameTitle: "Commercial refrigeration AMC service video",
  videoId: "VAmZ-qKWkjw",
  variant: "framed",
  videoSide: "left",
  description: [
    "Our commercial freezer, cold room, walk-in chiller, and cold storage annual maintenance contract ensure that your commercial refrigerator, fridge, chiller, and freezer needs are met with the highest level of care. With extensive expertise in refrigeration unit maintenance, our team includes some of the finest professionals in the UAE.",
    "Since 2010, we have been repairing, cleaning, and maintaining a wide range of commercial chillers and freezers.",
    "Our technicians are experienced and use advanced technology to keep your commercial refrigeration equipment in optimal condition. If you would like to learn more about our AMC options, please feel free to contact us."
  ],
  cta: {
    whatsapp:
      "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

// Section 4: Planned Preventive Maintenance (PPM) Services (Figma node 358:4322)
const ppmServicesData = {
  id: "refrigeration-ppm-services",
  eyebrow: "Reliable Maintenance Contracts",
  title: "Planned Preventive Maintenance (PPM) Services",
  plain: false,
  paragraphs: [
    "Our refrigeration technician can create a customized Planned Preventive Maintenance Package for your business. This package is designed to keep your business products chilled and frozen, comfortable, and running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and their associated costs.",
    "Our Planned Preventative Maintenance Package includes repair, maintenance, and testing, making it ideal for any freezer and chillers in hospitals, pharmacies, restaurants, cafes, schools, catering, and warehouses. This package ensures that your cooling equipment operates smoothly and helps prevent breakdowns."
  ],
  cta: {
    whatsapp:
      "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

// Section 5: Peace of Mind with Maintenance Contract (Figma node 358:4337)
const peaceOfMindData = {
  id: "peace-of-mind-maintenance-contract",
  eyebrow: "QUALITY ASSURANCE",
  title: "Peace of Mind with Maintenance Contract of Refrigeration",
  imageSide: "right",
  image: {
    id: "techfridge",
    src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/techfridge/public",
    alt: "Refrigeration Maintenance Services"
  },
  checklist: [
    "Your commercial refrigeration system is vital for home and office comfort during hot summer months.",
    "It needs regular maintenance to operate efficiently and avoid breakdowns.",
    "FAJ offers annual maintenance contracts (AMC) for commercial refrigerators and freezers, keeping your cold room, walk-in chiller, or cooler running smoothly year-round.",
    "Enjoy consistent cooling and peace of mind as we ensure your system's optimal performance, energy efficiency, and longevity.",
    "Our comprehensive maintenance contract package allows you to say goodbye to unexpected breakdowns.",
    "Routine inspections and maintenance of your refrigeration system are essential for ensuring efficiency.",
    "Our qualified technicians service all types, makes, models, and sizes of commercial systems, including beverage coolers, restaurant chillers, bakery freezers, flower shop chillers, van freezers, and vegetable and fruit chillers."
  ]
};

// Section 6: Common Refrigeration Problems (Figma Section 10, node 358:4371)
const commonProblemsData = {
  id: "common-refrigeration-problems",
  eyebrow: "RISK MANAGEMENT",
  title: "Common Refrigeration Problems That May Require Maintenance",
  items: [
    {
      number: "01",
      title: "Refrigerant leaks",
      description:
        "Refrigerant leaks are harmful to the environment and can lead to compressor failures. Look for any oil or refrigerant stains to spot the problem."
    },
    {
      number: "02",
      title: "Compressor failure",
      description:
        "The compressor is essential for any commercial refrigerator or freezer system. If it fails completely, the unit will no longer keep products cold."
    },
    {
      number: "03",
      title: "Defective thermostat",
      description:
        "Thermostat failure can lead to fluctuating internal temperatures in a commercial refrigerator, potentially exceeding safe storage levels."
    },
    {
      number: "04",
      title: "Refrigerator not cooling",
      description:
        "Your cold room, walk-in chiller, or freezer may not be cool enough, even if set to the right temperature, leading to improper preservation of food and items."
    },
    {
      number: "05",
      title: "Power Issues",
      description:
        "If the power switch is on and there are no loose power plugs, you need to act quickly if your commercial refrigerator is not powering on."
    },
    {
      number: "06",
      title: "HIGH UTILITY BILLS",
      description:
        "The presence of contaminants in the refrigerant can cause the system to operate for longer periods, resulting in increased energy consumption and waste."
    },
    {
      number: "07",
      title: "Buzzing sound",
      description:
        "Refrigeration inherently makes noise, but if yours is excessively loud, it may need repairs due to issues with the compressor or other components."
    },
    {
      number: "08",
      title: "Door Seal Damage",
      description:
        "Worn or cracked door gaskets can cause cool air to escape, forcing the system to work harder and compromising overall temperature control efficiency."
    }
  ]
};

// Section 7: Programmes (Figma Section 9, node 358:4458)
const maintenanceProgrammesData = {
  id: "refrigeration-preventive-programmes",
  eyebrow: "Professional Solutions",
  title: "Refrigeration Preventative Maintenance Programmes",
  items: [
    {
      icon: "chart-combined",
      title: "Maximising Efficiency, Minimising Costs:",
      description:
        "We optimize your system for maximum efficiency, helping you decrease energy consumption and lower your utility bills."
    },
    {
      icon: "receipt-text",
      title: "Transparent Pricing, No Hidden Fees:",
      description:
        "We prioritize clear and honest pricing, offering detailed quotes without hidden fees or unexpected costs."
    },
    {
      icon: "settings",
      title: "Installation:",
      description:
        "Expert installation of various types and brands of Refrigeration systems, ensuring optimal performance and efficiency."
    },
    {
      icon: "search-check",
      title: "Diagnostics:",
      description:
        "Thorough fault finding to diagnose issues. We provide eligibility assessments and detailed quotes to address your system concerns."
    },
    {
      icon: "wrench",
      title: "Repair Service:",
      description:
        "Fast and reliable repair services for all refrigeration issues, including leaks and electrical failures."
    },
    {
      icon: "shield-check",
      title: "Preventive Maintenance:",
      description:
        "Our preventive maintenance strategy identifies and resolves potential issues before they escalate into major problems, saving you time, money, and bother."
    }
  ]
};

// Section 8: Maintenance Benefits (Figma Section 15, node 358:4544)
const benefitsData = {
  eyebrow: "PREVENTIVE MAINTENANCE OUTCOMES",
  title:
    "BENEFITS OF REGULAR REFRIGERATION SERVICE AND MAINTENANCE IN DUBAI",
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
      id: "refrigeration-routine-service",
      number: "01",
      title: "Routine Service",
      description:
        "Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.",
      icon: "inspection-checklist"
    },
    {
      id: "refrigeration-on-call",
      number: "02",
      title: "On-call services",
      description:
        "Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.",
      icon: "phone-support"
    },
    {
      id: "refrigeration-parts",
      number: "03",
      title: "Genuine Spare Parts",
      description:
        "Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.",
      icon: "genuine-parts"
    },
    {
      id: "refrigeration-maintenance-costs",
      number: "04",
      title: "Maintenance Costs",
      description:
        "High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.",
      icon: "budget-check"
    },
    {
      id: "refrigeration-efficiency",
      number: "05",
      title: "Increased Efficiency",
      description:
        "Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.",
      icon: "zap"
    },
    {
      id: "refrigeration-cost-efficiency",
      number: "06",
      title: "Cost Efficiency",
      description:
        "FAJ a Save hand maintenance. Here’s a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.",
      icon: "dollar-savings"
    },
    {
      id: "refrigeration-reports",
      number: "07",
      title: "Report and Updates",
      description:
        "FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.",
      icon: "wrench-screwdriver"
    },
    {
      id: "refrigeration-experts",
      number: "08",
      title: "Experts and Trained",
      description:
        "FAJ technicians to provide customers with effective maintenance, repair for commercial kitchen equipment to ensure satisfaction.",
      icon: "certified-expert"
    }
  ]
};

// Section 9: Why Choose FAJ (Figma Frame 144, node 358:4676)
const whyChooseUsData = {
  id: "why-choose-faj-refrigeration-amc",
  eyebrow: "WHY CHOOSE FAJ ?",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  items: [
    {
      icon: "secure",
      badge: "PRIORITY SUPPORT",
      title: "RELIABLE, PRIORITY AND QUICK",
      description:
        "You can count on our prompt service! We offer same-day repairs and next-day appointments to ensure your needs are met quickly."
    },
    {
      icon: "expert",
      badge: "TECHNICAL EXPERTISE",
      title: "WE ARE EXPERTS",
      description:
        "We specialise in freezer and chiller repairs, gaining the trust of major brands for their reliable service needs."
    },
    {
      icon: "shield",
      badge: "PREVENTIVE CARE",
      title: "FEELING OF CALM",
      description:
        "An annual maintenance contract offers a full year of service, ensuring your freezer and chiller operate smoothly for your peace of mind."
    },
    {
      icon: "check-badge",
      badge: "CLEAR VALUE",
      title: "GREAT VALUE",
      description:
        "We are dedicated to ensuring customer satisfaction through timely service, quick resolution of issues, and competitive pricing."
    },
    {
      icon: "calendar",
      badge: "FLEXIBLE SCHEDULING",
      title: "YOU ARE IN CONTROL",
      description:
        "Choose a day and time for your chiller and freezer repair in Dubai or Sharjah, with a 3–4 hour window for our technician’s arrival."
    },
    {
      icon: "handshake",
      badge: "SINCE 2010",
      title: "TRUSTWORTHY",
      description:
        "Our skilled technicians offer prompt service for major cooling brands, ensuring reliable performance and efficiency."
    }
  ]
};

// Section 10: Specialisations / Types Directory (Figma Section 18, node 358:4779)
const specialisationsData = {
  id: "refrigeration-specialisations",
  eyebrow: "MULTI-BRAND EXPERTISE",
  title:
    "We specialise in refrigeration AMC and PPM for the following types",
  subtitle:
    "Search supported refrigeration types. Dedicated service pages are linked where available.",
  searchPlaceholder: "Search refrigeration type...",
  initialCount: 9,
  showMoreLabel: "Show All Types (18)",
  showLessLabel: "Show Less",
  actionLabel: "REQUEST AMC SERVICE",
  items: [
    {
      name: "Walk-in Refrigeration Maintenance Contract:",
      title: "Walk-in Refrigeration Maintenance Contract:",
      description:
        "Walk-in refrigeration systems, including cold storage rooms and freezers, are essential for businesses. Regular maintenance helps prevent failures. Contact us for professional services."
    },
    {
      name: "Cold Room AMC Service:",
      title: "Cold Room AMC Service:",
      description:
        "Maintenance and refurbishment should be handled by trained professionals. FAJ Experts ensure efficient and safe repairs of refrigeration systems and cold rooms."
    },
    {
      name: "Commercial Refrigeration Maintenance Services:",
      title: "Commercial Refrigeration Maintenance Services:",
      description:
        "Efficient refrigeration keeps kitchen supplies fresh and ensures customer safety. Regular maintenance and repairs extend your commercial refrigerator’s lifespan and help reduce costs."
    },
    {
      name: "Biomedical Equipment Maintenance Services and Repair:",
      title: "Biomedical Equipment Maintenance Services and Repair:",
      description:
        "At FAJ, we offer expert repair and maintenance services for biomedical chillers, freezers, and refrigerators, ensuring proper installation, regular maintenance, and prompt repairs."
    },
    {
      name: "Freezer and Chiller PPM Service Plan Urgency:",
      title: "Freezer and Chiller PPM Service Plan Urgency:",
      description:
        "We provide emergency call-out services and scheduled maintenance contracts for restaurants, hotels, hospitals, cold storage facilities, and various commercial and industrial sectors."
    },
    {
      name: "Display Refrigerators AMC Contract and Service:",
      title: "Display Refrigerators AMC Contract and Service:",
      description:
        "If you need a maintenance contract, service, or repair for your display chiller and display freezer, contact FAJ for same-day service to keep your business running smoothly."
    },
    {
      name: "Undercounter Refrigerators Service and Repair:",
      title: "Undercounter Refrigerators Service and Repair:",
      description:
        "If you require repairs or service for your under-counter refrigerator, chiller, or freezer, contact FAJ for reliable maintenance services in Dubai."
    },
    {
      name: "Restaurant Commercial Fridge Annual Contract:",
      title: "Restaurant Commercial Fridge Annual Contract:",
      description:
        "We offer quick and cost-effective repair services for commercial fridges and freezers in your restaurant or café located in Dubai and Sharjah."
    },
    {
      name: "Commercial Chiller Maintenance & Repair:",
      title: "Commercial Chiller Maintenance & Repair:",
      description:
        "Ensure your commercial refrigeration systems operate reliably with our expert PPM services contract. We provide regular maintenance to minimise downtime and protect your equipment."
    },
    {
      name: "Van Refrigeration Repair and Refrigerated Truck Maintenance:",
      title: "Van Refrigeration Repair and Refrigerated Truck Maintenance:",
      description:
        "FAJ offers dependable maintenance services for van refrigeration and refrigerated trucks in Dubai. Our professionals specialize in van refrigeration and refrigerated truck services."
    },
    {
      name: "Blast Freezer Annual Maintenance and Service Contract:",
      title: "Blast Freezer Annual Maintenance and Service Contract:",
      description:
        "Located in Dubai, FAJ is your top choice for annual blast freezer services. We specialize in blast refrigeration systems, providing a comprehensive range of preventive maintenance services, from repairs to routine maintenance."
    },
    {
      name: "Blast Chiller AMC Service and Repair:",
      title: "Blast Chiller AMC Service and Repair:",
      description:
        "The planned preventive maintenance service for blast chillers guarantees your peace of mind. FAJ prioritizes efficiency and reliability."
    },
    {
      name: "Vegetable and Fruit Chiller Maintenance Service Contract:",
      title: "Vegetable and Fruit Chiller Maintenance Service Contract:",
      description:
        "Rely on our expert team to quickly resolve any issues with your fruit and vegetable chiller under the annual maintenance contract, restoring its functionality."
    },
    {
      name: "Beverage Cooler AMC Services:",
      title: "Beverage Cooler AMC Services:",
      description:
        "With extensive knowledge of beverage cooler maintenance contracts and services, we provide effective repairs to ensure your unit operates smoothly."
    },
    {
      name: "Free-Standing Freezer and Display Freezer Service and Repair:",
      title: "Free-Standing Freezer and Display Freezer Service and Repair:",
      description:
        "Our experts can accurately diagnose and repair any issues with your freezer and display freezer through annual maintenance contracts that offer different packages."
    },
    {
      name: "Restaurant Fridge PPM Service, Refrigerator AMC Service:",
      title: "Restaurant Fridge PPM Service, Refrigerator AMC Service:",
      description:
        "Is your restaurant fridge or refrigerator not functioning? There is no need to endure uncomfortable temperatures or suffer losses due to faulty equipment. With our annual maintenance contract service in Dubai and Sharjah, FAJ will have your restaurant fridge or refrigerator up and running in no time!"
    },
    {
      name: "Sushi Refrigerator and Chiller Service and Repair:",
      title: "Sushi Refrigerator and Chiller Service and Repair:",
      description:
        "Maintenance and repair services for sushi refrigerators and chillers in Dubai require specialized expertise, as only professionals can effectively address issues with sushi fridges. We provide a hassle-free repair service for sushi refrigerators."
    },
    {
      name: "Catering Freezer and Chiller Repairs and Service:",
      title: "Catering Freezer and Chiller Repairs and Service:",
      description:
        "Are you seeking relief from the intense heat? Learn how to keep your catering freezer and chiller operating smoothly in Dubai! Our expert services ensure that your catering refrigerator and fridge remain cool and efficient, providing you with comfort and peace of mind."
    }
  ]
};

// Section 11: Service Contracts (Figma Frame 315, node 358:4909)
const contractsData = {
  id: "refrigeration-maintenance-contracts",
  eyebrow: "Service Contracts",
  title: "Commercial Refrigeration Maintenance Contracts",
  description:
    "Choose a practical contract duration and customize call-outs, planned preventive visits, parts coverage and MEP support.",
  featuredIndex: 0,
  actionLabel: "GET A QUICK QUOTE",
  plans: [
    {
      number: "01",
      title: "Maintenance Contract (Yearly)",
      tagline:
        "Comprehensive annual care for critical commercial refrigeration equipment.",
      badge: "BEST VALUE",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "2 and 3 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      number: "02",
      title: "Maintenance Contract (6 mONTHS)",
      tagline:
        "Balanced preventive coverage for high-use refrigeration systems.",
      badge: "POPULAR",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 and 2 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      number: "03",
      title: "Maintenance Contract (3 mONTHS)",
      tagline:
        "Short-term preventive support for immediate commercial requirements.",
      badge: "FLEXIBLE",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    }
  ],
  footnote:
    "Contract scope is confirmed after assessing equipment type, quantity, capacity, condition and operating environment. Terms and conditions apply."
};

// Section 12: News & Updates / Blogs (Figma Frame 2147225396, node 374:2507)
const blogsData = {
  id: "commercial-refrigeration-amc-blogs",
  eyebrow: "NEWS & UPDATES",
  title:
    "WE DELIVER RELIABLE, AFFORDABLE SERVICES WITH DEDICATED SUPPORT FOR SATISFACTION",
  description:
    "Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions.",
  button: {
    label: "View All Articles",
    href: "/blog/"
  },
  items: [
    {
      image: "blog/best-temperature-setting-for-restaurants",
      title: "10 COMMON PROBLEMS AND HOW TO FIX THEM",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description:
        "Discover common refrigeration issues and expert solutions to keep your cooling equipment running reliably.",
      href: "/blog/best-temperature-setting-for-restaurants-display-fridges-and-chillers-understanding-restaurant-refrigeration-temperature/"
    },
    {
      image: "blog/the-ultimate-guide-to-commercial-ice-maker-repair-in-dubai",
      title: "Best Ways For How To Save Money",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description:
        "Learn essential maintenance tips to improve performance, prevent breakdowns, and reduce operational energy costs.",
      href: "/blog/the-ultimate-guide-to-commercial-ice-maker-repair-in-dubai/"
    },
    {
      image: "blog/how-to-clean-refrigerator-full-cleaning-and-maintenance-guide",
      title: "How to Choose Best REFRIGERATION EQUIPMENTS",
      meta: {
        comments: "5 comments",
        author: "Admin"
      },
      description:
        "As refrigeration equipment issues arise, professional repair and maintenance services ensure maximum lifespan and efficiency.",
      href: "/blog/how-do-you-clean-a-refrigerator-complete-guide-to-refrigerator-cleaning-and-maintenance/"
    }
  ]
};

// Section 13: Customer Testimonials (Figma Frame 287, node 738:3625)
const testimonialsData = {
  id: "refrigeration-amc-reviews",
  eyebrow: "Customer Testimonials",
  title: "What Our Clients Say",
  subtitle:
    "Feedback from commercial kitchens, hotels, supermarkets and facilities using FAJ refrigeration maintenance service.",
  items: [
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "GU",
      title: "Guru",
      subtitle: "Business Owner",
      description:
        "\"We decided to get a chiller maintenance contract with FAJ, and their expert team ensures our chillers run efficiently with minimal downtime.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "SC",
      title: "Shirshendu Chakraborty",
      subtitle: "Expat",
      description:
        "\"FAJ is a trusted choice as a chiller AMC company in Dubai. Their team performs regular inspections and maintains chillers with excellent attention to detail.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "HA",
      title: "Hafiz Ahsan",
      subtitle: "Business Owner",
      description:
        "\"When looking for an AMC chiller company in Dubai, we found FAJ’s service prompt and professional, keeping all our chillers in top working condition.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "KW",
      title: "Kasia Waker",
      subtitle: "Business Owner",
      description:
        "\"For all our cold storage systems, FAJ handles commercial refrigeration maintenance efficiently, ensuring our business operations remain smooth and uninterrupted.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "RK",
      title: "Rafal Kalecinski",
      subtitle: "Expat",
      description:
        "\"Our facility relies on FAJ for timely refrigeration equipment maintenance. Their technicians are skilled, responsive, and prevent costly downtime.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "HK",
      title: "Hanson Kehbila",
      subtitle: "Business Owner",
      description:
        "\"We hired FAJ as our chiller maintenance company, and their team consistently provides reliable inspections, quick repairs, and excellent preventive maintenance.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "ZK",
      title: "Zahir Khan",
      subtitle: "Business Owner",
      description:
        "\"FAJ delivers outstanding commercial chiller maintenance, ensuring every chiller in our facility functions flawlessly and energy-efficiently.\""
    },
    {
      icon: "award",
      badge: "Verified",
      rating: "5.0",
      initials: "MS",
      title: "Mel Style",
      subtitle: "Expat",
      description:
        "\"The team at FAJ provided excellent chiller maintenance service, addressing all our issues promptly and ensuring uninterrupted operation for our business chillers.\""
    }
  ]
};

// Section 14: Refrigeration AMC FAQs (Figma Section 25, node 358:5094)
const faqsData = {
  id: "refrigeration-amc-faqs",
  eyebrow: "HAVE QUESTIONS?",
  title: "REFRIGERATION AMC FAQs",
  description:
    "Answers to common questions about commercial refrigeration maintenance contracts and planned preventive service.",
  items: [
    {
      question: "What is the maintenance needed for a refrigeration system?",
      answer: [
        "7 Essential Tasks for Your Preventive Maintenance Checklist for Commercial Refrigeration",
        "Be sure to include the following important tasks in your preventive maintenance checklist for commercial refrigeration systems:",
        {
          type: "bullets",
          items: [
            "Thoroughly Clean Equipment",
            "Check Temperature and Defrost Settings",
            "Enhance Airflow",
            "Test Interior Lights",
            "Inspect for Leaks and Test Seals",
            "Examine Coils",
            "Inspect Fan Blades"
          ]
        },
        "These tasks will help ensure that your refrigeration systems operate efficiently and effectively."
      ]
    },
    {
      question: "How do you maintain refrigeration?",
      answer: [
        "Refrigerator maintenance tips to help you keep your cool:",
        {
          type: "bullets",
          items: [
            "Clean the coils: The coils are essential to your fridge's cooling system because they help release heat as the refrigerant flows through them.",
            "Maintain the temperature: Ensure that your fridge is set to the appropriate temperature for optimal performance.",
            "Inspect and clean the gasket: Check the door gasket for any wear and tear, and clean it to maintain a proper seal.",
            "Replace the water and ice filters: Regularly change the water and ice filters to ensure clean and fresh-tasting ice and water.",
            "Close the door properly: Always make sure the fridge door is fully closed to prevent warm air from entering and compromising the cooling efficiency."
          ]
        }
      ]
    },
    {
      question: "What is the preventive maintenance on refrigeration equipment?",
      answer:
        "To maintain cleanliness, regularly wash with a mild soapy water solution. Check the operation of the thermostat and the defrost system (if equipped). Ensure that door seals are clean, avoiding any material buildup in the folds and corners. Remove any ice buildup using the defrost system or a blunt scraper as needed."
    },
    {
      question: "How often should refrigerator be maintained?",
      answer:
        "Ignoring basic maintenance tasks, such as cleaning the condenser coils and wiping down the gaskets, can put unnecessary stress on your appliance. It’s a good idea to set aside time each month for these quick maintenance tasks. When a refrigerator is properly maintained, it operates more efficiently."
    },
    {
      question: "What are the benefits of AMC contract?",
      answer: [
        "Budget Bliss: The Benefits of Predictable Maintenance Costs",
        "An annual maintenance contract (AMC) protects a company from unexpected expenses related to refrigeration equipment maintenance. With an AMC, businesses benefit from a fixed and predictable cost structure, allowing them to effectively manage and account for all maintenance spending over time."
      ]
    },
    {
      question: "What is the period of the annual maintenance contract?",
      answer:
        "Freezer and chiller maintenance contracts will last for one year from the date of acceptance and issuance of the work order. All days, excluding weekends, will be considered as working days."
    },
    {
      question:
        "What should be included in a chiller and freezer maintenance contract?",
      answer:
        "It can also be referred to as a service maintenance agreement, a preventative maintenance service contract, a freezer and chiller service agreement, or an installation contract. Regardless of the name, it includes everything."
    },
    {
      question: "What are the different types of annual maintenance contracts?",
      answer: [
        "The various types of Annual Maintenance Contracts (AMCs) include:",
        {
          type: "bullets",
          items: [
            "Comprehensive AMC: Covers all maintenance costs, including parts and labor.",
            "Non-Comprehensive AMC: Charges for separate parts; only labor expenses are covered.",
            "Preventive AMC: Focuses on regular maintenance and inspections."
          ]
        }
      ]
    },
    {
      question: "What is the minimum contract period?",
      answer:
        "Minimum Contract Period refers to a duration of six months or twelve months from the start of the contract or another period specified in the Contract."
    },
    {
      question: "What does a maintenance contract cover?",
      answer:
        "The text outlines the terms and conditions of the agreement between the two parties. Maintenance contractors can be hired to provide various maintenance services, ranging from general upkeep to specialised repairs. Any details negotiated between the parties will be clearly specified in the contract."
    }
  ]
};

// Section 15: Booking Form (Figma Section 26, node 358:5037)
const bookingData = {
  eyebrow: "BOOK YOUR SERVICE",
  title: "Request AMC Service",
  description:
    "Book your AMC service appointment with our expert team. We provide professional appliance maintenance contracts, cleaning, and repair services to ensure efficient performance and a longer lifespan for your appliances.",
  formTitle: "IT'S QUICK & EASY",
  formSubtitle:
    "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your booking details are ready. Continue in WhatsApp to send your request to the FAJ scheduling team.",
  defaultService:
    "Commercial Refrigeration Maintenance Contract Services",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: {
      label: "FULL NAME",
      placeholder: "e.g. John Doe"
    },
    location: {
      label: "PROPERTY LOCATION / CITY"
    },
    phone: {
      label: "PHONE NUMBER (UAE)",
      placeholder: "e.g. +971 50 123 4567"
    },
    date: {
      label: "PREFERRED APPOINTMENT DATE"
    }
  },
  modal: {
    eyebrow: "Request contract quote",
    description:
      "Enter your details and continue through WhatsApp to request a commercial refrigeration AMC or PPM proposal.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog"
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request commercial refrigeration AMC or PPM service:",
  messageLabels: {
    name: "Name / Company",
    location: "Location",
    phone: "Phone",
    date: "Preferred Date",
    service: "Service",
    page: "Page"
  }
};

const refrigerationAmcServicesData = {
  seo: seoData,
  structuredData,
  contact: contactData,
  hero: heroData,
  overview: overviewData,
  video: videoData,
  ppmServices: ppmServicesData,
  peaceOfMind: peaceOfMindData,
  commonProblems: commonProblemsData,
  maintenanceProgrammes: maintenanceProgrammesData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  specialisations: specialisationsData,
  contracts: contractsData,
  blogs: blogsData,
  testimonials: testimonialsData,
  faqs: faqsData,
  booking: bookingData
};

export {
  benefitsData,
  blogsData,
  bookingData,
  commonProblemsData,
  contactData,
  contractsData,
  faqsData,
  heroData,
  maintenanceProgrammesData,
  overviewData,
  peaceOfMindData,
  ppmServicesData,
  seoData,
  specialisationsData,
  structuredData,
  testimonialsData,
  videoData,
  whyChooseUsData
};

export default refrigerationAmcServicesData;
