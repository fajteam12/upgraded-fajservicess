/**
 * The Ritz-Carlton DIFC AC Service Page Data
 * Canonical modular schema matching Bur Dubai
 */

const seoData = {
  title: "Top Air Conditioning Repair & Service in The Ritz Carlton DIFC",
  description: "Top AC repair and service in The Ritz Carlton DIFC, Dubai. We specialise in HVAC repairs and central A/C maintenance. Contact us today at 04-3300002",
  keywords: "AC Repair The Ritz-Carlton DIFC, AC Service Ritz Carlton DIFC, Air Conditioning Repair DIFC, Luxury AC Maintenance Dubai DIFC",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-ritz-carlton-difc/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Top Air Conditioning Repair & Service in The Ritz Carlton DIFC",
    description: "Top AC repair and service in The Ritz Carlton DIFC, Dubai. We specialise in HVAC repairs and central A/C maintenance. Contact us today at 04-3300002",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-ritz-carlton-difc/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac-service-page/ac-repair-top-hero-banner/public"
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Air Conditioning Repair & Service in The Ritz Carlton DIFC",
    description: "Top AC repair and service in The Ritz Carlton DIFC, Dubai. We specialise in HVAC repairs and central A/C maintenance. Contact us today at 04-3300002",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac-service-page/ac-repair-top-hero-banner/public"
  }
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  whatsappDisplay: "+971 50 746 4712",
  email: "info@fajservices.ae"
};

const heroData = {
  title: "Top-Rated Air Conditioner Repair and Maintenance in The Ritz-Carlton DIFC | AC Service Near Me",
  paragraph: "Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?",
  paragraphs: [
      "Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?"
  ],
  contentWidth: "50%",
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  showCall: false,
  showPhone: false,
  highlights: [
    {
      icon: "award",
      title: "Established Since 2010",
      description: "Reliability, Diversity, Integrity, and Quality."
    },
    {
      icon: "shield-check",
      title: "Workmanship Warranty",
      description: "Repair and service warranty support."
    },
    {
      icon: "phone-support",
      title: "7-Day Service Response",
      description: "Fast assistance across The Ritz-Carlton DIFC."
    }
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Top-Rated Air Conditioner Repair and Maintenance in The Ritz-Carlton DIFC",
    width: 733,
    height: 550
  }
};

