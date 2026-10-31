import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Expert Lennox AC Repair & Maintenance Services in Dubai",
  description: "Get professional Lennox AC repair and service in Dubai, UAE. Contact FAJ for the best Lennox HVAC & central air conditioning maintenance and fix error",
  keywords: "Lennox AC Repair in Dubai, Lennox AC Maintenance in Dubai, Lennox Air Conditioner Service, Lennox Air Conditioner Repair, Lennox Air Conditioner Maintenance, Lennox Air Conditioner Fix, Lennox Air Conditioner Service in Dubai, Lennox Air Conditioning Repair in Dubai, Lennox Air Conditioning Maintenance in Dubai",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/lennox/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Expert Lennox AC Repair & Maintenance Services in Dubai",
    description: "Get professional Lennox AC repair and service in Dubai, UAE. Contact FAJ for the best Lennox HVAC & central air conditioning maintenance and fix error",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/lennox/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Lennox AC Repair & Maintenance Services in Dubai",
    description: "Get professional Lennox AC repair and service in Dubai, UAE. Contact FAJ for the best Lennox HVAC & central air conditioning maintenance and fix error",
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
    "Since 2010, FAJ Technical Services L.L.C has been a trusted provider of Lennox air conditioning solutions in Dubai and Sharjah. Our experienced team offers a full range of services, including Lennnox AC repair, cleaning service, maintenance and installation for residential and commercial units, ensuring optimal efficiency and enhanced indoor comfort.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "lennox-ac-services",
  title: "Lennox AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, hiring skilled technicians for Lennox AC repair services is essential. Our team specializes in servicing Lennox AC systems in both Dubai and Sharjah, providing reliable solutions that ensure your indoor space remains comfortable throughout the year while maintaining the efficiency of your system.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Lennox AC repair services in Dubai?",
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
  id: "lennox-ac-maintenance-signs",
  title: "Top Common Signs That You Need Lennox AC Maintenance",
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
  title: "Why Is My Lennox AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Lennox AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Lennox air conditioning in Dubai",
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
  title: "HERE ARE THE SERVICES WE OFFER FOR LENNOX AC SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional Lennox AC repair services for homes and businesses. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service across Dubai.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance service helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your Lennox AC system. Your AC runs better in extreme Dubai heat with regular maintenance service.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We provide expert installation for all Lennox AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Services",
      description:
        "Professional Lennox AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
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
    "Schedule your FAJ Lennox AC Cleaning, AC Repair & Maintenance Services today!",
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
  title: "Why is Lennox AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To ensure your Lennox central air conditioner operates efficiently in Dubai's extreme heat, regular maintenance is essential. At FAJ , we provide expert AC services designed to maximize cooling and comfort all year round. Our team is dedicated to maximizing your system's performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Lennox AC Maintenance Service Important in Dubai?",
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
  title: "KEY BENEFITS OF REGULAR LENNOX AC MAINTENANCE IN DUBAI",
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
  title: "Common Lennox AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from Lennox AC ducts may mean a blocked filter or faulty motor. Addressing these issues quickly is important for effective cooling and lifespan."
    },
    {
        "title": "Warm Air",
        "description": "If your Lennox AC is blowing warm air, it may have issues with the compressor, refrigerant levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds such as grinding, squeaking, or banging from your Lennox AC may indicate mechanical issues that need attention."
    },
    {
        "title": "Foul Odors",
        "description": "Unpleasant odors from the vents may indicate growing mold or mildew and should be addressed immediately."
    },
    {
        "title": "Frequent Cycling",
        "description": "The inability to maintain the desired AC temperatures may signal issues such as dirty filters, low refrigerant levels, or a faulty thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A Lennox air conditioner that fails to reduce humidity may have cooling capacity problems or might not be functioning properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Lennox AC or dripping from the vents may indicate either a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Lennox air conditioning, possibly due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Lennox AC Service and Maintenance in Dubai",
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
      id: "lennox-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Lennox cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "lennox-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Lennox filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "lennox-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "lennox-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "lennox-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "lennox-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-lennox-ac-service",
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
        "Choose a day and time for your Lennox AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Lennox AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Lennox air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Lennox air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Lennox air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Lennox AC Services for the Following Types",
  columns: [
    {
      title: "Lennox Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
                "title": "Lennox Split Air Conditioner Service",
                "text": "FAJ is a trusted provider of Lennox air conditioning repair and maintenance services in Dubai. Our skilled technicians specialize in Lennox VRF air conditioning units, central AC ensuring optimal performance."
        },
        {
                "title": "Lennox Central Air Conditioner Repair and Service",
                "text": "FAJ is a major service provider specializing in the Lennox AC repair and maintenance in Dubai. The company proficiently addresses the requirements of its clients, guaranteeing exceptional service quality."
        },
        {
                "title": "Lennox AC Service and Repair",
                "text": "At Lennox AC Service, we bring you peace of mind with our skilled AC technicians. At FAJ, we are dedicated to delivering efficient and reliable Lennox AC maintenance, repair, and installation."
        },
        {
                "title": "Lennox Inverter Air Conditioner Maintenance",
                "text": "Trust our dedicated team to quickly address and resolve any issues with your Lennox air conditioner maintenance, ensuring it is restored to optimal performance without delay!"
        },
        {
                "title": "Lennox HVAC Repair",
                "text": "We specialize in Lennox HVAC, cassette and package unit AC systems, providing reliable repairs to ensure your units operate efficiently."
        }
],
    },
    {
      title: "Specialized Lennox AC Units & Systems:",
      items: [
        {
                "title": "Lennox Ceiling AC Service and Repair",
                "text": "Our specialists can quickly diagnose and resolve any issues with your Lennox ceiling air conditioner and ducted split AC services."
        },
        {
                "title": "Lennox VRF (Variable Refrigerant Flow) System Service and Repair",
                "text": "FAJ's Lennox VRF (Variable Refrigerant Flow) repair and maintenance services offer tailored HVAC solutions. Our knowledgeable team focuses on your comfort and satisfaction."
        },
        {
                "title": "Lennox Ducted Split AC Service and Repair",
                "text": "For reliable Lennox air conditioning repair and maintenance in Dubai, our skilled technicians are here to help. With expertise in diagnosing various issues and resolving error codes."
        },
        {
                "title": "Lennox Wall-Mounted Air Conditioner Service and Repair",
                "text": "In Dubai, UAE, where extreme heat is common, maintaining a comfortable indoor climate is essential. Our Lennox air conditioning repair, maintenance, and cleaning services ensure optimal unit performance."
        }
],
    },
  ],
  footerNote: {
    label: "Lennox Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "lennox-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Lennox AC Service Coverage Across Dubai",
  description:
    "Prompt Lennox air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "lennox-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Lennox AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Lennox AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Lennox AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Lennox AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Lennox AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Lennox AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Lennox AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Lennox AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Lennox AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Lennox AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Lennox AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Lennox AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Lennox AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "lennox-ac-news",
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
    "Book your Lennox AC service appointment with our expert team across Dubai. We provide professional Lennox AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Lennox AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Lennox AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Lennox AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Lennox AC service in Dubai:",
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

const lennoxData = {
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

export default lennoxData;
