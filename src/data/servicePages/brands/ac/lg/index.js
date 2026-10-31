import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Expert LG AC Repair and LG AC Maintenance Service in Dubai",
  description: "Need LG AC repair in Dubai? Call 043300002 for specialised LG multi split, VRF, and central air conditioning maintenance services with a warranty",
  keywords: "LG AC Repair in Dubai, LG Air Conditioner Maintenance, LG AC Service, LG Split AC Repair, LG Central AC Service, LG VRF AC Repair, LG Air Conditioning Dubai",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Expert LG AC Repair and LG AC Maintenance Service in Dubai",
    description: "Need LG AC repair in Dubai? Call 043300002 for specialised LG multi split, VRF, and central air conditioning maintenance services with a warranty",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert LG AC Repair and LG AC Maintenance Service in Dubai",
    description: "Need LG AC repair in Dubai? Call 043300002 for specialised LG multi split, VRF, and central air conditioning maintenance services with a warranty",
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
    "Since 2010, FAJ Technical Services L.L.C has been a trusted provider of LG air conditioning solutions in Dubai and Sharjah. Our skilled team specialises in LG AC cleaning service, maintenance, repairs, and installation of a diverse range of residential and commercial LG AC units. We are committed to ensuring that your air conditioning system operates at peak performance, promoting a comfortable indoor environment.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "lg-ac-services",
  title: "LG AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, LG air conditioner repair are available. It is imperative to select a qualified LG AC technician. Our specialized team focuses on the service and maintenance of LG air conditioning systems throughout Dubai and Sharjah. FAJ is dedicated to delivering reliable solutions that enhance indoor comfort consistently throughout the year, while also ensuring that your system operates with optimal efficiency.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best LG AC repair services in Dubai?",
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
  id: "lg-ac-maintenance-signs",
  title: "Top Common Signs That You Need LG AC Maintenance",
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
  title: "Why Is My LG AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your LG AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing LG air conditioning in Dubai",
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
  title: "HERE ARE THE SERVICES WE OFFER FOR LG AC SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional LG AC repair services for homes and businesses. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service across Dubai.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance service helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your LG AC system. Your AC runs better in extreme Dubai heat with regular maintenance service.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We provide expert installation for all LG AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Services",
      description:
        "Professional LG AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
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
    "Schedule your FAJ LG AC Cleaning, AC Repair & Maintenance Services today!",
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
  title: "Why is LG AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To keep your LG central air conditioner running smoothly in Dubai's heat, regular maintenance is crucial. At FAJ, we offer expert LG aircon services for, ensuring optimal cooling and comfort year-round. Here to help keep your system running at its best!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is LG AC Maintenance Service Important in Dubai?",
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
  title: "KEY BENEFITS OF REGULAR LG AC MAINTENANCE IN DUBAI",
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
  title: "Common LG AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description: "Reduced airflow of LG AC vents could indicate a problem, such as a filter or a faulty fan, which should be addressed to maintain efficient cooling.",
    },
    {
      title: "Warm Air",
      description: "If your LG AC is blowing warm air, it may have problems with the compressor, refrigerant levels, or ductwork.",
    },
    {
      title: "Strange Noises",
      description: "Unusual sounds like grinding, squeaking, or banging from your LG AC may indicate mechanical issues that require attention.",
    },
    {
      title: "Foul Odors",
      description: "Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.",
    },
    {
      title: "Frequent Cycling",
      description: "The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.",
    },
    {
      title: "High Humidity Levels",
      description: "An LG air conditioner that fails to reduce humidity may have cooling capacity problems or may not be functioning correctly.",
    },
    {
      title: "Leaking Water",
      description: "Water pooling around the LG AC or dripping from the vents may indicate a blocked drain or frozen coils.",
    },
    {
      title: "Increased Energy Bills",
      description: "High energy bills without increased usage may indicate inefficiencies in LG air conditioning due to dirty filters or duct leaks.",
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
  title: "Benefits Of Regular LG AC Service and Maintenance in Dubai",
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
      id: "lg-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of LG cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "lg-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing LG filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "lg-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "lg-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "lg-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "lg-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-lg-ac-service",
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
        "Choose a day and time for your LG AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in LG AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough LG air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "LG air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "LG air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in LG AC Services for the Following Types",
  columns: [
    {
      title: "LG Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
                "title": "LG Split Air Conditioner Service",
                "text": "FAJ is your trusted provider for LG split air conditioner repair and maintenance in Dubai. Our expert technicians specialize in LG VRF systems and central AC units, ensuring optimal efficiency and comfort."
        },
        {
                "title": "LG Central Air Conditioner Repair and Service",
                "text": "FAJ is a leading service provider for LG air conditioners in Dubai, specializing in the repair and maintenance of these innovative cooling systems."
        },
        {
                "title": "LG AC Service and Repair",
                "text": "LG AC Service provides peace of mind with our skilled technicians. At FAJ, we specialize in efficient and reliable LG AC maintenance, repair, and installation."
        },
        {
                "title": "LG Inverter Air Conditioner Maintenance",
                "text": "Count on our dedicated team to promptly resolve any concerns with your LG air conditioner maintenance and bring it back to peak performance!"
        },
        {
                "title": "LG HVAC Repair",
                "text": "We have extensive expertise in LG cassette and package unit AC systems, providing reliable repairs to ensure your unit operates efficiently."
        }
],
    },
    {
      title: "Specialized LG AC Units & Systems:",
      items: [
        {
                "title": "LG Ceiling AC Service and Repair",
                "text": "Our specialists can quickly diagnose and resolve any issues with your LG ceiling AC repair and service."
        },
        {
                "title": "LG VRF (Variable Refrigerant Flow) System Service and Repair",
                "text": "FAJ's LG Variable Refrigerant Flow (VRF) repair and maintenance services provide efficient HVAC solutions tailored to your needs."
        },
        {
                "title": "LG Ducted Split AC Service and Repair",
                "text": "For trustworthy repair and maintenance of LG ducted split air conditioners (AC) in Dubai, our skilled technicians are here to help. With expertise in diagnosing a wide range of LG AC issues and error fixes."
        },
        {
                "title": "LG Wall-Mounted Air Conditioner Service and Repair",
                "text": "Mitigate the extreme heat of Dubai through our professional LG air conditioning repair and maintenance services. We are committed to ensuring that your unit operates at optimal efficiency."
        }
],
    },
  ],
  footerNote: {
    label: "LG Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "lg-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "LG AC Service Coverage Across Dubai",
  description:
    "Prompt LG air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "lg-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional LG AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "LG AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "LG AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "LG AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "LG AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "LG AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "LG AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "LG AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "LG AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "LG AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "LG AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "LG AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "LG AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "lg-ac-news",
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
    "Book your LG AC service appointment with our expert team across Dubai. We provide professional LG AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your LG AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "LG AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request LG AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request LG AC service in Dubai:",
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

const lgData = {
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

export default lgData;
