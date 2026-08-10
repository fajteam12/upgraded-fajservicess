import { memo, useMemo, useState } from "react";
import { CareerIcon } from "./CareerIcons";

const WHATSAPP_NUMBER = "971506097717";

const initialFormData = {
	name: "",
	phone: "",
	experience: "",
	location: "",
	skills: "",
	message: "",
};

function WhatsAppApplicationForm({ job }) {
	const [formData, setFormData] = useState(initialFormData);
	const [applicationPrepared, setApplicationPrepared] = useState(false);

	const directWhatsAppUrl = useMemo(() => {
		const message = `Hello FAJ Recruitment, I would like to apply for the ${job.title} position. I will attach my CV in this WhatsApp chat.`;
		return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
	}, [job.title]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const message = [
			"*FAJ Technical Services – Job Application*",
			`*Position:* ${job.title}`,
			`*Name:* ${formData.name}`,
			`*Phone:* ${formData.phone}`,
			`*Experience:* ${formData.experience}`,
			`*Current Location:* ${formData.location}`,
			`*Key Skills:* ${formData.skills}`,
			formData.message ? `*Cover Message:* ${formData.message}` : "",
			`*Job URL:* ${window.location.href}`,
			"",
			"I will attach my CV in this WhatsApp chat.",
		]
			.filter(Boolean)
			.join("\n");

		const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
		const whatsappWindow = window.open(
			whatsappUrl,
			"_blank",
			"noopener,noreferrer",
		);

		if (whatsappWindow) whatsappWindow.opener = null;
		setApplicationPrepared(true);
	};

	return (
		<div className="career-application">
			<aside className="career-application__notice">
				<CareerIcon name="alert" size={20} />
				<div>
					<h2>Important Application Notice</h2>
					<p>
						Send your CV by WhatsApp to <strong>+971 50 609 7717</strong>.
						WhatsApp messages only—please do not call.
					</p>
				</div>
			</aside>

			<div className="career-application__card">
				<p className="career-eyebrow">WhatsApp Application</p>
				<h2>Apply for this position</h2>
				<p>
					Complete your profile below. WhatsApp will open with your application
					message; attach your CV there before pressing Send.
				</p>

				{applicationPrepared && (
					<div
						className="career-application__status"
						role="status"
						aria-live="polite"
					>
						<CareerIcon name="check" size={18} />
						<span>
							WhatsApp opened. Please attach your CV and send the message.
						</span>
					</div>
				)}

				<form onSubmit={handleSubmit} className="career-application__form">
					<label>
						<span>Full name</span>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							autoComplete="name"
							required
						/>
					</label>

					<div className="career-application__row">
						<label>
							<span>Phone / WhatsApp</span>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								autoComplete="tel"
								inputMode="tel"
								required
							/>
						</label>
						<label>
							<span>Experience</span>
							<select
								name="experience"
								value={formData.experience}
								onChange={handleChange}
								required
							>
								<option value="">Select</option>
								<option value="Less than 1 year">Less than 1 year</option>
								<option value="1–2 years">1–2 years</option>
								<option value="3–5 years">3–5 years</option>
								<option value="More than 5 years">More than 5 years</option>
							</select>
						</label>
					</div>

					<label>
						<span>Current location</span>
						<input
							type="text"
							name="location"
							value={formData.location}
							onChange={handleChange}
							autoComplete="address-level2"
							required
						/>
					</label>

					<label>
						<span>Key skills</span>
						<input
							type="text"
							name="skills"
							value={formData.skills}
							onChange={handleChange}
							placeholder="Diagnostics, installation, customer service…"
							required
						/>
					</label>

					<label>
						<span>Short cover message (optional)</span>
						<textarea
							name="message"
							rows="4"
							value={formData.message}
							onChange={handleChange}
						/>
					</label>

					<button type="submit" className="career-application__submit">
						<CareerIcon name="send" size={17} />
						Prepare and apply via WhatsApp
					</button>
				</form>

				<div className="career-application__direct">
					<span>Already prepared your application?</span>
					<a href={directWhatsAppUrl} target="_blank" rel="noopener noreferrer">
						Open WhatsApp directly
					</a>
				</div>
			</div>
		</div>
	);
}

export default memo(WhatsAppApplicationForm);
