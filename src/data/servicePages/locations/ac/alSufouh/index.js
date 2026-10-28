/**
 * Al Sufouh AC Service Page Data
 * Canonical modular schema matching Bur Dubai
 */

const seoData = {
  title: "AC Service & AC Repair Near Me in Al Sufouh | Expert Technicians",
  description: "Best AC cleaning service in Al Sufouh, Dubai. We are experts in central & split air conditioning repairs & maintenance. Also AC compressor & motor fix",
  keywords: "AC Repair in Al Sufouh, Air Conditioning Service in Al Sufouh, Air Con Maintenance & AC Installation in Al Sufouh",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-sufouh/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "AC Service & AC Repair Near Me in Al Sufouh | Expert Technicians",
    description: "Best AC cleaning service in Al Sufouh, Dubai. We are experts in central & split air conditioning repairs & maintenance. Also AC compressor & motor fix",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-sufouh/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "AC Service & AC Repair Near Me in Al Sufouh | Expert Technicians",
    description: "Best AC cleaning service in Al Sufouh, Dubai. We are experts in central & split air conditioning repairs & maintenance. Also AC compressor & motor fix",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  whatsappDisplay: "+971 50 746 4712",
  email: "info@fajservices.ae"
};

const heroData = {
  title: "Top-Rated Air Conditioner Repair and Maintenance in Al Sufouh | AC Service Near Me",
  paragraphs: [
    "Al Sufouh is an area in Dubai that has apartments, villas, hotels, offices, universities, shops and commercial buildings. When air conditioners are running for hours, even a small cooling problem can make things uncomfortable. If there is no airflow, there are water leaks or the AC stops cooling it should be checked before the issue becomes worse. Keeping cooling units well maintained helps them work properly and last a long time.",
  ],
  paragraph:
    "Al Sufouh is an area in Dubai that has apartments, villas, hotels, offices, universities, shops and commercial buildings. When air conditioners are running for hours, even a small cooling problem can make things uncomfortable. If there is no airflow, there are water leaks or the AC stops cooling it should be checked before the issue becomes worse. Keeping cooling units well maintained helps them work properly and last a long time.",
  contentWidth: "50%",
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  showCall: false,
  showPhone: false,
  highlights: [
    {
      icon: "award",
      title: "Established Since 2010",
      description: "Reliability, Diversity, Integrity, and Quality.",
    },
    {
      icon: "shield-check",
      title: "Workmanship Warranty",
      description: "Repair and service warranty support.",
    },
    {
      icon: "phone-support",
      title: "7-Day Service Response",
      description: "Fast assistance across Al Sufouh.",
    },
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Top-Rated Air Conditioner Repair and Maintenance in Al Sufouh",
    width: 733,
    height: 550,
  },
};

