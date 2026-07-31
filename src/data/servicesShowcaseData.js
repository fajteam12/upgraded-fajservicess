const SERVICES_IMAGE_BASE = "/img/new-services-page-images";

const SERVICES_CLOUDFLARE_BASE = "new-services-page-images";

const servicesShowcaseData = [
  {
    id: "commercial-coffee-machine",
    title: "Commercial Coffee Machine Services",
    tags: ["Espresso", "Grinders"],
    description:
      "Keep your commercial coffee machines in top condition with expert maintenance, deep cleaning, and fast repairs.",
    path: "/services/commercial-coffee-machine/",
    icon: "☕",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/commercial-coffee-machine-services`,
      src: `${SERVICES_IMAGE_BASE}/commercial-coffee-machine-services.webp`,
      alt: "Commercial coffee machine repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "commercial-cooking-appliance",
    title: "Commercial Cooking Appliance Services",
    tags: ["Ovens", "Stoves"],
    description:
      "Expert repair and maintenance for commercial ovens, stoves, fryers, and grills used in busy kitchens.",
    path: "/services/commercial-cooking-appliance/",
    icon: "♨",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/commercial-cooking-appliance-services`,
      src: `${SERVICES_IMAGE_BASE}/commercial-cooking-appliance-services.webp`,
      alt: "Commercial cooking appliance repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "commercial-refrigeration",
    title: "Commercial Refrigeration Services",
    tags: ["Walk-in Freezers", "Chillers"],
    description:
      "Prevent costly stock losses with professional refrigeration repair for chillers, freezers, and display cases.",
    path: "/services/commercial-refrigeration/",
    icon: "❄",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/commercial-refrigeration-services`,
      src: `${SERVICES_IMAGE_BASE}/commercial-refrigeration-services.webp`,
      alt: "Commercial refrigeration repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "commercial-dishwasher",
    title: "Commercial Dishwasher Services",
    tags: ["Undercounter", "Conveyor"],
    description:
      "Maintain reliable cleaning performance with expert commercial dishwasher repair and maintenance.",
    path: "/services/commercial-dishwasher/",
    icon: "▣",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/commercial-dishwasher-services`,
      src: `${SERVICES_IMAGE_BASE}/commercial-dishwasher-services.webp`,
      alt: "Commercial dishwasher service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "laundry-equipment",
    title: "Laundry Equipment Services",
    tags: ["Washers", "Dryers"],
    description:
      "Minimize downtime with diagnostics, repair, and breakdown support for industrial laundry equipment.",
    path: "/services/commercial-laundry-equipment/",
    icon: "▤",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/laundry-equipment-services`,
      src: `${SERVICES_IMAGE_BASE}/laundry-equipment-services.webp`,
      alt: "Commercial laundry equipment service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "meat-grinder",
    title: "Meat Grinder Services",
    tags: ["Sharpening", "Motor Repair"],
    description:
      "Keep meat grinders operating safely and efficiently with professional maintenance and repairs.",
    path: "/services/meat-grinder/",
    icon: "⚙",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/meat-grinder-services`,
      src: `${SERVICES_IMAGE_BASE}/meat-grinder-services.webp`,
      alt: "Meat grinder repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "home-appliances",
    title: "Appliances Repair Service",
    tags: ["Refrigerators", "Washing Machines"],
    description:
      "Same-day home appliance repairs for refrigerators, washing machines, ovens, cookers, and dryers.",
    path: "/services/home-appliances/",
    icon: "⌂",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/appliances-repair-service`,
      src: `${SERVICES_IMAGE_BASE}/appliances-repair-service.webp`,
      alt: "Home appliance repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "kitchen-equipment",
    title: "Kitchen Equipment Services",
    tags: ["Gas Lines", "Hoods"],
    description:
      "Rapid commercial kitchen repairs for gas lines, exhaust hoods, food machinery, and stainless-steel systems.",
    path: "/services/kitchen-equipment-maintenance/",
    icon: "♨",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/kitchen-equipment-services`,
      src: `${SERVICES_IMAGE_BASE}/kitchen-equipment-services.webp`,
      alt: "Kitchen equipment repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "air-conditioning",
    title: "Air Conditioning Services",
    tags: ["AC Repair", "Duct Cleaning"],
    description:
      "Professional AC repair, cleaning, installation, and maintenance contract services across Dubai.",
    path: "/services/air-conditioning-repair/",
    icon: "✣",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/air-conditioning-services`,
      src: `${SERVICES_IMAGE_BASE}/air-conditioning-services.webp`,
      alt: "Air conditioning service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "coffee-machine",
    title: "Coffee Machine Services",
    tags: ["Espresso", "Descaling"],
    description:
      "Precision espresso diagnostics, deep descaling, gasket replacement, and coffee machine servicing.",
    path: "/services/commercial-coffee-machine/",
    icon: "☕",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/coffee-machine-services`,
      src: `${SERVICES_IMAGE_BASE}/coffee-machine-services.webp`,
      alt: "Coffee machine service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "vacuum-cleaner",
    title: "Vacuum Cleaner Services",
    tags: ["Bags", "Motors"],
    description:
      "Reliable vacuum cleaner maintenance, filter replacement, diagnostics, and repair for homes and businesses.",
    path: "/services/vacuum-cleaner/",
    icon: "✦",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/vacuum-cleaner-services`,
      src: `${SERVICES_IMAGE_BASE}/vacuum-cleaner-services.webp`,
      alt: "Vacuum cleaner repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "small-appliances",
    title: "Small Appliances Services",
    tags: ["Kettles", "Blenders"],
    description:
      "Professional repair and servicing for small kitchen appliances and household equipment.",
    path: "/services/small-appliances/",
    icon: "⌘",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/small-appliances-services`,
      src: `${SERVICES_IMAGE_BASE}/small-appliances-services.webp`,
      alt: "Small appliance repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "ice-maker",
    title: "Ice Maker Services",
    tags: ["Cubers", "Flakers"],
    description:
      "Professional ice maker repair, cleaning, maintenance, water-filter service, and condenser checks.",
    path: "/services/ice-maker/",
    icon: "❄",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/ice-maker-services`,
      src: `${SERVICES_IMAGE_BASE}/ice-maker-services.webp`,
      alt: "Ice maker service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "cigar-humidor",
    title: "Cigar Humidor Services",
    tags: ["Humidity Control", "Sensors"],
    description:
      "Expert repair, calibration, humidity control, and maintenance for cigar humidors and coolers.",
    path: "/services/cigar-humidor/",
    icon: "◌",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/cigar-humidor-services`,
      src: `${SERVICES_IMAGE_BASE}/cigar-humidor-services.webp`,
      alt: "Cigar humidor service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "barbecue",
    title: "Barbecue Repair Services",
    tags: ["Gas Burners", "Igniters"],
    description:
      "Reliable barbecue repair, detailed cleaning, gas-burner service, igniter repair, and maintenance.",
    path: "/services/barbecue/",
    icon: "♨",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/barbecue-repair-services`,
      src: `${SERVICES_IMAGE_BASE}/barbecue-repair-services.webp`,
      alt: "Barbecue repair service",
      width: 1200,
      height: 900,
    },
  },
];

export default servicesShowcaseData;