const bookingData = {
  eyebrow: "Request Air Conditioning Service",
  title: "Book AC Repair or Maintenance",
  description:
    "Share your preferred date and location, then continue through WhatsApp to send the request directly to the FAJ scheduling team.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in the WhatsApp window to send your request.",
  defaultService: "Air Conditioning Repair and Maintenance",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "Full name", placeholder: "e.g. John Doe" },
    phone: {
      label: "Phone number (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: { label: "Property location / city" },
    date: { label: "Preferred appointment date" },
  },
  modal: {
    eyebrow: "Book inspection / request quote",
    description:
      "Enter your details and continue through WhatsApp to request AC diagnosis, repair, cleaning, gas service or an AMC quotation.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
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