const overviewData = {
  "id": "overview",
  "paragraphs": [
    {
      "parts": [
        {
          "text": "FAJ Technical Services L.L.C",
          "href": "/"
        },
        " has been in operation since 2010. Our dedicated facilities team has extensive experience in ",
        {
          "text": "AC service",
          "href": "/services/air-conditioning-repair/ac-service/"
        },
        ", AC maintenance, AC repair near me the Ritz Carlton DIFC, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah."
      ]
    }
  ],
  "showCta": false,
  "cta": {
    "phone": "",
    "whatsapp": "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const pricingData = {
  title: "AC Inspection, Cleaning and Maintenance Prices",
  description:
    "Choose a starting service based on your air-conditioning system. Final quotations depend on unit type, condition and required work.",
  defaultBadge: "Professional AC Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "AC Inspection Service",
      badge: "Diagnostics",
      price: "AED 215",
      image: {
        id: "ac-service-page/ac-inspection",
        src: "/img/ac-service-page/ac-inspection.webp"
      },
      description:
        "Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call.",
      popup: {
        title: "AC Call-Out (Technical Inspection) scope of works:",
        sections: [
          {
            items: [
              "Resolving air flow issues",
              "AC thermostat check-up",
              "Refrigerant Level check-up",
              "Rectification of AC power trip",
              "Rectification of AC water leakage",
              "Fixing AC cooling/overcooling issues",
              "Addressing sound problems from the AC"
            ]
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis."
          }
        ]
      }
    },
    {
      title: "Basic AC Cleaning Price",
      warranty: "60 - Days Warranty",
      badge: "Popular",
      price: "AED 280",
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp"
      },
      description:
        "If your AC has reduced airflow or is leaking water, work quickly. Regularly clean filters and drain to provide efficiency and good air quality.",
      popup: {
        title: "AC Cleaning Service scope of works:",
        sections: [
          {
            items: [
              "AC filter cleaning",
              "AC water leakage",
              "Check AC components",
              "Filter cleaning and replacement",
              "Condenser coil cleaning",
              "AC thermostat check-up",
              "Refrigerant Level check-up",
              "Addressing sound issues from the AC"
            ]
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 280 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis."
          }
        ]
      }
    },
    {
      title: "AC Maintenance Price",
      warranty: "60 - Days Warranty",
      badge: "Preventive Care",
      price: "AED 325",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp"
      },
      description:
        "Relax and save money by keeping our expert technicians clean and maintain your AC, stopping unnecessary breakdowns.",
      popup: {
        title: "AC Maintenance scope of works",
        sections: [
          {
            heading: "DX Unit AC:",
            items: [
              "Clean the condenser coil",
              "Check, clean and flush the drain line",
              "Check the room and grill temperatures",
              "Check and clean the filters and air valves",
              "Check the vibration pads and vibration isolators",
              "Check the blowers and clean if proper access is available",
              "Check the conditions of contactors, relays, and capacitors",
              "Check temperature controlled thermostat and pressure sensors",
              "Check the electrical points in the outdoor unit and tighten, clean the electrical terminals",
              "Check the insulation on the pipeline, if damaged, recommend for replacement (Additional cost for replacement of insulation)"
            ]
          },
          {
            heading: "Chiller FCU AC:",
            items: [
              "Check the vibration isolators",
              "Check, clean and flush the drain line",
              "Check the room and grill temperatures",
              "Check and clean the filters and air valves",
              "Check temperature controlled thermostat",
              "Check the functionality of actuator valves",
              "Check the blowers and clean if proper access is available",
              "Check the insulation on the pipeline; if damaged, recommend for replacement (Additional cost for replacement of insulation)"
            ]
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 325 AC Maintenance charge applies based on the type, capacity of the unit, and location for each diagnosis."
          }
        ]
      }
    }
  ]
};

const areaOverviewData = {
  id: "the-ritz-carlton-difc-ac-services",
  title: "Best AC Repair in The Ritz-Carlton DIFC",
  paragraphs: [
    "Luxury apartments and executive suites at The Ritz-Carlton DIFC demand immaculate technical expertise and prompt service. FAJ Technical Services L.L.C provides white-glove AC repair, precision FCU maintenance, acoustic noise dampening, and emergency troubleshooting with minimal disruption to your executive schedule.",
    "Our seasoned technicians are trained in high-rise building BMS interlocks, chilled water valves, and premium digital thermostats. We inspect actuator valves, condensate drain pumps, and air filtration systems to ensure flawless cooling performance around the clock."
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in The Ritz-Carlton DIFC?",
    width: 600,
    height: 400
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const commonSignsData = {
  id: "ac-maintenance-signs",
  title: "Signs You Need An AC Service",
  intro:
    "If you notice any of these signs, you must contact an expert technician who can repair your AC professionally. We are here to assist your AC cooling system in achieving optimal efficiency.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Air is not blowing cold" },
    { title: "Strange noises from the unit" },
    { title: "Bad smells from the vents" },
    { title: "Water leaks around the AC" },
    { title: "Weak airflow from vents" }
  ]
};

const repairPriceData = {
  id: "ac-service-pricing-banner",
  title:
    "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description: "",
  actionLabel: "Check Here For Price",
  actionHref: "/dubai-ac-service-price-list/",
  openInNewTab: false
};

