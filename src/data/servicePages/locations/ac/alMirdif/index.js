const seoData = {
  title: "Fast AC Repair and Servicing In Al Mirdif | Inverter AC Fix Dubai",
  description:
    "FAJ offers inverter AC repair services in Al Mirdif. Our AC technicians are experts in Chiller FCU, HVAC maintenance and repairs in your area, Dubai",
  keywords:
    "AC Service in Al Mirdif, AC Repair in Al Mirdif, AC Maintenance in Al Mirdif, Air Conditioning Service in Al Mirdif, Air Conditioner Repair in Al Mirdif, Air Conditioning Maintenance in Al Mirdif",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mirdif/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fast AC Repair and Servicing In Al Mirdif | Inverter AC Fix Dubai",
    description:
      "FAJ offers inverter AC repair services in Al Mirdif. Our AC technicians are experts in Chiller FCU, HVAC maintenance and repairs in your area, Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-mirdif/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast AC Repair and Servicing In Al Mirdif | Inverter AC Fix Dubai",
    description:
      "FAJ offers inverter AC repair services in Al Mirdif. Our AC technicians are experts in Chiller FCU, HVAC maintenance and repairs in your area, Dubai",
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

const heroData = {  title: "Professional AC Repair and Maintenance Services in Al Mirdif | Reliable AC Service Near Me",
  paragraph:
    "Al Mirdif is a residential neighborhood in Dubai that is a popular choice for families looking for a quiet neighborhood. Families often prefer living here due to its tranquility and the distance from the hustle and bustle of the city. Al Mirdif residents rely on their air conditioners all year long. AC units are extremely important in this region during hot and lengthy summer months. When a system fails, it becomes very difficult to stay indoors and carry on with daily life.",
  paragraphs: [
    "Al Mirdif is a residential neighborhood in Dubai that is a popular choice for families looking for a quiet neighborhood. Families often prefer living here due to its tranquility and the distance from the hustle and bustle of the city. Al Mirdif residents rely on their air conditioners all year long. AC units are extremely important in this region during hot and lengthy summer months. When a system fails, it becomes very difficult to stay indoors and carry on with daily life.",
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
      description: "Fast assistance across Al Mirdif.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Professional AC Repair and Maintenance Services in Al Mirdif | Reliable AC Service Near Me",
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
    "FAJ Technical Services L.L.C has been repairing and maintaining air conditioners in Dubai since 2010. Our team provides AC repair, air conditioning repair, AC service, AC maintenance, AC cleaning, and new AC installation services for homes and businesses in Al Mirdif. We have worked on many AC units in this area and we know the common problems that come up here.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who provides the best AC repair services in Al Mirdif?",
  paragraphs: [
    "Nobody wants to endure a broken AC during Dubai's scorching summer. If you are searching for AC repair near me, AC service near me, or air conditioner repair in Al Mirdif, our experienced technicians are ready to help. The villas, townhouses, apartments, schools and small shops in Al Mirdif are being serviced by FAJ Technical Services L.L.C for AC Repair and Maintenance.",
    "Our technicians have the experience to swiftly identify the real issue. They check the entire system, look for gas leaks, test the wiring, and ensure that everything is in order. We update customers throughout to ensure there are no surprises.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Al Mirdif?",
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
  id: "pricing",  title: "Fair, Upfront AC Service Pricing in Al Mirdif",
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
        alt: "AC Diagnostic & Inspection in Al Mirdif",
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
        alt: "AC Cleaning Service in Al Mirdif",
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
        alt: "AC Maintenance in Al Mirdif",
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
    "Protect your Al Mirdif property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Mirdif.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Mirdif with priority response.",
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
    "Many people face this issue. The AC is running but the room does not get cool. There are several reasons why this happens.",
  causes: [
    "Air filters are blocked with dust",
    "Refrigerant gas has dropped below the required level",
    "Outdoor coils are dirty and cannot release heat",
    "Thermostat is not reading the temperature right",
    "Compressor has started to wear out",
    "There is a problem with the electrical wiring",
    "Airflow is restricted somewhere in the system"
  ],
  conclusion:
    "A full inspection is the only way to know for sure. Our technicians check each part and fix the actual cause, not just the symptom.",
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
    "If you notice any of these signs, you must contact an expert technician who can repair your AC professionally. We are here to assist your AC cooling system in achieving optimal efficiency.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Air is not blowing cold" },
    { title: "Drips from your air conditioner" },
    { title: "Loss of AC performance" },
    { title: "Poor AC airflow, making noises" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Mirdif",
  description:
    "AC problems can come up at any time. When the weather is hot and your system fails, you cannot afford to wait. We offer emergency AC repair and same-day AC service to get your cooling system running again as quickly as possible. Our emergency service includes: AC not cooling, AC not turning on, Water leakage, Electrical faults, Compressor problems, Thermostat issues, Weak airflow, and Unusual noises. We serve homes, schools, small businesses and industries across Al Mirdif with quick response times.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Mirdif",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Mirdif",
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
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Mirdif?",
  paragraphs: [
    "The AC units in this area work for many hours every day because of Dubai's harsh summer. They can work more effectively and last longer with regular maintenance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Mirdif?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Mirdif",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather",
      description: "Dubai has very high temperatures during summer. Your AC won't be able to cope with the heat if it is not serviced on time. It will try even harder and could fail during the time of need."
    },
    {
      icon: "coins",
      title: "Energy Savings",
      description: "A clean AC uses less electricity. There is no dust on the filters and coils, and the system operates without any problems. This will enable you to control your electric bills."
    },
    {
      icon: "clock-fast",
      title: "Longer Life",
      description: "Regular servicing keeps the key components of the air conditioner from becoming damaged early. The system lasts longer and doesn't need to be replaced in the near future."
    },
    {
      icon: "wind",
      title: "Improved Air Quality",
      description: "Dust and dirt are captured within the AC over time. Cleaning them out will make your home's air cleaner. This is good for your health."
    },
    {
      icon: "heart-hand",
      title: "Balanced Cooling",
      description: "When the AC is well-maintained, it circulates cool air throughout the room. There will be no colder parts and warmer parts of the room."
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
    "Our certified technicians in Al Mirdif quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "The filters are likely clogged if the air doesn't move out quickly. The fan can be faulty at times. It is typically resolved with a quick clean.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air",
      description: "If the AC blows warm air, then it is an indication of either low gas or a damaged compressor. It also may be the thermostat. It requires attention by a technician.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Strange Noises",
      description: "Hearing grinding or rattling? Something is loose or broken on the inside. Do not wait for it to get worse.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Foul Odors",
      description: "Bad smells come from mould or dampness inside the system. A deep clean will remove it.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Frequent Cycling",
      description: "If your AC keeps switching on and off, the thermostat or wiring may be at fault.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Humidity Levels",
      description: "A room that feels sticky means the AC is not pulling moisture out. It needs professional care.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Leaking Water",
      description: "Water coming from the indoor unit is often due to a blocked drain or frozen parts.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "Increased Energy Bills",
      description: "An inefficient AC uses more power. If your bills are climbing, your system is not running as it should.",
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
  title: "Professional Air Conditioning Services in Al Mirdif",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We handle all kinds of AC problems including cooling failures, water leaks, thermostat faults, and compressor breakdowns. Our team checks the entire system and restores proper cooling."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "We provide professional AC cleaning, including AC filter cleaning, coil cleaning, and drain line cleaning to remove dirt, dust, and mould. This helps the air flow better and makes the indoor air fresher and cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance keeps your cooling system in good condition and helps prevent unexpected breakdowns. We check all the parts, find any developing issues, and make sure your system runs without any trouble."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We provide professional AC installation services for homes, villas, apartments, offices, and commercial spaces. Our team follows all the right steps to make sure the unit works safely and efficiently."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "With an Annual Maintenance Contract (AMC), we visit your property regularly to service your AC and keep it in top condition. You also get priority support whenever you call us."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Professional Air Conditioning Services in Al Mirdif",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "We handle all kinds of AC problems including cooling failures, water leaks, thermostat faults, and compressor breakdowns. Our team checks the entire system and restores proper cooling."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Services",
      description: "We provide professional AC cleaning, including AC filter cleaning, coil cleaning, and drain line cleaning to remove dirt, dust, and mould. This helps the air flow better and makes the indoor air fresher and cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance keeps your cooling system in good condition and helps prevent unexpected breakdowns. We check all the parts, find any developing issues, and make sure your system runs without any trouble."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We provide professional AC installation services for homes, villas, apartments, offices, and commercial spaces. Our team follows all the right steps to make sure the unit works safely and efficiently."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "With an Annual Maintenance Contract (AMC), we visit your property regularly to service your AC and keep it in top condition. You also get priority support whenever you call us."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Mirdif",
  city: "Al Mirdif",
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
        "Consistent temperatures and reliable cooling during peak Al Mirdif summer heat.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Mirdif:",
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
      title: "Air Conditioning Systems Serviced Across Al Mirdif:",
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
    "All AC repair and maintenance work in Al Mirdif is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Mirdif",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Mirdif",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Mirdif",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Mirdif",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Mirdif",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Mirdif",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Mirdif. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Mirdif Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Mirdif",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Mirdif",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Mirdif",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Mirdif? Browse our most common answers below:",
  items: [
    {
      title: "What is the price of AC repair in Al Mirdif?",
      desc: "The price depends on the type of Air Conditioner, the problem, and the parts required. We provide you with a straightforward price after inspection."
    },
    {
      title: "How often should I service my AC in Al Mirdif?",
      desc: "Every 6 months is the recommended frequency. This will maintain a properly functioning system and avoid unexpected problems."
    },
    {
      title: "Why won't my air conditioner cool my house?",
      desc: "<strong>The common reasons are:</strong><ul><li>Dirty Filters</li><li>Low Gas</li><li>Blocked Coils</li><li>Compressor Issues</li></ul>A technician will be able to determine the problem."
    },
    {
      title: "Do you provide AC services for villas in Al Mirdif?",
      desc: "Yes, villas, townhouses, apartments, schools and commercial buildings are covered in Al Mirdif."
    },
    {
      title: "What is the reason for AC water leakage?",
      desc: "<strong>These are the top causes of water leakage:</strong><ul><li>Drain line clogging</li><li>Frozen coils</li><li>Dirty filters</li></ul>"
    },
    {
      title: "Does the use of AC cleaning help cool?",
      desc: "Yes, cleaning makes a noticeable difference. It can clean the dust and improve the cooling efficiency of the AC."
    },
    {
      title: "Are you providing the same-day AC repair in Al Mirdif?",
      desc: "Service can be arranged the same day depending on the issue and availability. Please reach out and let us know if you want to check."
    },
    {
      title: "Which AC brands do you repair?",
      desc: "We service Daikin, LG, Samsung, O General, Mitsubishi, Carrier, York, Trane, Gree, Panasonic and more."
    },
    {
      title: "What are the things involved in AC maintenance?",
      desc: "<strong>Maintenance includes:</strong><ul><li>Cleaning of filters</li><li>Inspection of coils</li><li>Drain line checks</li><li>Thermostat testing</li><li>Reviewing overall performance</li></ul>"
    },
    {
      title: "Should I get an Annual Maintenance Contract?",
      desc: "Absolutely, AMC will help you avoid significant issues and keep your air conditioner in top condition through regular maintenance."
    },
    {
      title: "Why does my AC make strange noises?",
      desc: "Loose parts, problems with the fan motor, or dirt accumulation are the typical causes. A technician can find and fix the cause."
    },
    {
      title: "What is the duration of time for AC maintenance?",
      desc: "Most maintenance tasks require 1 hour, but it depends on the number of units."
    },
    {
      title: "Can regular servicing lower my electricity bills?",
      desc: "A clean and well-tuned AC is indeed more energy-efficient and can prove to be a significant cost-saver in your monthly electricity bills."
    },
    {
      title: "Should I replace or repair my old AC?",
      desc: "If repairs are frequent and costly, replacement could be the better option. We can do a scan of your system and make suggestions."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Mirdif.",
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
