const featuredBrands = [
  ["LG Dishwasher Repair", "lg", "Dishwasher diagnostics and repair support for LG appliances."],
  ["Samsung Dishwasher Repair", "samsung", "Same-day dishwasher repair and maintenance options for Samsung appliances."],
  ["Electrolux Dishwasher Repair", "electrolux", "Qualified Electrolux dishwasher repair across Dubai and Sharjah."],
  ["Bosch Dishwasher Repair", "bosch", "Professional diagnostics and repair for Bosch built-in dishwashers."],
  ["Viking Dishwasher Repair", "viking", "Specialist maintenance and repair for Viking dishwashing appliances."],
  ["Daewoo Dishwasher Repair", "daewoo", "Dishwasher service from technicians familiar with Daewoo appliances."],
  ["Siemens Dishwasher Repair", "siemens", "Same-day options for Siemens dishwasher and washing-system faults."],
  ["Teka Dishwasher Repair", "teka", "Professional Teka dishwasher maintenance and repair across Dubai."],
].map(([name, slug, description]) => ({ name, href: `/services/home-appliances-repair/brands/${slug}/`, description }));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Electrolux", "Faber", "Fagor", "Fisher and Paykel",
  "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit", "LG", "Sub Zero", "Terim", "Whirlpool",
  "Zanussi", "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt", "Gibson",
  "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo", "Sears", "Wolf", "Haier",
  "Elica", "Marvel", "Miele", "Maytag", "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners", title: "Dishwasher Brands We Service",
  description: "Search supported dishwasher brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search dishwasher brands", searchPlaceholder: "Search dishwasher brand",
  emptyMessage: "No matching dishwasher brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Book Brand Service",
  items: [...featuredBrands, ...additionalBrandNames.map((name) => ({ name, description: "Dishwasher repair and maintenance support in Dubai." }))],
};
export default brandsData;
