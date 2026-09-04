const defaultBrandDescription =
  "Professional repair, cleaning and planned maintenance for supported air-conditioning systems.";

const linkedBrands = [
  [
    "Daikin Air-Conditioning Services",
    "daikin",
    'Daikin, a Japanese manufacturer, claims to be "the world\'s number one air conditioning company." Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication. We work with Daikin air conditioning products because the company continuously invests in research and development.',
  ],
  [
    "Gree AC Repair and Service",
    "gree",
    "Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China's largest air conditioner manufacturer by 2000.",
  ],
  [
    "O General AC Repair and Maintenance",
    "o-general",
    "O General AC, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions.",
  ],
  [
    "Mitsubishi AC Service and Repair",
    "mitsubishi",
    "Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.",
  ],
  [
    "Samsung AC Maintenance Service",
    "samsung",
    "Samsung AC is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology.",
  ],
  [
    "York AC Servicing and Repair",
    "york",
    "YORK® has been an industry leader since our founding in 1874.",
  ],
  [
    "LG AC Maintenance and Service",
    "lg",
    "LG history in air conditioning began in 1968 with the launch of its first unit.",
  ],
  [
    "Trane HVAC Repair and Maintenance",
    "trane",
    "Trane developed its first air conditioning unit in 1931.",
  ],
  [
    "Rheem AC Repair and Service",
    "rheem",
    "Rheem AC was founded in 1925 in California, initially making steel drums. It quickly transitioned to manufacturing water heaters and, in the 1940s and 1950s, expanded into furnaces, split, central air conditioning systems to meet the growing demand for home comfort. Today, Rheem is a leading global HVAC provider known for its innovation and diverse heating and cooling solutions.",
  ],
  ["SKM AC Maintenance", "skm"],
  ["Lennox Air-Conditioning Maintenance", "lennox"],
  ["Aftron AC Maintenance", "aftron"],
  ["Bryant AC Repair", "bryant"],
  ["Blue Star AC Repair", "blue-star"],
  ["Supra AC Maintenance", "supra"],
  ["Toshiba AC Service", "toshiba"],
  ["Super General AC Repair", "super-general"],
  ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Repair", "whirlpool"],
  ["Daewoo AC Cleaning", "daewoo"],
].map(([name, slug, description]) => ({
  name,
  href: `/services/air-conditioning-repair/brands/${slug}/`,
  ...(description ? { description } : {}),
}));

const brandsData = {
  eyebrow: "Multi-Brand Expertise", title: "We Specialise in Air Conditioning Maintenance Services for the Following Brands",
  description: "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  defaultItemDescription: defaultBrandDescription,
  searchLabel: "Search AC brands", searchPlaceholder: "Search air-conditioning brand", emptyMessage: "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Request AMC Coverage", items: linkedBrands,
};
export default brandsData;
