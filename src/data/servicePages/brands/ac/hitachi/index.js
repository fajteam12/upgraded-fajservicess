import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Best Hitachi AC Repair and Maintenance Service in Dubai | FAJ",
  description: "Looking for cost-effective Hitachi AC repair and maintenance in Dubai? Get the best Hitachi Cooling & Heating AC system cleaning service near you",
  keywords: "Hitachi AC Repair in Dubai, Hitachi AC Maintenance in Dubai, Hitachi AC Fix in Dubai, Hitachi AC Service in Dubai, Hitachi Air Condition Repair in Dubai, Hitachi Air Condition Maintenance in Dubai, Hitachi",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best Hitachi AC Repair and Maintenance Service in Dubai | FAJ",
    description: "Looking for cost-effective Hitachi AC repair and maintenance in Dubai? Get the best Hitachi Cooling & Heating AC system cleaning service near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/hitachi/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hitachi AC Repair and Maintenance Service in Dubai | FAJ",
    description: "Looking for cost-effective Hitachi AC repair and maintenance in Dubai? Get the best Hitachi Cooling & Heating AC system cleaning service near you",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const overviewData = {
  id: "overview",
  paragraphs: [
    "With years of experience in installing and servicing all types of units, we are confident in our ability to provide you with exceptional air conditioning services, maintenance packages, and installation solutions—all backed by our commitment to high-quality expertise.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "hitachi-ac-services",
  title: "Hitachi AC Maintenance and Services",
  paragraphs: [
    "If you are in Dubai and require Hitachi AC repair FAJ offers services for this need. The team specializes in ensuring air conditioning systems operate efficiently in Dubai and Sharjah, delivering reliable solutions for maintaining indoor comfort throughout the year. Services aim to enhance the indoor environment.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Hitachi AC repair services in Dubai?",
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
  id: "hitachi-ac-maintenance-signs",
  title: "Top Common Signs That You Need Hitachi AC Maintenance",
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
      href:
        "https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling",
      external: true,
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "Why Is My Hitachi AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Hitachi AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Hitachi air conditioning in Dubai",
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
  id: "ac-services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR HITACHI AC SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional Hitachi AC repair services for homes and businesses. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service across Dubai.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance service helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your Hitachi AC system. Your AC runs better in extreme Dubai heat with regular maintenance service.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We provide expert installation for all Hitachi AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Services",
      description:
        "Professional Hitachi AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
      actionLabel: "Book AC Cleaning",
    },
    {
      icon: "peace-of-mind",
      title: "Annual Maintenance Contract (AMC)",
      description:
        "Our AMC plans include regular inspections. They also include preventive maintenance and priority support. We provide scheduled servicing throughout the year. It helps you avoid unexpected repair costs.",
      actionLabel: "View AMC Plans",
    },
  ],
  bottomTitle:
    "Schedule your FAJ Hitachi AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "https://www.youtube.com/watch?v=pkO_jobGdBo",
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
  id: "ac-maintenance-importance",
  title: "Why Hitachi AC Maintenance Service is Essential in Dubai?",
  paragraphs: [
    "To guarantee your Hitachi central air conditioner functions efficiently in Dubai's intense heat, regular AC maintenance is essential. At FAJ , we offer expert aircon services designed to enhance your system’s performance and comfort year-round. Trust us to keep your air conditioner operating at its best.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Hitachi AC Maintenance Service Important in Dubai?",
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
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR HITACHI AC MAINTENANCE IN DUBAI",
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
  title: "Common Hitachi AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from a Hitachi air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling."
    },
    {
        "title": "Warm Air",
        "description": "If your Hitachi AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your Hitachi AC may indicate mechanical issues that require attention."
    },
    {
        "title": "Foul Odors",
        "description": "Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately."
    },
    {
        "title": "Frequent Cycling",
        "description": "The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A Hitachi air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Hitachi AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Hitachi air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Hitachi AC Service and Maintenance in Dubai",
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
      id: "hitachi-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Hitachi cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "hitachi-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Hitachi filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "hitachi-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "hitachi-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "hitachi-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "hitachi-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-hitachi-ac-service",
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
        "Choose a day and time for your Hitachi AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Hitachi AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Hitachi air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Hitachi air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Hitachi air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Hitachi AC Services for the Following Types",
  columns: [
    {
      title: "Hitachi Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
                "title": "Hitachi Air Conditioner Installation Service in Dubai",
                "text": "A comprehensive solution for your cooling needs. We specialize in high-quality Hitachi AC installation services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance."
        },
        {
                "title": "Installation Climate Check",
                "text": "Understanding your unique requirements based on the local climate and your building's features."
        },
        {
                "title": "Expert AC Installation",
                "text": "Our skilled AC technicians ensure that the AC installation is performed to the highest standards, adhering to all safety protocols."
        },
        {
                "title": "Post-Installation Support",
                "text": "We provide advice on operating your new air conditioner, including tips on energy efficiency and maintenance."
        },
        {
                "title": "Warranty and Service Packages",
                "text": "To ensure your peace of mind, we offer warranty options and additional service packages for maintenance and repair in Dubai and Sharjah."
        }
],
    },
    {
      title: "Specialized Hitachi AC Units & Systems:",
      items: [
        {
                "title": "Hitachi AC AMC Services in Dubai",
                "text": "We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers."
        },
        {
                "title": "Hitachi Air Conditioner Repair in Dubai",
                "text": "Stay cool during the hot Dubai summer with our expert Hitachi inverter AC repair in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs."
        },
        {
                "title": "Hitachi AC Cleaning & Deep Wash Service",
                "text": "Deep cleaning your air conditioner brings several key benefits: Improved Air Quality, Reduced Energy Consumption, Extended Lifespan, Odour Elimination, and Reduced Mold Growth."
        },
        {
                "title": "Hitachi Set Free VRF & Ducted AC Maintenance",
                "text": "Professional diagnosis and repair for all Hitachi Set Free VRF systems, ducted split units, and commercial cooling equipment in Dubai."
        }
],
    },
  ],
  footerNote: {
    label: "Hitachi Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "hitachi-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Hitachi AC Service Coverage Across Dubai",
  description:
    "Prompt Hitachi air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "hitachi-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Hitachi AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Hitachi AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Hitachi AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Hitachi AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Hitachi AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Hitachi AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Hitachi AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Hitachi AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Hitachi AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Hitachi AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Hitachi AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Hitachi AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Hitachi AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "hitachi-ac-news",
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


const bookingData = {
  title: "Book An Appointment",
  description:
    "Book your Hitachi AC service appointment with our expert team across Dubai. We provide professional Hitachi AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Hitachi AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Hitachi AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Hitachi AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Hitachi AC service in Dubai:",
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

const hitachiData = {
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

export default hitachiData;
