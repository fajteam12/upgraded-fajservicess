import acCoverageLocations106 from "../../../acCoverageLocations106.js";
import heroData from "./heroData";
import faqsData from "./faqsData";
import contractsData from "./contractsData";
import pricingData from "./pricingData";
import repairPriceData from "./repairPriceData";
import energyTipsData from "./energyTipsData";
import testimonialsData from "./testimonialsData";

const seoData = {
  title: "Daikin Air Conditioning | Daikin AC Repair & Maintenance Services",
  description:
    "FAJ technicians specialise in Daikin AC repair and VRV systems, as well as ducted split systems, utilising Daikin maintenance service for all repairs Dubai",
  keywords:
    "Daikin AC Repair in Dubai, Daikin Air Conditioner Maintenance, Daikin AC Service, Daikin Air Conditioning Repair, Daikin AC Fix, Daikin Air Conditioner Service, Daikin AC Cleaning, Daikin Air Conditioner Installation",
  canonical:
    "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/",
  author: "FAJ Technical Services L.L.C",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Daikin Air Conditioning | Daikin AC Repair & Maintenance Services",
    description:
      "FAJ technicians specialise in Daikin AC repair and VRV systems, as well as ducted split systems, utilising Daikin maintenance service for all repairs Dubai",
    url: "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daikin Air Conditioning | Daikin AC Repair & Maintenance Services",
    description:
      "FAJ technicians specialise in Daikin AC repair and VRV systems, as well as ducted split systems, utilising Daikin maintenance service for all repairs Dubai",
    image:
      "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public",
  },
};

const contactData = {
  phone: "971507464712",
  phoneDisplay: "+971 50 746 4712",
  whatsapp: "971507464712",
  email: "info@fajservices.ae",
};

