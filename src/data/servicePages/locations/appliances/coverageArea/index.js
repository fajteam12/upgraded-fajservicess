import { applianceCoverageLocations } from "../../../applianceCoverageLocations";

// ==========================================================================
// Home Appliances Coverage Area - Consolidated Page Data
// Extracted from original CoverageArea.jsx, AppliancesFaqs.json,
// FreestandingHomeAppliancesRepairServiceTestimonials.json & user design specs
// ==========================================================================

export const contactData = {
  phone: "+971 50 748 4712",
  phoneRaw: "+971507484712",
  phoneDisplay: "+971 50 748 4712",
  whatsapp: "971507484712",
  whatsappDisplay: "+971 50 748 4712",
  email: "info@fajservices.ae",
  address: "Al Quoz Industrial Area 4, Dubai, UAE",
  workingHours: "24/7 Emergency Service Available",
};

export const seoData = {
  title: "Coverage Area | Near Me | Home Appliances Service Center Dubai",
  description:
    "We proudly provide Home Appliances installation & services in all areas, including Dubai Marina, Jumeirah, Business Bay, Al Barsha, JLT, Dubai Hills",
  keywords:
    "home appliances coverage area Dubai, appliance repair near me, washing machine repair areas Dubai, fridge service center coverage, dishwasher repair Dubai areas, FAJ Technical Services",
  author: "FAJ Technical Services L.L.C",
  businessName:
    "Home Appliances Service Center Coverage Area Dubai - FAJ Technical Services L.L.C",
  url: "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/",
  canonical:
    "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/",
  image: "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ourprocesshome/public",
  robots: "index, follow",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  serviceType: [
    "Home Appliances Repair",
    "Refrigerator Repair",
    "Washing Machine Repair",
    "Oven & Cooking Range Repair",
    "Dishwasher Repair",
    "Appliance Maintenance AMC",
  ],
  areaServed: [
    "Dubai Marina",
    "JBR",
    "The Meadows",
    "Downtown Dubai",
    "Business Bay",
    "Arabian Ranches",
    "Motor City",
    "The Springs",
    "JLT",
    "Dubai Hills Estate",
    "Palm Jumeirah",
    "Dubai Silicon Oasis",
    "JVC",
    "Discovery Gardens",
    "Academy City",
    "Al Barsha",
    "Al Bada",
    "Deira",
    "Al Quusais",
    "Al Sufouh",
    "Jebel Ali",
    "DIP",
    "JAFZA",
  ],
  breadcrumbs: [
    {
      name: "Home",
      url: "https://www.fajservices.ae/",
    },
    {
      name: "Services",
      url: "https://www.fajservices.ae/services/",
    },
    {
      name: "Home Appliances Repair",
      url: "https://www.fajservices.ae/services/home-appliances-repair/",
    },
    {
      name: "Coverage Area",
      url: "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/",
    },
  ],
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.fajservices.ae/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.fajservices.ae/services/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Home Appliances Repair",
          "item":
            "https://www.fajservices.ae/services/home-appliances-repair/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Coverage Area",
          "item":
            "https://www.fajservices.ae/services/home-appliances-repair/coverage-area/",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.fajservices.ae/#organization",
      "name": "FAJ Technical Services L.L.C",
      "url": "https://www.fajservices.ae/",
      "telephone": "+971507484712",
      "priceRange": "AED 99 - AED 1500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Quoz Industrial Area 4",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.1234,
        "longitude": 55.2345,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
    },
  ],
};

export const heroData = {
  title: "In which areas does FAJ Home Appliances Repair operate in Dubai?",
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
        ", one of the most common questions we receive is, “Which areas of Dubai do you serve?” We are proud to serve over 100 locations throughout Dubai and its surrounding areas, catering to homes, offices, and businesses. Our expert teams in home appliance services provide installations, repairs, maintenance, and annual maintenance contracts directly at your location, whether in the city center or the outskirts.",
      ],
    },
  ],
  primaryAction: "Book Inspection",
  secondaryAction: "Chat Now",
  bookingLabel: "Home Appliances Technical Inspection",
  contentWidth: "52%",
  image: {
    id: "ourprocesshome",
    alt: "FAJ Home Appliances Repair Service Coverage Dubai",
    width: 800,
    height: 533,
  },
};

