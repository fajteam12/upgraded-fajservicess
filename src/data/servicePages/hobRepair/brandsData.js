const featuredBrands = [
  {
    name: "Smeg Hob Repair",
    href: "/services/home-appliances-repair/brands/smeg/",
    description:
      "Electric, induction and gas hob repair for Smeg cooking appliances across Dubai and Sharjah.",
  },
  {
    name: "Siemens Induction Hob Repair",
    href: "/services/home-appliances-repair/brands/siemens/",
    description:
      "Diagnosis and repair for Siemens induction hobs and related built-in cooking appliances.",
  },
  {
    name: "La Germania Hob Repair",
    href: "/services/home-appliances-repair/brands/la-germania/",
    description:
      "Qualified technicians provide La Germania cooker, stove and gas-hob repair in Dubai.",
  },
  {
    name: "Bosch Hob Repair",
    href: "/services/home-appliances-repair/brands/bosch/",
    description:
      "Professional Bosch induction, ceramic and electric hob diagnostics and repair.",
  },
  {
    name: "Viking Gas Range Repair",
    href: "/services/home-appliances-repair/brands/viking/",
    description:
      "Specialist support for Viking gas ranges, ovens and other premium cooking appliances.",
  },
  {
    name: "Daewoo Hob Repair",
    href: "/services/home-appliances-repair/brands/daewoo/",
    description:
      "Electric and gas hob service from technicians experienced with Daewoo appliances.",
  },
  {
    name: "Neff Gas Hob Repair",
    href: "/services/home-appliances-repair/brands/neff/",
    description:
      "Same-day options for Neff induction, gas-cooker and built-in hob repair in Dubai.",
  },
  {
    name: "Teka Induction Hob Repair",
    href: "/services/home-appliances-repair/brands/teka/",
    description:
      "Professional repair support for Teka induction hobs, gas stoves and cooking appliances.",
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
  title: "Hob Brands We Service",
  description:
    "Search supported domestic and premium cooker-hob brands. Available dedicated service pages are linked from their titles.",
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
