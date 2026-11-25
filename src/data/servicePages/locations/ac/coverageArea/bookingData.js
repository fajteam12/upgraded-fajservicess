const bookingData = {
  eyebrow: "BOOK YOUR SERVICE",

  title: "BOOK AN APPOINTMENT",

  description:
    "Book your appointment with our expert team. We provide professional inspection, fault diagnosis, component-level repair, and maintenance services to restore functionality, ensure reliable performance, and extend the lifespan of your equipment.",

  primaryAction: "BOOK NOW",
  secondaryAction: "Our Services",

  cardTitle: "IT'S QUICK & EASY",
  cardDescription:
    "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",

  submitLabel: "CONTINUE WITH BOOKING REQUEST →",

  successMessage:
    "Your booking details are ready. Continue in the WhatsApp window to send your request.",

  defaultService:
    "Air Conditioning Repair and Maintenance",

  locations: [
    "Dubai",
    "Sharjah",
    "Abu Dhabi",
  ],

  fields: {
    name: {
      label: "FULL NAME",
      placeholder: "e.g. John Doe",
    },

    phone: {
      label: "PHONE NUMBER (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },

    location: {
      label: "PROPERTY LOCATION / CITY",
    },

    date: {
      label: "PREFERRED APPOINTMENT DATE",
    },
  },

  modal: {
    eyebrow:
      "Book inspection / request quote",

    description:
      "Enter your details and continue through WhatsApp to request AC diagnosis, repair, cleaning, gas service or an AMC quotation.",

    submitLabel:
      "CONTINUE WITH BOOKING REQUEST →",

    closeLabel:
      "Close booking dialog",
  },

  messageGreeting:
    "Hello FAJ Technical Services, I would like to book air-conditioning service:",

  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