const serviceOverviewData = {
  "id": "ac-repair-service-overview",
  "title": "Why Is My AC Not Cooling?",
  "description": "A cooling problem is one of the most common AC problems in Dubai. In case you notice your AC is running but not cooling properly, there are several factors that may be responsible.",
  "listTitle": "Common causes include:",
  "checklist": [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty compressor",
    "Thermostat issues",
    "Electrical faults"
  ],
  "conclusion": "If you notice your AC is running but not cooling, do not wait until the issue gets worse. Contact FAJ Technical Services L.L.C for fast, reliable, and professional AC repair service in The Ritz-Carlton DIFC.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "Why Is My AC Not Cooling in The Ritz-Carlton DIFC?",
    "width": 600,
    "height": 400
  },
  "showCta": true
};

const servicesOfferedCardsData = {
  id: "ac-services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional AC repair services for homes and businesses in The Ritz-Carlton DIFC. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service."
    },
    {
      icon: "ac-maintenance",
      title: "AC Maintenance Service",
      description:
        "Keep your air conditioner running smoothly with regular AC maintenance in The Ritz-Carlton DIFC. Comprehensive inspection, cleaning and tune-up to prevent breakdowns, lower electricity bills and extend system life."
    },
    {
      icon: "air-duct",
      title: "AC Duct Cleaning",
      description:
        "Improve indoor air quality and cooling efficiency with professional AC duct cleaning in The Ritz-Carlton DIFC. We remove dust, mould and allergens from your ductwork for cleaner, fresher air."
    },
    {
      icon: "fan-check",
      title: "AC Coil Cleaning",
      description:
        "Deep cleaning of indoor evaporator and outdoor condenser coils in The Ritz-Carlton DIFC. Restores maximum cooling performance, improves heat transfer and reduces energy consumption."
    },
    {
      icon: "snowflake",
      title: "Gas Top-Up & Leak Repair",
      description:
        "Accurate refrigerant leak detection and gas top-up using genuine R410A and R22 refrigerants across The Ritz-Carlton DIFC. Restores peak cooling capacity safely and reliably."
    }
  ]
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in The Ritz-Carlton DIFC?",
  description:
    "Regular air conditioner (AC) maintenance service in The Ritz-Carlton DIFC is essential for optimal performance. FAJ Technical Services L.L.C offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best, providing a comfortable environment for your home or business.",
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in The Ritz-Carlton DIFC?",
    width: 600,
    height: 400
  }
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN THE RITZ-CARLTON DIFC",
  items: [
    {
      icon: "shield-check",
      title: "Lower Energy Bills",
      description:
        "Regular maintenance keeps your AC running at peak efficiency, using less electricity to cool your space. Clean coils and filters mean your system doesn't have to work overtime, keeping utility bills low."
    },
    {
      icon: "award",
      title: "Extended Equipment Life",
      description:
        "Routine inspections catch worn components before they cause major breakdowns. Replacing inexpensive parts during servicing prevents catastrophic failures and extends the overall operating lifespan of your air conditioning unit."
    },
    {
      icon: "clock",
      title: "Better Indoor Air Quality",
      description:
        "Clean filters and sanitised drainage pans eliminate dust, mould spores, and airborne allergens from circulating through your living or working spaces, safeguarding respiratory health for everyone inside."
    },
    {
      icon: "phone-support",
      title: "Consistent Cooling Performance",
      description:
        "Prevent airflow restrictions and uneven cooling across rooms. Scheduled servicing ensures balanced airflow, accurate thermostat calibration, and fast temperature recovery even during extreme summer days."
    },
    {
      icon: "snowflake",
      title: "Fewer Emergency Breakdowns",
      description:
        "Nearly 90% of sudden air conditioner failures can be traced back to neglected basic servicing. Planned maintenance guarantees uninterrupted cooling throughout Dubai's hottest months."
    }
  ]
};

