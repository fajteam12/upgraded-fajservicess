// Page Data for Hotpoint Service
// Modernized with Authenticated Copy, Pricing, Testimonials, Full 95-Community Coverage, and Unique Visual Hierarchy
import applianceCoverageLocations from "../../../applianceCoverageLocations.js";

export const seoData = {
  title: "Hotpoint Home Appliances Repair & Hotpoint Fridge Service Dubai",
  description: "Quality and warranty for Hotpoint home appliances repair in Dubai. Book now fridge, washing machine, dishwasher, cooker & oven service center near you",
  keywords: "Hotpoint refrigerator repair, Hotpoint fridge repair, Hotpoint washing machine repair, Hotpoint dishwasher repair, Hotpoint cooker repair, Hotpoint oven repair, Hotpoint appliance service Dubai",
  author: "FAJ Technical Services L.L.C",
  canonical: "https://www.fajservices.ae/services/home-appliances-repair/brands/hotpoint/",
  robots: "index, follow",
  openGraph: {
    title: "Hotpoint Home Appliances Repair & Hotpoint Fridge Service Dubai",
    description: "Quality and warranty for Hotpoint home appliances repair in Dubai. Book now fridge, washing machine, dishwasher, cooker & oven service center near you",
    url: "https://www.fajservices.ae/services/home-appliances-repair/brands/hotpoint/",
    type: "website",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public",
    siteName: "FAJ Technical Services L.L.C",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotpoint Home Appliances Repair & Hotpoint Fridge Service Dubai",
    description: "Quality and warranty for Hotpoint home appliances repair in Dubai. Book now fridge, washing machine, dishwasher, cooker & oven service center near you",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public",
  },
};

export const contactData = {
  phone: "+971 4 330 0002",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
  address: "Warehouse #1, Plot # 598-1131, Dubai Investment Park First, Dubai, UAE",
};

export const heroData = {
  title: "Reliable Hotpoint Home Appliances Service Center and Repair",
  intro: {
    parts: [
      "Looking for a reliable technician to handle your Hotpoint appliance repairs? You've come to the right place. Since 2010, ",
      {
            "text": "FAJ Technical Services L.L.C",
            "strong": true,
            "href": "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
            "external": true
      },
      " has been providing trusted and affordable repair services across Dubai and Sharjah. Our team consists of experienced professionals who understand the specific repair needs of Hotpoint appliances. We're here to connect you with skilled local technicians who can quickly and efficiently restore your appliance's performance. Your satisfaction remains our top priority."
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
      title: "Hotpoint Washing Machine Repair Near You",
      description: "Facing issues with your Hotpoint appliances? FAJ is ready to assist with prompt and affordable appliances repair services. Whether your washing machine won't drain, your refrigerator isn't cooling, your oven refuses to heat, or your dishwasher won't start, we can fix it. For reliable Hotpoint appliance repair in Dubai and Sharjah, trust FAJ to deliver effective and lasting solutions for any appliance problem.",
      icon: "truck"
    },
    {
      title: "Fast and Reliable Hotpoint Appliances Service",
      description: "At FAJ Technical Services L.L.C, we know that Hotpoint appliance failures often happen when you least expect them. That's why our skilled technicians are ready to deliver dependable repair services whenever you need them. With our help, you can skip the expense of buying a new appliance and have your Hotpoint unit running smoothly again, before it disrupts your day.",
      icon: "tools"
    }
  ]
};

// Section 3: Inspection and Preventive Care (Numbered Cards 01-06)
export const maintenanceImportanceData = {
  title: "Why is Hotpoint Appliance Maintenance Service Important in Dubai?",
  subtitle: "Proactive care preserves efficiency, prevents sudden breakdowns, and extends equipment lifetime.",
  cards: [
    {
        "number": "01",
        "title": "Hotpoint Washing Machine Repair in Dubai",
        "description": "Regular maintenance can prolong your Hotpoint washing machine's lifespan, saving you money."
    },
    {
        "number": "02",
        "title": "Hotpoint Fridge Repair in Dubai",
        "description": "We are confident that we can quickly get your Hotpoint refrigerator up and running again."
    },
    {
        "number": "03",
        "title": "Hotpoint Stove / Oven Repair in Dubai",
        "description": "Catching minor issues early can help prevent them from escalating into expensive repairs."
    },
    {
        "number": "04",
        "title": "Hotpoint Dishwasher Repair in Dubai",
        "description": "Regular maintenance helps minimise potential problems and improves overall performance."
    },
    {
        "number": "05",
        "title": "Early Problem Detection",
        "description": "Regular inspections can help identify potential problems before they escalate into serious issues."
    },
    {
        "number": "06",
        "title": "Cost-Effective",
        "description": "Maintaining appliances is more cost-effective than replacing or making major repairs, ensuring safety and efficiency in Dubai."
    }
]
};

