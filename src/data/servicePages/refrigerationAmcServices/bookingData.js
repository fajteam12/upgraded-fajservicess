const bookingData = {
  eyebrow: "Book an Appointment",
  title: "Request a Refrigeration AMC Audit",
  description:
    "Share your preferred date and location, then continue through WhatsApp to request a commercial refrigeration maintenance assessment.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in WhatsApp to send your request to the FAJ scheduling team.",
  defaultService: "Commercial Refrigeration AMC and PPM Services",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: {
      label: "Company / full name",
      placeholder: "e.g. Al Maya Supermarket / John Doe",
    },
    phone: {
      label: "Phone number (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: { label: "Service location / city" },
    date: { label: "Preferred audit date" },
  },
  modal: {
    eyebrow: "Request contract quote",
    description:
      "Enter your details and continue through WhatsApp to request a refrigeration AMC or PPM proposal.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request commercial refrigeration AMC or PPM service:",
  messageLabels: {
    name: "Name / company",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
