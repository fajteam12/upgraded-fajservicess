const HOME_APPLIANCE_BRAND_BASE =
  "/services/home-appliances-repair/brands";

const brandServiceRoutes = new Map([
  ["white westinghouse", `${HOME_APPLIANCE_BRAND_BASE}/white-westinghouse/`],
  ["fisher paykel", `${HOME_APPLIANCE_BRAND_BASE}/fisher-paykel/`],
  ["de dietrich", `${HOME_APPLIANCE_BRAND_BASE}/de-dietrich/`],
  ["speed queen", `${HOME_APPLIANCE_BRAND_BASE}/speed-queen/`],
  ["sub zero", `${HOME_APPLIANCE_BRAND_BASE}/sub-zero/`],
  ["delonghi", `${HOME_APPLIANCE_BRAND_BASE}/delonghi/`],
  [
    "sage",
    `${HOME_APPLIANCE_BRAND_BASE}/sage-coffee-machine-repair-and-service-in-dubai/`,
  ],
  [
    "jura",
    `${HOME_APPLIANCE_BRAND_BASE}/jura-coffee-machine-repair-and-service-in-dubai/`,
  ],
  ["aeg", `${HOME_APPLIANCE_BRAND_BASE}/aeg/`],
  ["admiral", `${HOME_APPLIANCE_BRAND_BASE}/admiral/`],
  ["aftron", `${HOME_APPLIANCE_BRAND_BASE}/aftron/`],
  ["ariston", `${HOME_APPLIANCE_BRAND_BASE}/ariston/`],
  ["baumatic", `${HOME_APPLIANCE_BRAND_BASE}/baumatic/`],
  ["beko", `${HOME_APPLIANCE_BRAND_BASE}/beko/`],
  ["bertazzoni", `${HOME_APPLIANCE_BRAND_BASE}/bertazzoni/`],
  ["blomberg", `${HOME_APPLIANCE_BRAND_BASE}/blomberg/`],
  ["bompani", `${HOME_APPLIANCE_BRAND_BASE}/bompani/`],
  ["bosch", `${HOME_APPLIANCE_BRAND_BASE}/bosch/`],
  ["boston", `${HOME_APPLIANCE_BRAND_BASE}/boston/`],
  ["brandt", `${HOME_APPLIANCE_BRAND_BASE}/brandt/`],
  ["candy", `${HOME_APPLIANCE_BRAND_BASE}/candy/`],
  ["daewoo", `${HOME_APPLIANCE_BRAND_BASE}/daewoo/`],
  ["electrolux", `${HOME_APPLIANCE_BRAND_BASE}/electrolux/`],
  ["elica", `${HOME_APPLIANCE_BRAND_BASE}/elica/`],
  ["faber", `${HOME_APPLIANCE_BRAND_BASE}/faber/`],
  ["fagor", `${HOME_APPLIANCE_BRAND_BASE}/fagor/`],
  ["foster", `${HOME_APPLIANCE_BRAND_BASE}/foster/`],
  ["franke", `${HOME_APPLIANCE_BRAND_BASE}/franke/`],
  ["frigidaire", `${HOME_APPLIANCE_BRAND_BASE}/frigidaire/`],
  ["gaggenau", `${HOME_APPLIANCE_BRAND_BASE}/gaggenau/`],
  ["gibson", `${HOME_APPLIANCE_BRAND_BASE}/gibson/`],
  ["gorenje", `${HOME_APPLIANCE_BRAND_BASE}/gorenje/`],
  ["haier", `${HOME_APPLIANCE_BRAND_BASE}/haier/`],
  ["hisense", `${HOME_APPLIANCE_BRAND_BASE}/hisense/`],
  ["hitachi", `${HOME_APPLIANCE_BRAND_BASE}/hitachi/`],
  ["hoover", `${HOME_APPLIANCE_BRAND_BASE}/hoover/`],
  ["indesit", `${HOME_APPLIANCE_BRAND_BASE}/indesit/`],
  ["kelvinator", `${HOME_APPLIANCE_BRAND_BASE}/kelvinator/`],
  ["kenmore", `${HOME_APPLIANCE_BRAND_BASE}/kenmore/`],
  ["kitchenaid", `${HOME_APPLIANCE_BRAND_BASE}/kitchenaid/`],
  ["lg", `${HOME_APPLIANCE_BRAND_BASE}/lg/`],
  ["liebherr", `${HOME_APPLIANCE_BRAND_BASE}/liebherr/`],
  ["marvel", `${HOME_APPLIANCE_BRAND_BASE}/marvel/`],
  ["maytag", `${HOME_APPLIANCE_BRAND_BASE}/maytag/`],
  ["miele", `${HOME_APPLIANCE_BRAND_BASE}/miele/`],
  ["panasonic", `${HOME_APPLIANCE_BRAND_BASE}/panasonic/`],
  ["samsung", `${HOME_APPLIANCE_BRAND_BASE}/samsung/`],
  ["sanyo", `${HOME_APPLIANCE_BRAND_BASE}/sanyo/`],
  ["sears", `${HOME_APPLIANCE_BRAND_BASE}/sears/`],
  ["sharp", `${HOME_APPLIANCE_BRAND_BASE}/sharp/`],
  ["siemens", `${HOME_APPLIANCE_BRAND_BASE}/siemens/`],
  ["smeg", `${HOME_APPLIANCE_BRAND_BASE}/smeg/`],
  ["teka", `${HOME_APPLIANCE_BRAND_BASE}/teka/`],
  ["terim", `${HOME_APPLIANCE_BRAND_BASE}/terim/`],
  ["thermador", `${HOME_APPLIANCE_BRAND_BASE}/thermador/`],
  ["toshiba", `${HOME_APPLIANCE_BRAND_BASE}/toshiba/`],
  ["unimac", `${HOME_APPLIANCE_BRAND_BASE}/unimac/`],
  ["viking", `${HOME_APPLIANCE_BRAND_BASE}/viking/`],
  ["whirlpool", `${HOME_APPLIANCE_BRAND_BASE}/whirlpool/`],
  ["wolf", `${HOME_APPLIANCE_BRAND_BASE}/wolf/`],
  ["zanussi", `${HOME_APPLIANCE_BRAND_BASE}/zanussi/`],
]);

function normalizeBrandName(name = "") {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\band\b/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export default function getBrandServiceRoute(name, explicitHref = "") {
  if (explicitHref) return explicitHref;

  const normalizedName = normalizeBrandName(name);

  for (const [brandName, route] of brandServiceRoutes) {
    if (
      normalizedName === brandName ||
      normalizedName.startsWith(`${brandName} `)
    ) {
      return route;
    }
  }

  return "";
}
