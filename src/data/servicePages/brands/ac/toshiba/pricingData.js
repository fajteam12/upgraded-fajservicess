const pricingData = {
  id: "pricing",
  title: "AC Inspection, Cleaning and Maintenance Prices",
  description:
    "Choose a starting service based on your air-conditioning system. Final quotations depend on unit type, condition and required work.",
  defaultBadge: "Professional AC Care",
  pricePrefix: "Starting from",
  actionLabel: "Book now",

  items: [
    {
      title: "AC Inspection Service",
      badge: "Diagnostics",
      price: "AED 215",
      image: {
        id: "ac-service-page/ac-inspection",
        src: "/img/ac-service-page/ac-inspection.webp",
      },
      description:
        "Is your AC not cooling your place? Is the AC thermostat broken, or is the fan making strange noises? Give us a call",
      popup: {
        title: "AC Call-Out (Technical Inspection) scope of works:",
        sections: [
          {
            items: [
              "Resolving air flow issues",
              "AC thermostat check-up",
              "Refrigerant Level check-up",
              "Rectification of AC power trip",
              "Rectification of AC water leakage",
              "Fixing AC cooling/overcooling issues",
              "Addressing sound problems from the AC",
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
              "Starting from AED 215 callout fee applies based on the type, capacity of the unit, and location for each diagnosis.",
          },
        ],
      },
    },

    {
      title: "Basic AC Cleaning",
      subtitle: "Selected work includes a 60-day service warranty",
      warranty: "60 - Days Warranty",
      badge: "Popular",
      price: "AED 280",
      image: {
        id: "ac-service-page/ac-cleaning-price",
        src: "/img/ac-service-page/ac-cleaning-price.webp",
      },
      description:
        "If your AC has reduced airflow or is leaking water, work quickly. Regularly clean filters and drain to provide efficiency and good air quality.",
      popup: {
        title: "AC Filter Cleaning scope of works:",
        sections: [
          {
            items: [
              "Cleaning the AC filters",
              "Checking the AC thermostat",
              "Checking the Gas Pressure",
              "Flushing the AC Drain line with water",
              "Checking the unit noise and unusual sounds",
              "Addressing minor water leaks found during servicing",
            ],
          },
          {
            label: "Excluded",
            text:
              "Any AC parts replacement, complex electrical repairs, major water leakage fixes, or full coil chemical overhauls.",
          },
          {
            label: "Terms & Conditions",
            text:
              "Starting from AED 280 fee covers basic cleaning per single split or ducted unit indoor and outdoor filter/drain flush.",
          },
        ],
      },
    },

    {
      title: "AC Maintenance",
      subtitle: "Selected work includes a 60-day service warranty",
      warranty: "60 - Days Warranty",
      badge: "Preventive Care",
      price: "AED 325",
      image: {
        id: "ac-service-page/ac-maintenance-price",
        src: "/img/ac-service-page/ac-maintenance-price.webp",
      },
      description:
        "Relax and save money by keeping our expert technicians clean and maintain your AC, stopping unnecessary breakdowns.",
      popup: {
        title: "AC Full Maintenance (Service & Tune-up) scope of works:",
        sections: [
          {
            items: [
              "Full indoor & outdoor coil chemical wash",
              "Fan blower deep cleaning and motor lubrication",
              "Complete condensate tray disinfection & chemical flush",
              "Capacitor, contractor, and compressor terminal tightening",
              "Refrigerant top-up and operating temperature differential check",
              "Thermostat recalibration and energy optimization test",
            ],
          },
          {
            label: "Excluded",
            text:
              "Major component rewinding, compressor replacement, or complete copper pipe retrofits.",
          },
          {
            label: "Terms & Conditions",
            text:
              "Starting from AED 325 applies to comprehensive preventive maintenance tune-up per standard residential unit.",
          },
        ],
      },
    },
  ],

  notes: [
    "Final pricing depends on unit type (Split, Ducted, Package, VRF), capacity, and accessibility.",
    "Emergency call-outs and non-standard parts are quoted transparently before work begins.",
  ],
};

export default pricingData;
