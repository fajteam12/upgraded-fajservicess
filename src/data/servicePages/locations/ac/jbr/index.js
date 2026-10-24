const seoData = {
  title: "Top AC Repair and Cleaning Service in JBR, Dubai | Fix FCU AC",
  description:
    "Get top-notch AC repair and cleaning service in JBR, Dubai. We offer the best maintenance for chiller fan coil unit FCU air conditioner with part warranty",
  keywords:
    "ac services in jbr, AC repair in jbr, AC maintenance in jbr, air conditioning services in jbr, air conditioner repair in jbr, aircon service in jbr, chilled water fcus repair in jbr, chilled water fcus maintenance in jbr, chilled water fcus service in jbr",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jbr/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Top AC Repair and Cleaning Service in JBR, Dubai | Fix FCU AC",
    description:
      "Get top-notch AC repair and cleaning service in JBR, Dubai. We offer the best maintenance for chiller fan coil unit FCU air conditioner with part warranty",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jbr/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AC Repair and Cleaning Service in JBR, Dubai | Fix FCU AC",
    description:
      "Get top-notch AC repair and cleaning service in JBR, Dubai. We offer the best maintenance for chiller fan coil unit FCU air conditioner with part warranty",
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
  title: "Professional AC Repair and Maintenance Services in JBR | Best AC Service Near Me",
  paragraph:
    "Jumeirah Beach Residence (JBR) is a highly sought-after waterfront community in Dubai. Residential high-rises, hotel buildings, retail shops, restaurants, and cafes line the streets of the area. People live, work, and visit here all year round. Due to the high heat and humidity in Dubai, the air conditioners operate for extended periods each day at JBR. A faulty air conditioning system can create a very uncomfortable and unproductive environment for occupants of the home or business.",
  paragraphs: [
    "Jumeirah Beach Residence (JBR) is a highly sought-after waterfront community in Dubai. Residential high-rises, hotel buildings, retail shops, restaurants, and cafes line the streets of the area. People live, work, and visit here all year round. Due to the high heat and humidity in Dubai, the air conditioners operate for extended periods each day at JBR. A faulty air conditioning system can create a very uncomfortable and unproductive environment for occupants of the home or business.",
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
      description: "Fast assistance across JBR.",
    },
  ],
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Professional AC Repair and Maintenance Services in JBR | Best AC Service Near Me",
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
        "Since 2010, ",
        {
          text: "FAJ Technical Services L.L.C",
          href: "/",
        },
        " has been offering AC services throughout Dubai. We offer ",
        {
          text: "AC repair",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        ", AC cleaning, AC maintenance, and AC installation services for residential and commercial properties throughout JBR. Our team understands the cooling needs of this coastal community and provides reliable support for all types of AC systems.",
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
  title: "Who provides the best AC repair services in JBR?",
  paragraphs: [
    "When your AC stops working in JBR, you need someone who can fix it fast. FAJ Technical Services L.L.C provides Apartment AC repair and maintenance services in JBR along with services for hotels, restaurants, retail shops and commercial buildings.",
    "Our technicians are able to detect cooling issues, electrical problems, gas leaks as well as system failures. Our services include solutions that work and we make sure you know every step of the way through the repair.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in JBR?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in JBR.",
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
    "Sometimes your AC keeps running but the room never gets cool enough. This is annoying and can happen for several reasons.",
  listTitle: "Common causes include:",
  checklist: [
    "Dirty air filters blocking airflow",
    "Low refrigerant gas levels",
    "Condenser coils covered in dust",
    "Thermostat not working correctly",
    "Compressor problems",
    "Electrical faults",
    "Blocked air passages",
  ],
  conclusion:
    "A complete inspection is the best way to find out what is wrong. Our technicians check everything and fix the actual problem.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ AC technician troubleshooting cooling problems in JBR",
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
    "Most AC units will provide some sort of warning before they fail. Early recognition of these signs can save you from the discomfort and expensive repairs that can follow.",
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

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in JBR",
  lead: {
    parts: [
      "AC problems can happen at any time. When the weather is hot and your AC stops working, you need help fast. At ",
      { text: "FAJ Technical Services L.L.C", href: "/" },
      ", our quick repair restores comfort and prevents further damage to your system.",
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
    "Our team provides fast support for homes, hotels, restaurants, and commercial properties across JBR.",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in JBR",
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
  title: "Why is AC Maintenance Service Important in JBR?",
  paragraphs: [
    "JBR sits right on the coast. The salty sea air and high humidity put extra strain on air conditioners. The AC units here run for long hours because of Dubai's climate. Regular maintenance helps improve performance and prevents sudden cooling failures.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in JBR?",
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
        "Dubai has a hot summer, and your air conditioner has to work hard. Salinity and moisture also occur in the coastal environment. Regular servicing can make sure that your system cools off when the heat is on.",
    },
    {
      icon: "coins",
      title: "Cleanliness and Maintenance",
      description:
        "A properly maintained, clean AC system performs better. It consumes less electricity and this reduces your electricity bills.",
    },
    {
      icon: "clock-fast",
      title: "Longevity of Equipment",
      description:
        "Scheduling services eliminates unnecessary stress on key AC parts. This will avoid damage, particularly in the early years of a system, and will prolong its lifetime.",
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description:
        "Cleaning filters, coils and other components eliminates dust and particles. This will help to keep the indoor air fresher and healthier.",
    },
    {
      icon: "heart-hand",
      title: "Better Airflow",
      description:
        "A well-maintained AC provides a consistent airflow and even temperatures throughout your home. This results in better comfort in each room.",
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
    "We provide fast diagnosis and professional repair for all major air conditioning faults across JBR:",
  columns: "four",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description:
        "If air from your air conditioning unit is not blowing as strongly as it should, it is typically due to dirty filters or a blocked vent. Cleaning and inspection are restorative to normal airflow.",
      icon: "wind",
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description:
        "If your air conditioner is not blowing cold air, there may be low refrigerant or compressor failure. Thermostat issues are also caused by warm air. A technician can determine the exact cause.",
      icon: "snowflake-slash",
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description:
        "Grinding, buzzing or rattling sounds are signs that something is loose or worn out inside the AC. The problems are to be examined by a professional before they grow worse.",
      icon: "volume-2",
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description:
        "Typical signs of mould, moisture or dirt within the system are musty or foul odors from the vents. Deep cleaning will eliminate the source of the smell and help to clear the air quality.",
      icon: "alert-triangle",
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description:
        "Short cycling occurs when your AC is turning on and off within a few minutes. These typically occur due to thermostat issues, electrical issues, or airflow blockages.",
      icon: "zap-off",
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description:
        "If the air in your room still feels moist and sticky even after the air conditioner is running, the air conditioner is not working efficiently enough to remove moisture. Professional servicing restores proper dehumidification.",
      icon: "droplet-slash",
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description:
        "Clogged drain pipes or frozen coils are the usual reason for a water leak from the indoor unit. Fixing the leak quickly prevents damage to your property.",
      icon: "droplets",
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description:
        "When the electric bills continue to rise even though you are not using the AC anymore, then it could be working harder than required.",
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
  title: "Professional Air Conditioning Services in JBR",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We fix all types of AC problems including cooling failures, water leaks, compressor faults, and thermostat issues. Our technicians inspect the entire system and restore proper cooling performance.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Our cleaning service removes dust, dirt, mould, and buildup from filters, coils, and drain lines. This improves airflow, supports cleaner indoor air, and helps your AC cool more efficiently.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Regular maintenance keeps all AC components in better condition. We check important parts, find early problems, and help your system run smoothly throughout the year.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We provide professional installation for different AC systems in residential and commercial properties. Our team ensures the correct setup for safe operation and reliable cooling performance.",
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
          " include scheduled visits, regular maintenance, and priority support. These services help reduce unexpected breakdowns and maintain AC efficiency all year round.",
        ],
      },
    },
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Professional Air Conditioning Services in JBR",
  columns: "three",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "We fix all types of AC problems including cooling failures, water leaks, compressor faults, and thermostat issues. Our technicians inspect the entire system and restore proper cooling performance.",
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description:
        "Our cleaning service removes dust, dirt, mould, and buildup from filters, coils, and drain lines. This improves airflow, supports cleaner indoor air, and helps your AC cool more efficiently.",
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description:
        "Regular maintenance keeps all AC components in better condition. We check important parts, find early problems, and help your system run smoothly throughout the year.",
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "We provide professional installation for different AC systems in residential and commercial properties. Our team ensures the correct setup for safe operation and reliable cooling performance.",
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
          " include scheduled visits, regular maintenance, and priority support. These services help reduce unexpected breakdowns and maintain AC efficiency all year round.",
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
  title: "Benefits Of Regular AC Service and Maintenance in JBR",
  city: "JBR",
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
        "Consistent temperatures and reliable cooling during peak JBR summer heat.",
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
      description: {
        parts: [
          'With ',
          {
            text: 'annual maintenance contract',
            href: '/services/air-conditioning-repair/ac-annual-maintenance-contract/',
          },
          ',you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.',
        ],
      },
    },
    {
      icon: "calendar-check",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, JBR or Dubai. With a 3-4 hour window for when our technician will arrive",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in JBR. This is why most major brands trust us to handle their service and maintenance needs.",
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
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Projects",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in JBR.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in JBR:",
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
      title: "Air Conditioning Systems Serviced Across JBR:",
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
    "All AC repair and maintenance work in JBR is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in JBR",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in JBR",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in JBR",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in JBR",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in JBR",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in JBR",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in JBR. Find tips to cut costs and stay cool all summer long!",
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
      role: "JBR Resident",
      quote:
        "FAJ provided professional split AC service for our property in JBR. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their prompt response.",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      role: "JBR Resident",
      quote:
        "I booked FAJ for AC maintenance in JBR, and the service was prompt and professional. Excellent attention to detail and clear diagnostics.",
      rating: 5,
    },
    {
      name: "Shazia Sheikh",
      role: "Homeowner, JBR",
      quote:
        "Outstanding AC repair service in JBR. The technician arrived on time and fixed our cooling issue quickly. Excellent service overall, highly recommended!",
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
  title: "AC Repair and Maintenance FAQs in JBR",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in JBR? Browse our most common answers below:",
  items: [
    {
      question: "What is the price of AC repair in JBR?",
      answer:
        "The price will vary based on the AC type, the issue and parts replacement. An inspection will help to identify the precise problem and offer a straightforward estimate.",
    },
    {
      question: "When should I have my AC serviced in JBR?",
      answer:
        "Most air conditioning units need servicing twice a year. Ongoing maintenance helps your air conditioner perform efficiently and helps prevent sudden breakdowns.",
    },
    {
      question: "Why is my AC not cooling properly?",
      answer:
        "<p><strong>This can happen because of the following reasons:</strong></p><ul><li>Dirty Filters</li><li>Low Gas</li><li>Blocked Coils</li><li>Thermostat Problems</li><li>Compressor Issues</li></ul><p>A professional inspection can identify the exact cause.</p>"    },
    {
      question: "Do you provide AC services for hotels and restaurants in JBR?",
      answer:
        "Yes, we offer AC repair, cleaning, and maintenance services for hotels, restaurants, retail shops, and commercial properties throughout JBR.",
    },
    {
      question: "What causes water leakage from the AC?",
      answer:
        "<p><strong>Common causes include:</strong></p><ul><li>Blocked drain pipes</li><li>Frozen coils</li><li>Dirty filters</li><li>Drainage problems</li></ul><p>Fixing the leak early prevents property damage.</p>"    },
    {
      question: "Can AC cleaning improve cooling performance?",
      answer:
        "Yes, cleaning removes dust and dirt from filters and coils, which improves airflow and helps your AC cool more effectively.",
    },
    {
      question: "Do you offer same-day AC repair in JBR?",
      answer:
        "Yes, at FAJ Technical Services L.L.C offer same-day services but this service may be available depending on the issue and technician availability. Contact our team to check availability.",
    },
    {
      question: "Which AC brands do you repair?",
      answer:
        "<p><strong>We repair major brands including:</strong></p><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>O General</li><li>Mitsubishi</li><li>Carrier</li><li>York</li><li>Trane</li><li>Gree</li><li>Panasonic and Hitachi</li></ul>"    },
    {
      question: "What is included in the AC maintenance service?",
      answer:
        "<p><strong>Maintenance usually includes:</strong></p><ul><li>Filter Cleaning</li><li>Coil Inspection</li><li>Drain Line Checking</li><li>Thermostat Testing</li><li>Cooling Performance Check</li><li>Electrical Inspection</li></ul>"    },
    {
      question: "Is an Annual Maintenance Contract useful for AC systems?",
      answer:
        "Yes, AMC helps prevent major problems, improves system efficiency, and reduces unexpected repair costs through regular servicing.",
    },
    {
      question: "Why does my AC make strange noises?",
      answer:
        "<p><strong>Common reasons include:</strong></p><ul><li>Loose Internal Parts</li><li>Fan Motor Problems</li><li>Dirt Buildup</li><li>Worn Components</li></ul><p>A technician can find the exact cause.</p>"    }
  ],
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across JBR.",
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
