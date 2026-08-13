const bookingData = {
  eyebrow: "AMC Consultation", title: "Request an Appliance Maintenance Contract",
  description: "Share your preferred date and location, then continue through WhatsApp to discuss equipment, plan duration and required maintenance coverage.",
  submitLabel: "Continue with AMC request", successMessage: "Your AMC details are ready. Continue in WhatsApp to send the request to the FAJ contracts team.",
  defaultService: "Maintenance Contract (Yearly)", locations: ["Dubai", "Sharjah", "Abu Dhabi"],
  fields: { name: { label: "Full name", placeholder: "e.g. John Doe" }, phone: { label: "Phone number (UAE)", placeholder: "e.g. +971 50 123 4567" }, location: { label: "Property location / city" }, date: { label: "Preferred inspection date" } },
  modal: { eyebrow: "Request AMC coverage", description: "Enter your details and continue through WhatsApp to discuss appliance maintenance-contract options.", submitLabel: "Continue with AMC request", closeLabel: "Close AMC dialog" },
  messageGreeting: "Hello FAJ Technical Services, I would like to request appliance AMC coverage:",
  messageLabels: { name: "Name", phone: "Phone", location: "Location", date: "Preferred date", page: "Page" },
};
export default bookingData;
