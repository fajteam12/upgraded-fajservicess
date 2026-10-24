const seoData = {
  title: "Central AC Repair in Al Furjan | 7-Day AC Cleaning Services",
  description:
    "Are you looking for AC repair in Al Furjan Villas, Dubai? Call FAJ for the best LG or Carrier air conditioning maintenance and servicing near you in Dubai",
  keywords:
    "AC Services In Al Furjan, Air Conditioner Repairing In Al Furjan, AC Repair In Al Furjan, AC Maintenance In Al Furjan, AC Installation In Al Furjan, AC Cleaning In Al Furjan, Air Conditioning Services In Al Furjan, Air Conditioner Service In Al Furjan, Air Conditioner Repair In Al Furjan",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-furjan/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Central AC Repair in Al Furjan | 7-Day AC Cleaning Services",
    description:
      "Are you looking for AC repair in Al Furjan Villas, Dubai? Call FAJ for the best LG or Carrier air conditioning maintenance and servicing near you in Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-furjan/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central AC Repair in Al Furjan | 7-Day AC Cleaning Services",
    description:
      "Are you looking for AC repair in Al Furjan Villas, Dubai? Call FAJ for the best LG or Carrier air conditioning maintenance and servicing near you in Dubai",
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

const heroData = {  title: "Expert Affordable AC Repair and Maintenance Services in Al Furjan, Dubai | AC Service Near Me",
  paragraph:
    "Al Furjan is a nice place to live in Dubai with lots of modern houses, townhouses, apartments, schools and shops. The thing is, air conditioners are always on in Dubai, so if they are not working properly, it can be very uncomfortable at home or at work especially when it is really hot in the summer.",
  paragraphs: [
    "Al Furjan is a nice place to live in Dubai with lots of modern houses, townhouses, apartments, schools and shops. The thing is, air conditioners are always on in Dubai, so if they are not working properly, it can be very uncomfortable at home or at work especially when it is really hot in the summer.",
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
      description: "Fast assistance across Al Furjan.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Expert Affordable AC Repair and Maintenance Services in Al Furjan, Dubai | AC Service Near Me",
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
    "FAJ Technical Services L.L.C has been providing trusted AC repair and maintenance services across Dubai since 2010. We provide AC repair, AC cleaning, AC maintenance and AC installation services for homes and commercial properties throughout Al Furjan and nearby communities.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who Provides AC Repair Services Near Me in Dubai and the UAE?",
  paragraphs: [
    "When your air conditioner breaks down, it is really important to find a company you can trust. FAJ Technical Services L.L.C does all kinds of air conditioner repairs and maintenance for all sorts of places like apartments, villas, townhouses, offices, shops, schools, restaurants and commercial buildings in Al Furjan.",
    "If your air conditioner needs a fix or a big check-up, our technicians are very good at figuring out what is wrong and giving solutions that will work for a long time.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who Provides AC Repair Services Near Me in Dubai and the UAE?",
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
  id: "transparent-pricing",  title: "Air Conditioning Service and Repair Cost in Al Furjan Dubai",
  description:
    "We provide transparent, competitive pricing for all residential and commercial HVAC services across Al Furjan. Check our standard rates below:",
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
        alt: "AC Inspection in Al Furjan",
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
        alt: "AC Cleaning Service in Al Furjan",
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
        alt: "AC Maintenance in Al Furjan",
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
    "Protect your Al Furjan property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Furjan.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Furjan with priority response.",
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
  id: "ac-repair-service-overview",  title: "Why Is My AC Running But Not Cooling?",
  paragraph:
    "Sometimes an AC unit keeps running but the room still doesn't feel cool. Some issues can reduce cooling performance.",
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
    "A complete inspection helps identify the fault so repairs can be carried out correctly before further damage occurs.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "Why Is My AC Running But Not Cooling?",
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
  id: "ac-maintenance-signs",  title: "Which Signs Show the AC Needs Service?",
  intro:
    "Most AC units show small warning signs before a major breakdown happens.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Weak cooling performance" },
    { title: "Low airflow from the vents" },
    { title: "Water leaking from the indoor unit" },
    { title: "Strange noises" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Furjan",
  description:
    "AC can stop working without warning, especially during the hottest days of the year in Dubai. Quick repairs help restore cooling and stop further damage to the AC system. Our emergency AC repair service covers: AC not cooling, Water leakage, Compressor failure, Electrical faults, Thermostat issues, Weak airflow, Strange noise, and Complete system shutdown. Our technicians respond quickly to help restore comfort in your home or workplace.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Furjan",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Furjan",
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
  id: "ac-maintenance-importance",  title: "Why is AC maintenance important in Al Furjan?",
  paragraphs: [
    "Air conditioners in Al Furjan are working all the time because it is really hot in Dubai. If you do maintenance on time, they will keep working properly, and you will not have to deal with them breaking down all of a sudden.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC maintenance important in Al Furjan?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Furjan",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Summer Temperatures",
      description: "It can get over 40 degrees Celsius. If you take care of your AC it will keep cooling your place when it is being used a lot every day."
    },
    {
      icon: "coins",
      title: "Better Energy Savings",
      description: "A clean AC uses less electricity, and it cools better, so you will have lower energy bills every month."
    },
    {
      icon: "clock-fast",
      title: "Longer Equipment Life",
      description: "When you do maintenance, it reduces the wear on the important parts so your cooling system will last longer."
    },
    {
      icon: "wind",
      title: "Cleaner Indoor Air",
      description: "When you clean the AC, it removes dust, dirt and other bad things. The air will be healthier for your family and the people at your workplace."
    },
    {
      icon: "heart-hand",
      title: "Improved Comfort",
      description: "A well-maintained AC gives you airflow, and the temperature is always right so every room will feel comfortable all day long."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-ac-problems",  title: "Most Common AC Problems We Handle",
  description:
    "Our certified technicians in Al Furjan quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "If your AC's airflow feels weaker than before, then dirty vents or blocked filters are the problem. Cleaning or replacing the filters can restore airflow and make cooling work.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description: "When your AC blows air instead of cool air, it could be due to low refrigerant, compressor issues or thermostat problems. A professional should check it to find the problem.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "If you hear buzzing, rattling or grinding sounds from your AC, it usually means parts or worn-out components inside. Fixing these issues early can prevent damage.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description: "A musty smell from your AC means dust, moisture or mould has built up inside. A professional cleaning can remove the smell.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description: "If your AC keeps turning on and quickly, it could be thermostat issues or electrical problems. These need attention.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description: "When your AC can't remove moisture properly, your home feels humid and uncomfortable. This can happen even when the AC is running.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description: "Blocked drain lines or frozen coils often cause water to leak from an air conditioner. Fixing these issues quickly helps prevent water damage.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description: "If your AC isn't working efficiently, it uses more electricity. Regular servicing helps improve performance and reduce energy consumption.",
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
  title: "Our Air Conditioning Services in Al Furjan",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We fix your AC if it has cooling issues, electrical faults, compressor failures, thermostat problems or water leaks. Our repair service gets your AC cooling working normally again quickly and safely."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We professionally clean your AC to remove dust, mould, and debris from filters, coils, and drainage systems. This helps to improve airflow and keep the air indoors cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "We do air conditioning maintenance to keep your AC components in good condition. This helps your AC system work all year round and improve its performance."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install AC systems for homes and businesses. We follow the manufacturer's recommendations to ensure the AC operates safely and cools reliably."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plans include scheduled maintenance to prevent problems and priority support throughout the year. This helps to reduce AC breakdowns."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Our Air Conditioning Services in Al Furjan",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We fix your AC if it has cooling issues, electrical faults, compressor failures, thermostat problems or water leaks. Our repair service gets your AC cooling working normally again quickly and safely."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We professionally clean your AC to remove dust, mould, and debris from filters, coils, and drainage systems. This helps to improve airflow and keep the air indoors cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "We do air conditioning maintenance to keep your AC components in good condition. This helps your AC system work all year round and improve its performance."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install AC systems for homes and businesses. We follow the manufacturer's recommendations to ensure the AC operates safely and cools reliably."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plans include scheduled maintenance to prevent problems and priority support throughout the year. This helps to reduce AC breakdowns."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Furjan",
  city: "Al Furjan",
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
        "Consistent temperatures and reliable cooling during peak Al Furjan summer heat.",
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
        "Choose a day and time for your AC repair near me, Al Furjan Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Furjan. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Furjan.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Furjan:",
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
      title: "Air Conditioning Systems Serviced Across Al Furjan:",
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
    "All AC repair and maintenance work in Al Furjan is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Furjan",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Furjan",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Furjan",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Furjan",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Furjan",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Furjan",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Furjan. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Furjan Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Furjan",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Furjan",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Furjan",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Furjan? Browse our most common answers below:",
  items: [
    {
      title: "How often should I service my AC in Al Furjan?",
      desc: "Most of experts suggested to services your AC every 3 to 6 months. Regular maintenance helps keep the system efficient throughout the year."
    },
    {
      title: "Why is my AC not cooling properly in Al Furjan?",
      desc: "<strong>This usually happens because of:</strong><ul><li>Dirty air filters</li><li>Low refrigerant gas</li><li>Blocked condenser coils</li><li>Poor airflow</li></ul>"
    },
    {
      title: "Is same-day AC repair available in Al Furjan?",
      desc: "Yes, at FAJ Technical Service, same-day AC repair may be available depending on technician availability and the type of repair required."
    },
    {
      title: "Which AC system is best for villas in Al Furjan?",
      desc: "Central AC and Ducted Split AC systems are popular choices because they provide even cooling across multiple rooms."
    },
    {
      title: "What causes water leakage from an AC unit?",
      desc: "<strong>Common causes include:</strong><ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty air filter</li></ul>"
    },
    {
      title: "Do you provide AC services for apartments in Al Furjan?",
      desc: "At FAJ Technical Services, we provide AC repair, maintenance, installation, and cleaning services for apartments, villas, townhouses, offices, and commercial properties throughout Al Furjan."
    },
    {
      title: "What is included in an AC maintenance service?",
      desc: "<strong>Maintenance normally includes:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain line cleaning</li><li>Thermostat testing</li><li>Cooling performance check</li></ul>"
    },
    {
      title: "Which AC brands do you repair in Al Furjan?",
      desc: "<strong>Our technicians service </strong><ul></li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>Mitsubishi</li><li>York</li><li>Panasonic and many other leading brands.</li></ul>"
    },
    {
      title: "Is an Annual Maintenance Contract (AMC) worth it?",
      desc: "Yes, an AMC helps reduce unexpected repairs, improves system performance, and keeps your AC operating efficiently throughout the year."
    },
    {
      title: "Why is my AC making strange noises?",
      desc: "<strong>Some common reasons include:</strong><ul><li>Loose internal parts</li><li>Fan motor problems</li><li>Worn components</li></ul>"
    },
    {
      title: "Can AC cleaning improve indoor air quality?",
      desc: "Yes, Professional AC cleaning removes dust, mould and bacteria from the system, creating cleaner and healthier indoor air."
    },
    {
      title: "How long does AC maintenance usually take?",
      desc: "Most maintenance visits take around one hour, depending on the AC type, size, and condition."
    },
    {
      title: "Do you provide warranty on AC services?",
      desc: "Yes, our AC cleaning and maintenance services include a 60-day service warranty."
    },
    {
      title: "Can regular AC servicing help lower electricity bills?",
      desc: "Yes, a properly maintained AC uses less energy and helps reduce monthly electricity costs."
    },
    {
      title: "How can I book AC service in Al Furjan?",
      desc: "Simply contact FAJ Technical Services L.L.C with your location and preferred appointment time. Our team will arrange a suitable visit."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Furjan.",
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
