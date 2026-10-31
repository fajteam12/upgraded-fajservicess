import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Samsung Air Conditioning | Samsung AC Repair and Service Dubai",
  description: "Top-rated Samsung AC repair and service in Dubai. Call FAJ at 043300002 for Samsung AC central, VRF & split maintenance servicing near you, UAE",
  keywords: "Samsung AC Repair, Samsung AC Service, Samsung Air Conditioner Maintenance, Samsung AC Cleaning, Samsung AC Installation, Samsung AC Repair Dubai, Samsung Air Conditioner Service Dubai, Samsung Split AC Repair Dubai, Samsung Central AC Service Dubai",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Samsung Air Conditioning | Samsung AC Repair and Service Dubai",
    description: "Top-rated Samsung AC repair and service in Dubai. Call FAJ at 043300002 for Samsung AC central, VRF & split maintenance servicing near you, UAE",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samsung Air Conditioning | Samsung AC Repair and Service Dubai",
    description: "Top-rated Samsung AC repair and service in Dubai. Call FAJ at 043300002 for Samsung AC central, VRF & split maintenance servicing near you, UAE",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public",
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
    "We offer Samsung AC service and maintenance packages tailored to meet the specific requirements of your business, ensuring that your Samsung air conditioning system operates smoothly. If you require Samsung AC repair, or inspection of your Samsung air conditioning system, please fill out our inquiry form, and we will send you a quote the same day.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "samsung-ac-services",
  title: "Samsung AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, professional Samsung AC repair services are available, and it is essential to hire a qualified technician. Our specialized team focuses on servicing Samsung AC systems in Dubai and Sharjah. FAJ is committed to delivering reliable solutions that enhance indoor comfort year-round while ensuring optimal system efficiency.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Samsung AC repair services in Dubai?",
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
  id: "samsung-ac-maintenance-signs",
  title: "Top Common Signs That You Need Samsung AC Maintenance",
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
  title: "Why Is My Samsung AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your Samsung AC is running but not cooling properly, there are several factors that may be responsible.",
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
    alt: "FAJ technician servicing Samsung air conditioning in Dubai",
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
  title: "HERE ARE THE SERVICES WE OFFER FOR SAMSUNG AC SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional Samsung AC repair services for homes and businesses. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service across Dubai.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance service helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your Samsung AC system. Your AC runs better in extreme Dubai heat with regular maintenance service.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We provide expert installation for all Samsung AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Services",
      description:
        "Professional Samsung AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
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
    "Schedule your FAJ Samsung AC Cleaning, AC Repair & Maintenance Services today!",
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
  title: "Why is Samsung AC Maintenance Service Important in Dubai?",
  description:
    "To ensure your Samsung central air conditioner runs smoothly in Dubai's heat, regular aircon maintenance is crucial. At FAJ, we offer expert Samsung AC services to ensure optimal cooling and year-round comfort. We're here to keep your system performing at its best!",
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Samsung AC Maintenance Service Important in Dubai?",
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
  title: "KEY BENEFITS OF REGULAR SAMSUNG AC MAINTENANCE IN DUBAI",
  items: [
    {
        "icon": "ac-sun",
        "badge": "Extreme Climate",
        "title": "Extreme Weather",
        "description": "During the excessively warm summer months, temperatures may exceed 40°C (104°F). Regular maintenance ensures your Samsung AC performs efficiently."
    },
    {
        "icon": "zap",
        "badge": "Lower Consumption",
        "title": "Energy Efficiency",
        "description": "A well-maintained Samsung air conditioner operates efficiently, leading to energy savings and reduced DEWA electricity bills."
    },
    {
        "icon": "ac-fan",
        "badge": "Protect Equipment",
        "title": "Longevity of Equipment",
        "description": "Regular maintenance of Samsung AC units is crucial for optimal performance and extends the unit's lifespan, saving on early replacements."
    },
    {
        "icon": "wind",
        "badge": "Healthier Spaces",
        "title": "Improved Air Quality",
        "description": "Routine Samsung air conditioner cleaning service prevents dust and allergens from circulating, leading to improved indoor air quality."
    },
    {
        "icon": "peace-of-mind",
        "badge": "Consistent Cooling",
        "title": "Enhanced Comfort",
        "description": "Regular maintenance of Samsung air conditioners in Dubai is essential for consistent performance, keeping your home comfortable all year."
    }
],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const commonProblemsData = {
  title: "Common Samsung AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from Samsung AC vents may indicate a problem, such as a clogged filter or a faulty fan, which should be addressed to ensure efficient cooling."
    },
    {
        "title": "Warm Air",
        "description": "If your Samsung AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your Samsung AC may indicate mechanical issues that require attention."
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
        "description": "A Samsung air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Samsung AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Samsung air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Samsung AC Service and Maintenance in Dubai",
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
      id: "samsung-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Samsung cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "samsung-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Samsung filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "samsung-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "samsung-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "samsung-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "samsung-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-samsung-ac-service",
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
        "Choose a day and time for your Samsung AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Samsung AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
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
    "See the real results of our thorough Samsung air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Samsung air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Samsung air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Samsung AC Services for the Following Types",
  columns: [
    {
      title: "Samsung Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
                "title": "Samsung Split Air Conditioner Service",
                "text": "FAJ is a trusted provider of Samsung split air conditioner repair and maintenance in Dubai. Our skilled technicians specialize in Samsung VRF systems and central AC units, ensuring optimal performance. Whether for routine maintenance or urgent repairs, we are dedicated to delivering exceptional service tailored to your needs."
        },
        {
                "title": "Samsung Central Air Conditioner Repair and Service",
                "text": "FAJ is a premier service provider specializing in the repair and maintenance of Samsung air conditioner in Dubai. The company is committed to addressing the diverse needs of its clientele, whether they require routine AC maintenance or urgent repairs. With a focus on professionalism and expertise, FAJ ensures high-quality service and customer satisfaction."
        },
        {
                "title": "Samsung AC Service and Repair",
                "text": "Samsung AC Service provides peace of mind with our skilled technicians. At FAJ, we specialize in efficient and reliable Samsung AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year!"
        },
        {
                "title": "Samsung Inverter Air Conditioner Maintenance",
                "text": "Count on our dedicated team to promptly resolve any concerns with your Samsung air conditioner maintenance and bring it back to peak performance!"
        },
        {
                "title": "Samsung HVAC Repair",
                "text": "We have extensive expertise in Samsung cassette and package unit AC systems, providing reliable repairs to ensure your unit operates efficiently."
        }
],
    },
    {
      title: "Specialized Samsung AC Units & Systems:",
      items: [
        {
                "title": "Samsung Ceiling AC Service and Repair",
                "text": "Our specialists can quickly diagnose and resolve any issues with your Samsung ceiling AC repair and service."
        },
        {
                "title": "Samsung VRF (Variable Refrigerant Flow) System Service and Repair",
                "text": "FAJ's Samsung Variable Refrigerant Flow (VRF) repair and maintenance services provide efficient HVAC solutions tailored to your needs. Our expert team prioritizes your comfort and satisfaction, ensuring reliable service and peace of mind in managing your climate control requirements."
        },
        {
                "title": "Samsung Ducted Split AC Service and Repair",
                "text": "For reliable Samsung AC repair and maintenance in Dubai, our experienced technicians are ready to assist you. With expertise in diagnosing a variety of Samsung AC issues and resolving error codes, we guarantee minimal disruption to your comfort. Trust us for prompt and effective service that delivers the cooling relief you need."
        },
        {
                "title": "Samsung Wall-Mounted Air Conditioner Service and Repair",
                "text": "Stay cool in the extreme heat of Dubai with our professional Samsung air conditioning repair and maintenance services. We are dedicated to ensuring your unit operates at its best, helping you maintain a comfortable indoor environment even when outdoor temperatures soar."
        }
],
    },
  ],
  footerNote: {
    label: "Samsung Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "samsung-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Samsung AC Service Coverage Across Dubai",
  description:
    "Prompt Samsung air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "samsung-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Samsung AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Samsung AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Samsung AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Samsung AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Samsung AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Samsung AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Samsung AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Samsung AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Samsung AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Samsung AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Samsung AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Samsung AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Samsung AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "samsung-ac-news",
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
    "Book your Samsung AC service appointment with our expert team across Dubai. We provide professional Samsung AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Samsung AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Samsung AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Samsung AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Samsung AC service in Dubai:",
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

const samsungData = {
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

export default samsungData;
