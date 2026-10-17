// ==========================================================================
// Coffee Machine Brands Data Index
// Standalone Modules for each supported brand
// ==========================================================================

import frankeData from "./franke";
import laMarzoccoData from "./laMarzocco";
import gaggiaData from "./gaggia";
import nespressoData from "./nespresso";
import brevilleData from "./breville";
import profitecData from "./profitec";
import lelitData from "./lelit";
import merakiData from "./meraki";

export {
  frankeData,
  laMarzoccoData,
  gaggiaData,
  nespressoData,
  brevilleData,
  profitecData,
  lelitData,
  merakiData,
};

// Map of brand data indexed by key and slug for easy lookups
export const coffeeBrandDataMap = {
  franke: frankeData,
  "la-marzocco": laMarzoccoData,
  laMarzocco: laMarzoccoData,
  gaggia: gaggiaData,
  nespresso: nespressoData,
  breville: brevilleData,
  profitec: profitecData,
  lelit: lelitData,
  meraki: merakiData,
};

export function getCoffeeBrandData(identifier) {
  if (!identifier) return null;
  const normalized = String(identifier).trim().toLowerCase();
  return (
    coffeeBrandDataMap[normalized] ||
    coffeeBrandDataMap[normalized.replace(/-/g, "")] ||
    null
  );
}

export default coffeeBrandDataMap;
