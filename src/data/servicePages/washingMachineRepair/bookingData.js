const bookingData = {
  eyebrow: "Quick Dispatch Request", title: "Book a Washing Machine Service Appointment",
  description: "Share your preferred date and location, then continue through WhatsApp to request washer inspection, cleaning, installation or repair.",
  submitLabel: "Continue with booking request", successMessage: "Your booking details are ready. Continue in WhatsApp to send the request to the FAJ scheduling team.",
  defaultService: "Washing Machine Technical Inspection", locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: { name: { label: "Full name", placeholder: "e.g. John Doe" }, phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" }, location: { label: "Service location / city" }, date: { label: "Preferred service date" } },
  modal: { eyebrow: "Request washing-machine service", description: "Enter your details and continue through WhatsApp to request washer inspection, cleaning, installation or repair.", submitLabel: "Continue with booking request", closeLabel: "Close booking dialog" },
  messageGreeting: "Hello FAJ Technical Services, I would like to request washing-machine service:",
  messageLabels: { name: "Name", phone: "Phone", location: "Location", date: "Preferred date", page: "Page" },
};
export default bookingData;
