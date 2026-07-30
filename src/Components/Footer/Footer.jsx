import React, { memo, useId } from "react";
import { Link } from "react-router-dom";

import FAJLogoSVG from "../../icons/FAJLogoSVG";
import {
	Icons
} from "./FooterAssets";
import PaymentMethodsIcon from "./PaymentMethodsIcon";
import { footerData } from "./footerData";

import "./Footer.css";

const FooterLink = ({ item }) => {
	const linkClassName = [
		"site-footer__link",
		item.highlighted
			? "site-footer__link--highlighted"
			: "",
	]
		.filter(Boolean)
		.join(" ");

	if (item.href) {
		return (
			<a
				className={linkClassName}
				href={item.href}
				target={item.external ? "_blank" : undefined}
				rel={
					item.external
						? "noopener noreferrer"
						: undefined
				}
			>
				{item.highlighted && <Icons.Cart />}

				<span>{item.label}</span>

				{item.external && <Icons.External />}
			</a>
		);
	}

	return (
		<Link
			className={linkClassName}
			to={item.to}
		>
			{item.highlighted && <Icons.Cart />}

			<span>{item.label}</span>
		</Link>
	);
};

const ContactCard = ({
	icon: ContactIcon,
	label,
	value,
	href,
	actionLabel,
	external = false,
	className = "",
}) => (
	<div
		className={[
			"site-footer__contact-card",
			className,
		]
			.filter(Boolean)
			.join(" ")}
	>
		<span
			className="site-footer__contact-icon"
			aria-hidden="true"
		>
			<ContactIcon />
		</span>

		<div className="site-footer__contact-content">
			<p className="site-footer__contact-label">
				{label}
			</p>

			{href ? (
				<a
					className="site-footer__contact-value"
					href={href}
					target={external ? "_blank" : undefined}
					rel={
						external
							? "noopener noreferrer"
							: undefined
					}
				>
					{value}
				</a>
			) : (
				<p className="site-footer__contact-value">
					{value}
				</p>
			)}

			{actionLabel && href && (
				<a
					className="site-footer__contact-action"
					href={href}
					target={external ? "_blank" : undefined}
					rel={
						external
							? "noopener noreferrer"
							: undefined
					}
				>
					<span>{actionLabel}</span>
					<Icons.External />
				</a>
			)}
		</div>
	</div>
);

const SupportContactCard = ({
	landline,
	whatsapp,
}) => (
	<div className="site-footer__contact-card site-footer__contact-card--support">
		<div className="site-footer__contact-row">
			<span
				className="site-footer__contact-icon"
				aria-hidden="true"
			>
				<Icons.Phone />
			</span>

			<div className="site-footer__contact-content">
				<p className="site-footer__contact-label">
					{landline.label}
				</p>

				<a
					className="site-footer__contact-value"
					href={landline.href}
				>
					{landline.value}
				</a>
			</div>
		</div>

		<div
			className="site-footer__contact-divider"
			aria-hidden="true"
		/>

		<div className="site-footer__contact-row">
			<span
				className="site-footer__contact-icon site-footer__contact-icon--whatsapp"
				aria-hidden="true"
			>
				<Icons.WhatsApp />
			</span>

			<div className="site-footer__contact-content">
				<p className="site-footer__contact-label">
					{whatsapp.label}
				</p>

				<a
					className="site-footer__contact-value"
					href={whatsapp.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{whatsapp.value}
				</a>

				<a
					className="site-footer__contact-action site-footer__contact-action--whatsapp"
					href={whatsapp.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{whatsapp.actionLabel}</span>
					<Icons.External />
				</a>
			</div>
		</div>
	</div>
);

const Footer = ({
	companyDescription = footerData.companyDescription,
	quickLinks = footerData.quickLinks,
	services = footerData.services,
	socialLinks = footerData.socialLinks,
	contact = footerData.contact,
	className = "",
}) => {
	const quickLinksHeadingId = useId();
	const servicesHeadingId = useId();
	const contactHeadingId = useId();

	const currentYear = new Date().getFullYear();

	const footerClassName = [
		"site-footer",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<footer className={footerClassName}>
			<div
				className="site-footer__accent-line"
				aria-hidden="true"
			/>

			<div className="site-footer__container">
				<div className="site-footer__top">
					<div className="site-footer__brand">
						<Link
							className="site-footer__logo"
							to="/"
							aria-label="FAJ Technical Services home"
						>
							<FAJLogoSVG />
						</Link>

						<p className="site-footer__description">
							{companyDescription}
						</p>

						{socialLinks?.length > 0 && (
							<ul
								className="site-footer__socials"
								aria-label="FAJ Technical Services social media"
							>
								{socialLinks.map((social) => {
									const SocialIcon =
										Icons[social.icon];

									if (!SocialIcon) {
										return null;
									}

									return (
										<li key={social.id}>
											<a
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={social.label}
												title={social.label}
											>
												<SocialIcon />
											</a>
										</li>
									);
								})}
							</ul>
						)}
					</div>

					<nav
						className="site-footer__navigation"
						aria-labelledby={quickLinksHeadingId}
					>
						<h2
							id={quickLinksHeadingId}
							className="site-footer__heading"
						>
							Quick Links
						</h2>

						<ul className="site-footer__links">
							{quickLinks.map((item) => (
								<li key={item.id}>
									<FooterLink item={item} />
								</li>
							))}
						</ul>
					</nav>

					<nav
						className="site-footer__navigation"
						aria-labelledby={servicesHeadingId}
					>
						<h2
							id={servicesHeadingId}
							className="site-footer__heading"
						>
							Our Services
						</h2>

						<ul className="site-footer__links">
							{services.map((item) => (
								<li key={item.id}>
									<FooterLink item={item} />
								</li>
							))}
						</ul>
					</nav>

					<section
						className="site-footer__contact"
						aria-labelledby={contactHeadingId}
					>
						<h2
							id={contactHeadingId}
							className="site-footer__heading"
						>
							Contact Details
						</h2>

						<div className="site-footer__contact-list">
							<ContactCard
								icon={Icons.Location}
								label={contact.location.label}
								value={contact.location.value}
								href={contact.location.href}
								actionLabel={
									contact.location.actionLabel
								}
								external
							/>

							<SupportContactCard
								landline={contact.landline}
								whatsapp={contact.whatsapp}
							/>

							<ContactCard
								icon={Icons.Email}
								label={contact.email.label}
								value={contact.email.value}
								href={contact.email.href}
							/>
						</div>
					</section>
				</div>

				<div className="site-footer__bottom">
					<p className="site-footer__copyright">
						© {currentYear} FAJ Technical Services
						L.L.C. All Rights Reserved.
					</p>

					<div className="site-footer__payments">
						<PaymentMethodsIcon />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default memo(Footer);