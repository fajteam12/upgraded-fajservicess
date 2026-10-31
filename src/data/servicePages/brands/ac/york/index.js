import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "York Air Conditioning | York AC Repair and Maintenance Services",
  description:
    "Find the best York AC repair in Dubai. Call 0433000002 for residential and commercial needs. We also provide York HVAC maintenance services near you",
  keywords:
    "York AC Repair, York Air Conditioner Maintenance, York AC Service Dubai, York Air Conditioner Repair Dubai, York AC Installation Dubai, York AC Cleaning Dubai, York Air Conditioner Service Dubai, York Air Conditioner Maintenance Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "York Air Conditioning | York AC Repair and Maintenance Services",
    description:
      "Find the best York AC repair in Dubai. Call 0433000002 for residential and commercial needs. We also provide York HVAC maintenance services near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "York Air Conditioning | York AC Repair and Maintenance Services",
    description:
      "Find the best York AC repair in Dubai. Call 0433000002 for residential and commercial needs. We also provide York HVAC maintenance services near you",
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
    "We provide expert services for York HVAC, ducted split AC, central AC, and VRF AC repair throughout Dubai. Serving both homes and businesses, we deliver high-quality HVAC service and annual maintenance contract.",
    "Established in 2010, FAJ Technical Services L.L.C is a trusted provider of York air conditioning solutions in Dubai and Sharjah. Our experienced team offers York AC cleaning, maintenance, repair, and installation services for residential and commercial units, ensuring your system operates efficiently and enhances your indoor comfort.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "york-ac-services",
  title: "York AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, it is important to hire skilled technicians for York AC repair services. Our team specializes in servicing York AC systems in Dubai and Sharjah, providing reliable solutions that keep your indoor space comfortable all year round while making sure your system runs efficiently.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best York AC repair services in Dubai?",
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
  eyebrow: "Early Detection",
  title: "Top Common Signs That You Need York AC Maintenance",
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
  id: "why-is-my-york-ac-not-cooling",
  title: "Why Is My York AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your York air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in York systems include:",
  checklist: [
    "Clogged York air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional York diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing York AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20York%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR YORK AC SYSTEMS",
  description:
    "We are offering central, ducted split systems, FAHU units, and package units, along with all major services in the UAE. Our services include: Regular maintenance , including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is essential for ensuring optimal performance and longevity.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "We offer quick repair services for York air conditioner, fixing leaks, electrical issues, and malfunctions. Contact us for more info!",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine York maintenance helps prevent sudden breakdowns. York AC Inspection: We provide precise fault diagnosis to identify system issues, along with detailed quotes and eligibility assessments to address your concerns.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "The professional installation of different York air conditioning systems guarantees optimal performance.",
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
        "The contract details the annual maintenance requirements for York AC.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable York AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20York%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is York AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To ensure the efficient operation of your York central air conditioner maintenance in Dubai's extreme heat, regular service is essential. At FAJ, we offer expert AC services to ensure optimal cooling and comfort year-round. Our team is dedicated to maximizing your system's performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is York AC Maintenance Service Important in Dubai?",
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
        "description": "During excessively warm summer months, temperatures may exceed 40°C (104°F). It is essential to ensure that your York air conditioning systems are operating effectively."
    },
    {
        "title": "Energy Efficiency",
        "description": "A well-maintained York air conditioner runs efficiently, leading to significant energy savings and lower DEWA electricity costs."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular York AC maintenance is essential for optimal performance and efficiency, helping to reduce repair costs and save money for both residential and commercial properties."
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine York AC cleaning service not only prevents dust and allergens from entering our spaces but also elevates the air quality we breathe and fosters a healthier environment."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Regular maintenance of York air conditioners in Dubai is essential for optimal comfort and efficiency, ensuring a pleasant indoor environment daily."
    }
],
};

