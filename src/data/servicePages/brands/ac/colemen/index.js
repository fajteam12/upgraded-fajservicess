import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "The #1 Coleman Air Conditioning Cleaning & Maintenance Services",
  description:
    "Enjoy top-notch residential and commercial Coleman AC repair service. We specialise in HVAC and central Coleman AC maintenance near you in Dubai",
  keywords:
    "Coleman AC Repair in Dubai, Coleman Air Conditioner Maintenance, Coleman AC Service, Coleman AC Fix, Coleman Air Condition Repair, Coleman Air Condition Maintenance, Coleman AC Service in Dubai, Coleman Air Conditioner Repair in Dubai, Coleman Air Conditioner Service in Dubai, Coleman AC Repair Dubai, Coleman AC Service Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "The #1 Coleman Air Conditioning Cleaning & Maintenance Services",
    description:
      "Enjoy top-notch residential and commercial Coleman AC repair service. We specialise in HVAC and central Coleman AC maintenance near you in Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "The #1 Coleman Air Conditioning Cleaning & Maintenance Services",
    description:
      "Enjoy top-notch residential and commercial Coleman AC repair service. We specialise in HVAC and central Coleman AC maintenance near you in Dubai",
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
    "A Coleman air conditioner is essential for maintaining a comfortable indoor environment year-round. Regular AMC servicing is key to optimal performance, and we offer professional Coleman air conditioner servicing in Dubai to ensure your system runs smoothly and efficiently.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "colemen-ac-services",
  title: "Coleman AC Maintenance and Servicing",
  paragraphs: [
    "To ensure effective Coleman air conditioning repair, it is essential to engage a qualified technician for residential and commercial needs. At FAJ , we specialize in the repair, servicing, and maintenance of Coleman AC units throughout Dubai and Sharjah, committed to providing year-round comfort for our clients.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Coleman AC repair services in Dubai?",
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
  title: "Top Common Signs That You Need Coleman AC Maintenance",
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
  id: "why-is-my-coleman-ac-not-cooling",
  title: "Why Is My Coleman AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your Coleman air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in Coleman systems include:",
  checklist: [
    "Clogged Coleman air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional Coleman diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing Coleman AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20Coleman%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR COLEMAN AC SYSTEMS",
  description:
    "We specialize in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU). Our services include: Regular maintenance is crucial for the optimal performance, efficiency, and longevity of your air conditioning system.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "Professional Coleman AC repair services for homes and businesses. We fix cooling issues, refrigerant leaks, compressor faults, and electrical errors with fast response across Dubai.",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine Coleman maintenance helps prevent sudden breakdowns, improves cooling efficiency, and extends system lifespan through extreme Dubai summer heat.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Expert installation for all Coleman models, including split AC, ducted systems, and package units, adhering strictly to factory specifications.",
      linkText: "REQUEST AC INSTALLATION",
      linkUrl: "/services/air-conditioning-repair/ac-installation/",
    },
    {
      title: "AC CLEANING SERVICES",
      description:
        "Deep coil cleaning, filter sanitization, and drain clearing remove built-up dust and bacteria, restoring airflow and clean indoor air.",
      linkText: "BOOK AC CLEANING",
      linkUrl: "/services/air-conditioning-repair/ac-cleaning/",
    },
    {
      title: "ANNUAL MAINTENANCE CONTRACT (AMC)",
      description:
        "Comprehensive residential and commercial AMC packages with scheduled preventive visits, priority emergency response, and reduced repair fees.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable Coleman AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20Coleman%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is Coleman AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "Regular maintenance of Coleman air conditioners (AC) in Dubai is essential for optimal performance. FAJ provides comprehensive services to ensure your system operates efficiently. With our proactive approach, you can be confident that your Coleman AC is functioning at its best. If you need Coleman AC maintenance near you , please contact us.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Coleman AC Maintenance Service Important in Dubai?",
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
        "description": "In the summer, temperatures can exceed 40°C (104°F). Routine maintenance helps ensure that Coleman AC SYSTEMS operate efficiently in these conditions."
    },
    {
        "title": "Energy Efficiency",
        "description": "A well-maintained Coleman AC unit functions more efficiently, conserving energy and reducing electricity bills."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular AC maintenance of your Coleman air conditioner unit can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money."
    },
    {
        "title": "Improved Air Quality",
        "description": "Regular maintenance prevents the accumulation of dust and allergens, which helps to ensure cleaner air."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Regular Coleman AC servicing in Dubai ensures comfort, efficiency, and consistent cooling daily."
    }
],
};

