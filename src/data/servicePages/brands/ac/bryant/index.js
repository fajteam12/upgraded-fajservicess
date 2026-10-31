import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Expert Bryant Air Conditioning | Bryant Repair & Services in Dubai",
  description:
    "Trusted Bryant AC Repair in Dubai. Get expert Bryant HVAC, central AC, and FCU A/C maintenance with the best price for cleaning services near you",
  keywords:
    "Bryant AC Repair in Dubai, Bryant AC Maintenance in Dubai, Bryant AC Fix in Dubai, Bryant AC Service in Dubai, Bryant Air Condition Repair in Dubai, Bryant Air Condition Maintenance in Dubai, Bryant Air Con Repair in Dubai, Bryant Air Con Maintenance in Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Expert Bryant Air Conditioning | Bryant Repair & Services in Dubai",
    description:
      "Trusted Bryant AC Repair in Dubai. Get expert Bryant HVAC, central AC, and FCU A/C maintenance with the best price for cleaning services near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Bryant Air Conditioning | Bryant Repair & Services in Dubai",
    description:
      "Trusted Bryant AC Repair in Dubai. Get expert Bryant HVAC, central AC, and FCU A/C maintenance with the best price for cleaning services near you",
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
    "Our team of professionals specializes in Bryant AC repairs, cleaning service, and maintenance, as well as installation services for both residential and commercial units. We are dedicated to ensuring the efficient operation of your air conditioning system, thereby enhancing overall indoor comfort.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "bryant-ac-services",
  title: "Bryant AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, choosing skilled technicians for Bryant AC repair is essential to keep your space comfortable year-round. Our dedicated team excels in servicing Bryant AC systems, prioritizing efficiency to ensure you enjoy the perfect climate control, no matter the season!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Bryant AC repair services in Dubai?",
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
  title: "Top Common Signs That You Need Bryant AC Maintenance",
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
  id: "why-is-my-bryant-ac-not-cooling",
  title: "Why Is My Bryant AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your Bryant air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in Bryant systems include:",
  checklist: [
    "Clogged Bryant air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional Bryant diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing Bryant AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20Bryant%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR BRYANT AC SYSTEMS",
  description:
    "We offer central ducted split systems, FAHU units, and package units, along with all major services in the UAE. Our services include: Regular maintenance , including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is essential for ensuring optimal performance and longevity.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "Professional Bryant AC repair services for homes and businesses. We fix cooling issues, refrigerant leaks, compressor faults, and electrical errors with fast response across Dubai.",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine Bryant maintenance helps prevent sudden breakdowns, improves cooling efficiency, and extends system lifespan through extreme Dubai summer heat.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Expert installation for all Bryant models, including split AC, ducted systems, and package units, adhering strictly to factory specifications.",
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
      "For reliable Bryant AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20Bryant%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is Bryant AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To ensure the efficient operation of Bryant air conditioners in Dubai's extreme heat, regular servicing is essential. FAJ offers professional AC services designed to provide optimal cooling and comfort throughout the year. Our team is dedicated to maximizing your system's performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Bryant AC Maintenance Service Important in Dubai?",
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
        "description": "During hot summer months, temperatures can exceed 40°C (104°F). It’s vital to ensure your Bryant air conditioning systems are functioning efficiently to maintain comfort and safety."
    },
    {
        "title": "Energy Efficiency",
        "description": "A properly maintained Bryant air conditioner operates efficiently, resulting in significant energy savings and decreased DEWA electricity costs."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular maintenance of Bryant AC systems is essential for optimal performance and efficiency, as it reduces repair costs and saves money for both residential and commercial properties."
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine Bryant AC cleaning services prevent dust and allergens from entering our spaces, improve the air quality we breathe, and promote a healthier environment."
    },
    {
        "title": "Enhanced Comfort",
        "description": "For optimal comfort and efficiency, regular maintenance of Bryant AC systems in Dubai is essential. This ensures enhanced performance and a pleasant indoor climate."
    }
],
};

const commonProblemsData = {
  id: "common-bryant-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common Bryant AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from Bryant AC ducts may signal a blocked filter or faulty motor. Timely action is essential for efficient cooling and system longevity."
    },
    {
        "title": "Warm Air",
        "description": "If your Bryant AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your Bryant AC may indicate mechanical issues that require attention."
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
        "description": "A Bryant air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Bryant AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Bryant air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Bryant AC Service and Maintenance in Dubai",
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
      id: "bryant-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Bryant cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "bryant-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Bryant filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "bryant-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "bryant-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "bryant-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "bryant-feedback",
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
        "description": "Choose a day and time for your Bryant AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Bryant AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough Bryant air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Bryant air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Bryant air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in Bryant AC services for the following types",
  columns: [
    {
      title: "Bryant Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "Bryant Split Air Conditioner Service",
            "text": "FAJ is a reputable provider of Bryant air conditioning cleaning services and maintenance in Dubai. Our team of skilled technicians specializes in Bryant VRF central air conditioning units, ensuring they operate at optimal levels. Whether you require routine AC maintenance or immediate repairs, we are committed to delivering tailored services that prioritize your comfort."
      },
      {
            "title": "Bryant Central Air Conditioner Repair and Service",
            "text": "FAJ is a leading service provider for Bryant air conditioner repair and maintenance in Dubai. Committed to excellence, the company meets the diverse needs of its clients through routine maintenance and urgent repairs. With skilled technicians and a focus on high-quality service, FAJ ensures customer satisfaction while enhancing the performance and longevity of Bryant systems."
      },
      {
            "title": "Bryant AC Service and Repair",
            "text": "At Bryant AC Service, we’re dedicated to providing you with peace of mind through our skilled team of experienced technicians. At FAJ, we focus on delivering efficient and reliable maintenance, repair, and installation services for Bryant AC systems. You can count on our knowledgeable team to keep your Bryant HVAC system running smoothly, ensuring your comfort all year round!"
      },
      {
            "title": "Bryant Inverter Air Conditioner Maintenance",
            "text": "Trust on our dedicated team to quickly address and resolve any issues with your Bryant air conditioner maintenance, ensuring it is restored to optimal performance without delay!"
      },
      {
            "title": "Bryant HVAC Repair",
            "text": "We specialize in Bryant cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "Bryant Ceiling AC Service and Repair",
            "text": "Our specialists can quickly diagnose and resolve any issues with your Bryant ceiling AC repair and ducted split AC service."
      },
      {
            "title": "Bryant VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "FAJ's Bryant Variable Refrigerant Flow (VRF) repair and maintenance services offer tailored HVAC solutions. Our skilled team emphasizes customer comfort and satisfaction, guaranteeing reliable service for your climate control requirements."
      },
      {
            "title": "Bryant Ducted Split AC Service and Repair",
            "text": "For dependable Bryant air conditioning repair and maintenance services in Dubai, our experienced technicians are prepared to assist you. With a strong proficiency in diagnosing various issues and interpreting error codes, we guarantee minimal disruption to your comfort. Rely on our prompt service to provide the cooling relief you require."
      },
      {
            "title": "Bryant Wall-Mounted Air Conditioner Service and Repair",
            "text": "In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our Bryant package unit AC repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures."
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
  title: "Our Bryant AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Bryant AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Bryant AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Bryant AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Bryant AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Bryant AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Bryant AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Bryant AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Bryant AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Bryant AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Bryant AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Bryant AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Bryant AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Bryant AC Gas Filling in Dubai",
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
  title: "Book Your Certified Bryant AC Service Today",
  description:
    "Need urgent Bryant AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20Bryant%20AC%20service.",
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
