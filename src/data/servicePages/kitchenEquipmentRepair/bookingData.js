const bookingData = {
  eyebrow: "Book a Diagnostic Visit",
  title: "Request Commercial Kitchen Equipment Service",
  description:
    "Share your preferred date and location, then continue through WhatsApp to request inspection, maintenance or repair.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Commercial Kitchen Equipment Maintenance and Repair",
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
    date: { label: "Preferred service date" },
  },
  modal: {
    eyebrow: "Request kitchen service",
    description:
      "Enter your details and continue through WhatsApp to request commercial kitchen support or a maintenance quotation.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request commercial kitchen equipment service:",
  messageLabels: {
    name: "Name / company",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
