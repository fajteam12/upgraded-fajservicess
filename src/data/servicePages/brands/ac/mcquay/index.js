import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Top McQuay Air Conditioning Repair & Maintenance Service Dubai",
  description:
    "FAJ offers ongoing maintenance & on-demand McQuay AC repair and cleaning services in Dubai, as well as air conditioner repairs near you. Call us today",
  keywords:
    "MacQuay AC Repair in Dubai, McQuay Air Conditioner Maintenance, McQuay AC Service, McQuay AC Fix, McQuay Air Condition Repair, McQuay Air Condition Maintenance, McQuay Air Con Service",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Top McQuay Air Conditioning Repair & Maintenance Service Dubai",
    description:
      "FAJ offers ongoing maintenance & on-demand McQuay AC repair and cleaning services in Dubai, as well as air conditioner repairs near you. Call us today",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/mcquay/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top McQuay Air Conditioning Repair & Maintenance Service Dubai",
    description:
      "FAJ offers ongoing maintenance & on-demand McQuay AC repair and cleaning services in Dubai, as well as air conditioner repairs near you. Call us today",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
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
    "A McQuay air conditioner is essential for year-round comfort. Regular maintenance is vital for optimal performance. In Dubai, numerous professional cleaning services specialize in McQuay systems, helping you keep your air conditioning running efficiently.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "mcquay-ac-services",
  title: "McQuay AC Maintenance and Servicing",
  paragraphs: [
    "When addressing McQuay air conditioning repair , it is essential to engage a qualified technician for residential or commercial needs. We specialize in McQuay AC repair and maintenance throughout Dubai and Sharjah. The FAJ team is dedicated to ensuring year-round comfort for our clients.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best McQuay AC repair services in Dubai?",
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
  id: "common-signs",
  eyebrow: "Warning Signs",
  title: "Top Common Signs That You Need Mc Quay AC Maintenance",
  intro:
    "If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.",
  items: [
    {
        "title": "AC Not Cooling Signs",
        "text": "AC Not Cooling Signs"
    },
    {
        "title": "AC Motor not working",
        "text": "AC Motor not working"
    },
    {
        "title": "AC Thermostat not working",
        "text": "AC Thermostat not working"
    },
    {
        "title": "Water Leaking from your AC",
        "text": "Water Leaking from your AC"
    },
    {
        "title": "AC compressor is not cooling",
        "text": "AC compressor is not cooling"
    },
    {
        "title": "High AC electricity (DEWA) bills",
        "text": "High AC electricity (DEWA) bills"
    }
],
};

const serviceOverviewData = {
  id: "why-is-my-mcquay-ac-not-cooling",
  title: "Why Is My McQuay AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your McQuay air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in McQuay systems include:",
  checklist: [
    "Clogged McQuay air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional McQuay diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing McQuay AC in Dubai",
    width: 853,
    height: 853,
  },
  cta: {
    phone: {
      text: "CALL NOW",
      href: "tel:+971507464712",
    },
    whatsapp: {
      text: "CHAT NOW",
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20McQuay%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR McQuay AC SYSTEMS",
  description:
    "We specialise in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU). Our services include: Regular McQuay AC (AMC / PPM) maintenance is essential for optimal performance, efficiency, and longevity of your air conditioning system.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "Prompt and effective repair services for all McQuay AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have!",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine McQuay maintenance helps prevent sudden breakdowns. McQuay AC Diagnostics: Through fault diagnosis to accurately identify issues. We provide eligibility assessments and detailed quotes to address any concerns regarding your system.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Expert installation of various McQuay air conditioning systems to ensure optimal performance.",
      linkText: "REQUEST AC INSTALLATION",
      linkUrl: "/services/air-conditioning-repair/ac-installation/",
    },
    {
      title: "AC CLEANING SERVICES",
      description:
        "Professional AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
      linkText: "BOOK AC CLEANING",
      linkUrl: "/services/air-conditioning-repair/ac-cleaning/",
    },
    {
      title: "ANNUAL MAINTENANCE CONTRACT (AMC)",
      description:
        "This contract outlines the terms and services for the McQuay AC annual maintenance.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable McQuay AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20McQuay%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is McQuay AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "Regular maintenance of McQuay air conditioners in Dubai is vital for optimal performance. FAJ provides services to keep your system running efficiently. Trust us to ensure your McQuay AC performs at its best. For nearby maintenance, please contact us.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is McQuay AC Maintenance Service Important in Dubai?",
    width: 600,
    height: 400,
  },
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },

};

