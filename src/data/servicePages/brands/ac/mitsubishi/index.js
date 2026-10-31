import acCoverageLocations106 from "../../../acCoverageLocations106";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Best Mitsubishi AC Repair and Maintenance Services in Dubai",
  description:
    "Top-rated Mitsubishi AC repair and service in Dubai. Call us for expert technicians in Mitsubishi VRF, central & split air conditioning maintenance near you",
  keywords:
    "Mitsubishi AC Repair, Mitsubishi AC Service, Mitsubishi Air Conditioner Maintenance, Mitsubishi HVAC Repair, Mitsubishi VRF System Service, Mitsubishi Ducted Split AC Repair, Mitsubishi Wall-Mounted AC Service",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best Mitsubishi AC Repair and Maintenance Services in Dubai",
    description:
      "Top-rated Mitsubishi AC repair and service in Dubai. Call us for expert technicians in Mitsubishi VRF, central & split air conditioning maintenance near you",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mitsubishi AC Repair and Maintenance Services in Dubai",
    description:
      "Top-rated Mitsubishi AC repair and service in Dubai. Call us for expert technicians in Mitsubishi VRF, central & split air conditioning maintenance near you",
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
    "In the rare event of a fault or breakdown, our experienced Mitsubishi AC repair, maintenance services technicians can typically diagnose and repair your unit on their first visit. This minimizes downtime and helps restore your comfortable working climate as quickly as possible.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "mitsubishi-ac-services",
  title: "Mitsubishi AC Maintenance and Servicing",
  paragraphs: [
    "When addressing Mitsubishi AC repair needs, it’s important to choose a professional and trustworthy technician for the space. Our team specializes in the cleaning service Mitsubishi air conditioner across Dubai and Sharjah. At FAJ, we are committed to providing reliable fix that ensures your comfort throughout the year.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Mitsubishi AC repair services in Dubai?",
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
  title: "Top Common Signs That You Need Mitsubishi AC Maintenance",
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
  id: "why-is-my-mitsubishi-ac-not-cooling",
  title: "Why Is My Mitsubishi AC Not Cooling?",
  description:
    "A cooling drop or warm air discharge is one of the most frustrating AC issues in Dubai's summer. When your Mitsubishi air conditioner runs without cooling effectively, several brand-specific factors may be responsible.",
  listTitle: "Common causes in Mitsubishi systems include:",
  checklist: [
    "Clogged Mitsubishi air filters restricting airflow",
    "Low refrigerant gas (R410A or R32) due to micro-leaks",
    "Dust-blocked outdoor condenser or indoor evaporator coils",
    "Faulty thermistor or electronic expansion valve (EEV)",
    "Inverter PCB fault or communication error",
    "Compressor overload or high pressure trip",
    "Blocked condensate drain causing sensor shutoff",
  ],
  conclusion:
    "A professional Mitsubishi diagnostic inspection by FAJ identifies the exact fault code and prevents expensive secondary compressor damage.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician repairing Mitsubishi AC in Dubai",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20need%20help%20with%20my%20Mitsubishi%20AC.",
    },
  },
  showCta: false,
};

const servicesOfferedCardsData = {
  id: "services-offered",
  eyebrow: "Our Specialized Solutions",
  title: "HERE ARE THE SERVICES WE OFFER FOR MITSUBISHI AC SYSTEMS",
  description:
    "We specialize in different types and brands of HVAC systems, including Fresh Air Handling Units (FAHU). Our services include: Regular air conditioning maintenance (AMC/PPM) is crucial for the optimal performance, efficiency, and longevity of your system.",
  cards: [
    {
      title: "AC REPAIR SERVICE",
      description:
        "We offer fast and effective repair services for all Mitsubishi AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Please contact us for specific services or any questions you may have!",
      linkText: "REQUEST AC REPAIR",
      linkUrl: "/services/air-conditioning-repair/ac-repair/",
    },
    {
      title: "AC MAINTENANCE SERVICE",
      description:
        "Routine Mitsubishi maintenance helps prevent sudden breakdowns. Mitsubishi AC Inspection: Comprehensive fault diagnosis to identify issues accurately. We provide detailed quotes and eligibility assessments to address concerns regarding your system.",
      linkText: "PLAN AC MAINTENANCE",
      linkUrl: "/services/air-conditioning-repair/ac-maintenance/",
    },
    {
      title: "AC INSTALLATION SERVICE",
      description:
        "Professional installation of different Mitsubishi air conditioning systems to guarantee optimal performance.",
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
        "This contract outlines the terms and services for Mitsubishi AC annual maintenance.",
      linkText: "VIEW AMC PLANS",
      linkUrl: "/maintenance-contract/",
    },
  ],
  bottomBanner: {
    text: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
    subtext:
      "For reliable Mitsubishi AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time.",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20Mitsubishi%20AC%20service.",
  },
};

