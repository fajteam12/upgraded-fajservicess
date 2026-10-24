const seoData = {
  title: "Emergency AC Repair and Service in Al Karama | Aircon Fixing",
  description:
    "Best AC repair and service in Al Karama. We also offer AC compressor replacement, AC motor changing, and AC gas refill, with AC spare parts warranty",
  keywords:
    "AC Services In Al Karama, AC Maintenance, AC Repair, Air Conditioner Service, Air Conditioner Repair, Air Conditioner Maintenance, Central AC Service, Split AC Service, Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-karama/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Emergency AC Repair and Service in Al Karama | Aircon Fixing",
    description:
      "Best AC repair and service in Al Karama. We also offer AC compressor replacement, AC motor changing, and AC gas refill, with AC spare parts warranty",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-karama/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency AC Repair and Service in Al Karama | Aircon Fixing",
    description:
      "Best AC repair and service in Al Karama. We also offer AC compressor replacement, AC motor changing, and AC gas refill, with AC spare parts warranty",
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
  title: "Specialist Split AC Repair and Central AC Servicing in Al Karama, Dubai | AC Service Near Me",
  paragraph:
    "Hot indoor spaces and strong summer heat can be really tough to deal with. It is even worse when the air quality is poor. This makes daily life uncomfortable. We want to help you have rooms and fresh airflow. We also want to help you sleep better throughout the year.",
  paragraphs: [
    "Hot indoor spaces and strong summer heat can be really tough to deal with. It is even worse when the air quality is poor. This makes daily life uncomfortable. We want to help you have rooms and fresh airflow. We also want to help you sleep better throughout the year.",
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
      description: "Fast assistance across Al Karama.",
    },
  ],
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Specialist Split AC Repair and Central AC Servicing in Al Karama, Dubai",
    width: 733,
    height: 550,
  },
};

