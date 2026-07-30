import {
	memo,
	useEffect,
	useId,
	useRef,
	useState,
} from "react";
import { Link, useLocation } from "react-router-dom";

import { contactSidebarData } from "./contactSidebarData";
import "./ContactSidebar.css";

const iconProps = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	"aria-hidden": true,
	focusable: false,
};

const SidebarIcon = ({ name }) => {
	switch (name) {
		case "whatsapp":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
					<path d="M12.05 2A9.89 9.89 0 0 0 3.6 17.03L2 22l5.1-1.54A9.89 9.89 0 1 0 12.05 2Z" />
				</svg>
			);

		case "mobile":
			return (
				<svg {...iconProps}>
					<rect
						x="7.5"
						y="2.5"
						width="9"
						height="19"
						rx="2"
					/>
					<path d="M10.5 5h3M11 18.5h2" />
				</svg>
			);

		case "landline":
			return (
				<svg {...iconProps}>
					<path d="M6.5 3.5 9 8l-2 2a15 15 0 0 0 7 7l2-2 4.5 2.5c.3.2.5.6.4 1A3 3 0 0 1 18 21C9.7 21 3 14.3 3 6a3 3 0 0 1 2.5-2.9c.4-.1.8.1 1 .4Z" />
				</svg>
			);

		case "email":
			return (
				<svg {...iconProps}>
					<rect
						x="3"
						y="5"
						width="18"
						height="14"
						rx="2"
					/>
					<path d="m4 7 8 6 8-6" />
				</svg>
			);

		case "clock":
			return (
				<svg {...iconProps}>
					<circle cx="12" cy="12" r="8" />
					<path d="M12 7.5V12l3 2" />
				</svg>
			);

		case "location":
			return (
				<svg {...iconProps}>
					<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
					<circle cx="12" cy="10" r="2.5" />
				</svg>
			);

		case "arrow":
			return (
				<svg {...iconProps}>
					<path d="M4 12h15" />
					<path d="m15 8 4 4-4 4" />
				</svg>
			);

		case "close":
			return (
				<svg {...iconProps}>
					<path d="m6 6 12 12M18 6 6 18" />
				</svg>
			);

		case "help":
			return (
				<svg {...iconProps}>
					<circle cx="12" cy="12" r="9" />
					<path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2-2.4 3.7" />
					<path d="M12 17.5v.1" />
				</svg>
			);

		default:
			return null;
	}
};

const ContactOption = ({ contact }) => {
	const className = [
		"contact-sidebar__option",
		contact.featured
			? "contact-sidebar__option--featured"
			: "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<li>
			<a
				className={className}
				href={contact.href}
				target={
					contact.external ? "_blank" : undefined
				}
				rel={
					contact.external
						? "noopener noreferrer"
						: undefined
				}
			>
				<span
					className="contact-sidebar__option-icon"
					aria-hidden="true"
				>
					<SidebarIcon name={contact.type} />
				</span>

				<span className="contact-sidebar__option-copy">
					<span className="contact-sidebar__option-label">
						{contact.label}
					</span>

					<strong className="contact-sidebar__option-value">
						{contact.value}
					</strong>
				</span>

				<span className="contact-sidebar__option-action">
					{contact.actionLabel}
				</span>
			</a>
		</li>
	);
};

const getFocusableElements = (element) => {
	if (!element) {
		return [];
	}

	return Array.from(
		element.querySelectorAll(
			[
				"a[href]",
				"button:not([disabled])",
				"input:not([disabled])",
				"select:not([disabled])",
				"textarea:not([disabled])",
				'[tabindex]:not([tabindex="-1"])',
			].join(","),
		),
	);
};

