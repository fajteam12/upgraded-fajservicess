const seoData = {
  title: "Emergency AC Repair and Service in Arabian Ranches with Expert",
  description:
    "Looking for the best AC repair & service in Arabian Ranches, Dubai? Call 043300002 for LG AC & Carrier air conditioning repair & maintenance near you",
  keywords:
    "AC Repair in Arabian Ranches, Air Conditioning Service in Arabian Ranches, Air Con Maintenance & AC Installation in Arabian Ranches",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emergency AC Repair and Service in Arabian Ranches with Expert",
    description:
      "Looking for the best AC repair & service in Arabian Ranches, Dubai? Call 043300002 for LG AC & Carrier air conditioning repair & maintenance near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency AC Repair and Service in Arabian Ranches with Expert",
    description:
      "Looking for the best AC repair & service in Arabian Ranches, Dubai? Call 043300002 for LG AC & Carrier air conditioning repair & maintenance near you",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const heroData = {
  title: "Affordable AC Repair and Maintenance Services in Arabian Ranches | AC Service Near Me",
  paragraph:
    "Among the popular villa communities in Dubai, Arabian Ranches is one of them where air conditioning is used nearly every day. Your home can become uncomfortable toward the end of summer if you have a small AC issue. Your cooling system will operate more efficiently and maintain the comfort of your rooms with regular servicing.",
  paragraphs: [
    "Among the popular villa communities in Dubai, Arabian Ranches is one of them where air conditioning is used nearly every day. Your home can become uncomfortable toward the end of summer if you have a small AC issue. Your cooling system will operate more efficiently and maintain the comfort of your rooms with regular servicing.",
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
      description: "Fast assistance across Arabian Ranches.",
    },
  ],
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Affordable AC Repair and Maintenance Services in Arabian Ranches | AC Service Near Me",
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
  ],
};

