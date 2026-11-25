import applianceCoverageLocations from "../../../applianceCoverageLocations.js";

// Section 1: Hero Data
export const heroData = {
  title: "Premium Quality Ecovacs Vacuum Cleaner Repair and Service Center Near You, in Dubai, UAE",
  intro: {
    parts: [
      {
        text: "FAJ Technical Services L.L.C",
        strong: true,
        href: "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
        external: true
      },
      ", established in 2010, is a trusted service provider for DEEBOT Robotic vacuum cleaner repair and WINBOT Robotic Window Cleaner service center near you in Dubai, Sharjah, and Abu Dhabi. We focus on offering affordable vacuum cleaner repair and vacuum servicing options to help you avoid costly replacements and reduce waste. Our comprehensive services include error diagnosis, repairs, and necessary parts for robot vacuum cleaners, all conveniently available near your location. A vacuum cleaner breakdown can be frustrating. Our skilled technicians offer fast and efficient repair service for a variety of models, including Ecovacs WINBOT, Deebot robot vacuums, and mopping combos. Visit our vacuum cleaner service center in Dubai for reliable assistance and quick solutions."
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
  title: "Transparent Ecovacs Service Pricing",
  subtitle: "UPFRONT INSPECTION, SERVICING & CALIBRATION RATES",
  description: "Transparent, fixed service pricing for Ecovacs robot vacuums and window cleaners across Dubai. Clear diagnostic charges with zero hidden fees.",
  cards: [
    {
      id: "inspection",
      title: "Diagnostic Inspection",
      price: "AED 173",
      period: "per unit",
      description: "Comprehensive diagnostic inspection of LiDAR sensors, battery health, suction motor, and docking contacts.",
      scopeTitle: "Diagnostic Scope of Work",
      scopeItems: [
        "LiDAR & TrueMapping dToF sensor diagnostic",
        "Battery load test and charging contact check",
        "Main brush and side brush motor testing",
        "Firmware analysis and app error decoding",
        "Written repair quotation provided upfront"
      ],
      popular: true,
      highlight: true,
      badge: "MOST POPULAR",
      buttonText: "Book Inspection",
      action: "book"
    },
    {
      id: "cleaning",
      title: "Deep Clean & Descale",
      price: "AED 340",
      period: "per service",
      description: "Complete ultrasonic cleaning, roller sanitization, dustbin decontamination, and OMNI dock unclogging.",
      scopeTitle: "Deep Cleaning Scope of Work",
      scopeItems: [
        "Disassembly of main roller and side brushes",
        "Ultrasonic filter and bin chamber sanitization",
        "OMNI station water line and waste tank flush",
        "Obstacle avoidance lens and cliff sensor cleaning",
        "Post-cleaning operational test run"
      ],
      popular: false,
      highlight: false,
      buttonText: "Book Deep Cleaning",
      action: "book"
    },
    {
      id: "installation",
      title: "OMNI Dock Setup & Mapping",
      price: "AED 280",
      period: "per device",
      description: "Professional docking station plumbing hookup, Wi-Fi 2.4/5GHz network sync, and multi-floor mapping.",
      scopeTitle: "Setup & Mapping Scope",
      scopeItems: [
        "OMNI auto-fill/drain plumbing installation",
        "Ecovacs Home app configuration & pairing",
        "Multi-floor 3D mapping and no-go zone setup",
        "Auto-empty and hot-water mop wash test",
        "User tutorial on schedule & maintenance"
      ],
      popular: false,
      highlight: false,
      buttonText: "Book Setup",
      action: "book"
    }
  ]
};

// Section 2: Workshop Drop-off & Fast Reliable Service Cards
export const serviceCenterData = {
  title: "Ecovacs Service Center & Quick Workshop Repair in Dubai",
  subtitle: "CONVENIENT WORKSHOP DROP-OFF & ON-SITE SERVICE",
  cards: [
    {
      title: "Dubai Service Center Workshop Drop-Off",
      description: "Drop off your Ecovacs DEEBOT or WINBOT robot vacuum at our central workshop for bench diagnostics, board repairs, and battery replacements.",
      items: [
        "Central Dubai location with easy access and free customer parking",
        "Precision clean-bench testing for LiDAR, dToF, and optical sensors",
        "Rapid diagnostic turnaround with transparent written quotations",
        "Original manufacturer-approved replacement batteries and components"
      ]
    },
    {
      title: "Fast and Reliable Doorstep Support",
      description: "When bringing your robotic vacuum to our workshop is inconvenient, our mobile technicians deliver convenient home pickup or on-site support.",
      items: [
        "Fast doorstep pickup across all residential communities in Dubai",
        "Complete OMNI station inspection and water line descaling at your home",
        "Wi-Fi network troubleshooting and multi-floor map recovery",
        "Transparent, itemized pricing backed by our official service warranty"
      ]
    }
  ]
};

// Section 3: Inspection and Preventive Care (01-06)
export const maintenanceImportanceData = {
  title: "Why Regular Ecovacs Maintenance Is Essential",
  subtitle: "PROTECT NAVIGATION ACCURACY, SUCTION POWER & BATTERY LIFE",
  items: [
    {
      number: "01",
      title: "Peak Suction Performance",
      description: "Regular cleaning of roller brushes and air filters prevents motor strain and maintains maximum dust pickup capability."
    },
    {
      number: "02",
      title: "LiDAR & Sensor Precision",
      description: "Dust-free optical and dToF sensors ensure flawless TrueMapping navigation without missed spots or wall bumps."
    },
    {
      number: "03",
      title: "Extended Battery Longevity",
      description: "Clean charging contacts and balanced cell cycles prevent premature lithium-ion battery degradation and short runtimes."
    },
    {
      number: "04",
      title: "Docking & Auto-Empty Reliability",
      description: "Unclogging OMNI dock air channels ensures consistent dustbin emptying and reliable automatic mop washing."
    },
    {
      number: "05",
      title: "Superior Indoor Air Quality",
      description: "Fresh high-efficiency particulate air filters trap pet dander, micro-dust, and allergens effectively."
    },
    {
      number: "06",
      title: "Avoid Costly Replacements",
      description: "Timely component servicing resolves minor gear, wheel, and sensor faults before they turn into complete board failures."
    }
  ]
};

// Section 4: Warning Signals / Problems Grid (4x2 Numbered Grid)
export const commonProblemsData = {
  title: "Common Ecovacs Vacuum Problems We Fix",
  subtitle: "EXPERT TROUBLESHOOTING FOR DEEBOT & WINBOT VACUUMS",
  items: [
    {
      number: "01",
      title: "Getting Stuck or Trapped",
      description: "Robot vacuums can get stuck in tight spaces. To prevent this, remove barriers & use boundary markers or virtual walls to limit access."
    },
    {
      number: "02",
      title: "Incomplete Cleaning or Missing Spots",
      description: "Robot vacuums rely on sensors and algorithms to navigate, but they may sometimes miss spots or leave areas untouched."
    },
    {
      number: "03",
      title: "Battery and Charging Issues",
      description: "Battery and charging issues can reduce a robot vacuum's efficiency. Ensure a proper dock connection, and replace worn batteries to prevent this."
    },
    {
      number: "04",
      title: "Loud or Unusual Noises",
      description: "Unusual noises may indicate problems with the vacuum's brushes or wheels. If the noises persist, check for loose debris or gear wear."
    },
    {
      number: "05",
      title: "Problems with Sensors",
      description: "Robot vacuums rely on sensors for navigation. Dust can hinder performance, so check the user manual for troubleshooting if issues arise."
    },
    {
      number: "06",
      title: "Wi-Fi Connectivity & App",
      description: "Robot vacuums with smart features may experience Wi-Fi connectivity issues, server disconnections, or map loading failures."
    },
    {
      number: "07",
      title: "Emptying & Maintenance Neglect",
      description: "Robot vacuums require regular maintenance. Always empty the dustbin and clean the filter after each use to protect internal airflow."
    },
    {
      number: "08",
      title: "Dirty Charging Contacts",
      description: "Accumulated dust and debris on the charging contacts can be a common issue. To maintain proper charging functionality, clean contacts regularly."
    }
  ]
};

// Section 5: Services Offered (4 Cards, Vector Icons)
export const servicesOfferedData = {
  title: "Comprehensive Ecovacs Repair Services in Dubai",
  subtitle: "SPECIALIZED CARE FOR DEEBOT ROBOTS & WINBOT WINDOW CLEANERS",
  cards: [
    {
      icon: "diagnostics",
      title: "LiDAR & TrueMapping Calibration",
      description: "Comprehensive diagnostics of dToF laser modules, cliff sensors, front bump sensors, and obstacle avoidance cameras."
    },
    {
      icon: "ac-repair",
      title: "Battery Replacement & Power Fixes",
      description: "Installation of high-capacity OEM-grade replacement battery packs, motherboard charge controller repairs, and dock alignment."
    },
    {
      icon: "ac-installation",
      title: "Motor, Brush & Roller Restoration",
      description: "Fixing jammed brush gears, repairing squeaking drive wheels, replacing side brush motors, and restoring high-speed suction turbines."
    },
    {
      icon: "file-check",
      title: "OMNI Station & Mop System Service",
      description: "Unclogging internal water tubes, repairing mop wash motors, servicing hot-air drying modules, and sealing waste water tanks."
    }
  ]
};

// Section 6: Key Benefits of Service (MaintenanceBenefits)
export const benefitsData = {
  title: "What Are the Benefits of an Ecovacs Vacuum Cleaner?",
  subtitle: "TOP PERFORMANCE, SMART AUTOMATION & EFFORTLESS CLEANING",
  items: [
    {
      icon: "clock-fast",
      title: "Efficiency and Time-Saving",
      description: "Cleaning large areas quickly can significantly reduce time than traditional methods. Robotic vacuums also require minimal effort to operate."
    },
    {
      icon: "shield",
      title: "Superior Cleaning Performance",
      description: "A robot vacuum cleaner removes dirt, pet hair, and dust mites more effectively than sweeping, improving indoor air quality."
    },
    {
      icon: "heart-hand",
      title: "Ideal for Busy Lifestyles",
      description: "Robotic vacuums clean automatically, while cordless stick vacuums enable quick, effortless clean-ups."
    },
    {
      icon: "coins",
      title: "Cost-Effective Cleaning Solution",
      description: "Ecovacs vacuum cleaner can save money by reducing professional cleaning needs & extending the life of carpets and flooring."
    },
    {
      icon: "certified-expert",
      title: "Improves Air Quality",
      description: "The HEPA filter improves air quality by capturing allergens like dust and pet dander, benefiting allergy sufferers & reducing respiratory issues."
    },
    {
      icon: "rosette-check",
      title: "Vacuum and Mop Function",
      description: "Robot vacuum and mop combos efficiently clean by vacuuming and mopping simultaneously, reducing the need for multiple tools."
    }
  ]
};

// Section 7: Why Choose FAJ (NumberedGridSection - 3 Columns)
export const whyChooseUsData = {
  title: "Why Choose FAJ for Ecovacs Vacuum Cleaner Repair?",
  subtitle: "DUBAI'S LEADING ROBOT VACUUM MAINTENANCE SPECIALISTS",
  cards: [
    {
      icon: "clock-fast",
      title: "Reliable, Priority, and Quick",
      description: "Fast diagnostic turnaround with same-day drop-off inspections and prompt doorstep service throughout Dubai."
    },
    {
      icon: "heart-hand",
      title: "Certified Robotics Technicians",
      description: "Specialized technicians trained in micro-electronics, laser sensor calibration, and intricate robotic vacuum gearboxes."
    },
    {
      icon: "shield",
      title: "Guaranteed Genuine Parts",
      description: "We use only genuine OEM and factory-tested replacement components backed by comprehensive service warranties."
    },
    {
      icon: "certified-expert",
      title: "Complete Transparency",
      description: "Clear diagnostic reports and upfront written quotes with zero hidden charges or unexpected repair add-ons."
    },
    {
      icon: "coins",
      title: "Fair & Competitive Rates",
      description: "Cost-effective repair solutions designed to maximize your appliance investment and avoid premature replacements."
    },
    {
      icon: "rosette-check",
      title: "Over a Decade of Excellence",
      description: "Serving Dubai homeowners and businesses since 2010 with trusted appliance and electronics repair services."
    }
  ]
};

// Section 8: Service Specialization Types (4x2 Grid of 8 Cards)
export const repairOverviewData = {
  title: "Ecovacs Models & Systems We Specialize In",
  subtitle: "FULL COMPONENT SUPPORT ACROSS ALL DEEBOT & WINBOT MODELS",
  items: [
    {
      icon: "diagnostics",
      title: "Ecovacs DEEBOT X2 OMNI & X1 OMNI Repair",
      description: "Specialized diagnostics for flagship dual-laser models, AIVI 3D cameras, and auto-lift OZMO mopping plates."
    },
    {
      icon: "ac-repair",
      title: "Ecovacs DEEBOT T30 PRO & T20 OMNI Service",
      description: "TruEdge adaptive edge cleaning calibration, hot-water mop washing repairs, and zero-tangle brush maintenance."
    },
    {
      icon: "ac-installation",
      title: "Ecovacs DEEBOT N30 PRO & N20 PLUS Series",
      description: "Suction turbine overhauls, PureCyclone auto-empty dock repairs, and drive wheel motor replacements."
    },
    {
      icon: "file-check",
      title: "Ecovacs DEEBOT T10 & T9 Series Specialists",
      description: "dToF sensor replacement, TrueDetect 3D optical alignment, and air freshener capsule module fixes."
    },
    {
      icon: "shield",
      title: "Ecovacs WINBOT W2 OMNI & W1 PRO Cleaners",
      description: "Robotic window cleaner suction fan checks, edge detection sensor repairs, and cross-spray nozzle descaling."
    },
    {
      icon: "certified-expert",
      title: "OMNI All-in-One Dock Station Overhauls",
      description: "Clean water pump replacement, dirty water tank level sensors, auto-empty duct unblocking, and heater repairs."
    },
    {
      icon: "coins",
      title: "TrueMapping 2.0 LiDAR & dToF Alignment",
      description: "Precision bench realignment of laser navigation turrets, motor belts, and SLAM algorithm communication chips."
    },
    {
      icon: "rosette-check",
      title: "Battery Re-Cell & Power Management Fixes",
      description: "Premium high-drain lithium-ion cell packs for restored 180+ minute runtimes and stable dock charging."
    }
  ]
};

// Section 9: Service Coverage Directory
export const coverageDirectoryData = {
  title: "Ecovacs Vacuum Service Coverage in Dubai",
  subtitle: "DOORSTEP PICKUP & SERVICE ACROSS ALL 95+ COMMUNITIES",
  locations: applianceCoverageLocations
};

// Section 10: Testimonials
export const testimonialsData = {
  title: "What Our Clients Say About Us",
  subtitle: "VERIFIED REVIEWS FROM ECOVACS OWNERS IN DUBAI",
  testimonials: [
    {
      name: "Tariq Al-Hashemi",
      location: "Downtown Dubai",
      rating: 5,
      comment: "My DEEBOT X2 OMNI kept getting lost and throwing LiDAR sensor errors. FAJ diagnosed it, replaced the laser turret, and had it mapping perfectly within 24 hours. Excellent service!"
    },
    {
      name: "Elena Rostova",
      location: "Dubai Marina",
      rating: 5,
      comment: "Our WINBOT stopped gripping window glass properly. The team at FAJ replaced the internal suction motor and safety sensor. Works like brand new now. Highly recommended!"
    },
    {
      name: "David Miller",
      location: "Arabian Ranches",
      rating: 5,
      comment: "Quick drop-off at their workshop, clear price quote for a new battery pack and brush gears, and done on time. Transparent and professional technical service."
    }
  ]
};

// Section 11: FAQs (10 Tailored Items)
export const faqsData = {
  title: "Frequently Asked Questions About Ecovacs Service",
  subtitle: "COMMON QUESTIONS ABOUT REPAIRS, BATTERIES & WARRANTIES",
  items: [
    {
      question: "How long does Ecovacs vacuum repair typically take?",
      answer: "Most diagnostics and minor component replacements (such as brushes, batteries, and sensor calibrations) are completed within 24 to 48 hours at our Dubai workshop."
    },
    {
      question: "Can you fix Ecovacs DEEBOT LiDAR and TrueMapping errors?",
      answer: "Yes, our technicians specialize in repairing and realigning TrueMapping dToF laser sensors, cleaning optical lenses, and replacing faulty laser drive motors."
    },
    {
      question: "Why does my Ecovacs robot vacuum die quickly after charging?",
      answer: "Short runtimes are typically caused by aging lithium-ion cells or dirty charging contacts on the dock. We test cell capacity and install high-quality OEM replacement batteries."
    },
    {
      question: "Do you repair Ecovacs WINBOT robotic window cleaners?",
      answer: "Yes, we service the complete Ecovacs WINBOT range, including suction pressure pumps, edge detection sensors, drive tracks, and automatic spray nozzles."
    },
    {
      question: "Can I drop off my vacuum at your service center?",
      answer: "Yes! Our central service center workshop is conveniently located in Dubai with free customer parking. You can drop off your device anytime during working hours."
    },
    {
      question: "Do you provide doorstep pickup and delivery in Dubai?",
      answer: "Yes, we provide convenient doorstep pickup and delivery across all major Dubai communities, including Dubai Marina, Downtown, Palm Jumeirah, Arabian Ranches, and more."
    },
    {
      question: "What should I do if my OMNI station is not auto-emptying?",
      answer: "First verify that the dust bag is not full and the lid is sealed tightly. If suction still fails, the internal ducting or station blower motor may require professional clearing or service."
    },
    {
      question: "Are replacement parts for Ecovacs original and under warranty?",
      answer: "We source authentic, factory-grade components and provide a comprehensive service warranty on all installed parts and labor."
    },
    {
      question: "Why does my Ecovacs vacuum show 'offline' in the app?",
      answer: "Offline status can stem from Wi-Fi module glitches, router 5GHz vs 2.4GHz band conflicts, or motherboard firmware corruptions. We diagnose and re-flash Wi-Fi board controllers."
    },
    {
      question: "How much does it cost to inspect an Ecovacs robot vacuum?",
      answer: "Our standard comprehensive diagnostic inspection is AED 173. The diagnostic fee is clearly detailed upfront with zero hidden charges."
    }
  ]
};

// Section 12: Booking Form Data
export const bookingData = {
  title: "Book Ecovacs Vacuum Cleaner Repair in Dubai",
  subtitle: "SCHEDULE YOUR WORKSHOP INSPECTION OR DOORSTEP PICKUP",
  description: "Fill out the form below or call us directly to schedule your Ecovacs vacuum repair. Fast response and expert service guaranteed.",
  serviceName: "Ecovacs Vacuum Cleaner Repair Service"
};

// Contact Data
export const contactData = {
  phone: "043300002",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
  address: "Al Quoz Industrial Area 4, Dubai, UAE"
};

// SEO Metadata
export const seoData = {
  title: "Ecovacs Vacuum Cleaner Repair & Deebot Service Dubai",
  description: "Professional Ecovacs robot vacuum repair in Dubai. Fast same-day service for DEEBOT X2, T30, T20, N20, WINBOT window cleaners, OMNI docks, and battery repairs.",
  keywords: "ecovacs vacuum repair dubai, deebot repair dubai, ecovacs service center dubai, ecovacs winbot repair, deebot battery replacement, robot vacuum repair dubai",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/ecovacs-vacuum-cleaner-repair-and-service-in-dubai/",
  author: "FAJ Technical Services L.L.C"
};

export default {
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
  contact: contactData,
  seo: seoData
};