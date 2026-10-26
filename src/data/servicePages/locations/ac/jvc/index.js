/**
 * JVC (Jumeirah Village Circle) AC Service Page Data
 */

const seoData = {
  title: "Best AC Repair and Maintenance Service in JVC, Dubai",
  description:
    "Book top-quality AC cleaning and AC repair service in JVC, Dubai. We provide maintenance solutions for ducted, split, and central AC systems near you",
  keywords:
    "AC Repair JVC, AC Services Jumeirah Village Circle, AC Maintenance JVC, AC Cleaning Service JVC, Air Conditioner Repair JVC, Central AC Repair JVC, Split AC Repair JVC, Best AC Repair Near Me JVC, AC Technician JVC, Emergency AC Repair JVC",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    title: "Best AC Repair and Maintenance Service in JVC, Dubai",
    description:
      "Book top-quality AC cleaning and AC repair service in JVC, Dubai. We provide maintenance solutions for ducted, split, and central AC systems near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair and Maintenance Service in JVC, Dubai",
    description:
      "Book top-quality AC cleaning and AC repair service in JVC, Dubai. We provide maintenance solutions for ducted, split, and central AC systems near you",
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
    "Most Reliable AC Repair and Maintenance Services in JVC | AC Service Near Me",
  paragraph:
    "In Dubai, the JVC is one of the most popular residential areas where there are a lot of apartments, townhouses, villas, cafes, commercial stores and family housing. Since air coolers are being used almost daily, even a small leak in the cooler will make the indoor environment uncomfortable. Regularly scheduled AC services guarantee regular cooling, air quality, and electricity usage.",
  paragraphs: [
    "In Dubai, the JVC is one of the most popular residential areas where there are a lot of apartments, townhouses, villas, cafes, commercial stores and family housing. Since air coolers are being used almost daily, even a small leak in the cooler will make the indoor environment uncomfortable. Regularly scheduled AC services guarantee regular cooling, air quality, and electricity usage.",
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
      description: "Fast assistance across JVC.",
    },
  ],
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Most Reliable AC Repair and Maintenance Services in JVC | AC Service Near Me",
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
        " services, cleaning, maintenance, and installation services in JVC. We have the expertise to assist you with your air conditioning repair, maintenance, or installation needs.",
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
  title: "Who provides the best AC repair services in JVC?",
  paragraphs: [
    "When you need an AC company to service your cooling equipment, you must find a reliable service provider, particularly during the hot summer seasons in Dubai. FAJ Technical Services L.L.C offers reliable AC repair and maintenance services in apartments, villas, townhouses, retail, restaurants and commercial buildings across JVC. We work for long-term system performance and quality workmanship, not short-term fixes.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in JVC?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in JVC.",
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
    "Sometimes you note your AC is running continuously, but it gives warm air. It may have a different cause for this might be possible that any internal part is broken.",
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
    alt: "Why Is My AC Not Cooling in JVC",
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
    "The majority of air conditioners give warning signs prior to a total failure. Recognizing these signs early helps to avoid costly repairs and inconvenient breakdowns.",
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
  title: "Emergency AC Repair Service in JVC",
  lead: {
    parts: [
      "When your AC suddenly stops working, quick repairs help restore comfort and prevent further damage to your cooling equipment. At ",
      { text: "FAJ Technical Services L.L.C", href: "/" },
      ", our fast-response team provides immediate support across JVC.",
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
    "Our team provides fast support for apartments, villas, townhouses, and retail outlets across JVC.",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "Emergency AC Repair Service in JVC",
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
  title: "Why is AC Maintenance Service Important in JVC?",
  paragraphs: [
    "Regular servicing ensures the cooling capacity of JVC air conditioner systems because of the high summer temperature in Dubai. Regular maintenance helps to avoid unexpected breakdowns and provides clean air.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in JVC?",
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
    "We provide fast diagnosis and professional repair for all major air conditioning faults across JVC:",
  columns: "four",
  items: [
    {
      id: "prob-1",
      number: "01",
      icon: "wind",
      title: "Weak Airflow",
      description:
        "Dirty filters, blocked ducts or fan issues are common causes of weak airflow. Typical repair: Filter cleaning and fan check.",
    },
    {
      id: "prob-2",
      number: "02",
      icon: "snowflake-slash",
      title: "Warm Air",
      description:
        "The use of warm air instead of cool air can be a sign of low refrigerant, thermostat trouble or dirty condenser coils. Typical repair: Gas charging or coil cleaning.",
    },
    {
      id: "prob-3",
      number: "03",
      icon: "volume-2",
      title: "Strange Noises",
      description:
        "Noises like grinding, rattling, or buzzing suggest that there may be loose parts or broken motor bearings. Typical repair: Part tightening or motor replacement.",
    },
    {
      id: "prob-4",
      number: "04",
      icon: "alert-triangle",
      title: "Foul Odors",
      description:
        "Mould, water and dust are frequently the causes of bad odour in the AC. Professional deep cleaning can help remove smells. Typical repair: Sanitisation and coil flush.",
    },
    {
      id: "prob-5",
      number: "05",
      icon: "zap-off",
      title: "Frequent Cycling",
      description:
        "An AC that keeps turning on and off may be due to a thermostat problem, dirty coils, or an oversized unit. Typical repair: Sensor calibration or coil maintenance.",
    },
    {
      id: "prob-6",
      number: "06",
      icon: "droplet-slash",
      title: "High Humidity Levels",
      description:
        "A room that keeps moist even with the air conditioning on is likely to have a problem with cooling or airflow. Typical repair: Comprehensive diagnostics.",
    },
    {
      id: "prob-7",
      number: "07",
      icon: "droplet",
      title: "Leaking Water",
      description:
        "Some of the most common reasons for water leakage include clogged filters, blocked condensate drain pipes, or damaged drain pans. Typical repair: Unclog drain line.",
    },
    {
      id: "prob-8",
      number: "08",
      icon: "trending-up",
      title: "Increased Energy Bills",
      description:
        "A sudden increase in electricity bills may mean your AC is working harder because of dirty filters or failing components. Typical repair: Complete maintenance tune-up.",
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
  title: "Professional Air Conditioning Services in JVC",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "Repairs cooling, water leaks, thermostat problems, compressor issues and electrical faults.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Filters, coils and drainage lines are cleaned of dust, dirt, mould and debris by our team.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Schedule maintenance to minimise wear on key components of the AC system and to ensure maximum cooling.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install residential and commercial AC systems following manufacturer instructions for optimal efficiency.",
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
          " involve scheduled inspections, maintenance and priority service to help keep cooling running smoothly.",
        ],
      },
    },
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Professional Air Conditioning Services in JVC",
  columns: "three",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "Repairs cooling, water leaks, thermostat problems, compressor issues and electrical faults.",
    },
    {
      icon: "wind",
      title: "AC Cleaning Services",
      description:
        "Filters, coils and drainage lines are cleaned of dust, dirt, mould and debris by our team.",
    },
    {
      icon: "clock-fast",
      title: "AC Maintenance Service",
      description:
        "Schedule maintenance to minimise wear on key components of the AC system and to ensure maximum cooling.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install residential and commercial AC systems following manufacturer instructions for optimal efficiency.",
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
          " involve scheduled inspections, maintenance and priority service to help keep cooling running smoothly.",
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
  title: "Benefits Of Regular AC Service and Maintenance in JVC",
  city: "JVC",
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
        "Consistent temperatures and reliable cooling during peak JVC summer heat.",
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
        "Choose a day and time for your AC repair near me, JVC or Dubai. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in JVC. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in JVC.",
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
      title: "Air Conditioning Systems Serviced Across JVC:",
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
            "Concealed ceiling units providing high-efficiency zoned cooling across multi-room villas and apartments in JVC.",
        },
        {
          title: "VRF / VRV Systems",
          text:
            "Multi-zone inverter technology tailored for variable cooling demand and extreme power conservation.",
        },
        {
          title: "Package Units",
          text:
            "Heavy-duty all-in-one cooling systems engineered for commercial outlets, retail, and townhomes in JVC.",
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
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across JVC.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in JVC",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair in JVC",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance in JVC",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning in JVC",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing in JVC",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling in JVC",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in JVC. Find tips to cut costs and stay cool all summer long!",
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
    "Read genuine reviews from homeowners, landlords and facility managers who rely on FAJ Technical Services L.L.C for their HVAC maintenance in JVC.",
  items: [
    {
      name: "Tariq Mansoor",
      role: "JVC Seasons Community Resident",
      quote:
        "Our central AC stopped cooling during a hot weekend in JVC. FAJ dispatched a technician within two hours. He cleared a clogged drainage line, replaced a worn capacitor, and restored icy cooling. Top professional work!",
    },
    {
      name: "Hannah Phillips",
      role: "Villa Owner in JVC District 12",
      quote:
        "Outstanding deep coil cleaning! The musty smell completely vanished and our electricity bill dropped significantly the following month. Highly recommend FAJ for JVC villa maintenance.",
    },
    {
      name: "Vikram Sharma",
      role: "Retail Shop Manager, JVC",
      quote:
        "We have an annual maintenance contract (AMC) with FAJ for our commercial space in JVC. Reliable quarterly tune-ups, pristine maintenance logs, and zero downtime across the whole summer.",
    },
  ],
};

const faqsData = {
  id: "location-faqs",
  title: "AC Repair and Maintenance FAQs in JVC",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in JVC? Browse our most common answers below:",
  items: [
    {
        "question": "How often should I service my AC in JVC?",
        "answer": "Most AC systems should be serviced every 3 to 6 months to maintain good cooling performance"
    },
    {
        "question": "Why is my AC running but not cooling?",
        "answer": "<strong>Common reasons include:</strong><ul><li>Dirty Filters</li><li>Low Refrigerant</li><li>Blocked Coils</li><li>Thermostat Problems</li></ul>"
    },
    {
        "question": "Is same-day AC repair available in JVC?",
        "answer": "Yes, same-day service may be available, but most of the time it depends on technician availability and the AC problem."
    },
    {
        "question": "Do you repair ducted AC systems?",
        "answer": "Yes, our technicians repair and maintain ducted AC systems for residential and commercial properties."
    },
    {
        "question": "What causes water leakage from an AC?",
        "answer": "<ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty air filter</li></ul>"
    },
    {
        "question": "Can AC cleaning improve air quality?",
        "answer": "Yes, professional cleaning removes dust, mould, and bacteria that affect indoor air."
    },
    {
        "question": "Which AC brands do you repair?",
        "answer": "<strong>We repair: </strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>Mitsubishi</li><li>O General</li><li>Gree</li><li>Panasonic and many other brands.</li></ul>"
    },
    {
        "question": "What is included in AC maintenance?",
        "answer": "<ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain cleaning</li><li>Thermostat testing</li><li>Performance check</li></ul>"
    },
    {
        "question": "Why is my AC making noise?",
        "answer": "Your AC may be making noise because of loose parts, fan problems, or worn components, which are the most common causes of it."
    },
    {
        "question": "Is an AMC worth it?",
        "answer": "Yes, it prevents breakdowns and ensures efficient AC performance throughout the year."
    },
    {
        "question": "How long does AC servicing take?",
        "answer": "The typical time for most maintenance visits is approximately one hour. Remember, sometimes it will be increased because of the AC problem."
    },
    {
        "question": "Can you help lower electric bills?",
        "answer": "Yes, a clean AC will have less of an impact on the environment and cool more efficiently."
    },
    {
        "question": "Do you provide a warranty?",
        "answer": "Yes, our AC cleaning services are guaranteed to be serviced for 60 days with a maintenance warranty"
    },
    {
        "question": "Do I need to repair or replace my air conditioner?",
        "answer": "YWhen repairs become regular, and the unit is quite old, it might be sensible to replace it in the long term."
    },
    {
        "question": "What is the best way to get AC services in JVC?",
        "answer": "Call FAJ Technical Services L.L.C and let us know where you are and when you're available, and we will get you an appointment."
    }
],
};

const bookingData = {
  id: "book-appointment",
  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across JVC.",
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