const maintenanceImportanceCardsData = {
  items: [
    {
        "title": "Extreme Weather",
        "description": "In summer, temperatures can exceed 40°C (104°F). Routine maintenance ensures McQuay AC SYSTEMS operate efficiently under these conditions."
    },
    {
        "title": "Energy Efficiency",
        "description": "A well-maintained McQuay AC unit operates more efficiently, saving energy and lowering electricity bills."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular maintenance of your McQuay air conditioner can extend its lifespan, decrease the need for expensive repair and replacements, and ultimately save you money."
    },
    {
        "title": "Improved Air Quality",
        "description": "Regular McQuay AC maintenance of units prevents dust and allergens from accumulating, ensuring cleaner air."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Regular McQuay air conditioner maintenance in Dubai ensures daily comfort, efficiency, and consistent cooling."
    }
],
};

const commonProblemsData = {
  id: "common-mcquay-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common McQuay AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "If you notice a drop in airflow from your vents, it may indicate an issue with your McQuay AC system, such as a blocked filter or a malfunctioning fan."
    },
    {
        "title": "Warm Air",
        "description": "If your McQuay AC is blowing warm or room temperature air instead of cold air, it may show issues with the compressor, refrigerant levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your McQuay AC unit may indicate mechanical problems that require attention."
    },
    {
        "title": "Foul Odors",
        "description": "Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately."
    },
    {
        "title": "Frequent Cycling",
        "description": "The failure to maintain desired temperatures may suggest problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A McQuay air conditioner that fails to effectively reduce humidity may be experiencing cooling capacity issues or may not be operating correctly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the McQuay AC or dripping from the vents may suggest a blocked condensate drain, frozen coils, or other issues."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without an increase in usage may suggest inefficiency in McQuay AC due to dirty filters, duct leaks, or other issues."
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
  title: "Benefits Of Regular McQuay AC Service and Maintenance in Dubai",
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
      id: "mcquay-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of McQuay cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "mcquay-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing McQuay filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "mcquay-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "mcquay-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "mcquay-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "mcquay-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-us",
  eyebrow: "The FAJ Advantage",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  reasons: [
    {
        "title": "Reliable, Priority, and Quick",
        "description": "You can count on efficient service ! Our same-day repair or next-day service visits ensure that your needs are met quickly."
    },
    {
        "title": "Feeling Of Calm",
        "description": "With annual maintenance contract , you get a full year of service, ensuring your AC runs smoothly and providing peace of mind."
    },
    {
        "title": "You Are in Control",
        "description": "Choose a day and time for your McQuay AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in McQuay AC repair. This is why most major brands trust us to handle their service and maintenance needs."
    },
    {
        "title": "Great Value",
        "description": "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices."
    },
    {
        "title": "Trustworthy",
        "description": "Our skilled AC technicians are highly trained, and we provide excellent service for a variety of major AC brands efficiently."
    }
],
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough McQuay air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "McQuay air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "McQuay air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in McQuay AC services for the following types",
  columns: [
    {
      title: "McQuay Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "McQuay Split Air Conditioner Service",
            "text": "FAJ offers reliable repair and maintenance services for McQuay AC units in Dubai. Our team is composed of professionals who specialize in McQuay split systems, McQuay VRF, and McQuay central air conditioning units."
      },
      {
            "title": "McQuay Central Air Conditioner Repair and Service",
            "text": "FAJ is a service provider located in Dubai that offers McQuay AC repair services. The company specialises in McQuay air conditioning systems and provides a variety of services, including repair and regular maintenance."
      },
      {
            "title": "McQuay AC Service and Repair",
            "text": "McQuay AC service provides peace of mind with capable hands. At FAJ, we focus on efficiency and reliability in all our work. Our expert team ensures your air conditioning operates optimally, whether you need maintenance, repair, or installation. Trust us for your HVAC needs—your comfort is our top priority."
      },
      {
            "title": "McQuay Inverter Air Conditioner Maintenance",
            "text": "Trust our expert team to quickly resolve any issues with your McQuay air conditioner and restore its full functionality."
      },
      {
            "title": "McQuay HVAC Repair",
            "text": "With extensive knowledge of McQuay air conditioning systems, we provide dependable repair to ensure your unit functions efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "McQuay Ceiling AC Service and Repair",
            "text": "Our experts can accurately diagnose and fix any issues with your McQuay air conditioner."
      },
      {
            "title": "McQuay VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "The McQuay VRF (Variable Refrigerant Flow) System service guarantees you peace of mind because you are in the right place. Indeed, FAJ prioritises efficiency and reliability."
      },
      {
            "title": "McQuay Ducted Split AC Service and Repair",
            "text": "McQuay ducted split AC service in Dubai requires expert help, as only specialists can effectively address air conditioning issues. We offer hassle-free McQuay air conditioning repair service and error fixing."
      },
      {
            "title": "McQuay Wall-Mounted Air Conditioner Service and Repair",
            "text": "Looking for relief from the scorching heat? Discover how to keep your McQuay AC running smoothly in Dubai! Our expert McQuay AC services ensure that your unit remains cool and efficient, providing comfort and peace of mind."
      }
],
    },
  ],
  tip: {
    title: "Air Conditioning Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
};

