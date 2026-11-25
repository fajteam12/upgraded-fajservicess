// Page Data for De'Longhi Coffee Machine Service
// Modernized with Authenticated Copy, Pricing, Testimonials, Full 95-Community Coverage, and Unique Visual Hierarchy
import applianceCoverageLocations from "../../../applianceCoverageLocations.js";

export const seoData = {
  title: "DeLonghi Coffee Machine Repair & Maintenance Service Dubai",
  description: "Expert DeLonghi coffee machine repair in Dubai. Fast diagnostics, deep cleaning, descaling, and pump repair for automatic espresso and bean-to-cup machines.",
  keywords: "delonghi coffee machine repair, delonghi espresso machine service dubai, delonghi magnifica repair, delonghi la specialista repair, delonghi descaling dubai, delonghi service center dubai",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/brands/delonghi/",
  robots: "index, follow",
  openGraph: {
    title: "DeLonghi Coffee Machine Repair & Maintenance Service Dubai",
    description: "Expert DeLonghi coffee machine repair in Dubai. Fast diagnostics, deep cleaning, descaling, and pump repair for automatic espresso and bean-to-cup machines.",
    url: "https://www.fajservices.ae/services/home-appliances-repair/brands/delonghi/",
    type: "website",
    siteName: "FAJ Technical Services L.L.C"
  }
};

export const contactData = {
  phone: "+971 4 330 0002",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
  address: "Warehouse #1, Plot # 598-1131, Dubai Investment Park First, Dubai, UAE",
};

export const heroData = {
  title: "Premium Quality DeLonghi Coffee Machine Repair Center and Service",
  intro: {
    parts: [
      "At De'Longhi, we take pride in offering services that meet the diverse needs of coffee lovers in Dubai, UAE. Since 2010, ",
      {
            "text": "FAJ Technical Services L.L.C",
            "strong": true,
            "href": "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
            "external": true
      },
      " has been providing a range of DeLonghi coffee maker, DeLonghi coffee machine repair and maintenance services, including cleaning and descaling. Whether you enjoy single-origin coffees or premium ground blends, we are here to assist you. Whether you prefer brewing your coffee at the push of a button or mastering the art of coffee-making with a manual machine, we hope you enjoy many years of use from your De'Longhi coffee machine."
]
  },
  badge: "AUTHORIZED APPLIANCE CARE",
  contentWidth: "50%",
  stats: [
    { value: "2010", label: "SERVING THE UAE SINCE" },
    { value: "7-Day", label: "SUPPORT AVAILABLE" }
  ]
};

// Section 1.5: Home Appliances Pricing Cards (Inspection, Cleaning, Installation)
export const pricingData = {
  title: "Transparent & Competitive Home Appliance Pricing",
  subtitle: "Simple, honest pricing with zero hidden fees. All major services backed by warranty.",
  cards: [
    {
      title: "Inspection / Check-Up Cost",
      price: "AED 173",
      period: "Includes Diagnostic Assessment & Reinstallation",
      subtitle: "Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.",
      badge: "Transparent Assessment",
      badgeType: "accent",
      popular: false,
      included: [
        "Comprehensive diagnostic assessment up to two appliances",
        "Expert fault identification and written estimate",
        "Safety and electrical component integrity check",
        "Includes transport and reinstallation at same location",
        "Zero obligation to proceed with major repairs"
      ],
      scope: [
        "Complete electrical testing of wiring, thermostats, and sensors",
        "Mechanical evaluation of motors, compressors, and pumps",
        "Electronic control board and error code diagnostics",
        "Refrigerant leak screening and pressure evaluation",
        "Detailed upfront repair quotation before any work begins"
      ],
      ctaText: "Book Inspection",
      ctaHref: "/services/home-appliances-repair/book-inspection/",
    },
    {
      title: "Appliance Cleaning",
      price: "AED 340",
      period: "Complete Deep Sanitization & Optimization",
      subtitle: "Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.",
      badge: "50- Days Warranty",
      badgeType: "success",
      popular: true,
      included: [
        "High-pressure deep sanitization and degreasing",
        "Drain line, condenser coil, and filter clearance",
        "Odor neutralization and bacterial disinfection",
        "Operational efficiency optimization test run",
        "Comprehensive 50-day service warranty"
      ],
      scope: [
        "Internal drum and door gasket sanitization",
        "Condenser coil and compressor fan dust evacuation",
        "Filter, drain pan, and lint chute degreasing",
        "Water supply nozzle and spray-arm descaling",
        "Final operational cycle test and hygiene certification"
      ],
      ctaText: "Book Cleaning",
      ctaHref: "/services/home-appliances-repair/book-cleaning/",
    },
    {
      title: "Home Appliances Installation",
      price: "AED 280",
      period: "Certified Professional Setup",
      subtitle: "FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!",
      badge: "Factory Standard",
      badgeType: "accent",
      popular: false,
      included: [
        "Unpacking, unboxing, and pre-installation check",
        "Precision leveling and anti-vibration stabilization",
        "Plumbing and electrical connection verification",
        "Initial cycle test run and factory setting calibration",
        "Manufacturer compliance certificate for warranty protection"
      ],
      scope: [
        "Cabinet opening and inlet water valve verification",
        "Secure water supply and waste drain hose mounting",
        "Dedicated electrical circuit load test",
        "Transit bolt extraction and anti-tilt bracket anchoring",
        "Customer orientation and maintenance guidelines overview"
      ],
      ctaText: "Book Installation",
      ctaHref: "/services/home-appliances-repair/book-installation/",
    },
  ],
};

