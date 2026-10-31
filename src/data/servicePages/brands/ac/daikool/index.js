import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";
import faqsData from "./faqsData";

const seoData = {
  title: "Trusted Daikool Air Conditioning Maintenance and Service Dubai",
  description: "For Daikool AC repair service in Dubai, call us at 043300002. Get the best central & split air conditioner (A/C) maintenance and service near your location",
  keywords: "Daikool AC Repair in Dubai, Daikool Air Conditioner Maintenance, Daikool AC Service, Daikool AC Fix, Daikool Air Condition Repair, Daikool Air Condition Maintenance, Daikool Air Condition Service",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Trusted Daikool Air Conditioning Maintenance and Service Dubai",
    description: "For Daikool AC repair service in Dubai, call us at 043300002. Get the best central & split air conditioner (A/C) maintenance and service near your location",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikool/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Daikool Air Conditioning Maintenance and Service Dubai",
    description: "For Daikool AC repair service in Dubai, call us at 043300002. Get the best central & split air conditioner (A/C) maintenance and service near your location",
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
  eyebrow: "Daikool AC Specialists",
  title: "Reliable and Fast Daikool AC Repair and Daikool AC Maintenance Services in Dubai, UAE",
  paragraphs: [
    "FAJ Technical Services L.L.C Since 2010, our company has been committed to serving the Dubai community by specializing in Daikool air conditioning repair, maintenance, and installation for residential and commercial properties in Dubai and Sharjah.",
  ],
  paragraph: "FAJ Technical Services L.L.C Since 2010, our company has been committed to serving the Dubai community by specializing in Daikool air conditioning repair, maintenance, and installation for residential and commercial properties in Dubai and Sharjah.",
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
    id: "ac-brand-logos/daikool-logo",
    src: "/img/ac-brand-logos/daikool-logo.webp",
    alt: "Daikool Air Conditioning Repair and Maintenance in Dubai",
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
    "In our hot climate, a Daikool air conditioner is vital for year-round comfort. Regular maintenance is essential to preserve its effectiveness and extend its lifespan. Our professional cleaning services ensure that your system operates efficiently, providing the cooling relief you need.",
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
  id: "daikool-ac-services",
  title: "Daikool AC Maintenance and Servicing",
  paragraphs: [
    "When seeking Daikool AC repair services, it's crucial to engage a qualified and dependable technician for your residence or workplace. Our services focus on the Daikool AC repair and maintenance of Daikool air conditioners across Dubai and Sharjah. The FAJ team is committed to providing efficient solutions to maintain a comfortable indoor climate throughout the year.",
    {
      parts: [
        "We are the experts in " + "Daikool" + " ",
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
    alt: "Who provides the best Daikool AC repair services in Dubai?",
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
  id: "daikool-ac-maintenance-signs",
  title: "Top Common Signs That You Need Daikool AC Maintenance",
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
  title: "Why Is My Daikool AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Daikool AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Daikool air conditioning in Dubai",
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
  id: "daikool-ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR Daikool AC SYSTEMS",
  columns: "three",
  items: [
    {
      icon: "ac-installation",
      title: "Daikool AC Installation",
      description:
        "Professional installation of various Daikool air conditioning systems to guarantee optimal performance.",
      actionLabel: "Request Installation",
    },
    {
      icon: "diagnostics",
      title: "Daikool AC Diagnostics",
      description:
        "Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes.",
      actionLabel: "Book Diagnostics",
    },
    {
      icon: "ac-repair",
      title: "Daikool AC Repair Service",
      description:
        "We provide prompt and effective repair services for all Daikool AC components, addressing issues such as leaks, electrical failures, and system malfunctions.",
      actionLabel: "Request Repair",
    },
    {
      icon: "peace-of-mind",
      title: "Daikool AC Maintenance Contract",
      description:
        "Regular maintenance of Daikool AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "ac-cleaning",
      title: "Daikool AC Deep Cleaning",
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
  id: "daikool-ac-maintenance-importance",
  title: "Why is Daikool AC Maintenance Service Important in Dubai?",
  paragraphs: [
    {
      parts: [
        "Regular maintenance of Daikool air conditioner in Dubai is essential for optimal performance. FAJ offers services to keep your system running efficiently. Count on us to ensure your Daikool AC operates at its best. For maintenance nearby, please contact us.",
      ],
    },
    "For convenient AC maintenance in your area, contact us!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Daikool AC Maintenance Service Important in Dubai?",
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
  id: "daikool-ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR DAIKOOL AC MAINTENANCE IN DUBAI",
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
  title: "Common Daikool AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      number: "01",
      title: "Weak Airflow",
      description: "If you notice a decline in airflow from your vents, it may indicate a problem with your Daikool AC system, such as a blocked filter or a faulty fan.",
    },
    {
      number: "02",
      title: "Warm Air",
      description: "If your Daikool AC is blowing warm or room temperature air instead of cold air, it may indicate issues with the compressor, refrigerant levels, or ductwork.",
    },
    {
      number: "03",
      title: "Strange Noises",
      description: "Unusual sounds such as grinding, squeaking, or banging from your Daikool AC unit may indicate mechanical issues that require attention.",
    },
    {
      number: "04",
      title: "Foul Odors",
      description: "Unpleasant odors from the vents may indicate mold or mildew in the system and should be addressed immediately.",
    },
    {
      number: "05",
      title: "Frequent Cycling",
      description: "The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat.",
    },
    {
      number: "06",
      title: "High Humidity Levels",
      description: "A Daikool air conditioner that fails to effectively reduce humidity may be experiencing cooling capacity issues or may not be operating correctly.",
    },
    {
      number: "07",
      title: "Leaking Water",
      description: "Water pooling around the Daikool AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.",
    },
    {
      number: "08",
      title: "Increased Energy Bills",
      description: "High energy bills without an increase in usage may indicate inefficiency in Daikool AC due to dirty filters, duct leaks, or other problems.",
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
  title: "Benefits Of Regular Daikool AC Service and Maintenance in Dubai",
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
      id: "daikool-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Daikool cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "daikool-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Daikool filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "daikool-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "daikool-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "daikool-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "daikool-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-daikool-ac-service",
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
        "Choose a day and time for your Daikool AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Daikool AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Daikool air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Daikool air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Daikool air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Daikool AC Services for the Following Types",
  columns: [
    {
      title: "Daikool Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "Daikool Split Air Conditioner Service",
          text: "FAJ provides dependable repair and maintenance services for Daikool AC units in Dubai. Our team consists of professionals specializing in Daikool split systems, Daikool VRF, and Daikool central air conditioning units.",
        },
        {
          title: "Daikool Central Air Conditioner Repair and Service",
          text: "FAJ is a trusted service provider in Dubai, specializing in Daikool air conditioning systems. They offer a range of services, including reliable repair and regular maintenance, ensuring that your AC runs efficiently and effectively. With a focus on quality, FAJ is dedicated to keeping your space cool and comfortable.",
        },
        {
          title: "Daikool AC Service and Repair",
          text: "Daikool AC Service offers peace of mind with our skilled technicians. At FAJ, we prioritize efficiency and reliability in servicing your air conditioning. Whether you need maintenance, repair, or installation, our expert team is dedicated to keeping your HVAC system running optimally. Trust us for all your comfort needs!",
        },
        {
          title: "Daikool Inverter Air Conditioner Maintenance",
          text: "Count on our expert team to quickly fix any problems with your Daikool air conditioner and restore its full functionality.",
        },
        {
          title: "Daikool HVAC Repair",
          text: "With extensive knowledge of Daikool cassette type and package unit air conditioning systems, we provide reliable repair to ensure your unit functions efficiently.",
        }
      ],
    },
    {
      title: "Specialized Daikool AC Units & Systems:",
      items: [
        {
          title: "Daikool Ceiling AC Service and Repair",
          text: "Our experts can accurately diagnose and fix any issues with your Daikool air conditioner.",
        },
        {
          title: "Daikool VRF (Variable Refrigerant Flow) System Service and Repair",
          text: "The Daikool Variable Refrigerant Flow (VRF) System service offers you an exceptional level of peace of mind, ensuring that you are in the best hands. At FAJ, we place a strong emphasis on both efficiency and reliability, striving to provide top-notch service that meets your needs. With our expertise in the Daikool VRF System, you can trust that your comfort and satisfaction are our highest priorities.",
        },
        {
          title: "Daikool Ducted Split AC Service and Repair",
          text: "For Daikool ducted split air conditioning systems in Dubai, expert help is crucial. Our skilled technicians specialize in diagnosing and fixing air conditioning issues, offering fast and reliable repair services. We focus on delivering efficient solutions to restore your comfort with minimal hassle.",
        },
        {
          title: "Daikool Wall-Mounted Air Conditioner Service and Repair",
          text: "Looking for relief from Dubai's intense heat? Ensure your Daikool AC runs efficiently with our expert services. We keep your unit cool and reliable, so you can enjoy comfort indoors while the temperatures soar outside.",
        }
      ],
    },
  ],
  footerNote: {
    label: "Daikool Maintenance Tip",
    text: "Keep outdoor condensing units shaded from direct debris, replace clogged filters regularly, and avoid setting the thermostat below 24°C to maintain system longevity.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "daikool-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Daikool AC Service Coverage Across Dubai",
  description:
    "Prompt Daikool air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "daikool-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Daikool AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Daikool AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Daikool AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikool AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Daikool AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikool AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Daikool AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikool AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Daikool AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikool AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Daikool AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikool AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Daikool AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "daikool-ac-news",
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
    "Choose a planned Daikool AC maintenance schedule based on property size, unit type, operating hours and response priorities in Dubai.",
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
    "Book your Daikool AC service appointment with our expert team across Dubai. We provide professional Daikool AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Daikool AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Daikool AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Daikool AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Daikool AC service in Dubai:",
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

const daikoolData = {
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

export default daikoolData;
