const seoData = {
  title: "Best AC Cleaning Services in Al Satwa  | AC Maintenance Near You",
  description:
    "Trusted AC repair and service in Al Satwa, Dubai. We provide 7-day emergency repair for central and split AC (air conditioning) units near you.",
  keywords:
    "AC Service in Al Satwa, AC Repair in Al Satwa, AC Maintenance in Al Satwa, Air Conditioning Service in Al Satwa, Air Conditioning Repair in Al Satwa, Air Conditioning Maintenance in Al Satwa",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-satwa/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Cleaning Services in Al Satwa  | AC Maintenance Near You",
    description:
      "Trusted AC repair and service in Al Satwa, Dubai. We provide 7-day emergency repair for central and split AC (air conditioning) units near you.",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-satwa/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Cleaning Services in Al Satwa  | AC Maintenance Near You",
    description:
      "Trusted AC repair and service in Al Satwa, Dubai. We provide 7-day emergency repair for central and split AC (air conditioning) units near you.",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const heroData = {
  title: "Residential and Commercial AC Repair and Maintenance Services in Al Satwa, Dubai",
  paragraph:
    "The heat inside homes and offices in Dubai can be really bad especially when it is summer. When it is hot and the air is not clean it can be hard to do things during the day sleep at night and work comfortably. That is why people in Dubai need air conditioners that work well in places like Al Satwa.",
  paragraphs: [
    "The heat inside homes and offices in Dubai can be really bad especially when it is summer. When it is hot and the air is not clean it can be hard to do things during the day sleep at night and work comfortably. That is why people in Dubai need air conditioners that work well in places like Al Satwa.",
  ],
  highlights: [
    {
      icon: "award",
      title: "Established Since 2010",
      description: "Reliability, Diversity, Integrity, and Quality.",
    },
    {
      icon: "shield-check",
      title: "Workmanship Warranty",
      description: "Repair and service warranty support.",
    },
    {
      icon: "phone-support",
      title: "7-Day Service Response",
      description: "Fast assistance across Al Satwa.",
    },
  ],
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Residential and Commercial AC Repair and Maintenance Services in Al Satwa, Dubai",
    width: 733,
    height: 550,
  },
};

