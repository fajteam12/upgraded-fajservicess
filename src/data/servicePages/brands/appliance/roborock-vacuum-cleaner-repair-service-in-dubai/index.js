import applianceCoverageLocations from "../../../applianceCoverageLocations.js";

// Section 1: Hero Data
export const heroData = {
  title: "Top Quality Roborock Vacuum Cleaner Repair and Roborock Vacuum Cleaner Service Center Near You, in Dubai, UAE",
  intro: {
    parts: [
      {
        text: "FAJ Technical Services L.L.C",
        strong: true,
        href: "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
        external: true
      },
      ", founded in 2010, has established itself as a trusted authority in robotic vacuum maintenance. We specialize in Roborock robot vacuum cleaner repair, Roborock wet dry vacuum maintenance, and Roborock cordless vacuum cleaner deep cleaning service & repair center near you in Dubai, Sharjah, and Abu Dhabi. Our comprehensive services include error diagnosis, repairs, and necessary parts for robot vacuum cleaning service, all conveniently available near your location in Dubai. Dealing with a Roborock vacuum cleaner breakdown can be challenging, but we’re here to help! Our skilled technicians offer prompt service for Roborock, including the Roborock Saros Series, Saros Z70, Saros 10R, and Qrevo models. Visit our vacuum cleaner service center in Dubai for quick solutions to get your Roborock vacuum back in working order."
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
  title: "Transparent Roborock Service Pricing",
  subtitle: "UPFRONT INSPECTION, SERVICING & CALIBRATION RATES",
  description: "Transparent, fixed service pricing for Roborock robot vacuums and wet-dry cleaners across Dubai. Clear diagnostic charges with zero hidden fees.",
  cards: [
    {
      id: "inspection",
      title: "Diagnostic Inspection",
      price: "AED 173",
      period: "per unit",
      description: "Complete diagnostic inspection of PreciSense LiDAR, Reactive 3D sensors, suction turbine, and charging circuits.",
      scopeTitle: "Diagnostic Scope of Work",
      scopeItems: [
        "LiDAR turret spin & optical laser diagnostic",
        "Battery load test and dock contact inspection",
        "Main DuoRoller and side brush motor checks",
        "Error code decoding (Error 1 through Error 18)",
        "Itemized repair quotation provided upfront"
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
      description: "Thorough ultrasonic cleaning, roller sanitization, VibraRise mop pad descaling, and RockDock auto-wash overhaul.",
      scopeTitle: "Deep Cleaning Scope of Work",
      scopeItems: [
        "DuoRoller brush assembly and axle de-hairing",
        "HEPA filter ultrasonic blast and chamber wash",
        "RockDock Ultra water line and waste tank flush",
        "Reactive 3D camera lens and cliff sensor cleaning",
        "Post-cleaning operational cycle verification"
      ],
      popular: false,
      highlight: false,
      buttonText: "Book Deep Cleaning",
      action: "book"
    },
    {
      id: "installation",
      title: "Dock Setup & Mapping",
      price: "AED 280",
      period: "per device",
      description: "Professional RockDock plumbing connection, 2.4GHz Wi-Fi synchronization, and multi-level 3D map creation.",
      scopeTitle: "Setup & Mapping Scope",
      scopeItems: [
        "RockDock auto-refill/drain water kit connection",
        "Roborock app configuration and profile pairing",
        "Multi-level LiDAR fast mapping & no-go zone setup",
        "Auto-empty and warm water mop wash calibration",
        "Client walkthrough on schedule & maintenance"
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
  title: "Roborock Service Center & Quick Workshop Repair in Dubai",
  subtitle: "CONVENIENT WORKSHOP DROP-OFF & ON-SITE SERVICE",
  cards: [
    {
      title: "Dubai Service Center Workshop Drop-Off",
      description: "Drop off your Roborock robot vacuum or wet-dry cleaner at our specialized workshop for bench testing, motherboard component repair, and battery overhauls.",
      items: [
        "Central Dubai location with dedicated customer parking and easy drop-off",
        "Advanced clean-bench test stations for PreciSense LiDAR and RGB cameras",
        "Same-day diagnostic feedback with clear written itemized estimates",
        "Factory-certified Roborock replacement parts and genuine battery packs"
      ]
    },
    {
      title: "Fast and Reliable Doorstep Support",
      description: "When you prefer in-home assistance, our mobile technical team provides convenient doorstep pickup or on-site troubleshooting throughout Dubai.",
      items: [
        "Doorstep pickup across all Dubai communities from Marina to Arabian Ranches",
        "RockDock Ultra dock inspection, water pump flushing, and sealing checks",
        "Wi-Fi network synchronization and multi-floor map recovery on-site",
        "Transparent upfront pricing backed by our official service warranty"
      ]
    }
  ]
};

// Section 3: Inspection and Preventive Care (01-06)
export const maintenanceImportanceData = {
  title: "Why Regular Roborock Maintenance Is Essential",
  subtitle: "PROTECT NAVIGATION ACCURACY, SUCTION POWER & BATTERY LIFE",
  items: [
    {
      number: "01",
      title: "Maximum Suction Performance",
      description: "Removing hair from DuoRoller axles and clearing filter chambers preserves peak HyperForce suction power."
    },
    {
      number: "02",
      title: "PreciSense LiDAR Accuracy",
      description: "Cleaning the spinning laser turret prevents navigation drift, mapping errors, and phantom obstacle detection."
    },
    {
      number: "03",
      title: "Battery Health & Runtimes",
      description: "Preventing contact oxidation and thermal stress keeps lithium battery capacity high for full-home single-charge cleaning."
    },
    {
      number: "04",
      title: "Dock Auto-Empty Efficiency",
      description: "Clearing waste ducts and air seals on RockDock stations ensures complete dustbin evacuation without clogs."
    },
    {
      number: "05",
      title: "Allergen Filtration",
      description: "Regularly maintained E11-rated washable filters capture microscopic particles, pollen, and pet dander reliably."
    },
    {
      number: "06",
      title: "Gearbox & Motor Protection",
      description: "Periodic lubrication and debris removal prevent drive wheel motor burnout and expensive mainboard failures."
    }
  ]
};

// Section 4: Warning Signals / Problems Grid (4x2 Numbered Grid)
export const commonProblemsData = {
  title: "Common Problems with Roborock Vacuum Cleaners That May Require Service",
  subtitle: "EXPERT SOLUTIONS FOR ROBOROCK VACUUM ERROR CODES & FAULTS",
  items: [
    {
      number: "01",
      title: "Inconsistent Pickup",
      description: "Clogged brushes, dirty filters, and full dustbins can reduce suction power. Be sure to clean them regularly with the Roborock vacuum."
    },
    {
      number: "02",
      title: "Poor Mopping",
      description: "Roborock wet dry vacuum & cordless vacuum can have performance issues due to dirty mop pads, clogged water tanks, or obstructed nozzles."
    },
    {
      number: "03",
      title: "Stuck / Lost",
      description: "Roborock robot vacuum performs at its best, removing any loose crumbs, dark rugs, & small gaps. Clearing the clutter is essential for optimal operation!"
    },
    {
      number: "04",
      title: "Fails to Dock",
      description: "Make sure to clean the charging contacts on both the Roborock robot and the dock, as dirty contacts can prevent a proper connection."
    },
    {
      number: "05",
      title: "Vacuum Error Codes",
      description: "Problems with the sensors, such as dust or dirt accumulation, as well as blockages in the docking station, can lead to robot vacuum errors."
    },
    {
      number: "06",
      title: "Short Battery Life/Not Charging",
      description: "Possible issues with the Roborock vacuum cleaner may include dirty contacts, the Roborock robot vacuum's old battery, or the need for a reset."
    },
    {
      number: "07",
      title: "Robot Connectivity",
      description: "If you are currently experiencing challenges with Wi-Fi connectivity and app connection problems for Roborock robot vacuums."
    },
    {
      number: "08",
      title: "Unexpected Behavior",
      description: "Firmware glitches & dirt on the sensors will definitely result in inconsistent cleaning performance. It's essential to address these issues to ensure optimal operation."
    }
  ]
};

// Section 5: Services Offered (4 Cards, Vector Icons)
export const servicesOfferedData = {
  title: "Comprehensive Roborock Repair Services in Dubai",
  subtitle: "PRECISION RESTORATION FOR ROBOT VACUUMS & WET-DRY CLEANERS",
  cards: [
    {
      icon: "diagnostics",
      title: "PreciSense LiDAR & Sensor Repair",
      description: "Diagnostic recalibration of laser distance sensors, Reactive 3D cameras, wall sensors, and cliff fall-prevention sensors."
    },
    {
      icon: "ac-repair",
      title: "Battery Replacement & Power Board Repair",
      description: "Installing premium certified lithium-ion battery packs, repairing charging base dock boards, and fixing power cutoff faults."
    },
    {
      icon: "ac-installation",
      title: "DuoRoller Brush & Drive Wheel Service",
      description: "Overhauling tangled roller brush gearboxes, replacing worn side brush motors, and fixing squeaking or jammed drive wheels."
    },
    {
      icon: "file-check",
      title: "RockDock Ultra & VibraRise System Care",
      description: "Unclogging internal water feed lines, servicing sonic vibration mopping plates, and repairing dock auto-empty motors."
    }
  ]
};

// Section 6: Key Benefits of Service (MaintenanceBenefits)
export const benefitsData = {
  title: "What Are the Benefits of a Roborock Vacuum Cleaner?",
  subtitle: "POWERFUL HYPERFORCE SUCTION, PRECISION MAPPING & SMART HOME CARE",
  items: [
    {
      icon: "clock-fast",
      title: "Efficiency and Time-Saving",
      description: "Cleaning large areas quickly can significantly reduce the time required compared to traditional methods. Additionally, robotic vacuums require minimal effort to operate."
    },
    {
      icon: "shield",
      title: "Superior Cleaning Performance",
      description: "A robotic vacuum cleaner effectively removes dirt, pet hair, and dust mites, improving indoor air quality compared to traditional sweeping methods."
    },
    {
      icon: "heart-hand",
      title: "Ideal for Busy Lifestyles",
      description: "Robotic vacuums clean autonomously, while cordless stick vacuums allow for quick and easy clean-ups."
    },
    {
      icon: "coins",
      title: "Cost-Effective Cleaning Solution",
      description: "Roborock vacuum cleaners save money by reducing the need for professional cleaning and extending the life of carpets and flooring."
    },
    {
      icon: "certified-expert",
      title: "Improves Air Quality",
      description: "The HEPA filter enhances air quality by trapping allergens such as dust and pet dander, providing relief for allergy sufferers and minimizing respiratory problems."
    },
    {
      icon: "rosette-check",
      title: "Vacuum and Mop Function",
      description: "Robot vacuum and mop combos clean efficiently by vacuuming and mopping at the same time, minimizing the need for multiple tools."
    }
  ]
};

// Section 7: Why Choose FAJ (NumberedGridSection - 3 Columns)
export const whyChooseUsData = {
  title: "Why Choose FAJ for Roborock Vacuum Repair?",
  subtitle: "DUBAI'S TRUSTED ROBOTIC VACUUM SERVICE CENTER",
  cards: [
    {
      icon: "clock-fast",
      title: "Reliable, Priority, and Quick",
      description: "Fast turnaround times with same-day drop-off inspections and prompt mobile technician visits throughout Dubai."
    },
    {
      icon: "heart-hand",
      title: "Robotics Certified Technicians",
      description: "Specialized technicians skilled in micro-soldering, LiDAR calibration, and complex multi-motor robotic vacuum platforms."
    },
    {
      icon: "shield",
      title: "Original Replacement Parts",
      description: "We install only authentic manufacturer-grade parts and tested lithium-ion cells backed by warranty."
    },
    {
      icon: "certified-expert",
      title: "Complete Transparency",
      description: "Clear diagnostic reports detailing exact error codes and upfront written quotations with no hidden surprises."
    },
    {
      icon: "coins",
      title: "Fair & Honest Pricing",
      description: "Affordable diagnostic and repair pricing that protects your investment in high-end automated cleaning equipment."
    },
    {
      icon: "rosette-check",
      title: "Trusted Since 2010",
      description: "Over a decade of reliable home appliance, electronics, and technical service experience across the UAE."
    }
  ]
};

// Section 8: Service Specialization Types (4x2 Grid of 8 Cards)
export const repairOverviewData = {
  title: "Roborock Models & Series We Specialize In",
  subtitle: "EXPERT SERVICE FOR ALL S-SERIES, Q-SERIES & DYAD MODELS",
  items: [
    {
      icon: "diagnostics",
      title: "Roborock S8 MaxV Ultra & S8 Pro Ultra",
      description: "Specialized diagnostics for FlexiArm Side Brushes, 10,000 Pa suction turbines, and hot-water dock washing modules."
    },
    {
      icon: "ac-repair",
      title: "Roborock Qrevo Master, Curv & Edge Care",
      description: "Dual spinning mop pad motor repairs, anti-tangle DuoDivide brushes, and multifunctional dock auto-drain servicing."
    },
    {
      icon: "ac-installation",
      title: "Roborock Q8 Max+ & Q7 Max Series Service",
      description: "PreciSense LiDAR drive motor replacements, electronic water tank valve unblocking, and auto-empty dock duct clearing."
    },
    {
      icon: "file-check",
      title: "Roborock Saros Series (Saros 10R & Z70)",
      description: "Next-gen ultra-thin chassis repairs, 3D ToF obstacle recognition calibration, and high-speed motor restoration."
    },
    {
      icon: "shield",
      title: "Roborock Dyad Pro & Flexi Wet/Dry Vacuums",
      description: "Dual roller drive transmission fixes, dirty water tank sensor cleaning, and self-cleaning drying cycle repairs."
    },
    {
      icon: "certified-expert",
      title: "RockDock Ultra & All-in-One Dock Station",
      description: "Clean/waste water pump replacements, high-power auto-empty fan repairs, and self-cleaning tray maintenance."
    },
    {
      icon: "coins",
      title: "PreciSense LiDAR & Reactive 3D Sensors",
      description: "Laser turret drive belt fixes, optical camera lens cleaning, and structured light sensor error troubleshooting."
    },
    {
      icon: "rosette-check",
      title: "Battery Re-Cell & Power Management Fixes",
      description: "High-capacity lithium replacement battery packs for full-home coverage and Error 13 charging resolution."
    }
  ]
};

// Section 9: Service Coverage Directory
export const coverageDirectoryData = {
  title: "Roborock Vacuum Service Coverage in Dubai",
  subtitle: "DOORSTEP PICKUP & SERVICE ACROSS ALL 95+ COMMUNITIES",
  locations: applianceCoverageLocations
};

// Section 10: Testimonials
export const testimonialsData = {
  title: "What Our Clients Say About Us",
  subtitle: "VERIFIED REVIEWS FROM ROBOROCK OWNERS IN DUBAI",
  testimonials: [
    {
      name: "Marcus Vance",
      location: "Palm Jumeirah",
      rating: 5,
      comment: "My Roborock S8 Pro Ultra stopped dispensing water for mopping and was giving Error 10. FAJ picked it up, replaced the micro-pump, and brought it back working like new in 24 hours. Superb service!"
    },
    {
      name: "Nadine Khoury",
      location: "Jumeirah Golf Estates",
      rating: 5,
      comment: "The LiDAR turret on my Qrevo got stuck after a pet hair tangle. FAJ dismantled the turret, cleaned the sensors, and recalibrated the mapping. Excellent communication and fair pricing."
    },
    {
      name: "Sanjay Patel",
      location: "Dubai Hills Estate",
      rating: 5,
      comment: "Very impressive workshop in Al Quoz. Dropped off my Roborock for a new battery pack and wheel motor. Thorough testing and genuine warranty. Highly recommended!"
    }
  ]
};

// Section 11: FAQs (10 Tailored Items)
export const faqsData = {
  title: "Frequently Asked Questions About Roborock Service",
  subtitle: "ANSWERS TO COMMON REPAIR, BATTERY & ERROR CODE QUESTIONS",
  items: [
    {
      question: "How long does Roborock vacuum cleaner repair take?",
      answer: "Most routine repairs, including battery replacement, brush motor fixes, and LiDAR sensor servicing, are completed within 24 to 48 hours at our Dubai workshop."
    },
    {
      question: "Can you fix Roborock Error 1 (Laser sensor jammed)?",
      answer: "Yes, Error 1 indicates the PreciSense LiDAR turret is obstructed or its drive belt/motor is faulty. We inspect the turret, remove tangled debris, and replace worn drive components."
    },
    {
      question: "Why does my Roborock vacuum show Error 13 (Charging Error)?",
      answer: "Error 13 usually occurs when dock charging contacts are dirty, oxidized, or the internal charging circuit board is damaged. We clean contacts and service internal power boards."
    },
    {
      question: "Do you service Roborock wet and dry vacuums like Dyad Pro?",
      answer: "Yes, we repair the entire Roborock handheld and cordless wet/dry lineup, including roller drive motors, clean/dirty water tanks, and self-cleaning base stations."
    },
    {
      question: "Can I drop off my Roborock vacuum at your workshop?",
      answer: "Yes! Our central service center is conveniently located in Dubai with free parking for customer drop-offs. No advance appointment is required for drop-offs."
    },
    {
      question: "Do you provide home pickup and delivery in Dubai?",
      answer: "Yes, we provide convenient home pickup and delivery service across all Dubai communities, including Dubai Marina, Downtown, Emirates Hills, and more."
    },
    {
      question: "Why is my Roborock mop not wetting the floor?",
      answer: "Dry mopping is typically caused by limescale blockage in the internal water tubes, airlocks in the water tank, or a failed peristaltic pump. We descale and repair the water system."
    },
    {
      question: "Are your Roborock replacement parts genuine?",
      answer: "We source authentic, factory-tested replacement components and premium lithium-ion cells, and back every repair with an official service warranty."
    },
    {
      question: "How do I fix Roborock Wi-Fi connection issues?",
      answer: "Ensure your home router broadcasts a separate 2.4GHz network, as Roborock does not support pure 5GHz. If it still fails, we diagnose and re-flash the internal Wi-Fi chip."
    },
    {
      question: "What is your diagnostic inspection fee for Roborock?",
      answer: "Our thorough technical inspection is AED 173, providing an itemized diagnosis of all mechanical, sensor, and battery systems before any repairs commence."
    }
  ]
};

// Section 12: Booking Form Data
export const bookingData = {
  title: "Book Roborock Vacuum Cleaner Repair in Dubai",
  subtitle: "SCHEDULE YOUR WORKSHOP INSPECTION OR HOME PICKUP",
  description: "Fill out the form below or call us directly to schedule your Roborock vacuum repair. Fast response and expert service guaranteed.",
  serviceName: "Roborock Vacuum Cleaner Repair Service"
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
  title: "Roborock Vacuum Cleaner Repair & Service Center Dubai",
  description: "Professional Roborock robot vacuum repair in Dubai. Fast same-day service for S8 MaxV, Qrevo, Q7, Dyad Pro, RockDock stations, LiDAR errors, and battery repairs.",
  keywords: "roborock vacuum repair dubai, roborock service center dubai, roborock s8 repair, roborock battery replacement, roborock lidar repair, robot vacuum service dubai",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/roborock-vacuum-cleaner-repair-service-in-dubai/",
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