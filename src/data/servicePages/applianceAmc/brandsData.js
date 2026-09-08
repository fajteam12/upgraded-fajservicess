const featuredBrands = [
  ["LG Appliance Service", "lg", "FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked."],
  ["Samsung Appliance Service", "samsung", "If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai."],
  ["Electrolux Appliance Service", "electrolux", "When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE."],
  ["Bosch Appliance Service", "bosch", "If you are looking for the best Bosch refrigerator repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range, Washing machine, refrigerator service provider in the area."],
  ["Viking Appliance Service", "viking", "Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking refrigerator, range or oven repair in Dubai, rely on FAJ."],
  ["Daewoo Appliance Service", "daewoo", "We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more."],
  ["Siemens Appliance Service", "siemens", "Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!"],
  ["Teka Appliance Service", "teka", "If you're searching for the best Teka appliances repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area."],
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
