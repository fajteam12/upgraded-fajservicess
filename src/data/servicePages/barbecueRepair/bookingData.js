const bookingData = {
  eyebrow: "Book an Appointment",
  title: "Request BBQ Repair and Cleaning",
  description:
    "Share your preferred date and location, then continue through WhatsApp to send the request directly to the FAJ scheduling team.",
  submitLabel: "Continue with booking request",
  successMessage:
    "Your booking details are ready. Continue in the WhatsApp window to send your request.",
  defaultService: "Barbecue Grill Repair and Cleaning",
  locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: {
    name: { label: "Full name", placeholder: "e.g. John Doe" },
    phone: {
      label: "Phone number (UAE)",
      placeholder: "e.g. +971 50 123 4567",
    },
    location: { label: "Service location / city" },
    date: { label: "Preferred appointment date" },
  },
  modal: {
    eyebrow: "Book service / request quote",
    description:
      "Enter your details and continue through WhatsApp to request BBQ inspection, cleaning, repair or maintenance coverage.",
    submitLabel: "Continue with booking request",
    closeLabel: "Close booking dialog",
  },
  messageGreeting:
    "Hello FAJ Technical Services, I would like to book barbecue grill service:",
  messageLabels: {
    name: "Name",
    phone: "Phone",
    location: "Location",
    date: "Preferred date",
    page: "Page",
  },
};

export default bookingData;