// Section 2: Workshop Drop-off & Fast Reliable Service Cards
export const serviceCenterData = {
  title: "Fast and Reliable Appliance Service Center in Dubai",
  subtitle: "Choose between on-site doorstep repairs or convenient workshop service",
  cards: [
    {
      title: "DeLonghi Coffee Machine Servicing and Descaling",
      description: "When your DeLonghi coffee machine breaks down, it can disrupt your routine. FAJ provides comprehensive servicing, deep cleaning, and precision descaling to keep your espresso machine operating like new.",
      icon: "truck"
    },
    {
      title: "DeLonghi Coffee Machine Repair and Maintenance Contract",
      description: "We are here to help with whatever you need. A scheduled AMC service contract prevents unexpected breakdowns and ensures your DeLonghi machine consistently brews exceptional coffee.",
      icon: "tools"
    }
  ]
};

// Section 3: Inspection and Preventive Care (Numbered Cards 01-06)
export const maintenanceImportanceData = {
  title: "The Most Common Problems of De Longhi Coffee Machines",
  subtitle: "Proactive care preserves efficiency, prevents sudden breakdowns, and extends equipment lifetime.",
  cards: [
    {
        "number": "01",
        "title": "Preventing Breakdowns",
        "description": "Routine DeLonghi coffee maker maintenance, including cleaning and descaling, reduces costly repairs and downtime, impacting revenue."
    },
    {
        "number": "02",
        "title": "Extending Lifespan",
        "description": "Regular maintenance prolongs machine life, saving on replacement costs."
    },
    {
        "number": "03",
        "title": "Lowering Maintenance Costs",
        "description": "Addressing minor issues early can prevent larger, more expensive repairs."
    },
    {
        "number": "04",
        "title": "Maintaining Efficiency",
        "description": "Consistent upkeep ensures optimal performance and reduces energy consumption."
    },
    {
        "number": "05",
        "title": "Professional Service for Commercial Use",
        "description": "Commercial machines need specialised maintenance for safety and performance"
    },
    {
        "number": "06",
        "title": "Importance in Commercial Kitchens",
        "description": "In the UAE, proper maintenance of DeLonghi coffee machines is essential service. Regular upkeep improves their quality and lifespan, benefiting both home and business users in Dubai."
    }
]
};

// Section 4: Warning Signals / Problems Grid (4x2 Numbered Grid)
export const commonProblemsData = {
  title: "The Most Common Problems of De Longhi Coffee Machines",
  subtitle: "Common faults diagnosed and resolved by our certified repair engineers across Dubai",
  cards: [
    {
        "number": "01",
        "title": "Water Leaking",
        "description": "Water leakage issues in coffee or espresso machines can be caused by worn-out seals, loose connections, or cracks in the water reservoir or tubing."
    },
    {
        "number": "02",
        "title": "Coffee Machine Descaling",
        "description": "Descaling your coffee machine regularly with a suitable cleaning solution can effectively remove mineral buildup, which can lead to clogs and leaks."
    },
    {
        "number": "03",
        "title": "Coffee Machine Cleaning",
        "description": "Regular DeLonghi coffee machine cleaning service of the filter basket, coffee grinder, and other parts can prevent clogs and improve the coffee taste."
    },
    {
        "number": "04",
        "title": "Bad Coffee Taste",
        "description": "Poor quality beans, improper brewing parameters (such as grind size and ratio), or case De Longhi machine's internal components can result in bad-tasting coffee."
    },
    {
        "number": "05",
        "title": "Loud or Unusual Noises",
        "description": "Noise from the De Longhi coffee machine, Low water levels, the espresso machine being placed on a hard surface, or heating issues can lead to unexpected noises."
    },
    {
        "number": "06",
        "title": "Brewing Issues",
        "description": "Weak Coffee is often a common problem, typically due to improper grind size, over-extraction, under-extraction, or using stale espresso machine coffee beans."
    },
    {
        "number": "07",
        "title": "Slow Coffee Flow",
        "description": "Issues with coffee machines, such as De Longhi espresso or automatic makers, can be caused by clogs, incorrect grind sizes, or pump problems."
    },
    {
        "number": "08",
        "title": "Professional Help",
        "description": "For more complex issues or if you are unable to troubleshoot the problem yourself, contact FAJ qualified coffee machine repair technician for maintenance."
    }
]
};