// Section 4: Warning Signals / Problems Grid (4x2 Numbered Grid)
export const commonProblemsData = {
  title: "The Most Common Problems with Hotpoint Appliances",
  subtitle: "Common faults diagnosed and resolved by our certified repair engineers across Dubai",
  cards: [
    {
        "number": "01",
        "title": "Hotpoint Refrigerator",
        "description": "Hotpoint refrigerator may have cooling problems, usually related to the defrost, motor, compressor, or PCB. Let's reach out to FAJ for potential solutions."
    },
    {
        "number": "02",
        "title": "Hotpoint Dishwasher",
        "description": "Common issues with Hotpoint dishwasher include poor cleaning and drying, water leaks, drainage issues, and a few electrical or PCB malfunctions."
    },
    {
        "number": "03",
        "title": "Hotpoint Washing Machine",
        "description": "Hotpoint washing machines include problems with drainage, leaks, faulty PCBs, and issues related to the belt, door switch, or drum spinning."
    },
    {
        "number": "04",
        "title": "Hotpoint Tumble Dryer",
        "description": "Hotpoint dryer may stop spinning and make unusual noises without properly drying clothes, often due to a faulty heating element or control board."
    },
    {
        "number": "05",
        "title": "Hotpoint Cooker / Stove",
        "description": "Common issues with Hotpoint stove include uneven heating and flame problems, such as a broken burner element, a faulty switch, or an electrical gas malfunction."
    },
    {
        "number": "06",
        "title": "Hotpoint Oven",
        "description": "Hotpoint ovens often experience issues such as improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls."
    },
    {
        "number": "07",
        "title": "Hotpoint Freezer",
        "description": "Common issues with Hotpoint freezer include water leaks, insufficient ice production, malfunctioning ice makers, and decreased cooling efficiency."
    },
    {
        "number": "08",
        "title": "Coffee Machine Problem",
        "description": "Water flow in coffee makers, whether drip or single-serve, can often become unusually slow or stop entirely due to several possible reasons."
    }
]
};

// Section 5: Services Offered (4 Cards, No Images, Clean Distinctive Icons)
export const servicesOfferedData = {
  title: "HERE ARE THE SERVICES WE OFFER FOR Hotpoint APPLIANCES",
  subtitle: "Specialized service solutions tailored to the entire range of Hotpoint equipment",
  cards: [
    {
        "title": "Hotpoint Appliance Installation",
        "description": "Expert installation of various types and brands of Hotpoint home appliances to ensure their optimal performance and efficiency.",
        "icon": "ac-installation",
        "actionText": "Book Installation"
    },
    {
        "title": "Hotpoint Appliance Diagnostics",
        "description": "We offer expert diagnostics and eligibility assessments, along with detailed quotes for issues related to Hotpoint appliances.",
        "icon": "diagnostics",
        "actionText": "Book Diagnostics"
    },
    {
        "title": "Hotpoint Appliance Repair Service",
        "description": "We offer fast and effective repair service for Hotpoint appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details about specific services or any questions you may have!",
        "icon": "ac-repair",
        "actionText": "Book Repair"
    },
    {
        "title": "Hotpoint Appliance Annual Maintenance Contract",
        "description": "This contract outlines the terms for the annual maintenance of your Hotpoint appliances, ensuring they function smoothly throughout the year. Enjoy peace of mind with professional care.",
        "icon": "file-check",
        "actionText": "Inquire AMC"
    }
]
};

