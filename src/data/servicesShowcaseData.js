const SERVICES_IMAGE_BASE = "/img/new-services-page-images";

const SERVICES_CLOUDFLARE_BASE = "new-services-page-images";

const servicesShowcaseData = [
  {
    id: "commercial-coffee-machine",
    title: "Commercial Coffee Machine Services",
    tags: ["Espresso", "Grinders"],
    description:
      "Keep your commercial coffee machines in top condition with expert maintenance, deep cleaning, and fast repairs.",
    path: "/services/coffee-machine/coffee-machine-repairs/",
    subpages: [
      {
        title: "Coffee Machine Services Needed",
        path: "/services/coffee-machine/coffee-machine-service-center/",
      },
      {
        title: "Commercial Coffee Machine Repair Services",
        path: "/services/coffee-machine/coffee-machine-repairs/",
      },
    ],
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
    path: "/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/",
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
    path: "/services/refrigeration-equipment/",
    subpages: [
      {
        title: "Ice Maker Repair",
        path: "/services/refrigeration-equipment/ice-maker-repair/",
      },
      {
        title: "Refrigeration AMC Services",
        path: "/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/",
      },
      {
        title: "Commercial Refrigeration Maintenance",
        path: "/services/refrigeration-equipment/commercial-refrigeration-maintenance/",
      },
    ],
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
    path: "/services/commercial-dishwasher-repair/",
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
    path: "/services/kitchen-equipment-maintenance/meat-grinder-repair/",
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
    path: "/services/home-appliances-repair/appliances-repair-service/",
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
    subpages: [
      {
        title: "Commercial Oven Repair",
        path: "/services/kitchen-equipment-maintenance/oven-repair/",
      },
      {
        title: "Commercial Meat Grinder Repair",
        path: "/services/kitchen-equipment-maintenance/meat-grinder-repair/",
      },
      {
        title: "Kitchen Equipment AMC",
        path: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/",
      },
      {
        title: "Kitchen Equipment Repair",
        path: "/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/",
      },
      {
        title: "Cooking Equipment Service",
        path: "/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/",
      },
    ],
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
    subpages: [
      {
        title: "AC Services",
        path: "/services/air-conditioning-repair/ac-service/",
      },
      {
        title: "AMC Maintenance Contract",
        path: "/services/air-conditioning-repair/ac-annual-maintenance-contract/",
      },
    ],
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
    path: "/services/coffee-machine/",
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
    path: "/services/home-appliances-repair/robot-vacuum-cleaner-repair/",
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
    path: "/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/",
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
    path: "/services/refrigeration-equipment/ice-maker-repair/",
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
    path: "/services/home-appliances-repair/cigar-humidor-repair/",
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
    path: "/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
    icon: "♨",
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/barbecue-repair-services`,
      src: `${SERVICES_IMAGE_BASE}/barbecue-repair-services.webp`,
      alt: "Barbecue repair service",
      width: 1200,
      height: 900,
    },
  },
  {
    id: "home-appliances-services",
    title: "Home Appliances Services",
    tags: ["Hobs & Ovens", "Refrigerators", "Washing Machines", "AMC Contracts"],
    description:
      "Certified home appliance installation, repair, and maintenance for hobs, ovens, gas ranges, washers, refrigerators, and small cooking equipment.",
    path: "/services/home-appliances-repair/",
    icon: "\u2302",
    subpages: [
      {
        title: "Hob Repair",
        path: "/services/home-appliances-repair/hob-repair-service/",
      },
      {
        title: "Oven Repair",
        path: "/services/home-appliances-repair/oven-repair-service/",
      },
      {
        title: "Gas Range Repair",
        path: "/services/home-appliances-repair/gas-cooker-repair-service/",
      },
      {
        title: "Refrigerator Repair",
        path: "/services/home-appliances-repair/refrigerator-repair-service/",
      },
      {
        title: "Dishwasher Repair",
        path: "/services/home-appliances-repair/dishwasher-repair-service/",
      },
      {
        title: "BBQ Repair Service",
        path: "/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
      },
      {
        title: "Cigar Humidor Repair",
        path: "/services/home-appliances-repair/cigar-humidor-repair/",
      },
      {
        title: "Vacuum Repair",
        path: "/services/home-appliances-repair/robot-vacuum-cleaner-repair/",
      },
      {
        title: "Small Appliances Repair",
        path: "/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/",
      },
      {
        title: "Washing Machine Repair",
        path: "/services/home-appliances-repair/washing-machine-repair-service-dubai/",
      },
      {
        title: "Integrated Appliances Repair",
        path: "/services/home-appliances-repair/built-in-appliances-repair-service/",
      },
      {
        title: "Free Standing Appliances Repair",
        path: "/services/home-appliances-repair/appliances-repair-service/",
      },
      {
        title: "AMC Contract",
        path: "/services/home-appliances-repair/appliances-amc-service/",
      },
    ],
    image: {
      id: `${SERVICES_CLOUDFLARE_BASE}/appliances-repair-service`,
      src: `${SERVICES_IMAGE_BASE}/appliances-repair-service.webp`,
      alt: "Home appliances repair and maintenance service",
      width: 1200,
      height: 900,
    },
  },
];

export default servicesShowcaseData;
