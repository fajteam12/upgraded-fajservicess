import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import pricingData from "./pricingData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";
import faqsData from "./faqsData";

const seoData = {
  title: "SKM Air Conditioning | SKM AC Repair and Maintenance Services",
  description: "FAJ is now offering AMC contract services and SKM AC repair in Dubai and Sharjah. Call FAJ for central & package unit SKM air conditioner maintenance",
  keywords: "Skm AC Repair, Skm Air Conditioner Service, Skm AC Maintenance, Skm Air Conditioner Repair, Skm Air Conditioner Service Dubai, Skm Air Conditioner Maintenance Dubai, Skm AC Fix Dubai, Skm AC Service Dubai",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/skm/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "SKM Air Conditioning | SKM AC Repair and Maintenance Services",
    description: "FAJ is now offering AMC contract services and SKM AC repair in Dubai and Sharjah. Call FAJ for central & package unit SKM air conditioner maintenance",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/skm/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKM Air Conditioning | SKM AC Repair and Maintenance Services",
    description: "FAJ is now offering AMC contract services and SKM AC repair in Dubai and Sharjah. Call FAJ for central & package unit SKM air conditioner maintenance",
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
  eyebrow: "SKM AC Specialists",
  title: "Top-Rated SKM Air Conditioner Repair and Maintenance Service in Dubai, UAE",
  paragraphs: [
    "If you're looking for the fastest and most affordable SKM AC Repair Service in Dubai, you've come to the right place. FAJ Technical Services L.L.C , providing services since 2010, is a major SKM AC repair and service expert in Dubai. We cater to all types of air conditioning systems and every type available. As one of the leading air conditioning companies in Dubai, we excel in offering top-notch repair services for both AC and HVAC systems.",
  ],
  paragraph: "If you're looking for the fastest and most affordable SKM AC Repair Service in Dubai, you've come to the right place. FAJ Technical Services L.L.C , providing services since 2010, is a major SKM AC repair and service expert in Dubai. We cater to all types of air conditioning systems and every type available. As one of the leading air conditioning companies in Dubai, we excel in offering top-notch repair services for both AC and HVAC systems.",
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
    id: "ac-brand-logos/skm-logo",
    src: "/img/ac-brand-logos/skm-logo.webp",
    alt: "Skm Air Conditioning Repair and Maintenance in Dubai",
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
    "In Dubai, we ensure the best prices, exceptional service, and complete customer satisfaction. We are known for valuing our customers, treating each one with equal importance, and providing reliable support.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "skm-ac-services",
  title: "SKM AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, it's crucial to choose experienced technicians for SKM AC repair. Our team specializes in servicing SKM AC systems, ensuring your indoor climate remains cool and comfortable during peak heat.",
    {
      parts: [
        "We are the experts in " + "SKM" + " ",
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
    alt: "Who provides the best SKM AC repair services in Dubai?",
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
  id: "skm-ac-maintenance-signs",
  title: "Top Common Signs That You Need SKM AC Maintenance",
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
    },
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
  title: "Why Is My SKM AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your SKM AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing SKM air conditioning in Dubai",
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
  id: "skm-ac-services-offered",
  title: "HERE ARE THE SERVICES WE OFFER FOR SKM AC SYSTEMS",
  columns: "three",
  items: [
    {
      icon: "ac-installation",
      title: "SKM AC Installation:",
      description: "The professional installation of various SKM air conditioning systems ensures optimal performance.",
      actionLabel: "Request Service",
    },
    {
      icon: "diagnostics",
      title: "SKM AC Inspection:",
      description: "We provide precise fault diagnosis to identify system issues, along with detailed quotes and eligibility assessments to address your concerns.",
      actionLabel: "Request Service",
    },
    {
      icon: "ac-repair",
      title: "SKM AC Repair Service:",
      description: "We offer fast repair services for SKM air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for more information!",
      actionLabel: "Request Service",
    },
    {
      icon: "peace-of-mind",
      title: "SKM AC Annual Maintenance Contract:",
      description: "The contract details the annual maintenance requirements for SKM AC.",
      actionLabel: "Request Service",
    },
    {
      icon: "diagnostics",
      title: "SKM AC Diagnostics",
      description: "Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes.",
      actionLabel: "Book Diagnostics",
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
  id: "skm-ac-maintenance-importance",
  title: "Why is SKM AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To maintain the efficient operation of SKM air conditioners in Dubai's extreme heat, regular servicing is essential. FAJ provides expert AC services designed to ensure optimal cooling and comfort throughout the year. Our team is dedicated to maximising your system's performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is SKM AC Maintenance Service Important in Dubai?",
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
  id: "skm-ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR SKM AC MAINTENANCE IN DUBAI",
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
  title: "Common SKM AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      number: "01",
      title: "Weak Airflow",
      description: "Reduced airflow from SKM AC ducts may indicate a blocked filter or faulty motor. Timely action is crucial for efficient cooling and system longevity.",
    },
    {
      number: "02",
      title: "Warm Air",
      description: "If your SKM AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork.",
    },
    {
      number: "03",
      title: "Strange Noises",
      description: "Unusual sounds like grinding, squeaking, or banging from your SKM AC may indicate mechanical issues that require attention.",
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
      description: "A SKM air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.",
    },
    {
      number: "07",
      title: "Leaking Water",
      description: "Water pooling around the SKM AC or dripping from the vents may indicate a blocked drain or frozen coils.",
    },
    {
      number: "08",
      title: "Increased Energy Bills",
      description: "High energy bills without increased usage may indicate inefficiencies in SKM air conditioning due to dirty filters or duct leaks.",
    },
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
  title: "Benefits Of Regular SKM AC Service and Maintenance in Dubai",
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
      id: "skm-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of SKM cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "skm-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing SKM filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "skm-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "skm-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "skm-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "skm-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-skm-ac-service",
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
        "Choose a day and time for your SKM AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in SKM AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough SKM air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "SKM air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "SKM air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in SKM AC services for the following types",
  columns: [
    {
      title: "SKM Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "SKM Split Air Conditioner Service:",
          text: "FAJ is a trusted provider of SKM AC cleaning service and maintenance in Dubai. Our skilled technicians specialise in SKM VRF central AC units, ensuring optimal performance. Whether you need routine AC maintenance or urgent repairs, we prioritise delivering personalised service for your comfort.",
        },
        {
          title: "SKM Central Air Conditioner Repair and Service:",
          text: "FAJ is a premier service provider for SKM air conditioner repair and maintenance in Dubai. The company effectively addresses its clients' needs, ensuring high-quality service and customer satisfaction, whether for routine maintenance or urgent repairs.",
        },
        {
          title: "SKM AC Service and Repair:",
          text: "At SKM AC Service, we provide peace of mind with our team of experienced technicians. At FAJ, we specialise in efficient and reliable maintenance, repair, and installation of SKM AC systems. You can trust our expert team to keep your HVAC system in excellent condition, ensuring your comfort throughout the year!",
        },
        {
          title: "SKM Inverter Air Conditioner Maintenance:",
          text: "Depend on our dedicated team to swiftly address and resolve any issues with your SKM air conditioner maintenance, ensuring it is restored to peak performance without delay!",
        },
        {
          title: "SKM HVAC Repair:",
          text: "We specialize in SKM cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently.",
        },
      ],
    },
    {
      title: "Specialized SKM AC Units & Systems:",
      items: [
        {
          title: "SKM Ceiling AC Service and Repair:",
          text: "Our specialists can quickly diagnose and resolve any issues with your SKM ceiling AC repair and ducted split AC service.",
        },
        {
          title: "SKM VRF (Variable Refrigerant Flow) System Service and Repair:",
          text: "FAJ's SKM Variable Refrigerant Flow (VRF) repair and maintenance services provide customised HVAC solutions. Our expert team prioritizes your comfort and satisfaction, ensuring dependable service for your climate control needs.",
        },
        {
          title: "SKM Ducted Split AC Service and Repair:",
          text: "For reliable SKM air conditioning repair and maintenance in Dubai, our skilled technicians are ready to assist you. With expertise in diagnosing various issues and resolving error codes, we ensure minimal disruption to your comfort. Trust us for prompt service that delivers the cooling relief you need.",
        },
        {
          title: "SKM Wall-Mounted Air Conditioner Service and Repair:",
          text: "In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our SKM package unit AC repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures.",
        },
      ],
    },
  ],
  footerNote: {
    label: "SKM Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "skm-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "SKM AC Service Coverage Across Dubai",
  description:
    "Prompt SKM air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "skm-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional SKM AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "SKM AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "SKM AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "SKM AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "SKM AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "SKM AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "SKM AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "SKM AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "SKM AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "SKM AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "SKM AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "SKM AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "SKM AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "skm-ac-news",
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
    "Choose a planned SKM AC maintenance schedule based on property size, unit type, operating hours and response priorities in Dubai.",
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
    "Book your SKM AC service appointment with our expert team across Dubai. We provide professional SKM AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  badges: ["Same Day Service", "Fair Pricing", "Transparent Diagnostic"],
  benefits: [
    "Expert technicians with experience across Dubai",
    "Comprehensive diagnostics with upfront estimates",
    "Complete support for residential and commercial cooling",
  ],
  supportTitle: "Customer Support",
  supportHotline: "+971 50 746 4712",
  supportNote: "Available 7 Days a week across Dubai and nearby communities.",
};

const faqsNormalized = {
  ...faqsData,
  items: faqsData?.items || faqsData?.faqs || [],
  faqs: faqsData?.faqs || faqsData?.items || [],
};

const skmData = {
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

export default skmData;
