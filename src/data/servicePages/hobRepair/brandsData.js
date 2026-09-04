const featuredBrands = [
  {
    name: "Smeg Hob Repair",
    href: "/services/home-appliances-repair/brands/smeg/",
    description:
      "FAJ is here to support you when things go wrong. We understand that your Smeg induction hob is essential for daily life, helping you prepare meals quickly and efficiently. We are here to help you with electric and gas hob repairs near me in Dubai and Sharjah.",
  },
  {
    name: "Siemens Induction Hob Repair",
    href: "/services/home-appliances-repair/brands/siemens/",
    description:
      " If you are facing any problems with your Siemens hob, oven, stove, refrigerator, washer dryer, or dishwasher, contact the FAJ team for induction hob repair near me and service in Dubai.",
  },
  {
    name: "La Germania Hob Repair",
    href: "/services/home-appliances-repair/brands/la-germania/",
    description:
      "When you need La Germania hob repair in Dubai, we have a team of professional and qualified technicians to provide hob repair near me service, and gas stove repair services are available throughout the Dubai.",
  },
  {
    name: "Bosch Hob Repair",
    href: "/services/home-appliances-repair/brands/bosch/",
    description:
      "If you are looking for the best Bosch induction hob repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance and are recognized as the leading Bosch hob service provider in the area.",
  },
  {
    name: "Viking Gas Range Repair",
    href: "/services/home-appliances-repair/brands/viking/",
    description:
      "Your Viking appliances repair or maintenance, and we can help. For high-quality Viking gas range repair, Viking fridge freezer service, and oven maintenance in Dubai, rely on FAJ.",
  },
  {
    name: "Daewoo Hob Repair",
    href: "/services/home-appliances-repair/brands/daewoo/",
    description:
      "We provide expert services for Daewoo electric hob repair near me in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo gas hob service, cooking range fix, refrigerator, washing machine, dryer, and more. ",
  },
  {
    name: "Neff Gas Hob Repair",
    href: "/services/home-appliances-repair/brands/neff/",
    description:
      "Are you concerned about your Neff induction hob malfunctioning and searching for a reliable Neff induction hob repair and service company in Dubai? Contact us for same-day gas cooker service and cooker hob repair in Dubai!",
  },
  {
    name: "Teka Induction Hob Repair",
    href: "/services/home-appliances-repair/brands/teka/",
    description:
      "If you're searching for the best Teka induction hob repair in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka gas stove service and repair, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.",
  },
];

const additionalBrandNames = [
  "AEG",
  "Ariston",
  "Beko",
  "Blomberg",
  "Electrolux",
  "Faber",
  "Fagor",
  "Fisher and Paykel",
  "Foster",
  "Gaggenau",
  "Hitachi",
  "Hoover",
  "Indesit",
  "LG",
  "Sub Zero",
  "Terim",
  "Whirlpool",
  "Zanussi",
  "De Dietrich",
  "Baumatic",
  "Bertazzoni",
  "Bompani",
  "Boston",
  "Brandt",
  "Gibson",
  "Gorenje",
  "Hisense",
  "Kelvinator",
  "Kenmore",
  "Panasonic",
  "Sanyo",
  "Sears",
  "Wolf",
  "Haier",
  "Elica",
  "Marvel",
  "Miele",
  "Maytag",
  "Toshiba",
  "Thermador",
  "Sharp",
  "Admiral",
  "Aftron",
  "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners",
  title: "We specialise in Hob services for the following brands",
  description:"",
  searchLabel: "Search hob brands",
  searchPlaceholder: "Search cooker or hob brand",
  emptyMessage: "No matching hob brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    ...featuredBrands,
    ...additionalBrandNames.map((name) => ({
      name,
      description: "Hob, cooker and cooking-appliance repair support in Dubai.",
    })),
  ],
};

export default brandsData;
