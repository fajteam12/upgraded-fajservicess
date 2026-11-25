// ==========================================================================
// Al Badaa Home Appliances Service - Consolidated Page Data
// Content strictly extracted word-for-word from respective location detail JSX
// Structure & design aligned with HobRepair reference page
// All images strictly from this location page (no images from hub page)
// ==========================================================================

const seoData = {
  title: "Best Appliances Services and Washing Machine Repair in Al Badaa",
  description: "High-quality home appliance service in Al Badaa, Dubai. We offer fast refrigerator, washing machine, dishwasher, stove, and oven repair near you",
  keywords: " Washing Machine in al Badaa, Fridge Repair in al Badaa, Dishwasher Repair in al Badaa, Oven Repair in al Badaa, Appliance Services in al Badaa, Appliance Repair in al Badaa, Appliance Maintenance in al Badaa, Appliance Service Center in al Badaa",
  author: "FAJ Technical Services L.L.C",
  url: "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-badaa/",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-badaa/",
  image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public",
  robots: "index, follow",
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

// Section 1: Hero
const heroData = {
  eyebrow: "HOME APPLIANCES SERVICE",
  title: "TRUSTED HOME APPLIANCES SERVICE AND REPAIR IN AL BADAA, DUBAI",
  hideSubtitle: true,
  paragraphs: [
    "Since 2010, we have been providing reliable appliance repair services. We understand that appliances can break down unexpectedly, which is why we offer quality and affordable solutions. Our trained technicians are available throughout Dubai, Sharjah, and Abu Dhabi to repair large appliances at your location.",
  ],
  highlights: [
    {
      icon: "award",
      title: "Established Since 2010",
      description: "Reliability, Diversity, Integrity, and Quality.",
    },
    {
      icon: "shield",
      title: "Workmanship Warranty",
      description: "2-month repair warranty and 3-month parts warranty.",
    },
    {
      icon: "clock",
      title: "Prompt Service Response",
      description: "Fast assistance across Al Badaa.",
    },
  ],
  buttonStyle: "classic",
  showPhone: false,
  showCall: false,
  showWhatsapp: true,
  whatsapp: "971507464712",
  phone: "",
  image: {
    id: "The-Most-Common-Reasons-for-Appliance-Breakdowns",
    alt: "Trusted Home Appliances Service and Repair in Al Badaa, Dubai",
    width: 853,
    height: 853,
  },
};

// Section 3: Pricing Cards Section (Directly under Breadcrumbs)
const pricingData = {
  eyebrow: "TRANSPARENT SERVICE OPTIONS",
  title: "APPLIANCE INSPECTION, CLEANING AND MAINTENANCE PRICES",
  description:
    "Choose a starting service based on your appliance system. Final quotations depend on unit type, condition and required work.",
  actionLabel: "Book Now",
  items: [
    {
      badge: "Standard Diagnosis",
      title: "Inspection / Check-Up Cost",
      price: "AED 173",
      image: "applycalouthome",
      actionLabel: "Book Now",
      bookingLabel: "Inspection / Check-Up Cost",
      description:
        "Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.",
      popup: {
        title: "Inspection / Check-Up Cost scope of work:",
        sections: [
          {
            items: [
              "Inspection visit fee",
              "Rectification of faults",
              "Cost of minor repair work",
              "Transportation pricing for services",
              "Technical inspection onsite or workshop",
              "Pick-up, drop-off, and reinstallation onsite",
              "A quotation can be provided via call, WhatsApp, or email if needed.",
              "The same call-out fee applies for diagnosing either one or two appliances at the same place.",
            ],
          },
          {
            label: "Excluded",
            text: "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text: "*Starting from AED 173, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      badge: "50-Day Warranty",
      title: "Appliance Cleaning",
      price: "AED 230",
      image: "appliancescleaninghome",
      actionLabel: "Book Now",
      bookingLabel: "Appliance Cleaning",
      description:
        "Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.",
      popup: {
        title: "Cleaning Appliances",
        sections: [
          {
            heading: "Depending on quantities, capacity, type, model, and area.",
            items: [
              "Hob Cleaning",
              "Oven Cleaning",
              "Freezer Cleaning",
              "Gas Range Cleaning",
              "Dishwasher Cleaning",
              "Refrigerator Cleaning",
              "Hood / Chimney Cleaning",
              "Washing Machine Cleaning",
            ],
          },
          {
            label: "Excluded",
            text: "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text: "*Starting from AED 230 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
    {
      badge: "Professional Setup",
      title: "Appliance Installation Charge",
      price: "AED 280",
      image: "ovenhomecard",
      actionLabel: "Book Now",
      bookingLabel: "Appliance Installation Charge",
      description:
        "FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!",
      popup: {
        title: "Appliances Installation",
        sections: [
          {
            heading: "Depending on quantities, capacity, type, model, and area.",
            items: [
              "Appliance Installation",
              "Gas Range Installation & Pipe Connection",
              "Electric & Induction Cut-out Fitting",
              "Electrical Circuit & Breaker Safety Check",
            ],
          },
          {
            label: "Excluded",
            text: "Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.",
          },
          {
            label: "Terms & Conditions",
            text: "*Starting from AED 280 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
  ],
};

// Section 4: Service Video
const videoData = {
  id: "appliance-service-video",
  eyebrow: "SERVICE VIDEO",
  title: "Best Home Appliance Service in Dubai",
  lead: {
    parts: [
      "If you need appliance repair, FAJ is your best choice for fast and affordable service in Al Badaa Dubai and Sharjah. Our expert team is ready to tackle any issue, whether it’s a washing machine that won’t drain, refrigerator that's not working, an oven that isn’t heating, or a dishwasher that won’t switch on. We're nearby and can get your appliances fixed quickly and efficiently.",
    ],
  },
  videoId: "45IUOnKHjKw",
  videoSide: "left",
  showCta: true,
  showPhone: false,
  showWhatsapp: true,
  whatsapp: "971507464712",
  phone: "",
};

// Section 5: Professional Care / Workshop Banner
const serviceCenterData = {
  id: "appliance-service-center",
  eyebrow: "PROFESSIONAL CARE",
  title: "FAST AND RELIABLE APPLIANCES SERVICE",
  plain: true,
  paragraphs: [
    {
      parts: [
        "At ",
        {
          text: "FAJ Technical Services L.L.C",
          strong: true,
          href: "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
          external: true,
        },
        ", we understand that appliance breakdowns never happen at a convenient time. That’s why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.",
      ],
    },
    {
      parts: [
        "If you require repairs for your refrigerator, washing machine, dishwasher, oven, cooking range, or other domestic appliances, please contact us. The ",
        {
          text: "FAJ workshop",
          strong: true,
          href: "https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D",
          external: true,
        },
        " is located near the Umm Suqeim road and is easily accessible from Al Khail Road and Sheikh Zayed Road.",
      ],
    },
    "When you drop off your appliance at the workshop, you will receive a discount on the technical inspection fee and other services.",
  ],
};

// Section 6: Inspection and Care (3-Column Grid)
const maintenanceImportanceData = {
  id: "appliance-maintenance-importance",
  eyebrow: "INSPECTION AND CARE",
  title: "WHY IS APPLIANCE MAINTENANCE SERVICE IMPORTANT IN DUBAI?",
  description:
    "Proper appliance maintenance is essential for extending lifespan and enhancing efficiency, especially in Dubai’s climate. Here are the main benefits:",
  items: [
    {
      icon: "shield",
      title: "EXTENDED LIFESPAN:",
      description:
        "Regular maintenance helps appliances last longer, saving on replacement costs.",
    },
    {
      icon: "zap",
      title: "IMPROVED EFFICIENCY:",
      description:
        "Well-maintained appliances use less energy, leading to lower utility bills, which is essential in Dubai.",
    },
    {
      icon: "coins-stack",
      title: "PREVENTING COSTLY REPAIR:",
      description:
        "Catching minor issues early prevents them from escalating into expensive repairs.",
    },
    {
      icon: "gear-precision",
      title: "PRESERVING APPLIANCE INTEGRITY:",
      description:
        "Regular cleaning prevents dust buildup and component wear that affects performance.",
    },
    {
      icon: "clock-urgent",
      title: "EARLY PROBLEM DETECTION:",
      description:
        "Routine checks help identify potential issues before they become serious.",
    },
  ],
};

// Section 7: Warning Signals / Problems Grid (4x2 Numbered Grid)
const commonProblemsData = {
  id: "appliance-common-problems",
  eyebrow: "WARNING SIGNALS",
  title: "THE MOST COMMON PROBLEMS WITH HOME APPLIANCES",
  items: [
    {
        "number": "01",
        "title": "REFRIGERATOR PROBLEM",
        "description": "Most fridge malfunctions are commonly related to cooling issues, including problems with the defrost system, fan motor, compressor, or coils."
    },
    {
        "number": "02",
        "title": "DISHWASHERS PROBLEM",
        "description": "The most issues with dishwashers are bad cleaning and drying. Common water leaks and drainage. Some electrical issues or PCB failures."
    },
    {
        "number": "03",
        "title": "WASHING MACHINE PROBLEM",
        "description": "A common issue with washing machines is drainage problems, leaks, and PCB faulty. Also, broken belt or faulty door switch or drum from spinning."
    },
    {
        "number": "04",
        "title": "TUMBLE DRYER PROBLEM",
        "description": "Dryers can stop the drum from spinning and often make noise without drying clothes properly. Common issues are a broken heating element or control board."
    },
    {
        "number": "05",
        "title": "STOVE PROBLEM",
        "description": "Uneven heating or flame issues, such as a broken burner element, bad switch, or electric gas, are the most common problems with stoves."
    },
    {
        "number": "06",
        "title": "OVENS PROBLEMS",
        "description": "Most ovens have common problems like not heating properly, burners not igniting, ignition issues on gas models, broken knobs, and faulty controllers or valves."
    },
    {
        "number": "07",
        "title": "FREEZER PROBLEM",
        "description": "Common issues with a freezer include water leaks, no ice, a malfunctioning ice maker, a malfunctioning PCB, motor, or compressor, and less cooling."
    },
    {
        "number": "08",
        "title": "COFFEE MACHINE PROBLEM",
        "description": "Whether they are drip or single-serve coffee makers, there are a few reasons why water flow in coffee makers is often slow or nonexistent."
    }
],
};

// Section 8: Services Offered (4 Cards, Static Grid)
const servicesOfferedData = {
  id: "services-offered",
  eyebrow: "APPLIANCE SOLUTIONS",
  title: "HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES",
  description:
    "We specialize in all types and brands of home appliances, including built-in units.\nOur services include:",
  bottomTitle:
    "Schedule Your FAJ Appliance Cleaning, Repair & Maintenance Services Today!",
  bottomDescription:
    "Regular maintenance is essential for optimal performance, efficiency, and longevity of your home appliances. Feel free to reach out if you need specific services or have any questions!",
  cta: {
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
  items: [
    {
      icon: "ac-installation",
      title: "Installation",
      description:
        "Expert installation of various types and brands of home appliances, ensuring optimal performance and efficiency.",
    },
    {
      icon: "search",
      title: "Diagnostics",
      description:
        "Comprehensive fault-finding services to effectively diagnose issues. We provide eligibility assessments and detailed quotations.",
    },
    {
      icon: "ac-repair",
      title: "Repair Service",
      description:
        "Efficient repair services for all appliance components, ensuring quick resolution to leaks, electrical failures, and system malfunctions.",
    },
    {
      icon: "shield",
      title: "Annual Maintenance Contract",
      description:
        "This contract outlines the terms and services covered for comprehensive annual maintenance of your appliances.",
    },
  ],
};

// Section 9: Key Benefits (Sticky Left + 6 Numbered Cards Right)
const benefitsData = {
  eyebrow: "PREMIUM OUTCOMES",
  title: "The Benefits of Appliances Service Dubai",
  description:
    "Routine care keeps your home appliances operating safely and efficiently while protecting against sudden breakdowns.",
  stats: [
    {
      value: "2010",
      label: "SERVING THE UAE SINCE",
    },
    {
      value: "SAME DAY",
      label: "DISPATCH AVAILABLE",
    },
  ],
  benefits: [
    {
      id: "appliance-service-safety",
      number: "01",
      title: "Ensuring Safety",
      description:
        "Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.",
      icon: "safety-compliance",
    },
    {
      id: "appliance-service-performance",
      number: "02",
      title: "Optimal Performance",
      description:
        "Regular maintenance helps your appliances run smoothly and efficiently, delivering the best results every time.",
      icon: "gear-precision",
    },
    {
      id: "appliance-service-energy",
      number: "03",
      title: "Lower Energy Bills",
      description:
        "Energy efficient appliances translate to monthly savings on utility bills, putting more money back in your pocket.",
      icon: "zap",
    },
    {
      id: "appliance-service-cost",
      number: "04",
      title: "Saving Money on Repair",
      description:
        "Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.",
      icon: "price-tag",
    },
    {
      id: "appliance-service-lifespan",
      number: "05",
      title: "Extending Appliance Lifespan",
      description:
        "Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.",
      icon: "shield-award",
    },
    {
      id: "appliance-service-peace",
      number: "06",
      title: "Peace of Mind",
      description:
        "Knowing your appliances are in top condition gives you confidence and removes the stress of unexpected failures.",
      icon: "peace-of-mind",
    },
  ],
};

// Section 10: Why Choose FAJ (3-Column Grid)
const whyChooseUsData = {
  id: "appliance-why-choose-us",
  eyebrow: "WHY CHOOSE FAJ ?",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  items: [
    {
      icon: "clock-fast",
      badge: "PRIORITY SUPPORT",
      title: "Reliable, Priority, and Quick",
      description:
        "You can count on efficient service! Our same-day repair or next-day service visits ensure that your needs are met quickly.",
    },
    {
      icon: "peace-of-mind",
      badge: "ANNUAL CONTRACT",
      title: "Feeling Of Calm",
      description:
        "With a maintenance contract, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.",
    },
    {
      icon: "calendar-check",
      badge: "FLEXIBLE SLOTS",
      title: "You Are in Control",
      description:
        "Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "award-expert",
      badge: "TRUSTED EXPERTISE",
      title: "We Are Experts",
      description:
        "We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.",
    },
    {
      icon: "shield-dollar",
      badge: "TRANSPARENT VALUE",
      title: "Great Value",
      description:
        "Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.",
    },
    {
      icon: "trust-shield",
      badge: "CERTIFIED PROS",
      title: "Trustworthy",
      description:
        "Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.",
    },
  ],
};

// Section 11: Approved Brand Partners
const brandsData = {
  eyebrow: "APPROVED BRAND PARTNERS",
  title: "We specialise in Appliances services for the following brands",
  description:
    "Search the manufacturers supported by our home appliance repair team. Existing dedicated brand pages are linked from their titles.",
  searchLabel: "Search appliance brands",
  searchPlaceholder: "Search brand (e.g. Bosch, Siemens, LG...)",
  emptyMessage:
    "No matching appliance brand was found. Contact us with your model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    {
      name: "Bosch Appliances Repair",
      href: "/services/home-appliances-repair/brands/bosch/",
      description:
        "Are you in search of a dependable and skilled technician to repair your Bosch appliances in Dubai? You can find experienced and certified experts with a single call.",
    },
    {
      name: "Siemens Appliances Repair",
      href: "/services/home-appliances-repair/brands/siemens/",
      description:
        "Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!",
    },
    {
      name: "LG Appliances Repair",
      href: "/services/home-appliances-repair/brands/lg/",
      description:
        "Professional LG refrigerator, washing machine, dryer and dishwasher repair service in Dubai with genuine parts and warranty.",
    },
    {
      name: "Samsung Appliances Repair",
      href: "/services/home-appliances-repair/brands/samsung/",
      description:
        "Expert Samsung home appliance repair service across Dubai for refrigerators, washing machines, dryers, and cooking appliances.",
    },
    {
      name: "Ariston Appliances Repair",
      href: "/services/home-appliances-repair/brands/ariston/",
      description:
        "Specialized Ariston appliance repair and maintenance services in Dubai for cookers, ovens, dishwashers, and washing machines.",
    },
    {
      name: "Miele Appliances Repair",
      href: "/services/home-appliances-repair/brands/miele/",
      description:
        "High-end premium Miele appliance service and diagnostic repairs in Dubai with authorized factory procedures and original parts.",
    },
    {
      name: "Teka Appliances Repair",
      href: "/services/home-appliances-repair/brands/teka/",
      description:
        "Reliable Teka kitchen appliance repair and installation services across Al Badaa for hobs, ovens, hoods, and dishwashers.",
    },
    {
      name: "Smeg Appliances Repair",
      href: "/services/home-appliances-repair/brands/smeg/",
      description:
        "Expert diagnostic and repair services for Smeg designer kitchen appliances including refrigerators, stoves, and dishwashers.",
    },
    {
      name: "AEG Appliances Repair",
      href: "/services/home-appliances-repair/brands/aeg/",
      description:
        "Certified AEG home appliance maintenance and electronic board repairs for premium washing machines, dryers, and ovens.",
    },
    {
      name: "Electrolux Appliances Repair",
      href: "/services/home-appliances-repair/brands/electrolux/",
      description:
        "Authorized level servicing for Electrolux refrigeration, laundry equipment, and kitchen cooking ranges across Dubai.",
    },
    {
      name: "Whirlpool Appliances Repair",
      href: "/services/home-appliances-repair/brands/whirlpool/",
      description:
        "Trusted Whirlpool refrigerator, washing machine, and tumble dryer repair specialists in Al Badaa.",
    },
    {
      name: "Zanussi Appliances Repair",
      href: "/services/home-appliances-repair/brands/zanussi/",
      description:
        "Prompt repair solutions for Zanussi dishwashers, washing machines, gas cookers, and built-in ovens.",
    },
  ],
};

// Section 12: Maintenance Contracts
const contractsData = {
  id: "appliance-maintenance-contracts",
  eyebrow: "Service Contracts",
  title: "Appliance Maintenance Contracts",
  description:
    "Flexible preventive-care plans for frequently used appliances, kitchen setups and multi-property requirements.",
  featuredIndex: 0,
  actionLabel: "Get a quick quote",
  plans: [
    {
      title: "Maintenance Contract (Yearly)",
      tagline: "Comprehensive year-round care with priority support options.",
      badge: "Best Value",
      features: [
        "Limited or unlimited breakdown call-outs",
        "Two or three planned preventive services",
        "Options with included or excluded spare parts",
        "Custom coverage for homes, villas and managed apartments",
      ],
    },
    {
      title: "Maintenance Contract (6 Months)",
      tagline: "Balanced preventive coverage for frequently used equipment.",
      badge: "Popular",
      features: [
        "Limited or unlimited breakdown call-outs",
        "One or two preventive maintenance services",
        "Cleaning, sensor and performance checks",
        "Equipment condition reporting",
      ],
    },
    {
      title: "Maintenance Contract (3 Months)",
      tagline:
        "Flexible short-term support for immediate appliance repair needs.",
      badge: "Flexible",
      features: [
        "One preventive maintenance service",
        "Rapid fault isolation and priority dispatch",
        "Minor repair and operational adjustment support",
        "Clear, transparent replacement parts quotation",
      ],
    },
  ],
};

// Section 13: Customer Testimonials
const testimonialsData = {
  eyebrow: "TESTIMONIALS",
  title: "Customer Reviews",
  subtitle: "What our clients say about our appliance repair service in Dubai",
  reviews: [
    {
      name: "Linda Michel",
      rating: 5,
      date: "04/09/2024",
      comment:
        "FAJ repaired my cooktop, dishwasher and replaced broken refrigerator shelves! Their service was outstanding, great communication! Regina was on top of everything and kept me updated",
    },
    {
      name: "Ram Kanta",
      rating: 5,
      date: "14/08/2024",
      comment:
        "fixing kitchen hood in my home. good installation and excellent Well recommended",
    },
    {
      name: "Diana Dalaty",
      rating: 5,
      date: "25/07/2024",
      comment:
        "FAJ repaired our fryer and oven quickly. Their commercial cooking equipment service is professional and reliable",
    },
    {
      name: "Tarek Al Masri",
      rating: 5,
      date: "18/06/2024",
      comment:
        "Excellent service! The technician arrived on time and repaired our washing machine in under an hour. Highly recommend FAJ services in Al Badaa.",
    },
    {
      name: "Sophie Dupont",
      rating: 5,
      date: "02/05/2024",
      comment:
        "Very professional team. They diagnosed our Siemens refrigerator cooling problem and replaced the defrost sensor with original parts.",
    },
  ],
};

// Section 14: FAQs
const faqsData = {
  eyebrow: "COMMON QUESTIONS",
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to common questions about home appliance repair and maintenance services in Al Badaa",
  items: [
    {
      question: "How do I know if my appliance needs repair or replacement?",
      answer:
        "Signs include strange noises, leaks, failure to turn on, or poor performance. Our technicians can assess the issue and recommend whether repair or replacement is the best option.",
    },
    {
      question: "Do you offer warranties on repairs?",
      answer:
        "Yes, we offer warranties on both parts and labor for peace of mind. Check our terms for specific coverage details.",
    },
    {
      question: "What types of appliances do you repair?",
      answer:
        "We repair a wide range of appliances, including refrigerators, dishwashers, washing machines, dryers, ovens, and stoves.",
    },
    {
      question: "How long does FAJ take for an appliance to be repaired?",
      answer:
        "Repair times vary depending on the issue and parts availability. Many common repairs can be completed in a few hours, while more complex issues may take longer.",
    },
    {
      question: "What should I do before the technician arrives?",
      answer:
        "Ensure the area around the appliance is clear and accessible. If possible, have the model number and any relevant information handy.",
    },
    {
      question: "Are your technicians certified?",
      answer:
        "Yes, all our technicians are fully certified, trained, and insured to ensure quality service.",
    },
    {
      question: "What should I do if my appliance stops working suddenly?",
      answer:
        "Check the power source and connections first. If the problem persists, contact us for professional assistance.",
    },
    {
      question: "How can I prevent future appliance problems?",
      answer:
        "Regular maintenance, keeping appliances clean, and following manufacturer guidelines can help prevent future issues.",
    },
    {
      question: "Can I repair an appliance myself?",
      answer:
        "While minor issues might be fixable, it’s best to hire a professional to avoid further damage or voiding warranties.",
    },
    {
      question:
        "Why is it not cooling, even though the light is on, the compressor is running, and the freezer is working?",
      answer:
        "A refrigerator might not cool if the coils are dirty, airflow is blocked, or the thermostat is broken. Regular maintenance helps fix these issues. If problems continue, call FAJ.",
    },
  ],
};

// Section 15: Booking Form
const bookingData = {
  eyebrow: "REPAIR BOOKING",
  title: "Book Appliance Service in Al Badaa",
  subtitle: "Schedule dependable same-day appliance repair across Al Badaa",
  fields: {
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    service: "Appliance Type",
    date: "Preferred Date",
    message: "Describe the Issue",
  },
  submitText: "Request Service",
  services: [
    "Refrigerator Repair",
    "Washing Machine Repair",
    "Dishwasher Repair",
    "Oven & Stove Repair",
    "Dryer Repair",
    "Freezer Repair",
    "Coffee Machine Repair",
  ],
};

const alBadaaData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  pricing: pricingData,
  video: videoData,
  serviceCenter: serviceCenterData,
  maintenanceImportance: maintenanceImportanceData,
  commonProblems: commonProblemsData,
  servicesOffered: servicesOfferedData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  brands: brandsData,
  contracts: contractsData,
  testimonials: testimonialsData,
  faqs: faqsData,
  booking: bookingData,
};

export {
  seoData,
  contactData,
  heroData,
  pricingData,
  videoData,
  serviceCenterData,
  maintenanceImportanceData,
  commonProblemsData,
  servicesOfferedData,
  benefitsData,
  whyChooseUsData,
  brandsData,
  contractsData,
  testimonialsData,
  faqsData,
  bookingData,
  alBadaaData,
};

export default alBadaaData;
