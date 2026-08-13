const featuredBrands = [
  ["LG Refrigerator Repair", "lg", "Refrigerator and freezer repair support for LG cooling appliances."],
  ["Samsung Refrigerator Repair", "samsung", "Same-day fridge and freezer diagnostic options for Samsung appliances."],
  ["Electrolux Refrigerator Repair", "electrolux", "Qualified Electrolux refrigerator and freezer repair across Dubai."],
  ["Bosch Refrigerator Repair", "bosch", "Professional diagnostics and repair for Bosch fridges and freezers."],
  ["Viking Fridge Freezer Repair", "viking", "Specialist service for Viking refrigerators and premium cooling appliances."],
  ["Daewoo Refrigerator Repair", "daewoo", "Fridge and freezer repair from technicians familiar with Daewoo appliances."],
  ["Siemens Refrigerator Repair", "siemens", "Same-day options for Siemens refrigerator and cooling-system faults."],
  ["Teka Refrigerator Repair", "teka", "Professional Teka refrigerator maintenance and repair across Dubai."],
].map(([name, slug, description]) => ({
  name,
  href: `/services/home-appliances-repair/brands/${slug}/`,
  description,
}));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Faber", "Fagor",
  "Fisher and Paykel", "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit",
  "LG", "Neff", "Smeg", "Sub Zero", "Terim", "Whirlpool", "Zanussi",
  "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt",
  "Gibson", "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic",
  "Sanyo", "Sears", "Wolf", "Haier", "Elica", "Marvel", "Miele", "Maytag",
  "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners",
  title: "Refrigerator Brands We Service",
  description:
    "Search supported refrigerator and freezer brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search refrigerator brands",
  searchPlaceholder: "Search fridge or freezer brand",
  emptyMessage: "No matching refrigerator brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    ...featuredBrands,
    ...additionalBrandNames.map((name) => ({
      name,
      description: "Refrigerator and freezer repair support in Dubai.",
    })),
  ],
};

export default brandsData;