const overviewData = {
  id: "overview",
  paragraphs: [
    {
      parts: [
        {
          text: "FAJ Technical Services L.L.C",
          href: "/",
        },
        " has been providing ",
        {
          text: "AC Repair service",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        ", ",
        {
          text: "AC Maintenance",
          href: "/services/air-conditioning-repair/ac-service/",
        },
        " Dubai, AC cleaning and Air Conditioning Services since 2010. Our AC technicians handle cooling problems, leaks, electrical faults, unusual sounds and other issues for residential and commercial properties in Al Sufouh.",
      ],
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
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
  id: "al-sufouh-ac-services",
  title: "Best AC Repair in Al Sufouh",
  paragraphs: [
    "Finding a reliable AC repair company matters when your cooling system stops working properly. FAJ Technical Services L.L.C has provided dependable AC repair and maintenance in Al Sufouh since 2010. Whether it is an apartment in Al Sufouh 1, a villa in Al Sufouh 2, a university campus, a hotel or an office building near Dubai Knowledge Park, our skilled technicians handle all types of air conditioning problems with care.",
    "Our technicians inspect the cooling unit before starting major work. This helps identify the actual fault instead of replacing parts that are still working. We test the compressor, check electrical connections, examine refrigerant levels and clear blocked condensate lines to ensure reliable cooling.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in Al Sufouh?",
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
  "conclusion": "If you notice your AC is running but not cooling, do not wait until the issue gets worse. Contact FAJ Technical Services L.L.C for fast, reliable, and professional AC repair service in Al Sufouh.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "Why Is My AC Not Cooling in Al Sufouh?",
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
        "Professional AC repair services for homes and businesses in Al Sufouh. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service."
    },
    {
      icon: "ac-maintenance",
      title: "AC Maintenance Service",
      description:
        "Keep your air conditioner running smoothly with regular AC maintenance in Al Sufouh. Comprehensive inspection, cleaning and tune-up to prevent breakdowns, lower electricity bills and extend system life."
    },
    {
      icon: "air-duct",
      title: "AC Duct Cleaning",
      description:
        "Improve indoor air quality and cooling efficiency with professional AC duct cleaning in Al Sufouh. We remove dust, mould and allergens from your ductwork for cleaner, fresher air."
    },
    {
      icon: "fan-check",
      title: "AC Coil Cleaning",
      description:
        "Deep cleaning of indoor evaporator and outdoor condenser coils in Al Sufouh. Restores maximum cooling performance, improves heat transfer and reduces energy consumption."
    },
    {
      icon: "snowflake",
      title: "Gas Top-Up & Leak Repair",
      description:
        "Accurate refrigerant leak detection and gas top-up using genuine R410A and R22 refrigerants across Al Sufouh. Restores peak cooling capacity safely and reliably."
    }
  ]
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in Al Sufouh?",
  description:
    "Regular air conditioner (AC) maintenance service in Al Sufouh is essential for optimal performance. FAJ Technical Services L.L.C offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best, providing a comfortable environment for your home or business.",
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Al Sufouh?",
    width: 600,
    height: 400
  }
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN AL SUFOUH",
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
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description: {
        parts: [
          "If you notice ",
          {
            text: "reduced airflow",
            strong: true,
            href: "https://www.youtube.com/watch?v=qnByeIsc3lY",
            external: true,
          },
          " coming from your vents, it could indicate a problem with your A/C system, such as a clogged filter or malfunctioning fan.",
        ],
      },
    },
    {
      title: "Warm Air",
      description:
        "If your aircon blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues.",
    },
    {
      title: "Strange Noises",
      description:
        "Unusual sounds like grinding, squealing, or banging coming from your air conditioner unit can indicate mechanical problems that require attention.",
    },
    {
      title: "Foul Odors",
      description:
        "Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.",
    },
    {
      title: "Frequent Cycling",
      description:
        "It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.",
    },
    {
      title: "High Humidity Levels",
      description:
        "An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.",
    },
    {
      title: "Leaking Water",
      description:
        "Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues.",
    },
    {
      title: "Increased Energy Bills",
      description:
        "High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.",
    },
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Al Sufouh",
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
    "We provide fast assistance for residential and commercial customers throughout Al Sufouh and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Al Sufouh and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Al Sufouh",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Al Sufouh",
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
  title: "Benefits Of Regular AC Service and Maintenance in Al Sufouh",
  city: "Al Sufouh",
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
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Al Sufouh.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service in Al Sufouh",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp"
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after service in Al Sufouh",
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
      title: "Air Conditioning Systems Serviced Across Al Sufouh:",
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
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across Al Sufouh.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in Al Sufouh",
      width: 400,
      height: 300
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Ac Repair in Al Sufouh",
      width: 400,
      height: 300
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Ac Maintenance in Al Sufouh",
      width: 400,
      height: 300
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Ac Cleaning in Al Sufouh",
      width: 400,
      height: 300
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Ac Fixing in Al Sufouh",
      width: 400,
      height: 300
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Ac Gas Filling in Al Sufouh",
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
  id: "ac-news-al-sufouh",
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
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Al Sufouh.",
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
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Al Sufouh."
};