const ContactSidebar = ({
	brand = contactSidebarData.brand,
	eyebrow = contactSidebarData.eyebrow,
	title = contactSidebarData.title,
	contacts = contactSidebarData.contacts,
	serviceNotes = contactSidebarData.serviceNotes,
	primaryAction = contactSidebarData.primaryAction,
	disclaimer = contactSidebarData.disclaimer,
	tabLabel = contactSidebarData.tabLabel,
	initiallyOpen = false,
	className = "",
}) => {
	const [isOpen, setIsOpen] =
		useState(initiallyOpen);

	const dialogId = useId();
	const titleId = useId();

	const panelRef = useRef(null);
	const closeButtonRef = useRef(null);
	const triggerRef = useRef(null);

	const location = useLocation();

	const sidebarClassName = [
		"contact-sidebar",
		isOpen ? "contact-sidebar--open" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const openSidebar = () => {
		setIsOpen(true);
	};

	const closeSidebar = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!isOpen) {
			return undefined;
		}

		const previousOverflow =
			document.body.style.overflow;

		document.body.style.overflow = "hidden";

		const focusTimeout = window.setTimeout(() => {
			closeButtonRef.current?.focus();
		}, 0);

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();
				closeSidebar();
				return;
			}

			if (event.key !== "Tab") {
				return;
			}

			const focusableElements =
				getFocusableElements(panelRef.current);

			if (focusableElements.length === 0) {
				event.preventDefault();
				return;
			}

			const firstElement = focusableElements[0];
			const lastElement =
				focusableElements[
					focusableElements.length - 1
				];

			if (
				event.shiftKey &&
				document.activeElement === firstElement
			) {
				event.preventDefault();
				lastElement.focus();
			} else if (
				!event.shiftKey &&
				document.activeElement === lastElement
			) {
				event.preventDefault();
				firstElement.focus();
			}
		};

		document.addEventListener(
			"keydown",
			handleKeyDown,
		);

		return () => {
			window.clearTimeout(focusTimeout);

			document.body.style.overflow =
				previousOverflow;

			document.removeEventListener(
				"keydown",
				handleKeyDown,
			);

			triggerRef.current?.focus();
		};
	}, [isOpen]);

	return (
		<div className={sidebarClassName}>
			<button
				ref={triggerRef}
				type="button"
				className="contact-sidebar__trigger"
				onClick={openSidebar}
				aria-haspopup="dialog"
				aria-expanded={isOpen}
				aria-controls={dialogId}
			>
				<span className="contact-sidebar__trigger-icon">
					<SidebarIcon name="help" />
				</span>

				<span className="contact-sidebar__trigger-text">
					{tabLabel}
				</span>
			</button>

			<button
				type="button"
				className="contact-sidebar__backdrop"
				onClick={closeSidebar}
				tabIndex={isOpen ? 0 : -1}
				aria-label="Close contact sidebar"
			/>

			<aside
				ref={panelRef}
				id={dialogId}
				className="contact-sidebar__panel"
				role="dialog"
				aria-modal="true"
				aria-labelledby={titleId}
				aria-hidden={!isOpen}
				inert={!isOpen ? "" : undefined}
			>
				<header className="contact-sidebar__header">
					<div className="contact-sidebar__brand-mark">
						{brand.shortName}
					</div>

					<div className="contact-sidebar__brand-copy">
						<p>{brand.title}</p>
						<span>{brand.subtitle}</span>
					</div>

					<button
						ref={closeButtonRef}
						type="button"
						className="contact-sidebar__close"
						onClick={closeSidebar}
						aria-label="Close contact sidebar"
					>
						<SidebarIcon name="close" />
					</button>
				</header>

				<div className="contact-sidebar__body">
					<div className="contact-sidebar__introduction">
						<p className="contact-sidebar__eyebrow">
							{eyebrow}
						</p>

						<h2
							id={titleId}
							className="contact-sidebar__title"
						>
							{title}
						</h2>
					</div>

					<ul className="contact-sidebar__options">
						{contacts.map((contact) => (
							<ContactOption
								key={contact.id}
								contact={contact}
							/>
						))}
					</ul>

					<div className="contact-sidebar__spacer" />

					<ul className="contact-sidebar__notes">
						{serviceNotes.map((note) => (
							<li key={note.id}>
								<span aria-hidden="true">
									<SidebarIcon
										name={note.icon}
									/>
								</span>

								{note.text}
							</li>
						))}
					</ul>

					<div className="contact-sidebar__footer">
						{primaryAction?.to &&
							primaryAction?.label && (
								<Link
									className="contact-sidebar__primary-action"
									to={primaryAction.to}
									onClick={closeSidebar}
								>
									<span>
										{primaryAction.label}
									</span>

									<SidebarIcon name="arrow" />
								</Link>
							)}

						{disclaimer && (
							<p className="contact-sidebar__disclaimer">
								{disclaimer}
							</p>
						)}
					</div>
				</div>
			</aside>
		</div>
	);
};

export default memo(ContactSidebar);