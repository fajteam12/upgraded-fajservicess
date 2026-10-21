// ==========================================================================
// AC Service in Dubai - Consolidated Page Data
// ==========================================================================

const seoData = {
  title: "Best AC Repair | HVAC Maintenance and AC Service in Dubai",
  description: "Fast AC Service and AC Repair - FAJ offers affordable air conditioning maintenance, servicing & cleaning from expert technicians near you in Dubai.",
  keywords: "AC service Dubai, AC repair Dubai, air conditioning maintenance, AC cleaning Dubai, emergency AC repair, AC repair near me",
  author: "FAJ Technical Services L.L.C.", businessName: "FAJ Air Conditioning Services",
  url: "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/",
  image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac-repair-new-design-images/ac-service-top-image/public",
  serviceType: ["AC Inspection", "AC Repair", "AC Cleaning", "AC Maintenance", "AC Installation"],
  areaServed: ["Dubai", "Sharjah", "Abu Dhabi"],
  breadcrumbs: [
    { name: "Home", url: "https://www.fajservices.ae/" },
    { name: "Services", url: "https://www.fajservices.ae/services/" },
    { name: "Air Conditioning Repair", url: "https://www.fajservices.ae/services/air-conditioning-repair/" },
    { name: "AC Service", url: "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/" },
  ],
};

const contactData = { phone: "971507464712", phoneDisplay: "+971 50 746 4712", whatsapp: "971507464712", email: "info@fajservices.ae" };

const heroData = {
  title: "BEST AC REPAIR AND MAINTENANCE SERVICES",
  subtitle: "",
  paragraphs: [
    "Improve the comfort of your home and business premises with air conditioning cooling system. Maintain a perfect temperature year-round with our expert AC technicians.",
  ],
  highlights: [
    {
      icon: "clock",
      title: "Serving since 2010",
      description: "Established local service provider",
    },
    {
      icon: "home",
      title: "Domestic to Commercial",
      description: "Established local service provider",
    },
    {
      icon: "location",
      title: "Dubai Service Coverage",
      description: "Established local service provider",
    },
  ],
  primaryAction: "Get a Quick Quote",
  secondaryAction: "WhatsApp Expert",
  bookingLabel: "AC Inspection Service",
  showCall: false,
  showPhone: false,
  image: {
    id: "ac-service-page/ac-repair-top-hero-banner",
    src: "/img/ac-service-page/ac-repair-top-hero-banner.webp",
    alt: "Best AC Repair and Maintenance Services in Dubai",
    width: 733,
    height: 550,
  },
};

const overviewData = {
  title: "RELIABLE AC SERVICES FOR YOUR COMFORT",
  paragraphs: [
    "High energy bills and inefficient cooling can result from improper or irregular maintenance of AC systems. This is why regular AC maintenance is important to avoid unnecessary expenses in the future.",
    {
      parts: [
        "To help you maintain your comfort and prevent any problems, ",
        { strong: true, text: "FAJ Technical Services L.L.C" },
        " offers for ",
        { strong: true, text: "home, office, and commercial" },
        " affordable ",
        { strong: true, text: "AC Repair, AC cleaning, AC Service, and AC repair" },
        " service near you. Our goal is to ensure your AC system operates efficiently and minimises energy consumption.",
      ],
    },
  ],
};

const pricingData = {
  eyebrow: "Transparent Service Options",
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
              "Check the functionality of actuator valves",
              "Check the blowers and clean if proper access is available",
              "Check the insulation on the pipeline; if damaged, recommend for replacement (Additional cost for replacement of insulation)",
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
              "*Starting from AED 325 AC Maintenance charge applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },
  ],
};

