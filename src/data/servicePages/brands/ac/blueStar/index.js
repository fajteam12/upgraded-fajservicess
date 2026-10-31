import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Low Prices Service | Blue Star AC Repair and Maintenance Dubai",
  description:
    "FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system.",
  keywords:
    "Bluestar AC Repair in Dubai, BlueStar Air Conditioner Service, BlueStar AC Maintenance, BlueStar AC Installation, BlueStar AC Cleaning Service, BlueStar Air Conditioner Repair Near Me",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Low Prices Service | Blue Star AC Repair and Maintenance Dubai",
    description:
      "FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system.",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Prices Service | Blue Star AC Repair and Maintenance Dubai",
    description:
      "FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system.",
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
    "Our experienced team delivers a variety of services, including Blue Star AC repair, cleaning, maintenance, and installation, for both residential and commercial units. We are dedicated to maximizing the efficiency of your air conditioning system to improve indoor comfort.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "blueStar-ac-services",
  title: "Blue Star AC Maintenance and Services",
  paragraphs: [
    "If you are in Dubai and require professional repair services for Blue Star air conditioners, FAJ is here to help. Our skilled technicians ensure your air conditioning systems operate efficiently, delivering reliable cooling solutions tailored to the climate of Dubai and Sharjah. Trust us to keep your indoor environment comfortable and refreshing all year round.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Blue Star AC repair services in Dubai?",
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
  title: "Signs You Need An AC Service",
  intro:
    "If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.",
  items: [
    {
        "title": "Higher electricity bills",
        "text": "Higher electricity bills"
    },
    {
        "title": "Air is not blowing cold",
        "text": "Air is not blowing cold"
    },
    {
        "title": "Drips from your air conditioner",
        "text": "Drips from your air conditioner"
    },
    {
        "title": "Loss of AC performance",
        "text": "Loss of AC performance"
    },
    {
        "title": "Poor AC airflow, making noises",
        "text": "Poor AC airflow, making noises"
    }
],
};

const serviceOverviewData = {
  id: "why-is-my-blue-star-ac-not-cooling",
  title: "Why Is My Blue Star AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your Blue Star air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in Blue Star systems include:",
  checklist: [
    "Clogged Blue Star air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional Blue Star diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing Blue Star AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20Blue Star%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR Blue Star AC SYSTEMS",
  description:
    "Effective air conditioning systems are essential for maintaining a comfortable and effective environment in commercial environments. Our services include: Regular maintenance , including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "Professional Blue Star AC repair services for homes and businesses. We fix cooling issues, refrigerant leaks, compressor faults, and electrical errors with fast response across Dubai.",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine Blue Star maintenance helps prevent sudden breakdowns, improves cooling efficiency, and extends system lifespan through extreme Dubai summer heat.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Expert installation for all Blue Star models, including split AC, ducted systems, and package units, adhering strictly to factory specifications.",
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
      "For reliable Blue Star AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20Blue Star%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is Blue Star AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To guarantee your Blue Star central air conditioner functions efficiently in Dubai's intense heat, regular AC maintenance is essential. At FAJ, we offer expert aircon services designed to enhance your system's performance and comfort year-round. Trust us to keep your air conditioner operating at its best.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Blue Star AC Maintenance Service Important in Dubai?",
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
        "description": "As summer approaches, we can expect temperatures to soar above 40°C (104°F), creating discomfort. It's essential to ensure that your Blue Star air conditioning systems are primed for optimal performance."
    },
    {
        "title": "Energy Efficiency",
        "description": "A well-maintained Blue Star air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Keeping up with the Blue Star AC maintenance is really important for getting the best performance and efficiency. It helps lower repair costs and can save money for both homes and businesses."
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine Blue Star air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Regular air conditioner maintenance in Dubai is vital for optimal efficiency and a comfortable indoor environment."
    }
],
};

const commonProblemsData = {
  id: "common-blue-star-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common Blue Star AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from a Blue Star air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling."
    },
    {
        "title": "Warm Air",
        "description": "If your Blue Star AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your Blue Star AC may indicate mechanical issues that require attention."
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
        "description": "A Blue Star air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Blue Star AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Blue Star air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Blue Star AC Service and Maintenance in Dubai",
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
      id: "blue-star-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Blue Star cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "blue-star-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Blue Star filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "blue-star-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "blue-star-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "blue-star-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "blue-star-feedback",
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
        "description": "Choose a day and time for your Bluestar AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Blue Star AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough Blue Star air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Blue Star air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Blue Star air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in Blue Star AC services for the following",
  columns: [
    {
      title: "Blue Star Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "Blue Star Air Conditioner Installation Service in Dubai",
            "text": "A Comprehensive Solution for Your Cooling Needs. We specialize in high-quality Blue Star AC installation services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance."
      },
      {
            "title": "Our installation services include",
            "text": ""
      },
      {
            "title": "Climate Check",
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
      },
      {
            "title": "Blue Star Air Conditioner Repair in Dubai",
            "text": "Stay cool during the hot Dubai summer with our expert Blue Star inverter AC repair in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs. We guide you through the selection and installation process for optimal comfort. Contact us today to schedule your installation and beat the heat!"
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
        {
            "title": "Blue Star AC AMC Services in Dubai",
            "text": "We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers. While we are dedicated to serving all our clients, please note that those with service contracts may receive priority assistance."
      },
      {
            "title": "Blue Star AC Cleaning Service in Dubai",
            "text": "AC Deep cleaning your air conditioner brings several key benefits:"
      },
      {
            "title": "Improved Air Quality",
            "text": "It removes dust, allergens, and bacteria, leading to healthier air, especially for those with allergies."
      },
      {
            "title": "Reduced Energy Consumption",
            "text": "A clean unit operates more efficiently, lowering your electricity bills."
      },
      {
            "title": "Extended Lifespan",
            "text": "Regular AC maintenance prevents wear and tear, prolonging the life of your AC and minimising costly repairs."
      },
      {
            "title": "Odour Elimination",
            "text": "It eliminates mold and mildew, resulting in fresher indoor air."
      },
      {
            "title": "Reduced Mold Growth",
            "text": "Regular cleaning prevents the growth of mold and bacteria, which is crucial in humid climates."
      },
      {
            "title": "Better Breathing",
            "text": "Cleaner air improves overall well-being. In short, deep cleaning your AC is an investment in your health, comfort, and energy efficiency."
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
  title: "Our Blue Star AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Blue Star AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Blue Star AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Blue Star AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Blue Star AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Blue Star AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Blue Star AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Blue Star AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Blue Star AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Blue Star AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Blue Star AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Blue Star AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Blue Star AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Blue Star AC Gas Filling in Dubai",
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
  title: "Book Your Certified Blue Star AC Service Today",
  description:
    "Need urgent Blue Star AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20Blue Star%20AC%20service.",
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