const commonProblemsData = {
  id: "common-ac-problems",
  title: "Common AC Problems That May Require Maintenance",
  description:
    "Recognizing early symptoms allows quick corrective action before minor faults escalate into costly compressor replacements or complete system failures.",
  items: [
    {
      title: "AC Not Cooling Enough",
      description:
        "Dirty filters, refrigerant leaks, or a failing compressor can prevent your air conditioner from reaching the set temperature, leaving rooms stuffy and warm."
    },
    {
      title: "Leaking Water",
      description:
        "Clogged condensate drain lines and damaged drain pans cause water to back up and overflow inside your premises, risking drywall and flooring damage."
    },
    {
      title: "Warm Air",
      description:
        "Low refrigerant charge, dirty outdoor condenser coils, or a stuck reversing valve can cause warm or room-temperature air to blow from vents."
    },
    {
      title: "Strange Noises",
      description:
        "Squealing, grinding, or buzzing noises usually indicate motor bearing wear, loose fan blades, or electrical relay chatter that needs immediate servicing."
    },
    {
      title: "Foul Odors",
      description:
        "Musty or mouldy smells indicate bacterial buildup on damp evaporator coils or standing water in drain pans. Thorough coil sanitisation solves this quickly."
    },
    {
      title: "AC Constantly Tripping Circuit Breaker",
      description:
        "An overloaded compressor, grounded motor, or short circuit causes the safety breaker to trip repeatedly. Running the system in this state risks permanent damage."
    },
    {
      title: "Thermostat Not Responding",
      description:
        "Uncalibrated thermostats or broken control wiring cause temperature swings and prevent the system from cycling on or off correctly."
    },
    {
      title: "Weak Airflow",
      description:
        "Failing blower motors, blocked filters, or ductwork restrictions starve rooms of cool airflow, causing hot spots and uneven room cooling."
    }
  ]
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in The Ritz-Carlton DIFC",
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
    "We provide fast assistance for residential and commercial customers throughout The Ritz-Carlton DIFC and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout The Ritz-Carlton DIFC and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in The Ritz-Carlton DIFC",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in The Ritz-Carlton DIFC",
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
  id: "ac-service-benefits",
  title: "Benefits Of Regular AC Service and Maintenance in The Ritz-Carlton DIFC",
  city: "The Ritz-Carlton DIFC",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" }
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.",
      icon: "snowflake"
    },
    {
      id: "ac-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.",
      icon: "ac-air-filter"
    },
    {
      id: "ac-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.",
      icon: "diagnostics"
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.",
      icon: "ac-thermostat"
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "We ensure optimal airflow from your air conditioning system in each room as needed.",
      icon: "wind"
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our team provides essential feedback on your air conditioning health and any necessary repair.",
      icon: "customer-feedback"
    }
  ]
};

