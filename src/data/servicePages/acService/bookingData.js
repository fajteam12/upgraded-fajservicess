const bookingData = {
  eyebrow: "Book an Appointment", title: "Request AC Service",
  description: "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation.",
  submitLabel: "Continue with booking request", successMessage: "Your AC service details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "AC Inspection Service", locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: { name: { label: "Full name", placeholder: "e.g. John Doe" }, phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" }, location: { label: "Property location / city" }, date: { label: "Preferred appointment date" } },
  modal: { eyebrow: "Request AC support", description: "Enter your details and continue through WhatsApp to request AC repair, cleaning, maintenance or AMC coverage.", submitLabel: "Continue with booking request", closeLabel: "Close AC booking dialog" },
  messageGreeting: "Hello FAJ Technical Services, I would like to request AC service:",
  messageLabels: { name: "Name", phone: "Phone", location: "Location", date: "Preferred date", page: "Page" },
};
export default bookingData;