// Section 6: Key Benefits of Service (Distinct Icons, 2 Stats & WhatsApp CTA)
export const benefitsData = {
  title: "The Benefits of Hotpoint Appliances Service Dubai",
  subtitle: "Why regular maintenance with FAJ delivers lasting value and complete peace of mind",
  stats: [
    { value: "2010", label: "SERVING THE UAE SINCE" },
    { value: "7-Day", label: "SUPPORT AVAILABLE" }
  ],
  whatsappCta: {
    text: "Chat on WhatsApp",
    phone: "+971507464712",
    message: "Hello FAJ, I would like to inquire about Hotpoint appliance repair services."
  },
  cards: [
    {
        "title": "Ensuring Safety",
        "description": "Regular inspections are essential for preventing electrical faults, gas leaks, and other hazards, which ensures the safety of your premises.",
        "icon": "trust-shield"
    },
    {
        "title": "Optimal Performance",
        "description": "Regular maintenance helps your Hotpoint appliances run smoothly and efficiently, delivering the best results every time.",
        "icon": "quality-badge"
    },
    {
        "title": "Lower Energy Bills",
        "description": "Energy-efficient Hotpoint appliances help you save on utility bills, allowing you to keep more money in your pocket each month.",
        "icon": "eco-leaf"
    },
    {
        "title": "Saving Money on Repair",
        "description": "Preventive services help identify issues early, reducing breakdowns and repairs while enhancing the lifespan of Hotpoint appliances.",
        "icon": "coins"
    },
    {
        "title": "Extending Appliance Lifespan",
        "description": "Regular maintenance and prompt servicing can significantly prolong the lifespan of your Hotpoint appliances, delaying the need for replacements.",
        "icon": "lifespan"
    },
    {
        "title": "Peace of Mind",
        "description": "Keeping your Hotpoint appliances in good working order enhances your confidence and minimizes the stress of unexpected breakdowns.",
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
        "description": "You can count on quick service! Our same-day repairs and next-day service visits ensure your needs are met promptly.",
        "icon": "clock-fast"
    },
    {
        "title": "Feeling Of Calm",
        "description": "With a maintenance contract , you get year-round service to keep your Hotpoint appliance running smoothly and reliably.",
        "icon": "heart-hand"
    },
    {
        "title": "You Are in Control",
        "description": "Schedule a day and time for your Hotpoint appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.",
        "icon": "shield"
    },
    {
        "title": "We Are Experts",
        "description": "We specialize in Hotpoint appliance repair, which is why major brands trust us to handle their service and maintenance needs.",
        "icon": "certified-expert"
    },
    {
        "title": "Great Value",
        "description": "Inspection fee includes diagnosis, transport, and reinstallation up to two Hotpoint appliances at the same location in Dubai.",
        "icon": "coins"
    },
    {
        "title": "Trustworthy",
        "description": "Our skilled technicians specialise in Hotpoint appliances and provide outstanding service across major appliances.",
        "icon": "rosette-check"
    }
]
};

// Section 8: Service Specialization Types (Converted to Responsive 4x2 Cards Grid)
export const repairOverviewData = {
  title: "We specialize in Hotpoint appliance services of the following types",
  subtitle: "Dedicated technicians specialized in individual categories across the Hotpoint lineup",
  items: [
    {
        "title": "Hotpoint Washing Machine Repair Near You in Dubai",
        "description": "FAJ is here to support you when issues arise. We understand that your Hotpoint washing machine is vital for daily life, ensuring your laundry stays clean. Contact us for the best Hotpoint washing machine service center near me in Dubai.",
        "icon": "settings"
    },
    {
        "title": "Hotpoint Fridge Repair Near You in Dubai",
        "description": "If you are having problems with your Hotpoint refrigerator, please contact the FAJ team for same-day Hotpoint refrigerator repair service in Dubai.",
        "icon": "certified-expert"
    },
    {
        "title": "Hotpoint Freezer Repair Near You in Dubai",
        "description": "Our team of qualified technicians is available for Hotpoint freezer repair and service in Dubai and Sharjah.",
        "icon": "ac-repair"
    },
    {
        "title": "Hotpoint Home Appliance Service Center Near You",
        "description": "If you are seeking the best repair service Hotpoint washer dryer in Dubai, FAJ is an excellent choice. They are well-known for their exceptional service in repairing Hotpoint fridge freezer and are recognized as the leading provider for repairs of fix Hotpoint cooking range, stove fixes, induction cooktops, repair Hotpoint washing machines, and Hotpoint refrigerator in the area.",
        "icon": "shield"
    },
    {
        "title": "Hotpoint Dishwasher Repair Near You in Dubai",
        "description": "If you're experiencing issues with your Hotpoint dishwasher, it might be time for some repair or maintenance. For reliable and top-notch service, consider FAJ's Hotpoint service center in Dubai, which specializes in integrated Hotpoint dishwasher repairs. They offer expert assistance to ensure your appliance functions optimally.",
        "icon": "ice-crusher"
    },
    {
        "title": "Hotpoint Cooking Range and Oven Repair Near You",
        "description": "We provide expert repair service Hotpoint cooking range and ovens in Dubai. Our skilled technicians are experienced in diagnosing and fixing issues with Hotpoint refrigerator repair, fix Hotpoint dishwasher, Hotpoint dryer fixer, and more.",
        "icon": "fan"
    },
    {
        "title": "Hotpoint Dryer Repair and Service Near You",
        "description": "Is your Hotpoint dryer not working properly? Looking for a reliable Hotpoint dryer service in Dubai? Contact us for same-day assistance!",
        "icon": "droplets"
    },
    {
        "title": "Hotpoint Oven Repair Near Me Dubai",
        "description": "If you're searching for the best company for Hotpoint oven repair in Dubai, FAJ is an excellent choice. They are renowned for providing exceptional service specifically for Hotpoint ovens. FAJ is recognized as the leading service center for Hotpoint oven repair and maintenance in Dubai.",
        "icon": "thermometer-sun"
    }
]
};

