import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";
import faqsData from "./faqsData";

const seoData = {
  title: "Affordable Crafft Air Conditioning Repair and Maintenance Dubai",
  description: "Need fast and the best Crafft air conditioning repair in Dubai? Get expert VRF, central, split AC installation, service, and emergency repairs near you",
  keywords: "Crafft AC Repair, Crafft AC Maintenance, Crafft Air Conditioner Service, Crafft Air Conditioner Repair, Crafft Air Conditioner Maintenance, Crafft Air Conditioner Fix, Crafft Air Conditioner Installation, Crafft Air Conditioner Cleaning Service",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Affordable Crafft Air Conditioning Repair and Maintenance Dubai",
    description: "Need fast and the best Crafft air conditioning repair in Dubai? Get expert VRF, central, split AC installation, service, and emergency repairs near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Crafft Air Conditioning Repair and Maintenance Dubai",
    description: "Need fast and the best Crafft air conditioning repair in Dubai? Get expert VRF, central, split AC installation, service, and emergency repairs near you",
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
  eyebrow: "Crafft AC Specialists",
  title: "Top-Quality Crafft Air Conditioning Repair and Maintenance Services in Dubai, UAE",
  paragraphs: [
    "Achieving comfort throughout the year requires addressing challenges like summer humidity, elevated nighttime temperatures, and indoor allergens.",
  ],
  paragraph: "Achieving comfort throughout the year requires addressing challenges like summer humidity, elevated nighttime temperatures, and indoor allergens.",
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
    id: "ac-brand-logos/crafft-logo",
    src: "/img/ac-brand-logos/crafft-logo.webp",
    alt: "Crafft Air Conditioning Repair and Maintenance in Dubai",
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
    "Since its inception in 2010, FAJ Technical Services L.L.C has established itself as a trustworthy provider of Crafft air conditioning solutions in the Dubai and Sharjah regions. Our skilled team is proficient in a comprehensive range of services, including Crafft AC repair, cleaning service, maintenance and installation for both residential and commercial units. We are committed to optimizing the performance of your air conditioning system, thereby enhancing your indoor comfort.",
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
  id: "crafft-ac-services",
  title: "Crafft AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, professional services are available for repairing Crafft air conditioning systems, so it's important to hire a qualified AC technician. Our specialized team services Crafft AC systems in Dubai and Sharjah, ensuring year-round comfort and optimal efficiency.",
    {
      parts: [
        "We are the experts in " + "Crafft" + " ",
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
    alt: "Who provides the best Crafft AC repair services in Dubai?",
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
  id: "crafft-ac-maintenance-signs",
  title: "Top Common Signs That You Need Crafft AC Maintenance",
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
  title: "Why Is My Crafft AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Crafft AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Crafft air conditioning in Dubai",
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
  id: "crafft-ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR Crafft AC SYSTEMS",
  columns: "three",
  items: [
    {
      icon: "ac-installation",
      title: "Crafft AC Installation",
      description:
        "Professional installation of various Crafft air conditioning systems to guarantee optimal performance.",
      actionLabel: "Request Installation",
    },
    {
      icon: "diagnostics",
      title: "Crafft AC Diagnostics",
      description:
        "Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes.",
      actionLabel: "Book Diagnostics",
    },
    {
      icon: "ac-repair",
      title: "Crafft AC Repair Service",
      description:
        "We provide prompt and effective repair services for all Crafft AC components, addressing issues such as leaks, electrical failures, and system malfunctions.",
      actionLabel: "Request Repair",
    },
    {
      icon: "peace-of-mind",
      title: "Crafft AC Maintenance Contract",
      description:
        "Regular maintenance of Crafft AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.",
      actionLabel: "View AMC Plans",
    },
    {
      icon: "ac-cleaning",
      title: "Crafft AC Deep Cleaning",
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
  id: "crafft-ac-maintenance-importance",
  title: "Why is Crafft AC Maintenance Service Important in Dubai?",
  paragraphs: [
    {
      parts: [
        "To ensure your Crafft central air conditioner runs smoothly in Dubai's heat, regular aircon maintenance is essential. At FAJ, we offer expert AC services to ensure optimal cooling and comfort year-round. We're here to help your system perform at its best!",
      ],
    },
    "For convenient AC maintenance in your area, contact us!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Crafft AC Maintenance Service Important in Dubai?",
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
  id: "crafft-ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR CRAFFT AC MAINTENANCE IN DUBAI",
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
  title: "Common Crafft AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      number: "01",
      title: "Weak Airflow",
      description: "Reduced airflow from Crafft AC vents may indicate a problem, such as a clogged filter or a faulty fan, which should be addressed to ensure efficient cooling.",
    },
    {
      number: "02",
      title: "Warm Air",
      description: "If your Crafft AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork.",
    },
    {
      number: "03",
      title: "Strange Noises",
      description: "Unusual sounds like grinding, squeaking, or banging from your Crafft AC may indicate mechanical issues that require attention.",
    },
    {
      number: "04",
      title: "Foul Odors",
      description: "Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.",
    },
    {
      number: "05",
      title: "Frequent Cycling",
      description: "The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.",
    },
    {
      number: "06",
      title: "High Humidity Levels",
      description: "A Crafft air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.",
    },
    {
      number: "07",
      title: "Leaking Water",
      description: "Water pooling around the Crafft AC or dripping from the vents may indicate a blocked drain or frozen coils.",
    },
    {
      number: "08",
      title: "Increased Energy Bills",
      description: "High energy bills without increased usage may indicate inefficiencies in Crafft air conditioning due to dirty filters or duct leaks.",
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
  title: "Benefits Of Regular Crafft AC Service and Maintenance in Dubai",
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
      id: "crafft-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Crafft cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "crafft-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Crafft filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "crafft-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "crafft-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "crafft-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "crafft-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-crafft-ac-service",
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
        "Choose a day and time for your Crafft AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Crafft AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Crafft air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Crafft air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Crafft air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Crafft AC Services for the Following Types",
  columns: [
    {
      title: "Crafft Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "Crafft Split Air Conditioner Service",
          text: "FAJ is a trusted provider of Crafft split air conditioner repair and maintenance in Dubai. Our skilled technicians specialize in Crafft VRF systems and central AC units, ensuring optimal performance. Whether for routine maintenance or urgent repair, we are dedicated to delivering exceptional service tailored to your needs.",
        },
        {
          title: "Crafft Central Air Conditioner Repair and Service",
          text: "FAJ is a premier service provider specializing in the repair and maintenance of Crafft air conditioner in Dubai. The company is committed to addressing the diverse needs of its clientele, whether they require routine AC maintenance or urgent repair. With a focus on professionalism and expertise, FAJ ensures high-quality service and customer satisfaction.",
        },
        {
          title: "Crafft AC Service and Repair",
          text: "Crafft AC Service provides peace of mind with our skilled technicians. At FAJ, we specialize in efficient and reliable Crafft AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year!",
        },
        {
          title: "Crafft Inverter Air Conditioner Maintenance",
          text: "Count on our dedicated team to promptly resolve any concerns with your Crafft air conditioner maintenance and bring it back to peak performance!",
        },
        {
          title: "Crafft HVAC Repair",
          text: "We have extensive expertise in Crafft cassette and package unit AC systems, providing reliable repair to ensure your unit operates efficiently.",
        }
      ],
    },
    {
      title: "Specialized Crafft AC Units & Systems:",
      items: [
        {
          title: "Crafft Ceiling AC Service and Repair",
          text: "Our specialists can quickly diagnose and resolve any issues with your Crafft ceiling AC repair and service.",
        },
        {
          title: "Crafft VRF (Variable Refrigerant Flow) System Service and Repair",
          text: "FAJ's Crafft Variable Refrigerant Flow (VRF) repair and maintenance services provide efficient HVAC solutions tailored to your needs. Our expert team prioritizes your comfort and satisfaction, ensuring reliable service and peace of mind in managing your climate control requirements.",
        },
        {
          title: "Crafft Ducted Split AC Service and Repair",
          text: "For reliable Crafft AC repair and maintenance in Dubai, our experienced technicians are ready to assist you. With expertise in diagnosing a variety of Crafft AC issues and resolving error codes, we guarantee minimal disruption to your comfort. Trust us for prompt and effective service that delivers the cooling relief you need.",
        },
        {
          title: "Crafft Wall-Mounted Air Conditioner Service and Repair",
          text: "Stay cool in the extreme heat of Dubai with our professional Crafft air conditioning repair and maintenance services. We are dedicated to ensuring your unit operates at its best, helping you maintain a comfortable indoor environment even when outdoor temperatures soar.",
        }
      ],
    },
  ],
  footerNote: {
    label: "Crafft Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "crafft-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Crafft AC Service Coverage Across Dubai",
  description:
    "Prompt Crafft air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "crafft-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Crafft AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Crafft AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Crafft AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Crafft AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Crafft AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Crafft AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Crafft AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Crafft AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Crafft AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Crafft AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Crafft AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Crafft AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Crafft AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "crafft-ac-news",
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
    "Choose a planned Crafft AC maintenance schedule based on property size, unit type, operating hours and response priorities in Dubai.",
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
    "Book your Crafft AC service appointment with our expert team across Dubai. We provide professional Crafft AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Crafft AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Crafft AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Crafft AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Crafft AC service in Dubai:",
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

const crafftData = {
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

export default crafftData;
