// Location Data: Cedre Villas, Silicon Oasis, Dubai
const seoData = {
  title: "Best Central AC Repair Service in Cedre Villas Silicon Oasis Dubai",
  description: "Is your AC not cooling? Call 043300002 for fast AC repair and services in Cedre Villas, Silicon Oasis, Dubai, for centralised air conditioning repair",
  keywords: "ac service in cedre villas silicon oasis dubai, AC repair in cedre villas silicon oasis dubai, AC maintenance in cedre villas silicon oasis dubai, AC gas filling in cedre villas silicon oasis dubai, AC installation in cedre villas silicon oasis dubai, AC cleaning in cedre villas silicon oasis dubai",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/cedre-villas-silicon-oasis-dubai/",
  schema: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "FAJ Technical Services L.L.C",
        url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/cedre-villas-silicon-oasis-dubai/",
        telephone: "+97143300002",
        priceRange: "AED 215 - AED 765",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE"
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Cedre Villas, Silicon Oasis, Dubai"
        }
      },
      {
        "@type": "Service",
        serviceType: "Air Conditioning Repair & Maintenance",
        provider: {
          "@type": "LocalBusiness",
          name: "FAJ Technical Services L.L.C"
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Cedre Villas, Silicon Oasis, Dubai"
        }
      }
    ]
  }
};

const contactData = {
  phone: "97143300002",
  displayPhone: "04 330 0002",
  whatsapp: "971507464712",
  displayWhatsapp: "+971 50 746 4712",
  email: "info@fajservices.ae"
};

const heroData = {
  title: "Reliable and Fast AC Repair and Maintenance Services in Cedre Villas Silicon Oasis Dubai",
  paragraph: "Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?",
  paragraphs: [
    "Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?"
  ],
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
      description: "Fast assistance across Cedre Villas Silicon Oasis Dubai."
    }
  ],
  primaryAction: "Get a Quick Quote",
  secondaryAction: "Call Now",
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Reliable and Fast AC Repair and Maintenance Services in Cedre Villas Silicon Oasis Dubai",
    width: 733,
    height: 550,
  }
};

const overviewData = {
  id: "overview",
  paragraphs: [
    {
      parts: [
        {
          text: "FAJ Technical Services L.L.C",
          href: "/"
        },
        " has been in operation since 2010. Our dedicated facilities team has extensive experience in ",
        {
          text: "AC service",
          href: "/services/air-conditioning-repair/ac-service/"
        },
        ", AC maintenance, AC repair near me Cedre Villas Silicon Oasis Dubai, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah."
      ]
    }
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
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
        src: "/img/ac-service-page/ac-inspection.webp",
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
              "Addressing sound problems from the AC",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "Basic AC Cleaning Price",
      warranty: "60 - Days Warranty",
      badge: "Popular",
      price: "AED 280",
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp",
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
              "Addressing sound issues from the AC",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 280 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "AC Maintenance Price",
      warranty: "60 - Days Warranty",
      badge: "Preventive Care",
      price: "AED 325",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp",
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
              "Check the insulation on the pipeline, if damaged, recommend for replacement (Additional cost for replacement of insulation)",
            ],
          },
          {
            heading: "Chiller FCU AC:",
            items: [
              "Check the vibration isolators",
              "Check, clean and flush the drain line",
              "Check the room and grill temperatures",
              "Check and clean the filters and air valves",
              "Check temperature controlled thermostat",
              "Check the functioning of actuator valves / 2-way valve / 3-way valve",
              "Check the blowers and clean if proper access is available into ceiling",
              "Check and service the strainers (Additional cost for replacement of strainer)",
              "Check and service the NRVs (non-return valves) (Additional cost for replacement of NRVs)",
            ],
          },
          {
            label: "Excluded:",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions:",
            text:
              "*Starting from AED 325 AC maintenance fee applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
  ],
};

const areaOverviewData = {
  id: "cedreVillasSiliconOasisDubai-ac-services",
  title: "Best AC Repair in Cedre Villas Silicon Oasis Dubai",
  paragraphs: [
    "When it comes to AC repair near me in Cedre Villas Silicon Oasis Dubai, it’s essential to hire a professional and trustworthy AC technician near me for your home AC or office AC.",
    "We specialise in air conditioner (AC) repair, service, and maintenance near me in Cedre Villas Silicon Oasis Dubai. The FAJ team is dedicated to ensuring a comfortable temperature all year round."
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Best AC Repair in Cedre Villas Silicon Oasis Dubai",
    width: 600,
    height: 400
  }
};

