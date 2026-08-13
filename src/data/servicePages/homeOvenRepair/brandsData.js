const featuredBrands = [
  ["Smeg Oven Repair", "smeg", "Electric and gas oven repair for Smeg built-in cooking appliances."],
  ["Siemens Oven Repair", "siemens", "Same-day diagnostic and repair options for Siemens ovens and cookers."],
  ["La Germania Gas Oven Repair", "la-germania", "Qualified support for La Germania gas and electric oven faults."],
  ["Bosch Electric Oven Repair", "bosch", "Professional Bosch built-in electric oven maintenance and repair."],
  ["Viking Stove and Oven Repair", "viking", "Specialist support for Viking stoves, ovens and premium cooking appliances."],
  ["Daewoo Oven Repair", "daewoo", "Gas, electric and microwave oven repair for Daewoo appliances."],
  ["Neff Oven Repair", "neff", "Same-day options for Neff built-in electric and gas oven repair."],
  ["Teka Stove and Oven Repair", "teka", "Professional Teka oven, stove and cooking-appliance service."],
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
  title: "Oven Brands We Service",
  description:
    "Search supported cooker and oven brands. Available dedicated service pages are linked from their titles.",
  searchLabel: "Search oven brands",
  searchPlaceholder: "Search cooker or oven brand",
  emptyMessage: "No matching oven brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    ...featuredBrands,
    ...additionalBrandNames.map((name) => ({
      name,
      description: "Oven, cooker and cooking-appliance repair support in Dubai.",
    })),
  ],
};

export default brandsData;
