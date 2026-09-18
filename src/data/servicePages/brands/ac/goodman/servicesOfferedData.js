const servicesOfferedData = {
  id: "goodman-ac-services",
  eyebrow: "Goodman AC Services and Diagnostics",
  title: "HERE ARE THE SERVICES WE OFFER FOR Goodman AC SYSTEMS",
  description:
    "We specialise in a wide range of HVAC systems, featuring top brands and advanced Fresh Air Handling Units (FAHU).",
  lead: "Our services include:",
  items: [
    {
      icon: "wrench",
      title: "Goodman AC Installation",
      description:
        "Professional installation of various Goodman air conditioning systems ensures optimal performance.",
      actionLabel: "Request Installation",
    },
    {
      icon: "thermometer",
      title: "Goodman AC Inspection",
      description:
        "Detailed fault diagnosis to accurately identify system issues. We provide comprehensive quotes and eligibility assessments to address any concerns you may have.",
      actionLabel: "Book Inspection",
    },
    {
      icon: "settings",
      title: "Goodman AC Repair Service",
      description: {
        parts: [
          "We offer fast ",
          {
            text: "Goodman AC repair service",
            href:
              "https://www.google.com/search?q=faj+technical+llc+gmb&rlz=1C1GCEU_en-GBPK1161PK1162&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIPCAYQLhgnGK8BGMcBGOoCMgkIBxAjGCcY6gLSAQsyNzQ0OTUwajBqN6gCCLACAfEFNHg2jm1mi9w&sourceid=chrome&ie=UTF-8",
            external: true,
            strong: true,
          },
          " components, including leaks, electrical failures, and malfunctions. Contact us for details or inquiries!",
        ],
      },
      actionLabel: "Request Repair",
    },
    {
      icon: "calendar",
      title: "Goodman AC Annual Maintenance Contract",
      description:
        "This contract outlines the Goodman AC annual maintenance terms.",
      actionLabel: "Request AMC",
    },
  ],
  footer: {
    parts: [
      "Regular AC maintenance (AMC/PPM) is vital for ensuring performance, efficiency, and longevity.",
    ],
  },
};

export default servicesOfferedData;