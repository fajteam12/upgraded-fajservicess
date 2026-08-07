import { memo, useCallback, useEffect, useRef, useState } from "react";
import contactBookingData from "../../data/contactBookingData";
import "./ContactBooking.css";

const RECAPTCHA_SITE_KEY = "6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX";
const FORM_ENDPOINT = "https://formsubmit.co/info@fajservices.ae";

function Icon({ type }) {
	const paths = {
		pin: "M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Zm0-9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z",
		phone:
			"M6.6 3.5 8.8 3l2 4.8-2 1.3a14 14 0 0 0 6.1 6.1l1.3-2 4.8 2-.5 2.2a2 2 0 0 1-2.2 1.5A16 16 0 0 1 5.1 5.7 2 2 0 0 1 6.6 3.5Z",
		mail: "M3 5h18v14H3V5Zm1 1 8 6 8-6M4 18l5-5m11 5-5-5",
		users:
			"M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20m7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-5a2.5 2.5 0 0 1 0 5m3 9v-1.5a4 4 0 0 0-3-3.9",
		arrow: "M5 12h14m-6-6 6 6-6 6",
	};
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d={paths[type]} />
		</svg>
	);
}

const emptyForm = { name: "", email: "", phone: "", service: "", message: "" };

function ContactBooking({ data = contactBookingData }) {
	const recaptchaRef = useRef(null);
	const recaptchaLoadingRef = useRef(null);
	const submitRequestRef = useRef(null);
	const [form, setForm] = useState(emptyForm);
	const [state, setState] = useState({
		submitting: false,
		message: "",
		error: false,
	});

	const loadRecaptcha = useCallback(() => {
		if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
		if (recaptchaLoadingRef.current) return recaptchaLoadingRef.current;
		recaptchaLoadingRef.current = new Promise((resolve) => {
			const callbackName = `fajRecaptcha_${Date.now()}`;
			window[callbackName] = () => resolve(window.grecaptcha);
			const script = document.createElement("script");
			script.src = `https://www.google.com/recaptcha/api.js?onload=${callbackName}&render=explicit`;
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		});
		return recaptchaLoadingRef.current;
	}, []);

	const prepareRecaptcha = useCallback(async () => {
		if (recaptchaRef.current !== null) return;
		const grecaptcha = await loadRecaptcha();
		const node = document.getElementById("contact-recaptcha");
		if (node && recaptchaRef.current === null) {
			recaptchaRef.current = grecaptcha.render(node, {
				sitekey: RECAPTCHA_SITE_KEY,
				size: "invisible",
				badge: "bottomleft",
				callback: (token) => submitRequestRef.current?.(token),
			});
		}
	}, [loadRecaptcha]);

	const submitRequest = useCallback(
		async (token = "") => {
			const payload = new FormData();
			Object.entries({
				Name: form.name,
				Email: form.email,
				Phone: form.phone,
				Service: form.service,
				Message: form.message,
			}).forEach(([key, value]) => payload.append(key, value));
			payload.append(
				"_subject",
				"New booking request - FAJ Technical Services",
			);
			payload.append("_template", "table");
			payload.append("_cc", "faisaljuma.techservices@gmail.com");
			payload.append("_from_name", "FAJ Website Booking");
			payload.append("page_url", window.location.href);
			if (token) payload.append("g-recaptcha-response", token);
			try {
				await fetch(FORM_ENDPOINT, {
					method: "POST",
					body: payload,
					mode: "no-cors",
				});
				setState({
					submitting: false,
					error: false,
					message: "Thank you. Your booking request has been sent.",
				});
				setForm(emptyForm);
				if (window.grecaptcha && recaptchaRef.current !== null)
					window.grecaptcha.reset(recaptchaRef.current);
			} catch {
				setState({
					submitting: false,
					error: true,
					message: "We could not send your request. Please call us directly.",
				});
			}
		},
		[form],
	);

	submitRequestRef.current = submitRequest;

	useEffect(
		() => () => {
			if (recaptchaRef.current !== null && window.grecaptcha)
				window.grecaptcha.reset(recaptchaRef.current);
		},
		[],
	);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setState({ submitting: true, error: false, message: "" });
		await prepareRecaptcha();
		if (window.grecaptcha && recaptchaRef.current !== null)
			window.grecaptcha.execute(recaptchaRef.current);
		else await submitRequest();
	};

	const update = (event) =>
		setForm((current) => ({
			...current,
			[event.target.name]: event.target.value,
		}));

	return (
		<section
			className="contact-booking"
			aria-labelledby="contact-booking-title"
		>
			<div className="container contact-booking__grid">
				<div className="contact-booking__intro contact-booking__reveal contact-booking__reveal--left">
					{data.eyebrow && (
						<p className="contact-booking__eyebrow">{data.eyebrow}</p>
					)}
					{data.title && <h2 id="contact-booking-title">{data.title}</h2>}
					{data.description && (
						<p className="contact-booking__description">{data.description}</p>
					)}
					<div className="contact-booking__details contact-booking__reveal contact-booking__reveal--delay-1">
						<div className="contact-booking__detail">
							<span>
								<Icon type="pin" />
							</span>
							<div>
								<strong>{data.location.label}</strong>
								{data.location.lines.map((line) => (
									<small key={line}>{line}</small>
								))}
							</div>
						</div>
						<div className="contact-booking__detail">
							<span>
								<Icon type="phone" />
							</span>
							<div>
								<strong>{data.phone.label}</strong>
								{data.phone.lines.map((line) => (
									<a href={data.phone.href} key={line}>
										{line}
									</a>
								))}
							</div>
						</div>
						<div className="contact-booking__detail">
							<span>
								<Icon type="mail" />
							</span>
							<div>
								<strong>{data.email.label}</strong>
								<a href={data.email.href}>{data.email.value}</a>
							</div>
						</div>
					</div>
					<div className="contact-booking__stat contact-booking__reveal contact-booking__reveal--delay-2">
						<span>
							<Icon type="users" />
						</span>
						<div>
							<strong>{data.stat.value}</strong>
							<small>{data.stat.label}</small>
						</div>
					</div>
				</div>
				<div className="contact-booking__card contact-booking__reveal contact-booking__reveal--right">
					<p className="contact-booking__card-eyebrow">Quick booking</p>
					<h2>Book an Appointment</h2>
					<p className="contact-booking__card-note">
						Fill out the form below and our technical representative will reach
						out to you.
					</p>
					{state.message && (
						<div
							className={`contact-booking__alert${state.error ? " is-error" : ""}`}
							role="status"
						>
							{state.message}
						</div>
					)}
					<form onSubmit={handleSubmit} onFocus={prepareRecaptcha}>
						<label>
							Full name
							<input
								name="name"
								value={form.name}
								onChange={update}
								placeholder="John Doe"
								required
							/>
						</label>
						<div className="contact-booking__row">
							<label>
								Email address
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={update}
									placeholder="john@example.com"
									required
								/>
							</label>
							<label>
								Phone number
								<input
									name="phone"
									value={form.phone}
									onChange={update}
									placeholder="+971 50 000 0000"
									required
								/>
							</label>
						</div>
						<label>
							Service
							<select
								name="service"
								value={form.service}
								onChange={update}
								required
							>
								<option value="" disabled>
									Select a service...
								</option>
								{data.services.map((service) => (
									<option value={service} key={service}>
										{service}
									</option>
								))}
							</select>
						</label>
						<label>
							Your message
							<textarea
								name="message"
								rows="4"
								value={form.message}
								onChange={update}
								placeholder="How can we help you? Describe your issue or request..."
								required
							/>
						</label>
						<div id="contact-recaptcha" />
						<button type="submit" disabled={state.submitting}>
							{state.submitting ? "Sending..." : "Submit Booking Request"}
							<Icon type="arrow" />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default memo(ContactBooking);