const whyChooseUsData = {
  id: "why-choose-faj",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "",
  items: [
    {
      icon: "shield-check",
      badge: "Fast, Reliable Service",
      title: "Reliable, Priority, and Quick",
      description: {
        parts: [
          "You can count on ",
          {
            text: "efficient service",
            strong: true
          },
          ", tailored to your schedule. We provide timely assistance to keep your AC running smoothly."
        ]
      }
    },
    {
      icon: "award",
      badge: "Professional & Qualified",
      title: "Certified and Skilled Specialists",
      description: {
        parts: [
          "Our technicians are highly trained, ensuring ",
          {
            text: "top-notch service",
            strong: true
          },
          " for all AC models. Your comfort is in good hands with our qualified team."
        ]
      }
    },
    {
      icon: "clock",
      badge: "Trusted Quality Support",
      title: "Comprehensive Service Solutions",
      description: {
        parts: [
          "From minor tune-ups to major overhauls, we offer a full range of AC services. Expect ",
          {
            text: "lasting results",
            strong: true
          },
          " for continuous, optimal performance."
        ]
      }
    },
    {
      icon: "phone-support",
      badge: "Transparent Honest Pricing",
      title: "Transparent, Upfront Estimates",
      description: {
        parts: [
          "No hidden surprises! We provide clear, honest pricing before any work begins, so you can make informed decisions with ",
          {
            text: "complete confidence",
            strong: true
          },
          "."
        ]
      }
    },
    {
      icon: "snowflake",
      badge: "Quality Guaranteed",
      title: "Genuine Replacement Parts",
      description: {
        parts: [
          "We use only original, manufacturer-approved components to ensure ",
          {
            text: "maximum durability",
            strong: true
          },
          " and maintain manufacturer warranty standards."
        ]
      }
    },
    {
      icon: "ac-air-filter",
      badge: "Customer First",
      title: "Satisfaction Guaranteed",
      description: {
        parts: [
          "Every service is backed by our dedicated warranty and responsive customer support, ensuring ",
          {
            text: "complete peace of mind",
            strong: true
          },
          "."
        ]
      }
    }
  ]
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in The Ritz-Carlton DIFC.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service in The Ritz-Carlton DIFC",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp"
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after service in The Ritz-Carlton DIFC",
  afterImage: {
    id: "after_img_1",
    src: "/img/after_img_1.webp"
  }
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in All Types of AC Systems",
  columns: [
    {
      title: "Air Conditioning Systems Serviced Across The Ritz-Carlton DIFC:",
      items: [
        {
          title: "Window AC",
          text:
            "We provide fast repair and servicing for Window AC units, fixing common cooling and airflow issues."
        },
        {
          title: "Split AC",
          text:
            "Our team repairs and maintains Split AC systems, improving cooling performance and energy efficiency."
        },
        {
          title: "Central AC",
          text:
            "We service Central AC systems for homes and offices, keeping large spaces evenly cooled."
        },
        {
          title: "Inverter AC",
          text:
            "We diagnose and repair Inverter AC units, solving PCB faults, sensor issues, and cooling problems."
        },
        {
          title: "Ducted Split AC",
          text:
            "We service ducted split systems, checking ductwork and airflow to maintain consistent cooling across rooms."
        }
      ]
    },
    {
      title: "AC Components & Spare Parts Repaired:",
      items: [
        {
          title: "Compressor Replacement",
          text:
            "We replace faulty compressors using genuine parts to restore full cooling power to your system."
        },
        {
          title: "Fan Motor Repair",
          text:
            "We repair and replace indoor blower and outdoor fan motors to fix strange noises and restore proper airflow."
        },
        {
          title: "Capacitor & Contactor",
          text:
            "We test and replace failing capacitors and contactors to ensure reliable system startup and prevent electrical faults."
        },
        {
          title: "Thermostat Replacement",
          text:
            "We calibrate and install digital and smart thermostats for accurate temperature control and better efficiency."
        },
        {
          title: "Drain Pan & Pipe Service",
          text:
            "We clean and repair blocked condensate drain lines and pans to prevent water leaks and moisture damage."
        }
      ]
    }
  ]
};

const defaultBrandDescription =
  "Professional repair, cleaning and planned maintenance for supported air-conditioning systems.";

