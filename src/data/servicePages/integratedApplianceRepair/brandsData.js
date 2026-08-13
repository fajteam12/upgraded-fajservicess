const featuredBrands = [
  ["LG Appliance Repair and Service", "lg", "Integrated cooking, cooling and laundry appliance support for LG equipment."],
  ["Samsung Appliance Repair and Service", "samsung", "Same-day built-in appliance service options for Samsung equipment."],
  ["Electrolux Appliance Repair and Service", "electrolux", "Qualified Electrolux integrated-appliance repair across Dubai."],
  ["Bosch Appliance Repair and Service", "bosch", "Professional diagnostics and repair for Bosch built-in home appliances."],
  ["Viking Appliance Repair and Service", "viking", "Specialist maintenance and repair for Viking integrated cooking appliances."],
  ["Daewoo Appliance Repair and Service", "daewoo", "Built-in appliance support from technicians familiar with Daewoo equipment."],
  ["Siemens Appliance Repair and Service", "siemens", "Same-day options for Siemens integrated cooking, cooling and laundry faults."],
  ["Teka Appliance Repair and Service", "teka", "Professional Teka built-in appliance maintenance and repair across Dubai."],
].map(([name, slug, description]) => ({ name, href: `/services/home-appliances-repair/brands/${slug}/`, description }));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Electrolux", "Faber", "Fagor", "Fisher and Paykel",
  "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit", "LG", "Sub Zero", "Terim", "Whirlpool",
  "Zanussi", "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt", "Gibson",
  "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo", "Sears", "Wolf", "Haier",
  "Elica", "Marvel", "Miele", "Maytag", "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners", title: "Built-In Appliance Brands We Service",
  description: "Search supported integrated-appliance brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search built-in appliance brands", searchPlaceholder: "Search appliance brand",
  emptyMessage: "No matching built-in appliance brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Book Brand Service",
  items: [...featuredBrands, ...additionalBrandNames.map((name) => ({ name, description: "Built-in and integrated appliance repair support in Dubai." }))],
};
export default brandsData;
