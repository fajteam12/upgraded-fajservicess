import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";
import faqsData from "./faqsData";

const seoData = {
  title: "Expert Goodman AC Repair and Cleaning Services in Dubai",
  description: "When your AC isn't cooling, learn what to expect when you have to make that urgent HVAC service call, FAJ for Goodman AC repair and services in Dubai",
  keywords: "Goodman AC Repair Dubai, Goodman Air Conditioner Service, Goodman AC Maintenance Dubai, Goodman Air Conditioning Repair, Goodman AC Cleaning",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Expert Goodman AC Repair and Cleaning Services in Dubai",
  description: "When your AC isn't cooling, learn what to expect when you have to make that urgent HVAC service call, FAJ for Goodman AC repair and services in Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Goodman AC Repair and Cleaning Services in Dubai",
  description: "When your AC isn't cooling, learn what to expect when you have to make that urgent HVAC service call, FAJ for Goodman AC repair and services in Dubai",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const heroData = {
  eyebrow: "Goodman AC Specialists",
  title: "Top-Rated Goodman AC Repair and Goodman AC Maintenance Services in Dubai, UAE",
  paragraphs: [
    "Experience year-round comfort by eliminating sticky summer days, stuffy nights, and allergens with clean air.",
  ],
  paragraph: "Experience year-round comfort by eliminating sticky summer days, stuffy nights, and allergens with clean air.",
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
      description: "Fast assistance across Dubai.",
    },
  ],
  primaryAction: "Book An Appointment",
  secondaryAction: "Call Now",
  showCall: true,
  showPhone: true,
  image: {
    id: "ac-brand-logos/goodman-logo",
    src: "/img/ac-brand-logos/goodman-logo.webp",
    alt: "Goodman Air Conditioning Repair and Maintenance in Dubai",
    width: 600,
    height: 400,
    fit: "contain",
    padding: "20px",
    bg: "#ffffff",
    hideOverlay: true,
  },
};

const overviewData = {
  id: "overview",
  paragraphs: [
    "Since 2010, FAJ Technical Services L.L.C has been providing reliable Goodman air conditioning solutions in Dubai and Sharjah. Our expert team specializes in Goodman AC cleaning service, repair, maintenance and installation of a wide range of residential and commercial AC units to ensure optimal performance and comfort.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const pricingData = {
  eyebrow: "Transparent Service Options",
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
        "Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call",
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
            label: "Excluded",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text:
              "Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "Basic AC Cleaning",
      subtitle: "Selected work includes a 60-day service warranty",
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
            label: "Excluded",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text:
              "Starting from AED 280 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "AC Maintenance",
      subtitle: "Selected work includes a 60-day service warranty",
      warranty: "60 - Days Warranty",
      badge: "Preventive Care",
      price: "AED 325",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp",
      },
      description:
        "Comprehensive preventive servicing to protect cooling efficiency, flush drain lines, and inspect mechanical and electrical components.",
      popup: {
        title: "AC Maintenance Service scope of works:",
        sections: [
          {
            items: [
              "Indoor & outdoor coil cleaning",
              "Blower wheel & fan blade inspection",
              "Drain tray and drain pipe chemical flushing",
              "Electrical connections & capacitor check",
              "Compressor amp draw & operating pressure check",
              "Thermostat calibration & sensor inspection",
              "Airflow balance and temperature differential test",
            ],
          },
          {
            label: "Excluded",
            text:
              "Cost for any major spare parts, compressor replacement, or duct modifications if needed.",
          },
          {
            label: "Terms & Conditions",
            text:
              "Starting from AED 325 maintenance rate applies per unit depending on capacity, system type, and accessibility.",
          },
        ],
      },
    },
  ],
};

