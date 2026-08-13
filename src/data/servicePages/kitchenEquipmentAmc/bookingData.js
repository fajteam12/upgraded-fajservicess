const bookingData = {
  eyebrow: "Book an AMC Audit",
  title: "Request a Kitchen Equipment Maintenance Assessment",
  description:
    "Share your preferred date and location, then continue through WhatsApp to request a commercial kitchen AMC proposal.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your audit details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Commercial Kitchen Equipment AMC",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: {
      label: "Company / full name",
      placeholder: "e.g. Restaurant name / John Doe",
    },
    phone: {
      label: "Phone number (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: { label: "Service location / city" },
    date: { label: "Preferred audit date" },
  },
  modal: {
    eyebrow: "Request AMC quotation",
    description:
      "Enter your details and continue through WhatsApp to request a tailored kitchen-equipment maintenance plan.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request a commercial kitchen equipment AMC assessment:",
  messageLabels: {
    name: "Name / company",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
