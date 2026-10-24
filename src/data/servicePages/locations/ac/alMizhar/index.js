const seoData = {
  title: "Professional AC Repair & AC Service Near Me in Al Mizhar, Dubai",
  description:
    "Get same-day AC repair and service in Al Mizhar, Dubai. Call now 043300002 for your central air conditioner repairs and fix the AC error near you in Dubai",
  keywords:
    "AC Repair in Al Mizhar, AC Maintenance in Al Mizhar, AC Service in Al Mizhar, Air Conditioner Repair in Al Mizhar, Air Conditioning Service in Al Mizhar",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mizhar/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Professional AC Repair & AC Service Near Me in Al Mizhar, Dubai",
    description:
      "Get same-day AC repair and service in Al Mizhar, Dubai. Call now 043300002 for your central air conditioner repairs and fix the AC error near you in Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mizhar/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional AC Repair & AC Service Near Me in Al Mizhar, Dubai",
    description:
      "Get same-day AC repair and service in Al Mizhar, Dubai. Call now 043300002 for your central air conditioner repairs and fix the AC error near you in Dubai",
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

const heroData = {  title: "Best Affordable AC Repair and Maintenance in Al Mizhar | AC Service Near Me",
  paragraph:
    "Al Mizhar is one of the well-known family villages in Dubai that offers large villas, schools, clinics and local shopping areas. Air conditioners operate nearly every day of the year, so it is important to get regular maintenance to ensure that your indoor environment is cool and comfortable. When the AC suddenly stops functioning or it makes odd noises, it can have a significant impact on your life, particularly during the summer.",
  paragraphs: [
    "Al Mizhar is one of the well-known family villages in Dubai that offers large villas, schools, clinics and local shopping areas. Air conditioners operate nearly every day of the year, so it is important to get regular maintenance to ensure that your indoor environment is cool and comfortable. When the AC suddenly stops functioning or it makes odd noises, it can have a significant impact on your life, particularly during the summer.",
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
      description: "Fast assistance across Al Mizhar.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Best Affordable AC Repair and Maintenance in Al Mizhar | AC Service Near Me",
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
    "Since 2010, FAJ Technical Services L.L.C has been offering professional air conditioner repair, air conditioner maintenance, air conditioner cleaning and air conditioner installation services throughout the Dubai region. Our professional AC technicians provide reliable workmanship, low prices and fast response to the occurrence of cooling problems in houses and commercial properties in Al Mizhar.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best AC repair services in Al Mizhar?",
  paragraphs: [
    "Finding an experienced AC company becomes important when your cooling system stops working properly. FAJ Technical Services L.L.C provides Air conditioner repair, AC servicing, AC installation and preventive maintenance in villas, apartments, offices, schools, clinics and commercial buildings all over Al Mizhar.",
    "Our technicians thoroughly check each unit, discuss the issue and suggest realistic options that will increase cooling efficiency and decrease repair expenses in the future.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Al Mizhar?",
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
  id: "pricing",  title: "Fair, Upfront AC Service Pricing in Al Mizhar",
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
        alt: "AC Diagnostic & Inspection in Al Mizhar",
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
        alt: "AC Cleaning Service in Al Mizhar",
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
        alt: "AC Maintenance in Al Mizhar",
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
    "Protect your Al Mizhar property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Mizhar.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Mizhar with priority response.",
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
    "Sometimes the AC keeps running but the room never gets cool enough. Several different issues can reduce cooling performance.",
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
    "A proper inspection identifies the actual fault so repairs can be completed correctly.",
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
    "Most air conditioners show early warning signs before a complete breakdown.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Weak cooling" },
    { title: "Poor airflow" },
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
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Mizhar",
  description:
    "AC failures can happen without warning, especially during the hottest months. Our emergency technicians respond quickly to restore cooling and minimise further damage. Emergency support includes: AC not cooling, AC not turning on, Water leakage, Electrical faults, Thermostat issues, Compressor failures, Weak airflow, and Strange noises. We provide fast assistance for residential and commercial customers throughout Al Mizhar and nearby areas.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Mizhar",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Mizhar",
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
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Mizhar?",
  paragraphs: [
    "Scheduling regular service helps to ensure the reliability of your cooling system and can help to lower the costs of repairs in the long run.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Mizhar?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Mizhar",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather",
      description: "Dubai has a long and hot summer season which can put strain on AC systems. They are kept in good working order by regular maintenance."
    },
    {
      icon: "coins",
      title: "Energy Efficiency",
      description: "Cleaning your AC can help it cool down faster and can save money on electricity costs."
    },
    {
      icon: "clock-fast",
      title: "Longevity of Equipment",
      description: "When you get your air conditioner serviced regularly, you can help the system last longer and prevent wear on the important components."
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description: "Dust, bacteria and allergens will build up within the cooling system and cleaning will remove them."
    },
    {
      icon: "heart-hand",
      title: "Enhanced Comfort",
      description: "When the AC is maintained properly, it can ensure consistent coolness and airflow throughout your home."
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
    "Our certified technicians in Al Mizhar quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "Closed filters or blocked fans will cause less air to flow in the rooms and they will take longer to cool down.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description: "If warm air is the issue, it may indicate the loss of refrigerant, thermostat issues, or problems with the compressor.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "If there are internal bearings that are worn or loose, they will often make a grinding, buzzing, or rattling noise.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description: "The buildup of bad odors is frequently caused by moisture, mold and bacteria within the air conditioning unit.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description: "If the heater is turned on and off frequently, it is likely that there are thermostat or electrical issues.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description: "Moisture is not being removed efficiently, making the indoor environment damp and uncomfortable.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description: "Clogged drain pipes or frozen coils are usually what causes water leaks from the AC.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description: "An inefficient cooling system can lead to increased electricity consumption, resulting in unnecessary energy costs.",
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
  title: "Professional Air Conditioning Services in Al Mizhar",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Professional AC repair services for homes and businesses. Normal cooling, electrical, compressor failure, thermostat failure and leaking AC units are repaired to restore normal operation quickly."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "The professional cleaning process eliminates dust, bacteria and mould from filters, coils and drainage systems to enhance the cooling process and indoor air quality."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular maintenance ensures all parts are performing as intended and eliminates the chances of a breakdown."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "All residential and commercial air conditioning systems are installed following the manufacturer's guidelines for safe and efficient operation."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "We conduct scheduled inspections, perform servicing on a priority basis and preventive maintenance to ensure that your air conditioner is working all year round."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Professional Air Conditioning Services in Al Mizhar",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Professional AC repair services for homes and businesses. Normal cooling, electrical, compressor failure, thermostat failure and leaking AC units are repaired to restore normal operation quickly."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "The professional cleaning process eliminates dust, bacteria and mould from filters, coils and drainage systems to enhance the cooling process and indoor air quality."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular maintenance ensures all parts are performing as intended and eliminates the chances of a breakdown."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "All residential and commercial air conditioning systems are installed following the manufacturer's guidelines for safe and efficient operation."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "We conduct scheduled inspections, perform servicing on a priority basis and preventive maintenance to ensure that your air conditioner is working all year round."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Mizhar",
  city: "Al Mizhar",
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
        "Consistent temperatures and reliable cooling during peak Al Mizhar summer heat.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Mizhar:",
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
      title: "Air Conditioning Systems Serviced Across Al Mizhar:",
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
    "All AC repair and maintenance work in Al Mizhar is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Mizhar",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Mizhar",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Mizhar",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Mizhar",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Mizhar",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Mizhar",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Mizhar. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Mizhar Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Mizhar",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Mizhar",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Mizhar",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Mizhar? Browse our most common answers below:",
  items: [
    {
      title: "How often should I service my AC in Al Mizhar?",
      desc: "Most homes should have professional air conditioning servicing every 3 to 6 months to ensure optimal performance."
    },
    {
      title: "Why is my AC cooling slowly?",
      desc: "<strong>Several factors may contribute to performance issues, including:</strong><ul><li>Dirty filters</li><li>Low gas levels</li><li>Blocked coils</li></ul>Addressing these common concerns is essential for maintaining optimal functionality and efficiency."
    },
    {
      title: "Do you repair Central AC systems?",
      desc: "Yes. We repair Central AC, Split AC, Ducted AC, Inverter AC, and many other domestic and commercial AC systems."
    },
    {
      title: "Is same-day AC repair available?",
      desc: "Yes, FAJ Technical Services L.L.C provides same-day services but it depends on whether same-day appointments are available and technician availability."
    },
    {
      title: "What causes AC water leakage?",
      desc: "<strong>Common reasons include:</strong><ul><li>Blocked drain pipe</li><li>Frozen cooling coil</li><li>Dirty air filter</li></ul>"
    },
    {
      title: "What is included in AC maintenance?",
      desc: "<strong>Maintenance normally includes:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain cleaning</li><li>Thermostat testing</li><li>Cooling performance check</li></ul>"
    },
    {
      title: "Are you providing the same-day AC repair in Al Mirdif?",
      desc: "Service can be arranged the same day depending on the issue and availability. Please reach out and let us know if you want to check."
    },
    {
      title: "Which AC brands do you repair?",
      desc: "<strong>We repair all the major brands like:</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>Mitsubishi</li><li>O General</li><li>Panasonic</li><li>Gree and many more.</li></ul>"
    },
    {
      title: "Is an AMC a good investment?",
      desc: "Yes, regular maintenance reduces breakdowns and helps your AC last longer."
    },
    {
      title: "Why does my AC make buzzing sounds?",
      desc: "<strong>Some common reasons for strange noise in the AC</strong><ul><li>Loose electrical parts</li><li>Fan issues</li><li>Worn components</li></ul>"
    },
    {
      title: "Can AC cleaning improve indoor air quality?",
      desc: "Yes, professional cleaning removes dust, mould and bacteria from inside the system."
    },
    {
      title: "How long does AC maintenance take?",
      desc: "Most maintenance visits take about one hour depending on the system size. Some time it take more time because of big repair issue."
    },
    {
      title: "Do your services include a warranty?",
      desc: "Yes,we offer AC cleaning and maintenance services include a 60-day service warranty."
    },
    {
      title: "Will regular servicing reduce electricity bills?",
      desc: "Yes, a properly AC maintenanes operations helps to make more efficiently and consumes less power."
    },
    {
      title: "Do you provide AC installation in Al Mizhar?",
      desc: "Yes, at FAJ Technical Services we install new residential and commercial air conditioning systems in over all Al Mizhar."
    },
    {
      title: "How can I book an AC service?",
      desc: "Simply contact FAJ Technical Services L.L.C with your location and preferred time, and our team will arrange your appointment."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Mizhar.",
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