const areaOverviewData = {
  id: "goodman-ac-services",
  title: "Goodman AC Maintenance and Servicing",
  paragraphs: [
    "When it comes to the repair of Goodman air conditioning units, it is crucial to select a highly skilled AC technician. Our dedicated team specializes in air conditioning service and maintenance throughout Dubai and Sharjah. FAJ is committed to delivering reliable solutions that enhance indoor comfort throughout the year while ensuring the efficient operation of your system.",
    {
      parts: [
        "We are the experts in " + "Goodman" + " ",
        {
          strong: true,
          text: "AC repair",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        ", service, and maintenance across Dubai and Sharjah. Count on the FAJ team to deliver exceptional service and ensure your comfort throughout the year.",
      ],
    },
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Goodman AC repair services in Dubai?",
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
  id: "goodman-ac-maintenance-signs",
  title: "Top Common Signs That You Need Goodman AC Maintenance",
  intro:
    "If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.",
  items: [
    {
      title: "AC Not Cooling Signs",
    },
    {
      title: "AC Motor not working",
    },
    {
      title: "AC Thermostat not working",
    },
    {
      title: "Water Leaking from your AC",
    },
    {
      title: "AC compressor is not cooling",
    },
    {
      title: "High AC electricity (DEWA) bills",
      href: "https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling",
      external: true,
    }
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const repairPriceData = {
  id: "ac-repair-rates",
  title: "Air Conditioning Repair Price List",
  description:
    "Transparent, competitive pricing for AC repairs and services in Dubai. Check our standard rates and book a certified technician.",
  actionLabel: "Get a Repair Quote",
  actionHref: "/services/air-conditioning-repair/ac-repair-price-list/",
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "Why Is My Goodman AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Goodman AC is running but not cooling properly, there are several factors that may be responsible.",
  listTitle: "Common causes include:",
  checklist: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Restricted airflow",
  ],
  conclusion:
    "A professional AC inspection can identify the exact cause and prevent further damage to the system.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician servicing Goodman air conditioning in Dubai",
    width: 853,
    height: 853,
  },
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedCardsData = {
  id: "goodman-ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR Goodman AC SYSTEMS",
  columns: "three",
  items: [
    {
      icon: "ac-installation",
      title: "Goodman AC Installation",
      description:
        "Professional installation of various Goodman air conditioning systems to guarantee optimal performance.",
      actionLabel: "Request Installation",
    },
    {
      icon: "diagnostics",
      title: "Goodman AC Diagnostics",
      description:
        "Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes.",
      actionLabel: "Book Diagnostics",
    },
    {
      icon: "ac-repair",
      title: "Goodman AC Repair Service",
      description:
        "We provide prompt and effective repair services for all Goodman AC components, addressing issues such as leaks, electrical failures, and system malfunctions.",
      actionLabel: "Request Repair",
    },
    {
      icon: "peace-of-mind",
      title: "Goodman AC Maintenance Contract",
      description:
        "Regular maintenance of Goodman AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "ac-cleaning",
      title: "Goodman AC Deep Cleaning",
      description:
        "Thorough indoor and outdoor coil washing, antibacterial duct sanitization, and drain line pressure flushing.",
      actionLabel: "Book AC Cleaning",
    },
  ],
  bottomTitle:
    "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "/services/air-conditioning-repair/ac-service/",
        external: true,
      },
      " and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!",
    ],
  },
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceData = {
  id: "goodman-ac-maintenance-importance",
  title: "Why is Goodman AC Maintenance Service Important in Dubai?",
  paragraphs: [
    {
      parts: [
        "To keep your Goodman air conditioner running efficiently in Dubai's heat, regular maintenance is essential. At FAJ, we provide expert services tailored for Goodman ACs, ensuring your unit delivers optimal cooling and comfort all year round. Here to help keep your system running at its best!",
      ],
    },
    "For convenient AC maintenance in your area, contact us!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Goodman AC Maintenance Service Important in Dubai?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceCardsData = {
  id: "goodman-ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR GOODMAN AC MAINTENANCE IN DUBAI",
  items: [
    {
      icon: "ac-sun",
      badge: "Extreme Climate",
      title: "Extreme Weather",
      description:
        "The temperature gets very hot in summer over 40°C. We need to take care of our air conditioners so they work properly when it is this hot.",
    },
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Energy Efficiency",
      description:
        "If we take care of our air conditioner it will use less energy and our electricity bills will be lower.",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Longevity of Equipment",
      description:
        "Taking care of our air conditioner will make it last longer so we will not have to spend a lot of money to fix it or buy a new one.",
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Improved Air Quality",
      description:
        "Regular maintenance helps keep our air clean by removing dust and things that can make us sick.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Enhanced Comfort",
      description:
        "The air conditioning service in Dubai makes sure our air conditioners are clean and work well every day so we can be comfortable.",
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const commonProblemsData = {
  title: "Common Goodman AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      number: "01",
      title: "Weak Airflow",
      description: "Reduced airflow from your vents may signal an issue with your Goodman AC, like a clogged filter or a faulty fan.",
    },
    {
      number: "02",
      title: "Warm Air",
      description: "If your Goodman AC is blowing warm air, it may indicate issues with the compressor, refrigerant levels, or ductwork.",
    },
    {
      number: "03",
      title: "Strange Noises",
      description: "Unusual sounds such as grinding, squeaking, or banging from your Goodman AC may signal mechanical problems needing attention.",
    },
    {
      number: "04",
      title: "Foul Odors",
      description: "Unpleasant odours coming from the vents may indicate mold or mildew in the system and should be addressed immediately.",
    },
    {
      number: "05",
      title: "Frequent Cycling",
      description: "The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.",
    },
    {
      number: "06",
      title: "High Humidity Levels",
      description: "A Goodman Air Conditioner that doesn't reduce humidity may have cooling capacity issues or may not be operating correctly.",
    },
    {
      number: "07",
      title: "Leaking Water",
      description: "Water pooling around the Goodman AC or dripping from the vents may signal a blocked drain or frozen coils.",
    },
    {
      number: "08",
      title: "Increased Energy Bills",
      description: "High energy bills without increased usage may suggest Goodman AC inefficiencies from dirty filters or duct leaks.",
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Dubai",
  lead: "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
  listTitle: "Our emergency AC repair service can help with:",
  items: [
    "AC not cooling",
    "AC not turning on",
    "Water leakage",
    "Electrical faults",
    "Thermostat issues",
    "Compressor failures",
    "Weak airflow",
    "Unusual noises",
  ],
  conclusion:
    "We provide fast assistance for residential and commercial customers throughout Dubai and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Dubai and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Dubai",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Dubai",
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

const benefitsData = {
  title: "Benefits Of Regular Goodman AC Service and Maintenance in Dubai",
  city: "Dubai",
  stats: [
    {
      value: "2010",
      label: "Serving the UAE Since",
    },
    {
      value: "7-Day",
      label: "Support Available",
    },
  ],
  benefits: [
    {
      id: "goodman-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Goodman cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "goodman-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Goodman filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "goodman-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "goodman-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "goodman-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "goodman-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-goodman-ac-service",
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
          "! Our same-day repair or next-day service visits ensure that your needs are met quickly.",
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
        "Choose a day and time for your Goodman AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Goodman AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough Goodman air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Goodman air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Goodman air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Goodman AC Services for the Following Types",
  columns: [
    {
      title: "Goodman Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "Goodman Split Air Conditioner Service",
          text: "FAJ offers reliable repair and maintenance for Goodman split air conditioner in Dubai. Our expert team specialises in Goodman VRF and central AC, ensuring optimal performance and comfort. Count on us for both routine AC maintenance and urgent repair.",
        },
        {
          title: "Goodman Central Air Conditioner Repair and Service",
          text: "FAJ is a leading aircon service provider in Dubai, specialising in the AC installation, repair, and maintenance of Goodman air conditioner. Known for its commitment to excellence, the company provides a wide range of AC services aimed at ensuring the optimal efficiency of air conditioning units.",
        },
        {
          title: "Goodman AC Service and Repair",
          text: "Goodman AC Service provides peace of mind with our skilled technicians. At FAJ, we specialise in efficient and reliable AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year!",
        },
        {
          title: "Goodman Inverter Air Conditioner Maintenance",
          text: "Count on our dedicated team to promptly resolve any concerns with your Goodman air conditioner maintenance and bring it back to peak performance!",
        },
        {
          title: "Goodman HVAC Repair",
          text: "We have extensive expertise in Goodman cassette and package unit AC systems, providing reliable repair to ensure your unit operates efficiently.",
        }
      ],
    },
    {
      title: "Specialized Goodman AC Units & Systems:",
      items: [
        {
          title: "Goodman Ceiling AC Service and Repair",
          text: "Our specialists can quickly diagnose and resolve any issues with your Goodman ceiling AC repair and service.",
        },
        {
          title: "Goodman VRF (Variable Refrigerant Flow) System Service and Repair",
          text: "FAJ's Goodman Variable Refrigerant Flow (VRF) repair and maintenance service provides reliable and efficient HVAC solutions customised to meet your needs. Our skilled team prioritises your comfort and satisfaction, delivering exceptional service and peace of mind. You can trust us to manage your climate control with expertise and care.",
        },
        {
          title: "Goodman Ducted Split AC Service and Repair",
          text: "For reliable Goodman ducted split air conditioner (AC) repair and maintenance in Dubai, our skilled technicians are here to help. With expertise in diagnosing a variety of AC issues, we ensure minimal disruption to your comfort. Trust us for quick and effective service that provides the cooling relief you need.",
        },
        {
          title: "Goodman Wall-Mounted Air Conditioner Service and Repair",
          text: "Beat Dubai's intense heat with our expert Goodman AC fix and repair services. We ensure that your unit operates efficiently, keeping your indoor space cool and comfortable while the temperatures soar outside.",
        }
      ],
    },
  ],
  footerNote: {
    label: "Goodman Maintenance Tip",
    text: "To ensure maximum energy savings and prevent AC freeze-ups, keep air filters clean every 15-20 days and schedule routine condenser coil washes before peak summer.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "goodman-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Goodman AC Service Coverage Across Dubai",
  description:
    "Prompt Goodman air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "goodman-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Goodman AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Goodman AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Goodman AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Goodman AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Goodman AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Goodman AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Goodman AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Goodman AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Goodman AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Goodman AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Goodman AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Goodman AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Goodman AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "goodman-ac-news",
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
        "A properly functioning air conditioning system is essential in Dubai. Discover how to identify common AC issues and when to call certified technicians.",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read More",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin • 4 Comments",
      description:
        "Air conditioning is essential in the UAE summer but can raise electricity costs. Learn smart ways to reduce your DEWA AC bill without sacrificing comfort.",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read More",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin • 0 Comments",
      description:
        "Choosing between split, ducted, and inverter AC systems? Read our comprehensive guide on selecting the best cooling solution for your property.",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read More",
    },
  ],
  footer: {
    parts: [
      "Explore more expert tips, seasonal maintenance guides, and HVAC advice in our blog. ",
      {
        text: "Visit our blog",
        href: "/blog/",
      },
    ],
  },
};

const contractsData = {
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Choose a planned Goodman AC maintenance schedule based on property size, unit type, operating hours and response priorities in Dubai.",
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
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Dubai.",
};


const bookingData = {
  title: "Book An Appointment",
  description:
    "Book your Goodman AC service appointment with our expert team across Dubai. We provide professional Goodman AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Goodman AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Goodman AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Goodman AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Goodman AC service in Dubai:",
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
export const servicesOffered = servicesOfferedCardsData;
export const servicesOfferedCards = servicesOfferedCardsData;
export const benefits = benefitsData;
export const whyChooseUs = whyChooseUsData;
export const beforeAfter = beforeAfterData;
export const brands = coverageData;
export const coverage = coverageData;
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
  servicesOfferedCardsData,
  benefitsData,
  whyChooseUsData,
  beforeAfterData,
  coverageData,
  sparePartsRepairData,
  galleryData,
  energyTipsData,
  repairPriceData,
  testimonialsData,
  newsData,
  faqsData,
  bookingData,
};

const faqsNormalized = {
  ...faqsData,
  items: faqsData?.items || faqsData?.faqs || [],
  faqs: faqsData?.faqs || faqsData?.items || [],
};

const goodmanData = {
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
  servicesOffered: servicesOfferedCardsData,
  servicesOfferedCards: servicesOfferedCardsData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  beforeAfter: beforeAfterData,
  brands: coverageData,
  coverage: coverageData,
  sparePartsRepair: sparePartsRepairData,
  gallery: galleryData,
  energyTips: energyTipsData,
  repairPrice: repairPriceData,
  testimonials: testimonialsData,
  news: newsData,
  faqs: faqsNormalized,
  booking: bookingData,
};

export default goodmanData;