export const coverageIntroData = {
  title:
    "Where Does FAJ Operate in Dubai?\nComprehensive Coverage Across Prime Dubai Locations",
  paragraphs: [
    {
      parts: [
        "We have successfully maintained, repaired, and serviced premium home appliances across a diverse range of properties throughout Dubai. Our service areas include ",
        {
          text: "Al Barsha",
          href: "/services/home-appliances-repair/coverage-area/al-barsha/",
        },
        ", ",
        {
          text: "Dubai Marina",
          href: "/services/home-appliances-repair/coverage-area/dubai-marina/",
        },
        ", ",
        {
          text: "Palm Jumeirah",
          href: "/services/home-appliances-repair/coverage-area/palm-jumeirah/",
        },
        ", ",
        {
          text: "Jebel Ali",
          href: "/services/home-appliances-repair/coverage-area/jebel-ali/",
        },
        ", ",
        {
          text: "Dubai Investment Park (DIP)",
          href: "/services/home-appliances-repair/coverage-area/dip/",
        },
        ", ",
        {
          text: "Jebel Ali Free Zone (JAFZA)",
          href:
            "/services/home-appliances-repair/coverage-area/jebel-ali-free-zone/",
        },
        ", ",
        {
          text: "Business Bay",
          href: "/services/home-appliances-repair/coverage-area/business-bay/",
        },
        ", ",
        {
          text: "Dubai Hills",
          href:
            "/services/home-appliances-repair/coverage-area/dubai-hills-estate/",
        },
        ", ",
        {
          text: "The Springs",
          href: "/services/home-appliances-repair/coverage-area/the-springs/",
        },
        ", ",
        {
          text: "Damac Hills",
          href: "/services/home-appliances-repair/coverage-area/damac-hills/",
        },
        ", ",
        {
          text: "Dubai Silicon Oasis",
          href:
            "/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/",
        },
        ", ",
        {
          text: "Sports City",
          href:
            "/services/home-appliances-repair/coverage-area/dubai-sports-city/",
        },
        ", ",
        {
          text: "Motor City",
          href:
            "/services/home-appliances-repair/coverage-area/dubai-motor-city/",
        },
        ", and more.",
      ],
    },
    {
      parts: [
        "These areas have become popular among homeowners and business owners seeking to enhance their indoor comfort with discreet, high-performance appliances. We installed these appliances in modern flats, luxury apartments, and villas.",
      ],
    },
  ],
};

export const processData = {
  title: "Our Process Quick and Efficient",
  description:
    "Our service process, while detailed, primarily consists of the following key steps:",
  items: [
    {
      title: "Initial Consultation",
      description:
        "Contact us today to discuss your appliance needs. We will gather information about your situation and schedule a convenient time for an inspection.",
      image: {
        id: "ac-location/initial-consultation",
        alt: "Initial Consultation for Home Appliances Service",
      },
    },
    {
      title: "Inspection and Diagnosis",
      description:
        "This section outlines the process of identifying problems. A thorough technical inspection is essential for accurate diagnosis, pinpointing issues are understood before any repair are made.",
      image: {
        id: "ac-location/inspection-and-diagnosis",
        alt: "Inspection and Diagnosis of Home Appliances",
      },
    },
    {
      title: "Transparent Quotation",
      description:
        "We offer clear and detailed quotations for all our services. Our pricing encompasses all parts and labor, ensuring no hidden costs.",
      image: {
        id: "ac-location/transparent-quotation",
        alt: "Transparent Quotation for Appliance Repair",
      },
    },
    {
      title: "Efficient Repair or Maintenance",
      description:
        "Our skilled technicians will work efficiently to minimize disruption to your daily routine. We value your time and property, ensuring a clean and effective service.",
      image: {
        id: "ac-location/efficient-repair-maintenance",
        alt: "Efficient Repair or Maintenance",
      },
    },
    {
      title: "Final Review and Customer Satisfaction",
      description:
        "Your satisfaction is our highest priority. We aim to provide high-quality work and outstanding service.",
      image: {
        id: "ac-location/final-review-and-customer-satisfaction",
        alt: "Final Review and Customer Satisfaction",
      },
    },
  ],
};