const linkedBrands = [
  [
    "Daikin Air Conditioning Repair Services",
    "daikin",
    'Daikin air conditioning systems is a leading Japanese manufacturer. Founded in 1924, the company has built a strong international presence by focusing on quality, innovation, and effective communication.',
  ],
  [
    "Gree AC Repair and Service",
    "gree",
    "Gree Air Conditioning, founded in 1991 in Zhuhai, is a major global player in air conditioners. Initially focused on AC, it has expanded into home appliances & became China's largest AC manufacturer by 2000.",
  ],
  [
    "O General AC Repair and Maintenance",
    "o-general",
    "O General Air Conditioning, formerly part of Fujitsu General Limited, was founded in January, 1936, by Keijiro Yao as Yaou Shoten Co Ltd. The company has since manufactured appliances & air conditioners.",
  ],
  [
    "Mitsubishi AC Service and Repair",
    "mitsubishi",
    "Founded in 1954, Mitsubishi Air Conditioning has been producing residential & commercial HVAC (Mr. Slim & City Multi) AC systems for nearly 75 years & is renowned for its reliability & energy efficiency.",
  ],
  [
    "Samsung AC Maintenance Service",
    "samsung",
    "Samsung Air Conditioning is a leading brand recognised for innovation since 1969, specialising in air conditioner technology for homes & commercial HVAC systems (including VRF, multi-split & ducted systems).",
  ],
  [
    "York AC Servicing and Repair",
    "york",
    "YORK Air Conditioning was established in 1874 as the York Manufacturing Company in Pennsylvania. It began with ice-making machines & later expanded into HVAC, VRF, central AC systems & refrigeration.",
  ],
  [
    "LG AC Maintenance and Service",
    "lg",
    "LG Air Conditioning, a division of LG Electronics, has established a legacy of innovation since its founding in 1958. Once Korea's first consumer electronics company, it has evolved into a Smart Life Solution Company.",
  ],
  [
    "Trane HVAC Repair and Maintenance",
    "trane",
    "Trane Air Conditioning launched its first AC unit in 1931 & acquired General Electric's Central AC Division in 1982. This acquisition added key features, such as compressors & condensor coil, which are still in products today.",
  ],
  [
    "Carrier AC Repair and Services in Dubai",
    "carrier",
    "Carrier Air Conditioning has been leading the way in cooling & heating systems, central, split, package unit and VRF, Carrier Air Conditioning & Refrigeration since 1902, showcasing a long history of innovation & reliability.",
  ],
  [
    "Rheem AC Repair & Service Near Me",
    "rheem",
    "Rheem Air Conditioner, founded in 1925 in California, started with steel drums & later shifted to water heaters. In the 1940s & 1950s, the company expanded into AC systems. Now Rheem is leading global HVAC provider known for its innovative solutions.",
  ],
  ["SKM AC Maintenance Dubai", 
    "skm",
    "S.K.M Air Conditioning LLC (SKM) was established in 1974 in Sharjah, United Arab Emirates, to manufacture heating, ventilation, and air conditioning (HVAC) equipment tailored for the harsh Gulf climates.",
  ],
  ["Lennox Air Conditioning Maintenance Service", 
    "lennox",
    "Lennox Air Conditioning was established in 1895 when Dave Lennox built the first riveted-steel coal-fired furnace in Marshalltown, Iowa. The company later entered the air conditioning market in the early 1950s.",
  ],
  ["Aftron AC Maintenance Service", "aftron"],
  ["Bryant AC Repair Service Dubai", "bryant"],
  ["Blue Star AC Repair", "blue-star"],
  ["Supra AC Maintenance", "supra"],
  ["Toshiba AC Fix", "toshiba"],
  ["Super General AC Repair and Services in Dubai", "super-general"],
  ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Repair", "whirlpool"],
  ["Daewoo AC Cleaning", "daewoo"],
].map(([name, slug, description]) => ({
  name,
  href: `/services/air-conditioning-repair/brands/${slug}/`,
  ...(description ? { description } : {}),
}));

const brandsData = {
  title: "We specialise in air conditioning services for the following brands",
  description:
    "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  defaultItemDescription: defaultBrandDescription,
  searchLabel: "Search AC brands",
  searchPlaceholder: "Search air-conditioning brand",
  emptyMessage:
    "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Request AC Service",
  items: linkedBrands,
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const galleryData = {
  id: "ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across The Ritz-Carlton DIFC.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Ac Repair in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Ac Maintenance in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Ac Cleaning in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Ac Fixing in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Ac Gas Filling in The Ritz-Carlton DIFC",
      width: 400,
      height: 300
    }
  ]
};

const energyTipsData = {
  id: "ac-energy-saving-tips",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20Air%20Conditioner.pdf",
  openInNewTab: true
};

