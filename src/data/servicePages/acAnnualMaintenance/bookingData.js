const bookingData = {
  eyebrow: "Book an Appointment", title: "Request an AC Maintenance Contract",
  description: "Share your preferred date and location, then continue through WhatsApp to discuss system quantity, plan duration and required coverage.",
  submitLabel: "Continue with AMC request", successMessage: "Your AC AMC details are ready. Continue in WhatsApp to send the request to the FAJ contracts team.",
  defaultService: "Yearly AC Maintenance Contract", locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: { name: { label: "Full name", placeholder: "e.g. John Doe" }, phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" }, location: { label: "Property location / city" }, date: { label: "Preferred inspection date" } },
  modal: { eyebrow: "Request AC AMC coverage", description: "Enter your details and continue through WhatsApp to discuss air-conditioning maintenance-contract options.", submitLabel: "Continue with AMC request", closeLabel: "Close AC AMC dialog" },
  messageGreeting: "Hello FAJ Technical Services, I would like to request AC AMC coverage:",
  messageLabels: { name: "Name", phone: "Phone", location: "Location", date: "Preferred date", page: "Page" },
};
export default bookingData;
