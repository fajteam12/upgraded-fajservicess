const dryerBrands = [
  "Samsung Dryers", "LG Dryers", "Electrolux Dryers", "Miele Dryers", "Maytag Dryers",
  "Siemens Dryers", "Bosch Tumble Dryers", "Whirlpool Dryers", "Gaggenau Dryers",
  "Frigidaire Dryers", "White-Westinghouse Dryers",
];

const dryerBrandsData = {
  eyebrow: "Express Tumble Dryer Support",
  title: "Commercial Tumble Dryer Repair Brands",
  description:
    "Search supported dryer brands and request prompt diagnosis for heating, airflow, drum, control and safety faults.",
  searchLabel: "Search tumble dryer brands",
  searchPlaceholder: "Search dryer brands",
  emptyMessage: "No matching dryer brand was found.",
  showAllLabel: "Show all dryer brands",
  showLessLabel: "Show fewer dryer brands",
  initialCount: 11,
  actionLabel: "Book Dryer Service",
  items: dryerBrands.map((name) => ({
    name,
    description: `${name} inspection, cleaning, maintenance and repair support in Dubai.`,
  })),
};

export default dryerBrandsData;
