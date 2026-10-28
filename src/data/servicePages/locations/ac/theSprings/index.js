/**
 * The Springs AC Service Page Data
 * Fully compliant with Bur Dubai / Al Barsha canonical standard
 */

const seoData = {
  title: "Best AC Air Conditioning Repair and Maintenance in The Springs",
  description: "Get same-day AC repair and services in the Springs, Dubai. We are experts in central air conditioner maintenance near you. Contact us at 043300002",
  keywords: "AC Repair in The Springs, Air Conditioning Service in The Springs, Air Con Maintenance & AC Installation in The Springs",
  canonical: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-springs/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best AC Air Conditioning Repair and Maintenance in The Springs",
    description: "Get same-day AC repair and services in the Springs, Dubai. We are experts in central air conditioner maintenance near you. Contact us at 043300002",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-springs/",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Air Conditioning Repair and Maintenance in The Springs",
    description: "Get same-day AC repair and services in the Springs, Dubai. We are experts in central air conditioner maintenance near you. Contact us at 043300002",
    image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const heroData = {
  title: "Cost Efective Air Conditioning Repair and Maintenance Service in The Springs",
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
      description: "Fast assistance across The Springs."
    }
  ],
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Cost Efective Air Conditioning Repair and Maintenance Service in The Springs",
    width: 733,
    height: 550
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
        ", AC maintenance, AC repair near me The Springs, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah."
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
  description: "Choose a starting service based on your air-conditioning system. Final quotations depend on unit type, condition and required work.",
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
      description: "Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call.",
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
            text: "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text: "*Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis."
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
      description: "If your AC has reduced airflow or is leaking water, work quickly. Regularly clean filters and drain to provide efficiency and good air quality.",
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
            text: "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text: "*Starting from AED 280 basic cleaning service charge applies based on the type, capacity of the unit, and location for each diagnosis."
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
      description: "Relax and save money by keeping our expert technicians clean and maintain your AC, stopping unnecessary breakdowns.",
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
            text: "Cost for any repair work, procurement cost, cost of any new parts and installation, if required."
          },
          {
            label: "Terms & Conditions:",
            text: "*Starting from AED 325 AC Maintenance charge applies based on the type, capacity of the unit, and location for each diagnosis."
          }
        ]
      }
    }
  ]
};

