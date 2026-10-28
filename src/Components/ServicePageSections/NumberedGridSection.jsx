import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function Description({ value }) {
	if (!value) return null;

	if (typeof value === "string") {
		return <p>{value}</p>;
	}

	if (value.parts?.length) {
		return (
			<p>
				{value.parts.map((part, index) => {
					if (typeof part === "string") {
						return part;
					}

					const content = part.strong ? (
						<strong>{part.text}</strong>
					) : (
						part.text
					);

					if (!part?.href) {
						return content || null;
					}

					if (part.external) {
						return (
							<a
								key={`${part.text}-${index}`}
								href={part.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{content}
							</a>
						);
					}

					return (
						<Link key={`${part.text}-${index}`} to={part.href}>
							{content}
						</Link>
					);
				})}
			</p>
		);
	}

	return null;
}

function NumberedGridSection({
	content,
	tone = "white",
	columns = "four",
	showCta,
	cta,
	contact,
}) {
	if (!content?.items?.length) return null;

	const isCtaEnabled = Boolean(
    content?.showCta === false
      ? false
      : (content?.showCta ?? showCta ?? (content?.cta || cta))
  );

	let phoneUrl = "";
	let whatsappUrl = "";

	if (isCtaEnabled) {
		const hasContentCta = Boolean(
      typeof content?.cta === "object" && content?.cta
    );
    const hasExplicitCta = Boolean(
      hasContentCta || (typeof cta === "object" && cta)
    );

    const ctaConfig = {
      ...(hasContentCta ? content.cta : {}),
      ...(typeof cta === "object" && cta ? cta : {}),
    };

		const getCleanUrl = (val) => {
			if (typeof val === "string") return val.trim();
			return "";
		};

		// Phone URL resolution: empty string or false suppresses the button
		if ("phone" in ctaConfig) {
			phoneUrl = getCleanUrl(ctaConfig.phone);
		} else if ("phone" in content) {
			phoneUrl = getCleanUrl(content.phone);
		} else if (!hasExplicitCta && contact?.phone) {
			phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
		}

		if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
			phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
		}

		// WhatsApp URL resolution: empty string or false suppresses the button
		if ("whatsapp" in ctaConfig) {
			whatsappUrl = getCleanUrl(ctaConfig.whatsapp);
		} else if ("whatsapp" in content) {
			whatsappUrl = getCleanUrl(content.whatsapp);
		} else if (!hasExplicitCta && contact?.whatsapp) {
			whatsappUrl = `https://api.whatsapp.com/send?phone=+${String(contact.whatsapp).replace(/[^0-9]/g, "")}&text=Hello`;
		}

		if (whatsappUrl && !whatsappUrl.startsWith("http")) {
			whatsappUrl = `https://api.whatsapp.com/send?phone=+${whatsappUrl.replace(/[^0-9]/g, "")}&text=Hello`;
		}
	}

	const hasPhone = Boolean(phoneUrl);
	const hasWhatsapp = Boolean(whatsappUrl);
	const showAnyCta = isCtaEnabled && (hasPhone || hasWhatsapp);

	return (
		<section className={`service-landing__section is-${tone}`}>
			<div className="service-landing__container">
				<SectionHeader content={content} light={tone === "dark"} />

				<div className={`service-landing__number-grid is-${columns}`}>
					{content.items.map((item, index) => (
						<ScrollSlide
							direction="up"
							delay={(index % 4) * 0.05}
							key={`${item.title}-${index}`}
						>
							<article className="service-landing__number-card">
								<span aria-hidden="true">
									{String(index + 1).padStart(2, "0")}
								</span>

								<h3>{item.title}</h3>

								<Description value={item.description} />
							</article>
						</ScrollSlide>
					))}
				</div>

				{showAnyCta && (
					<ScrollSlide direction="up" delay={0.24}>
						<div className="service-landing__cta-actions">
							{hasPhone && <CallNowButton phone={phoneUrl} />}
							{hasWhatsapp && <WhatsappIconButton whatsapp={whatsappUrl} />}
						</div>
					</ScrollSlide>
				)}
			</div>
		</section>
	);
}

export default memo(NumberedGridSection);