const commonProblemsData = {
  id: "common-coleman-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common Coleman AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "If you notice decreased airflow from your vents, it may signal an issue with your coleman AC system, such as a blocked filter or a faulty fan."
    },
    {
        "title": "Warm Air",
        "description": "If your coleman AC is blowing warm or room temperature air instead of cold, it may indicate issues with the compressor, refrigerant, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Strange sounds such as grinding, squeaking, or banging from your coleman AC unit can indicate mechanical issues that need attention."
    },
    {
        "title": "Foul Odors",
        "description": "Musty odors from the vents may signal mold or mildew in the system and should be addressed promptly."
    },
    {
        "title": "Frequent Cycling",
        "description": "The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A coleman air conditioner that doesn’t effectively lower humidity may have cooling capacity issues or be operating improperly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the coleman AC or dripping from vents may indicate a blocked condensate drain, frozen coils, or other issues."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate coleman AC inefficiency from dirty filters, duct leaks, or other issues."
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
  title: "Benefits Of Regular Coleman AC Service and Maintenance in Dubai",
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
      id: "coleman-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Coleman cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "coleman-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Coleman filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "coleman-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "coleman-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "coleman-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "coleman-feedback",
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
        "description": "Choose a day and time for your Coleman AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Coleman AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough Coleman air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Coleman air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Coleman air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in Coleman AC services for the following types",
  columns: [
    {
      title: "Coleman Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "Coleman Split Air Conditioner Service",
            "text": "FAJ provides dependable repair and maintenance services for Coleman AC units in Dubai. Our team consists of professionals who are experts in Coleman split systems, Coleman VRF, and Coleman central air conditioning units."
      },
      {
            "title": "Coleman Central Air Conditioner Repair and Service",
            "text": "Located in Dubai, FAJ is your premier choice for Coleman AC repair services. We specialise in Coleman air conditioning systems and provide a range of comprehensive services, from repairs to regular maintenance."
      },
      {
            "title": "Coleman VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "The Coleman VRF (Variable Refrigerant Flow) System service guarantees you peace of mind because you are in the right place. Indeed, FAJ prioritises efficiency and reliability."
      },
      {
            "title": "Coleman Inverter Air Conditioner Maintenance",
            "text": "Rely on our expert team to quickly fix any problems with your Coleman air conditioner and restore its full functionality."
      },
      {
            "title": "Coleman HVAC Repair",
            "text": "With in-depth expertise in Coleman air conditioning systems, we offer reliable repairs to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "Coleman Ceiling AC Service and Repair",
            "text": "No matter what the issue is with your Coleman air conditioner, our experts can accurately diagnose and fix it."
      },
      {
            "title": "Coleman AC Service and Maintenance",
            "text": "Is your AC not working? Don’t endure uncomfortable temperatures and stuffy air, or risk damage to your equipment—FAJ can get your Coleman air conditioning functioning again in no time!"
      },
      {
            "title": "Coleman Ducted Split AC Service and Repair",
            "text": "Coleman ducted split AC service in Dubai requires expert assistance, as only specialists know how to address air conditioning issues. We provide a hassle-free Coleman air conditioning repair service and fix errors."
      },
      {
            "title": "Coleman Wall-Mounted Air Conditioner Service and Repair",
            "text": "Looking for relief from the scorching heat? Discover how to keep your Coleman AC running smoothly in Dubai! Our expert Coleman AC services ensure your unit remains cool and efficient, providing comfort and peace of mind."
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
  title: "Our Coleman AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Coleman AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Coleman AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Coleman AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Coleman AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Coleman AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Coleman AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Coleman AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Coleman AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Coleman AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Coleman AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Coleman AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Coleman AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Coleman AC Gas Filling in Dubai",
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
  title: "Book Your Certified Coleman AC Service Today",
  description:
    "Need urgent Coleman AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20Coleman%20AC%20service.",
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
