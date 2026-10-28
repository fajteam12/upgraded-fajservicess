/**
 * Dubai Healthcare City AC Service Page Data
 * Canonical modular schema matching Bur Dubai standards
 */

const seoData = {
  title: "Best AC Repair and AC Services In Dubai Healthcare City",
  description: "If you are looking for the best AC Services in Dubai Healthcare City. Contact us 043300002 for Air Conditioner maintenance, repairs near me and  A/C fix",
  keywords: "ac service in dubai healthcare city, AC repair in dubai healthcare city, AC maintenance in dubai healthcare city, air conditioning service in dubai healthcare city, air conditioner repair in dubai healthcare city, air conditioning maintenance in dubai healthcare city",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-healthcare-city/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Repair and AC Services In Dubai Healthcare City",
    description: "If you are looking for the best AC Services in Dubai Healthcare City. Contact us 043300002 for Air Conditioner maintenance, repairs near me and  A/C fix",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-healthcare-city/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac-service-page/ac-repair-top-hero-banner/public"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Repair and AC Services In Dubai Healthcare City",
    description: "If you are looking for the best AC Services in Dubai Healthcare City. Contact us 043300002 for Air Conditioner maintenance, repairs near me and  A/C fix",
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
  title: "Emergency AC Cleaning Service and AC Repair in Dubai Healthcare City, Dubai",
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
      description: "Serving Dubai with professional HVAC services"
    },
    {
      icon: "shield-check",
      title: "Workmanship Warranty",
      description: "Guaranteed results on repairs and parts"
    },
    {
      icon: "clock",
      title: "7-Day Service Response",
      description: "Same-day callouts across Dubai Healthcare City"
    }
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Emergency AC Cleaning Service and AC Repair in Dubai Healthcare City, Dubai",
    width: 600,
    height: 450
  }
};

const overviewData = {
  id: "overview",
  paragraphs: [
    {
      parts: [
        {
          text: "FAJ Technical Services L.L.C",
          href: "https://maps.app.goo.gl/soNMACLuaHwdCzKx7",
          external: true
        },
        " has been in operation since 2010. Our dedicated facilities team has extensive experience in ",
        {
          text: "AC service",
          href: "/services/air-conditioning-repair/ac-service/"
        },
        ", AC maintenance, AC repair near me Dubai Healthcare City, and ",
        {
          text: "AC installation",
          href: "/services/air-conditioning-repair/ac-installation/"
        },
        " of various residential and commercial air conditioning units in Dubai and Sharjah."
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
  title: "AC Inspection, Cleaning and Maintenance Prices in Dubai Healthcare City",
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
              {
                label: "Technical Inspection Call-Out charges",
                text: "AED 215 + VAT (Within DXB)"
              },
              {
                label: "Major / Minor Fault Identification",
                text: "Checking of indoor and outdoor units, ducting, filters, and safety controls."
              },
              {
                label: "Diagnosis of Abnormal Sounds & Smells",
                text: "Locating motor, bearing, electrical, or mold issues."
              },
              {
                label: "Comprehensive Quotation",
                text: "Repair quotation submitted after complete diagnostic checks."
              }
            ]
          }
        ]
      }
    },
    {
      title: "AC Deep Cleaning Service",
      warranty: "30-Day Service Guarantee",
      badge: "Deep Clean",
      price: "AED 350",
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp"
      },
      description:
        "We are here to help keep your cool air clean and protect your family from dust, mold, and airborne allergens.",
      popup: {
        title: "Indoor Unit AC Deep Cleaning scope of works:",
        sections: [
          {
            items: [
              {
                label: "Indoor Unit Deep Clean",
                text: "Disinfection and washing of filters, evaporator coil, blower fan, and housing."
              },
              {
                label: "Drain Tray & Drain Line Flush",
                text: "Clearing blockages, flushing condensate lines, and sanitizing drain pans."
              },
              {
                label: "Disinfection Treatment",
                text: "Antibacterial and antifungal treatment applied to eliminate musty odors."
              },
              {
                label: "Airflow & Temperature Check",
                text: "Verifying supply air volume and temperature differential after cleaning."
              }
            ]
          }
        ]
      }
    },
    {
      title: "AC Maintenance Service",
      warranty: "30-Day Service Guarantee",
      badge: "Comprehensive",
      price: "AED 450",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp"
      },
      description:
        "Comprehensive preventive servicing for residential and commercial systems to ensure uninterrupted cooling and peak efficiency.",
      popup: {
        title: "AC Maintenance Service scope of works:",
        sections: [
          {
            heading: "Technical Checks",
            items: [
              {
                label: "Gas Pressure Check",
                text: "Measuring suction and discharge refrigerant operating levels."
              },
              {
                label: "Electrical Diagnostics",
                text: "Testing capacitors, relays, contactors, wiring terminals, and amp draws."
              }
            ]
          },
          {
            heading: "Cleaning & Tuning",
            items: [
              {
                label: "Coil & Filter Clean",
                text: "Thorough washing of return filters and condenser heat transfer fins."
              },
              {
                label: "Thermostat Calibration",
                text: "Testing and calibrating digital or smart thermostats for precise temperature control."
              }
            ]
          }
        ]
      }
    }
  ]
};

