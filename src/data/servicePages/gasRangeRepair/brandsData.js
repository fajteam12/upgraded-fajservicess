const featuredBrands = [
  ["LG Stove Repair", "lg", "Cooking-range and induction-cooker support for LG appliances in Dubai."],
  ["Samsung Cooker Repair", "samsung", "Same-day diagnostics and repair options for Samsung cookers and stoves."],
  ["Electrolux Gas Stove Repair", "electrolux", "Professional Electrolux gas-stove repair from qualified appliance technicians."],
  ["Bosch Stove Repair", "bosch", "Expert diagnostics, maintenance and repair for Bosch cooking appliances."],
  ["Viking Gas Range Repair", "viking", "Specialist repair and maintenance for Viking ranges and premium cooking appliances."],
  ["Daewoo Cooking Range Repair", "daewoo", "Gas and electric cooking-range service from technicians familiar with Daewoo appliances."],
  ["Siemens Stove Repair", "siemens", "Same-day options for Siemens stove and electric-cooker faults in Dubai."],
  ["Teka Gas Cooker Repair", "teka", "Professional Teka cooker, stove and cooking-range service across Dubai."],
].map(([name, slug, description]) => ({
  name,
  href: `/services/home-appliances-repair/brands/${slug}/`,
  description,
}));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Electrolux", "Faber", "Fagor",
  "Fisher and Paykel", "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit",
  "LG", "Sub Zero", "Terim", "Whirlpool", "Zanussi", "De Dietrich",
  "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt", "Gibson",
  "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo",
  "Sears", "Wolf", "Haier", "Elica", "Marvel", "Miele", "Maytag",
  "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners",
  title: "Cooking Range Brands We Service",
  description:
    "Search supported gas-cooker and cooking-range brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search cooking-range brands",
  searchPlaceholder: "Search cooker or stove brand",
  emptyMessage: "No matching cooking-range brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    ...featuredBrands,
    ...additionalBrandNames.map((name) => ({
      name,
      description: "Gas-cooker, stove and cooking-range repair support in Dubai.",
    })),
  ],
};

export default brandsData;