const contractsData = {
  id: "amc-packages",
  eyebrow: "Preventive Protection",
  title: "Air Conditioning Maintenance Contracts",
  description:
    "Choose a planned AC maintenance schedule based on property size, unit type, operating hours and response priorities.",
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
    "Terms and conditions apply. Custom packages are available for villas, offices, commercial buildings and multi-site facilities.",
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  eyebrow: "Proven HVAC Expertise",
  title: "Our AC Repair & Service",
  description:
    "When looking for AC repair & service in Dubai, choose a qualified and reputable company that meets your residential or commercial needs.",
  paragraphs: [
    "FAJ Skilled AC technicians can quickly diagnose issues, providing your HVAC system runs efficiently. This improves comfort during hot months and reduces Dewa bill costs, providing peace of mind with your AC cooling solutions.",
  ],
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician servicing a commercial cassette air conditioner in Dubai",
    width: 853,
    height: 853,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonSignsData = {
  id: "ac-maintenance-signs",
  eyebrow: "Diagnostic Indicators",
  title: "Top Common Signs That You Need AC Maintenance",
  intro:
    "If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.",
  items: [
    { title: "AC Not Cooling Signs" },
    { title: "Water Leaking from your AC" },
    { title: "AC Motor not working" },
    { title: "AC compressor is not cooling" },
    { title: "AC Thermostat not working" },
    {
      title: "High AC electricity (DEWA) bills",
      href: "https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling",
      external: true,
    },
  ],
};

const videoData = {
  id: "ac-service-video",
  eyebrow: "Same-Day Emergency Support",
  title: "Our Express and Emergency AC Repair Service in Dubai",
  description:
    "If you are facing any problem in your air conditioning service at home or in your business, especially during the summer time, our same day and express AC repair service is here to help. Get the fastest best AC repair service in Dubai today. Contact us for a quote or to schedule your emergency AC repair appointment.",
  frameTitle: "Air-conditioning repair and maintenance service video",
  videoId: "prUR0-lZlzg",
  image: {
    id: "indoor-ac-servicing",
    src: "/img/indoor-ac-servicing.webp",
    alt: "FAJ AC technician providing express and emergency AC repair in Dubai",
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

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  eyebrow: "Crucial Prevention",
  title: "Why is AC Maintenance Important in Dubai, UAE?",
  description:
    "Regular AC maintenance and services in Dubai are necessary for optimal performance. FAJ offers complete AC cleaning services to keep your AC system running efficiently. With our proactive process, you can feel confident that AC is working at its best. If you need AC maintenance and air conditioning service near you, contact us.",
  imageSide: "left",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "AC Maintenance in Dubai",
    width: 600,
    height: 400,
  },
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE",
  items: [
    {
      icon: "ac-sun",
      badge: "Extreme Climate",
      title: "Dubai Hot Weather",
      description:
        "In hot Dubai Summer where temperature increases above 40°C (104°F) Regular AC maintenance keeps it efficient during these conditions.",
    },
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Energy Efficiency",
      description:
        "A well-maintained AC operates more efficiently, using less energy and lowering both AC electricity bills.",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Longevity of AC Unit",
      description: {
        parts: [
          "Regular AC maintenance can extend your air conditioning unit's lifespan, reducing the need for costly repair work and Genuine ",
          {
            text: "AC spare parts",
            strong: true,
            href: "https://www.fajtradingllc.com/collections/ac-spare-parts",
            external: true,
          },
          " replacements, ultimately saving you money.",
        ],
      },
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Improved Air Quality",
      description:
        "Regular AC unit & AC duct cleaning service & maintenance keep dust and allergens from building up, ensuring cleaner air.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Improved Comfort",
      description: {
        parts: [
          "Regular ",
          {
            text: "AC servicing",
            strong: true,
            href: "https://www.youtube.com/watch?v=pkO_jobGdBo",
            external: true,
          },
          " in Dubai ensures comfort, efficiency, and even cooling daily.",
        ],
      },
    },
  ],
};

const commonProblemsData = {
  eyebrow: "Troubleshooting Path",
  title: "Most Common AC Problems That May Require Maintenance",
  description: "",
  items: [
    { title: "High Humidity Levels", description: "An air conditioning unit that doesn't reduce indoor humidity may have cooling capacity issues or operate improperly." },
    { title: "Leaking Water", description: "Water pooling around the AC or dripping from vents may signal a blocked drain, frozen coils, or other serious issues." },
    { title: "Increased Energy Bills", description: "High DEWA bills without increased usage may signal AC inefficiencies from dirty filters, AC duct leaks, or other issues." },
    { title: "Weak Airflow", description: "Reduced airflow from your AC duct may signal problems like a blocked filter or a faulty AC motor." },
    { title: "Warm Air", description: "If your AC blows warm or room temperature air instead of cold, it could indicate AC compressor, gas, or duct work issues requiring fix." },
    { title: "Strange Noises", description: "Unusual sounds such as grinding, squealing, or banging from your AC motor can indicate problems that require attention." },
    { title: "Foul Odors", description: "Unpleasant odors coming from the vents might indicate the presence of mold or mildew, which requires immediate attention." },
    { title: "Frequent Cycling", description: "It may indicate issues with maintaining desired AC temperatures, such as dirty filters, low refrigerant, or a faulty thermostat." },
  ],
};