const overviewData = {
  id: "overview",
  paragraphs: [
    {
      parts: [
        "Ever since 2010, ",
        {
          text: "FAJ Technical Services L.L.C",
          href: "/",
        },
        " has been serving customers all over Dubai. We offer ",
        {
          text: "AC repair",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        ", AC cleaning, AC maintenance and AC installation in Arabian Ranches. Our experts will be able to repair or service your system if you require it. We service residential and commercial air conditioning systems and offer solutions to ensure proper operation of your cooling system year-round.",
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
  title: "Who provides the best AC repair services in Arabian Ranches?",
  paragraphs: [
    "When your cooling system is not working properly, it is vital to find a reliable AC company. FAJ Technical Services L.L.C is a company that offers professional AC services to villas, townhouses, offices, retail shops and commercial properties in Arabian Ranches. Our technicians thoroughly check each system and offer appropriate repairs for cooling issues, water leaks, electrical issues, compressor failures, and thermostat problems. We don't just give quick fixes; we also care about long-term AC performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Arabian Ranches?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Arabian Ranches.",
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
    "Your AC may continue running while the room stays warm. This usually means one or more components inside the system need attention.",
  listTitle: "Common causes include:",
  checklist: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Thermostat problems",
    "Compressor faults",
    "Electrical issues",
    "Poor airflow",
  ],
  conclusion:
    "A detailed inspection helps identify the exact problem and restores proper cooling.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ AC technician troubleshooting cooling problems in Arabian Ranches",
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
    "Most air conditioners show warning signs before a complete breakdown.",
  items: [
    { title: "Cooling is weaker than usual" },
    { title: "Electricity bills increase" },
    { title: "Water leaking from the unit" },
    { title: "Low airflow from vents" },
    { title: "AC making unusual noises" },
    { title: "Bad smell when the AC starts" },
  ],
  showCta: false,
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Arabian Ranches",
  lead: {
    parts: [
      "An AC failure during Dubai's hot weather needs immediate attention. At ",
      { text: "FAJ Technical Services L.L.C", href: "/" },
      " our emergency repair service helps restore cooling quickly and prevents further damage to your system.",
    ],
  },
  listTitle: "We provide emergency assistance for:",
  items: [
    "AC not cooling",
    "AC not turning on",
    "Water leakage",
    "Electrical faults",
    "Thermostat issues",
    "Compressor failures",
    "Weak airflow",
    "Strange noises",
  ],
  conclusion:
    "We provide fast assistance for residential and commercial customers throughout Arabian Ranches and nearby areas.",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Arabian Ranches",
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
  title: "Why is AC maintenance service important in Arabian Ranches?",
  paragraphs: [
    "During the warmer seasons, ACs in Arabian Ranches tend to run for extended periods. Frequent maintenance ensures your system cools effectively, minimises surprise issues, and maintains comfort in all rooms year-round.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC maintenance service important in Arabian Ranches?",
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
        "Dubai's high temperatures add extra pressure on air conditioning systems. With regular maintenance, your AC will continue to perform well throughout the hot summer months.",
    },
    {
      icon: "coins",
      title: "Saving Energy",
      description:
        "A clean, properly tuned AC uses less power to cool your home, thus saving on your electric bill.",
    },
    {
      icon: "clock-fast",
      title: "Preservation of Equipment",
      description:
        "Regular maintenance prevents unnecessary wear of key components of the air conditioning system and extends its lifespan.",
    },
    {
      icon: "wind",
      title: "Better Air Quality",
      description:
        "Filters and parts are cleaned to reduce dust and allergens in your home's air, creating a healthier environment for your family.",
    },
    {
      icon: "heart-hand",
      title: "Better Airflow and Cooling",
      description:
        "A well-serviced AC provides consistent cooling and equitable air distribution, which makes every room more comfortable.",
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
    "We provide fast diagnosis and professional repair for all major air conditioning faults across Arabian Ranches:",
  columns: "four",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description:
        "Many times, weak airflow is due to dirty filters, dirty ducts or a malfunctioning fan. Servicing restores normal airflow and enhances cooling.",
      icon: "wind",
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description:
        "When your AC is blowing warm air, it might be due to the refrigerant level being low, a possible failure of the compressor, or a thermostat issue.",
      icon: "snowflake-slash",
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description:
        "Loose parts or worn parts may produce buzzing, rattling or grinding noises and should be inspected before serious damage is done.",
      icon: "volume-2",
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description:
        "The unpleasant odours are due to mould, bacteria or dirt within the AC. Deep cleaning eliminates the cause of the foul smell.",
      icon: "alert-triangle",
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description:
        "When the AC continues to turn on and off, it could be due to thermostat problems, clogged vents, or electrical problems.",
      icon: "zap-off",
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description:
        "If the AC fails to dehumidify the air, the air may be humid and uncomfortable even when the system is on.",
      icon: "droplet-slash",
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description:
        "Common causes of water leakage include clogged filters, frozen coils, and blocked drain lines. Early repairs prevent water damage.",
      icon: "droplets",
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description:
        "If the power bill suddenly starts increasing, there could be a reason why the AC isn't working as efficiently as it should be due to poor maintenance or undetected issues.",
      icon: "arrow-up-right",
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
  title: "Professional Air Conditioning Services in Arabian Ranches",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We repair cooling problems, electrical faults, compressor issues, thermostat failures, and water leaks. Our technicians restore your AC safely and efficiently.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Our cleaning service removes dirt, dust, mould, and debris from important AC components. This improves airflow and helps maintain fresh indoor air.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance keeps your cooling system working efficiently throughout the year while reducing wear on important AC components.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install different types of residential and commercial AC systems according to manufacturer guidelines for reliable and efficient operation.",
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: {
        parts: [
          "Our ",
          { text: "AMC plans", href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/" },
          " include scheduled inspections, preventive servicing, and priority technical support to help keep your AC running throughout the year.",
        ],
      },
    },
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Professional Air Conditioning Services in Arabian Ranches",
  columns: "three",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We repair cooling problems, electrical faults, compressor issues, thermostat failures, and water leaks. Our technicians restore your AC safely and efficiently.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Our cleaning service removes dirt, dust, mould, and debris from important AC components. This improves airflow and helps maintain fresh indoor air.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance keeps your cooling system working efficiently throughout the year while reducing wear on important AC components.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We install different types of residential and commercial AC systems according to manufacturer guidelines for reliable and efficient operation.",
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: {
        parts: [
          "Our ",
          { text: "AMC plans", href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/" },
          " include scheduled inspections, preventive servicing, and priority technical support to help keep your AC running throughout the year.",
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
  title: "Benefits Of Regular AC Service and Maintenance in Arabian Ranches",
  city: "Arabian Ranches",
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
        "Consistent temperatures and reliable cooling during peak Arabian Ranches summer heat.",
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
      title: "Airflow Balance",
      description:
        "We ensure optimal airflow from your air conditioning system in each room as needed.",
      icon: "wind",
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "Customer Feedback",
      description:
        "Our team provides essential feedback on your air conditioning health and any necessary repair.",
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
          '!Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.',
        ],
      },
    },
    {
      icon: "heart-hand",
      title: "Feeling Of Calm",
      description:
        {
        parts: [
          "With ",
          {
            text: "annual maintenance contract",
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          ", you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.",
        ],
      },
    },
    {
      icon: "calendar-check",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, Arabian Ranches or Dubai. With a 3-4 hour window for when our technician will arrive",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Arabian Ranches. This is why most major brands trust us to handle their service and maintenance needs.",
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
      description:
        {
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
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Projects",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Arabian Ranches.",
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

const brandsData = {
  showCta: false,
  id: "brands-directory",
  title: "We specialise in air conditioning services for the following brands",
  description:
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Arabian Ranches:",
  brands: [
    {
      name: "LG",
      description:
        "Multi V VRF systems, Dual Inverter split units, and ceiling cassettes.",
      href: "/services/air-conditioning-repair/brands/lg/",
    },
    {
      name: "Samsung",
      description:
        "WindFree split systems, DVM S commercial VRF, and digital inverter systems.",
      href: "/services/air-conditioning-repair/brands/samsung/",
    },
    {
      name: "York",
      description:
        "Ducted split systems, package units, air handling units (AHUs), and air-cooled chillers.",
      href: "/services/air-conditioning-repair/brands/york/",
    },
    {
      name: "Daikin",
      description:
        "Inverter split systems, VRV commercial systems, and energy-saving cooling solutions.",
      href: "/services/air-conditioning-repair/brands/daikin/",
    },
    {
      name: "Trane",
      description:
        "Commercial and residential HVAC troubleshooting, air handler repair and thermostat programming.",
      href: "/services/air-conditioning-repair/brands/trane/",
    },
    {
      name: "Panasonic",
      description:
        "Inverter split system repairs, nanoe-G filter maintenance and fan motor replacement.",
      href: "/services/air-conditioning-repair/brands/panasonic/",
    },
    {
      name: "Gree",
      description:
        "Lomo and Crown series servicing, PCB board troubleshooting and refrigerant leak detection.",
      href: "/services/air-conditioning-repair/brands/gree/",
    },
    {
      name: "O General",
      description:
        "Heavy-duty split and window AC maintenance, coil descaling and capacitor replacements.",
      href: "/services/air-conditioning-repair/brands/o-general/",
    },
    {
      name: "Mitsubishi",
      description:
        "Electric & Heavy Industries split, cassette and VRF maintenance with factory fault tracing.",
      href: "/services/air-conditioning-repair/brands/mitsubishi/",
    },
    {
      name: "Carrier",
      description:
        "Central ducted, package and split system maintenance, duct static-pressure balancing.",
      href: "/services/air-conditioning-repair/brands/carrier/",
    },
  ],
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Handle All Types of AC Systems",
  columns: [
    {
      title: "Air Conditioning Systems Serviced Across Arabian Ranches:",
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
          title: "Package Unit AC",
          text:
            "We provide reliable service for Package Unit AC systems used in commercial and industrial setups.",
        },
        {
          title: "Portable AC",
          text:
            "At FAJ Technical Services L.L.C experts quickly repair and service Portable AC units for small spaces and temporary cooling needs.",
        },
        {
          title: "Ducted Split AC",
          text:
            "We install and repair Ducted Split AC systems to keep large homes and commercial properties cool and comfortable.",
        },
        {
          title: "Ceiling AC Units",
          text:
            "Our technicians offer maintenance and repairs for Ceiling AC systems, ensuring quiet and effective cooling.",
        },
        {
          title: "Inverter AC",
          text:
            "We service modern Inverter AC units, helping homeowners and businesses optimize energy use and lower utility bills.",
        },
      ],
    },
  ],
  footnote:
    "All AC repair and maintenance work in Arabian Ranches is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "work-gallery",
  title: "Gallery",
  description:
    "Our field teams in action across Dubai - diagnosing chillers, clearing blocked drain lines, deep-cleaning coils and installing high-efficiency compressors.",
  images: [
    {
      id: "AcService/slide1",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide1/public",
      alt: "Ac Service in Arabian Ranches",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Arabian Ranches",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Arabian Ranches",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Arabian Ranches",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Arabian Ranches",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Arabian Ranches",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Arabian Ranches. Find tips to cut costs and stay cool all summer long!",
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
  id: "testimonials",
  title: "Customer Reviews",
  description:
    "Read genuine reviews from homeowners, landlords and facility managers who rely on FAJ Technical Services L.L.C for their HVAC maintenance.",
  items: [

    {
      name: "Sara Malik",
      role: "Arabian Ranches Resident",
      quote:
        "FAJ provided professional split AC service for our property in Arabian Ranches. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their prompt response.",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      role: "Arabian Ranches Resident",
      quote:
        "I booked FAJ for AC maintenance in Arabian Ranches, and the service was prompt and professional. Excellent attention to detail and clear diagnostics.",
      rating: 5,
    },
    {
      name: "Shazia Sheikh",
      role: "Homeowner, Arabian Ranches",
      quote:
        "Outstanding AC repair service in Arabian Ranches. The technician arrived on time and fixed our cooling issue quickly. Excellent service overall, highly recommended!",
      rating: 5,
    }
  ],
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
      subtitle: "Admin • 5 Comments",
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
      subtitle: "Admin • 4 Comments",
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
      subtitle: "Admin • 0 Comments",
      description:
        "As the temperatures rise and summer approaches, the desire for a cool and comfortable escape within your home intensifies. Air conditioning offers a seemingly simple solu",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read Article",
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
  id: "location-faqs",
  title: "AC Repair and Maintenance FAQs in Arabian Ranches",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Arabian Ranches? Browse our most common answers below:",
  items: [
    {
      question: "Why is my villa's AC not cooling upstairs properly?",
      answer:
        "Warm air upstairs is often caused by restricted airflow, dirty filters, blocked ducts, or incorrect thermostat settings. A professional inspection can identify the exact reason.",
    },
    {
      question: "How often should I clean my AC filters in Arabian Ranches?",
      answer:
        "During heavy summer use, filters should be checked every month and professionally cleaned during regular servicing.",
    },
    {
      question: "Can dirty AC ducts affect indoor air quality?",
      answer:
        "Yes, dust, pollen, and mould inside ducts can reduce indoor air quality and affect the health of people inside the property.",
    },
    {
      question: "Do you repair ducted AC systems in Arabian Ranches?",
      answer:
        "Yes, we repair, clean, and maintain ducted AC systems installed in villas, townhouses, and commercial properties.",
    },
    {
      question: "What causes my AC to leak water?",
      answer:
        "<p><strong>Common causes include:</strong></p><ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty air filters</li><li>Clogged drainage line</li></ul>"    },
    {
      question: "Is yearly AC maintenance enough in Dubai?",
      answer:
        "No, because of Dubai's climate, most AC systems should be serviced every 3–6 months for better performance.",
    },
    {
      question: "Do you provide AC services for villa communities?",
      answer:
        "Yes, our technicians provide AC services for villas, townhouses, residential communities, and commercial properties throughout Arabian Ranches.",
    },
    {
      question: "What is included in a standard AC maintenance visit?",
      answer:
        "<p><strong>Maintenance normally includes:</strong></p><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain cleaning</li><li>Thermostat testing</li><li>Cooling performance check</li></ul>"    },
    {
      question: "Which AC brands do you repair?",
      answer:
        "<p><strong>We service major brands including: </strong></p><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>O General</li><li>Gree</li><li>Panasonic, and many others</li></ul>"    },
    {
      question: "Why does my AC make clicking or buzzing sounds?",
      answer:
        "<p><strong>Possible reasons include:</strong></p><ul><li>Loose components</li><li>Fan motor issues</li><li>Electrical faults</li><li>Worn moving parts</li></ul>"    },
    {
      question: "Can AC servicing help lower electricity bills?",
      answer:
        "Yes, a clean and properly maintained AC uses less power and cools more efficiently.",
    },
    {
      question: "Do you provide emergency AC repair in Arabian Ranches?",
      answer:
        "Yes, depending on technician availability, emergency repair services are available for urgent AC breakdowns.",
    },
    {
      question: "How long does AC servicing normally take?",
      answer:
        "Most maintenance appointments take around one hour, depending on the number and condition of the units.",
    },
    {
      question: "Do your AC services include a warranty?",
      answer:
        "Yes, our AC cleaning and maintenance services include a 60-day service warranty.",
    },
    {
      question: "How do I book an AC service in Arabian Ranches?",
      answer:
        "Simply contact FAJ Technical Services L.L.C with your location and preferred time, and our team will arrange a convenient appointment.",
    }
  ],
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Arabian Ranches.",
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