const maintenanceImportanceData = {
  id: "maintenance-importance",
  eyebrow: "Value Proposition",
  title: "Why is Mitsubishi AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "Maintaining your Mitsubishi AC regularly in Dubai is crucial to ensure it operates at peak efficiency and provides optimal cooling performance. At FAJ, we specialize in comprehensive aircon maintenance services tailored specifically for Mitsubishi AC units. Here to help keep your system running at its best!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is Mitsubishi AC Maintenance Service Important in Dubai?",
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
        "description": "In the sweltering heat of summer, temperatures can soar above 40°C (104°F), creating an oppressive environment. In such extreme conditions, it's essential to ensure that your Mitsubishi AC systems are running at peak performance."
    },
    {
        "title": "Energy Efficiency",
        "description": "A meticulously cared-for Mitsubishi air conditioning unit operates with enhanced efficiency, leading to significant energy savings and lower Dewa electricity bills."
    },
    {
        "title": "Longevity of Equipment",
        "description": "Consistent maintenance of Mitsubishi AC plays an important role in extending its lifespan and can lead to substantial savings over time, making it a wise investment for your home or business"
    },
    {
        "title": "Improved Air Quality",
        "description": "Routine Mitsubishi AC cleaning service prevents the accumulation of dust and allergens, leading to improved air quality."
    },
    {
        "title": "Enhanced Comfort",
        "description": "Keeping your Mitsubishi AC service in Dubai is essential for optimal comfort and efficiency, ensuring top cooling performance daily."
    }
],
};