const servicesOfferedData = {
  id: "ac-services-offered",
  eyebrow: "Seamless Process",
  title: "How to use FAJ AC Service and AC Repair in Dubai?",
  description:
    "Are you searching for reliable air conditioning services in Dubai? FAJ Technical Services L.L.C provides excellent AC repair and AC cleaning service right at your doorstep. Our team of experts is committed to providing your comfort with excellent service.",
  imageSide: "left",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "FAJ AC Service and AC Repair technician servicing air conditioning in Dubai",
    width: 600,
    height: 400,
  },
};

const servicesOfferedCardsData = {
  id: "ac-services-offered-cards",
  title: "OUR SERVICES IN DUBAI",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair in Dubai for Improved Performance",
      description:
        "Is your AC not cooling effectively? Our AC technicians can diagnose and fix AC errors.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "ac-cleaning",
      title: "Regular AC Cleaning for Maximum Efficiency",
      description:
        "For optimal performance, keep your AC cleaning. We offer AC duct cleaning and filters for fresh, healthy air.",
      actionLabel: "Book AC Cleaning",
    },
    {
      icon: "file-cog",
      title: "Essential AC Maintenance Service Dubai",
      description:
        "Regular AC maintenance is necessary. Our services help prepare your AC for the summer heat.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "Assistance with New AC Installation",
      description: {
        parts: [
          "Upgrading to a ",
          {
            text: "New AC",
            strong: true,
            href: "https://www.fajtradingllc.com/collections/air-conditioners",
            external: true,
          },
          " unit? Let our AC experts handle the selection, installation, and testing!",
        ],
      },
      actionLabel: "Request AC Installation",
    },
    {
      icon: "phone-support",
      title: "Emergency AC Repair in Dubai",
      description:
        "Experiencing unexpected AC breakdowns? Our 7-day emergency AC repairs is available to provide quick service.",
      actionLabel: "Get Urgent Help",
    },
    {
      icon: "ac-summer",
      title: "AC Service Dubai Available Near Me Before Summer",
      description:
        "Get ready for summer! Schedule your AC tune up to ensure comfort during the heat.",
      actionLabel: "Book AC Service",
    },
  ],
  bottomTitle: "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "https://www.facebook.com/reel/1726225512069096",
        external: true,
      },
      " and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!",
    ],
  },
  showCta: true,
  cta: {
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const benefitsData = {
  eyebrow: "Preventive Maintenance Outcomes", 
  title: "Benefits Of Regular AC Service and Maintenance in Dubai",
  description: "",
  stats: [{ value: "2010", label: "Serving the UAE Since" }, { value: "7-Day", label: "Support Available" }],
  benefits: [
    { id: "ac-cooling", number: "01", title: "Cooling Efficiency", description: "We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.", icon: "snowflake" },
    { id: "ac-air-quality", number: "02", title: "Improved Air Quality", description: "Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.", icon: "ac-air-filter" },
    { id: "ac-inspection", number: "03", title: "Complete Inspection", description: "An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.", icon: "diagnostics" },
    { id: "ac-thermostat", number: "04", title: "Thermostat Check", description: "We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.", icon: "ac-thermostat" },
    { id: "ac-airflow", number: "05", title: "Airflow Balance", description: "We ensure optimal airflow from your air conditioning system in each room as needed.", icon: "wind" },
    { id: "ac-feedback", number: "06", title: "Customer Feedback", description: "Our team provides essential feedback on your air conditioning health and any necessary repair.", icon: "customer-feedback" },
  ],
};

const cleaningServiceData = {
  id: "ac-cleaning-service-overview",
  eyebrow: "Top-Rated Choice",
  title: "Best AC Cleaning & AC Service in Dubai and Sharjah",
  description:
    "Discover top-rated AC cleaning, maintenance, and air conditioner repair services in Dubai. Keep your space cool and comfortable with professional solutions tailored to your needs.",
  imageSide: "right",
  image: {
    id: "ac-service-page/best-ac-service",
    src: "/img/ac-service-page/best-ac-service.webp",
    alt: "AC Maintenance in Dubai",
    width: 600,
    height: 400,
  },
};

const cleaningServiceCardsData = {
  id: "ac-cleaning-service-cards",
  title: "WHY REGULAR AC CLEANING IS ESSENTIAL",
  wide: true,
  cards: [
    {
      title: "Key to the Best AC Cleaning Services Near You",
      paragraphs: [
        "If you are looking for the best AC deep cleaning and services in Dubai and Sharjah, consider the following key aspects:",
      ],
      bulletColumns: 1,
      bullets: [
        {
          title: "Residential & Office AC Cleaning and Service",
          text:
            "Regular, professional maintenance is essential for stopping dust, bacteria, and allergens to provide safe, breathable air.",
        },
        {
          title: "Commercial / HVAC Cleaning",
          text:
            "Specialised cleaning for large systems involves removing debris from ductwork and air handling units, often in accordance with ventilation hygiene standards.",
        },
      ],
    },
    {
      title: "Key Benefits",
      variant: "cyan-tint",
      paragraphs: [
        "Regular coils cleaning, air filter cleaning, duct cleaning lowers electricity bills, extends the lifespan of equipment, prevents breakdowns, and eliminates unpleasant odours.",
      ],
      sections: [
        {
          title: "Signs Your AC Needs Cleaning",
          bulletColumns: 1,
          noDivider: true,
          bullets: [
            "Noticeably reduced airflow.",
            "Visible dust accumulation around vents.",
            "Unusual or musty odors.",
            "Increased DEWA bills.",
          ],
        },
      ],
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-faj-ac", 
  eyebrow: "The FAJ Guarantee", 
  title: "CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!",
  description: "",
  items: [
    { icon: "shield-check", badge: "Fast, Reliable Service", title: "Reliable, Priority, and Quick", description: "You can count on efficient service! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly." },
    { icon: "peace-of-mind", badge: "Expert Planned Care", title: "Feeling Of Calm", description: "With annual maintenance contract, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind." },
    { icon: "git-branch", badge: "Flexible Scheduling", title: "You Are in Control", description: "Choose a day and time for your AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive." },
    { icon: "rosette-check", badge: "System Experience", title: "We Are Experts", description: "We are experts in AC repair. This is why most major brands trust us to handle their service and maintenance needs." },
    { icon: "shield-dollar", badge: "Customer Value", title: "Great Value", description: "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices." },
    { icon: "clean-handshake", badge: "Dependable Care", title: "Trustworthy", description: "Our skilled AC technicians are highly trained, and we provide excellent service for a variety of major AC brands efficiently." },
  ],
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

const beforeAfterData = {
  id: "recent-completed-service",
  eyebrow: "Before & After Service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Air conditioning unit before service",
  beforeImage: {
    id: "before_img_1",
    src: "/img/before_img_1.webp",
  },
  afterLabel: "After",
  afterAlt: "Air conditioning unit after service",
  afterImage: {
    id: "after_img_1",
    src: "/img/after_img_1.webp",
  },
};

const brandsData = {
  eyebrow: "Multi-Brand Expertise",
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
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "COMMON AC COMPONENT FAILURES & EXPERT REPAIR SOLUTIONS",

  columns: [
    {
      title: "Key AC Spare Parts Weak to Damage from Dubai’s Summer Weather:",
      items: [
        {
          title: "AC Compressor Replacement",
          text:
            "As the “heart” of the AC, high heat and overworking can lead to overheating, gas blockage, liquid slugging, low gas levels, electrical issues, a clogged filter, and complete failure. Contact us for AC compressor replacement and testing.",
        },
        {
          title: "AC Capacitors / Contactors",
          text:
            "These electrical AC parts, responsible for starting the AC motor and fan, often fail due to extreme heat and constant operation.",
        },
        {
          title: "AC Air Filters",
          text:
            "A dirty AC unit or a clogged filter hinders airflow, making the system overwork and risk overheating.",
        },
        {
          title: "AC Coils Evaporator & Condenser Coils",
          text:
            "Dirt accumulation reduces heat exchange efficiency, while limited airflow can cause the evaporator coil to freeze.",
        },
        {
          title: "AC Motors",
          text:
            "Ongoing process can cause burnout or damage to the AC motor bearings, often indicated by greasy residue on the HVAC motor.",
        },
        {
          title: "AC Electrical Connections",
          text:
            "Excessive heat can damage insulation, while overuse can result in loose or damaged wiring, leading to short circuits.",
        },
      ],
    },

    {
      title: "Key AC Repair Services & Common Issues",
      items: [
        {
          title: "Emergency AC Repair",
          text:
            "Urgent 7-day AC repair and service for breakdowns is available from providers like FAJ Technical Services L.L.C and AC Repairman.",
        },
        {
          title: "AC (Gas) Refrigerant Issues",
          text:
            "Repairing AC gas leaks in AC units and AC gas filling to repair cooling efficiency is offered by FAJ.",
        },
        {
          title: "AC Spare Parts Repair / Replacement",
          text:
            "Fixing of AC compressors, AC condenser coils, AC motors or AC thermostat.",
        },
        {
          title: "AC Electrical Issues",
          text:
            "Addressing faulty AC thermostats, AC sensors, and AC (PCB) control modules.",
        },
        {
          title: "AC Airflow / Noise Problems",
          text:
            "Fixing AC fan motors, AC clearing dust, and AC coils cleaning",
        },
      ],
    },
  ],

  footerNote: {
    label: "Air Conditioning Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },

  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const galleryData = {
  id: "ac-service-gallery",
  eyebrow: "Our Work Portfolio",
  title: "Gallery",
  description:
    "A glimpse into our professional AC maintenance, repair, and cleaning services delivered across Dubai.",
  itemEyebrow: "",
  items: [
    {
      title: "AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Ac Service",
      width: 400,
      height: 300,
    },
    {
      title: "AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "AC Repair",
      width: 400,
      height: 300,
    },
    {
      title: "AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "AC Maintenance",
      width: 400,
      height: 300,
    },
    {
      title: "AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "AC Cleaning",
      width: 400,
      height: 300,
    },
    {
      title: "AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "AC Fixing",
      width: 400,
      height: 300,
    },
    {
      title: "AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "AC Gas Filling",
      width: 400,
      height: 300,
    },
  ],
};

const energyTipsData = {
  id: "ac-energy-saving-tips",
  title: "UAE: 7 Tips to Reduce AC Bills This Summer",
  description:
    "Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!",
  actionLabel: "Click Here to Save on Energy Bills",
  actionHref:
    "https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf?_gl=1*z9moda*_gcl_au*MzM3NzA5OTEzLjE3ODM0ODU0NTIuLS4tLjE3ODQ4NjgxOTEuMTAzMTEyODcyNi4xNzg4NDA4NTUwLjE3ODg0MjIxMjk.*_ga*MTMwNTA4NDIzMC4xNzgzNDg1NDUy*_ga_MK15Z3F4GD*czE3ODg0MjU4NjMkbzEyMiRnMSR0MTc4ODQyNzI1OSRqNjAkbDAkaDA.",
  openInNewTab: true,
};

const repairPriceData = {
  id: "ac-service-pricing-banner",
  title:
    "How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance?",
  description: "",
  actionLabel: "Check Here For Price",
  actionHref: "/dubai-ac-service-price-list/",
  openInNewTab: false,
};

const testimonialsData = {
  id: "ac-service-reviews", eyebrow: "Direct Testimonials", title: "What Our Clients Say", description: "Customer feedback on FAJ air-conditioning repair and maintenance services.",
  items: [
    { icon: "award", badge: "5-Star Review", title: "Sara Malik", subtitle: "Resident", description: "FAJ provided professional split AC service for my apartment. The team was skilled, cleaned everything properly, and restored cooling performance. Very satisfied with their quick and reliable service in Dubai." },
    { icon: "award", badge: "5-Star Review", title: "Al Mansoori", subtitle: "Resident", description: "Great experience with FAJ’s air conditioner service. The technicians were professional, friendly, and checked everything thoroughly. My AC is running smoothly again. Excellent service in Dubai, highly recommended!" },
    { icon: "award", badge: "5-Star Review", title: "Arjun Kumar", subtitle: "Resident", description: "I booked FAJ for HVAC services in Dubai, and it was excellent. The technicians were skilled, reliable, and carried out the work with great attention to detail." },
    { icon: "award", badge: "5-Star Review", title: "Shazia Sheikh", subtitle: "Homeowner", description: "FAJ delivered great AC technical services. Their team was polite, professional, and fixed my cooling issue quickly. Excellent service overall, I will continue using them for future AC problems." },
    { icon: "award", badge: "5-Star Review", title: "Ravi Mehta", subtitle: "Resident", description: "I used FAJ for AC cleaning service, and it really improved my air quality. The team worked efficiently, cleaned every part, and made my AC run like new again." },
    { icon: "award", badge: "5-Star Review", title: "Waseem Aqdas", subtitle: "Homeowner", description: "Outstanding service from FAJ Technical! My AC wasn't cooling properly, but FAJ Technical came to the rescue. Quick response, friendly technician, and now my AC works perfectly. I highly recommend them!" },
  ],
};

const newsData = {
  id: "ac-news",
  eyebrow: "Air Conditioning Guides",
  title: "NEWS & UPDATES",
  description:
    "Explore the latest expert insights, practical advice, and maintenance tips from our certified AC specialists in Dubai.",
  items: [
    {
      icon: "certified-expert",
      badge: "28 May",
      image: "blogs/AC-problems-and-how-to-fix-them",
      title: "10 Common AC Problems and How to Fix Them - Expert Guide",
      subtitle: "Admin • 5 Comments",
      description:
        "A properly functioning air conditioning system is essential for various settings, including homes, offices, and individual spaces. According to HVAC Webmasters, over 70%",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read Article",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin • 4 Comments",
      description:
        "Air conditioning is excellent for keeping you comfortable indoors but can be expensive. But there is no need to worry, there are some ways to reduce AC electric bill with",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read Article",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin • 0 Comments",
      description:
        "As the temperatures rise and summer approaches, the desire for a cool and comfortable escape within your home intensifies. Air conditioning offers a seemingly simple solu",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read Article",
    },
  ],
  footer: {
    parts: [
      "Explore more expert tips, seasonal maintenance guides, and HVAC advice in our blog. ",
      {
        text: "View All Articles →",
        strong: true,
        href: "/blogs/",
      },
    ],
  },
};

const faqsData = {
  id: "ac-service-faqs", eyebrow: "Have Questions?", title: "AC Repair and Maintenance FAQs",
  description: "Answers about AC servicing, cleaning, cooling faults and maintenance in Dubai.",
  items: [
    { question: "How much is AC service in Dubai?", answer: "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service. Prices vary based on the unit's size and condition, as well as the service provider." },
    { question: "Why is my AC not cooling in Dubai?", answer: "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor. A professional technician can diagnose and resolve the issue quickly." },
    { question: "Why is AC repair so expensive?", answer: "AC repairs can be expensive due to the high cost of parts (like compressors or coils) and specialized labor. The complexity of the repairs and Dubai’s climate, which demands frequent AC use, also adds to the cost." },
    { question: "Why is my AC giving cool air but not cooling?", answer: "If your AC is blowing cool air but not cooling the room, it could be due to issues like low refrigerant or clogged filters. A technician can fix this with a proper inspection and maintenance." },
    { question: "How often should AC be cleaned in Dubai?", answer: "AC units in Dubai should be cleaned every 3-6 months due to high okay dust levels in the environment. More frequent cleaning may be necessary for homes in dusty areas or with heavy AC use." },
    { question: "Which company is best for central AC?", answer: "FAJ Technical Services L.L.C. is one of the best companies for central AC services in Dubai. We offer reliable, professional services to ensure your system runs efficiently." },
    { question: "What maintenance is needed for AC?", answer: "AC maintenance includes tasks like cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines. Regular upkeep ensures your system runs efficiently and prolongs its lifespan." },
    { question: "How can I maintain my AC?", answer: "Maintain your AC by regularly cleaning or replacing filters, checking for airflow issues, and scheduling professional servicing every 6 months. This helps to improve performance and prevent costly repairs." },
    { question: "What is routine AC maintenance?", answer: "Routine AC maintenance typically involves cleaning filters, inspecting the refrigerant, cleaning the coils, and checking the system’s overall performance. Regular maintenance keeps your AC running smoothly." },
    { question: "How do I fix my air conditioner that is not cooling?", answer: "To fix an AC not cooling, check the thermostat, clean or replace the air filter, and ensure the outdoor unit is clear. If issues persist, inspect refrigerant levels, ice buildup, or compressor issues—contact a professional if needed." },
    { question: "How often should an air conditioner be serviced?", answer: "An air conditioner should be serviced at least once a year to maintain optimal performance. In hot climates like Dubai, servicing every 6 months is recommended to ensure efficiency and extend the unit's lifespan." },
    { question: "Is AC duct cleaning important in Dubai?", answer: "Yes, AC duct cleaning is important in Dubai as it improves indoor air quality, increases system efficiency, and prevents the build-up of dust and allergens. Regular cleaning helps your AC perform better." },
    { question: "Is AC duct cleaning worth it?", answer: "Yes, AC duct cleaning is worth it because it enhances air quality, improves the performance of your system, and helps extend the life of your AC unit. It’s a cost-effective investment for long-term benefits." },
    { question: "How often should AC ducts be cleaned?", answer: "AC ducts should be cleaned every 2-3 years, or more frequently if you notice dust accumulation, poor airflow, or a musty smell. Regular cleaning ensures better air quality and system efficiency." },
    { question: "Is emergency AC repair available in Dubai?", answer: "Yes, many AC companies in Dubai provide emergency AC repair services. FAJ Technical Services L.L.C. offers fast emergency AC repair and same-day AC services as per your requirement." },
    { question: "How fast can an AC technician reach my home in Dubai?", answer: "Most companies like FAJ Services can send a technician within 30 to 90 minutes, depending on your location, technician availability, and service schedule." },
    { question: "What is the best AC system for villas in Dubai?", answer: "Central AC systems are usually one of the best choices for villas because they provide efficient and consistent cooling throughout the entire property." },
    { question: "What is the VRF air conditioning system?", answer: "A VRF system is an energy-efficient air conditioning solution that allows different rooms or zones to be cooled independently, giving better comfort and control." },
    { question: "What is the best AC system for commercial buildings?", answer: "VRF systems and centralized HVAC systems are popular choices for commercial buildings because they offer strong cooling performance, energy efficiency, and scalability." },
    { question: "Which is the best HVAC contractor near me?", answer: "The best HVAC contractor should be a licensed company with positive customer reviews, fair pricing, skilled technicians, and reliable support. FAJ Technical Services L.L.C. has been a trusted company based in Dubai since 2010." },
    { question: "How to book an AC technician near my location?", answer: "You can book an AC technician near your location by contacting a local AC company by phone or through their website and scheduling a service appointment at your preferred time." },
  ],
};

const bookingData = {
  eyebrow: "BOOK YOUR SERVICE",
  title: "REQUEST AC SERVICE",
  description:
    "Book your AC service appointment with our expert team. We provide professional AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    eyebrow: "Request AC support",
    description:
      "Enter your details and continue through WhatsApp to request AC repair, cleaning, maintenance or AMC coverage.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request AC service:",
  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export const seo = seoData;
export const contact = contactData;
export const hero = heroData;
export const overview = overviewData;
export const pricing = pricingData;
export const contracts = contractsData;
export const serviceOverview = serviceOverviewData;
export const commonSigns = commonSignsData;
export const video = videoData;
export const maintenanceImportance = maintenanceImportanceData;
export const maintenanceImportanceCards = maintenanceImportanceCardsData;
export const commonProblems = commonProblemsData;
export const servicesOffered = servicesOfferedData;
export const servicesOfferedCards = servicesOfferedCardsData;
export const benefits = benefitsData;
export const cleaningService = cleaningServiceData;
export const cleaningServiceCards = cleaningServiceCardsData;
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

export {
  seoData, contactData, heroData, overviewData, pricingData, contractsData,
  serviceOverviewData, commonSignsData, videoData, maintenanceImportanceData,
  maintenanceImportanceCardsData, commonProblemsData,
  servicesOfferedData, servicesOfferedCardsData, benefitsData, cleaningServiceData,
  cleaningServiceCardsData, whyChooseUsData, beforeAfterData,
  brandsData, sparePartsRepairData, galleryData, energyTipsData, repairPriceData,
  testimonialsData, newsData, faqsData, bookingData
};

const acServiceData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  overview: overviewData,
  pricing: pricingData,
  contracts: contractsData,
  serviceOverview: serviceOverviewData,
  commonSigns: commonSignsData,
  video: videoData,
  maintenanceImportance: maintenanceImportanceData,
  maintenanceImportanceCards: maintenanceImportanceCardsData,
  commonProblems: commonProblemsData,
  servicesOffered: servicesOfferedData,
  servicesOfferedCards: servicesOfferedCardsData,
  benefits: benefitsData,
  cleaningService: cleaningServiceData,
  cleaningServiceCards: cleaningServiceCardsData,
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

export default acServiceData;
