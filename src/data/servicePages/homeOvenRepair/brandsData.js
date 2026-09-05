const featuredBrands = [
  ["Smeg Oven Repair", "smeg", "FAJ is here to assist you when things go wrong. We understand that your Smeg oven is essential for daily life, helping keep your food fresh and your meals prepared. We offer electric oven repair near me service, gas oven repair and maintenance services in Dubai"],
  ["Siemens Oven Repair", "siemens", " If you're experiencing issues with your oven, stove, refrigerator, washer, dryer, or dishwasher, reach out to the FAJ team for same-day repair service in Dubai. Contact us for fix gas oven, and gas oven servicing near by your location in Dubai."],
  ["La Germania Gas Oven Repair", "la-germania", "When you need La Germania gas oven repair in Dubai, for La Germania electric oven service and repair in Dubai, our qualified oven repair technicians are available throughout."],
  ["Bosch Electric Oven Repair", "bosch", "If you're searching for the best Bosch electric oven repair and stove oven repair company in Dubai, FAJ is the perfect choice. They are renowned for delivering exceptional service for all Bosch electric oven maintenance and are recognized as the leading Bosch appliance service provider in the region."],
  ["Viking Stove and Oven Repair", "viking", "Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking stove and microwave oven repair near me service in Dubai, trust FAJ."],
  ["Daewoo Oven Repair", "daewoo", "We offer expert Daewoo gas oven repair services in Dubai. Our experienced technicians possess the knowledge and skills to diagnose and microwave oven repair issues with Daewoo electric stove oven maintenance near me service, refrigerators, washing machines, dryers, and more."],
  ["Neff Oven Repair", "neff", "Are you worried about your Neff oven malfunctioning and looking for a trustworthy Neff oven repair and service in Dubai? Contact us for same-day electrical oven repair near me service!"],
  ["Teka Stove and Oven Repair", "teka", "If you're looking for the best Teka oven repair company in Dubai, FAJ is the perfect choice. They are well-known for providing outstanding service for Teka refrigerators, washing machines, fixing gas oven and gas oven servicing. FAJ is recognised as the leading Teka appliance service provider in the region."],
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