// Section 9: Service Coverage Directory
export const coverageDirectoryData = {
  title: "We offer service for Hotpoint appliances in the Dubai area",
  subtitle: "Prompt mobile technician coverage across all 95 major communities in Dubai",
  items: applianceCoverageLocations,
};

// Section 10: Verified Customer Testimonials Carousel
export const testimonialsData = {
  title: "What our clients say About Us",
  subtitle: "Verified reviews from satisfied Hotpoint owners across Dubai",
  reviews: [
    {
      name: "Haris M",
      role: "Dubai Marina Resident",
      comment: "We're facing the issue with our Hotpoint and we reached out to FAJ. The technician arrived on time and resolved the fault quickly. Very professional!",
      rating: 5,
    },
    {
      name: "Anusri Chan",
      role: "Palm Jumeirah Villa Owner",
      comment: "Excellent Hotpoint repair service. The technician came out to fix our machine on the same day. He was very polite, knowledgeable, and took great care.",
      rating: 5,
    },
    {
      name: "Jason Miller",
      role: "JVC Homeowner",
      comment: "FAJ fixed our Hotpoint in no time! Technician explained everything clearly and gave helpful maintenance tips. Highly recommended.",
      rating: 5,
    },
    {
      name: "Khurram Mahmood",
      role: "Downtown Dubai Resident",
      comment: "Fast, reliable, and fair pricing. The only service center in Dubai I trust for my Hotpoint servicing.",
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
        "question": "When is the best time to have my Hotpoint appliance repaired?",
        "answer": "When you see a problem, contact our experts right away. If you suspect an issue, such as cooling failure, drainage trouble, or abnormal noises, prompt repair prevents secondary component damage."
    },
    {
        "question": "What kinds of Hotpoint appliances does FAJ repair and service in Dubai?",
        "answer": "Our certified technicians repair all Hotpoint residential equipment, including refrigerators, freezers, washing machines, tumble dryers, dishwashers, cooking ranges, built-in ovens, and induction stoves."
    },
    {
        "question": "What should I do when my Hotpoint appliance suddenly breaks down?",
        "answer": "If an appliance suddenly stops working, power it off and unplug it from the wall. In case of water leaks from a washer or fridge, turn off the water supply valve immediately and call our emergency dispatch team."
    },
    {
        "question": "How long does FAJ take to complete a Hotpoint appliance repair?",
        "answer": "Most on-site repairs across Dubai are resolved on the same day during our initial technician visit. Comprehensive workshop repairs are completed within 24 to 48 hours."
    },
    {
        "question": "Is it better to repair or replace my Hotpoint home appliance?",
        "answer": "If the estimated repair cost is under 50% of the replacement price and the unit is within its typical service lifespan, repairing is substantially more economical."
    },
    {
        "question": "Why is my Hotpoint refrigerator not cooling while the freezer is cold?",
        "answer": "This commonly results from a failed defrost timer or sensor, iced-over evaporator coils, a malfunctioning evaporator fan motor, or a blocked air damper between compartments."
    },
    {
        "question": "Why is my Hotpoint washing machine not spinning or draining water?",
        "answer": "Washing machine drainage issues typically indicate a clogged drain pump filter, a jammed impeller, a defective drain pump motor, or a worn drive belt / motor carbon brushes."
    },
    {
        "question": "Why does my Hotpoint dishwasher leave residue on dishes?",
        "answer": "Dirty dish outcomes usually stem from clogged spray arm nozzles, defective circulation pumps, faulty inlet water valves, or mineral descaling requirements in hard water environments."
    },
    {
        "question": "Do Hotpoint ovens and cookers need regular safety inspections?",
        "answer": "Yes, periodic inspections verify thermostat calibration, inspect heating elements, test safety gas thermocouples, and ensure airtight door gasket seals for energy efficiency."
    },
    {
        "question": "Are original Hotpoint spare parts used for all repairs?",
        "answer": "Yes, FAJ strictly installs authentic OEM Hotpoint spare parts to preserve factory efficiency, safety standards, and manufacturer longevity, supported by our service warranty."
    }
]
};

// Section 12: Booking Form — MUST BE AT THE VERY END!
export const bookingData = {
  title: "Book Your Hotpoint Service Appointment",
  subtitle: "Fast response, certified technicians, authentic parts, and full warranty.",
  badge: "Easy Online Booking",
  serviceName: "Hotpoint Home Appliance Repair Service",
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
