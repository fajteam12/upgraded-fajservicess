import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";
import faqsData from "./faqsData";

const seoData = {
  title: "Best Fujitsu AC Repair and Maintenance Services Near You, Dubai",
  description: "FAJ offers professional Fujitsu AC repair and cleaning service in Dubai. Get fast central AC systems in homes and offices throughout Dubai. Call us today!",
  keywords: "Fujitsu AC Repair in Dubai, Fujitsu Air Conditioner Maintenance, Fujitsu AC Service, Fujitsu AC Fix, Fujitsu Air Condition Repair, Fujitsu Air Condition Maintenance, Fujitsu Air Condition Service, Fujitsu Air Condition Fix",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best Fujitsu AC Repair and Maintenance Services Near You, Dubai",
    description: "FAJ offers professional Fujitsu AC repair and cleaning service in Dubai. Get fast central AC systems in homes and offices throughout Dubai. Call us today!",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Fujitsu AC Repair and Maintenance Services Near You, Dubai",
    description: "FAJ offers professional Fujitsu AC repair and cleaning service in Dubai. Get fast central AC systems in homes and offices throughout Dubai. Call us today!",
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
  eyebrow: "Fujitsu AC Specialists",
  title: "Top-Quality Fujitsu AC Repair and Fujitsu AC Maintenance Services in Dubai, UAE",
  paragraphs: [
    "FAJ Technical Services L.L.C has proudly served the Dubai community since 2010, building a reputation for excellence in Fujitsu HVAC services.",
  ],
  paragraph: "FAJ Technical Services L.L.C has proudly served the Dubai community since 2010, building a reputation for excellence in Fujitsu HVAC services.",
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
    id: "ac-brand-logos/fujitsu-logo",
    src: "/img/ac-brand-logos/fujitsu-logo.webp",
    alt: "Fujitsu Air Conditioning Repair and Maintenance in Dubai",
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
    "Our skilled team specializes in Fujitsu AC repair, maintenance, and installation for residential and commercial properties in Dubai and Sharjah. To maintain indoor comfort year-round, we recommend regular maintenance, including inspections and cleaning. Our expert Fujitsu AC cleaning service improves efficiency and air quality while extending the lifespan of your unit. Trust FAJ for all your Fujitsu AC needs.",
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
  id: "fujitsu-ac-services",
  title: "Fujitsu AC Maintenance and Servicing",
  paragraphs: [
    "When seeking Fujitsu air conditioner repairs, it is essential to select a qualified technician for your home or office. Our organization specializes in the AC repair, service, and maintenance of Fujitsu units across Dubai and Sharjah. The FAJ team is dedicated to providing exceptional service to ensure your comfort throughout the year.",
    {
      parts: [
        "We are the experts in " + "Fujitsu" + " ",
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
    alt: "Who provides the best Fujitsu AC repair services in Dubai?",
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
  id: "fujitsu-ac-maintenance-signs",
  title: "Top Common Signs That You Need Fujitsu AC Maintenance",
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
  title: "Why Is My Fujitsu AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Fujitsu AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Fujitsu air conditioning in Dubai",
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
  id: "fujitsu-ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR Fujitsu AIR CONDITIONER SYSTEM",
  columns: "three",
  items: [
    {
      icon: "ac-installation",
      title: "Fujitsu AC Installation",
      description:
        "Professional installation of various Fujitsu air conditioning systems to guarantee optimal performance.",
      actionLabel: "Request Installation",
    },
    {
      icon: "diagnostics",
      title: "Fujitsu AC Diagnostics",
      description:
        "Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes.",
      actionLabel: "Book Diagnostics",
    },
    {
      icon: "ac-repair",
      title: "Fujitsu AC Repair Service",
      description:
        "We provide prompt and effective repair services for all Fujitsu AC components, addressing issues such as leaks, electrical failures, and system malfunctions.",
      actionLabel: "Request Repair",
    },
    {
      icon: "peace-of-mind",
      title: "Fujitsu AC Maintenance Contract",
      description:
        "Regular maintenance of Fujitsu AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "ac-cleaning",
      title: "Fujitsu AC Deep Cleaning",
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
  id: "fujitsu-ac-maintenance-importance",
  title: "Why is Fujitsu AC Maintenance Service Important in Dubai?",
  paragraphs: [
    {
      parts: [
        "To keep your Fujitsu air conditioner running efficiently in Dubai, regular AC maintenance is key. At FAJ, our experienced team is here to ensure your comfort. For convenient AC maintenance in your area, contact us!",
      ],
    },
    "For convenient AC maintenance in your area, contact us!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Fujitsu AC Maintenance Service Important in Dubai?",
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
  id: "fujitsu-ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR FUJITSU AC MAINTENANCE IN DUBAI",
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
  title: "Common Fujitsu AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      number: "01",
      title: "Weak Airflow",
      description: "If you notice reduced airflow from your vents, it may indicate an issue with your Fujitsu AC system, such as a clogged filter or a malfunctioning fan.",
    },
    {
      number: "02",
      title: "Warm Air",
      description: "If your Fujitsu AC is blowing warm or room temperature air instead of cold air, there may be issues with the compressor, gas levels, or ductwork.",
    },
    {
      number: "03",
      title: "Strange Noises",
      description: "Unusual sounds such as grinding, squeaking, or banging from your Fujitsu AC unit may indicate mechanical issues that need attention.",
    },
    {
      number: "04",
      title: "Foul Odors",
      description: "Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately.",
    },
    {
      number: "05",
      title: "Frequent Cycling",
      description: "The inability to maintain the desired temperatures could indicate issues such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.",
    },
    {
      number: "06",
      title: "High Humidity Levels",
      description: "A Fujitsu air conditioner that is not effectively reducing humidity may have issues with its cooling capacity or may not be functioning properly.",
    },
    {
      number: "07",
      title: "Leaking Water",
      description: "Water pooling around the Fujitsu AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.",
    },
    {
      number: "08",
      title: "Increased Energy Bills",
      description: "High energy bills without an increase in usage may indicate inefficiency in the Fujitsu AC due to dirty filters, duct leaks, or other issues.",
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
  title: "Benefits Of Regular Fujitsu AC Service and Maintenance in Dubai",
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
      id: "fujitsu-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Fujitsu cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "fujitsu-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Fujitsu filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "fujitsu-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "fujitsu-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "fujitsu-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "fujitsu-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-fujitsu-ac-service",
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
        "Choose a day and time for your Fujitsu AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Fujitsu AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Fujitsu air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Fujitsu air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Fujitsu air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Fujitsu AC Services for the Following Types",
  columns: [
    {
      title: "Fujitsu Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "Fujitsu Split Air Conditioner Service",
          text: "FAJ provides dependable Fujitsu AC repair and maintenance services in Dubai. Our team consists of professionals specializing in Fujitsu split systems, Fujitsu VRV, and Fujitsu central air conditioning units.",
        },
        {
          title: "Fujitsu Central Air Conditioner Repair and Service",
          text: "FAJ is a Dubai-based service provider specializing in Fujitsu AC repair services. The company focuses on Fujitsu air conditioning systems and offers a range of services, including repairs and regular maintenance.",
        },
        {
          title: "Fujitsu AC Service and Repair",
          text: "Fujitsu AC service offers peace of mind with skilled professionals. At FAJ, we prioritize efficiency and reliability in all our work. Our expert team ensures that your air conditioning system operates at its best, whether you require maintenance, repairs, or installation. Trust us with your HVAC needs—your comfort is our highest priority.",
        },
        {
          title: "Fujitsu Inverter Air Conditioner Maintenance",
          text: "Rely on our expert team to swiftly address any issues with your Fujitsu air conditioner and restore its full functionality.",
        },
        {
          title: "Fujitsu HVAC Repair",
          text: "We have extensive knowledge of Fujitsu air conditioning systems, providing reliable repairs to ensure your unit operates efficiently.",
        }
      ],
    },
    {
      title: "Specialized Fujitsu AC Units & Systems:",
      items: [
        {
          title: "Fujitsu Ceiling AC Service and Repair",
          text: "Our experts can accurately diagnose and fix any issues with your Fujitsu air conditioner.",
        },
        {
          title: "Fujitsu VRV (Variable Refrigerant Volume) System Service and Repair",
          text: "The Fujitsu VRV (Variable Refrigerant Volume) System repair and service ensures your peace of mind because you are in the right place. FAJ prioritizes efficiency and reliability.",
        },
        {
          title: "Fujitsu Ducted Split AC Service and Repair",
          text: "Fujitsu ducted split AC service in Dubai requires specialist assistance, as only experts can effectively address air conditioning issues. We provide hassle-free Fujitsu air conditioning repair services.",
        },
        {
          title: "Fujitsu Wall-Mounted Air Conditioner Service and Repair",
          text: "Beat the scorching heat with optimal Fujitsu AC cleaning service and fixing error in Dubai! Our professional Fujitsu AC services ensure your unit operates efficiently, providing comfort and peace of mind.",
        }
      ],
    },
  ],
  footerNote: {
    label: "Fujitsu Maintenance Tip",
    text: "Ensure Fujitsu outdoor units are unobstructed, wash dust filters bi-weekly, and maintain standard cooling temperatures between 24°C and 26°C during hot Dubai summer days.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "fujitsu-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Fujitsu AC Service Coverage Across Dubai",
  description:
    "Prompt Fujitsu air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "fujitsu-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Fujitsu AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Fujitsu AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Fujitsu AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Fujitsu AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Fujitsu AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Fujitsu AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Fujitsu AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Fujitsu AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Fujitsu AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Fujitsu AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Fujitsu AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Fujitsu AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Fujitsu AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "fujitsu-ac-news",
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
    "Choose a planned Fujitsu AC maintenance schedule based on property size, unit type, operating hours and response priorities in Dubai.",
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
    "Book your Fujitsu AC service appointment with our expert team across Dubai. We provide professional Fujitsu AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Fujitsu AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Fujitsu AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Fujitsu AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Fujitsu AC service in Dubai:",
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

const fujitsuData = {
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

export default fujitsuData;
