const bookingData = {
  eyebrow: "Book an Appointment",
  title: "Book Your Meat Grinder Service",
  description:
    "Share your preferred date and location, then continue through WhatsApp to send the request directly to the FAJ scheduling team.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in the WhatsApp window to send your request.",
  defaultService: "Commercial Meat Grinder Repair and Maintenance",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: {
      label: "Company / full name",
      placeholder: "e.g. City Butchery / John Doe",
    },
    phone: {
      label: "Phone number (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: { label: "Your location / city" },
    date: { label: "Preferred appointment date" },
  },
  modal: {
    eyebrow: "Book service / request quote",
    description:
      "Enter your details and continue through WhatsApp to request a meat grinder inspection, repair or maintenance quote.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting: "Hello FAJ Technical Services, I would like to book:",
  messageLabels: {
    name: "Company / name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
