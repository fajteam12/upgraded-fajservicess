const seoData = {
  title: "Same-Day AC Repair & Maintenance in Al Mamzar | AC Servicing",
  description:
    "Affordable AC service and repair in Al Mamzar, Dubai. Call now at 043300002 for repairs of your VRV and VRF AC units and to fix errors near you",
  keywords:
    "AC Repair in Al Mamzar, AC Service in Al Mamzar, Air Conditioner Repair Dubai, AC Repair Dubai, Air Conditioning Service Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mamzar/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Same-Day AC Repair & Maintenance in Al Mamzar | AC Servicing",
    description:
      "Affordable AC service and repair in Al Mamzar, Dubai. Call now at 043300002 for repairs of your VRV and VRF AC units and to fix errors near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mamzar/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day AC Repair & Maintenance in Al Mamzar | AC Servicing",
    description:
      "Affordable AC service and repair in Al Mamzar, Dubai. Call now at 043300002 for repairs of your VRV and VRF AC units and to fix errors near you",
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

const heroData = {  title: "Top-Rated Air Conditioner Repair and Maintenance in Al Mamzar | AC Service Near Me",
  paragraph:
    "Living by the sea in Al Mamzar means an air conditioner must remain on around the clock to keep the interior temperature comfortable. Over time, humidity, dust and frequent usage can lead to trouble with the AC, such as reduced cooling, water leakage, and increased electricity costs.",
  paragraphs: [
    "Living by the sea in Al Mamzar means an air conditioner must remain on around the clock to keep the interior temperature comfortable. Over time, humidity, dust and frequent usage can lead to trouble with the AC, such as reduced cooling, water leakage, and increased electricity costs.",
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
      description: "Fast assistance across Al Mamzar.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Top-Rated Air Conditioner Repair and Maintenance in Al Mamzar | AC Service Near Me",
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
    "FAJ Technical Services L.L.C provides professional air conditioning solutions in Al Mamzar, including AC repair, cleaning, maintenance and installation services. Since 2010, our technicians have been helping customers keep their cooling systems working efficiently with proper inspection and reliable repairs.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best AC repair services in Al Mamzar?",
  paragraphs: [
    "A faulty AC can quickly become uncomfortable, especially during Dubai’s hot months. FAJ Technical Services L.L.C provides complete AC repair and maintenance solutions in Al Mamzar for apartments, residential buildings, restaurants, offices and commercial locations.",
    "Our highly trained technicians can resolve various condo air conditioning problems, such as cooling problems, water leaks, electrical wiring, and system breakdowns. Our attention is directed towards identifying the right cause and delivering repairs that deliver a long-lasting service life.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Al Mamzar?",
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
  id: "transparent-pricing",  title: "Air Conditioning Service and Repair Cost in Al Mamzar Dubai",
  description:
    "We provide transparent, competitive pricing for all residential and commercial HVAC services across Al Mamzar. Check our standard rates below:",
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
        alt: "AC Inspection in Al Mamzar",
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
        alt: "AC Cleaning Service in Al Mamzar",
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
        alt: "AC Maintenance in Al Mamzar",
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
    "Protect your Al Mamzar property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Mamzar.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Mamzar with priority response.",
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
    "Sometimes an AC keeps running but does not provide enough cooling. This usually happens when one or more parts of the system are not working correctly.",
  causes: [
    "Dirty air filters",
    "Low refrigerant level",
    "Blocked condenser coils",
    "Thermostat problems",
    "Compressor issues",
    "Electrical faults",
    "Limited airflow"
  ],
  conclusion:
    "A professional inspection helps identify the exact problem and ensures the correct repair is carried out.",
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
    "Many AC problems start with small warning signs. Getting professional service at the right time can help avoid bigger issues.",
  items: [
    { title: "Higher electricity usage" },
    { title: "Less cooling than before" },
    { title: "Weak airflow from vents" },
    { title: "Water coming from the AC unit" },
    { title: "Strange sounds while running" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Mamzar",
  description:
    "AC problems can happen unexpectedly, especially during the hottest days in Dubai. Quick repair service helps restore cooling and prevents further damage to the system. Our emergency AC repair service covers: AC not cooling, AC not turning on, Water leakage, Electrical faults, Compressor failure, Thermostat problems, Weak airflow, and Strange noises. Our technicians provide fast support for customers in Al Mamzar and nearby areas to restore comfort as quickly as possible.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Mamzar",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Mamzar",
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
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Mamzar?",
  paragraphs: [
    "Dubai has a warm climate and high humidity in the coastal regions of the city, making air conditioners a regular use in Al Mamzar. With proper maintenance, the system can manage daily usage, boost efficiency and avoid sudden cooling issues.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Mamzar?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Mamzar",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather",
      description: "The hot weather conditions in Dubai add pressure to air conditioning systems. By keeping your unit properly maintained, you can keep it cooling efficiently throughout the summer, even if you use it a lot."
    },
    {
      icon: "coins",
      title: "Energy Efficiency",
      description: "Clean filters and components enable the AC to function properly, therefore reducing power usage. This helps to cut down on unnecessary electric costs."
    },
    {
      icon: "clock-fast",
      title: "Longevity of Equipment",
      description: "When major parts of the AC are taken care of, they will not be damaged and will not cause wear. This can help you save on replacement costs and prolong the life of your cooling system."
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description: "When internal AC parts are cleaned, dust, dirt and unwanted particles that have an impact on indoor air are eliminated. This results in a cleaner and healthier atmosphere for the residents."
    },
    {
      icon: "heart-hand",
      title: "Enhanced Comfort",
      description: "Regular AC maintenance ensures a consistent temperature, enhanced air circulation and indoor comfort all year long."
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
    "Our certified technicians in Al Mamzar quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "The weak airflow is most likely due to clogged filters, dirty vents or fan problems. Cleaning and inspection will help to improve air circulation and cooling.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description: "There are several possibilities when the air expelled by the AC is warm, such as low refrigerant, a compressor problem, or a thermostat malfunction.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "Any buzz, grinds or rattles typically indicate loose parts, motor problems or even internal damage that would need expert diagnosis.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description: "There are no direct reasons for the unpleasant odours to come from the AC vents, except for the build-up of mould, moisture and dirt.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description: "The thermostat, blockage or electrical problems could all be the cause of the AC unit constantly cycling on and off and should be addressed.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description: "If the AC is unable to remove moisture from the rooms, the rooms can become humid and uncomfortable. Now, the system can be checked by a technician.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description: "Water leakage can happen due to blocked drains, frozen coils or dirty filters. Quick service helps prevent damage to walls, floors and AC parts.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description: "Higher electricity costs may indicate poor AC efficiency caused by dirty components, airflow problems or system faults. Regular maintenance improves performance.",
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
  title: "Professional Air Conditioning Services in Al Mamzar",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We provide complete AC repair solutions for cooling failures, water leakage, electrical problems, compressor faults and other system issues. Our technicians inspect the fault properly and restore your AC performance with reliable repairs."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "We clean filters, coils and drainage areas from dust, dirt, mould and buildup with our AC cleaning service. It enhances ventilation, aids cooling and keeps the indoor air quality clean."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance will help to avoid system breakdowns and keep your air conditioning system operating smoothly. It makes it more efficient and better performing for the year."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install various types of AC systems in residential and commercial properties professionally. We follow proper installation procedures to ensure safe operation and dependable cooling performance."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plans provide scheduled AC inspections, preventive maintenance and priority support. It helps reduce unexpected repair costs and keeps your cooling system ready for continuous use."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Professional Air Conditioning Services in Al Mamzar",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We provide complete AC repair solutions for cooling failures, water leakage, electrical problems, compressor faults and other system issues. Our technicians inspect the fault properly and restore your AC performance with reliable repairs."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "We clean filters, coils and drainage areas from dust, dirt, mould and buildup with our AC cleaning service. It enhances ventilation, aids cooling and keeps the indoor air quality clean."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance will help to avoid system breakdowns and keep your air conditioning system operating smoothly. It makes it more efficient and better performing for the year."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install various types of AC systems in residential and commercial properties professionally. We follow proper installation procedures to ensure safe operation and dependable cooling performance."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC plans provide scheduled AC inspections, preventive maintenance and priority support. It helps reduce unexpected repair costs and keeps your cooling system ready for continuous use."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Mamzar",
  city: "Al Mamzar",
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
        "Consistent temperatures and reliable cooling during peak Al Mamzar summer heat.",
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
        "Choose a day and time for your AC repair near me, Al Mamzar Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Mamzar. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Mamzar.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Mamzar:",
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
      title: "Air Conditioning Systems Serviced Across Al Mamzar:",
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
    "All AC repair and maintenance work in Al Mamzar is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Mamzar",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Mamzar",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Mamzar",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Mamzar",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Mamzar",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Mamzar",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Mamzar. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Mamzar Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Mamzar",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Mamzar",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Mamzar",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Mamzar? Browse our most common answers below:",
  items: [
    {
      title: "What is the price of AC Repair in Al Mamzar?",
      desc: "The repair cost will depend on the type of AC, the severity of the issue and the required parts. First, we check if the system has any issues, then we give the appropriate solution according to the problem."
    },
    {
      title: "When should I get the AC serviced in Al Mamzar?",
      desc: "You should have your AC serviced every 3-6 months. Routine maintenance can help maintain cooling efficiency and minimise failures and faults."
    },
    {
      title: "Why does my Air conditioner keep running but still keep the room warm?",
      desc: "This may occur when the filters are dirty, there is low refrigerant, or there is blocked airflow or compressor issues. A professional inspection will be able to determine the exact cause."
    },
    {
      title: "Do you provide AC repair for apartments in Al Mamzar?",
      desc: "Yes, we do offer AC repair, cleaning, maintenance and installation services for apartments, residential buildings, offices and commercial properties in Al Mamzar."
    },
    {
      title: "What are the most common causes of water leakage from air conditioners?",
      desc: "<strong>Several common issues can lead to water leakage.</strong><ul><li>Blocked drain pipe</li><li>Dirty filters</li><li>Frozen evaporator coil</li><li>Drainage problems</li></ul>"
    },
    {
      title: "Does AC cleaning enhance cooling efficiency?",
      desc: "Absolutely, the removal of dust and dirt from filters, coils and drainage parts will help the AC to cool better and will improve the airflow."
    },
    {
      title: "Do you offer same-day AC repair services in Al Mamzar?",
      desc: "Depending on the technician's availability and the kind of issue with the AC, same day service may be available. Call us and get immediate support. "
    },
    {
      title: "Which AC brands do you repair in Al Mamzar?",
      desc: "<strong>We repair and maintain major brands including:</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>O General</li><li>Mitsubishi</li><li>Carrier</li><li>York</li><li>Gree</li><li>Panasonic</li><li>Hitachi</li></ul>"
    },
    {
      title: "What is included in an AC maintenance service?",
      desc: "<strong>AC maintenance usually includes:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain checking</li><li>Thermostat testing</li><li>Cooling performance check</li><li>Electrical inspection</li></ul>"
    },
    {
      title: "Is an Annual Maintenance Contract (AMC) useful for AC systems?",
      desc: "Yes, an AMC helps reduce unexpected breakdowns, keeps your AC maintained on schedule and improves long-term system performance."
    },
    {
      title: "Why does my AC make noise when running?",
      desc: "<strong>Common reasons include:</strong><ul><li>Loose internal parts</li><li>Fan motor problems</li><li>Dust buildup</li><li>Worn-out components</li></ul>A technician can inspect the system and repair the cause of the noise."
    },
    {
      title: "How long does AC servicing take?",
      desc: "Most AC maintenance visits take around one hour. The time may change depending on the AC type, number of units and system condition."
    },
    {
      title: "Can regular AC maintenance reduce electricity bills?",
      desc: "Yes, a clean and properly maintained AC works more efficiently and uses less energy, which can help lower monthly electricity costs."
    },
    {
      title: "Should I repair my old AC or replace it?",
      desc: "If your AC needs frequent repairs or has high energy usage, replacement may be a better option. A technician can check the condition and suggest the right choice."
    },
    {
      title: "How can I book AC service in Al Mamzar?",
      desc: "You can contact FAJ Technical Services L.L.C with your location and preferred timing. Our team will arrange a suitable appointment for AC service."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Mamzar.",
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
