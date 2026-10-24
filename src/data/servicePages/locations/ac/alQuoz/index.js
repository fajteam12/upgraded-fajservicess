const seoData = {
  title: "Best AC Repair and AC Maintenance Servicing in Al Quoz, Dubai",
  description:
    "Looking for AC repair in Al Quoz? Call 04-3300002 for central & ceiling air conditioning maintenance, and ducted split AC cleaning service near me Dubai",
  keywords:
    "AC Services in Al Quoz, AC Repair in Al Quoz, AC Maintenance in Al Quoz, Air Conditioner Service in Al Quoz, Split AC Service in Al Quoz, Central AC Service in Al Quoz, HVAC Service in Al Quoz",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-quoz/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Repair and AC Maintenance Servicing in Al Quoz, Dubai",
    description:
      "Looking for AC repair in Al Quoz? Call 04-3300002 for central & ceiling air conditioning maintenance, and ducted split AC cleaning service near me Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-quoz/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair and AC Maintenance Servicing in Al Quoz, Dubai",
    description:
      "Looking for AC repair in Al Quoz? Call 04-3300002 for central & ceiling air conditioning maintenance, and ducted split AC cleaning service near me Dubai",
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

const heroData = {  title: "Trusted and best AC Repair and Maintenance Services in Al Quoz | AC Service Near Me",
  paragraph:
    "Al Quoz is a place in Dubai with a lot of homes, offices, factories and stores. The air conditioners in Al Quoz run all day to keep people cool. When an air conditioner breaks down, it is a problem. It can stop people from working. Make them feel uncomfortable. AC Repair and Maintenance Services are very important in Al Quoz. You can find an AC Service Near Me in Al Quoz to fix your air conditioner.",
  paragraphs: [
    "Al Quoz is a place in Dubai with a lot of homes, offices, factories and stores. The air conditioners in Al Quoz run all day to keep people cool. When an air conditioner breaks down, it is a problem. It can stop people from working. Make them feel uncomfortable. AC Repair and Maintenance Services are very important in Al Quoz. You can find an AC Service Near Me in Al Quoz to fix your air conditioner.",
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
      description: "Fast assistance across Al Quoz.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Trusted and best AC Repair and Maintenance Services in Al Quoz | AC Service Near Me",
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
    "FAJ Technical Services L.L.C has been providing AC solutions across Dubai since 2010. We offer AC repair, cleaning, maintenance, and installation services for residential and commercial properties throughout Al Quoz. Our team understands the cooling needs of this area and provides reliable support for all types of AC systems.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the AC repair services in Al Quoz?",
  paragraphs: [
    "When your AC stops working the way it should, you need someone you can trust to fix it fast. FAJ Technical Services L.L.C is a company that offers air conditioner repair and AC maintenance services for apartments, offices, warehouses, retail shops and commercial buildings in Al Quoz.",
    "Our technicians are trained to figure out what is wrong with your AC, like cooling problems, gas leaks and system failures. We want to make sure we fix your air conditioner right the first time, so we work hard to find a solution that really works.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the AC repair services in Al Quoz?",
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
  id: "transparent-pricing",  title: "Air Conditioning Service and Repair Cost in Al Quoz Dubai",
  description:
    "We provide transparent, competitive pricing for all residential and commercial HVAC services across Al Quoz. Check our standard rates below:",
  cards: [
    {
      id: "inspection",
      title: "AC Inspection / Callout",
      popular: false,
      price: "AED 150 - 250",
      cadence: "per unit",
      description:
        "Comprehensive diagnostic inspection to isolate mechanical, electrical, and cooling faults with upfront reporting.",
      features: [
        "Full system diagnostic check",
        "Refrigerant pressure measurement",
        "Electrical component testing",
        "Airflow & thermostat verification",
        "Written quote before repair begins",
      ],
      image: {
        id: "ac-service-page/ac-inspection",
        src: "/img/ac-service-page/ac-inspection.webp",
        alt: "AC Inspection in Al Quoz",
        width: 400,
        height: 250,
      },
      cta: {
        label: "Book Inspection",
        variant: "outline",
        action: "booking",
      },
    },
    {
      id: "cleaning",
      title: "Standard AC Deep Cleaning",
      popular: true,
      price: "AED 250 - 450",
      cadence: "per unit",
      description:
        "Pressure wash of coils, chemical sanitisation, filter clean and drain line clearing to restore cooling and fresh air.",
      features: [
        "Indoor filter & grill pressure wash",
        "Evaporator & condenser coil cleaning",
        "Condensate drain line flush & clear",
        "Mould, fungus & bacteria sanitisation",
        "Operating temperature & CFM test",
      ],
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp",
        alt: "AC Cleaning Service in Al Quoz",
        width: 400,
        height: 250,
      },
      cta: {
        label: "Book Cleaning",
        variant: "primary",
        action: "booking",
      },
    },
    {
      id: "maintenance",
      title: "Comprehensive AC Maintenance",
      popular: false,
      price: "AED 350 - 650",
      cadence: "per system",
      description:
        "Thorough mechanical, electrical, and refrigerant tune-up to keep your AC operating at factory efficiency.",
      features: [
        "Full electrical & capacitor inspection",
        "Fan motor lubrications & bearing check",
        "Refrigerant top-up (up to standard limits)",
        "Thermostat calibration & cycling test",
        "60-day service warranty on repairs",
      ],
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp",
        alt: "AC Maintenance in Al Quoz",
        width: 400,
        height: 250,
      },
      cta: {
        label: "Schedule Maintenance",
        variant: "outline",
        action: "booking",
      },
    },
  ],
  footnote:
    "* Final pricing depends on unit type (Split, Central, Ducted, Package, Chiller), capacity, accessibility, and spare parts required. All repairs are backed by our warranty.",
};

const contractsData = {
  id: "amc-packages",  title: "Air Conditioning Maintenance Contracts",
  description:
    "Protect your Al Quoz property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Quoz.",
      features: [
        "2 Scheduled routine service visits per year",
        "Filter cleaning and drain clearing",
        "Basic electrical & cooling checks",
        "Emergency callouts at discounted rates",
        "Standard response time within 24 hours",
      ],
      cta: {
        label: "Choose Standard",
        variant: "outline",
        action: "booking",
      },
    },
    {
      id: "comprehensive",
      name: "Comprehensive AMC",
      price: "AED 2,400",
      cadence: "year",
      popular: true,
      description:
        "Complete peace of mind for villas, luxury residences, and offices in Al Quoz with priority response.",
      features: [
        "4 Comprehensive seasonal visits per year",
        "Complete coil chemical wash & drain flushing",
        "Refrigerant leak detection & top-up checks",
        "Priority same-day emergency dispatch",
        "Zero labour charge on minor part repairs",
        "60-day guarantee on all replacement parts",
      ],
      cta: {
        label: "Get Comprehensive",
        variant: "primary",
        action: "booking",
      },
    },
    {
      id: "premium",
      name: "Commercial & Villa Premium",
      price: "Custom",
      cadence: "quote",
      description:
        "Tailored enterprise-level HVAC maintenance for large villas, schools, hotels, and commercial buildings.",
      features: [
        "Monthly or bi-monthly custom inspections",
        "Full chiller, FCU & package unit coverage",
        "Dedicated account manager & fast dispatch",
        "Detailed asset health & energy reports",
        "24/7 round-the-clock emergency standby",
      ],
      cta: {
        label: "Request Custom Quote",
        variant: "outline",
        action: "booking",
      },
    },
  ],
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",  title: "Why Is My AC Not Cooling?",
  paragraph:
    "Sometimes your AC keeps running but the room never feels cool enough. This is frustrating and can happen for several reasons.",
  causes: [
    "Dirty air filters blocking airflow",
    "Low refrigerant gas levels",
    "Condenser coils covered in dust",
    "Thermostat not working correctly",
    "Compressor problems",
    "Electrical faults",
    "Blocked air passages"
  ],
  conclusion:
    "A professional inspection helps identify the exact cause and resolve it before further issues occur.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "Why Is My AC Not Cooling?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonSignsData = {
  id: "ac-maintenance-signs",  title: "Which signs show the AC needs service?",
  intro:
    "Most air conditioner units give warning signs before they stop working. Catching these signs early can help you avoid repairs and discomfort.",
  items: [
    { title: "Electricity bills going up" },
    { title: "Weak airflow from the vents" },
    { title: "Room taking too long to cool" },
    { title: "Water dripping from the unit" },
    { title: "Strange sounds while running" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Quoz",
  description:
    "Unexpected AC breakdowns can halt business and make indoor spaces unbearable. FAJ Technical Services L.L.C offers rapid-response emergency AC repair across Al Quoz. Our certified technicians troubleshoot cooling failure, electrical trips, water leaks, and compressor faults with immediate on-site solutions.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Quoz",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Quoz",
    width: 600,
    height: 400,
  },
  variant: "framed",
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Quoz?",
  paragraphs: [
    "Al Quoz blends commercial, art, residential, and industrial facilities with intense air conditioning demands. Routine maintenance ensures peak performance and prevents disruptions.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Quoz?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceCardsData = {
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Quoz",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Harsh Operating Conditions",
      description: "Dust and high heat in industrial and commercial zones accelerate wear on coils and fan assemblies."
    },
    {
      icon: "coins",
      title: "Lower Utility Expenses",
      description: "Routine maintenance ensures cooling equipment runs at peak efficiency, avoiding excessive power drain."
    },
    {
      icon: "clock-fast",
      title: "Equipment Life Extension",
      description: "Taking care of key components protects expensive compressors and motors from premature burnout."
    },
    {
      icon: "wind",
      title: "Clean Indoor Environment",
      description: "Regular sanitisation purges pollutants, keeping indoor air crisp, clean, and healthy for workers and families."
    },
    {
      icon: "heart-hand",
      title: "Consistent Performance",
      description: "Balanced temperature regulation keeps retail spaces, studios, warehouses, and homes consistently comfortable."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-ac-problems",  title: "Most Common Air Conditioner Problems",
  description:
    "Our certified technicians in Al Quoz quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "Dust-clogged filters and blocked vents restrict circulation, leading to hot spots across the room.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air Output",
      description: "Refrigerant leaks or compressor overload result in the unit blowing ambient air instead of chilled air.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Grinding & Rattling",
      description: "Vibrating panels, worn motor belts, or bearing failure cause audible mechanical noises.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Musty Odours",
      description: "Accumulated mould and bacterial growth in evaporator coils produce sour smells whenever the fan kicks on.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent On/Off Cycling",
      description: "Thermostat faults or overheating capacitors force the AC to cycle rapidly without cooling.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "Excessive Room Humidity",
      description: "A struggling air conditioner cannot dehumidify, leaving indoor spaces feeling muggy and sticky.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Water Spillage",
      description: "Backed-up condensation trays and blocked drainage hoses cause water to pool beneath indoor units.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "High Monthly DEWA",
      description: "Dirty condenser fins make the unit work double time, creating unexpected spikes in monthly energy bills.",
      icon: "arrow-up-right"
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedData = {
  id: "services-offered",
  title: "Professional Air Conditioning Services in Al Quoz",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Fast diagnostic and repair services for cooling loss, electrical faults, compressor malfunctions, and refrigerant leaks."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "Thorough chemical washing and sanitisation of coils, filters, and ducts to eliminate dust, mould, and bacteria."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Scheduled seasonal servicing to keep industrial and residential cooling units running smoothly and efficiently."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "Expert installation of split, central, ducted, and package AC units following high engineering standards."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Affordable AMC contracts with preventive visits, discount parts, and priority 24/7 emergency dispatch."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Professional Air Conditioning Services in Al Quoz",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Fast diagnostic and repair services for cooling loss, electrical faults, compressor malfunctions, and refrigerant leaks."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "Thorough chemical washing and sanitisation of coils, filters, and ducts to eliminate dust, mould, and bacteria."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Scheduled seasonal servicing to keep industrial and residential cooling units running smoothly and efficiently."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "Expert installation of split, central, ducted, and package AC units following high engineering standards."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Affordable AMC contracts with preventive visits, discount parts, and priority 24/7 emergency dispatch."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Quoz",
  city: "Al Quoz",
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
        "Consistent temperatures and reliable cooling during peak Al Quoz summer heat.",
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
  id: "why-choose-us",  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
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
      description:
        "You can count on efficient service ! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.",
    },
    {
      icon: "heart-hand",
      title: "Feeling Of Calm",
      description:
        "With annual maintenance contract , you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.",
    },
    {
      icon: "calendar-check",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, Al Quoz Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Quoz. This is why most major brands trust us to handle their service and maintenance needs.",
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
        "Our skilled AC technicians are highly trained, and we provide excellent service for a variety of major AC brands efficiently.",
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",  title: "Recent Completed Projects",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Quoz.",
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
  id: "brands-directory",  title: "We specialise in air conditioning services for the following brands",
  description:
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Quoz:",
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
      title: "Air Conditioning Systems Serviced Across Al Quoz:",
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
    "All AC repair and maintenance work in Al Quoz is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "work-gallery",  title: "Gallery",
  description:
    "Our field teams in action across Dubai - diagnosing chillers, clearing blocked drain lines, deep-cleaning coils and installing high-efficiency compressors.",
  images: [
    {
      id: "AcService/slide1",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide1/public",
      alt: "Ac Service in Al Quoz",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Quoz",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Quoz",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Quoz",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Quoz",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Quoz",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Quoz. Find tips to cut costs and stay cool all summer long!",
  cta: {
    label: "Click Here to Save on Energy Bills",
    href: "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
    download: true,
  },
};

const repairPriceData = {
  id: "pricing-overview",  title:
    "Explore Our Complete AC Repair & Maintenance Pricing Guide Across Dubai",
  description:
    "Transparent pricing with no hidden fees. Download our full service price list or book online for immediate dispatch.",
  cta: {
    label: "View Full AC Price Guide",
    href: "/services/air-conditioning-repair/ac-repair-charges/",
  },
};

const testimonialsData = {
  id: "testimonials",  title: "Customer Reviews",
  description:
    "Read genuine reviews from homeowners, landlords and facility managers who rely on FAJ Technical Services L.L.C for their HVAC maintenance.",
  items: [
    {
      name: "Tariq Mansoor",
      role: "Al Quoz Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Quoz",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Quoz",
      quote:
        "Very professional duct cleaning and coil descaling. The air feels crisp and smells fresh. Electricity bills dropped by nearly 15% after the service.",
      rating: 5,
    },
  ],
};

const newsData = {
  id: "news-updates",  title: "NEWS & UPDATES",
  description:
    "Expert tips, seasonal maintenance advice, and industry news from our technical HVAC team in Dubai.",
  cards: [
    {
      title: "Signs Your AC Compressor is Failing",
      category: "AC Maintenance",
      date: "May 2026",
      snippet:
        "Learn the early warning signs of compressor wear - from warm airflow to unusual rattling - before a complete breakdown occurs.",
      href: "/blog/",
    },
    {
      title: "How Regular AC Cleaning Lowers DEWA Bills",
      category: "Energy Efficiency",
      date: "April 2026",
      snippet:
        "Clogged filters and dirty evaporator coils force your system to draw significantly more amps. Discover simple ways to save.",
      href: "/blog/",
    },
    {
      title: "Choosing Between Split vs Central AC in Dubai",
      category: "HVAC Buying Guide",
      date: "March 2026",
      snippet:
        "A practical comparison of installation costs, ducting requirements, and energy efficiency ratings for Dubai residences.",
      href: "/blog/",
    },
  ],
};

const faqsData = {
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Quoz",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Quoz? Browse our most common answers below:",
  items: [
    {
      title: "What is the price of AC repair in Al Quoz?",
      desc: "The cost will be determined based on the type of AC, the problem and the need for replacement parts. An inspection can help identify the real problem and give an accurate estimate."
    },
    {
      title: "How often should I service my AC in Al Quoz?",
      desc: "It is recommended that most air conditioning systems get serviced twice a year, in the spring and fall. Regular servicing keeps your AC running efficiently and helps avoid unexpected breakdowns."
    },
    {
      title: "Why isn't my air conditioner cooling my home?",
      desc: "This may occur due to dirty filters, low gas, clogged coils, thermostat failure or compressor failure. A professional inspection will determine the cause."
    },
    {
      title: "Are you offering AC services to factories and warehouses at Al Quoz?",
      desc: "Yes, we do provide AC repair, cleaning and maintenance services for warehouses, factories, offices & commercial properties in Al Quoz."
    },
    {
      title: "What is causing water leakage from the AC?",
      desc: "Most often, it is caused by drainage issues, dirty filters, or blocked drain pipes or frozen coils. Repairing the leak promptly will avoid damage to the property."
    },
    {
      title: "Can AC cleaning improve cooling performance?",
      desc: "Yes. Cleaning filters and coils lets more air circulate through the system and makes the AC cooler."
    },
    {
      title: "Are you offering same-day AC Repair in Al Quoz?",
      desc: "It may be possible to get same-day service depending on the issue and availability of the technicians. Contact our team to check availability."
    },
    {
      title: "What is your preferred brand of air conditioner?",
      desc: "<strong>We service the top brands such as:</strong><ul><li>Daikin</li><li>Samsung</li><li>O General</li><li>Mitsubishi</li><li>Carrier</li><li>York</li><li>Trane</li><li>Gree</li><li>LG</li><li>Panasonic and others.</li></ul>"
    },
    {
      title: "What is included in the AC maintenance service?",
      desc: "<strong>Typical maintenance tasks are </strong><ul><li>Cleaning the filter</li><li>Inspecting the coils</li><li>Checking drain lines</li><li>Testing thermostats</li><li>Assessing cooling performance</li><li>Checking electricity</li></ul>"
    },
    {
      title: "Do annual maintenance contracts make sense for Air Conditioners?",
      desc: "Yes, regular servicing with AMC helps prevent big issues, makes things more efficient and avoid costly repairs."
    },
    {
      title: "What reasons determine why my AC is making weird noises?",
      desc: "Typical causes are loose internal parts, fan motor issues, dust accumulation, or wear. A technician will be able to determine the cause exactly."
    },
    {
      title: "What is the time frame required for an AC maintenance?",
      desc: "A typical maintenance visit is 1 hour in length. The time is dependent on the type of AC, the quantity of units, and the type of system."
    },
    {
      title: "Does regular AC servicing lower electric bills?",
      desc: "Yes, when the AC system is well-maintained, it is more efficient and uses less energy, which can reduce your monthly electricity expenses."
    },
    {
      title: "Should I replace or repair my old AC?",
      desc: "If your AC keeps breaking down or has poor efficiency, replacement might be a better option. A technician can run the test and give you recommendations."
    },
    {
      title: "What is the best way to get an AC service in Al Quoz?",
      desc: "You can contact FAJ Technical Services L.L.C with your location and preferred timing. Our staff will set up an appropriate service appointment."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Quoz.",
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
