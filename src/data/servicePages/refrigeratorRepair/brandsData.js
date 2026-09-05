const featuredBrands = [
  ["LG Refrigerator Repair", "lg", "FAJ is here to support you when things go wrong. We understand that your LG refrigerator is essential for daily life, preserving your food and ensuring your meals are always prepared. FAJ is here for refrigerator repair near me and fridge freezer maintenance service in Dubai and Sharjah."],
  ["Samsung Refrigerator Repair", "samsung", "If you are facing any problems with your Samsung refrigerator repair, Samsung fridge freezer service, fix washer dryer, or dishwasher, contact the FAJ team for same day fridge repair near me service in Dubai."],
  ["Electrolux Refrigerator Repair", "electrolux", "When you need Electrolux refrigerator repair near me in Dubai, we have a team of professional and qualified fridge technicians available throughout Dubai. Call us now for freezer maintenance, fridge repair service near you in Dubai"],
  ["Bosch Refrigerator Repair", "bosch", "If you are looking for the best Bosch fridge repair near me service in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch appliance service provider in the area. FAJ is here to help with refrigerator repair near by you, freezer fridge maintenance service near me in Dubai"],
  ["Viking Fridge Freezer Repair", "viking", "Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking Fridge Freezer repair near me service in Dubai, rely on FAJ. Get same day refrigerator repair near me and built in refrigerator service and fix refrigerator error by FAJ."],
  ["Daewoo Refrigerator Repair", "daewoo", "We provide expert Daewoo fridge repair near me service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator repair, washing machine repair, dryer repair service and more. Book now fridge repair in Sharjah and Dubai Area."],
  ["Siemens Refrigerator Repair", "siemens", "Are you concerned about your Siemens appliance malfunctioning and searching for a reliable Siemens refrigerator repair services near me in Dubai? Contact us for same-day fridge repair near me service in your location Dubai and Sharjah!"],
  ["Teka Refrigerator Repair", "teka", "If you're searching for the best Teka appliance repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator maintenance and Teka refrigerator repair near me service, washing machine repair, and oven repairs. Freezer repair and freezer maintenance service. FAJ is recognized as the leading Teka appliance service provider in the area."],
].map(([name, slug, description]) => ({
  name,
  href: `/services/home-appliances-repair/brands/${slug}/`,
  description,
}));

const additionalBrandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Faber", "Fagor",
  "Fisher and Paykel", "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit",
  "LG", "Neff", "Smeg", "Sub Zero", "Terim", "Whirlpool", "Zanussi",
  "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston", "Brandt",
  "Gibson", "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic",
  "Sanyo", "Sears", "Wolf", "Haier", "Elica", "Marvel", "Miele", "Maytag",
  "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac",
];

const brandsData = {
  eyebrow: "Approved Brand Partners",
  title: "Refrigerator Brands We Service",
  description:
    "Search supported refrigerator and freezer brands. Dedicated brand pages are linked from their titles where available.",
  searchLabel: "Search refrigerator brands",
  searchPlaceholder: "Search fridge or freezer brand",
  emptyMessage: "No matching refrigerator brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Brand Service",
  items: [
    ...featuredBrands,
    ...additionalBrandNames.map((name) => ({
      name,
      description: "Refrigerator and freezer repair support in Dubai.",
    })),
  ],
};

export default brandsData;