export const commonIssuesData = {
  title: "Common Issues in Home Appliances Maintenance in Dubai, UAE",
  description:
    "We have encountered numerous home appliances and identified common issues.",
  subText: "Here are the mistakes that people often make:",
  items: [
    {
      title: "Schedule maintenance for appliances before they break down",
      description:
        "Your home appliance is not used for months and when you turn it on in summer, it is not working properly. Now, you are also waiting for emergency home appliance service.",
      solutionTitle: "Better procedure:",
      solution:
        "Schedule maintenance in March or April before summer starts. This ensures better availability, lower prices, & provides peace of mind.",
    },
    {
      title: "Only contact when something fails",
      description:
        "Reactive maintenance is much more costly than preventive maintenance. A 99 AED service visit could have prevented a 1250 AED emergency repair.",
      solutionTitle: "Better procedure:",
      solution:
        "Routine maintenance, whether annually or biannually, helps to identify issues before they escalate into expensive emergencies.",
    },
    {
      title: "Selecting the cheapest option",
      description:
        "Is that company offering home appliance service for 50 to 100 AED? They might be cutting corners or planning to aggressively upsell you once they're in your home.",
      solutionTitle: "Better procedure:",
      solution:
        "Seek competitive pricing from trusted companies. Generally, you tend to receive quality in proportion to the amount you spend.",
    },
    {
      title: "Allowing unqualified individuals to work on your home appliance",
      description:
        "That handyman who claims he can repair your home appliances cheaply might actually make the issue worse.",
      solutionTitle: "Better procedure:",
      solution:
        "Choose a licensed company with experienced home appliance technicians who are skilled and knowledgeable in their work.",
    },
    {
      title: "Ignoring warning signs",
      description:
        "Signs of damage, electrical faults, and high bills indicate problems with your home appliance.",
      solutionTitle: "Better procedure:",
      solution:
        "Address minor issues promptly to stop them from escalating into major emergencies.",
    },
  ],
};

export const serviceCenterOverviewData = {
  id: "appliance-service-center",
  title: "We Are Home Appliance Repair Service Centers",
  subtitle: "EXPERT MULTI-BRAND REPAIRS FOR ALL MAJOR HOUSEHOLD APPLIANCES",
  paragraphs: [
    {
      parts: [
        "We repair all brands and models of Home appliances including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. All our repairs are performed by trained technicians. We are experts in appliance repair, and our technicians have successfully handled multiple repairs including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. Whether it is your Washing Machine, Fridge, freezer, Cooker, Dishwasher or Tumble Dryer. We will quickly fix any faults that develop, and all our repair are guaranteed. You can book online at any time.",
      ],
    },
    {
      parts: [
        "When you require home appliance repair, it's essential to choose a reliable service center provider that offers quality repairs, quick service, and appliance technicians. At FAJ Technical Services L.L.C. we ensure that your appliances will be repaired promptly, efficiently, and at an affordable price, all while maintaining the highest standards of service.",
      ],
    },
  ],
  image: {
    id: "techfridge",
    alt: "Why Choose FAJ Appliance Repair Service in Dubai",
    width: 600,
    height: 450,
  },
  imageSide: "left",
  showCta: true,
  cta: {
    whatsapp:
      "https://api.whatsapp.com/send?phone=+971507484712&text=Hello%20FAJ%20Appliance%20Service",
    phone: "+971507484712",
  },
};

export const whyChooseUsPillarsData = {
  id: "why-choose-faj",
  title: "Why Choose FAJ Appliance Repair Service? Trusted & Reliable Home Appliance Repairs",
  subtitle: "5 REASONS DUBAI RESIDENTS TRUST FAJ FOR HOME APPLIANCE REPAIRS",
  cards: [
    {
      icon: "certified-expert",
      title: "Expert Technicians",
      description:
        "Our technicians are trained and experienced in resolving appliance issues across all major brands.",
    },
    {
      icon: "repair",
      title: "Comprehensive Services",
      description:
        "We provide a wide range of services for home appliances, from minor fixes to major repair.",
    },
    {
      icon: "shield",
      title: "Warranty Repair",
      description:
        "Using genuine parts in coffee machines, equipment, and vending machines.",
    },
    {
      icon: "clock",
      title: "Timely Booking",
      description:
        "Our online booking system is available seven days a week, allowing you to schedule repairs at your convenience.",
    },
    {
      icon: "clock-fast",
      title: "Quick Support",
      description:
        "We recognize the importance of functional appliances in our daily lives and work hard to deliver prompt and efficient repair services.",
    },
  ],
};