const newsData = {
  id: "ac-news-the-ritz-carlton-difc",
  title: "NEWS & UPDATES",
  description:
    "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      description:
        "Learn how to troubleshoot frequent cooling faults, water leaks, and airflow issues before calling a technician.",
      actionLabel: "Read More",
      actionHref: "/blog/10-common-ac-problems-and-how-to-fix-them/"
    },
    {
      icon: "shield-check",
      badge: "15 Jun",
      image: "blogs/ac-tips-and-tricks",
      title: "Essential Summer AC Maintenance Tips to Prevent Costly Breakdowns",
      description:
        "Simple upkeep routines every homeowner should follow to keep cooling systems running smoothly through Dubai heat.",
      actionLabel: "Read More",
      actionHref: "/blog/essential-ac-maintenance-tips-for-dubai-summer/"
    },
    {
      icon: "clock",
      badge: "02 Jul",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose the Best Energy-Efficient Air Conditioner for Your Home",
      description:
        "Compare split, inverter, and central cooling units to find the ideal match for your property and electricity budget.",
      actionLabel: "Read More",
      actionHref: "/blog/how-to-choose-the-best-air-conditioner-for-home/"
    }
  ]
};

const contractsData = {
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in The Ritz-Carlton DIFC.",
  featuredIndex: 0,
  actionLabel: "Get a quick quote",
  plans: [
    {
      title: "Maintenance Contract (Yearly)",
      tagline: "Comprehensive year-round support for dependable cooling.",
      badge: "Best Value",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "2 and 3 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      title: "Maintenance Contract (6 Months)",
      tagline: "Balanced seasonal care before peak cooling demand.",
      badge: "Popular",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 and 2 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    },
    {
      title: "Maintenance Contract (3 Months)",
      tagline: "Flexible short-term protection for immediate AC needs.",
      badge: "Flexible",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    }
  ],
  footnote:
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in The Ritz-Carlton DIFC."
};

const testimonialsData = {
  id: "testimonials",
  title: "Customer Reviews",
  description: "Real feedback from residential property owners, tenants, and commercial facility managers in The Ritz-Carlton DIFC.",
  items: [
    {
      author: "Tariq Al-Hashemi",
      role: "Resident, The Ritz-Carlton DIFC",
      content: "Our central AC stopped cooling on a Friday afternoon. FAJ arrived within 45 minutes, replaced a faulty starting capacitor, and our home was cool again before evening. Highly recommended!",
      rating: 5
    },
    {
      author: "Sarah Jenkins",
      role: "Property Owner, The Ritz-Carlton DIFC",
      content: "Signed up for their Annual Maintenance Contract. They are always punctual, polite, and thorough. Our DEWA bills dropped noticeably after their deep coil cleaning service.",
      rating: 5
    },
    {
      author: "Mohammed Bin Rashid",
      role: "Villa Owner, The Ritz-Carlton DIFC",
      content: "Excellent service from start to finish. The technician identified a minor refrigerant leak that another company missed. Professional, transparent, and fair pricing.",
      rating: 5
    },
    {
      author: "Elena Rostova",
      role: "Tenant, The Ritz-Carlton DIFC",
      content: "Water was leaking from our ceiling AC unit. FAJ came quickly, unclogged the drain line, and sanitized the drip pan without making any mess. Very tidy and polite team.",
      rating: 5
    },
    {
      author: "Kareem Mansoor",
      role: "Facility Manager, The Ritz-Carlton DIFC",
      content: "We manage multiple properties in The Ritz-Carlton DIFC. FAJ handles all our HVAC servicing and emergency repairs. Their digital reports and reliable technicians make property management seamless.",
      rating: 5
    },
    {
      author: "David O'Connor",
      role: "Homeowner, The Ritz-Carlton DIFC",
      content: "Very impressed with FAJ's professionalism. Upfront pricing with no surprise charges. The AC runs much quieter and cools the house much faster now.",
      rating: 5
    }
  ]
};