const commonSignsData = {
  id: "signs-ac-needs-service",
  title: "Signs You Need An AC Service",
  intro: "Watch for these common indicators that your cooling system needs expert attention.",
  items: [
    {
      icon: "dollar-sign",
      title: "Higher electricity bills",
      description: "Unexplained spikes in DEWA power bills often indicate an inefficient, struggling AC unit."
    },
    {
      icon: "snowflake",
      title: "Air is not blowing cold",
      description: "Warm or room-temperature air points to low refrigerant, coil faults, or compressor failure."
    },
    {
      icon: "droplet",
      title: "Drips from your air conditioner",
      description: "Water leaks and condensation overflow damage ceilings and walls if left unserviced."
    },
    {
      icon: "alert-triangle",
      title: "Loss of AC performance",
      description: "System runs continuously without reaching your set thermostat temperature in Cedre Villas Silicon Oasis Dubai."
    },
    {
      icon: "volume-2",
      title: "Poor AC airflow, making noises",
      description: "Squealing, buzzing, or rattling noises signal failing blower motors or loose internal parts."
    },
    {
      icon: "thermometer",
      title: "Frequent unit short-cycling",
      description: "System turns on and off rapidly without completing a proper cooling cycle."
    }
  ]
};

const repairPriceData = {
  id: "ac-repair-price-list",
  title: "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description:
    "Explore transparent repair, maintenance, and call-out rates tailored for residential and commercial systems.",
  actionLabel: "View Complete AC Service Pricing",
  actionHref: "/dubai-ac-service-price-list/",
};

const serviceOverviewData = {
  "id": "why-ac-not-cooling",
  "title": "Why Is My AC Not Cooling Properly in Cedre Villas Silicon Oasis Dubai?",
  "paragraph": "Experiencing cooling issues with your air conditioner in Cedre Villas Silicon Oasis Dubai? High ambient temperatures in Dubai place heavy strain on cooling systems, making prompt diagnostics essential.",
  "listTitle": "Common culprits include:",
  "checklist": [
    "Clogged filters",
    "Dirty condenser coils",
    "Refrigerant leaks",
    "Failed capacitors",
    "Faulty thermostats"
  ],
  "conclusion": "Our certified technicians rapidly isolate the root cause to restore optimal airflow and temperature control.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "FAJ technician servicing air conditioning in Cedre Villas Silicon Oasis Dubai",
    "width": 853,
    "height": 853
  },
  "showCta": true
};

const servicesOfferedCardsData = {
  id: "professional-ac-services",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  subtitle: "Our certified technicians deliver complete heating, ventilation, and air conditioning solutions across Cedre Villas Silicon Oasis Dubai.",
  items: [
    {
      icon: "ac-installation",
      title: "Installation:",
      description: "Expert installation of various types and brands of central AC cooling systems, ensuring optimal performance and efficiency."
    },
    {
      icon: "diagnostics",
      title: "Diagnostics:",
      description: "Thorough fault finding to diagnose issues effectively. We provide eligibility assessments and detailed quotations to address any concerns with your system."
    },
    {
      icon: "ac-repair",
      title: "Repair Service:",
      description: "Fast, reliable repairs for compressors, capacitors, fan motors, control boards, and refrigerant leaks."
    },
    {
      icon: "amc-contract",
      title: "Annual Maintenance Contract:",
      description: "Preventive AMC packages with priority scheduling, scheduled tune-ups, and emergency support."
    },
    {
      icon: "ac-duct-clean",
      title: "Duct Cleaning & Sanitisation:",
      description: "Deep duct cleaning removing dust, mold, and allergens for cleaner indoor air in Cedre Villas Silicon Oasis Dubai properties."
    }
  ]
};

const maintenanceImportanceData = {
  id: "why-regular-ac-maintenance-is-important",
  title: "Why is AC Maintenance Service Important in Cedre Villas Silicon Oasis Dubai?",
  paragraphs: [
    "Regular air conditioner (AC) maintenance service in Cedre Villas Silicon Oasis Dubai is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best.",
    "Regular preventive maintenance helps avoid sudden breakdowns, extends the life of your equipment, and ensures the highest indoor air quality for your property."
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Air Conditioning Service in Cedre Villas Silicon Oasis Dubai",
    width: 600,
    height: 400,
  }
};

