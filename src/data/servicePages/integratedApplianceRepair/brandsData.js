const featuredBrands = [
  ["LG Appliance Repair and Service", "lg", "FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked. Contact us for LG washing machine repair, LG refrigerator repair near me, LG dishwasher, LG fridge, and LG dryer repair and service near you."],
  ["Samsung Appliance Repair and Service", "samsung", "If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, we here support your Samsung washer dryer repair, Samsung refrigerator repair, Samsung fridge service, and Samsung dishwasher repair service near by you in Dubai."],
  ["Electrolux Appliance Repair and Service", "electrolux", "When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the Dubai. Get same day service by FAJ team for your Electrolux washing machine repair, Electrolux dishwasher repair, Electrolux refrigerator repair and washer dryer repair near me service in Dubai."],
  ["Bosch Appliance Repair and Service", "bosch", "If you are looking for the best Bosch refrigerator repair in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range repair, washing machine repair, refrigerator service provider in the area in Dubai."],
  ["Viking Appliance Repair and Service", "viking", "Your Viking appliance repair or maintenance and we can help. For high-quality Viking refrigerator repairs, gas range service, fix dishwasher, oven repair in Dubai, rely on FAJ."],
  ["Daewoo Appliance Repair and Service", "daewoo", "We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with repair Daewoo refrigerator, fixing dishwasher, repairing dryer and more."],
  ["Siemens Appliance Repair and Service", "siemens", "Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances service in Dubai? Contact us for same-day Siemens washing machine repair, Siemens refrigerator repair, Siemens dishwasher repair, Siemens oven and cooker repair and service near by you in Dubai."],
  ["Teka Appliance Repair and Service", "teka", "If you're searching for the best Teka appliances repair in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator repair, Teka washing machine repair, Teka gas stove repair, Teka hood repair and Teka oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area."],
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
