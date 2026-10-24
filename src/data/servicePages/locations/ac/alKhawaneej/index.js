const seoData = {
  title: "Best Central AC Repair and Ceiling AC Services in Al Khawaneej",
  description:
    "Fast and reliable AC repair and maintenance in Al Khawaneej. We offer inverter air conditioner and split air & central AC cleaning services near you Dubai",
  keywords:
    "AC Service in Al Khawaneej, AC Repair in Al Khawaneej, AC Maintenance in Al Khawaneej, Inverter AC Service in Al Khawaneej, Split AC Service in Al Khawaneej/",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-khawaneej/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best Central AC Repair and Ceiling AC Services in Al Khawaneej",
    description:
      "Fast and reliable AC repair and maintenance in Al Khawaneej. We offer inverter air conditioner and split air & central AC cleaning services near you Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-khawaneej/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Central AC Repair and Ceiling AC Services in Al Khawaneej",
    description:
      "Fast and reliable AC repair and maintenance in Al Khawaneej. We offer inverter air conditioner and split air & central AC cleaning services near you Dubai",
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
  title: "Best Air Conditioner Repair and Cleaning Service in Al Khawaneej | Dubai",
  paragraph:
    "SDubai’s temperatures are very hot; that’s the reason the AC runs the whole time on extremely hot days. Al Khawaneej is a quiet place in Dubai where people live in big houses, villas, and work in offices and different commercial places. Where AC is on every time to cool the room, suddenly if the AC stops, this make feel uncomfortable quickly.",
  paragraphs: [
    "SDubai’s temperatures are very hot; that’s the reason the AC runs the whole time on extremely hot days. Al Khawaneej is a quiet place in Dubai where people live in big houses, villas, and work in offices and different commercial places. Where AC is on every time to cool the room, suddenly if the AC stops, this make feel uncomfortable quickly.",
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
      description: "Fast assistance across Al Khawaneej.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Best Air Conditioner Repair and Cleaning Service in Al Khawaneej | Dubai",
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
    "FAJ Technical Services L.L.C has been providing services in Dubai for air conditioner problems since 2010. We repair air conditioners, clean them do AC maintenance work and install them in Al Khawaneej for people's homes, villas, offices and commercial buildings. Our technicians are very experienced. Can handle all kinds of air conditioning systems, and they always find a solution quickly.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best Air Conditioner repair services in Al Khawaneej?",
  paragraphs: [
    "Finding an air conditioner repair company is really important when your air conditioner stops working as it should. FAJ Technical Services L.L.C does air conditioner repair and maintenance for houses, homes, offices, restaurants and commercial buildings in Al Khawaneej.",
    "Our technicians are very good at what they do. They look at the problem carefully and fix the air conditioner when it is not cooling, when there is a water leak, an electrical problem, a problem with the compressor or any other air conditioner issue.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Air Conditioner repair services in Al Khawaneej?",
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
  id: "transparent-pricing",
  title: "Air Conditioning Service and Repair Cost in Al Khawaneej Dubai",
  description:
    "We provide transparent, competitive pricing for all residential and commercial HVAC services across Al Khawaneej. Check our standard rates below:",
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
        alt: "AC Inspection in Al Khawaneej",
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
        alt: "AC Cleaning Service in Al Khawaneej",
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
        alt: "AC Maintenance in Al Khawaneej",
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
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Protect your Al Khawaneej property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Khawaneej.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Khawaneej with priority response.",
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
  id: "ac-repair-service-overview",
  title: "Why Is My AC Not Cooling?",
  paragraph:
    "An AC running without proper cooling is a common issue in Dubai. Different parts of the system work together to produce cool air, and a problem with any component can affect performance.",
  causes: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Poor airflow"
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
  id: "ac-maintenance-signs",
  title: "Which signs show the AC needs service?",
  intro:
    "Most air conditioners show warning signs before a major breakdown happens.",
  items: [
    { title: "Higher electricity bills" },
    { title: "AC blowing warm air" },
    { title: "Weak airflow from vents" },
    { title: "Water leakage from the unit" },
    { title: "Strange sounds during operation" },
    { title: "Reduced cooling performance" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Al Khawaneej",
  description:
    "A sudden AC breakdown during the scorching summer can quickly make your home or office unbearable. Our emergency AC repair team is available for fast diagnostics and repairs across Al Khawaneej. We handle cooling failure, water leakage, electrical faults, strange noises, and compressor issues promptly.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Khawaneej",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Khawaneej",
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
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in Al Khawaneej?",
  paragraphs: [
    "Air conditioning units in Al Khawaneej operate under heavy load throughout the long, hot summer months. Routine maintenance ensures that your cooling equipment remains reliable and efficient.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Khawaneej?",
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
  id: "maintenance-importance-cards",
  title: "Key Benefits of Regular AC Maintenance in Al Khawaneej",
  cards: [
    {
      icon: "thermometer-sun",
      title: "High Summer Heat",
      description: "Temperatures in Dubai frequently exceed 40°C. Regular maintenance keeps your AC running smoothly even under the most demanding conditions."
    },
    {
      icon: "coins",
      title: "Lower Energy Consumption",
      description: "Clean coils, properly lubricated motors, and clean air filters allow your AC to run more efficiently, reducing electrical bills."
    },
    {
      icon: "clock-fast",
      title: "Extended System Lifespan",
      description: "Regular servicing reduces friction, overheating, and stress on compressors and fan motors, prolonging equipment life."
    },
    {
      icon: "wind",
      title: "Healthier Indoor Air",
      description: "Cleaning coils and filters removes dust, allergens, and bacteria from circulating air, protecting your family’s health."
    },
    {
      icon: "heart-hand",
      title: "Fewer Breakdowns",
      description: "Routine checkups catch small issues before they turn into costly mid-summer breakdowns."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-ac-problems",
  title: "Most Common AC Problems in Al Khawaneej",
  description:
    "Our certified technicians in Al Khawaneej quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "Reduced airflow usually points to clogged air filters, a failing blower motor, or blocked air ducts.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Blowing Warm Air",
      description: "Lukewarm air indicates low refrigerant gas, a failed compressor, or an electrical malfunction.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "Clicking, rattling, or screeching sounds are warning signs of mechanical wear or loose components inside the unit.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Musty Smells",
      description: "Foul smells are typically caused by mould and bacteria buildup on damp evaporator coils or in drain pans.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Short Cycling",
      description: "If your AC turns on and off repeatedly in short intervals, it may indicate thermostat faults or overheating.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "Excess Moisture",
      description: "A functioning AC should keep indoor humidity balanced. High humidity signals reduced cooling efficiency.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Water Leakage",
      description: "Backed-up drainage trays and frozen coils can overflow, potentially causing damage to walls and ceilings.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Sudden High Bills",
      description: "A spike in energy bills often means your air conditioner is struggling to maintain the set temperature.",
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
  title: "Our Air Conditioning Services in Al Khawaneej",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Our technicians quickly diagnose and fix cooling problems, electrical faults, compressor failure, water leaks, and thermostat issues to restore normal cooling."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We provide thorough AC cleaning to remove dirt, dust, and mould from filters, coils, and drainage lines, helping improve airflow and indoor air quality."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance keeps internal parts running smoothly, helps reduce unexpected breakdowns, and extends the life of your cooling equipment."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install split, central, and ducted AC systems according to manufacturer guidelines to ensure safe operation and efficient cooling."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC packages offer scheduled maintenance visits, emergency support, and priority service throughout the year for worry-free cooling."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Our Air Conditioning Services in Al Khawaneej",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Our technicians quickly diagnose and fix cooling problems, electrical faults, compressor failure, water leaks, and thermostat issues to restore normal cooling."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We provide thorough AC cleaning to remove dirt, dust, and mould from filters, coils, and drainage lines, helping improve airflow and indoor air quality."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance keeps internal parts running smoothly, helps reduce unexpected breakdowns, and extends the life of your cooling equipment."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install split, central, and ducted AC systems according to manufacturer guidelines to ensure safe operation and efficient cooling."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC packages offer scheduled maintenance visits, emergency support, and priority service throughout the year for worry-free cooling."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  title: "Benefits Of Regular AC Service and Maintenance in Al Khawaneej",
  city: "Al Khawaneej",
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
        "Consistent temperatures and reliable cooling during peak Al Khawaneej summer heat.",
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
        "Choose a day and time for your AC repair near me, Al Khawaneej Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Khawaneej. This is why most major brands trust us to handle their service and maintenance needs.",
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
  id: "recent-completed-service",
  title: "Recent Completed Projects",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Khawaneej.",
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
  id: "brands-directory",
  title: "We specialise in air conditioning services for the following brands",
  description:
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Khawaneej:",
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
      title: "Air Conditioning Systems Serviced Across Al Khawaneej:",
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
    "All AC repair and maintenance work in Al Khawaneej is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
  showCta: true,
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
      alt: "Ac Service in Al Khawaneej",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Khawaneej",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Khawaneej",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Khawaneej",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Khawaneej",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Khawaneej",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Khawaneej. Find tips to cut costs and stay cool all summer long!",
  cta: {
    label: "Click Here to Save on Energy Bills",
    href: "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
    download: true,
  },
};

const repairPriceData = {
  id: "pricing-overview",
  title:
    "Explore Our Complete AC Repair & Maintenance Pricing Guide Across Dubai",
  description:
    "Transparent pricing with no hidden fees. Download our full service price list or book online for immediate dispatch.",
  cta: {
    label: "View Full AC Price Guide",
    href: "/services/air-conditioning-repair/ac-repair-charges/",
  },
};

const testimonialsData = {
  id: "testimonials",
  title: "Customer Reviews",
  description:
    "Read genuine reviews from homeowners, landlords and facility managers who rely on FAJ Technical Services L.L.C for their HVAC maintenance.",
  items: [
    {
      name: "Tariq Mansoor",
      role: "Al Khawaneej Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Khawaneej",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Khawaneej",
      quote:
        "Very professional duct cleaning and coil descaling. The air feels crisp and smells fresh. Electricity bills dropped by nearly 15% after the service.",
      rating: 5,
    },
  ],
};

const newsData = {
  id: "news-updates",
  title: "NEWS & UPDATES",
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
  id: "location-faqs",
  title: "AC Repair and Maintenance FAQs in Al Khawaneej",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Khawaneej? Browse our most common answers below:",
  items: [
    {
      title: "How much does AC repair cost in Al Khawaneej?",
      desc: "The cost depends on the AC type, problem, required parts and repair work. FAJ Technical Services L.L.C provides inspection, cleaning and maintenance services with clear pricing."
    },
    {
      title: "How often should I service my AC in Al Khawaneej?",
      desc: "Most AC systems should be serviced every 3 to 6 months. Regular maintenance helps improve cooling, reduce faults and keep the system efficient."
    },
    {
      title: "Why is my AC running but not cooling properly?",
      desc: "<strong>Common reasons include:</strong><ul><li>Dirty air filters</li><li>Low refrigerant gas</li><li>Locked coils</li><li>Thermostat problems</li><li>Compressor issues</li><li>Poor airflow</li></ul>A professional inspection helps identify the exact cause."
    },
    {
      title: "Do you provide AC repair services for villas in Al Khawaneej?",
      desc: "Yes, we provide AC repair, cleaning, maintenance and installation services for villas, homes, offices and commercial properties in Al Khawaneej."
    },
    {
      title: "What causes water leakage from an AC unit?",
      desc: "<strong>Common reasons include:</strong><ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty filters</li><li>Drainage problems</li></ul>"
    },
    {
      title: "Is same-day AC repair available in Al Khawaneej?",
      desc: "Same-day AC repair may be available depending on technician availability and the type of AC issue. Contact our team for quick assistance."
    },
    {
      title: "Which AC brands do you repair?",
      desc: "<strong>We repair major AC brands including:</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>O General</li><li>Mitsubishi</li><li>Carrier</li><li>York</li><li>Gree</li><li>Panasonic</li><li>Hitachi</li></ul>"
    },
    {
      title: "What is included in AC maintenance service?",
      desc: "<strong>Our AC maintenance service usually includes:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain line checking</li><li>Thermostat testing</li><li>Cooling performance inspection</li></ul>"
    },
    {
      title: "Is an Annual Maintenance Contract (AMC) useful for AC systems?",
      desc: "Yes, AMC helps prevent sudden breakdowns, improves system performance and reduces long-term repair expenses."
    },
    {
      title: "Why is my AC making strange noises?",
      desc: "<strong>Common causes include:</strong><ul><li>Loose internal parts</li><li>Fan motor problems</li><li>Dust buildup</li><li>Worn components</li></ul>A technician can inspect the system and fix the issue."
    },
    {
      title: "Can AC cleaning improve indoor air quality?",
      desc: "Yes, professional AC cleaning removes dust, mould and dirt buildup from internal components, helping create cleaner indoor air."
    },
    {
      title: "How long does AC maintenance take?",
      desc: "Most maintenance visits take around one hour. The exact time depends on the AC type, number of units and system condition."
    },
    {
      title: "Do you provide warranty on AC services?",
      desc: "Yes, FAJ Technical Services L.L.C provides a 60-day warranty on selected AC cleaning and maintenance services."
    },
    {
      title: "Can regular AC servicing reduce electricity bills?",
      desc: "Yes, a properly maintained AC works more efficiently and uses less energy, which can help reduce monthly electricity costs."
    },
    {
      title: "How can I book AC service in Al Khawaneej?",
      desc: "You can contact FAJ Technical Services L.L.C with your location and preferred appointment time. Our team will arrange a suitable visit."
    }
  ],
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Khawaneej.",
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