const areaOverviewData = {
  id: "dubai-healthcare-city-ac-services",
  title: "Best AC Repair in Dubai Healthcare City",
  paragraphs: [
    {
      parts: [
        "When it comes to ",
        {
          text: "AC repair",
          strong: true,
          href: "/services/air-conditioning-repair/ac-service/"
        },
        " near me in Dubai Healthcare City, it’s essential to hire a professional and trustworthy ",
        {
          text: "AC technician",
          strong: true,
          href: "/services/air-conditioning-repair/ac-service/"
        },
        " near me for your home AC or office AC."
      ]
    },
    {
      parts: [
        "We specialise in air conditioner (AC) repair, service, and maintenance near me in Dubai Healthcare City Dubai. The ",
        {
          text: "FAJ team",
          href: "https://www.facebook.com/FAJTechnicalServicesLLC",
          external: true
        },
        " is dedicated to ensuring a comfortable temperature all year round."
      ]
    }
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Best AC Repair in Dubai Healthcare City",
    width: 600,
    height: 450
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
    "If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Air is not blowing cold" },
    { title: "Drips from your air conditioner" },
    { title: "Loss of AC performance" },
    { title: "Poor AC airflow, making noises" }
  ]
};

const repairPriceData = {
  id: "ac-service-pricing-banner",
  title: "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description: "",
  actionLabel: "Check Here For Price",
  actionHref: "/dubai-ac-service-price-list/",
  openInNewTab: false
};

const serviceOverviewData = {
  "id": "ac-repair-service-overview",
  "title": "Why Is My AC Not Cooling in Dubai Healthcare City?",
  "description": "A cooling problem is one of the most common AC problems in Dubai. In case you notice your AC is running but not cooling properly, there are several factors that may be responsible.",
  "listTitle": "Common causes include:",
  "checklist": [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Electrical component failures"
  ],
  "conclusion": "Our certified technicians provide accurate diagnostics to resolve cooling issues promptly.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "Why Is My AC Not Cooling in Dubai Healthcare City",
    "width": 600,
    "height": 450
  },
  "showCta": true
};

