const primaryServicesData = {
  eyebrow: "Service Standard Costs",
  title: "Our Primary Service Offerings",
  description:
    "Book trained appliance technicians with clear starting rates for inspection, cleaning and installation.",
  pricePrefix: "Starting from",
  actionLabel: "Book Now",
  items: [
    {
      badge: "Technical Diagnosis",
      title: "Inspection / Check-Up Cost",
      price: "AED 157",
      description:
        "Tell us about the faulty appliance and our technician will inspect it, explain the fault and provide a quotation for repair and parts.",
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
              "The same call-out fee applies for diagnosing the appliance."
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
      badge: "50-Day Warranty",
      title: "Appliance Cleaning",
      price: "AED 340",
      description:
        "Professional appliance cleaning for suitable equipment, with competitive pricing and limited appointment availability across Dubai.",
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
              "*Starting from AED 230 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
    {
      badge: "Professional Setup",
      title: "Home Appliances Installation",
      price: "AED 280",
      description:
        "FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!",
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

export default primaryServicesData;
