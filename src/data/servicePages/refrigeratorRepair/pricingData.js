const pricingData = {
  eyebrow: "Service Prices",
  title: "Our Primary Refrigerator Service Rates",
  description:
    "Transparent refrigerator inspection, deep cleaning and installation pricing across Dubai.",
  defaultBadge: "Professional Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "Refrigerator Technical Inspection",
      price: "AED 157",
      description:
        "A technician diagnoses the faulty fridge or freezer before providing a quotation for repair and parts.",
      popup: {
        title: "Inspection / Check-Up Cost scope of work",
        sections: [
          {
            items: [
              "Inspection visit fee",
              "Rectification of faults",
              "Cost of minor repair work",
              "Transportation pricing for services",
              "Technical inspection onsite or workshop",
              "Pick-up, drop-off, and reinstallation onsite",
              "A quotation can be provided via call, WhatsApp, or email if needed.",
              "The same call-out fee applies for diagnosing either one or two appliances at the same place."
            ],
          },
          {
            label: "Excluded",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text:
              "*Starting from AED 100, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "Refrigerator Cleaning",
      subtitle: "50-Day Service Warranty",
      badge: "Popular",
      price: "AED 340",
      description:
        "Book professional refrigerator cleaning with scheduled availability across Dubai.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Refrigerator Cleaning",
              "Fridge Cleaning",
            ],
          },
          {
            label: "Excluded",
            text:
              "Cost for any repair work, procurement cost, cost of any new parts and installation, if required.",
          },
          {
            label: "Terms & Conditions",
            text:
              "*Starting from AED 230 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
    {
      title: "Refrigerator Installation",
      price: "AED 280",
      description:
        "FAJ technicians position and install compatible refrigerators with the required clearances and connections.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Refrigerator Installation",
              "Fridge Installation",
            ],
          },
          {
            label: "Excluded",
            text:
              "Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.",
          },
          {
            label: "Terms & Conditions",
            text:
              "*Starting from AED 280 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
  ],
};

export default pricingData;