export const benefitsData = {
  eyebrow: "PREMIUM OUTCOMES",
  title: "The Benefits of Professional Home Appliances Services",
  description:
    "While some homeowners or business owners may attempt DIY repairs, home appliances are complex and require professional expertise to ensure safe and effective repairs. Here’s why you should trust FAJ Technical Services L.L.C.",
  stats: [
    {
      value: "2010",
      label: "SERVING THE UAE SINCE",
    },
    {
      value: "7 DAY",
      label: "SUPPORT AVAILABLE",
    },
  ],
  items: [
    {
      title: "Safety First",
      description:
        "Home appliances have unsafe electrical components and refrigerants. Our qualified technicians safely repair and maintain these systems to minimise the risk of injury and damage.",
      icon: "safety",
      image: {
        id: "Safety-First",
        alt: "Safety First Appliance Service",
      },
    },
    {
      title: "Real Diagnosis",
      description:
        "Diagnosing problems with home appliances requires both skill and tools. Our experts quickly identify issues and offer effective solutions, saving you time and frustration.",
      icon: "diagnostics",
      image: {
        id: "Real-Diagnosis",
        alt: "Real Diagnosis Appliance Repair",
      },
    },
    {
      title: "Warranty Protection",
      description:
        "Many home appliances come with warranties requiring professional servicing. Choose FAJ Technical Services L.L.C. to ensure your warranty is protected.",
      icon: "warranty",
      image: {
        id: "Warranty-Protection",
        alt: "Warranty Protection for Appliances",
      },
    },
    {
      title: "Long-Term Reliability",
      description:
        "Our expert repair provides lasting solutions by addressing the root causes of your home appliance issues, preventing future problems, and enhancing reliability.",
      icon: "reliability",
      image: {
        id: "Long-Term-Reliability",
        alt: "Long-Term Appliance Reliability",
      },
    },
    {
      title: "Energy Savings",
      description:
        "Professional repair can enhance your system's efficiency, significantly reducing energy consumption and lowering your monthly utility bills.",
      icon: "energy",
      image: {
        id: "Energy-Savings",
        alt: "Energy Savings on Home Appliances",
      },
    },
    {
      title: "Protects Property",
      description:
        "Safeguards electronics against damage and prevents warping from heat and moisture.",
      icon: "property",
      image: {
        id: "Protects-Property",
        alt: "Protects Household Property",
      },
    },
  ],
};

export const inspectionData = {
  title: "The Importance of Home Appliances Inspection",
  items: [
    {
      title: "Why It's Necessary?",
      description:
        "Regular inspections of home appliances identify potential issues early, ensuring optimal performance and extending the lifespan of your units. They enhance energy efficiency, lower energy bills, and improve quality by removing hazards, creating a healthier environment.",
      detailTitle: "TERMS AND CONDITIONS OF TECHNICAL INSPECTION",
      detail:
        "The fee for the home appliances technical inspection includes an on-site visit from our technical team, as well as transportation charges to the Dubai location. This fee will be deducted from the final invoice if the customer requests any home appliance services, such as repair, maintenance, cleaning, or part replacement, during the same visit. Please note that a separate fee will apply for any additional visits.\n\nAdditionally, the inspection fee is non-refundable and does not cover carpentry work, access to gypsum ceilings, or any home appliance repairs. After the inspection, FAJ will provide the customer with a quotation.",
      image: {
        id: "necesaryhomecov",
        alt: "Home Appliances Technical Inspection in Dubai",
        width: 600,
        height: 400,
      },
    },
    {
      title: "Why is Home Appliances Service Important?",
      description:
        "Home appliance service involves cleaning, checking for faults, and ensuring all components function properly. Regular maintenance enhances efficiency, reduces energy costs, and prevents breakdowns.",
      detailTitle: "TERMS AND CONDITIONS OF TECHNICAL INSPECTION",
      detail:
        "The Home Appliances service fee includes an on-site visit from our technical team and transportation to Dubai. This fee is non-refundable.\n\nThe service does not cover carpentry, gypsum ceiling access, repairs, maintenance, installation, or spare part replacement. Any additional work needed for faulty home appliances will be quoted separately, with details provided by FAJ.",
      image: {
        id: "importcoveragehome",
        alt: "Home Appliances Service Importance in Dubai",
        width: 600,
        height: 400,
      },
    },
  ],
};