// Section 5: Services Offered (4 Cards, No Images, Clean Distinctive Icons)
export const servicesOfferedData = {
  title: "HERE ARE THE SERVICES WE OFFER FOR COFFEE MACHINES AND ESPRESSO MACHINES",
  subtitle: "Specialized service solutions tailored to the entire range of De'Longhi Coffee Machine equipment",
  cards: [
    {
        "title": "Installation",
        "description": "Professional installation of different DeLonghi coffee machines for peak performance.",
        "icon": "ac-installation",
        "actionText": "Book Installation"
    },
    {
        "title": "De Longhi Diagnostics",
        "description": "We perform thorough fault-finding to effectively diagnose issues. Our services include eligibility assessments and detailed quotations to address any concerns regarding your system.",
        "icon": "diagnostics",
        "actionText": "Book Diagnostics"
    },
    {
        "title": "De Longhi Repair Service",
        "description": "Quick and efficient De&rsquo;Longhi coffee machines repair services and addressing issues like leaks, electrical failures, and system malfunctions. Reach us with any questions or to request services!",
        "icon": "ac-repair",
        "actionText": "Book Repair"
    },
    {
        "title": "De Longhi Annual Maintenance Contract",
        "description": "This contract specifies the terms and services for the annual maintenance of the De Longhi espresso machine.",
        "icon": "file-check",
        "actionText": "Inquire AMC"
    }
]
};

// Section 6: Key Benefits of Service (Distinct Icons, 2 Stats & WhatsApp CTA)
export const benefitsData = {
  title: "The Benefits of De'Longhi Coffee Machines Service in Dubai",
  subtitle: "Why regular maintenance with FAJ delivers lasting value and complete peace of mind",
  stats: [
    { value: "2010", label: "SERVING THE UAE SINCE" },
    { value: "7-Day", label: "SUPPORT AVAILABLE" }
  ],
  whatsappCta: {
    text: "Chat on WhatsApp",
    phone: "+971507464712",
    message: "Hello FAJ, I would like to inquire about De'Longhi coffee machine repair services."
  },
  cards: [
    {
        "title": "Ensuring Safety",
        "description": "Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.",
        "icon": "trust-shield"
    },
    {
        "title": "Optimal Performance",
        "description": "Regular maintenance helps your coffee machines run smoothly and efficiently, delivering the best results every time.",
        "icon": "quality-badge"
    },
    {
        "title": "Lower Energy Bills",
        "description": "Energy-efficient coffee machines translate to monthly savings on utility bills, putting more money back in your pocket.",
        "icon": "eco-leaf"
    },
    {
        "title": "Saving Money on Repair",
        "description": "Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.",
        "icon": "coins"
    },
    {
        "title": "Coffee Machine Lifespan",
        "description": "Proper care and timely servicing can significantly increase life of your coffee machines, delaying the need for replacements.",
        "icon": "lifespan"
    },
    {
        "title": "Peace of Mind",
        "description": "Knowing your coffee machines are in top condition gives you confidence and removes the stress of unexpected failures.",
        "icon": "peace-of-mind"
    }
]
};

