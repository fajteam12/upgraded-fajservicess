const featuredBrands = [
  ["LG Dishwasher Repair", "lg", "FAJ is here to support you when issues arise. We understand that your LG dishwasher is essential for daily life, keeping your dishes clean and ready for every meal. Call FAJ for expert dishwasher repair near me and fix dishwasher errors."],
  ["Samsung Dishwasher Repair", "samsung", " If you are experiencing issues with your Samsung dishwasher, contact the FAJ team for same-day dishwasher repair service in Dubai. We offer dishwasher maintenance and dishwasher cleaning services in Dubai."],
  ["Electrolux Dishwasher Repair", "electrolux", "When you need Electrolux dishwasher repair in Dubai, we have a team of professional and qualified technicians available throughout Dubai and Sharjah. Contact us for dishwasher repair near me service and dishwasher maintenance in Dubai and Sharjah."],
  ["Bosch Dishwasher Repair", "bosch", "If you are looking for the best Bosch dishwasher repair in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch appliance repair and are recognized as the leading Bosch dishwasher repair and service provider in the area."],
  ["Viking Dishwasher Repair", "viking", "If you are looking for Viking dishwasher repair or maintenance and we can help. For high-quality Viking dishwasher maintenance service in Dubai, rely on FAJ. "],
  ["Daewoo Dishwasher Repair", "daewoo", "We provide expert services for Daewoo dishwasher repair near you in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer repair and more."],
  ["Siemens Dishwasher Repair", "siemens", "Are you concerned about your Siemens dishwasher malfunctioning and searching for a reliable Siemens dishwasher repair company in Dubai? Contact us for same-day service!"],
  ["Teka Dishwasher Repair", "teka", "If you're searching for the best Teka dishwasher repair near me service in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for fix Teka dishwasher, built in dishwasher repair services, refrigerators, washing machines, and oven repair. FAJ is recognized as the leading Teka appliance service provider in the area."],
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
