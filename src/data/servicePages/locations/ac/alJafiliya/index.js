const seoData = {
  title: "Same-Day AC Servicing in Al Jafiliya | Air Conditioner Repairs",
  description:
    "Get reliable and professional AC repair services in Al Jafiliya, Dubai. We specialize in the maintenance of split ACs and window air conditioners near you in Dubai",
  keywords:
    "AC Repair in Al Jafiliya, Air Conditioning Service in Al Jafiliya, Air Con Maintenance & AC Installation in Al Jafiliya",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-jafiliya/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Same-Day AC Servicing in Al Jafiliya | Air Conditioner Repairs",
    description:
      "Get reliable and professional AC repair services in Al Jafiliya, Dubai. We specialize in the maintenance of split ACs and window air conditioners near you in Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-jafiliya/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day AC Servicing in Al Jafiliya | Air Conditioner Repairs",
    description:
      "Get reliable and professional AC repair services in Al Jafiliya, Dubai. We specialize in the maintenance of split ACs and window air conditioners near you in Dubai",
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

const heroData = {  title: "Cost-Effective AC Repair and Maintenance Same-Day Services in Al Jafiliya, Dubai | AC Service Near Me",
  paragraph:
    "Al Jafiliya is an area in Dubai with many apartments, villas, offices and government buildings. People work here, and because it's very hot, Air conditioners run all day. If your AC suddenly stops cooling, it can make your home or office uncomfortable fast.",
  paragraphs: [
    "Al Jafiliya is an area in Dubai with many apartments, villas, offices and government buildings. People work here, and because it's very hot, Air conditioners run all day. If your AC suddenly stops cooling, it can make your home or office uncomfortable fast.",
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
      description: "Fast assistance across Al Jafiliya.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Cost-Effective AC Repair and Maintenance Same-Day Services in Al Jafiliya, Dubai | AC Service Near Me",
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
    "FAJ Technical Services L.L.C has been maintaining ACs in Dubai since 2010. Our technicians provide services such as AC cleaning, AC maintenance, and installing ACs for homes, offices and businesses in Al Jafiliya and nearby areas.",
  ],
};

const areaOverviewData = {
  id: "area-ac-services",
  title: "Who Provides AC Repair Services Near Me in Al Jafiliya?",
  paragraphs: [
    "When an HVAC suddenly breaks down, you need to find a company to fix it. FAJ Technical Services L.L.C is a company that provides air conditioner repair and maintenance services for apartments, villas, offices, restaurants, retail shops, schools and commercial buildings in Al Jafiliya.",
    "The technicians at FAJ Technical Services L.L.C look at every problem with the AC carefully and then come up with simple solutions that help the air conditioner work better for a longer time.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who Provides AC Repair Services Near Me in Al Jafiliya?",
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
  id: "transparent-pricing",  title: "Air Conditioning Service and Repair Cost in Al Jafiliya Dubai",
  description:
    "We provide transparent, competitive pricing for all residential and commercial HVAC services across Al Jafiliya. Check our standard rates below:",
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
        alt: "AC Inspection in Al Jafiliya",
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
        alt: "AC Cleaning Service in Al Jafiliya",
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
        alt: "AC Maintenance in Al Jafiliya",
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
    "Protect your Al Jafiliya property year-round with our Annual Maintenance Contracts (AMC). Regular scheduled maintenance prevents catastrophic mid-summer failures, lowers power consumption, and ensures priority dispatch.",
  plans: [
    {
      id: "basic",
      name: "Standard AMC",
      price: "AED 1,200",
      cadence: "year",
      description:
        "Essential scheduled maintenance for apartments and small residences across Al Jafiliya.",
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
        "Complete peace of mind for villas, luxury residences, and offices in Al Jafiliya with priority response.",
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
    "Sometimes the AC keeps running, but the room still feels warm. Different parts inside the system can affect cooling performance.",
  causes: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Dirty condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Restricted airflow"
  ],
  conclusion:
    "A proper inspection helps locate the exact issue so it can be repaired before more damage occurs.",
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
    "Most of the HVAC systems give early warning signs before a serious fault develops.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Weak cooling performance" },
    { title: "Poor airflow from vents" },
    { title: "Water leaking from the indoor unit" },
    { title: "Unusual noises while running" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",  title: "Emergency AC Repair Service in Al Jafiliya",
  description:
    "Air conditioners can break down unexpectedly during hot Dubai weather. Fast assistance is available for AC not cooling, water leakage, electrical faults, thermostat problems, weak airflow, compressor breakdown, and unusual noises. We provide fast response for residential and commercial customers throughout Al Jafiliya.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Jafiliya",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Jafiliya",
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
  id: "ac-maintenance-importance",  title: "Why is AC Maintenance Service Important in Al Jafiliya?",
  paragraphs: [
    "Air conditioners in Al Jafiliya run continuously for many months of the year due to high outdoor temperatures. Regular servicing keeps the equipment working properly and prevents sudden breakdowns.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Jafiliya?",
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
  id: "maintenance-importance-cards",  title: "Key Benefits of Regular AC Maintenance in Al Jafiliya",
  cards: [
    {
      icon: "thermometer-sun",
      title: "Extreme Summer Temperatures",
      description: "Summer temperatures in Dubai can reach above 45°C. Timely maintenance ensures your cooling system can handle continuous operation during peak heat."
    },
    {
      icon: "coins",
      title: "Better Energy Efficiency",
      description: "Clean filters and clean coils help the AC cool faster and consume less electricity, lowering monthly energy costs."
    },
    {
      icon: "clock-fast",
      title: "Longer Equipment Life",
      description: "Servicing internal parts reduces wear and tear on key components, extending the life of your cooling system."
    },
    {
      icon: "wind",
      title: "Cleaner Indoor Air",
      description: "Regular cleaning removes dust, dirt and mould from the system, helping keep indoor air fresh and healthy for your family and colleagues."
    },
    {
      icon: "heart-hand",
      title: "Consistent Comfort",
      description: "A well-maintained AC provides balanced airflow and steady temperatures throughout every room in your home or office."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  id: "common-ac-problems",  title: "Most Common AC Problems in Al Jafiliya",
  description:
    "Our certified technicians in Al Jafiliya quickly diagnose and resolve all major residential and commercial air conditioning issues:",
  items: [
    {
      id: "prob-1",
      number: "01",
      title: "Weak Airflow",
      description: "Dirty filters and obstructed ductwork can significantly reduce airflow from vents. Regular filter cleaning helps restore proper circulation.",
      icon: "wind"
    },
    {
      id: "prob-2",
      number: "02",
      title: "Warm Air from Vents",
      description: "Low refrigerant levels, compressor failure or improper thermostat settings can cause the AC to blow lukewarm air.",
      icon: "snowflake-slash"
    },
    {
      id: "prob-3",
      number: "03",
      title: "Unusual Sounds",
      description: "Grinding, buzzing, or squealing noises often indicate loose fan belts, worn bearings, or motor problems.",
      icon: "volume-2"
    },
    {
      id: "prob-4",
      number: "04",
      title: "Bad Odours",
      description: "Musty or burning smells suggest moisture buildup, mould in the evaporator coil, or wiring issues that require prompt inspection.",
      icon: "alert-triangle"
    },
    {
      id: "prob-5",
      number: "05",
      title: "Constant Running",
      description: "When an AC runs non-stop without reaching the set temperature, it may have low refrigerant, a dirty coil, or an undersized unit.",
      icon: "zap-off"
    },
    {
      id: "prob-6",
      number: "06",
      title: "High Indoor Humidity",
      description: "An AC that fails to dehumidify properly leaves rooms feeling muggy and sticky, indicating coil or drainage trouble.",
      icon: "droplet-slash"
    },
    {
      id: "prob-7",
      number: "07",
      title: "Water Leaking",
      description: "Clogged condensate drain lines and frozen coils can cause water to pool around the indoor unit.",
      icon: "droplets"
    },
    {
      id: "prob-8",
      number: "08",
      title: "High Power Bills",
      description: "An inefficient air conditioner works harder to cool your home, leading to unexpected increases in monthly electricity expenses.",
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
  title: "Our Air Conditioning Services in Al Jafiliya",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "When your Air Conditioning system has problems with cooling or the compressor is not working, there are issues, the thermostat is faulty, or there is water leakage, our AC repair service can help."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We clean your AC system well. This means we remove dust, dirt, mould and blocked debris from the filters, coils and drainage pipes, and make the air inside your home or office cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance helps your air conditioner run smoothly and stay in good condition. It also helps spot problems early, saves electricity and stops your AC from breaking down unexpectedly."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install AC units for homes and offices. We follow the right steps so your AC works well and cools the room properly from day one."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC contracts give you planned maintenance throughout the year, quick support and peace of mind knowing your AC will keep working well all the time."
    }
  ],
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",  title: "Our Air Conditioning Services in Al Jafiliya",
  cards: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "When your Air Conditioning system has problems with cooling or the compressor is not working, there are issues, the thermostat is faulty, or there is water leakage, our AC repair service can help."
    },
    {
      icon: "spray-can",
      title: "AC Cleaning Service",
      description: "We clean your AC system well. This means we remove dust, dirt, mould and blocked debris from the filters, coils and drainage pipes, and make the air inside your home or office cleaner."
    },
    {
      icon: "fan",
      title: "AC Maintenance Service",
      description: "Regular AC maintenance helps your air conditioner run smoothly and stay in good condition. It also helps spot problems early, saves electricity and stops your AC from breaking down unexpectedly."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description: "We install AC units for homes and offices. We follow the right steps so your AC works well and cools the room properly from day one."
    },
    {
      icon: "file-text",
      title: "Annual Maintenance Contract (AMC)",
      description: "Our AMC contracts give you planned maintenance throughout the year, quick support and peace of mind knowing your AC will keep working well all the time."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {  title: "Benefits Of Regular AC Service and Maintenance in Al Jafiliya",
  city: "Al Jafiliya",
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
        "Consistent temperatures and reliable cooling during peak Al Jafiliya summer heat.",
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
        "Choose a day and time for your AC repair near me, Al Jafiliya Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Jafiliya. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Jafiliya.",
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
    "Our certified technicians carry diagnostic tools and replacement parts for all major international HVAC brands in Al Jafiliya:",
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
      title: "Air Conditioning Systems Serviced Across Al Jafiliya:",
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
    "All AC repair and maintenance work in Al Jafiliya is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Jafiliya",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Jafiliya",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Jafiliya",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Jafiliya",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Jafiliya",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Jafiliya",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC in Al Jafiliya. Find tips to cut costs and stay cool all summer long!",
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
      role: "Al Jafiliya Resident",
      quote:
        "The technician arrived within 90 minutes when our split AC broke down in the middle of summer. Excellent service, transparent pricing, and cool air restored immediately.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      role: "Property Manager, Al Jafiliya",
      quote:
        "We have an AMC contract with FAJ for our residential units. Routine deep cleaning and pressure washing keep tenant complaints to zero. Outstanding team.",
      rating: 5,
    },
    {
      name: "Khalfan Al Suwaidi",
      role: "Villa Owner, Al Jafiliya",
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
  id: "location-faqs",  title: "AC Repair and Maintenance FAQs in Al Jafiliya",
  description:
    "Got questions about AC repair, cleaning, or routine maintenance in Al Jafiliya? Browse our most common answers below:",
  items: [
    {
      title: "How often should I service my AC in Al Jafiliya?",
      desc: "You should get your AC checked every 3 to 6 months. Doing this keeps the cooling strong and stops small problems from turning into big ones."
    },
    {
      title: "Why is my AC not cooling properly in Al Jafiliya?",
      desc: "<strong>There are a few reasons why this happens:</strong><ul><li>Dirty air filters</li><li>Low refrigerant gas</li><li>Blocked condenser coils</li><li>Poor airflow</li></ul>"
    },
    {
      title: "Is same-day AC repair available in Al Jafiliya?",
      desc: "Sometimes yes, it depends on how busy the technicians are and what needs to be fixed."
    },
    {
      title: "Which AC system is suitable for apartments in Al Jafiliya?",
      desc: "Split AC systems are a good choice for apartments. They run quietly, cool well and do not use too much electricity."
    },
    {
      title: "What causes water leakage from an AC unit?",
      desc: "<strong>Water usually leaks because of these things:</strong><ul><li>Blocked drain pipe</li><li>Frozen evaporator coil</li><li>Dirty air filter</li></ul>"
    },
    {
      title: "Do you provide AC services for offices in Al Jafiliya?",
      desc: "Yes! We do. FAJ Technical Services L.L.C offers repair, maintenance, cleaning and installation for offices, apartments, villas, shops and commercial buildings all over Al Jafiliya."
    },
    {
      title: "What is included in an AC maintenance service?",
      desc: "<strong>A typical maintenance visit covers:</strong><ul><li>Filter cleaning</li><li>Coil inspection</li><li>Drain line cleaning</li><li>Thermostat testing</li><li>Cooling performance check</li></ul>"
    },
    {
      title: "Which AC brands do you repair in Al Jafiliya?",
      desc: "<strong>Our technicians work on all major brands:</strong><ul><li>Daikin</li><li>LG</li><li>Samsung</li><li>Carrier</li><li>York</li><li>Mitsubishi</li><li>O General</li><li>Gree</li><li>Panasonic and many other well-known brands.</li></ul>"
    },
    {
      title: "Why is my AC making strange noises?",
      desc: "<strong>Noises usually come from:</strong><ul><li>Loose internal parts</li><li>Fan motor problems</li><li>Worn components</li></ul>"
    },
    {
      title: "Can AC cleaning improve indoor air quality?",
      desc: "Yes, A proper clean gets rid of dust, mould and bacteria so the air in your home stays cleaner and improved."
    },
    {
      title: "How long does AC maintenance usually take?",
      desc: "Most visits take about one hour. But it depends on the type of AC, its condition and how many units need attention."
    },
    {
      title: "Do you provide a warranty on AC services?",
      desc: "Yes, our cleaning and maintenance services come with a 60-day warranty."
    },
    {
      title: "Can regular AC servicing help lower electricity bills?",
      desc: "A well-maintained air conditioner operates more efficiently and consumes less power each month."
    },
    {
      title: "How can I book AC service in Al Jafiliya?",
      desc: "Just get in touch with FAJ Technical Services L.L.C Tell us your location, and when you are free then we will set up a visit."
    },
    {
      title: "Can I run my AC 24 hours a day in Dubai?",
      desc: "Yes, but the system will wear out faster if you never give it a break. Regular servicing becomes even more important when the AC runs continuously for long periods."
    },
    {
      title: "Why does my AC take too long to cool the room?",
      desc: "The filters might be dirty, the gas might be low or the unit might be too small for the room. A technician can check the system and suggest the right solution."
    }
  ],
};

const bookingData = {
  id: "booking-section",  title: "Book An Appointment",
  description:
    "Fill in the form below or call our 7-day hotline for immediate service dispatch across Al Jafiliya.",
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
