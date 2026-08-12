const brandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Electrolux", "Faber", "Fagor", "Fisher & Paykel",
  "Foster", "Gaggenau", "Hitachi", "Hobart", "Hoover", "Indesit", "LG", "Meiko",
  "Sub-Zero", "Terim", "Whirlpool", "Winterhalter", "Zanussi", "De Dietrich", "Baumatic",
  "Bertazzoni", "Bompani", "Boston", "Brandt", "Gibson", "Gorenje", "Hisense", "Kelvinator",
  "Kenmore", "Panasonic", "Sanyo", "Sears", "Wolf", "Haier", "Elica", "Marvel", "Miele",
  "Maytag", "Toshiba", "Thermador", "Sharp", "Admiral", "Aftron", "Unimac", "Elettrobar",
];

const otherBrandsData = {
  eyebrow: "Official & Generic Brand Repairs",
  title: "Other Commercial Dishwasher Brands We Service",
  description:
    "Search our wider brand coverage. If your manufacturer is not listed, contact FAJ with the model details for confirmation.",
  searchLabel: "Search commercial dishwasher brands",
  searchPlaceholder: "Search by brand name",
  emptyMessage: "No matching brand was found. Contact us with the manufacturer and model number.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Service",
  items: brandNames.map((name) => ({
    name,
    description: `Commercial dishwasher inspection, maintenance and repair support for ${name} equipment.`,
  })),
};

export default otherBrandsData;