const popularCoverageAreaItems = [
  {
    name: "Dubai Marina",
    href: "/services/home-appliances-repair/coverage-area/dubai-marina/",
  },
  {
    name: "JBR (Jumeirah Beach Residence)",
    href: "/services/home-appliances-repair/coverage-area/jbr/",
  },
  {
    name: "The Meadows",
    href: "/services/home-appliances-repair/coverage-area/the-meadows/",
  },
  {
    name: "Downtown Dubai",
    href: "/services/home-appliances-repair/coverage-area/downtown/",
  },
  {
    name: "Business Bay",
    href: "/services/home-appliances-repair/coverage-area/business-bay/",
  },
  {
    name: "Arabian Ranches",
    href: "/services/home-appliances-repair/coverage-area/arabian-ranches/",
  },
  {
    name: "Motor City",
    href: "/services/home-appliances-repair/coverage-area/dubai-motor-city/",
  },
  {
    name: "The Springs",
    href: "/services/home-appliances-repair/coverage-area/the-springs/",
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    href:
      "/services/home-appliances-repair/coverage-area/jumeirah-lake-towers/",
  },
  {
    name: "JLT",
    href: "/services/home-appliances-repair/coverage-area/jlt/",
  },
  {
    name: "Dubai Hills Estate",
    href:
      "/services/home-appliances-repair/coverage-area/dubai-hills-estate/",
  },
  {
    name: "Palm Jumeirah",
    href: "/services/home-appliances-repair/coverage-area/palm-jumeirah/",
  },
  {
    name: "Silicon Oasis",
    href:
      "/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/",
  },
  {
    name: "JVC (Jumeirah Village Circle)",
    href: "/services/home-appliances-repair/coverage-area/jvc/",
  },
  {
    name: "Discovery Gardens",
    href:
      "/services/home-appliances-repair/coverage-area/discovery-gardens/",
  },
  {
    name: "Academy City",
    href: "/services/home-appliances-repair/coverage-area/academy-city/",
  },
  {
    name: "Al Barsha",
    href: "/services/home-appliances-repair/coverage-area/al-barsha/",
  },
  {
    name: "Al Bada",
    href: "/services/home-appliances-repair/coverage-area/al-bada/",
  },
  {
    name: "Deira",
    href: "/services/home-appliances-repair/coverage-area/deira/",
  },
  {
    name: "Al Quusais",
    href:
      "/services/home-appliances-repair/appliances-repair-service/",
  },
  {
    name: "Al Sufouh",
    href: "/services/home-appliances-repair/coverage-area/al-sufouh/",
  },
];

// Deduplicate full locations list
const seenNames = new Set(popularCoverageAreaItems.map((i) => i.name.toLowerCase()));
const extraLocations = applianceCoverageLocations.filter(
  (loc) => !seenNames.has(loc.name.toLowerCase())
);

export const serviceAreasData = {
  title: "Our Service Areas Across Dubai",
  description:
    "We offer dependable home appliance maintenance services across Dubai, including:",
  subheading: "Popular Areas",
  initialCount: 21,
  items: [...popularCoverageAreaItems, ...extraLocations],
};