const commonProblemsData = {
  id: "common-mitsubishi-ac-problems",
  eyebrow: "Troubleshooting Guide",
  title: "Common Mitsubishi AC Problems That May Require Maintenance",
  items: [
    {
        "title": "Weak Airflow",
        "description": "If you notice a decline in airflow from your vents, it may indicate a problem with your Mitsubishi AC system, such as a blocked filter or a faulty fan."
    },
    {
        "title": "Warm Air",
        "description": "If your Mitsubishi AC is blowing warm or room temperature air instead of cold air, it may indicate issues with the compressor, or ductwork."
    },
    {
        "title": "Strange Noises",
        "description": "Unusual sounds such as grinding, squeaking, or banging from your Mitsubishi AC unit may indicate mechanical issues that require attention."
    },
    {
        "title": "Foul Odors",
        "description": "Unpleasant odors from the vents may indicate mold or mildew in the system and should be addressed immediately."
    },
    {
        "title": "Frequent Cycling",
        "description": "The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat."
    },
    {
        "title": "High Humidity Levels",
        "description": "A Mitsubishi air conditioner that fails to effectively reduce humidity may be experiencing cooling capacity issues or may not be operating correctly."
    },
    {
        "title": "Leaking Water",
        "description": "Water pooling around the Mitsubishi AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues."
    },
    {
        "title": "Increased Energy Bills",
        "description": "High energy bills without an increase in usage may indicate inefficiency in Mitsubishi AC due to dirty filters, duct leaks, or other problems."
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
  title: "Benefits Of Regular Mitsubishi AC Service and Maintenance in Dubai",
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
      id: "mitsubishi-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Mitsubishi cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "mitsubishi-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Mitsubishi filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "mitsubishi-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "mitsubishi-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "mitsubishi-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "mitsubishi-feedback",
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
        "description": "Choose a day and time for your Mitsubishi AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Mitsubishi AC repair. This is why most major brands trust us to handle their service and maintenance needs."
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
    "See the real results of our thorough Mitsubishi air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Mitsubishi air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Mitsubishi air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We specialise in Mitsubishi AC services for the following types",
  columns: [
    {
      title: "Mitsubishi Air Conditioning Systems Serviced Across Dubai:",
      items: [
      {
            "title": "Mitsubishi Split Air Conditioner Service",
            "text": "FAJ offers reliable repair and maintenance for Mitsubishi AC units in Dubai. Our expert team specializes in Mitsubishi split systems, VRF solutions, and central air conditioning, ensuring optimal performance and comfort. Count on us for efficient solutions, whether for routine maintenance or urgent repairs."
      },
      {
            "title": "Mitsubishi Central Air Conditioner Repair and Service",
            "text": "FAJ is a reputable service provider in Dubai, specializing in Mitsubishi air conditioning systems. They deliver reliable repairs and thorough maintenance services to ensure your AC operates efficiently. Committed to quality and customer satisfaction, FAJ focuses on keeping your space cool and comfortable, even in the hottest weather."
      },
      {
            "title": "Mitsubishi AC Service and Repair",
            "text": "Mitsubishi AC Service offers peace of mind with our skilled technicians. At FAJ, we focus on efficient and reliable air conditioning services, including maintenance, repair, and installation. Trust our expert team to keep your HVAC system running smoothly and ensure your comfort year-round!"
      },
      {
            "title": "Mitsubishi Inverter Air Conditioner Maintenance",
            "text": "Depend on our expert team to promptly resolve any issues with your Mitsubishi air conditioner and restore its full functionality."
      },
      {
            "title": "Mitsubishi HVAC Repair",
            "text": "We have extensive knowledge of Mitsubishi cassette type and package unit AC systems, and we provide reliable repair to ensure your unit operates efficiently."
      }
],
    },
    {
      title: "Specialized AC Units & Commercial Systems:",
      items: [
      {
            "title": "Mitsubishi Ceiling AC Service and Repair",
            "text": "Our experts can accurately diagnose and fix any issues with your Mitsubishi air conditioner."
      },
      {
            "title": "Mitsubishi VRF (Variable Refrigerant Flow) System Service and Repair",
            "text": "FAJ's Mitsubishi Variable Refrigerant Flow (VRF) System service offers reliable and efficient HVAC solutions tailored to your needs. Our skilled team prioritizes your comfort and satisfaction, ensuring exceptional service and peace of mind. Trust us to handle your climate control with expertise and care."
      },
      {
            "title": "Mitsubishi Ducted Split AC Service and Repair",
            "text": "When it comes to repairing and maintaining Mitsubishi ducted split AC repair and maintenance service in Dubai, having expert assistance is essential for optimal performance. Our team of highly skilled technicians is dedicated to diagnosing and resolving a wide range of AC issues, ensuring minimal disruption to your daily life. You can trust us to provide the relief you need quickly and reliably."
      },
      {
            "title": "Mitsubishi Wall-Mounted Air Conditioner Service and Repair",
            "text": "Beat Dubai's intense heat with our expert Mitsubishi AC services . We ensure your unit operates efficiently, keeping your indoor space cool and comfortable while temperatures soar outside."
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
  title: "Our Mitsubishi AC Service Coverage Areas Across Dubai",
  description:
    "FAJ provides fast mobile AC repair teams across every major Dubai district, villa community, commercial free zone, and residential tower.",
  locations: acCoverageLocations106,
};

const galleryData = {
  id: "gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Mitsubishi AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Mitsubishi AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Mitsubishi AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Mitsubishi AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Mitsubishi AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Mitsubishi AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Mitsubishi AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Mitsubishi AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Mitsubishi AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Mitsubishi AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Mitsubishi AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Mitsubishi AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Mitsubishi AC Gas Filling in Dubai",
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
  title: "Book Your Certified Mitsubishi AC Service Today",
  description:
    "Need urgent Mitsubishi AC troubleshooting or seasonal maintenance? Book online in 60 seconds or speak directly with our service coordinators.",
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
      href: "https://api.whatsapp.com/send?phone=971507464712&text=Hello%2C%20I%20would%20like%20to%20book%20a%20Mitsubishi%20AC%20service.",
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
