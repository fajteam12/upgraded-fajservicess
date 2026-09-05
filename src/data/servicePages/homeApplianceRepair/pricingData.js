const pricingData = {
  eyebrow: "Service Prices",
  title: "Our Primary Appliance Service Rates",
  description:
    "Transparent inspection, professional cleaning and secure installation pricing across Dubai.",
  defaultBadge: "Professional Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",
  items: [
    {
      title: "Inspection / Check-Up Cost",
      price: "AED 157",
      description:
        "Tell us about the faulty appliance and our technician will inspect it before providing a quotation for repair and required parts.",
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
      title: "Appliance Cleaning",
      subtitle: "50-Day Service Warranty",
      badge: "Popular",
      price: "AED 340",
      description:
        "Book professional appliance cleaning for selected equipment with competitive pricing and scheduled availability across Dubai.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Hob Cleaning",
              "Oven Cleaning",
              "Freezer Cleaning",
              "Gas Range Cleaning",
              "Dishwasher Cleaning",
              "Refrigerator Cleaning",
              "Hood / Chimney Cleaning",
              "Washing Machine Cleaning"
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
      title: "Home Appliances Installation",
      price: "AED 280",
      description:
        "FAJ technicians install freestanding home appliances correctly to support safe connections and reliable performance.",
      popup: {
        title: "Depending on quantities, capacity, type, model, and area",
        sections: [
          {
            items: [
              "Refrigerator Installation",
              "Dish Washer Installation",
              "Electric Cooker Installation",
              "Hood / Chimney Installation",
              "Washing Machine Installation",
              "Built-in Microwave Installation",
              "Built-in Dishwasher Installation"
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
