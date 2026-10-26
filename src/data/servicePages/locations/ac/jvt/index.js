/**
 * JVT (Jumeirah Village Triangle) AC Service Page Data
 */

const seoData = {
  title: "Best AC Repair Service and Maintenance in JVT, Dubai",
  description:
    "Get top-quality AC repair and service in JVT, Dubai. We offer maintenance solutions for ducted, split, and central AC systems nearby",
  keywords:
    "ac service in jvt, AC repair in jvt, AC maintenance in jvt, AC cleaning in jvt, AC installation in jvt, AC technician in jvt, AC service near me, AC repair near me, AC maintenance near me, AC cleaning near me, AC installation near me",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    title: "Best AC Repair Service and Maintenance in JVT, Dubai",
    description:
      "Get top-quality AC repair and service in JVT, Dubai. We offer maintenance solutions for ducted, split, and central AC systems nearby",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair Service and Maintenance in JVT, Dubai",
    description:
      "Get top-quality AC repair and service in JVT, Dubai. We offer maintenance solutions for ducted, split, and central AC systems nearby",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  displayPhone: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const heroData = {
  title:
    "Affordable AC Repair and Maintenance Services in Jumeirah Village Triangle (JVT) | AC Service Near Me",
  paragraph:
    "Jumeirah Village Triangle (JVT) is a peaceful and quiet residential development that boasts villas, townhouses, apartment complexes, parks, schools, and local shops. Since air conditioners run for many hours every day, regular servicing is important to keep your home comfortable and avoid unexpected breakdowns during Dubai's hot weather.",
  paragraphs: [
    "Jumeirah Village Triangle (JVT) is a peaceful and quiet residential development that boasts villas, townhouses, apartment complexes, parks, schools, and local shops. Since air conditioners run for many hours every day, regular servicing is important to keep your home comfortable and avoid unexpected breakdowns during Dubai's hot weather.",
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
      description: "Fast assistance across JVT.",
    },
  ],
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Affordable AC Repair and Maintenance Services in Jumeirah Village Triangle (JVT) | AC Service Near Me",
    width: 600,
    height: 400,
  },
  actions: [
    {
      id: "booking",
      label: "Book AC Service",
      action: "openBooking",
      variant: "primary",
    },
    {
      id: "quote",
      label: "Get an Estimation",
      action: "openBooking",
      variant: "secondary",
    },
  ],
};

