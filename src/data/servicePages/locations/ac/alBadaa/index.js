const seoData = {
  title: "Best AC Repair Company in Al Badaa | AC Servicing Near Me",
  description:
    "Fast AC repair and services in Al Badaa, Dubai, call 043300002. FAJ offers help with split and central air conditioning cleaning and error fixing near you",
  keywords:
    "AC Service Al Badaa, AC Repair Al Badaa, Air Conditioning Service Al Badaa, Air Conditioner Repair Al Badaa, Split AC Service Al Badaa, Central AC Service Al Badaa, Aircon Cleaning Al Badaa, Air Conditioner Maintenance Al Badaa",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-badaa/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Repair Company in Al Badaa | AC Servicing Near Me",
    description:
      "Fast AC repair and services in Al Badaa, Dubai, call 043300002. FAJ offers help with split and central air conditioning cleaning and error fixing near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-badaa/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair Company in Al Badaa | AC Servicing Near Me",
    description:
      "Fast AC repair and services in Al Badaa, Dubai, call 043300002. FAJ offers help with split and central air conditioning cleaning and error fixing near you",
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
  title: "Affordable AC Repair and Maintenance Services in Al Badaa, Dubai",
  paragraph:
    "Al Badaa is a busy place where people live and work. There are lots of apartments, villas, offices and shops. The air conditioning in Al Badaa is always on every single day. When the air conditioning system breaks down it gets really hot inside the apartments, villas and offices. This is especially true during the summer, in Dubai, when it is hot outside.",
  paragraphs: [
    "Al Badaa is a busy place where people live and work. There are lots of apartments, villas, offices and shops. The air conditioning in Al Badaa is always on every single day. When the air conditioning system breaks down it gets really hot inside the apartments, villas and offices. This is especially true during the summer, in Dubai, when it is hot outside.",
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
      description: "Fast assistance across Al Badaa.",
    },
  ],
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Affordable AC Repair and Maintenance Services in Al Badaa, Dubai",
    width: 733,
    height: 550,
  },
};

