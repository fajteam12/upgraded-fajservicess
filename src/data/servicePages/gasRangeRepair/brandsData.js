const featuredBrands = [
  ["LG Stove Repair", "lg", "FAJ is here to support you when things go wrong. We understand that your LG cooker or induction is essential for daily life, helping you prepare meals efficiently and on time."],
  ["Samsung Cooker Repair", "samsung", "If you are facing any problems with your Samsung cooker, stove, washer, dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai."],
  ["Electrolux Gas Stove Repair", "electrolux", "When you need Electrolux gas stove repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE. "],
  ["Bosch Stove Repair", "bosch", "If you are looking for the best Bosch stove repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch stove service provider in the area."],
  ["Viking Gas Range Repair", "viking", "Your Viking appliances may require repair or maintenance, and we can help. For high-quality Viking cooking range or oven repair in Dubai, rely on FAJ. "],
  ["Daewoo Cooking Range Repair", "daewoo", "We provide expert services for Daewoo gas cooking range repair and electric cooker service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with fix Daewoo gas stove, refrigerator, washing machine, dryer and more."],
  ["Siemens Stove Repair", "siemens", "Are you concerned about your Siemens stove malfunctioning and searching for a reliable Siemens cooker and stove repair and electrical cooker service company in Dubai? Contact us for same-day service!"],
  ["Teka Gas Cooker Repair", "teka", "If you're searching for the best Teka cooking range repair and gas range service company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka cookers, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area."],
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