const coverageData = {
  id: "service-coverage",
  eyebrow: "Serving All Dubai Communities",
  title: "Our McQuay AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional McQuay AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "McQuay AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "McQuay AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "McQuay AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "McQuay AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "McQuay AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "McQuay AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "McQuay AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "McQuay AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "McQuay AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "McQuay AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "McQuay AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "McQuay AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "recent-updates",
  eyebrow: "Industry Insights",
  title: "Latest Air Conditioning Care & Energy Insights",
  articles: [
    {
      title: "How to Prepare Your Inverter AC for Dubai Summer Heat",
      excerpt:
        "Essential maintenance tasks every property owner should complete before peak outdoor temperatures exceed 45°C.",
      date: "May 15, 2026",
      readTime: "4 min read",
      href: "/blog/",
    },
    {
      title: "Inverter vs Non-Inverter: Energy Savings Explained",
      excerpt:
        "Learn how variable compressor speed technology cuts electricity costs and provides more consistent indoor temperature regulation.",
      date: "April 28, 2026",
      readTime: "5 min read",
      href: "/blog/",
    },
  ],
};


const bookingData = {
  id: "book-service",
  eyebrow: "Fast Scheduling",
  title: "Book Your Certified McQuay AC Service Today",
  description:
    "Need urgent McQuay AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
  cta: {
    booking: {
      text: "Schedule Online",
      href: "/book-an-appointment/",
    },
    call: {
      text: "Call +971 50 746 4712",
      href: "tel:+971507464712",
    },
    whatsapp: {
      text: "Chat on WhatsApp",
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20McQuay%20AC%20service.",
    },
  },
};

const faqsNormalized = {
  ...faqsData,
  items: faqsData?.items || faqsData?.faqs || [],
  faqs: faqsData?.faqs || faqsData?.items || [],
};

const pageData = {
  // Canonical schema keys
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

  // Backwards compatibility shorthand keys
  seoData,
  contactData,
  heroData,
  overviewData,
  areaOverviewData,
  commonSignsData,
  pricingData,
  serviceOverviewData,
  servicesOfferedCardsData,
  maintenanceImportanceData,
  maintenanceImportanceCardsData,
  commonProblemsData,
  videoData,
  benefitsData,
  whyChooseUsData,
  beforeAfterData,
  sparePartsRepairData,
  coverageData,
  galleryData,
  energyTipsData,
  newsData,
  testimonialsData,
  faqsData: faqsNormalized,
  contractsData,
  repairPriceData,
  bookingData,
};

export default pageData;
