const titleCaseAcronyms = new Map([
  ["AC", "AC"],
  ["AMC", "AMC"],
  ["B2B", "B2B"],
  ["DIY", "DIY"],
  ["FAJ", "FAJ"],
  ["FAQS", "FAQs"],
  ["GCC", "GCC"],
  ["GE", "GE"],
  ["HVAC", "HVAC"],
  ["LED", "LED"],
  ["LG", "LG"],
  ["MEP", "MEP"],
  ["PPM", "PPM"],
  ["TCL", "TCL"],
  ["TV", "TV"],
  ["UAE", "UAE"],
  ["UK", "UK"],
  ["USA", "USA"],
  ["VRF", "VRF"],
  ["VRV", "VRV"],
]);

export function toTitleCase(value) {
  if (typeof value !== "string") return value;

  return value.replace(/[\p{L}\p{N}]+/gu, (word) => {
    const acronym = titleCaseAcronyms.get(word.toUpperCase());
    if (acronym) return acronym;
    if (/[a-z][A-Z]/.test(word)) return word;

    const lowercaseWord = word.toLowerCase();
    return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
  });
}
