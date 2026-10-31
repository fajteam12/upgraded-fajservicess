import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "O General AC| Best O General AC Repair & Service in Dubai",
  description:
    "We provide professional O General AC repair and service for VRF, central, & split air conditioning system with AMC maintenance near you in Dubai, UAE",
  keywords:
    "Ogeneral AC Repair in Dubai, O General AC Maintenance in Dubai, O General AC Fix in Dubai, O General AC Service in Dubai, O General Air Condition Repair in Dubai, O General Air Condition Maintenance in Dubai",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "O General AC| Best O General AC Repair & Service in Dubai",
    description:
      "We provide professional O General AC repair and service for VRF, central, & split air conditioning system with AMC maintenance near you in Dubai, UAE",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "O General AC| Best O General AC Repair & Service in Dubai",
    description:
      "We provide professional O General AC repair and service for VRF, central, & split air conditioning system with AMC maintenance near you in Dubai, UAE",
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
    "In the rare event of a fault or breakdown, our experienced O General AC repair and maintenance technicians can typically diagnose and fix your unit during their first visit. This minimizes downtime and helps restore your comfortable indoor climate as quickly as possible.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "oGeneral-ac-services",
  title: "O General AC Maintenance and Servicing",
  paragraphs: [
    "For O General air conditioning unit repairs, it’s essential to choose a skilled technician. Our dedicated team specialises in AC service and maintenance across Dubai and Sharjah. FAJ is committed to providing reliable solutions that enhance indoor comfort year-round and ensure your system operates efficiently.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best O General AC repair services in Dubai?",
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
  title: "Top Common Signs That You Need O General AC Maintenance",
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
  id: "why-is-my-o-general-ac-not-cooling",
  title: "Why Is My O General AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your O General air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in O General systems include:",
  checklist: [
    "Clogged O General air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional O General diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing O General AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20O General%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR O GENERAL AC SYSTEMS",
  description:
    "We specialise in a wide range of HVAC systems, featuring top brands and advanced Fresh Air Handling Units (FAHU). Our services include:",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "We offer fast O General AC repair service components, including leaks, electrical failures, and malfunctions. Contact us for details or inquiries!",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine O General maintenance helps prevent sudden breakdowns. O General AC Inspection: Detailed fault diagnosis to accurately identify system issues. We provide comprehensive quotes and eligibility assessments to address any concerns you may have.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Professional installation of various O General air conditioning systems ensures optimal performance.",
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
        "This contract outlines the O General AC annual maintenance terms. Regular AC maintenance (AMC/PPM) is vital for ensuring performance, efficiency, and longevity.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable O General AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20O General%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is O General AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To keep your O General air conditioner running efficiently in Dubai's heat, Regular maintenance is essential. At FAJ, we provide expert services tailored for O General ACs, ensuring your unit delivers optimal cooling and comfort all year round. Here to help keep your system running at its best!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is O General AC Maintenance Service Important in Dubai?",
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
        "description": "In the summer heat, temperatures can exceed 40°C (104°F), creating an oppressive environment. it's crucial to ensure that your O General AC systems are running at peak performance."
    },
    {
        "title": "Energy Efficiency",
        "description": "A well-maintained O General air conditioner operates efficiently, yielding significant energy savings and lower Dewa electricity costs."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Regular maintenance of O General AC is crucial for optimal performance and longevity. It boosts energy efficiency and lowers repair costs, resulting in savings for residential and commercial property users."
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine o general air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Maintaining your original AC service in Dubai is essential for optimal comfort and efficiency. Don't settle for less—commit to regular servicing for a consistently pleasant environment every day."
    }
],
};

const commonProblemsData = {
  id: "common-o-general-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common O General AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "Reduced airflow from your vents may signal an issue with your O General AC, like a clogged filter or a faulty fan."
    },
    {
        "title": "Warm Air",
        "description": "If your O General AC is blowing warm air, it may indicate issues with the compressor, refrigerant levels, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds such as grinding, squeaking, or banging from your O General AC may signal mechanical problems needing attention."
    },
    {
        "title": "Foul Odors",
        "description": "Unpleasant odours coming from the vents may indicate mold or mildew in the system and should be addressed immediately."
    },
    {
        "title": "Frequent Cycling",
        "description": "The failure to maintain desired temperatures may indicate issues like dirty filters, low refrigerant, or a faulty thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A O General Air Conditioner that doesn't reduce humidity may have cooling capacity issues or may not be operating correctly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the O General AC or dripping from the vents may signal a blocked drain or frozen coils."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without increased usage may suggest o general AC inefficiencies from dirty filters or duct leaks."
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
  title: "Benefits Of Regular O General AC Service and Maintenance in Dubai",
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
      id: "o-general-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of O General cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "o-general-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing O General filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "o-general-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "o-general-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "o-general-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "o-general-feedback",
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
        "description": "Choose a day and time for your O General AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in O General AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough O General air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "O General air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "O General air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in O General AC services for the following types",
  columns: [
    {
      title: "O General Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "O General Split Air Conditioner Service",
            "text": "FAJ offers reliable repair and maintenance for O General split air conditioner in Dubai. Our expert team specialises in O General VRF and central AC, ensuring optimal performance and comfort. Count on us for both routine AC maintenance and urgent repairs."
      },
      {
            "title": "O General Central Air Conditioner Repair and Service",
            "text": "FAJ is a leading aircon service provider in Dubai, specialising in the AC installation, repair, and maintenance of O General air conditioner. Known for its commitment to excellence, the company provides a wide range of AC services aimed at ensuring the optimal efficiency of air conditioning units."
      },
      {
            "title": "O General AC Service and Repair",
            "text": "O General AC Service provides peace of mind with our skilled technicians. At FAJ, we specialise in efficient and reliable AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year!"
      },
      {
            "title": "O General Inverter Air Conditioner Maintenance",
            "text": "Count on our dedicated team to promptly resolve any concerns with your O General air conditioner maintenance and bring it back to peak performance!"
      },
      {
            "title": "O General HVAC Repair",
            "text": "We have extensive expertise in O General cassette and package unit AC systems, providing reliable repairs to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "O General Ceiling AC Service and Repair",
            "text": "Our specialists can quickly diagnose and resolve any issues with your O General ceiling AC repair and service."
      },
      {
            "title": "O General VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "FAJ's O General Variable Refrigerant Flow (VRF) repair and maintenance service provides reliable and efficient HVAC solutions customised to meet your needs. Our skilled team prioritises your comfort and satisfaction, delivering exceptional service and peace of mind. You can trust us to manage your climate control with expertise and care."
      },
      {
            "title": "O General Ducted Split AC Service and Repair",
            "text": "For reliable O General ducted split air conditioner (AC) repair and maintenance in Dubai, our skilled technicians are here to help. With expertise in diagnosing a variety of AC issues, we ensure minimal disruption to your comfort. Trust us for quick and effective service that provides the cooling relief you need."
      },
      {
            "title": "O General Wall-Mounted Air Conditioner Service and Repair",
            "text": "Beat Dubai's intense heat with our expert O General AC fix and repair services. We ensure that your unit operates efficiently, keeping your indoor space cool and comfortable while the temperatures soar outside."
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
  title: "Our O General AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional O General AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "O General AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "O General AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "O General AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "O General AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "O General AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "O General AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "O General AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "O General AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "O General AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "O General AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "O General AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "O General AC Gas Filling in Dubai",
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
  title: "Book Your Certified O General AC Service Today",
  description:
    "Need urgent O General AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20O General%20AC%20service.",
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