const overviewData = {
  "id": "overview",
  "paragraphs": [
    {
      "parts": [
        {
          "text": "FAJ Technical Services L.L.C",
          "href": "/"
        },
        " has been operating in Dubai since 2010. We provide ",
        {
          "text": "AC repair",
          "href": "/services/air-conditioning-repair/ac-service/"
        },
        ", maintenance, cleaning, and installation services in Al Satwa and nearby locations. Our technicians handle all types of air conditioning systems in homes, shops, and offices. Fast response and reliable service are always a priority."
      ]
    }
  ],
  "showCta": false,
  "cta": {
    "phone": "",
    "whatsapp": "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const areaOverviewData = {
  id: "al-satwa-ac-services",
  title: "Best AC Repair in Al Satwa",
  paragraphs: [
    "If you are searching for AC repair near you in Al Satwa, FAJ Technical Services L.L.C is a reliable choice. We provide fast and professional AC servicing for homes, offices, shops, and commercial buildings across Dubai and the UAE.",
    "Our expert technicians handle all types of air conditioning systems with proper diagnosis and long-term solutions. We focus on quick response, transparent pricing, and high-quality workmanship.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who Offers The Most Trusted AC Repair Service in Al Satwa?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const pricingData = {
  title: "AC Inspection, Cleaning and Maintenance Prices",
  description:
    "Choose a starting service based on your air-conditioning system. Final quotations depend on unit type, condition and required work.",
  defaultBadge: "Professional AC Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "AC Inspection Service",
      badge: "Diagnostics",
      price: "AED 215",
      image: {
        id: "ac-service-page/ac-inspection",
        src: "/img/ac-service-page/ac-inspection.webp",
      },
      description:
        "Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call.",
      popup: {
        title: "AC Call-Out (Technical Inspection) scope of works:",
        sections: [
          {
            items: [
              "Resolving air flow issues",
              "AC thermostat check-up",
              "Refrigerant Level check-up",
              "Rectification of AC power trip",
              "Rectification of AC water leakage",
              "Fixing AC cooling/overcooling issues",
              "Addressing sound problems from the AC",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "Basic AC Cleaning Price",
      warranty: "60 - Days Warranty",
      badge: "Popular",
      price: "AED 280",
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp",
      },
      description:
        "If your AC has reduced airflow or is leaking water, work quickly. Regularly clean filters and drain to provide efficiency and good air quality.",
      popup: {
        title: "AC Cleaning Service scope of works:",
        sections: [
          {
            items: [
              "AC filter cleaning",
              "AC water leakage",
              "Check AC components",
              "Filter cleaning and replacement",
              "Condenser coil cleaning",
              "AC thermostat check-up",
              "Refrigerant Level check-up",
              "Addressing sound issues from the AC",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 280 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "AC Maintenance Price",
      warranty: "60 - Days Warranty",
      badge: "Preventive Care",
      price: "AED 325",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp",
      },
      description:
        "Relax and save money by keeping our expert technicians clean and maintain your AC, stopping unnecessary breakdowns.",
      popup: {
        title: "AC Maintenance scope of works",
        sections: [
          {
            heading: "DX Unit AC:",
            items: [
              "Clean the condenser coil",
              "Check, clean and flush the drain line",
              "Check the room and grill temperatures",
              "Check and clean the filters and air valves",
              "Check the vibration pads and vibration isolators",
              "Check the blowers and clean if proper access is available",
              "Check the conditions of contactors, relays, and capacitors",
              "Check temperature controlled thermostat and pressure sensors",
              "Check the electrical points in the outdoor unit and tighten, clean the electrical terminals",
              "Check the insulation on the pipeline, if damaged, recommend for replacement (Additional cost for replacement of insulation)",
            ],
          },
          {
            heading: "Chiller FCU AC:",
            items: [
              "Check the vibration isolators",
              "Check, clean and flush the drain line",
              "Check the room and grill temperatures",
              "Check and clean the filters and air valves",
              "Check temperature controlled thermostat",
              "Check the functionality of actuator valves",
              "Check the blowers and clean if proper access is available",
              "Check the insulation on the pipeline; if damaged, recommend for replacement (Additional cost for replacement of insulation)",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 325 AC Maintenance charge applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
  ],
};

const contractsData = {
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Al Satwa.",
  featuredIndex: 0,
  actionLabel: "Get a quick quote",
  plans: [
    {
      title: "Maintenance Contract (Yearly)",
      tagline: "Comprehensive year-round support for dependable cooling.",
      badge: "Best Value",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "2 and 3 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
    {
      title: "Maintenance Contract (6 Months)",
      tagline: "Balanced seasonal care before peak cooling demand.",
      badge: "Popular",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 and 2 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
    {
      title: "Maintenance Contract (3 Months)",
      tagline: "Flexible short-term protection for immediate AC needs.",
      badge: "Flexible",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
  ],
  footnote:
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Al Satwa.",
};

const serviceOverviewData = {
  "id": "ac-repair-service-overview",
  "title": "Why Does My Air Conditioner Not Cool?",
  "description": "AC cooling issues are common in Dubai due to heavy usage and dust. Main causes include:",
  "listTitle": "Main causes include:",
  "checklist": [
    "Dirty air filter",
    "Blocked air ducts",
    "Low refrigerant",
    "Gas leakage",
    "Compressor",
    "Thermostat fault",
    "Dirty condenser",
    "Evaporator coil",
    "Electrical",
    "Airflow restriction"
  ],
  "conclusion": "A professional HVAC maintenance check helps detect the real issue quickly and safely.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "AC Repair in Al Satwa",
    "width": 853,
    "height": 853
  },
  "showCta": true,
  "cta": {
    "phone": "tel:+971507464712",
    "whatsapp": "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const commonSignsData = {
  id: "ac-maintenance-signs",
  title: "Signs You Need An AC Service",
  intro:
    "If you notice these issues, your system may need professional AC servicing:",
  items: [
    { title: "Weak or low airflow from vents" },
    { title: "Higher electricity bills than normal" },
    { title: "Water leakage from the indoor unit" },
    { title: "AC not cooling properly" },
    { title: "Unusual noise or vibration" },
  ],
  footerText: "Early inspection helps avoid costly repair work later.",
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Al Satwa",
  lead: "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
  listTitle: "Our emergency AC repair service can help with:",
  items: [
    "AC not cooling",
    "AC not turning on",
    "Water leakage",
    "Electrical faults",
    "Thermostat issues",
    "Compressor failures",
    "Weak airflow",
    "Unusual noises",
  ],
  conclusion:
    "We provide fast assistance for residential and commercial customers throughout Al Satwa and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Al Satwa and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Al Satwa",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Satwa",
    width: 600,
    height: 400,
  },
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
    playlist: "prUR0-lZlzg",
    playsinline: "1",
    cc_load_policy: "0",
    disablekb: "1",
  },
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in Al Satwa?",
  description:
    "Dubai’s climate puts heavy pressure on air conditioning systems. Regular servicing helps maintain cooling performance and reduces repair costs.",
  imageSide: "left",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Air Conditioning Service in Al Satwa",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  },
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN AL SATWA",
  items: [
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Energy Efficiency",
      description:
        "A maintained system uses less power and improves electricity savings",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Longer Equipment Life",
      description:
        "Reduces wear on compressor, condenser, and other parts",
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Better Air Quality",
      description:
        "Removes dust from air filters and ducts to make better air quality.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Stable Cooling",
      description:
        "Keeps temperature consistent in extreme heat to stabilize your AC cooling.",
    },
    {
      icon: "shield-check",
      badge: "Emergency Prevention",
      title: "Fewer Breakdowns",
      description:
        "Safeguards against unexpected repair emergencies!",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  title: "Common AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description:
        "Low airflow usually means the filters are clogged or the ducts are dirty. This reduces how well the AC cools and how comfortable it is inside. The AC's airflow gets weak. This happens when the filters or ducts have issues",
    },
    {
      title: "Warm Air",
      description:
        "Warm air coming out often means there's a problem with the refrigerant or the compressor is faulty. You should check it away.",
    },
    {
      title: "Strange Noises",
      description:
        "Grinding or rattling sounds can mean that some parts inside are loose or damaged. The AC makes noises like grinding or rattling sounds, which are common noises.",
    },
    {
      title: "Foul Odors",
      description:
        "A bad smell often comes from mold growing inside the filters or drainage lines. When AC smells bad, it usually happens when mold builds up.",
    },
    {
      title: "Frequent Cycling",
      description:
        "The AC turning on and off a lot can happen because of thermostat errors or electrical faults that affect cooling control.",
    },
    {
      title: "High Humidity Levels",
      description:
        "The AC is not controlling humidity well. This means it's not removing moisture from the air properly.",
    },
    {
      title: "Leaking Water",
      description:
        "Water leakage problems usually happen because the drain pipes are blocked or the coils are frozen.",
    },
    {
      title: "Increased Energy Bills",
      description:
        "If the filters are dirty or the AC's performance is low it makes the AC work harder and use more power. This increases your electricity bills.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedData = {
  id: "ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  description:
    "Searching for professional air conditioning services in Al Satwa? FAJ Technical Services L.L.C provides complete AC repair, cleaning, maintenance, and installation solutions for homes, residential apartments, offices, and commercial properties.",
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Professional Air Conditioning Services in Al Satwa",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedCardsData = {
  id: "ac-services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Fast and reliable air conditioner repair for cooling issues, compressor faults, electrical problems, and thermostat inspection. Suitable for residential and commercial air conditioning systems across Dubai and the UAE.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Service",
      description:
        "Deep cleaning of filters, coils, and the drainage system. Helps improve air quality, cooling performance, and energy efficiency. Regular cleaning keeps your AC running smoothly and saves money on bills.",
      actionLabel: "Book AC Cleaning",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Preventive maintenance service to reduce breakdowns and extend system life. Helps control electricity bills and improves cooling stability. Keep your AC in good condition all year with regular servicing and care.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "Installation for Split AC, Central AC, Ducted AC, and commercial systems. Work follows proper standards for safe and efficient performance. Professional installation ensures long-lasting cooling for your home or business.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "peace-of-mind",
      title: "Annual Maintenance Contract (AMC)",
      description:
        "Affordable AMC plans include regular inspection, servicing, and priority support throughout the year for complete AC care. Save money and avoid unexpected breakdowns with our annual maintenance contracts.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "phone-support",
      title: "Emergency AC Repair in Al Satwa",
      description:
        "Air conditioners can fail without warning, especially during peak summer. Quick response helps restore comfort without delay across Al Satwa.",
      actionLabel: "Get Urgent Help",
    },
  ],
  bottomTitle: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "https://www.youtube.com/watch?v=pkO_jobGdBo",
        external: true,
      },
      " and repair in Al Satwa, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!",
    ],
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  title: "Benefits Of Regular AC Service and Maintenance in Al Satwa",
  city: "Al Satwa",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" },
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We carry out a complete assessment of the cooling efficiency using a temperature gun.",
      icon: "snowflake",
    },
    {
      id: "ac-disinfect",
      number: "02",
      title: "DISINFECT COMPONENTS",
      description:
        "All hardware components are tested and disinfected, including filters and vents.",
      icon: "ac-air-filter",
    },
    {
      id: "ac-fan",
      number: "03",
      title: "FAN ASSESSMENT",
      description:
        "We ensure the fan works correctly with no blockages in the evaporator coil.",
      icon: "diagnostics",
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "We use a laser temperature gauge to ensure thermostats operate correctly.",
      icon: "ac-thermostat",
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "We ensure you get optimal air flow around each room as needed.",
      icon: "wind",
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our team provides vital feedback on your ACs health and any needed air con repair.",
      icon: "customer-feedback",
    },
  ],
};

const cleaningServiceData = {
  id: "ac-cleaning-service-overview",
  title: "Best AC Cleaning & AC Service in Dubai and Sharjah",
  description:
    "Discover top-rated AC cleaning, maintenance, and air conditioner repair services in Al Satwa. Keep your space cool and comfortable with professional solutions tailored to your needs.",
  imageSide: "left",
  image: {
    id: "ac-service-page/best-ac-service",
    src: "/img/ac-service-page/best-ac-service.webp",
    alt: "AC Maintenance in Al Satwa",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const cleaningServiceCardsData = {
  id: "ac-cleaning-service-cards",
  title: "WHY REGULAR AC CLEANING IS ESSENTIAL",
  wide: true,
  cards: [
    {
      title: "Key to the Best AC Cleaning Services Near You",
      paragraphs: [
        "If you are looking for the best AC deep cleaning and services in Dubai and Sharjah, consider the following key aspects:",
      ],
      bulletColumns: 1,
      bullets: [
        {
          title: "COOLING & HEATING",
          text: "Stay comfortable all year round with balanced, dependable climate control.",
        },
        {
          title: "BETTER AIR QUALITY",
          text: "Reduce humidity, pollen, and dust to keep indoor air clean and healthy.",
        },
        {
          title: "PROTECT YOUR PROPERTY",
          text: "Prevent moisture damage and wear to sensitive electronics and furnishings.",
        },
        {
          title: "QUIET AND SECURE",
          text: "Optimal system performance eliminates the need to leave windows open.",
        },
      ],
    },
    {
      title: "Key Benefits",
      variant: "cyan-tint",
      paragraphs: [
        "Regular coils cleaning, air filter cleaning, and duct cleaning lowers electricity bills, extends the lifespan of equipment, prevents breakdowns, and eliminates unpleasant odours.",
      ],
      sections: [
        {
          title: "Signs Your AC Needs Cleaning",
          bulletColumns: 1,
          noDivider: true,
          bullets: [
            "Noticeably reduced airflow.",
            "Visible dust accumulation around vents.",
            "Unusual or musty odors.",
            "Increased DEWA bills.",
          ],
        },
      ],
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const whyChooseUsData = {
  id: "why-choose-faj-ac",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "",
  items: [
    {
      icon: "shield-check",
      badge: "Fast, Reliable Service",
      title: "Reliable, Priority, and Quick",
      description: {
        parts: [
          "You can count on ",
          {
            text: "efficient service",
            strong: true,
            href: "https://www.instagram.com/fajtechnicalservicesllc/",
            external: true,
          },
          "! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.",
        ],
      },
    },
    {
      icon: "peace-of-mind",
      badge: "Expert Planned Care",
      title: "Feeling Of Calm",
      description: {
        parts: [
          "With ",
          {
            text: "annual maintenance contract",
            strong: true,
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          ", you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.",
        ],
      },
    },
    {
      icon: "git-branch",
      badge: "Flexible Scheduling",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, Al Satwa Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Satwa. This is why most major brands trust us to handle their service and maintenance needs.",
    },
    {
      icon: "shield-dollar",
      badge: "Customer Value",
      title: "Great Value",
      description:
        "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.",
    },
    {
      icon: "clean-handshake",
      badge: "Dependable Care",
      title: "Trustworthy",
      description: {
        parts: [
          "Our ",
          {
            text: "skilled AC technicians",
            strong: true,
            href: "https://www.facebook.com/acrepairservices",
            external: true,
          },
          " are highly trained, and we provide excellent service for a variety of major AC brands efficiently.",
        ],
      },
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const defaultBrandDescription =
  "Professional repair, cleaning and planned maintenance for supported air-conditioning systems.";

const linkedBrands = [
  [
    "Daikin Air Conditioning Repair Services",
    "daikin",
    'Daikin air conditioning systems is a leading Japanese manufacturer. Founded in 1924, the company has built a strong international presence by focusing on quality, innovation, and effective communication.',
  ],
  [
    "Gree AC Repair and Service",
    "gree",
    "Gree Air Conditioning, founded in 1991 in Zhuhai, is a major global player in air conditioners. Initially focused on AC, it has expanded into home appliances & became China's largest AC manufacturer by 2000.",
  ],
  [
    "O General AC Repair and Maintenance",
    "o-general",
    "O General Air Conditioning, formerly part of Fujitsu General Limited, was founded in January, 1936, by Keijiro Yao as Yaou Shoten Co Ltd. The company has since manufactured appliances & air conditioners.",
  ],
  [
    "Mitsubishi AC Service and Repair",
    "mitsubishi",
    "Founded in 1954, Mitsubishi Air Conditioning has been producing residential & commercial HVAC (Mr. Slim & City Multi) AC systems for nearly 75 years & is renowned for its reliability & energy efficiency.",
  ],
  [
    "Samsung AC Maintenance Service",
    "samsung",
    "Samsung Air Conditioning is a leading brand recognised for innovation since 1969, specialising in air conditioner technology for homes & commercial HVAC systems (including VRF, multi-split & ducted systems).",
  ],
  [
    "York AC Servicing and Repair",
    "york",
    "YORK Air Conditioning was established in 1874 as the York Manufacturing Company in Pennsylvania. It began with ice-making machines & later expanded into HVAC, VRF, central AC systems & refrigeration.",
  ],
  [
    "LG AC Maintenance and Service",
    "lg",
    "LG Air Conditioning, a division of LG Electronics, has established a legacy of innovation since its founding in 1958. Once Korea's first consumer electronics company, it has evolved into a Smart Life Solution Company.",
  ],
  [
    "Trane HVAC Repair and Maintenance",
    "trane",
    "Trane Air Conditioning launched its first AC unit in 1931 & acquired General Electric's Central AC Division in 1982. This acquisition added key features, such as compressors & condensor coil, which are still in products today.",
  ],
  [
    "Carrier AC Repair and Services in Dubai",
    "carrier",
    "Carrier Air Conditioning has been leading the way in cooling & heating systems, central, split, package unit and VRF, Carrier Air Conditioning & Refrigeration since 1902, showcasing a long history of innovation & reliability.",
  ],
  [
    "Rheem AC Repair & Service Near Me",
    "rheem",
    "Rheem Air Conditioner, founded in 1925 in California, started with steel drums & later shifted to water heaters. In the 1940s & 1950s, the company expanded into AC systems. Now Rheem is leading global HVAC provider known for its innovative solutions.",
  ],
  ["SKM AC Maintenance Dubai", 
    "skm",
    "S.K.M Air Conditioning LLC (SKM) was established in 1974 in Sharjah, United Arab Emirates, to manufacture heating, ventilation, and air conditioning (HVAC) equipment tailored for the harsh Gulf climates.",
  ],
  ["Lennox Air Conditioning Maintenance Service", 
    "lennox",
    "Lennox Air Conditioning was established in 1895 when Dave Lennox built the first riveted-steel coal-fired furnace in Marshalltown, Iowa. The company later entered the air conditioning market in the early 1950s.",
  ],
  ["Aftron AC Maintenance Service", "aftron"],
  ["Bryant AC Repair Service Dubai", "bryant"],
  ["Blue Star AC Repair", "blue-star"],
  ["Supra AC Maintenance", "supra"],
  ["Toshiba AC Fix", "toshiba"],
  ["Super General AC Repair and Services in Dubai", "super-general"],
  ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Repair", "whirlpool"],
  ["Daewoo AC Cleaning", "daewoo"],
].map(([name, slug, description]) => ({
  name,
  href: `/services/air-conditioning-repair/brands/${slug}/`,
  ...(description ? { description } : {}),
}));


const brandsData = {
  title: "We specialise in air conditioning services for the following brands",
  description:
    "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  defaultItemDescription: defaultBrandDescription,
  searchLabel: "Search AC brands",
  searchPlaceholder: "Search air-conditioning brand",
  emptyMessage:
    "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Request AC Service",
  items: linkedBrands,
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Satwa.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp",
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after service",
  afterImage: {
    id: "after_img_1",
    src: "/img/after_img_1.webp",
  },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in All Types of AC Systems",
  columns: [
    {
      title: "Air Conditioning Systems Serviced Across Al Satwa:",
      items: [
        {
          title: "Window Air Conditioning",
          text:
            "Window Air Conditioning units are great for rooms, apartments and shops. They are good at keeping these places cool. Are easy to take care of and fix.",
        },
        {
          title: "Split Air Conditioning",
          text:
            "Split Air Conditioning systems are very popular in homes and offices. This is because they cool well and make little noise. If you service them regularly they will keep on cooling.",
        },
        {
          title: "Central Air Conditioning",
          text:
            "Air Conditioning systems like Central Air Conditioning are made to cool lots of rooms and big buildings. If you maintain them properly they will give you airflow and use energy efficiently.",
        },
        {
          title: "Chiller Air Conditioning",
          text:
            "We also have Chiller Air Conditioning systems. These are used in commercial buildings, hotels and factories. If you service them regularly they will keep running even when they are used a lot.",
        },
        {
          title: "Fan Coil Unit (FCU)",
          text:
            "The Fan Coil Unit helps spread air all around a building. If you take care of it, the air will flow better and the place will be more comfortable.",
        },
      ],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
        {
          title: "Package Unit Air Conditioning",
          text:
            "Package Unit Air Conditioning systems are used a lot in industrial places. They are very powerful. You can cool well but you need to service them regularly so they keep working properly.",
        },
        {
          title: "Portable Air Conditioning",
          text:
            "Portable Air Conditioning units are very useful when you need to cool a place or just need cooling for a short time. If you maintain them regularly they will cool better. Work more efficiently.",
        },
        {
          title: "Ducted Split Air Conditioning",
          text:
            "Ducted Split Air Conditioning systems are good for cooling rooms at the same time without being seen. They are perfect for houses, offices and large homes.",
        },
        {
          title: "Ceiling Air Conditioning",
          text:
            "Ceiling Air Conditioning units are put in the ceiling to save wall space and spread air evenly. You often see them in offices, restaurants and other commercial spaces.",
        },
        {
          title: "Inverter Air Conditioning",
          text:
            "Inverter Air Conditioning systems are special because they change how much cooling they do based on the temperature in the room. This helps reduce how much electricity they use. They give you cooling and are more energy efficient.",
        },
      ],
    },
  ],
  footerNote: {
    label: "Air Conditioning Tip",
    text:
      "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Al Satwa, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across Al Satwa.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in Al Satwa",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair in Al Satwa",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance in Al Satwa",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning in Al Satwa",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing in Al Satwa",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling in Al Satwa",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "ac-energy-saving-tips",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
  openInNewTab: true,
};

const repairPriceData = {
  id: "ac-service-pricing-banner",
  title:
    "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description: "",
  actionLabel: "Check Here For Price",
  actionHref: "/dubai-ac-service-price-list/",
  openInNewTab: false,
};

const testimonialsData = {
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description:
    "Customer feedback on FAJ air-conditioning repair and maintenance services in Al Satwa.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Sara Malik",
      subtitle: "Al Satwa Resident",
      description:
        "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in Al Satwa.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Mansoori",
      subtitle: "Al Satwa Resident",
      description:
        "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in Al Satwa, highly recommended!",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Arjun Kumar",
      subtitle: "Resident",
      description:
        "I booked FAJ for HVAC services in Al Satwa, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Shazia Sheikh",
      subtitle: "Homeowner",
      description:
        "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Ravi Mehta",
      subtitle: "Resident",
      description:
        "I used FAJ for AC cleaning service, and it really improved my air quality. The team worked efficiently, cleaned every part, and made my AC run like new again.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Waseem Aqdas",
      subtitle: "Homeowner",
      description:
        "Outstanding service from FAJ Technical! My AC wasn't cooling properly, but FAJ Technical came to the rescue. Quick response, friendly technician, and now my AC works perfectly. I highly recommend them!",
    },
  ],
};

const newsData = {
  id: "ac-news",
  title: "NEWS & UPDATES",
  description:
    "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      subtitle: "Admin • 5 Comments",
      description:
        "A properly functioning air conditioning system is essential for various settings, including homes, offices, and individual spaces. According to HVAC Webmasters, over 70%",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read More",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin • 4 Comments",
      description:
        "Air conditioning is excellent for keeping you comfortable indoors but can be expensive. But there is no need to worry, there are some ways to reduce AC electric bill with",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read More",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin • 0 Comments",
      description:
        "As the temperatures rise and summer approaches, the desire for a cool and comfortable escape within your home intensifies. Air conditioning offers a seemingly simple solu",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read More",
    },
  ],
  footer: {
    parts: [
      "Explore more expert tips, seasonal maintenance guides, and HVAC advice in our blog. ",
      {
        text: "View All Articles →",
        strong: true,
        href: "/blogs/",
      },
    ],
  },
};

const faqsData = {
  id: "ac-service-faqs",
  title: "FAQ's",
  description: "Answers about AC servicing, cleaning, cooling faults and maintenance in Al Satwa.",
  items: [
    {
      "question": "Who provides the best AC repair service near me in Dubai?",
      "answer": "FAJ Technical Services L.L.C is a good option for reliable AC repair. They fix homes, offices and shops all over Dubai. Their response is fast."
    },
    {
      "question": "How much does AC repair cost in Dubai?",
      "answer": "The cost of fixing your AC depends on the problem and type of AC. They usually inspect first. Then they tell you the price."
    },
    {
      "question": "How often should AC be serviced in Dubai?",
      "answer": "You should service your AC every 3 to 6 months. This is because the weather is extreme here."
    },
    {
      "question": "Do you offer emergency AC repair in Dubai?",
      "answer": "Yes, we offer emergency repair. They fix breakdowns and sudden cooling issues."
    },
    {
      "question": "What are the signs that my AC needs repair?",
      "answer": "If your AC cools weakly.. If it leaks water. Unusual noise and high electricity bills are also signs."
    },
    {
      "question": "Which AC brands do you service in Dubai?",
      "answer": "We service brands including LG, Samsung, Daikin, O General, Mitsubishi, Carrier and more."
    },
    {
      "question": "Do you provide same-day AC repair service?",
      "answer": "Yes, same-day service is available. If a technician is available and not too far."
    },
    {
      "question": "Why is my AC leaking water?",
      "answer": "Water leaks because of blocked drainage. Dirty filters or frozen coils can also cause it."
    },
    {
      "question": "Is AC gas refill in Dubai?",
      "answer": "Yes, FAJ Technical Services L.L.C refills gas after checking for leaks and system pressure."
    },
    {
      "question": "What is the difference between AC repair and maintenance?",
      "answer": "Repairing is all about solving issues when they arise, while maintenance is your proactive shield against potential problems. Regular upkeep ensures your AC runs smoothly and efficiently, keeping you cool when it matters most."
    },
    {
      "question": "Do you offer AC installation service in Dubai?",
      "answer": "Yes, we install all types of AC, including split, window, commercial AC and more."
    },
    {
      "question": "Is AMC (Annual Maintenance Contract) worth it in Dubai?",
      "answer": "Yes, AMC helps to reduce breakdowns and repair costs. It keeps your AC working all year."
    },
    {
      "question": "Why is my Air Conditioner not cooling properly?",
      "answer": "<ul><li>The air filters in your Air Conditioner might be dirty or blocked which reduces the airflow</li><li>If the refrigerant gas in your Air Conditioner is low it affects the cooling performance</li><li>There could be issues with the compressor or thermostat in the air conditioner which may stop it from cooling</li></ul>"
    },
    {
      "question": "What are the benefits of Air Conditioner maintenance?",
      "answer": "<ul><li>Air Conditioner maintenance improves the cooling performance of the Air Conditioner</li><li>It reduces electricity bills</li><li>Air Conditioner maintenance helps prevent breakdowns of the air conditioner</li></ul>"
    },
    {
      "question": "What does an air conditioner maintenance service include?",
      "answer": "<ul><li>Cleaning of the filters and coils of the air conditioner</li><li>Check the cooling performance of the AC</li><li>Inspecting the system parts of the AC</li></ul>"
    }
  ],
};

const bookingData = {
  title: "Book An Appointment",
  description:
    "Book your AC service appointment with our expert team in Al Satwa. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Al Satwa, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "AC Inspection Service",
  locations: ["Al Satwa", "Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request AC repair, cleaning, maintenance or AMC coverage in Al Satwa.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request AC service in Al Satwa:",
  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export const seo = seoData;
export const contact = contactData;
export const hero = heroData;
export const overview = overviewData;
export const areaOverview = areaOverviewData;
export const pricing = pricingData;
export const contracts = contractsData;
export const serviceOverview = serviceOverviewData;
export const commonSigns = commonSignsData;
export const video = videoData;
export const maintenanceImportance = maintenanceImportanceData;
export const maintenanceImportanceCards = maintenanceImportanceCardsData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedData;
export const servicesOfferedCards = servicesOfferedCardsData;
export const benefits = benefitsData;
export const cleaningService = cleaningServiceData;
export const cleaningServiceCards = cleaningServiceCardsData;
export const whyChooseUs = whyChooseUsData;
export const beforeAfter = beforeAfterData;
export const brands = brandsData;
export const sparePartsRepair = sparePartsRepairData;
export const gallery = galleryData;
export const energyTips = energyTipsData;
export const repairPrice = repairPriceData;
export const testimonials = testimonialsData;
export const news = newsData;
export const faqs = faqsData;
export const booking = bookingData;

export {
  seoData,
  contactData,
  heroData,
  overviewData,
  areaOverviewData,
  pricingData,
  contractsData,
  serviceOverviewData,
  commonSignsData,
  videoData,
  maintenanceImportanceData,
  maintenanceImportanceCardsData,
  commonProblemsData,
  servicesOfferedData,
  servicesOfferedCardsData,
  benefitsData,
  cleaningServiceData,
  cleaningServiceCardsData,
  whyChooseUsData,
  beforeAfterData,
  brandsData,
  sparePartsRepairData,
  galleryData,
  energyTipsData,
  repairPriceData,
  testimonialsData,
  newsData,
  faqsData,
  bookingData,
};

const alSatwaData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  overview: overviewData,
  areaOverview: areaOverviewData,
  pricing: pricingData,
  contracts: contractsData,
  serviceOverview: serviceOverviewData,
  commonSigns: commonSignsData,
  video: videoData,
  maintenanceImportance: maintenanceImportanceData,
  maintenanceImportanceCards: maintenanceImportanceCardsData,
  commonProblems: commonProblemsData,
  servicesOffered: servicesOfferedData,
  servicesOfferedCards: servicesOfferedCardsData,
  benefits: benefitsData,
  cleaningService: cleaningServiceData,
  cleaningServiceCards: cleaningServiceCardsData,
  whyChooseUs: whyChooseUsData,
  beforeAfter: beforeAfterData,
  brands: brandsData,
  sparePartsRepair: sparePartsRepairData,
  gallery: galleryData,
  energyTips: energyTipsData,
  repairPrice: repairPriceData,
  testimonials: testimonialsData,
  news: newsData,
  faqs: faqsData,
  booking: bookingData,
};

export default alSatwaData;