const testimonialsData = {
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description:
    "Customer feedback on FAJ air-conditioning repair and maintenance services in Al Sufouh.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Sara Malik",
      subtitle: "Al Sufouh Resident",
      description:
        "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in Al Sufouh.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Mansoori",
      subtitle: "Al Sufouh Resident",
      description:
        "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in Al Sufouh, highly recommended!",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Arjun Kumar",
      subtitle: "Resident",
      description:
        "I booked FAJ for HVAC services in Al Sufouh, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Shazia Sheikh",
      subtitle: "Homeowner",
      description:
        "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems in Al Sufouh.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Ravi Mehta",
      subtitle: "Resident",
      description:
        "I used FAJ for AC cleaning service, and it really improved my air quality. The team worked efficiently, cleaned every part, and made my AC run like new again.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Waseem Aqdas",
      subtitle: "Homeowner",
      description:
        "Outstanding service from FAJ Technical! My AC wasn't cooling properly, but FAJ Technical came to the rescue. Quick response, friendly technician, and now my AC works perfectly. I highly recommend them!",
    },
  ],
};

const faqsData = {
  id: "faq-section",
  title: "FAQ's",
  description: "Find answers to common questions about air conditioning repair, cleaning, and maintenance services in Al Sufouh.",
  items: [
  {
    "question": "How often should I service my AC in Al Sufouh?",
    "answer": "For many residential systems, servicing every 3 to 6 months is a practical schedule. ACs used heavily may need more frequent attention."
  },
  {
    "question": "Why is my AC cooling slowly?",
    "answer": "Slow cooling can happen because of dirty filters, blocked coils, weak airflow, low refrigerant or thermostat problems. An inspection can identify the actual cause."
  },
  {
    "question": "Do you provide AC repair for apartments and villas in Al Sufouh?",
    "answer": "Yes, we provide Home AC Repair for apartments, villas and other residential properties, along with Commercial AC Repair for offices, shops and businesses."
  },
  {
    "question": "Is Same Day AC Repair available in Al Sufouh?",
    "answer": "Same-day service may be available depending on technician schedules, location and the type of AC fault. Contacting the service team early can help with availability."
  },
  {
    "question": "What causes an AC to leak water?",
    "answer": "<strong>Common reasons include:</strong><ul><li>Blocked drain line</li><li>Frozen evaporator coil</li><li>Dirty air filter</li></ul> The unit should be checked if the leakage continues."
  },
  {
    "question": "What does AC maintenance include?",
    "answer": "A typical maintenance visit may include filter cleaning, coil inspection, drain cleaning, thermostat testing and cooling performance checks."
  },
  {
    "question": "Do you provide AC Gas Refill in Al Sufouh?",
    "answer": "Yes, when low refrigerant is confirmed during inspection. The technician should first check why the refrigerant level has dropped before carrying out a refill."
  },
  {
    "question": "Why does my AC smell bad when it starts?",
    "answer": "A bad smell can come from dust, moisture, mold or bacteria inside the unit. AC cleaning can remove buildup from filters, coils and drainage areas."
  },
  {
    "question": "Why is my AC making a buzzing sound?",
    "answer": "Buzzing can be caused by loose electrical connections, fan problems, vibration or worn internal parts. The source should be inspected before the problem becomes worse."
  },
  {
    "question": "Which AC brands do you repair?",
    "answer": "Our technicians work with major brands such as Daikin, LG, Samsung, Carrier, York, Mitsubishi, O General, Panasonic, Gree and other common AC brands."
  },
  {
    "question": "Can AC cleaning help reduce electricity use?",
    "answer": "Yes, dirty filters and coils can restrict airflow and make the system work harder. Regular cleaning helps the cooling unit operate more efficiently."
  },
  {
    "question": "How long can an air conditioner last?",
    "answer": "An AC's lifespan depends on how well it is maintained. If you keep it maintained by regular servicing, it helps to reduce unexpected breakdowns and it works longer."
  },
  {
    "question": "Is an Annual Maintenance Contract worth having?",
    "answer": "An AMC can be useful for systems that run frequently. Scheduled inspections help identify developing faults early and keep routine servicing on track."
  },
  {
    "question": "How much does AC repair cost in Al Sufouh?",
    "answer": "The repair price depends on the AC type, fault, required parts and amount of work. An inspection can identify the problem before the final repair cost is confirmed."
  },
  {
    "question": "How can I book AC service in Al Sufouh?",
    "answer": "Share your location, AC problem and preferred appointment time with FAJ Technical Services L.L.C. The team can then arrange a suitable service visit."
  }
]
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Book your AC service appointment with our expert team in Al Sufouh. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
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

