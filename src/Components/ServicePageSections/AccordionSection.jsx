import { memo, useState } from "react";
import SectionHeader from "./SectionHeader";

const DEFAULT_CONTACT = {
	phone: "971507464712",
	phoneDisplay: "+971 50 746 4712",
	email: "info@fajservices.ae",
	whatsapp: "971507464712",
};

const DEFAULT_CTA = {
	eyebrow: "Still Need Assistance?",
	title: "Our professional technical team is ready to help",
};

function AnswerContent({ answer }) {
	if (Array.isArray(answer)) {
		return answer.map((block, index) => {
			if (typeof block === "string") {
				return <p key={index}>{block}</p>;
			}

			if (block?.type === "bullets") {
				return (
					<ul key={index}>
						{block.items?.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				);
			}

			return <p key={index}>{block?.text}</p>;
		});
	}

	if (typeof answer !== "string") return null;

	// If answer contains HTML tags (like <ul>, <li>, <ol>, <p>, <br>)
	if (/<(?:ul|ol|li|p|br|strong|b)\b[^>]*>/i.test(answer)) {
		return (
			<div
				className="service-landing__faq-html-answer"
				dangerouslySetInnerHTML={{ __html: answer }}
			/>
		);
	}

	// Parse markdown-style answers (with lines and bullets)
	const lines = answer.split("\n").map((l) => l.trim()).filter(Boolean);
	const elements = [];
	let currentBullets = [];
	let pIndex = 0;

	const flushBullets = () => {
		if (currentBullets.length > 0) {
			elements.push(
				<ul key={`ul-${pIndex++}`}>
					{currentBullets.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			);
			currentBullets = [];
		}
	};

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (/^[-*•]\s+/.test(line)) {
			currentBullets.push(line.replace(/^[-*•]\s+/, ""));
		} else {
			flushBullets();
			elements.push(<p key={`p-${pIndex++}`}>{line}</p>);
		}
	}
	flushBullets();

	return elements.length > 0 ? elements : <p>{answer}</p>;
}

function AccordionSection({ content, contact, tone = "soft" }) {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!content?.items?.length) return null;

	const phoneNum = contact?.phone || DEFAULT_CONTACT.phone;
	const phoneDisplay =
		contact?.phoneDisplay || contact?.displayPhone || DEFAULT_CONTACT.phoneDisplay;
	const phoneLink = `tel:+${String(phoneNum).replace(/[^0-9]/g, "")}`;

	const email = contact?.email || DEFAULT_CONTACT.email;
	const emailLink = `mailto:${email}`;

	const whatsappNum = contact?.whatsapp || DEFAULT_CONTACT.whatsapp;
	const whatsappDisplay =
		contact?.whatsappDisplay || contact?.displayWhatsapp || phoneDisplay;
	const whatsappLink = `https://api.whatsapp.com/send?phone=+${String(whatsappNum).replace(/[^0-9]/g, "")}&text=Hello%20FAJ%20Technical%20Services`;

	const cta = {
		eyebrow: content?.cta?.eyebrow || DEFAULT_CTA.eyebrow,
		title: content?.cta?.title || DEFAULT_CTA.title,
	};

	return (
		<section
			className={`service-landing__section is-${tone} service-landing__faq-section`}
			id={content?.id || "faqs"}
		>
			<div className="service-landing__container">
				<div className="service-landing__faq-layout">
					{/* Left Column: Sticky Header + Dark Support CTA Card */}
					<div className="service-landing__faq-sticky-col">
						<div className="service-landing__faq-sticky-inner">
							<SectionHeader content={content} light={tone === "dark"} />

							<div className="service-landing__faq-cta">
								<span className="service-landing__faq-cta-eyebrow">
									{cta.eyebrow}
								</span>
								<h4 className="service-landing__faq-cta-title">{cta.title}</h4>

								<div className="service-landing__faq-cta-contacts">
									<a
										href={phoneLink}
										className="service-landing__faq-cta-contact-item is-call"
										aria-label={`Call us at ${phoneDisplay}`}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											aria-hidden="true"
										>
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
										<span>{phoneDisplay}</span>
									</a>

									<a
										href={emailLink}
										className="service-landing__faq-cta-contact-item is-email"
										aria-label={`Email us at ${email}`}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											aria-hidden="true"
										>
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22 6 12 13 2 6" />
										</svg>
										<span>{email}</span>
									</a>

									<a
										href={whatsappLink}
										className="service-landing__faq-cta-contact-item is-whatsapp"
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Chat with us on WhatsApp at ${whatsappDisplay}`}
									>
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
										</svg>
										<span>{whatsappDisplay}</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: FAQ Accordion List */}
					<div className="service-landing__faq-list">
						{content.items.map((item, index) => {
							const isOpen = activeIndex === index;
							const question = item.question || item.title;
							const answer = item.answer || item.desc;

							return (
								<article
									className={`service-landing__faq ${isOpen ? "is-open" : ""}`}
									key={question || index}
								>
									<h3>
										<button
											type="button"
											aria-expanded={isOpen}
											onClick={() => setActiveIndex(isOpen ? -1 : index)}
										>
											<span>{question}</span>
											<span aria-hidden="true">{isOpen ? "\u2212" : "+"}</span>
										</button>
									</h3>
									<div className="service-landing__faq-answer">
										<div>
											<AnswerContent answer={answer} />
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default memo(AccordionSection);