// Section 7: Why Choose FAJ (Distinct Icons)
export const whyChooseUsData = {
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  subtitle: "Setting the gold standard for appliance repair across Dubai and Sharjah since 2010",
  cards: [
    {
        "title": "Reliable, Priority, and Quick",
        "description": "You can count on efficient service ! Our same-day repair or next-day service visits ensure that your needs are met quickly.",
        "icon": "clock-fast"
    },
    {
        "title": "Feeling Of Calm",
        "description": "With a maintenance contract , you get a full year of service, ensuring your coffee machine runs smoothly and providing peace of mind.",
        "icon": "heart-hand"
    },
    {
        "title": "You Are in Control",
        "description": "Choose a day and time for your coffee machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
        "icon": "shield"
    },
    {
        "title": "We Are Experts",
        "description": "We are experts in Delonghi coffee machine repair. This is why most major brands trust us to handle their service and maintenance needs.",
        "icon": "certified-expert"
    },
    {
        "title": "Great Value",
        "description": "Inspection fee includes diagnosis, transport, and reinstallation upto two coffee machines at the same location in Dubai.",
        "icon": "coins"
    },
    {
        "title": "Trustworthy",
        "description": "Our skilled coffee machine technicians are highly trained, and we provide excellent service for a variety of major brands.",
        "icon": "rosette-check"
    }
]
};

// Section 8: Service Specialization Types (Converted to Responsive 4x2 Cards Grid)
export const repairOverviewData = {
  title: "We specialise in DeLonghi Coffee Machines Repair services for the following Types:",
  subtitle: "Dedicated technicians specialized in individual categories across the De'Longhi Coffee Machine lineup",
  items: [
    {
        "title": "DeLonghi Magnifica Series Automatic Repair",
        "description": "Comprehensive maintenance for Magnifica, Magnifica S, and Magnifica Evo bean-to-cup machines.",
        "icon": "settings"
    },
    {
        "title": "DeLonghi Eletta Coffee Machine Service",
        "description": "Specialized repairs for Eletta Explore and Cappuccino units with precision milk system care.",
        "icon": "certified-expert"
    },
    {
        "title": "DeLonghi La Specialista Manual Espresso Service",
        "description": "Barista-grade pressure gauge calibration, integrated grinder tuning, and dual boiler servicing.",
        "icon": "ac-repair"
    },
    {
        "title": "DeLonghi Dedica Pump Espresso Repair",
        "description": "Rapid troubleshooting for compact Dedica pump machines, vibration pumps, and steam wands.",
        "icon": "shield"
    },
    {
        "title": "DeLonghi Dinamica Plus Machine Repair",
        "description": "Touchscreen navigation troubleshooting, infuser realignment, and smart app connectivity fixes.",
        "icon": "ice-crusher"
    },
    {
        "title": "DeLonghi PrimaDonna Luxury Line Repair",
        "description": "White-glove care for PrimaDonna Elite and Soul high-end automated luxury coffee systems.",
        "icon": "fan"
    },
    {
        "title": "DeLonghi Ultrasonic Descaling & Degreasing",
        "description": "Complete chemical descaling, food-grade limescale evacuation, and flow meter cleansing.",
        "icon": "droplets"
    },
    {
        "title": "DeLonghi Commercial & Office Coffee AMC",
        "description": "Preventative maintenance packages, emergency loaners, and routine servicing for Dubai offices.",
        "icon": "thermometer-sun"
    }
]
};

// Section 9: Service Coverage Directory
export const coverageDirectoryData = {
  title: "We offer service for De'Longhi appliances in the Dubai area",
  subtitle: "Prompt mobile technician coverage across all 95 major communities in Dubai",
  items: applianceCoverageLocations,
};

// Section 10: Verified Customer Testimonials Carousel
export const testimonialsData = {
  title: "What our clients say About Us",
  subtitle: "Verified reviews from satisfied De'Longhi Coffee Machine owners across Dubai",
  reviews: [
    {
      name: "Haris M",
      role: "Dubai Marina Resident",
      comment: "We're facing the issue with our De'Longhi Coffee Machine and we reached out to FAJ. The technician arrived on time and resolved the fault quickly. Very professional!",
      rating: 5,
    },
    {
      name: "Anusri Chan",
      role: "Palm Jumeirah Villa Owner",
      comment: "Excellent De'Longhi Coffee Machine repair service. The technician came out to fix our machine on the same day. He was very polite, knowledgeable, and took great care.",
      rating: 5,
    },
    {
      name: "Jason Miller",
      role: "JVC Homeowner",
      comment: "FAJ fixed our De'Longhi Coffee Machine in no time! Technician explained everything clearly and gave helpful maintenance tips. Highly recommended.",
      rating: 5,
    },
    {
      name: "Khurram Mahmood",
      role: "Downtown Dubai Resident",
      comment: "Fast, reliable, and fair pricing. The only service center in Dubai I trust for my De'Longhi Coffee Machine servicing.",
      rating: 5,
    },
  ],
};

