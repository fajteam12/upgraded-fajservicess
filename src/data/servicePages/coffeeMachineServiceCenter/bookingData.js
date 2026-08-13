const bookingData = {
  eyebrow: "Book an Appointment", title: "Request Coffee Machine Service",
  description: "Share your preferred date and location, then continue through WhatsApp to send the request to the FAJ scheduling team.",
  submitLabel: "Continue with booking request", successMessage: "Your booking details are ready. Continue in WhatsApp to send the request.",
  defaultService: "Coffee Machine Technical Inspection", locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: { name: { label: "Full name", placeholder: "e.g. John Doe" }, phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" }, location: { label: "Service location / city" }, date: { label: "Preferred appointment date" } },
  modal: { eyebrow: "Book coffee-machine service", description: "Enter your details and continue through WhatsApp to request inspection, cleaning, installation, repair or an AMC quotation.", submitLabel: "Continue with booking request", closeLabel: "Close booking dialog" },
  messageGreeting: "Hello FAJ Technical Services, I would like to book coffee-machine service:",
  messageLabels: { name: "Name", phone: "Phone", location: "Location", date: "Preferred date", page: "Page" },
};
export default bookingData;