const overviewData = {
  id: "overview",
  paragraphs: [
    "Our team of Daikin AC professionals is highly skilled and knowledgeable, ensuring they meet the highest industry standards. They will arrive at your residence or commercial premises fully equipped to handle any maintenance task related to Daikin air conditioning. Additionally, we offer tailored service and maintenance packages to suit your business needs.",
  ],
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const areaOverviewData = {
  id: "daikin-ac-services",
  title: "Daikin AC Maintenance and Servicing",
  paragraphs: [
    "When it comes to Daikin air conditioner repairs, it's vital to choose a professional and dependable technician for your home or office. We are the experts in Daikin AC repair , service, and maintenance across Dubai and Sharjah. Count the FAJ team to deliver exceptional service and ensure your comfort throughout the year.",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/how-to-use-faj-ac-service",
    src: "/img/ac-service-page/how-to-use-faj-ac-service.webp",
    alt: "Who provides the best Daikin AC repair services in Dubai?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const commonSignsData = {
  id: "daikin-ac-maintenance-signs",
  title: "Top Common Signs That You Need Daikin AC Maintenance",
  intro:
    "If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.",
  items: [
    {
      title: "AC Not Cooling Signs",
    },
    {
      title: "AC Motor not working",
    },
    {
      title: "AC Thermostat not working",
    },
    {
      title: "Water Leaking from your AC",
    },
    {
      title: "AC compressor is not cooling",
    },
    {
      title: "High AC electricity (DEWA) bills",
      href:
        "https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling",
      external: true,
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const serviceOverviewData = {
  id: "ac-repair-service-overview",
  title: "Why Is My AC Not Cooling?",
  description:
    "A cooling problem is one of the most common AC problems in Dubai. In case you notice your AC is running but not cooling properly, there are several factors that may be responsible.",
  listTitle: "Common causes include:",
  checklist: [
    "Dirty air filters",
    "Low refrigerant gas",
    "Blocked condenser coils",
    "Faulty thermostat",
    "Compressor problems",
    "Electrical faults",
    "Restricted airflow",
  ],
  conclusion:
    "A professional AC inspection can identify the exact cause and prevent further damage to the system.",
  imageSide: "left",
  image: {
    id: "ac-service-page/ac-repair-and-service",
    src: "/img/ac-service-page/ac-repair-and-service.webp",
    alt: "FAJ technician servicing air conditioning in Dubai",
    width: 853,
    height: 853,
  },
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const servicesOfferedCardsData = {
  id: "ac-services-offered-cards",
  title: "HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS",
  items: [
    {
      icon: "ac-wrench",
      title: "AC Repair Service",
      description:
        "Professional AC repair services for homes and businesses. We fix cooling issues, leaks, compressor faults and electrical problems. Fast response, experienced technicians and reliable service across Dubai.",
      actionLabel: "Request AC Repair",
    },
    {
      icon: "file-cog",
      title: "AC Maintenance Service",
      description:
        "Routine maintenance service helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your AC system. Your AC runs better in extreme Dubai heat with regular maintenance service.",
      actionLabel: "Plan AC Maintenance",
    },
    {
      icon: "arrow-down-circle",
      title: "AC Installation Service",
      description:
        "We provide expert installation for all AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation.",
      actionLabel: "Request AC Installation",
    },
    {
      icon: "ac-cleaning",
      title: "AC Cleaning Services",
      description:
        "Professional AC cleaning removes dust, dirt and bacteria from filters, coils and drains. It improves airflow, helps your AC cool faster and keeps indoor air fresh and healthy for your family and home.",
      actionLabel: "Book AC Cleaning",
    },
    {
      icon: "peace-of-mind",
      title: "Annual Maintenance Contract (AMC)",
      description:
        "Our AMC plans include regular inspections. They also include preventive maintenance and priority support. We provide scheduled servicing throughout the year. It helps you avoid unexpected repair costs.",
      actionLabel: "View AMC Plans",
    },
  ],
  bottomTitle:
    "Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!",
  bottomDescription: {
    parts: [
      "For reliable ",
      {
        text: "AC service",
        href: "https://www.youtube.com/watch?v=pkO_jobGdBo",
        external: true,
      },
      " and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!",
    ],
  },
  showCta: false,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceData = {
  id: "ac-maintenance-importance",
  title: "Why is Daikin AC Maintenance Service Important in Dubai?",
  paragraphs: [
    "To keep your Daikin air conditioner running efficiently in Dubai, regular AC maintenance is key. At FAJ, our experienced team is here to ensure your comfort. For convenient AC maintenance in your area, contact us!",
  ],
  imageSide: "right",
  image: {
    id: "ac-service-page/why-ac-maintenance-important",
    src: "/img/ac-service-page/why-ac-maintenance-important.webp",
    alt: "Why is AC Maintenance Service Important in Dubai?",
    width: 600,
    height: 400,
  },
  showCta: true,
  cta: {
    phone: "",
    whatsapp: "https://api.whatsapp.com/send?phone=+971507464712&text=Hello",
  },
};

const maintenanceImportanceCardsData = {
  id: "ac-maintenance-importance-cards",
  title: "KEY BENEFITS OF REGULAR AC MAINTENANCE IN DUBAI",
  items: [
    {
      icon: "ac-sun",
      badge: "Extreme Climate",
      title: "Extreme Weather",
      description:
        "The temperature gets very hot in summer over 40°C. We need to take care of our air conditioners so they work properly when it is this hot.",
    },
    {
      icon: "zap",
      badge: "Lower Consumption",
      title: "Energy Efficiency",
      description:
        "If we take care of our air conditioner it will use less energy and our electricity bills will be lower.",
    },
    {
      icon: "ac-fan",
      badge: "Protect Equipment",
      title: "Longevity of Equipment",
      description:
        "Taking care of our air conditioner will make it last longer so we will not have to spend a lot of money to fix it or buy a new one.",
    },
    {
      icon: "wind",
      badge: "Healthier Spaces",
      title: "Improved Air Quality",
      description:
        "Regular maintenance helps keep our air clean by removing dust and things that can make us sick.",
    },
    {
      icon: "peace-of-mind",
      badge: "Consistent Cooling",
      title: "Enhanced Comfort",
      description:
        "The air conditioning service in Dubai makes sure our air conditioners are clean and work well every day so we can be comfortable.",
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const commonProblemsData = {
  title: "Common AC Problems That May Require Maintenance",
  description: "",
  items: [
    {
      title: "Weak Airflow",
      description:
        "If you feel that the air coming from your vents is not strong it could be a problem with your AC system, like a filter or a fan that is not working properly.",
    },
    {
      title: "Warm Air",
      description:
        "Whether your air conditioner system is blowing air that's not cold could be a problem with the compressor, the refrigerant, or the ducts of your AC unit.",
    },
    {
      title: "Strange Noises",
      description:
        "If you hear sounds like grinding, squealing or banging coming from your AC it could mean that something is wrong with the machine and it needs to be fixed.",
    },
    {
      title: "Foul Odors",
      description:
        "In case you smell something musty coming from the vents it could be because of mold or mildew growing inside the system and you need to take care of it fast.",
    },
    {
      title: "Frequent Cycling",
      description:
        "In case your AC turns on and off too often, the reason may be that the filters are dirty or the thermostat may be faulty. Get it looked at before it breaks down.",
    },
    {
      title: "High Humidity Levels",
      description:
        "In case your room feels sticky, your air conditioner may not be removing moisture properly. It means it needs attention from a professional technician near you.",
    },
    {
      title: "Leaking Water",
      description:
        "If you see water around your air conditioner or coming from the vents, it could be because the drain is blocked, the coils are frozen or something else is wrong.",
    },
    {
      title: "Increased Energy Bills",
      description:
        "High energy bills without an increase in usage could indicate the inefficiency of your air conditioner due to dirty filters, duct leaks, or other problems.",
    },
  ],
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const videoData = {
  id: "ac-service-video",
  title: "Emergency AC Repair Service in Dubai",
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
    "We provide fast assistance for residential and commercial customers throughout Dubai and nearby areas.",
  description: [
    "A sudden AC breakdown can affect comfort, productivity, and indoor air quality.",
    "Our emergency AC repair service can help with: AC not cooling, AC not turning on, water leakage, electrical faults, thermostat issues, compressor failures, weak airflow, and unusual noises.",
    "We provide fast assistance for residential and commercial customers throughout Dubai and nearby areas.",
  ],
  frameTitle: "Air-conditioning repair and maintenance service video in Dubai",
  videoId: "prUR0-lZlzg",
  videoSide: "left",
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

const benefitsData = {
  title: "Benefits Of Regular Daikin AC Service and Maintenance in Dubai",
  city: "Dubai",
  stats: [
    {
      value: "2010",
      label: "Serving the UAE Since",
    },
    {
      value: "7-Day",
      label: "Support Available",
    },
  ],
  benefits: [
    {
      id: "daikin-cooling",
      number: "01",
      title: "COOLING EFFICIENCY",
      description:
        "We perform a thorough evaluation of Daikin cooling efficiency using calibrated laser temperature gauges.",
      icon: "snowflake",
    },
    {
      id: "daikin-air-quality",
      number: "02",
      title: "Improved Air Quality",
      description:
        "Pressure washing Daikin filters and coils removes dust and bacteria, delivering clean, healthy air.",
      icon: "ac-air-filter",
    },
    {
      id: "daikin-inspection",
      number: "03",
      title: "Complete Inspection",
      description:
        "A multi-point tune-up checking inverter electronics, electrical terminals, drain slopes, and refrigerant charge.",
      icon: "diagnostics",
    },
    {
      id: "daikin-thermostat",
      number: "04",
      title: "THERMOSTAT CHECK",
      description:
        "Testing thermostat accuracy and remote sensor responsiveness to ensure exact temperature control.",
      icon: "ac-thermostat",
    },
    {
      id: "daikin-airflow",
      number: "05",
      title: "AIRFLOW BALANCE",
      description:
        "Verifying optimal static pressure and airflow delivery across all ducted and split supply vents.",
      icon: "wind",
    },
    {
      id: "daikin-feedback",
      number: "06",
      title: "CUSTOMER FEEDBACK",
      description:
        "Our certified technicians provide a clear condition report detailing performance and preventive advice.",
      icon: "customer-feedback",
    },
  ],
};

const whyChooseUsData = {
  id: "why-choose-daikin-ac-service",
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
            external: true,
          },
          "! Our same-day repair or next-day service visits ensure that your needs are met quickly.",
        ],
      },
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
            href: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
          },
          ", you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.",
        ],
      },
    },
    {
      icon: "git-branch",
      badge: "Flexible Scheduling",
      title: "You Are in Control",
      description:
        "Choose a day and time for your Daikin AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.",
    },
    {
      icon: "rosette-check",
      badge: "System Experience",
      title: "We Are Experts",
      description:
        "We are experts in Daikin AC repair. This is why most major brands trust us to handle their service and maintenance needs.",
    },
    {
      icon: "shield-dollar",
      badge: "Customer Value",
      title: "Great Value",
      description:
        "We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.",
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
            external: true,
          },
          " are highly trained, and we provide excellent service for a variety of major AC brands efficiently.",
        ],
      },
    },
  ],
  showCta: false,
  cta: {
    phone: "",
    whatsapp: "",
  },
};

const beforeAfterData = {
  id: "recent-completed-service",
  title: "Recent Completed Service",
  description:
    "See the real results of our thorough Daikin air conditioning maintenance and deep cleaning service in Dubai.",
  beforeLabel: "Before",
  beforeAlt: "Daikin air conditioning unit before service",
  beforeImage: { id: "before_img_1", src: "/img/before_img_1.webp" },
  afterLabel: "After",
  afterAlt: "Daikin air conditioning unit after service",
  afterImage: { id: "after_img_1", src: "/img/after_img_1.webp" },
};

const sparePartsRepairData = {
  id: "ac-spare-parts-and-repair",
  title: "We Specialise in Daikin AC Services for the Following Types",
  columns: [
    {
      title: "Daikin Air Conditioning Systems Serviced Across Dubai:",
      items: [
        {
          title: "Daikin Split Air Conditioner Service",
          text: "FAJ provides dependable Daikin AC repair and maintenance services in Dubai. Our team consists of professionals specializing in Daikin split systems, Daikin VRV, and Daikin central air conditioning units.",
        },
        {
          title: "Daikin Central Air Conditioner Repair and Service",
          text: "FAJ is a Dubai-based service provider specializing in Daikin AC repair services. The company focuses on Daikin air conditioning systems and offers a range of services, including repairs and regular maintenance.",
        },
        {
          title: "Daikin AC Service and Repair",
          text: "Daikin AC service offers peace of mind with skilled professionals. At FAJ, we prioritize efficiency and reliability in all our work. Our expert team ensures that your air conditioning system operates at its best, whether you require maintenance, repairs, or installation. Trust us with your HVAC needs—your comfort is our highest priority.",
        },
        {
          title: "Daikin Inverter Air Conditioner Maintenance",
          text: "Rely on our expert team to swiftly address any issues with your Daikin air conditioner and restore its full functionality.",
        },
        {
          title: "Daikin HVAC Repair",
          text: "We have extensive knowledge of Daikin air conditioning systems, providing reliable repairs to ensure your unit operates efficiently.",
        },
      ],
    },
    {
      title: "Specialized Daikin AC Units & VRV Systems:",
      items: [
        {
          title: "Daikin Ceiling AC Service and Repair",
          text: "Our experts can accurately diagnose and fix any issues with your Daikin air conditioner.",
        },
        {
          title: "Daikin VRV (Variable Refrigerant Volume) System Service and Repair",
          text: "The Daikin VRV (Variable Refrigerant Volume) System repair and service ensures your peace of mind because you are in the right place. FAJ prioritizes efficiency and reliability.",
        },
        {
          title: "Daikin Ducted Split AC Service and Repair",
          text: "Daikin ducted split AC service in Dubai requires specialist assistance, as only experts can effectively address air conditioning issues. We provide hassle-free Daikin air conditioning repair services.",
        },
        {
          title: "Daikin Wall-Mounted Air Conditioner Service and Repair",
          text: "Beat the scorching heat with optimal Daikin AC cleaning service and fixing error in Dubai! Our professional Daikin AC services ensure your unit operates efficiently, providing comfort and peace of mind.",
        },
      ],
    },
  ],
  footerNote: {
    label: "Daikin Maintenance Tip",
    text: "To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24°C and 26°C during the summer heat in Dubai, UAE.",
  },
  showCta: true,
  cta: {
    phone: "tel:+971507464712",
    whatsapp: "",
  },
};

const coverageData = {
  id: "daikin-ac-service-coverage",
  eyebrow: "Service Coverage",
  title: "Daikin AC Service Coverage Across Dubai",
  description:
    "Prompt Daikin air conditioning repair, cleaning, and maintenance in all 106 communities across Dubai.",
  searchLabel: "Search service areas",
  searchPlaceholder: "Search Dubai areas...",
  initialCount: 12,
  showAllLabel: "Show All Areas",
  showLessLabel: "Show Less",
  emptyMessage: "No service areas found.",
  items: acCoverageLocations106,
};

const galleryData = {
  id: "daikin-ac-service-gallery",
  title: "Gallery",
  description:
    "A glimpse into our professional Daikin AC maintenance, repair, and cleaning services delivered across Dubai.",
  items: [
    {
      title: "Daikin AC Service",
      id: "ac-service-page/gallery-ac-service",
      src: "/img/ac-service-page/gallery-ac-service.webp",
      alt: "Daikin AC Service in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikin AC Repair",
      id: "ac-service-page/gallery-ac-repair",
      src: "/img/ac-service-page/gallery-ac-repair.webp",
      alt: "Daikin AC Repair in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikin AC Maintenance",
      id: "ac-service-page/gallery-ac-maintenance",
      src: "/img/ac-service-page/gallery-ac-maintenance.webp",
      alt: "Daikin AC Maintenance in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikin AC Cleaning",
      id: "ac-service-page/gallery-ac-cleaning",
      src: "/img/ac-service-page/gallery-ac-cleaning.webp",
      alt: "Daikin AC Cleaning in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikin AC Fixing",
      id: "ac-service-page/gallery-ac-fixing",
      src: "/img/ac-service-page/gallery-ac-fixing.webp",
      alt: "Daikin AC Fixing in Dubai",
      width: 400,
      height: 300,
    },
    {
      title: "Daikin AC Gas Filling",
      id: "ac-service-page/gallery-ac-gas-filling",
      src: "/img/ac-service-page/gallery-ac-gas-filling.webp",
      alt: "Daikin AC Gas Filling in Dubai",
      width: 400,
      height: 300,
    },
  ],
};

const newsData = {
  id: "daikin-ac-news",
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
        "A properly functioning air conditioning system is essential in Dubai. Discover how to identify common AC issues and when to call certified technicians.",
      href: "/blog/10-common-ac-problems-and-how-to-fix-them/",
      actionLabel: "Read More",
    },
    {
      icon: "dollar-savings",
      badge: "19 June",
      image: "blogs/ac-tips-and-tricks",
      title: "Best Ways For How To Save Money On AC Bill In 2024",
      subtitle: "Admin • 4 Comments",
      description:
        "Air conditioning is essential in the UAE summer but can raise electricity costs. Learn smart ways to reduce your DEWA AC bill without sacrificing comfort.",
      href: "/blog/how-to-save-money-on-ac/",
      actionLabel: "Read More",
    },
    {
      icon: "wind",
      badge: "19 June",
      image: "blogs/how-to-choose-the-best-air-conditioner-for-home",
      title: "How to Choose Best Air Conditioner for Home | Top Factors",
      subtitle: "Admin • 0 Comments",
      description:
        "Choosing between split, ducted, and inverter AC systems? Read our comprehensive guide on selecting the best cooling solution for your property.",
      href: "/blog/how-to-choose-the-best-air-conditioner-for-home/",
      actionLabel: "Read More",
    },
  ],
  footer: {
    parts: [
      "Explore more expert tips, seasonal maintenance guides, and HVAC advice in our blog. ",
      {
        text: "Visit our blog",
        href: "/blog/",
      },
    ],
  },
};


