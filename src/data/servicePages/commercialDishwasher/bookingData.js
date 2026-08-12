const bookingData = {
  eyebrow: "Book an Appointment",
  title: "Book Your Commercial Dishwasher Service",
  description:
    "Share your preferred date and location, then continue through WhatsApp to send the request directly to the FAJ scheduling team.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in the WhatsApp window to send your request.",
  defaultService: "Commercial Dishwasher Repair and Maintenance",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "Company / full name", placeholder: "e.g. Grand Plaza Hotel / John Doe" },
    phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" },
    location: { label: "Your location / city" },
    date: { label: "Preferred appointment date" },
  },
  modal: {
    eyebrow: "Book service / request quote",
    description:
      "Enter your details and continue through WhatsApp to confirm your preferred commercial dishwasher appointment.",
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
