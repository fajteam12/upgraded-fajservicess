const pricingData = {
  eyebrow: "Service Prices",
  title: "Our Primary Hob Service Rates",
  description:
    "Transparent hob diagnostics, professional cleaning and installation pricing across Dubai.",
  defaultBadge: "Professional Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "Hob Technical Inspection",
      price: "AED 157",
      description:
        "Tell us about the faulty hob and a technician will inspect it before providing a quotation for repair and required parts.",
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
              "*Starting from AED 157, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.",
          },
        ],
      },
    },
    {
      title: "Hob Cleaning",
      subtitle: "50-Day Service Warranty",
      badge: "Popular",
      price: "AED 340",
      description:
        "Book professional hob cleaning with competitive pricing and scheduled availability across Dubai.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Hob Cleaning"
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
              "*Starting from AED 340 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
    {
      title: "Hob Installation",
      price: "AED 280",
      description:
        "FAJ technicians install compatible gas, electric and induction hobs with suitable connections and alignment.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Hob Installation",
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