const overviewData = {
  paragraphs: [
    {
      parts: [
        {
          text: "FAJ Technical Services L.L.C",
          href: "/",
        },
        " has been serving Dubai since 2010. We do ",
        {
          text: "AC repair",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        ", installation, maintenance, and cleaning in Al Karama and the areas around it. Our technicians are very good at what they do. They work on AC systems in homes and offices. They respond fast and do a great job. We provide services for your air conditioning system so you can get a cool and comfortable space.",
      ],
    },
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "al-karama-ac-services",
  title: "Who provides the Trusted AC repair services in Al Karama?",
  paragraphs: [
    "If you need to fix your air conditioner in Al Karama you can trust FAJ Technical Services L.L.C We fix air conditioners for homes, offices, shops and big commercial buildings across Dubai and the UAE. Our workers are very good at fixing air conditioners because they have done it for a long time. They can fix any problem with your air conditioner, such as if it's not cool enough or if it is leaking water. We do not just fix the problem for now we make sure it does not happen again.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the Trusted AC repair services in Al Karama?",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Al Karama.",
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
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Al Karama.",
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "What Is The Reason Behind My Ac Not Cooling?",
  description:
    "It is very common for air conditioners to stop cooling in Dubai because we use them a lot. If your air conditioner is running but not cooling, there could be reasons.",
  paragraphs: [
    "Some common reasons are: Dirty Filters, Not enough refrigerant gas, Blocked or dirty coils, Thermostat problem, Compressor issue, Electrical problem, and Poor airflow.",
    "If you call a professional they can find the problem and fix it before it gets worse.",
  ],
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "AC Repair in Al Karama",
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
  title: "Which signs show the AC needs service?",
  intro:
    "If you see any of these problems you should call us away",
  items: [
    { title: "Your electricity bill is higher than usual" },
    { title: "Air conditioner is not cooling well" },
    { title: "Water is leaking from the unit" },
    { title: "The air is not cool enough" },
    { title: "The air is weak or making noise" },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Al Karama",
  description:
    "Air conditioners can sometimes break down unexpectedly, especially during hot weather, causing discomfort at home or in the office. In such situations, FAJ Technical Services L.L.C is here to help you quickly and restore your comfort without wasting time. Our team offers assistance for: air conditioner not cooling, air conditioner not starting, water leakage, electrical issues, thermostat failure, compressor breakdown, weak airflow, and strange noises.",
  frameTitle: "Air-conditioning repair and maintenance service video in Al Karama",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Karama",
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
  title: "What makes AC maintenance service essential in Al Karama?",
  description:
    "It is very important to take care of your air conditioner in Al Karama because of the hot weather. FAJ Technical Services L.L.C makes sure your air conditioner works all year round.",
  imageSide: "left",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Air Con Maintenance & AC Installation in Al Karama",
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
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN AL KARAMA",
  items: [
    {
      icon: "ac-sun",
      badge: "Extreme Climate",
      title: "Extreme Weather",
      description:
        "Dubai summers get really hot above 40°C. So your air conditioner needs check-ups to keep working well in the extreme heat. Your AC needs care to run.",
    },
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Energy Efficiency",
      description:
        "When you take care of your AC it uses less power. This helps lower your electricity bills every month.",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Equipment Life",
      description:
        "Regular servicing is good for your AC. It reduces wear and tear and helps your AC last longer. You avoid replacements.",
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Better Air Quality",
      description:
        "Cleaning your AC system is important, as it removes dust and dirt. This helps keep the air inside your home or office clean and healthy.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Improved Comfort",
      description:
        "Regular AC servicing is a must, as it ensures your AC cools steadily, and then you get performance. If you take care of your air conditioner it will keep you comfortable every day.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonProblemsData = {
  title: "Most Common Ac Problems",
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description:
        "When your AC gives weak airflow its mean clogged filters or blocked ducts. Regular AC cleaning in Dubai helps to make performance better and restore airflow.",
    },
    {
      title: "Warm Air",
      description:
        "Warm air is a common AC problem in the UAE and Dubai that needs inspection quickly. In case your AC is blowing warm air, it may have low refrigerant and compressor issues.",
    },
    {
      title: "Strange Noises",
      description:
        "If you're hearing strange noises like grinding, buzzing usually means that the AC parts are loose or damaged. Timely AC inspection, and repair can prevent costly breakdowns.",
    },
    {
      title: "Foul Odors",
      description:
        "Whether you notice a bad smell, it may be coming from your AC’s dirty filters. Experts AC cleaning in Dubai removes bacteria from filters and improves the air quality.",
    },
    {
      title: "Frequent Cycling",
      description:
        "Repeatedly switching on and off can cause thermostat or electrical issues. It is another reason to reduce cooling efficiency and increase AC repair costs over time.",
    },
    {
      title: "High Humidity Levels",
      description:
        "AC is not removing moisture properly when the humidity is high. It makes the home feel uncomfortable. It needs to check and maintain the AC or check the gas level.",
    },
    {
      title: "Water Leakage",
      description:
        "Water leaks from the AC usually happen because the drainage is blocked or the coils are frozen. If you get AC repair in Dubai, you can stop damage to your property.",
    },
    {
      title: "High Energy Bills",
      description:
        "Your electricity bills are rising, which means your AC is working harder than usual. If your filters are dirty or you don't maintain them, it uses a lot of power.",
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
  title: "Best Air Conditioning Services in Al Karama",
  description:
    "Are you searching for trusted air conditioning services in Al Karama? FAJ Technical Services L.L.C provides top-rated AC repair, cleaning, maintenance, and installation solutions for homes, residential apartments, offices, and commercial properties.",
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Best Air Conditioning Services in Al Karama",
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
  id: "ac-services-offered-cards",
  title: "Best Air Conditioning Services in Al Karama",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "We fix all kinds of air conditioner problems like cooling failure, water leakage, electrical issues, compressor problems, thermostat errors and weak airflow. We are the best choice for air conditioner repair in Al Karama.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Service",
      description:
        "We remove dust, dirt and mold from the filters, coils and pipes. Proper cleaning makes the air conditioner work better, uses energy more efficiently, and keep the air clean and healthy for you and your family.",
      actionLabel: "Book AC Cleaning",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "If you take care of your air conditioner regularly it will work better, use less energy and last much longer. Regular maintenance also helps prevent sudden breakdowns and expensive repairs and improves the air quality.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We install all types of AC including window, split, ducted and commercial units for homes and businesses. We follow all safety rules and manufacturer guidelines to ensure proper installation and reliable cooling performance.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "peace-of-mind",
      title: "Annual Maintenance Contract (AMC)",
      description:
        "Our AMC plans include regular checks, maintenance, priority service and scheduled servicing throughout the year. They keep your AC in good condition and prevent unexpected breakdowns. Save money and enjoy peace of mind.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "phone-support",
      title: "Emergency AC Repair in Al Karama",
      description:
        "Air conditioners can sometimes break down unexpectedly, especially during hot weather. Our team offers fast assistance for homes and businesses across Al Karama.",
      actionLabel: "Get Urgent Help",
    },
  ],
  bottomTitle: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "https://www.youtube.com/watch?v=pkO_jobGdBo",
        external: true,
      },
      " and repair in Al Karama, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!",
    ],
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  title: "Benefits Of Regular AC Service and Maintenance in Al Karama",
  city: "Al Karama",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" },
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We carry out a complete assessment of the cooling efficiency using a temperature gun.",
      icon: "snowflake",
    },
    {
      id: "ac-disinfect",
      number: "02",
      title: "DISINFECT COMPONENTS",
      description:
        "All hardware components are tested and disinfected, including filters and vents.",
      icon: "ac-air-filter",
    },
    {
      id: "ac-fan",
      number: "03",
      title: "FAN ASSESSMENT",
      description:
        "We ensure the fan works correctly with no blockages in the evaporator coil.",
      icon: "diagnostics",
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "We use a laser temperature gauge to ensure thermostats operate correctly.",
      icon: "ac-thermostat",
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "We ensure you get optimal air flow around each room as needed.",
      icon: "wind",
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our team provides vital feedback on your ACs health and any needed air con repair.",
      icon: "customer-feedback",
    },
  ],
};