const faqsData = {
  id: "faq-section",
  title: "FAQ's",
  description: "Find answers to common questions about air conditioning repair, cleaning, and maintenance services in The Ritz-Carlton DIFC.",
  items: [
    {
        "question": "How much is AC service in Dubai?",
        "answer": "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service. Prices vary based on the unit&apos;s size and condition, as well as the service provider."
    },
    {
        "question": "Why is my AC not cooling in Dubai?",
        "answer": "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor. A professional technician can diagnose and resolve the issue quickly."
    },
    {
        "question": "Why is AC repair so expensive?",
        "answer": "AC repairs can be expensive due to the high cost of parts (like compressors or coils) and specialized labor. The complexity of the repairs and Dubai’s climate, which demands frequent AC use, also adds to the cost."
    },
    {
        "question": "Why is my AC giving cool air but not cooling?",
        "answer": "If your AC is blowing cool air but not cooling the room, it could be due to issues like low refrigerant or clogged filters. A technician can fix this with a proper inspection and maintenance."
    },
    {
        "question": "How often should AC be cleaned in Dubai?",
        "answer": "AC units in Dubai should be cleaned every 3-6 months due to high dust levels in the environment. More frequent cleaning may be necessary for homes in dusty areas or with heavy AC use."
    },
    {
        "question": "Which company is best for central AC?",
        "answer": "FAJ Technical Services L.L.C. is one of the best companies for central AC services in Dubai. We offer reliable, professional services to ensure your system runs efficiently."
    },
    {
        "question": "What maintenance is needed for AC?",
        "answer": "AC maintenance includes tasks like cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines. Regular upkeep ensures your system runs efficiently and prolongs its lifespan."
    },
    {
        "question": "How can I maintain my AC",
        "answer": "Maintain your AC by regularly cleaning or replacing filters, checking for airflow issues, and scheduling professional servicing every 6 months. This helps to improve performance and prevent costly repairs."
    },
    {
        "question": "How do I fix my air conditioner that is not cooling?",
        "answer": "To fix an AC not cooling, check the thermostat, clean or replace the air filter, and ensure the outdoor unit is clear. If issues persist, inspect refrigerant levels, ice buildup, or compressor issues—contact a professional if needed."
    },
    {
        "question": "How often should an air conditioner be serviced?",
        "answer": "An air conditioner should be serviced at least once a year to maintain optimal performance. In hot climates like Dubai, servicing every 6 months is recommended to ensure efficiency and extend the unit&apos;s lifespan."
    },
    {
        "question": "How often should AC ducts be cleaned?",
        "answer": "AC ducts should be cleaned every 2-3 years, or more frequently if you notice dust accumulation, poor airflow, or a musty smell. Regular cleaning ensures better air quality and system efficiency."
    }
]
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Book your AC service appointment with our expert team in The Ritz-Carlton DIFC. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred service date and system requirements. Our technical team confirms all callouts promptly.",
  submitLabel: "Confirm Service Request"
};

const pageData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  overview: overviewData,
  pricing: pricingData,
  areaOverview: areaOverviewData,
  commonSigns: commonSignsData,
  repairPrice: repairPriceData,
  serviceOverview: serviceOverviewData,
  servicesOfferedCards: servicesOfferedCardsData,
  maintenanceImportance: maintenanceImportanceData,
  maintenanceImportanceCards: maintenanceImportanceCardsData,
  commonProblems: commonProblemsData,
  video: videoData,
  benefits: benefitsData,
  whyChooseUs: whyChooseUsData,
  beforeAfter: beforeAfterData,
  sparePartsRepair: sparePartsRepairData,
  brands: brandsData,
  gallery: galleryData,
  energyTips: energyTipsData,
  news: newsData,
  contracts: contractsData,
  testimonials: testimonialsData,
  faqs: faqsData,
  booking: bookingData
};

export default pageData;

