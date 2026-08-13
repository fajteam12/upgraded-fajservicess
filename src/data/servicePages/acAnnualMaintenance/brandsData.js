const linkedBrands = [
  ["Daikin AC Service", "daikin"], ["Gree AC Service", "gree"], ["O General AC Service", "o-general"],
  ["Mitsubishi AC Service", "mitsubishi"], ["Samsung AC Service", "samsung"], ["York AC Service", "york"],
  ["LG AC Service", "lg"], ["Trane AC Service", "trane"], ["Rheem AC Service", "rheem"], ["SKM AC Service", "skm"],
  ["Lennox AC Service", "lennox"], ["Aftron AC Service", "aftron"], ["Bryant AC Service", "bryant"],
  ["Blue Star AC Service", "blue-star"], ["Supra AC Service", "supra"], ["Toshiba AC Service", "toshiba"],
  ["Super General AC Service", "super-general"], ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Service", "whirlpool"], ["Daewoo AC Service", "daewoo"],
].map(([name, slug]) => ({ name, href: `/services/air-conditioning-repair/brands/${slug}/`, description: "Professional planned maintenance and repair for supported air-conditioning systems." }));

const brandsData = {
  eyebrow: "Multi-Brand Expertise", title: "AC Brands Covered by Our Maintenance Services",
  description: "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  searchLabel: "Search AC brands", searchPlaceholder: "Search air-conditioning brand", emptyMessage: "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Request AMC Coverage", items: linkedBrands,
};
export default brandsData;
