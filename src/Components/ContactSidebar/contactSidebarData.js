export const contactSidebarData = {
	brand: {
		shortName: "FAJ",
		title: "Contact Sidebar",
		subtitle: "Certified team online",
	},

	eyebrow: "Quick Assistance",
	title: "How can we help today?",

	contacts: [
		{
			id: "whatsapp",
			type: "whatsapp",
			label: "WhatsApp Chat",
			value: "+971 50 746 4712",
			href:
				"https://api.whatsapp.com/send?phone=971507464712&text=Hello%20FAJ%20Services",
			actionLabel: "Chat",
			external: true,
			featured: true,
		},
		{
			id: "mobile",
			type: "mobile",
			label: "Mobile 24/7",
			value: "+971 50 746 4712",
			href: "tel:+971507464712",
			actionLabel: "Call",
		},
		{
			id: "landline",
			type: "landline",
			label: "Office Landline",
			value: "+971 4 330 0002",
			href: "tel:+97143300002",
			actionLabel: "Call",
		},
		{
			id: "email",
			type: "email",
			label: "Email Support",
			value: "info@fajservices.ae",
			href: "mailto:info@fajservices.ae",
			actionLabel: "Email",
		},
	],

	serviceNotes: [
		{
			id: "response",
			icon: "clock",
			text: "Fast 24-Hour Response",
		},
		{
			id: "areas",
			icon: "location",
			text: "Serving Dubai, Sharjah & Abu Dhabi",
		},
	],

	primaryAction: {
		label: "Book Repair Online",
		to: "/contact-us/",
	},

	disclaimer: "No extra holiday/weekend surcharges",

	tabLabel: "Need Help?",
};