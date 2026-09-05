const featuredBrands = [
  ["LG Washing Machine Repair", "lg", "FAJ is here to help with your LG washing machine problems. We understand how important it is for your daily routine to keep your laundry fresh and clean. Whether you need express washing machine repair near me or thorough washing machine cleaning service nearby in Dubai, our expert team is ready to assist you. Contact us for reliable support and ensure your appliance runs smoothly."],
  ["Samsung Washing Machine Repair", "samsung", "Having trouble with your washing machine or dryer? You're in the perfect spot! Reach out to the FAJ team for trustworthy same-day washing machine repair and dryer service near me in Dubai. Our skilled washing machine technicians will swiftly diagnose and fix washing machine, washer dryer maintenance, and dryer repair, getting them back to peak performance in no time. We're excited to help you get your laundry back on track!"],
  ["Electrolux Washing Machine Repair", "electrolux", "If you need Electrolux washing machine repair or Electrolux washing machine service near you in Dubai, our team of professional and qualified washing machine technicians is available throughout Dubai and Sharjah. We offer expert washer dryer repair and maintenance services nearby. For reliable washing machine repair, look for washing machine cleaning service near you in Dubai."],
  ["Bosch Washing Machine Repair", "bosch", "If you're searching for the best Bosch washing machine repair company in Dubai, FAJ is the perfect choice. They are recognised for delivering exceptional washing machine service for all Bosch home appliance repair and are recognized as the leading Bosch washing machine service and maintenance near by you in the region. They also offer express dryer repair, washer dryer service, and maintenance in both Dubai and Sharjah."],
  ["Viking Washing Machine Repair", "viking", "Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking washing machine repair in Dubai, rely on FAJ. Get reliable washer dryer maintenance and service, and find washing machine services nearby in Dubai."],
  ["Daewoo Washing Machine Repair", "daewoo", "We provide expert washing machine repair and near me services in Dubai. Our skilled washer dryer technicians have the knowledge and expertise to diagnose and fix washing machine issues with Daewoo refrigerator, dishwasher, dryer and more."],
  ["Siemens Washing Machine Repair", "siemens", " Are you worried about your Siemens washing machine malfunctioning? Searching for a reliable washer dryer maintenance service in Dubai? Contact us for same-day service for washing machine cleaning service, dryer repair, and washer dryer maintenance!"],
  ["Teka Washing Machine Repair", "teka", "For reliable Teka washing machine repair in Dubai, FAJ is your best choice. They are renowned for their exceptional washer dryer maintenance services for Teka appliances, including washing machine cleaning service, fixing dryer, washer dryer repair or maintenance near me service, refrigerators, and ovens. FAJ is the top-rated service provider for Teka appliances in the area, guaranteeing quality and customer satisfaction."],
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