const maintenanceImportanceCardsData = {
  id: "maintenance-importance-points",
  title: "Key Benefits of Regular AC Maintenance",
  subtitle: "Protect your cooling investment and enjoy lower operating expenses throughout the year.",
  items: [
    {
      icon: "thermometer-sun",
      title: "Extreme Weather:",
      description: "Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioner systems efficient during these conditions."
    },
    {
      icon: "eco-leaf",
      title: "Energy Efficiency:",
      description: "A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills."
    },
    {
      icon: "lifespan",
      title: "Longevity of Equipment:",
      description: "Regular maintenance can extend your air conditioning unit’s lifespan, reducing the need for costly repairs and replacements, ultimately saving you money."
    },
    {
      icon: "sparkles",
      title: "Improved Air Quality:",
      description: "Regular cleaning and filter replacement in Cedre Villas Silicon Oasis Dubai reduce dust, allergens, and airborne pollutants."
    },
    {
      icon: "smile",
      title: "Enhanced Comfort:",
      description: "Consistent airflow and temperature control maintain a quiet, refreshing home environment all year round."
    },
    {
      icon: "ac-wash",
      title: "AC Cleaning Service:",
      description: "Comprehensive coil washing, duct sanitization, and drain flush ensure peak performance and odor-free cooling."
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
  title: "Emergency AC Repair Service in Cedre Villas Silicon Oasis Dubai",
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
    "We provide fast assistance for residential and commercial customers throughout Cedre Villas Silicon Oasis Dubai and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Cedre Villas Silicon Oasis Dubai and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Cedre Villas Silicon Oasis Dubai",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Cedre Villas Silicon Oasis Dubai",
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
  title: "Benefits Of Regular AC Service and Maintenance in Cedre Villas Silicon Oasis Dubai",
  eyebrow: "Why Regular Maintenance Matters",
  description: "Regular AC service and preventative maintenance in Cedre Villas Silicon Oasis Dubai keep your air conditioning system running at peak performance while extending equipment lifespan and lowering utility bills.",
  city: "Cedre Villas Silicon Oasis",
  stats: [
    { value: "2010", label: "Serving the UAE Since" },
    { value: "7-Day", label: "Support Available" },
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.",
      icon: "snowflake",
    },
    {
      id: "ac-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.",
      icon: "ac-air-filter",
    },
    {
      id: "ac-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.",
      icon: "diagnostics",
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.",
      icon: "ac-thermostat",
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "We ensure optimal airflow from your air conditioning system in each room as needed.",
      icon: "wind",
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our team provides essential feedback on your air conditioning health and any necessary repair.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "choose-us",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  subtitle: "Experience top-tier service tailored to the unique cooling requirements of Cedre Villas Silicon Oasis Dubai.",
  items: [
    {
      icon: "fast-response",
      title: "Reliable, Priority, and Quick",
      description: "Fast dispatch and prompt arrival across Cedre Villas Silicon Oasis Dubai to get your cooling back on track without delays."
    },
    {
      icon: "peace-of-mind",
      title: "Feeling Of Calm",
      description: "Enjoy peace of mind knowing certified technicians handle your air conditioning system with meticulous care."
    },
    {
      icon: "users-gear",
      title: "You Are in Control",
      description: "Clear explanations, upfront pricing, and detailed repair options put you firmly in control of decisions."
    },
    {
      icon: "award-expert",
      title: "We Are Experts",
      description: "Over 14 years of hands-on experience servicing residential and commercial AC systems across Dubai."
    },
    {
      icon: "dollar-savings",
      title: "Great Value",
      description: "Competitive rates, durable OEM repairs, and energy efficiency improvements deliver lasting value."
    },
    {
      icon: "trust-shield",
      title: "Trustworthy",
      description: "Licensed, insured, and highly reviewed by homeowners and property managers throughout Dubai."
    }
  ]
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description: "See the real results of our thorough air conditioning maintenance and deep cleaning service in Cedre Villas Silicon Oasis Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp"
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after service",
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
      title: "Air Conditioning Systems Serviced Across Cedre Villas Silicon Oasis Dubai:",
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
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across Cedre Villas Silicon Oasis Dubai.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling in Cedre Villas Silicon Oasis Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "ac-energy-saving-tips",
  title: "Practical Tips to Improve Energy Efficiency",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
  openInNewTab: true,
};

const newsData = {
  id: "ac-news-cedreVillasSiliconOasisDubai",
  title: "NEWS & UPDATES",
  description: "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      subtitle: "Admin • 5 Comments",
      description: "A properly functioning air conditioning system is essential for homes and offices. Learn how to address the most frequent AC failures quickly.",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read More"
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin • 4 Comments",
      description: "Air conditioning keeps you cool but can be expensive. Discover proven methods to lower your DEWA power bills without sacrificing comfort.",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read More"
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin • 3 Comments",
      description: "Choosing the ideal air conditioner requires evaluating room size, energy ratings, compressor types, and cooling capacity for Dubai heat.",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read More"
    }
  ]
};

const contractsData = {
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in Cedre Villas Silicon Oasis Dubai.",
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
        "With MEP and without MEP Services",
      ],
    },
    {
      title: "Maintenance Contract (6 Months)",
      tagline: "Balanced seasonal care before peak cooling demand.",
      badge: "Popular",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 and 2 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
    {
      title: "Maintenance Contract (3 Months)",
      tagline: "Flexible short-term protection for immediate AC needs.",
      badge: "Flexible",
      features: [
        "Limited and Unlimited Callout Or Breakdown Attending",
        "1 Times PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services",
      ],
    },
  ],
  footnote:
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in Cedre Villas Silicon Oasis Dubai.",
};

