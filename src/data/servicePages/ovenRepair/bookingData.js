const bookingData = {
  eyebrow: "Book an Appointment",
  title: "Request Commercial Oven Repair",
  description:
    "Share your preferred date and location, then continue through WhatsApp to request onsite commercial oven support.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Commercial Oven Repair",
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
    eyebrow: "Request oven service",
    description:
      "Enter your details and continue through WhatsApp to request inspection, repair or a maintenance-plan quotation.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to request commercial oven service:",
  messageLabels: {
    name: "Name / company",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