const overviewData = {
  id: "overview",
  paragraphs: [
    {
      parts: [
        {
          text: "FAJ Technical Services L.L.C",
          href: "/",
        },
        " has been providing expert and professional air conditioner services in Dubai since 2010. We provide ",
        {
          text: "AC repair",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        " services, cleaning, maintenance, and installation services in JVT. We have the expertise to assist you with your air conditioning repair, maintenance, or installation needs.",
      ],
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best AC repair services in Jumeirah Village Triangle?",
  paragraphs: [
    "When cooling issues have become a problem, it's crucial to find a trusted AC company, especially during the extreme heat of Dubai's summer months. FAJ Technical Services L.L.C offers reliable AC repair and maintenance in JVT across apartments, townhouses, villas, restaurants, and other commercial spaces. Our focus is on long-lasting performance and quality work, rather than fast fixes.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Jumeirah Village Triangle?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in JVT.",
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
        "1 Time PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
  ],
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "Why Is My AC Not Cooling?",
  description:
    "If your AC keeps running but the room remains warm, one or more components may not be working properly.",
  listTitle: "Common reasons include:",
  checklist: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Restricted airflow",
  ],
  conclusion:
    "A complete inspection is the best way to find out what is wrong. Our technicians check everything and fix the actual problem.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "Why Is My AC Not Cooling in JVT",
    width: 853,
    height: 853,
  },
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonSignsData = {
  id: "ac-maintenance-signs",
  title: "Which signs show the AC needs service?",
  intro:
    "A significant number of ACs have signs that appear before the system breaks down. Knowing these signs early will help avoid bigger problems and expensive repairs.",
  items: [
    { title: "Electricity bills going up" },
    { title: "Weak airflow from the vents" },
    { title: "Room taking too long to cool" },
    { title: "Water dripping from the unit" },
    { title: "Strange sounds while running" },
    { title: "Bad smell coming from the vents" },
  ],
  showCta: false,
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

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in JVT",
  lead: {
    parts: [
      "Unexpected AC breakdowns require fast attention. When cooling fails during high temperatures, you need rapid, reliable assistance. At ",
      { text: "FAJ Technical Services L.L.C", href: "/" },
      ", our technicians quickly restore proper cooling across JVT.",
    ],
  },
  listTitle: "Our emergency AC repair service covers:",
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
    "Our team provides fast support for villas, townhouses, and residential apartments across JVT.",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "Emergency AC Repair Service in JVT",
    width: 600,
    height: 400,
  },
  variant: "framed",
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in Jumeirah Village Triangle?",
  paragraphs: [
    "JVT is a residential neighbourhood in which families spend much of their time inside. Dubai has a hot climate as such, the ACs here do a lot of work all year round. Regular maintenance helps to increase performance and prevent unwanted failures.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in JVT?",
    width: 600,
    height: 400,
  },
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "Key Benefits of Regular AC Maintenance",
  columns: "three",
  items: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather",
      description:
        "The hot climatic conditions in Dubai put a strain on air conditioning systems. Standard maintenance ensures cool and efficient cooling in hot weather.",
    },
    {
      icon: "coins",
      title: "Cleanliness and Maintenance",
      description:
        "A clean AC runs much better and consumes less power, which helps save on monthly power bills.",
    },
    {
      icon: "clock-fast",
      title: "Longevity of Equipment",
      description:
        "Regular maintenance helps to prevent unnecessary wear of critical components and to lengthen system life.",
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description:
        "Filters and parts cleaning remove allergens and dust, thereby providing healthy indoor air.",
    },
    {
      icon: "heart-hand",
      title: "Enhanced Comfort",
      description:
        "Balanced airflow and stable cooling throughout your property are maintained through regular servicing.",
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-problems",
  title: "Most Common AC Problems",
  subtitle:
    "We provide fast diagnosis and professional repair for all major air conditioning faults across JVT:",
  columns: "four",
  items: [
    {
      id: "prob-1",
      number: "01",
      icon: "wind",
      title: "Weak Airflow",
      description:
        "If the ventilation is not strong, the filters are likely clogged, or there is a problem with the fan. Typical repair: Filter cleaning and blower inspection.",
    },
    {
      id: "prob-2",
      number: "02",
      icon: "snowflake-slash",
      title: "Warm Air",
      description:
        "If warm air is coming from your AC, then it might be due to low gas or a failing compressor. Typical repair: Refrigerant leak detection and recharge.",
    },
    {
      id: "prob-3",
      number: "03",
      icon: "volume-2",
      title: "Strange Noises",
      description:
        "If the AC has a grinding or rattling noise, it indicates a loose or worn-out component. Typical repair: Mounting adjustment or bearing replacement.",
    },
    {
      id: "prob-4",
      number: "04",
      icon: "alert-triangle",
      title: "Foul Odors",
      description:
        "If the vents emit bad odours, it is most likely due to mould or soil accumulation inside the system. Typical repair: Antimicrobial coil treatment.",
    },
    {
      id: "prob-5",
      number: "05",
      icon: "zap-off",
      title: "Frequent Cycling",
      description:
        "If the AC is coming on and off frequently, it could be that the thermostat is faulty or the coils are dirty. Typical repair: Thermostat re-calibration.",
    },
    {
      id: "prob-6",
      number: "06",
      icon: "droplet-slash",
      title: "High Humidity Levels",
      description:
        "If the air in the room is sticky and damp, the AC is not dehumidifying the air properly. Typical repair: Airflow balancing and coil inspection.",
    },
    {
      id: "prob-7",
      number: "07",
      icon: "droplet",
      title: "Leaking Water",
      description:
        "Water leaking from the indoor unit is usually caused by clogged drain pipes or frozen coils. Typical repair: Condensate drain flush.",
    },
    {
      id: "prob-8",
      number: "08",
      icon: "trending-up",
      title: "Increased Energy Bills",
      description:
        "If your electricity bills are going up, your AC could be working too hard. This is usually due to dirty components. Typical repair: Comprehensive PPM service.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedData = {
  id: "services-offered-overview",
  title: "Professional Air Conditioning Services in JVT",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We fix the cooling issues, water leakages, faulty compressor, electrical and thermostat problems.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Professional cleaning eliminates dust, dirt, mould and debris from filters, coils, and drain lines.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Regular maintenance helps ensure that key components of the AC are functioning correctly to deliver steady cooling.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install AC systems, both residential and commercial, in line with the manufacturer's directions.",
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: {
        parts: [
          "Our ",
          {
            text: "AMC plans",
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          " provide service and support throughout the year as part of our plans with planned visits.",
        ],
      },
    },
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Professional Air Conditioning Services in JVT",
  columns: "three",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We fix the cooling issues, water leakages, faulty compressor, electrical and thermostat problems.",
    },
    {
      icon: "wind",
      title: "AC Cleaning Services",
      description:
        "Professional cleaning eliminates dust, dirt, mould and debris from filters, coils, and drain lines.",
    },
    {
      icon: "clock-fast",
      title: "AC Maintenance Service",
      description:
        "Regular maintenance helps ensure that key components of the AC are functioning correctly to deliver steady cooling.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install AC systems, both residential and commercial, in line with the manufacturer's directions.",
    },
    {
      icon: "file-check",
      title: "Annual Maintenance Contract (AMC)",
      description: {
        parts: [
          "Our ",
          {
            text: "AMC plans",
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          " provide service and support throughout the year as part of our plans with planned visits.",
        ],
      },
    },
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  title: "Benefits Of Regular AC Service and Maintenance in JVT",
  city: "JVT",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" },
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "Reliable Cooling",
      description:
        "Consistent temperatures and reliable cooling during peak JVT summer heat.",
      icon: "snowflake",
    },
    {
      id: "ac-bills",
      number: "02",
      title: "Lower Power Bills",
      description:
        "Clean, calibrated cooling units consume far less electricity every single month.",
      icon: "wallet",
    },
    {
      id: "ac-lifespan",
      number: "03",
      title: "Longer Equipment Life",
      description:
        "Routine lubrication and inspection prevent premature wear on expensive compressors.",
      icon: "clock",
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "Healthier Air Quality",
      description:
        "Sanitised coils and clean filters eliminate mould spores, bacteria, and allergens.",
      icon: "ac-thermostat",
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "Prevent Water Leaks",
      description:
        "Regular drain clearing stops condensation overflow before it stains ceilings and walls.",
      icon: "wind",
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "Peace of Mind",
      description:
        "Scheduled preventive check-ups ensure prompt fault detection before total unit failure.",
      icon: "customer-feedback",
    },
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const cleaningServiceData = {
  id: "cleaning-service-overview",
  title: "Best AC Cleaning & AC Service in Dubai and Sharjah",
  description:
    "We provide complete AC cleaning and maintenance for homes and businesses. Our team makes sure your air conditioning works well and keeps your space cool.",
  imageSide: "right",
  image: {
    id: "ac-service-page/best-ac-service",
    src: "/img/ac-service-page/best-ac-service.webp",
    alt: "Best AC Cleaning & AC Service in Dubai and Sharjah",
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
  id: "cleaning-service-cards",
  title: "WHY REGULAR AC CLEANING IS ESSENTIAL",
  columns: "four",
  paragraphs: [
    "AC cleaning is important to keep your air conditioning unit running efficiently and providing clean and healthy air in Dubai. Over time dust, mold, and bacteria build up in filters and ducts, leading to bad smells and poor air quality.",
    "A professional AC cleaning helps prevent breakdowns, cuts energy costs, and extends the life of your unit. Trust FAJ Technical Services L.L.C for top-quality AC cleaning services across Dubai.",
  ],
  items: [
    {
      icon: "wind",
      title: "Clean Air Supply",
      description:
        "Removes mold, bacteria, and dust buildup from inside your cooling unit for fresher indoor airflow.",
    },
    {
      icon: "zap",
      title: "Lower Energy Bills",
      description:
        "Clean coils and clean filters let your system cool faster without overworking and wasting electricity.",
    },
    {
      icon: "shield-check",
      title: "Avoid Costly Breakdowns",
      description:
        "Prevents iced evaporator coils and clogged drain pipes before they cause major water damage.",
    },
    {
      icon: "peace-of-mind",
      title: "Longer Equipment Life",
      description:
        "Reduces everyday stress on internal motors, compressors, and electrical components for longer service life.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const whyChooseUsData = {
  id: "why-choose-us",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description:
    "Dedicated to prompt, professional and transparent HVAC service across Dubai.",
  image: {
    id: "ac-service-page/ac-services-component-new",
    src: "/img/ac-service-page/ac-services-component-new.webp",
    alt: "Ac Maintenance Services",
    width: 600,
    height: 400,
  },
  items: [
    {
      icon: "clock-fast",
      title: "Reliable, Priority, and Quick",
      description: {
        parts: [
          'You can count on ',
          {
            text: 'efficient service',
            href: 'https://www.instagram.com/fajtechnicalservicesllc/',
            strong: true,
            external: true,
          },
          '! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.',
        ],
      },
    },
    {
      icon: "heart-hand",
      title: "Feeling Of Calm",
      description: {
        parts: [
          'With ',
          {
            text: 'annual maintenance contract',
            href: '/services/air-conditioning-repair/ac-annual-maintenance-contract/',
          },
          ', you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.',
        ],
      },
    },
    {
      icon: "calendar-check",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, JVT or Dubai. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in JVT. This is why most major brands trust us to handle their service and maintenance needs.",
    },
    {
      icon: "shield-check",
      title: "Great Value",
      description:
        "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.",
    },
    {
      icon: "user-check",
      title: "Trustworthy",
      description: {
        parts: [
          'Our ',
          {
            text: 'skilled AC technicians',
            href: 'https://www.facebook.com/acrepairservices',
            strong: true,
            external: true,
          },
          ' are highly trained, and we provide excellent service for a variety of major AC brands efficiently.',
        ],
      },
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Projects",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in JVT.",
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
  id: "brands-directory",
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

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Handle All Types of AC Systems",
  columns: [
    {
      title: "Air Conditioning Systems Serviced Across JVT:",
      items: [
        {
          title: "Window AC",
          text:
            "We provide fast repair and servicing for Window AC units, fixing common cooling and airflow issues.",
        },
        {
          title: "Split AC",
          text:
            "Our team handles Split AC repair, cleaning, and maintenance for homes and offices with quick response service.",
        },
        {
          title: "Central AC",
          text:
            "FAJ Technical Services L.L.C offers complete Central AC maintenance and repair for buildings to ensure even and efficient cooling.",
        },
        {
          title: "Chiller AC",
          text:
            "We service Chiller AC systems used in large buildings and commercial spaces, keeping them running efficiently.",
        },
        {
          title: "Fan Coil Unit (FCU)",
          text:
            "Our experts repair and maintain FCU systems to improve airflow and maintain proper cooling balance.",
        },
      ],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
        {
          title: "Ducted Split AC",
          text:
            "Concealed ceiling units providing high-efficiency zoned cooling across multi-room villas and apartments in JVT.",
        },
        {
          title: "VRF / VRV Systems",
          text:
            "Multi-zone inverter technology tailored for variable cooling demand and extreme power conservation.",
        },
        {
          title: "Package Units",
          text:
            "Heavy-duty all-in-one cooling systems engineered for commercial outlets, retail, and townhomes in JVT.",
        },
        {
          title: "HVAC Controls & Thermostats",
          text:
            "Smart digital thermostats, zone actuators, and central control units calibrated for precision cooling.",
        },
        {
          title: "Drainage & Condensate Pumps",
          text:
            "High-capacity drainage pumps installed and maintained to permanently prevent indoor water leaks.",
        },
      ],
    },
  ],
  footnote:
    "Our experienced technicians carry common replacement parts and diagnostics to fix AC problems on the first visit whenever possible.",
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across JVT.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in JVT",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair in JVT",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance in JVT",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning in JVT",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing in JVT",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling in JVT",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in JVT. Find tips to cut costs and stay cool all summer long!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
  openInNewTab: true,
};

const newsData = {
  id: "news-updates",
  title: "NEWS & UPDATES",
  description:
    "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      subtitle: "Admin   5 Comments",
      description:
        "A properly functioning air conditioning system is essential for various settings, including homes, offices, and individual spaces. According to HVAC Webmasters, over 70%",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read Article",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin   4 Comments",
      description:
        "Air conditioning is excellent for keeping you comfortable indoors but can be expensive. But there is no need to worry, there are some ways to reduce AC electric bill with",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read Article",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin   0 Comments",
      description:
        "As the temperatures rise and summer approaches, the desire for a cool and comfortable escape within your home intensifies. Air conditioning offers a seemingly simple solu",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read Article",
    },
  ],
  footer: {
    parts: [
      "Want to explore more air conditioning insights and guides? ",
      {
        text: "Visit our full blog directory",
        strong: true,
        href: "/blogs/",
      },
    ],
  },
};

const testimonialsData = {
  id: "testimonials",
  title: "Customer Reviews",
  description:
    "Read genuine reviews from homeowners, landlords and facility managers who rely on FAJ Technical Services L.L.C for their HVAC maintenance in JVT.",
  items: [
    {
      name: "Sultan Al Nuaimi",
      role: "JVT Villa Owner, District 4",
      quote:
        "Our split AC units were barely cooling during extreme humidity. FAJ arrived on the same day, checked gas pressure, cleaned the filters, and fixed an electrical connection. Prompt, courteous, and efficient service!",
    },
    {
      name: "Charlotte Evans",
      role: "Townhouse Resident, JVT",
      quote:
        "Excellent experience with FAJ AC maintenance team. They performed complete coil flushing and unblocked a messy drain line. The technicians were clean, polite, and left zero mess.",
    },
    {
      name: "Rashid Qureshi",
      role: "Property Landlord in JVT",
      quote:
        "I trust FAJ with all AC maintenance contracts across my rental units in JVT. Honest pricing, thorough diagnostic reports, and great warranty coverage. Highly recommended!",
    },
  ],
};

const faqsData = {
  id: "location-faqs",
  title: "AC Repair and Maintenance FAQs in JVT",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in JVT? Browse our most common answers below:",
  items: [
    {
        "question": "How often should I service my AC in JVT?",
        "answer": "Cooling efficiency is maintained, and breakdowns are minimised with a professional service every 3 to 6 months."
    },
    {
        "question": "Why does my Air Conditioner blow hot air?",
        "answer": "<strong>It may be due to the following:</strong><ul><li>Dirty filters</li><li>Low refrigerant</li><li>Compressor faults</li><li>Thermostat problems</li></ul>"
    },
    {
        "question": "Is the same-day AC repair service offered in JVT?",
        "answer": "Yes, but it depends on the technician's availability and the issues of you AC unit; same-day service may be available."
    },
    {
        "question": "What AC unit would be best for a villa in JVT?",
        "answer": "Central AC and Ducted Split AC systems are commonly used because they cool multiple rooms efficiently."
    },
    {
        "question": "What causes AC water leakage?",
        "answer": "<strong>Common causes include:</strong><ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty air filter</li></ul>"
    },
    {
        "question": "Can AC cleaning improve indoor air quality?",
        "answer": "Yes, professional cleaning removes dust, mould, and bacteria from the system and helps to improve the air quality or reduce energy bills."
    },
    {
        "question": "What is included in AC maintenance?",
        "answer": "<strong>Maintenance includes:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain cleaning</li><li>Thermostat testing</li><li>Cooling performance check</li></ul>"
    },
    {
        "question": "Which AC brands do you repair?",
        "answer": "<strong>We repair</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>Mitsubishi</li><li>O General</li><li>Gree</li><li>Panasonic, and many other brands.</li></ul>"
    },
    {
        "question": "Is an AMC worth having?",
        "answer": "Yes, regular servicing will minimise breakdowns and will extend the lifespan of your AC."
    },
    {
        "question": "Do you repair ACs in townhouses and apartments?",
        "answer": "Yes, we offer AC services for offices, townhouses, villas, apartments and commercial buildings in JVT."
    },
    {
        "question": "What is the time needed for AC maintenance?",
        "answer": "The time spent on the maintenance depends on the situation of the system and is approximately 1 hour."
    },
    {
        "question": "Can regular servicing lower electricity bills?",
        "answer": "Yes, if the AC is well-maintained, it will be more efficient and run on less electricity."
    },
    {
        "question": "Do your AC services include a warranty?",
        "answer": "Yes, our AC cleaning and maintenance services include a 60-day service warranty."
    },
    {
        "question": "How can I book AC service in JVT?",
        "answer": "YSimply contact FAJ Technical Services L.L.C, share your location and preferred appointment time, and our team will schedule a suitable visit."
    }
],
};

const bookingData = {
  id: "book-appointment",
  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across JVT.",
  submitLabel: "Schedule Service Now",
};

const pageData = {
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

export default pageData;