export const galleryData = {
  title: "Gallery",
  description:
    "Take a look at our professional technicians in action across Dubai homes and workshops.",
  items: [
    {
      title: "Washing Machine Service",
      eyebrow: "FAJ Technical Services",
      id: "homeappliances/galleryimghome",
      alt: "Washing Machine Service in Dubai - FAJ",
      width: 600,
      height: 400,
    },
    {
      title: "Refrigerator Diagnostics",
      eyebrow: "FAJ Technical Services",
      id: "galleryimghome2",
      alt: "Refrigerator Diagnostics & Repair Dubai",
      width: 600,
      height: 400,
    },
    {
      title: "Oven & Range Service",
      eyebrow: "FAJ Technical Services",
      id: "homeappliances/galleryimg3",
      alt: "Oven and Cooking Range Repair Dubai",
      width: 600,
      height: 400,
    },
    {
      title: "Cooking Range & Oven Service",
      eyebrow: "FAJ Technical Services",
      id: "homeappliances/galleryimg4",
      alt: "Cooking Range & Oven Maintenance Dubai",
      width: 600,
      height: 400,
    },
    {
      title: "Dishwasher Repair",
      eyebrow: "FAJ Technical Services",
      id: "homeappliances/galleryimg5",
      alt: "Commercial and Domestic Dishwasher Repair",
      width: 600,
      height: 400,
    },
    {
      title: "Small Appliances Workshop",
      eyebrow: "FAJ Technical Services",
      id: "homeappliances/galleryimg6",
      alt: "Small Appliances Workshop Repair Dubai",
      width: 600,
      height: 400,
    },
  ],
};

export const testimonialsData = {
  eyebrow: "CUSTOMER TESTIMONIALS",
  title: "WHAT OUR CLIENTS SAY",
  description:
    "We offer dependable home appliance maintenance services across Dubai, including:",
  items: [
    {
      name: "Hassan Malik",
      role: "Expat",
      rating: "5.0",
      quote:
        "I was looking for oven repair near me and came across FAJ. Their service was quick, affordable, and the technicians knew what they were doing. Very happy with the results.",
      verified: true,
    },
    {
      name: "Zainab Khan",
      role: "Resident",
      rating: "5.0",
      quote:
        "I booked FAJ for oven repair. The staff was efficient and repaired my appliance without delay. They even tested it multiple times before leaving, which gave me peace of mind.",
      verified: true,
    },
    {
      name: "Arjun K.",
      role: "Homeowner",
      rating: "5.0",
      quote:
        "The service was excellent. I first searched for oven repair, and FAJ provided the best solution. Quick, professional, and very reliable service provider in Dubai.",
      verified: true,
    },
    {
      name: "Shehla Shabbie",
      role: "Resident",
      rating: "5.0",
      quote:
        "FAJ really impressed me. Their home appliance repair Dubai team fixed my dryer quickly, and the price was fair. I’ll definitely call them again for future appliance issues.",
      verified: true,
    },
    {
      name: "Max Rowe",
      role: "Expat",
      rating: "5.0",
      quote:
        "Finding trustworthy appliance repair services can be tricky, but FAJ made it easy. Their technician was professional, on time, and solved my fridge problem in one visit in Dubai.",
      verified: true,
    },
    {
      name: "Taranpal Gralla",
      role: "Homeowner",
      rating: "5.0",
      quote:
        "I contacted FAJ for home appliances repair in Dubai, and I’m glad I did. My oven and washing machine are working perfectly now. Excellent communication and quick turnaround!",
      verified: true,
    },
  ],
};

export const newsData = {
  id: "home-appliance-news",
  eyebrow: "NEWS & UPDATES",
  title:
    "WE DELIVER RELIABLE, AFFORDABLE SERVICES WITH DEDICATED SUPPORT FOR SATISFACTION",
  description:
    "Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions.",
  action: {
    label: "VIEW ALL ARTICLES \u2192",
    href: "/blog/",
  },
  items: [
    {
      image: "blogs/What-is-Refrigerator-Inverter-Technology",
      title: "What is Refrigerator Inverter Technology?",
      badge: "10 Oct",
      meta: {
        comments: "02 Comments",
        author: "Admin",
      },
      description:
        "Today, being energy-efficient and using advanced inverter technology is essential for home appliances, especially refrigerators...",
      href: "/blog/what-is-refrigerator-inverter-technology/",
      actionLabel: "Read More",
    },
    {
      image:
        "blogs/Are-Air-Fryers-Healthy-Truth-About-This-Popular-Kitchen-Gadget",
      title:
        "Are Air Fryers Healthy? Unpacking the Truth About This Popular Kitchen Gadget",
      badge: "10 Oct",
      meta: {
        comments: "02 Comments",
        author: "Admin",
      },
      description:
        "You dream about crispy fried chicken and can't resist french fries. When you eat french fries, is an air fryer healthy?...",
      href:
        "/blog/are-air-fryers-healthy-unpacking-the-truth-about-this-popular-kitchen-gadget/",
      actionLabel: "Read More",
    },
    {
      image: "blogs/Top-Load-Washing-Machine",
      title: "Top-Loading Washing Machines: Features, Benefits & Buying Guide",
      badge: "10 Oct",
      meta: {
        comments: "02 Comments",
        author: "Admin",
      },
      description:
        "Have you ever faced a laundry issue? Discover top-loading washing machines with our comprehensive guide, offering efficient and convenient laundry solutions.",
      href:
        "/blog/top-loading-washing-machines-a-complete-guidelines/",
      actionLabel: "Read More",
    },
  ],
};

