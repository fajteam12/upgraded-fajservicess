import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Trane Air Conditioning | Trane AC Repair and Maintenance Service",
  description:
    "Find trustworthy Trane AC repair and services in Dubai. Book the best HVAC, central & Ducted Split Trane air conditioning maintenance servicing near you",
  keywords:
    "Trane AC Repair, Trane Air Conditioner Maintenance, Trane AC Service, Trane HVAC Repair, Trane Air Conditioning Cleaning Service, Trane AC Installation, Trane AC Repair Dubai, Trane Air Conditioner Service Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Trane Air Conditioning | Trane AC Repair and Maintenance Service",
    description:
      "Find trustworthy Trane AC repair and services in Dubai. Book the best HVAC, central & Ducted Split Trane air conditioning maintenance servicing near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trane Air Conditioning | Trane AC Repair and Maintenance Service",
    description:
      "Find trustworthy Trane AC repair and services in Dubai. Book the best HVAC, central & Ducted Split Trane air conditioning maintenance servicing near you",
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
    "When issues arise, timely and efficient Trane AC repair are essential in Dubai. FAJ is a trusted name, recognized for its reliability and expertise in Trane AC repair services. In this comprehensive report, we will explore why HVAC is the preferred choice for Trane AC repair in Dubai and how our services enhance both your comfort and system efficiency.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "trane-ac-services",
  title: "Trane AC Maintenance and Servicing",
  paragraphs: [
    "In Dubai, selecting experienced technicians for Trane AC repair is important. Our team specializes in servicing Trane AC systems to maintain indoor comfort throughout the year. The focus is on ensuring system efficiency for optimal climate control.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Trane AC repair services in Dubai?",
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
  title: "Top Common Signs That You Need Trane AC Maintenance",
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
  id: "why-is-my-trane-ac-not-cooling",
  title: "Why Is My Trane AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your Trane air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in Trane systems include:",
  checklist: [
    "Clogged Trane air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional Trane diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing Trane AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20Trane%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR Trane AC SYSTEMS",
  description:
    "We offer central ducted split systems, FAHU units, and package units, along with all major services in the UAE. Our services include: Regular maintenance , including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is essential for ensuring optimal performance and longevity.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "We offer fast repair services for Trane air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for more information!",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine Trane maintenance helps prevent sudden breakdowns. Trane AC Inspection: We provide precise fault diagnosis to identify system issues, along with detailed quotes and eligibility assessments to address your concerns.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "The professional installation of various Trane air conditioning systems ensures optimal performance.",
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
        "The contract details the annual maintenance requirements for Trane AC.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable Trane AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20Trane%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is Trane AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To ensure the efficient operation of Trane air conditioners in Dubai's extreme heat, regular servicing is essential. FAJ offers professional AC services designed to provide optimal cooling and comfort throughout the year. Our team is dedicated to maximizing your system's performance.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Trane AC Maintenance Service Important in Dubai?",
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
        "description": "During hot summer months, temperatures can exceed 40°C (104°F). It’s vital to ensure your Trane air conditioning systems are functioning efficiently to maintain comfort and safety."
    },
    {
        "title": "Energy Efficiency",
        "description": "A properly maintained Trane air conditioner operates efficiently, resulting in significant energy savings and decreased DEWA electricity costs."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular maintenance of Trane AC systems is essential for optimal performance and efficiency, as it reduces repair costs and saves money for both residential and commercial properties."
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine Trane AC cleaning services prevent dust and allergens from entering our spaces, improve the air quality we breathe, and promote a healthier environment."
    },
    {
        "title": "Enhanced Comfort",
        "description": "For optimal comfort and efficiency, regular maintenance of Trane AC systems in Dubai is essential. This ensures enhanced performance and a pleasant indoor climate."
    }
],
};

const commonProblemsData = {
  id: "common-trane-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common Trane AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from Trane AC ducts may signal a blocked filter or faulty motor. Timely action is essential for efficient cooling and system longevity."
    },
    {
        "title": "Warm Air",
        "description": "If your Trane AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds like grinding, squeaking, or banging from your Trane AC may indicate mechanical issues that require attention."
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
        "description": "A Trane air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Trane AC or dripping from the vents may indicate a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may indicate inefficiencies in Trane air conditioning due to dirty filters or duct leaks."
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
  title: "Benefits Of Regular Trane AC Service and Maintenance in Dubai",
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
      id: "trane-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Trane cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "trane-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Trane filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "trane-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "trane-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "trane-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "trane-feedback",
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
        "description": "Choose a day and time for your Trane AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Trane AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough Trane air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Trane air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Trane air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in Trane AC services for the following types",
  columns: [
    {
      title: "Trane Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "Trane Split Air Conditioner Service",
            "text": "FAJ is a reputable provider of Trane air conditioning cleaning services and maintenance in Dubai. Our team of skilled technicians specializes in Trane VRF central air conditioning units, ensuring they operate at optimal levels. Whether you require routine AC maintenance or immediate repairs, we are committed to delivering tailored services that prioritize your comfort."
      },
      {
            "title": "Trane Central Air Conditioner Repair and Service",
            "text": "FAJ is a leading service provider for Trane air conditioner repair and maintenance in Dubai. Committed to excellence, the company meets the diverse needs of its clients through routine maintenance and urgent repairs. With skilled technicians and a focus on high-quality service, FAJ ensures customer satisfaction while enhancing the performance and longevity of Trane systems."
      },
      {
            "title": "Trane AC Service and Repair",
            "text": "At Trane AC Service, we’re dedicated to providing you with peace of mind through our skilled team of experienced technicians. At FAJ, we focus on delivering efficient and reliable maintenance, repair, and installation services for Trane AC systems. You can count on our knowledgeable team to keep your Trane HVAC system running smoothly, ensuring your comfort all year round!"
      },
      {
            "title": "Trane Inverter Air Conditioner Maintenance",
            "text": "Trust our dedicated team to quickly address and resolve any issues with your Trane air conditioner maintenance, ensuring it is restored to optimal performance without delay!"
      },
      {
            "title": "Trane HVAC Repair",
            "text": "We specialize in Trane cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "Trane Ceiling AC Service and Repair",
            "text": "Our specialists can quickly diagnose and resolve any issues with your Trane ceiling AC repair and ducted split AC service."
      },
      {
            "title": "Trane VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "FAJ's Trane Variable Refrigerant Flow (VRF) repair and maintenance services offer tailored HVAC solutions. Our skilled team emphasizes customer comfort and satisfaction, guaranteeing reliable service for your climate control requirements."
      },
      {
            "title": "Trane Ducted Split AC Service and Repair",
            "text": "For dependable Trane air conditioning repair and maintenance services in Dubai, our experienced technicians are prepared to assist you. With a strong proficiency in diagnosing various issues and interpreting error codes, we guarantee minimal disruption to your comfort. Rely on our prompt service to provide the cooling relief you require."
      },
      {
            "title": "Trane Wall-Mounted Air Conditioner Service and Repair",
            "text": "In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our Trane package unit AC repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures."
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
  title: "Our Trane AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Trane AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Trane AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Trane AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Trane AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Trane AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Trane AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Trane AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Trane AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Trane AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Trane AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Trane AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Trane AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Trane AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};


const bookingData = {
  id: "booking-section",
  title: "Schedule Your Trane AC Service",
  subtitle:
    "Book an expert technician in under 60 seconds. Same-day emergency slots available across Dubai.",
  submitButtonText: "Confirm Trane Booking",
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
