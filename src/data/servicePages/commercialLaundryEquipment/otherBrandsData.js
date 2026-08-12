const brandNames = [
  "AEG", "Ariston", "Beko", "Blomberg", "Electrolux", "Faber", "Fagor", "Fisher & Paykel",
  "Foster", "Gaggenau", "Hitachi", "Hoover", "Indesit", "LG", "Sub-Zero", "Terim",
  "Whirlpool", "Zanussi", "De Dietrich", "Baumatic", "Bertazzoni", "Bompani", "Boston",
  "Brandt", "Gibson", "Gorenje", "Hisense", "Kelvinator", "Kenmore", "Panasonic", "Sanyo",
  "Sears", "Wolf", "Haier", "Elica", "Marvel", "Miele", "Maytag", "Toshiba", "Thermador",
  "Sharp", "Admiral", "Aftron", "UniMac",
];

const otherBrandsData = {
  eyebrow: "Wider Brand Coverage",
  title: "Other Commercial Laundry Brands We Service",
  description:
    "If your manufacturer is not listed, contact FAJ with the equipment type and model number for confirmation.",
  searchLabel: "Search commercial laundry brands",
  searchPlaceholder: "Search by brand name",
  emptyMessage: "No matching brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands",
  showLessLabel: "Show fewer brands",
  initialCount: 12,
  actionLabel: "Book Service",
  items: brandNames.map((name) => ({
    name,
    description: `Commercial washer and dryer maintenance and repair support for ${name} equipment.`,
  })),
};

export default otherBrandsData;