export const faqsData = {
  id: "faqs",
  eyebrow: "HAVE QUESTIONS?",
  title: "FAQS",
  cta: {
    eyebrow: "Still Need Assistance?",
    title: "Our professional technical team is ready to help!",
  },
  items: [
    {
      question: "When is the best time to have my appliance repaired?",
      answer:
        "When you see a problem, contact our experts right away. If you suspect a problem, such as an appliance not working properly or performing poorly, it may require repair. You don’t have to wait till your appliance breaks to contact our repair service.",
    },
    {
      question: "What should I do when my appliance breaks?",
      answer:
        "If your appliance suddenly stops working and you’re not sure why, unplug it straight away. To be safe, you should turn off the main power circuit. Wipe up any leaks that may have happened, such as with a refrigerator or washing machine, but turn it off first. It’s critical to fix the problem as soon as possible, so contact our appliance repair Dubai specialist who can respond quickly.",
    },
    {
      question: "Is it better to repair or replace an appliance?",
      answer:
        "If the repair costs less than half the price of a new one and the appliance isn’t too old, repair it. Otherwise, replace it.",
    },
    {
      question: "Is it worth it to repair a refrigerator?",
      answer:
        "Yes, if it’s under 10 years old and the repair isn’t too expensive. Older models may be better replaced.",
    },
    {
      question: "Why is the dishwasher not working properly?",
      answer:
        "It could be due to clogged filters, blocked spray arms, or drainage issues. Regular cleaning helps prevent problems.",
    },
    {
      question:
        "What kinds of appliances does FAJ repair, replace, maintain, and install?",
      answer:
        "Our skilled experts have repaired a wide range of appliances, including freezers, refrigerators, dryers, ovens, stoves, microwaves, washers, dish washers, ranges, and trash compactors.",
    },
  ],
};

export const bookingData = {
  eyebrow: "BOOK YOUR SERVICE",
  title: "BOOK AN APPOINTMENT",
  description:
    "Book your appointment with our expert team. We provide professional inspection, fault diagnosis, component-level repair, and maintenance services to restore functionality, ensure reliable performance, and extend the lifespan of your equipment.",
  formCardTitle: "IT'S QUICK & EASY",
  formCardSubtitle:
    "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "CONTINUE WITH BOOKING REQUEST",
  defaultService: "Home Appliances Service Center Dubai",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: {
      label: "FULL NAME",
      placeholder: "e.g. John Doe",
    },
    phone: {
      label: "PHONE NUMBER (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: {
      label: "PROPERTY LOCATION / CITY",
    },
    date: {
      label: "PREFERRED APPOINTMENT DATE",
    },
  },
  modal: {
    eyebrow: "Book Inspection / Request Quote",
    title: "Request Home Appliances Service",
    description:
      "Fill in your details below and our team will get in touch via WhatsApp right away.",
  },
};

const pageData = {
  seo: seoData,
  contact: contactData,
  hero: heroData,
  coverageIntro: coverageIntroData,
  process: processData,
  commonIssues: commonIssuesData,
  serviceCenterOverview: serviceCenterOverviewData,
  whyChooseUsPillars: whyChooseUsPillarsData,
  benefits: benefitsData,
  inspection: inspectionData,
  serviceAreas: serviceAreasData,
  gallery: galleryData,
  testimonials: testimonialsData,
  news: newsData,
  faqs: faqsData,
  booking: bookingData,
  structuredData,
};

export default pageData;