const commonProblemsData = {
  id: "common-york-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common York AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from York AC ducts may signal a blocked filter or faulty motor. Prompt attention ensures efficient cooling and extends system lifespan."
    },
    {
        "title": "Warm Air",
        "description": "If your York AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your York AC may indicate mechanical issues that require attention."
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
        "description": "A York air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the York AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in York air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular York AC Service and Maintenance in Dubai",
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
      id: "york-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of York cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "york-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing York filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "york-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "york-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "york-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "york-feedback",
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
        "description": "Choose a day and time for your York AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in York AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough York air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "York air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "York air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in York AC services for the following types",
  columns: [
    {
      title: "York Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "York Split Air Conditioner Service",
            "text": "FAJ is a reliable provider York AC repair and maintenance services in Dubai. Our trained technicians specialize in York VRF central AC units, providing optimal performance. Whether you need routine aircon maintenance or urgent repairs, we are committed to delivering exceptional, tailored service to meet your needs. Your comfort is our priority."
      },
      {
            "title": "York AC Service and Repair",
            "text": "At York AC Service, we offer you peace of mind through our team of experienced technicians. At FAJ, we focus on providing efficient and dependable York AC maintenance, repair, and installation. You can count on our expert team to keep your HVAC system in top shape, ensuring your comfort all year round!"
      },
      {
            "title": "York Inverter Air Conditioner Maintenance",
            "text": "Depend on our dedicated team to swiftly address and resolve any issues with your York air conditioner maintenance, ensuring it is restored to peak performance without delay!"
      },
      {
            "title": "York HVAC Repair",
            "text": "We specialize in York cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "York Ceiling AC Service and Repair",
            "text": "Our specialists can quickly diagnose and resolve any issues with your York Ceiling AC repair and ducted split AC service."
      },
      {
            "title": "York VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "FAJ's York Variable Refrigerant Flow (VRF) repair and maintenance services provide customized HVAC solutions. Our expert team prioritizes your comfort and satisfaction, ensuring dependable service for your climate control needs."
      },
      {
            "title": "York Ducted Split AC Service and Repair",
            "text": "For reliable York air conditioning repair and maintenance in Dubai, our skilled technicians are ready to assist you. With expertise in diagnosing various issues and resolving error codes, we ensure minimal disruption to your comfort. Trust us for prompt service that delivers the cooling relief you need."
      },
      {
            "title": "York Wall-Mounted Air Conditioner Service and Repair",
            "text": "In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our York air conditioning repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures."
      }
],
    },
  ],
  tip: {
    title: "Air Conditioning Tip",
    text:
      "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
};

const coverageData = {
  id: "service-coverage",
  eyebrow: "Serving All Dubai Communities",
  title: "Our York AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional York AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "York AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "York AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "York AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "York AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "York AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "York AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "York AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "York AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "York AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "York AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "York AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "York AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};


const bookingData = {
  id: "booking-section",
  title: "Schedule Your York AC Service",
  subtitle:
    "Book an expert technician in under 60 seconds. Same-day emergency slots available across Dubai.",
  submitButtonText: "Confirm York Booking",
};

const faqsNormalized = {
  ...faqsData,
  items: faqsData?.items || faqsData?.faqs || [],
  energyTips: energyTipsData,
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
  repairPrice: repairPriceData,
  testimonials: testimonialsData,
  faqs: faqsNormalized,
  booking: bookingData,

  // Backwards compatibility shorthand keys
  seoData,
  contactData,
  heroData,
  overviewData,
  areaOverviewData,
  commonSignsData,
  serviceOverviewData,
  servicesOfferedCardsData,
  maintenanceImportanceData,
  maintenanceImportanceCardsData,
  commonProblemsData,
  pricingData,
  repairPriceData,
  contractsData,
  videoData,
  benefitsData,
  whyChooseUsData,
  beforeAfterData,
  sparePartsRepairData,
  coverageData,
  galleryData,
  testimonialsData,
  faqsData: faqsNormalized,
  bookingData,
};

export default pageData;