const testimonialsData = {
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description: "Customer feedback on FAJ air-conditioning repair and maintenance services in Cedre Villas Silicon Oasis Dubai.",
  items: [
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Sultan Al Suwaidi",
        "subtitle": "Cedre Villas Homeowner",
        "description": "FAJ provided prompt and professional AC repair for our villa in Cedre Villas Silicon Oasis. The technician diagnosed the capacitor fault quickly and restored icy-cold cooling within an hour."
    },
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Emily Watson",
        "subtitle": "Cedre Villas Resident",
        "description": "Exceptional AC cleaning and duct sanitization service. The team arrived on time, was extremely clean, and our indoor air quality improved immediately."
    },
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Hamad Al Mazrouei",
        "subtitle": "Silicon Oasis Villa Owner",
        "description": "We rely on FAJ for our annual AC maintenance contract across our villas in Cedre Villas. Consistent reliability, thorough servicing, and fast emergency response."
    },
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Patrick Murphy",
        "subtitle": "Cedre Villas Resident",
        "description": "Had a severe AC water leak on a hot weekend. FAJ dispatched an emergency technician who unclogged the condensate drain cleanly and checked system pressures. Top-tier service."
    },
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Laila Al Hammadi",
        "subtitle": "Cedre Villas Homeowner",
        "description": "Honest diagnostics and fair pricing. They replaced our faulty fan motor and explained every step clearly. Highly recommended for air conditioning service in Dubai."
    },
    {
        "icon": "award",
        "badge": "5-Star Review",
        "title": "Marcus Weber",
        "subtitle": "Silicon Oasis Resident",
        "description": "The best HVAC service in the area. Thorough coil cleaning and gas leak rectification that reduced our power bill noticeably. Reliable and courteous team."
    }
]
};

