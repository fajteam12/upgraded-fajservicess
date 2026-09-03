const pricingData = {
  eyebrow: "Service Prices",
  title: "Our Primary Oven Service Rates",
  description:
    "Transparent inspection, deep oven cleaning and installation pricing across Dubai.",
  defaultBadge: "Professional Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "Oven Technical Inspection",
      price: "AED 157",
      description:
        "A technician inspects the faulty oven before providing a quotation for repair and required parts.",
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
      title: "Oven Cleaning",
      subtitle: "50-Day Service Warranty",
      badge: "Popular",
      price: "AED 340",
      description:
        "Book professional oven cleaning with competitive pricing and scheduled availability across Dubai.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Oven Cleaning",
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
      title: "Oven Installation",
      price: "AED 280",
      description:
        "FAJ technicians install compatible built-in gas and electric ovens with suitable alignment and connections.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Oven Installation",
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
