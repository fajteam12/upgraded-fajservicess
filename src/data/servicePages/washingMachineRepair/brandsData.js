const featuredBrands = [
  ["LG Washing Machine Repair", "lg", "Washing-machine and washer-dryer diagnostics for LG laundry appliances."],
  ["Samsung Washing Machine Repair", "samsung", "Same-day washer and dryer repair options for Samsung appliances."],
  ["Electrolux Washing Machine Repair", "electrolux", "Qualified Electrolux washer-dryer service across Dubai and Sharjah."],
  ["Bosch Washing Machine Repair", "bosch", "Professional diagnostics and repair for Bosch washing machines."],
  ["Viking Washing Machine Repair", "viking", "Specialist maintenance and repair for Viking laundry appliances."],
  ["Daewoo Washing Machine Repair", "daewoo", "Laundry-appliance support from technicians familiar with Daewoo equipment."],
  ["Siemens Washing Machine Repair", "siemens", "Same-day options for Siemens washing-machine and washer-dryer faults."],
  ["Teka Washing Machine Repair", "teka", "Professional Teka washing-machine maintenance and repair across Dubai."],
].map(([name, slug, description]) => ({ name, href: `/services/home-appliances-repair/brands/${slug}/`, description }));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Faber", "Fagor", "Fisher and Paykel", "Foster",
  "Gaggenau", "Hitachi", "Hoover", "Indesit", "Neff", "Smeg", "Sub Zero", "Terim", "Viking",
  "Whirlpool", "Zanussi", "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt",
  "Gibson", "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo", "Sears", "Wolf",
  "Haier", "Elica", "Marvel", "Miele", "Maytag", "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners", title: "Washing Machine Brands We Service",
  description: "Search supported washer and dryer brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search washing-machine brands", searchPlaceholder: "Search washer or dryer brand",
  emptyMessage: "No matching washing-machine brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Book Brand Service",
  items: [...featuredBrands, ...additionalBrandNames.map((name) => ({ name, description: "Washing-machine and washer-dryer repair support in Dubai." }))],
};
export default brandsData;