const overviewData = {
  paragraphs: [
    {
  "parts": [
    {
      "text": "FAJ Technical Services L.L.C",
      "href": "/"
    },
    " has been providing professional air conditioning services across Dubai since 2010. Our technicians provide ",
    {
      "text": "AC repair",
      "href": "/services/air-conditioning-repair/ac-service/"
    },
    " , AC cleaning, AC maintenance, and AC installation services for homes or businesses in Al Badaa and nearby areas."
  ]
},
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "al-badaa-ac-services",
  title: "Who Provides Reliable AC Repair Services in Al Badaa?",
  paragraphs: [
    "Choosing the right AC company becomes important when cooling problems start affecting your home or workplace. FAJ Technical Services L.L.C provides air conditioner repair, maintenance and cleaning services for apartments, villas, offices, restaurants, shops, and commercial buildings throughout Al Badaa.",
    "Our technicians are experienced in handling everything from small repairs to complete system troubleshooting and major component replacement.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who Provides Reliable AC Repair Services in Al Badaa?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Al Badaa.",
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
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
  ],
  footnote:
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Al Badaa.",
};

// Fixed to match Image 1 (Left Image + Right Text with CTA buttons, NO items grid)
const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "What's the Reason My AC is running but not cooling?",
  description:
    "An AC unit can continue running while still failing to cool the room properly. Several parts inside the system work together to produce cool air if a fault occurs in any one of them can reduce performance.",
  paragraphs: [
    "Some common reasons include: Dirty air filters, Low refrigerant levels, Blocked condenser coils, Thermostat problems, Compressor faults, Electrical issues, Restricted airflow."
  ],
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "What's the Reason My AC is running but not cooling?",
    width: 853,
    height: 853,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonSignsData = {
  id: "ac-maintenance-signs",
  title: "How Can You Know Your AC Needs Servicing?",
  intro:
    "Most AC units show warning signs before they stop working completely.",
  items: [
    { title: "Increase the electricity bills" },
    { title: "Poor cooling performance" },
    { title: "Weak airflow from vents" },
    { title: "Water dripping from the unit" },
    { title: "Strange noises during operation" }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Al Badaa",
  description:
    "Air conditioning systems can break down without warning especially when it's really hot outside, in the summer. Quick fixes help get things back to normal and stop more problems from happening. Emergency assistance is available for:",
  items: [
    "AC not cooling",
    "Water leakage",
    "Compressor failure",
    "Electrical faults",
    "Thermostat issues",
    "Weak airflow",
    "Strange noises",
    "Complete system shutdown"
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Al Badaa",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Badaa",
    width: 600,
    height: 400,
  },
  variant: "framed",
  blockInteraction: true,
  allowFullScreen: false,
  parameters: {
    autoplay: "1",
    mute: "0",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    showinfo: "0",
    loop: "1",
    playlist: "prUR0-lZlzg",
    playsinline: "1",
    cc_load_policy: "0",
    disablekb: "1",
  },
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why Is AC Maintenance Important in Dubai?",
  description:
    "Air conditioning systems in Dubai work every time. Regular checks help them work better and reduce breakdowns.",
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why Is AC Maintenance Important in Dubai?",
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
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN AL BADAA",
  items: [
    {
      icon: "ac-sun",
      badge: "Extreme Climate",
      title: "Extreme Summer Temperatures",
      description:
        "Dubai gets very hot in summer with temperatures above 40°C. Regular maintenance helps AC systems keep working well when they are used a lot.",
    },
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Better Energy Efficiency",
      description:
        "When AC equipment is clean and well-maintained, it uses less electricity. This helps lower your utility bills every month.",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Equipment Life",
      description:
        "Regular servicing reduces wear on major parts, which helps delay replacements.",
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Healthier Indoor Air",
      description:
        "Cleaning the system and removing dust improves the air quality inside. This is good for families, employees and visitors.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Improved Indoor Comfort",
      description:
        "A maintained air conditioner gives stable temperatures and balanced airflow throughout the property.",
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  title: "Most Common AC Problems",
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description:
        "Rooms may be uncomfortable due to blocked filters or weak airflow that reduces air circulation.",
    },
    {
      title: "Warm Air",
      description:
        "The presence of warm air can lead to issues with the refrigerant, thermostat, or compressor.",
    },
    {
      title: "Strange Noises",
      description:
        "External sounds like grinding, rattling or buzzing are usually considered to be the indication of loose or damaged internal parts.",
    },
    {
      title: "Bad Smells",
      description:
        "Odors can be a result of dust buildup, bacteria, or mold developing inside the system/",
    },
    {
      title: "Frequent Cycling",
      description:
        "It is possible that irregular shutting and opening can signal thermostat or electrical issues.",
    },
    {
      title: "High Humidity",
      description:
        "Even with the air conditioning running, you may still fail to properly remove indoor moisture when humidity levels are high.",
    },
    {
      title: "Water Leakage",
      description:
        "Blocking drainage lines and frozen coils are common causes of AC water leakage.",
    },
    {
      title: "Increased Energy Bills",
      description:
        "An inefficient AC unit frequently consumes more electricity and performs harder than necessary.",
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedData = {
  id: "services-offered-overview",
  title: "Who provides complete air conditioning services in Al Badaa?",
  description:
    "Professional air conditioning solutions tailored for residential, commercial and retail properties in Al Badaa.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-services-component-new",
    src: "/img/ac-service-page/ac-services-component-new.webp",
    alt: "Who provides complete air conditioning services in Al Badaa?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "Who provides complete air conditioning services in Al Badaa?",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description:
        "Some issues such as Cooling failures, electrical faults, thermostat problems, compressor issues and water leakage, can all affect system performance. Professional repairs help restore cooling quickly and safely.",
    },
    {
      icon: "wind",
      title: "AC Cleaning Service",
      description:
        "Cleaning air conditioners includes clearing filters, coils, and drainage systems of dust, grime, mold, and debris. This improves indoor air quality and enhances air flow.",
    },
    {
      icon: "shield-check",
      title: "AC Maintenance Service",
      description:
        "Regular maintenance keeps your system running smoothly throughout the year while safeguarding its vital components. It's your best defense against unexpected issues!",
    },
    {
      icon: "settings",
      title: "AC Installation Service",
      description:
        "Installation services are available for residential and commercial air conditioning systems. Every unit is installed according to manufacturer recommendations for reliable long-term operation.",
    },
    {
      icon: "clock",
      title: "Annual Maintenance Contract (AMC)",
      description:
        "AMC's plans include regular inspections, proactive maintenance, and prioritized support all year round. This ensures that your experience remains smooth and hassle-free, giving you peace of mind.",
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  title: "Benefits Of Regular AC Service and Maintenance in Al Badaa",
  city: "Al Badaa",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" },
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "Cooling Efficiency",
      description:
        "We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.",
      icon: "snowflake",
    },
    {
      id: "ac-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.",
      icon: "ac-air-filter",
    },
    {
      id: "ac-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.",
      icon: "diagnostics",
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "Thermostat Check",
      description:
        "We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.",
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
        "Choose a day and time for your AC repair near me, Al Badaa Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Badaa. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Badaa.",
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
    "Our technicians service and repair all major air-conditioning makes, sourcing genuine OEM replacement parts for lasting performance.",
  brands: [
    {
      name: "LG",
      description:
        "Split, multi-split and VRF servicing with factory diagnostics and inverter board repair.",
      href: "/services/air-conditioning-repair/brands/lg/",
    },
    {
      name: "Samsung",
      description:
        "WindFree and commercial cassette repair, sensor calibration and compressor servicing.",
      href: "/services/air-conditioning-repair/brands/samsung/",
    },
    {
      name: "York",
      description:
        "Chilled-water fan coil servicing, package unit repair and commercial chiller maintenance.",
      href: "/services/air-conditioning-repair/brands/york/",
    },
    {
      name: "Daikin",
      description:
        "VRV and split system troubleshooting, electronic expansion valve repair and seasonal tuning.",
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
      title: "Air Conditioning Systems Serviced Across Al Badaa:",
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
    "All AC repair and maintenance work in Al Badaa is backed by our workmanship warranty and performed using genuine OEM or high-grade replacement parts.",
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
      alt: "Ac Service in Al Badaa",
    },
    {
      id: "AcService/slide2",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide2/public",
      alt: "AC Repair in Al Badaa",
    },
    {
      id: "AcService/slide3",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide3/public",
      alt: "AC Maintenance in Al Badaa",
    },
    {
      id: "AcService/slide4",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide4/public",
      alt: "AC Cleaning in Al Badaa",
    },
    {
      id: "AcService/slide5",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide5/public",
      alt: "AC Fixing in Al Badaa",
    },
    {
      id: "AcService/slide6",
      src: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/AcService/slide6/public",
      alt: "AC Gas Filling in Al Badaa",
    },
  ],
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
};

const repairPriceData = {
  id: "pricing-overview",
  title:
    "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description:
    "Upfront diagnostic fees and itemised quotations before any work commences. No surprise charges, ever.",
  actionLabel: "Get a Quick Quote",
  actionHref: "#get-quote",
};

const testimonialsData = {
  id: "testimonials",
  title: "Customer Reviews",
  description:
    "Real feedback from residential property owners, commercial facility managers and tenants across Al Badaa.",
  items: [
    {
      author: "Rashid Al-Maktoum",
      role: "Apartment Owner, Al Badaa",
      content:
        "Our split AC in the master bedroom was blowing warm air in mid-July. FAJ dispatched a technician within 2 hours. He identified a failed capacitor, replaced it from his van stock, and our room was ice cold again. Brilliant service!",
      rating: 5,
    },
    {
      author: "Priya Sharma",
      role: "Tenant, Al Badaa",
      content:
        "Water started leaking from our ceiling FCU, soaking the living room rug. Called FAJ and their technician cleared a severely blocked condensate trap and sanitised the tray. Neat, professional and polite team.",
      rating: 5,
    },
    {
      author: "David Miller",
      role: "Villa Resident, Al Badaa",
      content:
        "Signed an annual maintenance contract for our 4-bedroom villa. The twice-a-year PPM service has visibly dropped our DEWA electricity bill and the AC smells clean and fresh. Well worth the investment.",
      rating: 5,
    },
  ],
};

const newsData = {
  id: "news-updates",
  title: "NEWS & UPDATES",
  description:
    "Expert tips, seasonal maintenance advice and HVAC technology guides from our senior engineers in Dubai.",
  items: [
    {
      title: "How Often Should You Service Your AC in Dubai?",
      excerpt:
        "Discover why Dubai's dusty, humid climate demands a 3-to-4 month preventive maintenance cycle to prevent sudden compressor burnouts.",
      date: "October 2026",
      href: "/blog/",
    },
    {
      title: "Signs Your AC Thermostat Needs Immediate Replacement",
      excerpt:
        "Learn how erratic temperature swings, short cycling and unresponsive touchscreens indicate a failing digital thermostat.",
      date: "September 2026",
      href: "/blog/",
    },
    {
      title: "Inverter vs Non-Inverter AC: Which Saves More in the UAE?",
      excerpt:
        "A deep dive into power draw metrics comparing variable-speed inverter compressors with traditional fixed-speed units under extreme ambient heat.",
      date: "August 2026",
      href: "/blog/",
    },
  ],
};

const faqsData = {
  id: "location-faqs",
  title: "AC Repair and Maintenance FAQs in Al Badaa",
  description:
    "Find answers to common questions about air conditioning repair, servicing, and maintenance in Al Badaa.",
  items: [
    {
      question: "How often should I get my air conditioner serviced in Al Badaa?",
      answer:
        "Most home air conditioning systems need to be looked at every 6 months. It really depends on how much you use it and the weather outside.",
    },
    {
      question: "Do you fix air conditioners for offices and other commercial properties?",
      answer:
        "Yes, you can get your air conditioner fixed for offices, restaurants, shops, clinics and other commercial buildings in Al Badaa.",
    },
    {
      question: "Can I get my air conditioner fixed on the day in Al Badaa?",
      answer:
        "You might be able to get same-day service. It depends on when the technicians are available and what needs to be fixed on your air conditioner.",
    },
    {
      question: "Why is water leaking from my air conditioner?",
      answer:
        "There are some reasons this can happen including:Blocked drain pipesFrozen evaporator coilsDirty air filters",
    },
    {
      question: "What is included in the AC maintenance service?",
      answer:
        "Maintenance usually includes: Filter cleaningCoil inspectionDrain cleaningThermostat testingPerformance checks",
    },
    {
      question: "Which AC brands do you service?",
      answer:
        "Our technicians work with major brands, including:DaikinCarrierLGSamsungYorkMitsubishiGree, and many others.",
    },
    {
      question: "Is it worth getting a maintenance contract for my air conditioner system?",
      answer:
        "Yes, getting a maintenance contract every year really helps reduce the number of times your air conditioner breaks down. It also helps your air conditioner system work better in the long run.",
    },
    {
      question: "Why is my air conditioner making so much noise?",
      answer:
        "Some common reasons include:Loose internal componentsFan motor issuesDirt buildup inside the system",
    },
    {
      question: "Can AC cleaning improve indoor air quality?",
      answer:
        "Yes, removing dust and pollutants from the system helps create cleaner indoor air.",
    },
    {
      question: "How long does an AC maintenance visit usually take?",
      answer:
        "Most maintenance visits take around one hour depending on the condition and number of units.",
    },
    {
      question: "Do you provide warranty on AC services?",
      answer:
        "Yes, cleaning and maintenance services include a 60-day service warranty.",
    },
    {
      question: "Can regular servicing reduce electricity bills?",
      answer:
        "Yes, efficient air conditioning systems use less energy and often result in lower monthly electricity costs.",
    },
    {
      question: "How can I book an AC service appointment?",
      answer:
        "Simply contact our team via WhatsApp and Gmail with your location, preferred time and a suitable visit can be arranged.",
    }
  ],
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Fill in your details below and our service coordinators will confirm your booking slot within 15 minutes.",
  submitLabel: "Confirm Service Request",
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
