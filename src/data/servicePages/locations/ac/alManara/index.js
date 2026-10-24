const seoData = {
  title: "Best AC Repair and AC Maintenance Services in Al Manara, Dubai",
  description:
    "Get fast air conditioning repair and maintenance service in Al Manara, Dubai, & Sharjah. Book an inverter or multi split AC service near your location",
  keywords:
    "AC Service in Al Manara, AC Repair in Al Manara, AC Maintenance in Al Manara, Air Conditioning Service in Al Manara, Air Conditioner Repair in Al Manara, Air Conditioning Maintenance in Al Manara, AC Cleaning in Al Manara, AC Installation in Al Manara, Air Conditioning Installation in Al Manara, AC Service Company in Al Manara, Air Conditioning Service Company in Al Manara, AC Repair Company in Al Manara, Air Conditioning Repair Company in Al Manara, AC Maintenance Company in Al Manara, Air Conditioning Maintenance Company in Al Manara",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-manara/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Repair and AC Maintenance Services in Al Manara, Dubai",
    description:
      "Get fast air conditioning repair and maintenance service in Al Manara, Dubai, & Sharjah. Book an inverter or multi split AC service near your location",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-manara/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair and AC Maintenance Services in Al Manara, Dubai",
    description:
      "Get fast air conditioning repair and maintenance service in Al Manara, Dubai, & Sharjah. Book an inverter or multi split AC service near your location",
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

const heroData = {  title: "Expert Affordable AC Repair and Maintenance in Al Manara | AC Service Near Me",
  paragraph:
    "Al Manara is a nice place to live. It has big houses, homes for families, schools and shops nearby. People use air conditioners a lot in Al Manara because it is very hot in Dubai. So it is a good idea to check the air conditioners often. If you do not do this the rooms will not be cool and comfortable. If an air conditioner stops working it can be a problem. This is especially true in Dubai when it is hot outside.",
  paragraphs: [
    "Al Manara is a nice place to live. It has big houses, homes for families, schools and shops nearby. People use air conditioners a lot in Al Manara because it is very hot in Dubai. So it is a good idea to check the air conditioners often. If you do not do this the rooms will not be cool and comfortable. If an air conditioner stops working it can be a problem. This is especially true in Dubai when it is hot outside.",
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
      description: "Fast assistance across Al Manara.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Expert Affordable AC Repair and Maintenance in Al Manara | AC Service Near Me",
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
    "FAJ Technical Services L.L.C has been helping people in Dubai with their air conditioning services since 2010. They do things like fix air conditioners, AC maintenance, keep them working well, clean them, and put in new ones. Our experienced technicians serve homeowners and businesses throughout Al Manara with reliable workmanship and fast response whenever cooling problems occur.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best AC repair services in Al Manara?",
  paragraphs: [
    "Finding a trusted AC company is important when cooling problems affect your daily comfort. FAJ Technical Services L.L.C provides complete air conditioning services for villas, family homes, offices, retail shops and commercial properties across Al Manara.",
    "Our technicians carefully inspect every cooling system, explain the problem clearly and recommend practical solutions that improve performance while helping prevent future breakdowns.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Al Manara?",
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
  id: "pricing",  title: "Fair, Upfront AC Service Pricing in Al Manara",
  description:
    "Standard pricing with no hidden charges. Every service includes a full inspection, transparent diagnosis, and a workmanship warranty.",
  cards: [
    {
      id: "inspection",
      title: "AC Diagnostic & Inspection",
      popular: false,
      price: "AED 150 - 250",
      cadence: "per system",
      description:
        "Comprehensive diagnosis for strange noises, weak cooling, water leaks, electrical faults, or foul odours.",
      features: [
        "Refrigerant pressure & gas level check",
        "Electrical wiring, capacitor & relay test",
        "Thermostat calibration & sensor check",
        "Drain tray & discharge pipe inspection",
        "Diagnostic fee fully waived if repair approved",
      ],
      image: {
        id: "ac-service-page/ac-inspection",
        src: "/img/ac-service-page/ac-inspection.webp",
        alt: "AC Diagnostic & Inspection in Al Manara",
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
      id: "deep-cleaning",
      title: "Complete AC Deep Cleaning",
      popular: true,
      price: "AED 200 - 350",
      cadence: "per unit",
      badge: "Most Popular",
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
        alt: "AC Cleaning Service in Al Manara",
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
        alt: "AC Maintenance in Al Manara",
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
    "Protect your Al Manara property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Manara.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Manara with priority response.",
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
    "An air conditioner may continue running while struggling to cool the room properly. Several parts inside the system can affect cooling performance.",
  causes: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Restricted airflow"
  ],
  conclusion:
    "A complete inspection helps identify the actual cause and prevents unnecessary damage to the system.",
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
    "Many air conditioners show small warning signs before a major problem develops.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Weak cooling performance" },
    { title: "Poor airflow from vents" },
    { title: "Water leaking from the unit" },
    { title: "Strange noises during operation" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Manara",
  description:
    "Unexpected AC failures can happen at any time, especially during the hottest months. Our emergency technicians respond quickly to restore cooling and prevent further damage. Our emergency service covers: AC not cooling, AC not turning on, Water leakage, Electrical faults, Thermostat issues, Compressor failures, Weak airflow, and Unusual noises. We provide fast assistance for residential and commercial customers throughout Al Manara and nearby areas.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Manara",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Manara",
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
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Manara?",
  paragraphs: [
    "Routine maintenance can ensure your chiller unit is functioning well throughout the year and prevents unexpected failures.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Manara?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Manara",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather",
      description: "The high temperatures in Dubai make AC systems work harder every day. Regular maintenance ensures consistent cooling performance."
    },
    {
      icon: "coins",
      title: "Energy Efficiency",
      description: "A clean and well-maintained air conditioner consumes less power and works more effectively in terms of cooling."
    },
    {
      icon: "clock-fast",
      title: "Longevity of Equipment",
      description: "By keeping your AC serviced regularly, wear on its major parts is minimized, and the unit's lifespan is extended."
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description: "Cleaning removes dust, bacteria and other particles that affect indoor air quality."
    },
    {
      icon: "heart-hand",
      title: "Enhanced Comfort",
      description: "Well-maintained systems provide balanced airflow and comfortable temperatures throughout the property."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-ac-problems",  title: "Most Common AC Problems",
  description:
    "Our certified technicians in Al Manara quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "Dirty filters or blocked airflow reduce cooling and make the system work harder than normal.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description: "Warm air often indicates refrigerant loss, compressor problems or thermostat faults.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "Buzzing, grinding or rattling sounds usually indicate loose or worn internal components.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description: "Bad smells often develop because of mould, moisture or dirt inside the AC system.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description: "Frequent starting and stopping may indicate thermostat or electrical problems.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description: "Poor moisture removal leaves indoor rooms feeling humid even while the AC is operating.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description: "Blocked drain lines or frozen evaporator coils commonly cause water leakage.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description: "An inefficient AC consumes more electricity, leading to higher monthly utility costs.",
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
  title: "Professional Air Conditioning Services in Al Manara",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We repair cooling faults, compressor failures, electrical problems, thermostat issues and water leaks to restore proper cooling safely and efficiently."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "Our professional cleaning removes dust, mould and dirt from filters, coils and drainage systems to improve airflow and maintain healthier indoor air."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular maintenance keeps important components in good condition, helping your AC perform efficiently throughout the year."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install residential and commercial AC systems in line with the manufacturer's guidelines for their safe operation and reliable cooling efficiency."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plan covers scheduled servicing, preventive maintenance and priority support to minimise unforeseen repairs and ensure trouble-free cooling."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Professional Air Conditioning Services in Al Manara",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We repair cooling faults, compressor failures, electrical problems, thermostat issues and water leaks to restore proper cooling safely and efficiently."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "Our professional cleaning removes dust, mould and dirt from filters, coils and drainage systems to improve airflow and maintain healthier indoor air."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular maintenance keeps important components in good condition, helping your AC perform efficiently throughout the year."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install residential and commercial AC systems in line with the manufacturer's guidelines for their safe operation and reliable cooling efficiency."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plan covers scheduled servicing, preventive maintenance and priority support to minimise unforeseen repairs and ensure trouble-free cooling."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Manara",
  city: "Al Manara",
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
        "Consistent temperatures and reliable cooling during peak Al Manara summer heat.",
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
      icon: "fast-reliable",
      title: "Reliable, Priority, and Quick",
      description:
        "You can count on efficient service! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.",
    },
    {
      icon: "experts",
      title: "Feeling Of Calm",
      description:
        "With an AC annual maintenance contract, you can relax knowing that your AC unit is in good hands and well taken care of.",
    },
    {
      icon: "satisfaction",
      title: "We Are Experts",
      description:
        "Our team has high-level skills to identify and fix any issue, providing reliable AC repair and maintenance you can trust.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const beforeAfterData = {
  id: "before-after-slider",  title: "Visual Evidence of Our Workmanship",
  description:
    "Slide to inspect the condition of cooling equipment before and after our precision service.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Manara:",
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
      title: "Air Conditioning Systems Serviced Across Al Manara:",
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
    "All AC repair and maintenance work in Al Manara is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Manara",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Manara",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Manara",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Manara",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Manara",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Manara",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Manara. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Manara Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Manara",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Manara",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Manara",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Manara? Browse our most common answers below:",
  items: [
    {
      title: "How often should I service my AC in Al Manara?",
      desc: "Most AC systems should be professionally serviced every 3 to 6 months depending on usage.."
    },
    {
      title: "Why is my villa AC cooling some rooms but not others?",
      desc: "<ul><li>Blocked ducts</li><li>Dirty filters</li><li>Airflow imbalance</li></ul>These are the most common reasons for weak airflow of your AC unit."
    },
    {
      title: "Do you provide AC services for villas in Al Manara?",
      desc: "Yes, FAJ Technical Services L.L.C provides service for villas, townhouses, apartments, offices and commercial properties."
    },
    {
      title: "Can I book AC service during weekends?",
      desc: "Yes, weekend appointments may be available depending on technician schedules."
    },
    {
      title: "What causes an AC to trip the electrical breaker?",
      desc: "<strong>There are some common causes of an air conditioner tripping again and again.</strong><ul><li>Electrical faults</li><li>Overloaded circuits</li><li>Damaged component</li></ul>"
    },
    {
      title: "Does AC cleaning improve indoor air quality?",
      desc: "Yes, by removing dust, mould and bacteria, you can create cleaner and healthier indoor air."
    },
    {
      title: "Which AC brands do you repair?",
      desc: "<strong>We repair all of the major brands across the UAE.</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>Mitsubishi</li><li>O General</li><li>Panasonic</li><li>Gree and many other leading brands.</li></ul>"
    },
    {
      title: "Is an AMC worth having?",
      desc: "Yes, regular scheduled maintenance reduces breakdowns and helps your system last longer."
    },
    {
      title: "Why is my AC making clicking sounds?",
      desc: "Loose electrical parts, relays or worn components often create clicking noises."
    },
    {
      title: "How long does AC maintenance usually take?",
      desc: "Most maintenance visits take around one hour depending on the system condition."
    },
    {
      title: "Can regular servicing lower electricity bills?",
      desc: "Yes, a clean and efficient AC uses less electricity while cooling more effectively."
    },
    {
      title: "Do you install new AC systems?",
      desc: "Yes, we install residential and commercial air conditioning systems in Dubai and the UAE near you."
    },
    {
      title: "Do your services include warranty?",
      desc: "Yes, our AC cleaning and maintenance services include a 60-day service warranty."
    },
    {
      title: "What should I do if my AC starts leaking water?",
      desc: "Switch the unit off and arrange a professional inspection before further water damage occurs."
    },
    {
      title: "How can I schedule an AC service?",
      desc: "Simply contact FAJ Technical Services L.L.C with your preferred date and location, and our team will arrange a convenient appointment."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Manara.",
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