const cleaningServiceData = {
  id: "ac-cleaning-service-overview",
  title: "Best AC Cleaning & AC Service in Dubai and Sharjah",
  description:
    "Discover top-rated AC cleaning, maintenance, and air conditioner repair services in Al Karama. Keep your space cool and comfortable with professional solutions tailored to your needs.",
  imageSide: "left",
  image: {
    id: "ac-service-page/best-ac-service",
    src: "/img/ac-service-page/best-ac-service.webp",
    alt: "AC Maintenance in Al Karama",
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
  id: "ac-cleaning-service-cards",
  title: "WHY REGULAR AC CLEANING IS ESSENTIAL",
  wide: true,
  cards: [
    {
      title: "Key to the Best AC Cleaning Services Near You",
      paragraphs: [
        "If you are looking for the best AC deep cleaning and services in Dubai and Sharjah, consider the following key aspects:",
      ],
      bulletColumns: 1,
      bullets: [
        {
          title: "COOLING & HEATING",
          text: "Stay comfortable all year round with balanced, dependable climate control.",
        },
        {
          title: "BETTER AIR QUALITY",
          text: "Reduce humidity, pollen, and dust to keep indoor air clean and healthy.",
        },
        {
          title: "PROTECT YOUR PROPERTY",
          text: "Prevent moisture damage and wear to sensitive electronics and furnishings.",
        },
        {
          title: "QUIET AND SECURE",
          text: "Optimal system performance eliminates the need to leave windows open.",
        },
      ],
    },
    {
      title: "Key Benefits",
      variant: "cyan-tint",
      paragraphs: [
        "Regular coils cleaning, air filter cleaning, and duct cleaning lowers electricity bills, extends the lifespan of equipment, prevents breakdowns, and eliminates unpleasant odours.",
      ],
      sections: [
        {
          title: "Signs Your AC Needs Cleaning",
          bulletColumns: 1,
          noDivider: true,
          bullets: [
            "Noticeably reduced airflow.",
            "Visible dust accumulation around vents.",
            "Unusual or musty odors.",
            "Increased DEWA bills.",
          ],
        },
      ],
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const whyChooseUsData = {
  id: "why-choose-faj-ac",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "",
  items: [
    {
      icon: "shield-check",
      badge: "Fast, Reliable Service",
      title: "Reliable, Priority, and Quick",
      description: {
        parts: [
          "You can count on ",
          {
            text: "efficient service",
            strong: true,
            href: "https://www.instagram.com/fajtechnicalservicesllc/",
            external: true,
          },
          "! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.",
        ],
      },
    },
    {
      icon: "peace-of-mind",
      badge: "Expert Planned Care",
      title: "Feeling Of Calm",
      description: {
        parts: [
          "With ",
          {
            text: "annual maintenance contract",
            strong: true,
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          ", you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.",
        ],
      },
    },
    {
      icon: "git-branch",
      badge: "Flexible Scheduling",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, Al Karama Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Al Karama. This is why most major brands trust us to handle their service and maintenance needs.",
    },
    {
      icon: "shield-dollar",
      badge: "Customer Value",
      title: "Great Value",
      description:
        "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.",
    },
    {
      icon: "clean-handshake",
      badge: "Dependable Care",
      title: "Trustworthy",
      description: {
        parts: [
          "Our ",
          {
            text: "skilled AC technicians",
            strong: true,
            href: "https://www.facebook.com/acrepairservices",
            external: true,
          },
          " are highly trained, and we provide excellent service for a variety of major AC brands efficiently.",
        ],
      },
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const defaultBrandDescription =
  "Professional repair, cleaning and planned maintenance for supported air-conditioning systems.";

const linkedBrands = [
  [
    "Daikin Air Conditioning Repair Services",
    "daikin",
    'Daikin air conditioning systems is a leading Japanese manufacturer. Founded in 1924, the company has built a strong international presence by focusing on quality, innovation, and effective communication.',
  ],
  [
    "Gree AC Repair and Service",
    "gree",
    "Gree Air Conditioning, founded in 1991 in Zhuhai, is a major global player in air conditioners. Initially focused on AC, it has expanded into home appliances & became China's largest AC manufacturer by 2000.",
  ],
  [
    "O General AC Repair and Maintenance",
    "o-general",
    "O General Air Conditioning, formerly part of Fujitsu General Limited, was founded in January, 1936, by Keijiro Yao as Yaou Shoten Co Ltd. The company has since manufactured appliances & air conditioners.",
  ],
  [
    "Mitsubishi AC Service and Repair",
    "mitsubishi",
    "Founded in 1954, Mitsubishi Air Conditioning has been producing residential & commercial HVAC (Mr. Slim & City Multi) AC systems for nearly 75 years & is renowned for its reliability & energy efficiency.",
  ],
  [
    "Samsung AC Maintenance Service",
    "samsung",
    "Samsung Air Conditioning is a leading brand recognised for innovation since 1969, specialising in air conditioner technology for homes & commercial HVAC systems (including VRF, multi-split & ducted systems).",
  ],
  [
    "York AC Servicing and Repair",
    "york",
    "YORK Air Conditioning was established in 1874 as the York Manufacturing Company in Pennsylvania. It began with ice-making machines & later expanded into HVAC, VRF, central AC systems & refrigeration.",
  ],
  [
    "LG AC Maintenance and Service",
    "lg",
    "LG Air Conditioning, a division of LG Electronics, has established a legacy of innovation since its founding in 1958. Once Korea's first consumer electronics company, it has evolved into a Smart Life Solution Company.",
  ],
  [
    "Trane HVAC Repair and Maintenance",
    "trane",
    "Trane Air Conditioning launched its first AC unit in 1931 & acquired General Electric's Central AC Division in 1982. This acquisition added key features, such as compressors & condensor coil, which are still in products today.",
  ],
  [
    "Carrier AC Repair and Services in Dubai",
    "carrier",
    "Carrier Air Conditioning has been leading the way in cooling & heating systems, central, split, package unit and VRF, Carrier Air Conditioning & Refrigeration since 1902, showcasing a long history of innovation & reliability.",
  ],
  [
    "Rheem AC Repair & Service Near Me",
    "rheem",
    "Rheem Air Conditioner, founded in 1925 in California, started with steel drums & later shifted to water heaters. In the 1940s & 1950s, the company expanded into AC systems. Now Rheem is leading global HVAC provider known for its innovative solutions.",
  ],
  [
    "SKM AC Maintenance Dubai",
    "skm",
    "S.K.M Air Conditioning LLC (SKM) was established in 1974 in Sharjah, United Arab Emirates, to manufacture heating, ventilation, and air conditioning (HVAC) equipment tailored for the harsh Gulf climates.",
  ],
  [
    "Lennox Air Conditioning Maintenance Service",
    "lennox",
    "Lennox Air Conditioning was established in 1895 when Dave Lennox built the first riveted-steel coal-fired furnace in Marshalltown, Iowa. The company later entered the air conditioning market in the early 1950s.",
  ],
  ["Aftron AC Maintenance Service", "aftron"],
  ["Bryant AC Repair Service Dubai", "bryant"],
  ["Blue Star AC Repair", "blue-star"],
  ["Supra AC Maintenance", "supra"],
  ["Toshiba AC Fix", "toshiba"],
  ["Super General AC Repair and Services in Dubai", "super-general"],
  ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Repair", "whirlpool"],
  ["Daewoo AC Cleaning", "daewoo"],
].map(([name, slug, description]) => ({
  name,
  href: `/services/air-conditioning-repair/brands/${slug}/`,
  ...(description ? { description } : {}),
}));

const brandsData = {
  title: "We specialise in air conditioning services for the following brands",
  description:
    "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  defaultItemDescription: defaultBrandDescription,
  searchLabel: "Search AC brands",
  searchPlaceholder: "Search air-conditioning brand",
  emptyMessage:
    "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Request AC Service",
  items: linkedBrands,
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Karama.",
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

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in All Types of AC Systems",
  columns: [
    {
      title: "Air Conditioning Systems Serviced Across Al Karama:",
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
            "We handle installation, repair, and maintenance of Ducted Split AC systems for full-property cooling.",
        },
        {
          title: "Ceiling AC",
          text:
            "Our technicians service Ceiling AC units to ensure quiet operation and consistent cooling performance.",
        },
        {
          title: "Inverter AC",
          text:
            "We specialize in Inverter AC systems, focusing on energy efficiency and smooth cooling performance.",
        },
      ],
    },
  ],
  footerNote: {
    label: "Air Conditioning Tip",
    text:
      "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Al Karama, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across Al Karama.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in Al Karama",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair in Al Karama",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance in Al Karama",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning in Al Karama",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing in Al Karama",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling in Al Karama",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "ac-energy-saving-tips",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
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
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description:
    "Customer feedback on FAJ air-conditioning repair and maintenance services in Al Karama.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Sara Malik",
      subtitle: "Al Karama Resident",
      description:
        "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in Al Karama.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Mansoori",
      subtitle: "Al Karama Resident",
      description:
        "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in Al Karama, highly recommended!",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Arjun Kumar",
      subtitle: "Resident",
      description:
        "I booked FAJ for HVAC services in Al Karama, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Shazia Sheikh",
      subtitle: "Homeowner",
      description:
        "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Ravi Mehta",
      subtitle: "Resident",
      description:
        "I used FAJ for AC cleaning service, and it really improved my air quality. The team worked efficiently, cleaned every part, and made my AC run like new again.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Waseem Aqdas",
      subtitle: "Homeowner",
      description:
        "Outstanding service from FAJ Technical! My AC wasn't cooling properly, but FAJ Technical came to the rescue. Quick response, friendly technician, and now my AC works perfectly. I highly recommend them!",
    },
  ],
};

const newsData = {
  id: "ac-news",
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
  id: "ac-service-faqs",
  title: "AC Repair and Maintenance FAQs in Al Karama",
  description:
    "Answers about AC servicing, cleaning, cooling faults and maintenance in Al Karama.",
  items: [
    {
      question: "What does AC service cost in Al Karama?",
      answer:
        "The cost of AC service in Al Karama depends on the type of AC and the problem. Usually an inspection is done first to find out the repair cost.",
    },
    {
      question: "Is AC repair available near me in Al Karama?",
      answer:
        "Yes, AC repair service is available in Al Karama. At FAJ Technical Services L.L.C our technicians can reach homes, offices and shops quickly.",
    },
    {
      question: "How long does AC repair take in Al Karama?",
      answer:
        "Small AC repairs are done on the same visit. Bigger issues may take longer to fix depending on the parts needed.",
    },
    {
      question: "What are the common problems with AC in Al Karama homes?",
      answer:
        "Common AC problems in Al Karama homes include:\n- Ineffective cooling due to dirty filters\n- Water leakage from a blocked drainage system\n- Gas leakage or low refrigerant",
    },
    {
      question: "Do you offer emergency AC repair in Al Karama?",
      answer:
        "Yes, we offer emergency AC service in Al Karama. This helps when your AC stops working in hot weather. Just call us, and we'll fix your AC problem at your doorstep on the same day.",
    },
    {
      question: "How often should I service my AC in Al Karama?",
      answer:
        "You should service your AC every 3 to 6 months. Regular service helps avoid breakdowns.",
    },
    {
      question: "What does AC maintenance service include?",
      answer:
        "Basic AC maintenance usually includes:\n- Cleaning filters and coils\n- Checking cooling performance\n- Inspecting parts",
    },
    {
      question: "Which AC brands do you service in Al Karama?",
      answer:
        "At FAJ Technical Services L.L.C we service all AC brands in Al Karama, including LG, Samsung, Daikin, O General and others used in homes and offices.",
    },
    {
      question: "What is the AC cleaning service in Al Karama?",
      answer:
        "AC cleaning removes dust, dirt and blockages from filters and coils. This helps improve cooling and air quality.",
    },
    {
      question: "Why is my AC not cooling in Al Karama?",
      answer:
        "Usually it's due to gas, dirty coils or compressor issues. A technician inspection is needed to confirm the issue. And get back in good condition.",
    },
    {
      question: "Is an AC gas refill available in Al Karama?",
      answer:
        "Yes, gas refill service is available in Al Karama after checking for leakage or a low gas level. The exact cost depends on the AC type.",
    },
    {
      question: "What is better, repair or replacement in Al Karama?",
      answer:
        "It depends on the AC condition and repair cost. If the repair cost is too high, replacement is usually recommended. The final price depends on the AC condition and the work required.",
    },
    {
      question: "Do you provide same-day AC service in Al Karama?",
      answer:
        "Yes, same-day AC service is often available in Al Karama. It depends on availability and job urgency.",
    },
  ],
};

const bookingData = {
  title: "Book An Appointment",
  description:
    "Book your AC service appointment with our expert team in Al Karama. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Al Karama, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "AC Inspection Service",
  locations: ["Al Karama", "Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request AC repair, cleaning, maintenance or AMC coverage in Al Karama.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request AC service in Al Karama:",
  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export const seo = seoData;
export const contact = contactData;
export const hero = heroData;
export const overview = overviewData;
export const areaOverview = areaOverviewData;
export const pricing = pricingData;
export const contracts = contractsData;
export const serviceOverview = serviceOverviewData;
export const commonSigns = commonSignsData;
export const video = videoData;
export const maintenanceImportance = maintenanceImportanceData;
export const maintenanceImportanceCards = maintenanceImportanceCardsData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedData;
export const servicesOfferedCards = servicesOfferedCardsData;
export const benefits = benefitsData;
export const cleaningService = cleaningServiceData;
export const cleaningServiceCards = cleaningServiceCardsData;
export const whyChooseUs = whyChooseUsData;
export const beforeAfter = beforeAfterData;
export const brands = brandsData;
export const sparePartsRepair = sparePartsRepairData;
export const gallery = galleryData;
export const energyTips = energyTipsData;
export const repairPrice = repairPriceData;
export const testimonials = testimonialsData;
export const news = newsData;
export const faqs = faqsData;
export const booking = bookingData;

export {
  seoData,
  contactData,
  heroData,
  overviewData,
  areaOverviewData,
  pricingData,
  contractsData,
  serviceOverviewData,
  commonSignsData,
  videoData,
  maintenanceImportanceData,
  maintenanceImportanceCardsData,
  commonProblemsData,
  servicesOfferedData,
  servicesOfferedCardsData,
  benefitsData,
  cleaningServiceData,
  cleaningServiceCardsData,
  whyChooseUsData,
  beforeAfterData,
  brandsData,
  sparePartsRepairData,
  galleryData,
  energyTipsData,
  repairPriceData,
  testimonialsData,
  newsData,
  faqsData,
  bookingData,
};

const alKaramaData = {
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

export default alKaramaData;