const bookingData = {
  title: "Book An Appointment",
  description:
    "Book your Daikin AC service appointment with our expert team across Dubai. We provide professional Daikin AC installation, cleaning, maintenance, and repair services to keep your space cool and comfortable.",
  primaryAction: "Book Now",
  secondaryAction: "Our Services",
  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location in Dubai, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  successMessage:
    "Your Daikin AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Daikin AC Inspection Service",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "FULL NAME", placeholder: "e.g. John Doe" },
    phone: { label: "PHONE NUMBER (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "PROPERTY LOCATION / CITY" },
    date: { label: "PREFERRED APPOINTMENT DATE" },
  },
  modal: {
    description:
      "Enter your details and continue through WhatsApp to request Daikin AC repair, cleaning, maintenance or AMC coverage in Dubai.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close AC booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request Daikin AC service in Dubai:",
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
export const brands = coverageData;
export const coverage = coverageData;
export const sparePartsRepair = sparePartsRepairData;
export const gallery = galleryData;
export const energyTips = energyTipsData;
export const repairPrice = repairPriceData;
export const testimonials = testimonialsData;
export const news = newsData;
export const faqs = faqsData;
export const booking = bookingData;

export {
  seoData,
  contactData,
  heroData,
  overviewData,
  areaOverviewData,
  pricingData,
  contractsData,
  serviceOverviewData,
  commonSignsData,
  videoData,
  maintenanceImportanceData,
  maintenanceImportanceCardsData,
  commonProblemsData,
  servicesOfferedCardsData,
  benefitsData,
  whyChooseUsData,
  beforeAfterData,
  coverageData,
  sparePartsRepairData,
  galleryData,
  energyTipsData,
  repairPriceData,
  testimonialsData,
  newsData,
  faqsData,
  bookingData,
};

const faqsNormalized = {
  ...faqsData,
  items: faqsData?.items || faqsData?.faqs || [],
  faqs: faqsData?.faqs || faqsData?.items || [],
};

const daikinData = {
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
  brands: coverageData,
  coverage: coverageData,
  sparePartsRepair: sparePartsRepairData,
  gallery: galleryData,
  energyTips: energyTipsData,
  repairPrice: repairPriceData,
  testimonials: testimonialsData,
  news: newsData,
  faqs: faqsNormalized,
  booking: bookingData,
};

export default daikinData;
