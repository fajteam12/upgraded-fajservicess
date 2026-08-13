const linkedBrands = [
  ["Daikin Air-Conditioning Services", "daikin"], ["Gree AC Repair and Service", "gree"],
  ["O General AC Repair and Maintenance", "o-general"], ["Mitsubishi AC Service and Repair", "mitsubishi"],
  ["Samsung AC Maintenance Service", "samsung"], ["York AC Servicing and Repair", "york"],
  ["LG AC Maintenance and Service", "lg"], ["Trane HVAC Repair and Maintenance", "trane"],
  ["Rheem AC Repair and Service", "rheem"], ["SKM AC Maintenance", "skm"],
  ["Lennox Air-Conditioning Maintenance", "lennox"], ["Aftron AC Maintenance", "aftron"],
  ["Bryant AC Repair", "bryant"], ["Blue Star AC Repair", "blue-star"],
  ["Supra AC Maintenance", "supra"], ["Toshiba AC Service", "toshiba"],
  ["Super General AC Repair", "super-general"], ["Hitachi AC Service", "hitachi"],
  ["Whirlpool AC Repair", "whirlpool"], ["Daewoo AC Cleaning", "daewoo"],
].map(([name, slug]) => ({ name, href: `/services/air-conditioning-repair/brands/${slug}/`, description: "Professional repair, cleaning and planned maintenance for supported air-conditioning systems." }));

const brandsData = {
  eyebrow: "Multi-Brand Expertise", title: "Air-Conditioning Brands We Service",
  description: "Search supported AC brands. Dedicated brand pages are linked directly from their titles.",
  searchLabel: "Search AC brands", searchPlaceholder: "Search air-conditioning brand", emptyMessage: "No matching AC brand was found. Contact us with the model details.",
  showAllLabel: "Show all brands", showLessLabel: "Show fewer brands", initialCount: 12, actionLabel: "Request AC Service", items: linkedBrands,
};
export default brandsData;