const faqsData = {
  id: "ac-service-cedreVillasSiliconOasisDubai-faqs",
  title: "FAQ's",
  description: "Answers about AC servicing, cleaning, cooling faults and maintenance in Cedre Villas Silicon Oasis Dubai.",
  items: [
    {
      "question": "How much does ac systems repair cost in Business Bay?",
      "answer": "The cost is based on the type of issue, the air conditioning system, and any replacement parts required. A professional inspection helps to establish the final repair cost."
    },
    {
      "question": "How many times should AC systems be serviced in Dubai?",
      "answer": "Most domestic systems benefit from regular maintenance every three to six months. Commercial units may need more frequent servicing."
    },
    {
      "question": "What are the warning indications that my air conditioner needs quick attention?",
      "answer": "<ul><li>Weak cooling</li><li>Water leakage</li><li>Strange noises</li><li>Burning smell</li><li>Frequent shutdowns</li></ul>"
    },
    {
      "question": "What is included in a standard AC maintenance service?",
      "answer": "<ul><li>Filter cleaning</li><li>Coil inspection</li><li>Cooling performance check</li><li>Thermostat testing</li><li>General system inspection</li></ul>"
    },
    {
      "question": "Can AC cleaning improve cooling performance?",
      "answer": "Yes, it can. Cleaning removes dust and blockages that restrict airflow. The AC unit cools more effectively."
    },
    {
      "question": "Why is my AC leaking water?",
      "answer": "Well, there are a few reasons, such as blocked drainage lines, frozen coils or a lot of dirt buildup, that can cause AC water leakage."
    },
    {
      "question": "Do you provide same-day AC service in Business Bay?",
      "answer": "At FAJ Technical Services L.L.C, we offer same-day services. Small issues are fixed immediately, while larger problems may take more time."
    },
    {
      "question": "Which air conditioning brands do you collaborate with?",
      "answer": "We service major AC brands used in homes, offices and commercial buildings across Dubai. AC brands are our specialty, so we work with many of them."
    },
    {
      "question": "How can I improve my AC cooling without calling a technician?",
      "answer": "<strong>Follow these steps carefully:</strong><ul><li>Close all windows </li><li>Clean the filters</li><li>Keep the unit clear</li><li>Set the thermostat to a temperature</li></ul>"
    },
    {
      "question": "Why does my AC smell bad when I turn it on?",
      "answer": "Mold or bacteria inside the AC cause smells. Professional cleaning removes the source completely."
    },
    {
      "question": "What happens if I skip AC servicing for a year?",
      "answer": "<ul><li>Your AC's efficiency drops</li><li>Your bills go up</li><li>Parts wear out faster</li><li>Small problems become expensive repairs</li></ul>"
    },
    {
      "question": "Why does my AC take too long to cool the room?",
      "answer": "The filters might be dirty, the gas might be low or the unit might be too small for the room. A technician can check the system and suggest the right solution."
    },
    {
      "question": "Do I need to service my AC before summer starts?",
      "answer": "Yes. Servicing before summer prepares your AC for the heavy load ahead. It helps avoid breakdowns when the weather gets extremely hot outside."
    },
    {
      "question": "What should I do if my AC remote stops working?",
      "answer": "Check the batteries first. If that does not work, the remote sensor or receiver might be faulty. The AC can still be operated manually until the remote is fixed."
    }
  ],
};

const bookingData = {
  id: "modern-booking",
  title: "Book An Appointment",
  description: "Book your AC service appointment with our expert team in Cedre Villas Silicon Oasis Dubai. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  services: [
    { id: "repair", title: "AC Repair & Troubleshooting" },
    { id: "maintenance", title: "Routine AC Servicing" },
    { id: "deep-cleaning", title: "Full Chemical Deep Clean" },
    { id: "amc", title: "Annual Maintenance Contract (AMC)" },
    { id: "installation", title: "AC Replacement & Installation" }
  ],
  times: [
    { id: "morning", title: "Morning (8:00 AM – 12:00 PM)" },
    { id: "afternoon", title: "Afternoon (12:00 PM – 4:00 PM)" },
    { id: "evening", title: "Evening (4:00 PM – 8:00 PM)" }
  ],
  notesPlaceholder: "Share symptoms (e.g. not cooling, water leak, unusual noise) or preferred timing.",
  submitLabel: "Confirm Booking Request",
  guaranteeText: "Clear pricing, verified parts warranty, and 7-day technical support."
};

const pageData = {
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
  brands: brandsData,
  sparePartsRepair: sparePartsRepairData,
  gallery: galleryData,
  energyTips: energyTipsData,
  repairPrice: repairPriceData,
  testimonials: testimonialsData,
  news: newsData,
  faqs: faqsData,
  booking: bookingData
};

export default pageData;

export const seo = seoData;
export const contact = contactData;
export const hero = heroData;
export const overview = overviewData;
export const areaOverview = areaOverviewData;
export const pricing = pricingData;
export const contracts = contractsData;
export const serviceOverview = serviceOverviewData;
export const commonSigns = commonSignsData;
export const video = videoData;
export const maintenanceImportance = maintenanceImportanceData;
export const maintenanceImportanceCards = maintenanceImportanceCardsData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedCardsData;
export const servicesOfferedCards = servicesOfferedCardsData;
export const benefits = benefitsData;
export const whyChooseUs = whyChooseUsData;
export const beforeAfter = beforeAfterData;
export const brands = brandsData;
export const sparePartsRepair = sparePartsRepairData;
export const gallery = galleryData;
export const energyTips = energyTipsData;
export const repairPrice = repairPriceData;
export const testimonials = testimonialsData;
export const news = newsData;
export const faqs = faqsData;
export const booking = bookingData;
