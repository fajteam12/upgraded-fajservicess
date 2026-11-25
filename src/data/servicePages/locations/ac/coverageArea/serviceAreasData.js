import { acCoverageLocations106 } from "../../../acCoverageLocations106";

const popularAreas = [
  {
    name: "Dubai Marina",
    href: "/services/air-conditioning-repair/coverage-area/dubai-marina/",
  },
  {
    name: "JBR (Jumeirah Beach Residence)",
    href: "/services/air-conditioning-repair/coverage-area/jbr/",
  },
  {
    name: "The Meadows",
    href: "/services/air-conditioning-repair/coverage-area/the-meadows/",
  },
  {
    name: "Downtown Dubai",
    href: "/services/air-conditioning-repair/coverage-area/downtown/",
  },
  {
    name: "Business Bay",
    href: "/services/air-conditioning-repair/coverage-area/business-bay/",
  },
  {
    name: "Arabian Ranches",
    href: "/services/air-conditioning-repair/coverage-area/arabian-ranches/",
  },
  {
    name: "Motor City",
    href: "/services/air-conditioning-repair/coverage-area/motor-city/",
  },
  {
    name: "The Springs",
    href: "/services/air-conditioning-repair/coverage-area/the-springs/",
  },
  {
    name: "JLT (Jumeirah Lake Towers)",
    href: "/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/",
  },
  {
    name: "Dubai Hills Estate",
    href: "/services/air-conditioning-repair/coverage-area/dubai-hills-estate/",
  },
  {
    name: "Palm Jumeirah",
    href: "/services/air-conditioning-repair/coverage-area/palm-jumeirah/",
  },
  {
    name: "Silicon Oasis",
    href: "/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/",
  },
  {
    name: "JVC (Jumeirah Village Circle)",
    href: "/services/air-conditioning-repair/coverage-area/jvc/",
  },
  {
    name: "Discovery Gardens",
    href: "/services/air-conditioning-repair/coverage-area/discovery-gardens/",
  },
  {
    name: "Sports City",
    href: "/services/air-conditioning-repair/coverage-area/dubai-sport-city/",
  },
];

const popularHrefs = new Set(
  popularAreas.map((item) => item.href.toLowerCase())
);

const additionalLocations = acCoverageLocations106.filter(
  (loc) => !popularHrefs.has(loc.href.toLowerCase())
);

const serviceAreasData = {
  title: "Our Service Areas Across Dubai",
  description:
    "We offer dependable air conditioning maintenance services across Dubai, including:",
  subheading: "Popular Areas",
  initialCount: 15,
  showMoreLabel: "View All 106 Coverage Areas",
  showLessLabel: "Show Less",
  searchPlaceholder: "Search AC service areas across Dubai...",
  items: [...popularAreas, ...additionalLocations],
};

export default serviceAreasData;
