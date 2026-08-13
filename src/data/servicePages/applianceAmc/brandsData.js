const featuredBrands = [
  ["LG Appliance Service", "lg", "Planned maintenance support for LG cooking, cooling and laundry appliances."],
  ["Samsung Appliance Service", "samsung", "Flexible maintenance coverage for Samsung home appliances."],
  ["Electrolux Appliance Service", "electrolux", "Scheduled Electrolux appliance inspection and maintenance across Dubai."],
  ["Bosch Appliance Service", "bosch", "Professional PPM and breakdown support for Bosch home appliances."],
  ["Viking Appliance Service", "viking", "Specialist maintenance for Viking refrigerators, ranges and ovens."],
  ["Daewoo Appliance Service", "daewoo", "Planned service from technicians familiar with Daewoo appliances."],
  ["Siemens Appliance Service", "siemens", "Scheduled Siemens cooking, cooling and laundry appliance care."],
  ["Teka Appliance Service", "teka", "Professional Teka appliance maintenance and inspection across Dubai."],
].map(([name, slug, description]) => ({ name, href: `/services/home-appliances-repair/brands/${slug}/`, description }));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Faber", "Fagor", "Fisher and Paykel", "Foster",
  "Gaggenau", "Hitachi", "Hoover", "Indesit", "Neff", "Smeg", "Sub Zero", "Terim", "Whirlpool",
  "Zanussi", "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt", "Gibson",
  "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo", "Sears", "Wolf", "Haier",
  "Elica", "Marvel", "Miele", "Maytag", "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners", title: "Appliance Brands We Maintain",
  description: "Search supported appliance brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search appliance brands", searchPlaceholder: "Search appliance brand",
  emptyMessage: "No matching appliance brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Request AMC Coverage",
  items: [...featuredBrands, ...additionalBrandNames.map((name) => ({ name, description: "Domestic and commercial appliance maintenance support in Dubai." }))],
};
export default brandsData;
