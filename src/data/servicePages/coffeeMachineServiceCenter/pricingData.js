const pricingData = {
  eyebrow: "Inspection and Servicing Prices", 
  title: "Coffee Machine Pricing Plans",
  description: "Transparent starting prices for inspection and cleaning, with installation quoted for the selected machine and site.",
  defaultBadge: "Professional Care", pricePrefix: "Starting from", actionLabel: "Book now",
  items: [
    { 
      title: "Coffee Machine Technical Inspection", 
      badge: "Diagnostics Check", 
      price: "AED 170", 
      description: "A technician inspects the reported fault and provides a quotation for repair work and required parts.",
      popup: {
        title: "Coffee Machine Inspection scope of work",
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
              "The same call-out fee applies for diagnosing the coffee machine."
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
              "*Starting from AED 170, callout fee applies based on the type, brand, capacity of the coffee machine unit, and location for each diagnosis.",
          },
        ],
      },
    },
    { 
      title: "Coffee Machine Cleaning", 
      subtitle: "Selected work includes a 50-day service warranty", 
      badge: "Popular", 
      price: "AED 340", 
      description: "Professional coffee-machine cleaning and maintenance, subject to machine condition and service scope.",
      popup: {
        title: "Coffee Machine Cleaning",
        sections: [
          {
            items: [
              "Coffee Maker",
              "Coffee Brewer",
              "Coffee Grinder",
              "Coffee Machine",
              "Vending Machine",
              "Espresso Machine",
              "Automatic Coffee Machine",
              "Commercial Coffee Machine"
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
      title: "Coffee Machine Installation", 
      badge: "Professional Setup", 
      pricePrefix: "", 
      price: "Custom Quote", 
      description: "Correct installation, connection and setup based on the coffee-machine type and premises requirements.",
      popup: {
        title: "Coffee Machine Installation",
        sections: [
          {
            items: [
              "Coffee Maker Installation",
              "Coffee Brewer Installation",
              "Coffee Grinder Installation",
              "Coffee Machine Installation",
              "Vending Machine Installation",
              "Espresso Machine Installation",
              "Automatic Coffee Machine Installation",
              "Commercial Coffee Machine Installation",
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
              "*Starting from AED XXX fee applies based on the Capacity: Based on Type, Model, and Area for each unit.",
          },
        ],
      },
    },
  ],
};
export default pricingData;