const servicesOfferedCardsData = {
  id: "ac-services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  subtitle: "We specialise in all types and brands of air conditioning systems, HVAC and FAHU.",
  description: "Our services include:",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional AC repair services for homes and businesses in Dubai Healthcare City. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service."
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Preventive AC maintenance to keep your air conditioning system running efficiently, extend its operational life, prevent sudden breakdowns, and maintain clean indoor airflow."
    },
    {
      icon: "shield-check",
      title: "AC Installation Service",
      description:
        "Expert installation and replacement of split units, central HVAC systems, and package units. Proper sizing, duct connection, and commissioning to ensure optimal performance."
    },
    {
      icon: "fan",
      title: "AC Coil Cleaning Service",
      description:
        "Comprehensive deep cleaning of indoor evaporator and outdoor condenser coils. Removes accumulated dirt, mold, and grease to restore optimal heat transfer and airflow."
    },
    {
      icon: "snowflake",
      title: "AC Gas Top-up & Leak Fix",
      description:
        "Accurate refrigerant leak detection, pressure testing, and professional gas top-up using R410A and R22 refrigerants according to strict manufacturer specifications."
    },
    {
      icon: "sparkles",
      title: "AC Duct Cleaning & Sanitization",
      description:
        "Air duct cleaning and disinfection to remove dust, mold spores, and airborne allergens, ensuring fresh, clean air circulation throughout your property."
    }
  ]
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in Dubai Healthcare City?",
  description:
    "Regular air conditioner (AC) maintenance service in Dubai Healthcare City is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need AC maintenance near you in Dubai Healthcare City, contact us.",
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Dubai Healthcare City?",
    width: 600,
    height: 450
  }
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN DUBAI HEALTHCARE CITY",
  items: [
    {
      icon: "shield-check",
      title: "Lower Energy Bills",
      description:
        "Regular maintenance keeps your AC running at peak efficiency, using less electricity to cool your space. Clean coils and filters mean your system does not have to work as hard."
    },
    {
      icon: "award",
      title: "Healthier Indoor Air",
      description:
        "Clean filters and sanitized coils remove dust, mold spores, bacteria, and allergens from the circulating air, creating a healthier indoor environment for your family or employees."
    },
    {
      icon: "clock",
      title: "Fewer Costly Breakdowns",
      description:
        "Routine inspections catch worn belts, failing capacitors, and minor leaks before they escalate into major, expensive failures during the scorching summer months."
    },
    {
      icon: "snowflake",
      title: "Extended Equipment Lifespan",
      description:
        "Well-maintained air conditioning systems last years longer than neglected units, protecting your capital investment and delaying the need for costly complete system replacements."
    },
    {
      icon: "phone-support",
      title: "Consistent Cooling Comfort",
      description:
        "Properly balanced refrigerant levels, calibrated thermostats, and clean ductwork deliver even, reliable temperatures across every room without hot spots or weak airflow."
    },
    {
      icon: "ac-air-filter",
      title: "Safety & Peace of Mind",
      description:
        "Checking electrical contactors, wiring terminals, and drain pans prevents electrical hazards, compressor burnouts, and costly ceiling water damage."
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
      title: "Weak Airflow",
      description: {
        parts: [
          "If you notice ",
          {
            text: "reduced airflow",
            strong: true,
            href: "https://www.youtube.com/watch?v=qnByeIsc3lY",
            external: true
          },
          " coming from your vents, it could indicate a problem with your A/C system, such as a clogged filter or malfunctioning fan."
        ]
      }
    },
    {
      title: "Warm Air",
      description:
        "If your aircon blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues."
    },
    {
      title: "Strange Noises",
      description:
        "Unusual sounds like grinding, squealing, or banging coming from your air conditioner unit can indicate mechanical problems that require attention."
    },
    {
      title: "Foul Odors",
      description:
        "Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly."
    },
    {
      title: "Frequent Cycling",
      description:
        "It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat."
    },
    {
      title: "High Humidity Levels",
      description:
        "An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation."
    },
    {
      title: "Leaking Water",
      description:
        "Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues."
    },
    {
      title: "Increased Energy Bills",
      description:
        "High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems."
    }
  ]
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Dubai Healthcare City",
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
    "We provide fast assistance for residential and commercial customers throughout Dubai Healthcare City and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Dubai Healthcare City and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Dubai Healthcare City",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Dubai Healthcare City",
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
  id: "maintenance-benefits",
  title: "Benefits Of Regular AC Service and Maintenance in Dubai Healthcare City",
  city: "Dubai Healthcare City",
  stats: [
    { value: "30%", label: "Lower Power Consumption" },
    { value: "99%", label: "Dust & Allergen Removal" },
    { value: "5+ Yrs", label: "Extended Lifespan" },
    { value: "24/7", label: "Priority Emergency Support" }
  ],
  benefits: [
    {
      id: "benefit-1",
      number: "01",
      title: "Peak Energy Efficiency",
      description: "Clean coils, properly lubricated fan motors, and precise refrigerant charges minimize compressor workload, lowering monthly electricity bills.",
      icon: "trending-down"
    },
    {
      id: "benefit-2",
      number: "02",
      title: "Pure & Healthy Indoor Air",
      description: "Thoroughly washed filters and sanitized evaporator fins eliminate airborne mold, dust mites, and bacteria, safeguarding indoor health.",
      icon: "wind"
    },
    {
      id: "benefit-3",
      number: "03",
      title: "Extended System Longevity",
      description: "Routine inspections protect costly components like compressors and inverter PCBs from premature overheating and mechanical failure.",
      icon: "clock"
    },
    {
      id: "benefit-4",
      number: "04",
      title: "Uninterrupted Summer Cooling",
      description: "Proactive tune-ups catch failing capacitors, contactors, and sensors before they lead to inconvenient mid-summer cooling breakdowns.",
      icon: "shield-check"
    },
    {
      id: "benefit-5",
      number: "05",
      title: "Reduced Moisture & Odors",
      description: "Cleared condensate lines and treated drain pans prevent microbial standing water, water leaks, and musty mildew odors from supply grilles.",
      icon: "droplet"
    },
    {
      id: "benefit-6",
      number: "06",
      title: "Optimal Humidity Balance",
      description: "Proper cooling cycles maintain indoor relative humidity at comfortable 40-50% levels, enhancing comfort and protecting woodwork.",
      icon: "sparkles"
    }
  ]
};