const areaOverviewData = {
  id: "area-overview",
  title: "Best AC Repair in The Springs",
  paragraphs: [
    {
      parts: [
        "When it comes to ",
        {
          text: "AC repair",
          strong: true,
          href: "/services/air-conditioning-repair/ac-service/"
        },
        " near me in The Springs, it's essential to hire a professional and trustworthy ",
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
        "We specialise in air conditioner (AC) repair, service, and maintenance near me in The Springs Dubai. The ",
        {
          text: "FAJ team",
          strong: true,
          href: "/"
        },
        " is dedicated to ensuring a comfortable temperature all year round."
      ]
    }
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best AC repair services in The Springs?",
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
  intro: "If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.",
  items: [
    { title: "Higher electricity bills" },
    { title: "Air is not blowing cold" },
    { title: "Drips from your air conditioner" },
    { title: "Loss of AC performance" },
    { title: "Poor AC airflow, making noises" }
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: ""
  }
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
  "id": "ac-not-cooling",
  "title": "Why Is My AC Not Cooling?",
  "paragraph": "Is your air conditioner running but blowing warm air or barely cooling your space in The Springs?",
  "listTitle": "Common causes include:",
  "checklist": [
    "Dirty air filters restricting airflow",
    "Frozen evaporator coils",
    "Low refrigerant levels",
    "A malfunctioning compressor"
  ],
  "conclusion": "Our certified HVAC technicians quickly inspect, detect, and resolve cooling performance issues on the spot so you can get back to dependable comfort.",
  "imageSide": "left",
  "image": {
    "id": "ac-service-page/ac-repair-and-service",
    "src": "/img/ac-service-page/ac-repair-and-service.webp",
    "alt": "Why Is My AC Not Cooling?",
    "width": 600,
    "height": 450
  },
  "showCta": true
};

const servicesOfferedCardsData = {
  id: "services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  items: [
    {
      icon: "wrench",
      title: "AC Repair Service",
      description: "Efficient repair services for all air conditioner components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions in The Springs."
    },
    {
      icon: "wind",
      title: "AC Cleaning Service",
      description: "Thorough sanitisation of filters, evaporator coils, blower wheels and drain lines to remove dust, mould and bacteria, improving indoor air quality."
    },
    {
      icon: "shield-check",
      title: "AC Maintenance Service",
      description: "Regular preventive check-ups and maintenance keep every key component running smoothly, reducing power consumption and preventing breakdowns."
    },
    {
      icon: "settings",
      title: "AC Installation Service",
      description: "Expert installation of various types and brands of central, split, and inverter AC systems, ensuring optimal cooling capacity and energy efficiency."
    },
    {
      icon: "clock",
      title: "Annual Maintenance Contract (AMC)",
      description: "Scheduled servicing and priority call-out support under our annual maintenance contracts in The Springs for villas, apartments, and commercial offices."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is AC Maintenance Service Important in The Springs?",
  paragraphs: [
    "Regular air conditioner (AC) maintenance service in The Springs is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need AC maintenance near you in The Springs, contact us."
  ],
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in The Springs?",
    width: 600,
    height: 450
  }
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-benefits-cards",
  title: "Key Benefits of Regular AC Maintenance in The Springs",
  items: [
    {
      icon: "sun",
      title: "Extreme Weather",
      description: "Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioner systems efficient during these conditions."
    },
    {
      icon: "zap",
      title: "Energy Efficiency",
      description: "A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills."
    },
    {
      icon: "clock",
      title: "Longevity of Equipment",
      description: "Regular maintenance can extend your air conditioning unit's lifespan, reducing the need for costly repairs and replacements, ultimately saving you money."
    },
    {
      icon: "shield-check",
      title: "Improved Air Quality",
      description: "Regular maintenance keeps dust and allergens from building up, ensuring cleaner air."
    },
    {
      icon: "smile",
      title: "Enhanced Comfort",
      description: "Regular AC cleaning service in The Springs ensures comfort, efficiency, and consistent cooling daily."
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
      description: "If you notice reduced airflow coming from your vents, it could indicate a problem with your A/C system, such as a clogged filter or malfunctioning fan."
    },
    {
      title: "Warm Air",
      description: "If your aircon blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues."
    },
    {
      title: "Strange Noises",
      description: "Unusual sounds like grinding, squealing, or banging coming from your air conditioner unit can indicate mechanical problems that require attention."
    },
    {
      title: "Foul Odors",
      description: "Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly."
    },
    {
      title: "Frequent Cycling",
      description: "It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat."
    },
    {
      title: "High Humidity Levels",
      description: "An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation."
    },
    {
      title: "Leaking Water",
      description: "Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues."
    },
    {
      title: "Increased Energy Bills",
      description: "High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in The Springs",
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
    "We provide fast assistance for residential and commercial customers throughout The Springs and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout The Springs and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in The Springs",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in The Springs",
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
  title: "Benefits Of Regular AC Service and Maintenance in The Springs",
  city: "The Springs",
  stats: [
    {
      value: "2010",
      label: "Serving the UAE Since"
    },
    {
      value: "7-Day",
      label: "Support Available"
    }
  ],
  benefits: [
    {
      id: "ac-cooling",
      number: "01",
      title: "Reliable Cooling",
      description: "Consistent temperatures and reliable cooling during peak The Springs summer heat.",
      icon: "snowflake"
    },
    {
      id: "ac-bills",
      number: "02",
      title: "Lower Power Bills",
      description: "Clean, calibrated cooling units consume far less electricity every single month.",
      icon: "wallet"
    },
    {
      id: "ac-lifespan",
      number: "03",
      title: "Longer Equipment Life",
      description: "Routine lubrication and inspection prevent premature wear on expensive compressors.",
      icon: "clock"
    },
    {
      id: "ac-thermostat",
      number: "04",
      title: "Healthier Air Quality",
      description: "Sanitised coils and clean filters eliminate mould spores, bacteria, and allergens.",
      icon: "ac-thermostat"
    },
    {
      id: "ac-airflow",
      number: "05",
      title: "Prevent Water Leaks",
      description: "Regular drain clearing stops condensation overflow before it stains ceilings and walls.",
      icon: "wind"
    },
    {
      id: "ac-feedback",
      number: "06",
      title: "Peace of Mind",
      description: "Scheduled preventive check-ups ensure prompt fault detection before total unit failure.",
      icon: "customer-feedback"
    }
  ],
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const whyChooseUsData = {
  id: "why-choose-us",
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "Dedicated to prompt, professional and transparent HVAC service across Dubai.",
  items: [
    {
      icon: "clock-fast",
      title: "Reliable, Priority, and Quick",
      description: "You can count on efficient service! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly."
    },
    {
      icon: "heart-hand",
      title: "Feeling Of Calm",
      description: "With annual maintenance contract, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind."
    },
    {
      icon: "calendar-check",
      title: "You Are in Control",
      description: "Choose a day and time for your AC repair near me, The Springs or Sharjah. With a 3-4 hour window for when our technician will arrive."
    },
    {
      icon: "award",
      title: "We Are Experts",
      description: "We are experts in AC service in The Springs. This is why most major brands trust us to handle their service and maintenance needs."
    },
    {
      icon: "shield-check",
      title: "Great Value",
      description: "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices."
    },
    {
      icon: "user-check",
      title: "Trustworthy",
      description: "Our skilled AC technicians are highly trained, and we provide excellent service for a variety of major AC brands efficiently."
    }
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello"
  }
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description: "See the real results of our thorough air conditioning maintenance and deep cleaning service in The Springs.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp"
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after thorough cleaning and repair",
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
      title: "Air Conditioning Systems Serviced Across The Springs:",
      items: [
        {
          title: "Window AC",
          text: "We provide fast repair and servicing for Window AC units in The Springs, resolving leaks, compressor failures and loud fan noises."
        },
        {
          title: "Split AC",
          text: "Complete maintenance, filter sanitisation, refrigerant recharge, and electrical diagnostic support for all Split AC units."
        },
        {
          title: "Central AC",
          text: "Full inspection and repair for ducted Central AC systems in residential villas, retail outlets and commercial buildings."
        },
        {
          title: "FCU (Fan Coil Unit)",
          text: "Specialised cleaning, valve testing, thermostat calibration, and motor servicing for chilled water FCU air conditioning systems."
        }
      ]
    },
    {
      title: "Commercial & Specialized AC Units:",
      items: [
        {
          title: "Chiller AC",
          text: "Expert servicing for chiller plant connections, cooling towers, circulating pumps and chilled water piping networks."
        },
        {
          title: "Package Unit AC",
          text: "Commercial rooftop and unitary package unit repair, coil cleaning, condenser servicing and airflow balancing."
        },
        {
          title: "Inverter AC",
          text: "Troubleshooting PCB inverter boards, variable speed compressors, sensors, and electronic expansion valves."
        },
        {
          title: "Ducted Split AC",
          text: "Airflow optimisation, duct inspection, grille sanitisation, and blower wheel maintenance across The Springs properties."
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
  description: "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across The Springs.",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp"
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp"
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp"
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp"
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp"
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp"
    }
  ]
};

const energyTipsData = {
  id: "energy-savings",
  title: "Practical Tips to Improve Energy Efficiency",
  description: "Learn easy and proven ways to save energy with your AC in The Springs. Find tips to cut costs and stay cool all summer long!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref: "/dubai-ac-service-price-list/"
};

const newsData = {
  id: "news-updates",
  title: "NEWS & UPDATES",
  description:
    "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      subtitle: "Admin   5 Comments",
      description:
        "A properly functioning air conditioning system is essential for various settings, including homes, offices, and individual spaces. According to HVAC Webmasters, over 70%",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read More",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin   4 Comments",
      description:
        "Air conditioning is excellent for keeping you comfortable indoors but can be expensive. But there is no need to worry, there are some ways to reduce AC electric bill with",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read More",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin   0 Comments",
      description:
        "As the temperatures rise and summer approaches, the desire for a cool and comfortable escape within your home intensifies. Air conditioning offers a seemingly simple solu",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read More",
    },
  ],
};

const contractsData = {
  id: "amc-packages",
  title: "Air Conditioning Maintenance Contracts",
  description: "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities in The Springs.",
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
        "1 Time PPM Services",
        "Included and Excluded Spare Parts / Materials",
        "With MEP and without MEP Services"
      ]
    }
  ],
  footnote: "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities in The Springs."
};

const testimonialsData = {
  id: "ac-service-reviews",
  title: "Customer Reviews",
  description:
    "Customer feedback on FAJ air-conditioning repair and maintenance services in The Springs.",
  items: [
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Sara Malik",
      subtitle: "The Springs Resident",
      description:
        "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in The Springs.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Al Mansoori",
      subtitle: "The Springs Resident",
      description:
        "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in The Springs, highly recommended!",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Arjun Kumar",
      subtitle: "Resident",
      description:
        "I booked FAJ for HVAC services in The Springs, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail.",
    },
    {
      icon: "award",
      badge: "5-Star Review",
      title: "Shazia Sheikh",
      subtitle: "Homeowner",
      description:
        "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems in The Springs.",
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
  description: "Find answers to common questions about air conditioning repair, cleaning, and maintenance services in The Springs.",
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
  description: "Book your AC service appointment with our expert team in The Springs. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  submitLabel: "Confirm Service Request"
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
  booking: bookingData,
};

export default pageData;