// Section 11: FAQs — MUST BE 2nd TO LAST!
export const faqsData = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about our repair and maintenance services",
  items: [
    {
        "question": "When should I have my DeLonghi coffee machine serviced or descaled?",
        "answer": "We recommend professional descaling and cleaning every 2 to 3 months depending on water hardness, and immediate repair if you notice slow extraction, low temperature, leaking, or error lights."
    },
    {
        "question": "What DeLonghi coffee machine models does FAJ service in Dubai?",
        "answer": "We service all DeLonghi coffee makers, including Magnifica Series, Eletta, Dinamica, PrimaDonna, La Specialista manual espresso machines, Dedica, and commercial bean-to-cup units."
    },
    {
        "question": "What should I do if my DeLonghi coffee machine is leaking water from the bottom?",
        "answer": "Turn off and unplug the unit. Water leaks usually stem from worn silicone boiler gaskets, a cracked water tank connector, or high-pressure hose deterioration that requires workshop replacement."
    },
    {
        "question": "Why is my DeLonghi coffee machine brewing weak coffee or slow drops?",
        "answer": "This commonly indicates severe limescale build-up in the thermoblock, a clogged infuser/brew group filter screen, or worn conical grinder burrs requiring calibration."
    },
    {
        "question": "How long does a DeLonghi coffee machine repair or descaling take?",
        "answer": "Standard comprehensive descaling, deep cleaning, and minor seal replacements take 24 hours. Full electronic board or pump rebuilds are typically completed within 24 to 48 hours."
    },
    {
        "question": "Is it worth repairing my DeLonghi bean-to-cup espresso machine?",
        "answer": "Yes, absolutely. DeLonghi coffee machines are modular and fully serviceable. Replacing consumable parts like pumps, valves, or O-rings restores factory coffee quality at a fraction of replacement cost."
    },
    {
        "question": "Can FAJ repair the milk frother / LatteCrema system on my DeLonghi?",
        "answer": "Yes, we diagnose and repair non-frothing steam wands, steam solenoid valves, milk jug coupling seals, and air-intake venturi tubes to restore rich, velvety microfoam."
    },
    {
        "question": "Why is the infuser unit stuck inside my DeLonghi coffee machine?",
        "answer": "The brew group gets stuck when the transmission gear cycle is interrupted or when mechanical drive rails lack food-safe silicone grease. Our technicians safely realign the gear assembly."
    },
    {
        "question": "Do you provide annual maintenance contracts (AMC) for DeLonghi commercial machines?",
        "answer": "Yes, we offer preventative maintenance contracts for corporate offices, cafes, and restaurants across Dubai, including scheduled descaling, filter swaps, and emergency loaner machines."
    },
    {
        "question": "Are original DeLonghi replacement parts and food-grade lubricants used?",
        "answer": "Yes, FAJ only uses authentic OEM DeLonghi thermoblocks, Ulka vibration pumps, solenoid valves, O-rings, and NSF-certified food-grade lubricants backed by our service warranty."
    }
]
};

// Section 12: Booking Form — MUST BE AT THE VERY END!
export const bookingData = {
  title: "Book Your De'Longhi Coffee Machine Service Appointment",
  subtitle: "Fast response, certified technicians, authentic parts, and full warranty.",
  badge: "Easy Online Booking",
  serviceName: "De'Longhi Coffee Machine Repair & Descaling Service",
};

const pageData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  pricing: pricingData,
  serviceCenter: serviceCenterData,
  maintenanceImportance: maintenanceImportanceData,
  commonProblems: commonProblemsData,
  servicesOffered: servicesOfferedData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  repairOverview: repairOverviewData,
  coverageDirectory: coverageDirectoryData,
  testimonials: testimonialsData,
  faqs: faqsData,
  booking: bookingData,
};

// Aliases for compatibility
export const pricing = pricingData;
export const primaryServices = pricingData;
export const seo = seoData;
export const contact = contactData;
export const hero = heroData;
export const serviceCenter = serviceCenterData;
export const maintenanceImportance = maintenanceImportanceData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedData;
export const benefits = benefitsData;
export const whyChooseUs = whyChooseUsData;
export const coverageDirectory = coverageDirectoryData;
export const brands = coverageDirectoryData;
export const repairOverview = repairOverviewData;
export const testimonials = testimonialsData;
export const faqs = faqsData;
export const booking = bookingData;

export default pageData;