const whyChooseUsData = {
  id: "choose-us",
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
            strong: true,
            href: "https://www.instagram.com/fajtechnicalservicesllc/",
            external: true
          },
          "! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly."
        ]
      }
    },
    {
      icon: "peace-of-mind",
      badge: "Expert Planned Care",
      title: "Feeling Of Calm",
      description: {
        parts: [
          "With ",
          {
            text: "annual maintenance contract",
            strong: true,
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/"
          },
          ", you get a full year of service, ensuring your AC runs smoothly and providing peace of mind."
        ]
      }
    },
    {
      icon: "git-branch",
      badge: "Flexible Scheduling",
      title: "You Are in Control",
      description:
        "Choose a day and time for your AC repair near me, Dubai Healthcare City Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in AC service in Dubai Healthcare City. This is why most major brands trust us to handle their service and maintenance needs."
    },
    {
      icon: "shield-dollar",
      badge: "Customer Value",
      title: "Great Value",
      description:
        "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices."
    },
    {
      icon: "clean-handshake",
      badge: "Dependable Care",
      title: "Trustworthy",
      description: {
        parts: [
          "Our ",
          {
            text: "skilled AC technicians",
            strong: true,
            href: "https://www.facebook.com/acrepairservices",
            external: true
          },
          " are highly trained, and we provide excellent service for a variety of major AC brands efficiently."
        ]
      }
    }
  ]
};

const beforeAfterData = {
  id: "before-after",
  title: "Recent Completed Service",
  description:
    "See the real difference professional cleaning makes. From clogged, dust-laden evaporator coils to spotless, sanitized systems running at peak cooling power.",
  beforeLabel: "Before Service",
  beforeAlt: "Clogged and dusty AC evaporator coil before professional cleaning",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp"
  },
  afterLabel: "After Service",
  afterAlt: "Clean, restored AC evaporator coil after professional deep cleaning",
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
      title: "Air Conditioning Systems Serviced Across Dubai Healthcare City:",
      items: [
        {
          title: "Window AC",
          text: "We provide fast repair and servicing for Window AC units, fixing common cooling and airflow issues."
        },
        {
          title: "Split AC",
          text: "Our team handles Split AC repair, cleaning, and maintenance for homes and offices with quick response service."
        },
        {
          title: "Central AC",
          text: "Comprehensive repair and servicing for Central AC systems, keeping large residential and commercial properties cool."
        },
        {
          title: "Inverter AC",
          text: "Specialized diagnostics and repairs for Inverter AC units, optimizing energy efficiency and performance."
        },
        {
          title: "Ducted Split AC",
          text: "Expert repair and maintenance for Ducted Split AC systems, ensuring balanced airflow and temperature control."
        },
        {
          title: "Package Unit AC",
          text: "Full repair and maintenance services for commercial Package Unit AC systems with minimal disruption to your business."
        },
        {
          title: "VRF / VRV Systems",
          text: "Advanced variable refrigerant flow diagnostics, multi-zone control calibration, and electronic expansion valve repairs."
        },
        {
          title: "Chilled Water FCU",
          text: "Specialized servicing for fan coil units, 2-way and 3-way actuator valves, and chilled water strainers."
        }
      ]
    },
    {
      title: "AC Components & Spare Parts Repaired:",
      items: [
        {
          title: "Compressor Replacement",
          text: "Diagnosis and replacement of failed or inefficient compressors using genuine manufacturer components."
        },
        {
          title: "Fan Motor Repair",
          text: "Repairs and replacements for indoor blower motors and outdoor condenser fan motors causing noise or airflow issues."
        },
        {
          title: "Capacitor & Contactor Replacement",
          text: "Testing and replacing worn capacitors and electrical contactors to ensure reliable starting and safe operation."
        },
        {
          title: "Thermostat Replacement",
          text: "Upgrading faulty or outdated thermostats to modern, programmable or smart thermostats for better temperature control."
        },
        {
          title: "Drain Pan & Pipe Service",
          text: "Clearing clogged drain lines and repairing damaged drain pans to prevent water leaks and ceiling damage."
        },
        {
          title: "PCB Control Board Repairs",
          text: "Micro-soldering, relay replacement, and circuit troubleshooting for inverter driver and main logic boards."
        },
        {
          title: "Expansion Valve (TXV/EEV)",
          text: "Replacing restricted or failed expansion valves to restore correct refrigerant metering and evaporator cooling."
        },
        {
          title: "Evaporator & Condenser Coils",
          text: "Repairing copper tube micro-leaks, brazing connections, and replacing damaged aluminum fins."
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
  id: "service-gallery",
  title: "Gallery",
  description:
    "Explore our technicians in action across Dubai homes and commercial facilities, executing precision diagnostics, deep coil washing, and compressor repairs.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "AC Service Technician Working in Dubai Healthcare City",
      width: 600,
      height: 450
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair Diagnostics and Component Fixing in Dubai Healthcare City",
      width: 600,
      height: 450
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Preventive AC Maintenance Inspection in Dubai Healthcare City",
      width: 600,
      height: 450
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Deep Cleaning and Pressure Washing in Dubai Healthcare City",
      width: 600,
      height: 450
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Blower Motor and Electrical Fixing in Dubai Healthcare City",
      width: 600,
      height: 450
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Refrigerant Leak Repair and Gas Filling in Dubai Healthcare City",
      width: 600,
      height: 450
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
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf",
  openInNewTab: true
};

const newsData = {
  id: "latest-insights",
  title: "Latest Air Conditioning Tips & Technical Insights",
  description:
    "Expert advice from FAJ technicians on maintaining cooling performance, cutting power bills, and troubleshooting common AC faults.",
  items: [
    {
      icon: "file-text",
      badge: "Troubleshooting",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      description:
        "Learn how to identify and resolve common air conditioning issues before they lead to complete system failure in Dubai heat.",
      actionLabel: "Read More",
      actionHref: "/10-common-ac-problems-and-how-to-fix-them/"
    },
    {
      icon: "trending-down",
      badge: "Energy Saving",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      description:
        "Practical strategies to reduce your summer air conditioning electricity bills without sacrificing comfort.",
      actionLabel: "Read More",
      actionHref: "/best-ways-for-how-to-save-money-on-ac-bill/"
    },
    {
      icon: "award",
      badge: "Buying Guide",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      description:
        "Key factors to consider when choosing a new air conditioning unit for your Dubai home or office space.",
      actionLabel: "Read More",
      actionHref: "/how-to-choose-the-best-air-conditioner-for-home/"
    }
  ]
};

const contractsData = {
  id: "amc-plans",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Ensure uninterrupted year-round comfort with our flexible Annual Maintenance Contracts (AMC) designed for residential villas, apartments, and commercial facilities in Dubai Healthcare City.",
  featuredIndex: 0,
  actionLabel: "Inquire Now",
  plans: [
    {
      title: "Maintenance Contract (Yearly)",
      tagline: "Comprehensive Year-Round Protection",
      badge: "Best Value",
      features: [
        "4 Scheduled Preventive Maintenance Visits Per Year",
        "Unlimited Emergency Breakdown Callouts Included",
        "20% Discount on All Genuine Spare Parts",
        "Priority VIP Response Within 2-4 Hours",
        "Complete Filter, Coil & Drain Line Cleans Each Visit",
        "Detailed Maintenance Report and Logbook Maintained"
      ]
    },
    {
      title: "Maintenance Contract (6 Months)",
      tagline: "Seasonal Summer Coverage",
      badge: "Seasonal",
      features: [
        "2 Scheduled Comprehensive Service Visits",
        "2 Emergency Callouts Included Free",
        "15% Discount on Any Replacement Spare Parts",
        "Priority Technician Scheduling Across Dubai Healthcare City",
        "Electrical, Refrigerant & Thermostat Audits"
      ]
    },
    {
      title: "Maintenance Contract (3 Months)",
      tagline: "Short-Term Preventive Tune-Up",
      badge: "Quarterly",
      features: [
        "1 Major Diagnostic & Deep Cleaning Visit",
        "1 Free Emergency Diagnostic Callout",
        "10% Discount on Replaced Components",
        "Full System Health Check & Safety Report"
      ]
    }
  ],
  footnote:
    "Custom commercial AMC packages available for offices, restaurants, retail shops, and residential buildings in Dubai Healthcare City. Contact our corporate desk for bespoke quotes."
};

const testimonialsData = {
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description:
    "Customer feedback on FAJ air-conditioning repair and maintenance services in Dubai Healthcare City.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Sara Malik",
      subtitle: "Dubai Healthcare City Resident",
      description:
        "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in Dubai Healthcare City.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Mansoori",
      subtitle: "Dubai Healthcare City Resident",
      description:
        "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in Dubai Healthcare City, highly recommended!",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Arjun Kumar",
      subtitle: "Resident",
      description:
        "I booked FAJ for HVAC services in Dubai Healthcare City, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Shazia Sheikh",
      subtitle: "Homeowner",
      description:
        "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems in Dubai Healthcare City.",
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
  id: "ac-service-dubai-healthcare-city-faqs",
  title: "FAQ's",
  description: "Answers about AC servicing, cleaning, cooling faults and maintenance in Dubai Healthcare City.",
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
  ],
};

const bookingData = {
  id: "booking-section",
  title: "Book An Appointment",
  description:
    "Book your AC service appointment with our expert team in Dubai Healthcare City. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
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
