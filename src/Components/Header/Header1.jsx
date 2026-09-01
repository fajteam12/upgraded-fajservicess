import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FAJLogoSVG from "../../icons/FAJLogoSVG";
import { preloadRoute } from "../../Routes/preloadRoutes";
import { aboutNavigation, servicesNavigation } from "./headerNavigation";
import "./Header1.css";

const normalizePath = (path = "/") => path.replace(/\/+$/, "") || "/";

const pathIsActive = (pathname, path, includeChildren = false) => {
	const current = normalizePath(pathname);
	const target = normalizePath(path);

	return includeChildren && target !== "/"
		? current === target || current.startsWith(`${target}/`)
		: current === target;
};

const warmRoute = (path) => {
	if (path) preloadRoute(path);
};

function ChevronIcon({ className = "" }) {
	return (
		<svg
			className={className}
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="m6 9 6 6 6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function MenuIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M4 7h16M4 12h16M4 17h16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="m6 6 12 12M18 6 6 18"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M5 12h14m-6-6 6 6-6 6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function HeaderLink({ to, className = "", children, onClick, ...props }) {
	return (
		<Link
			to={to}
			className={className}
			onClick={onClick}
			onFocus={() => warmRoute(to)}
			onMouseEnter={() => warmRoute(to)}
			{...props}
		>
			{children}
		</Link>
	);
}

function ServicesPopover({ pathname, services }) {
	return (
		<div className="faj-header__popover faj-header__popover--services">
			<div className="faj-header__popover-heading">
				<div>
					<span className="faj-header__eyebrow">Technical expertise</span>
					<strong>Repair and maintenance services</strong>
				</div>
				<HeaderLink to="/services/" className="faj-header__view-all">
					View all services
					<ArrowIcon />
				</HeaderLink>
			</div>

			<div className="faj-header__services-grid">
				{services.map((service) => (
					<section
						className={`faj-header__service-group${service.children?.length > 7 ? " faj-header__service-group--wide" : ""}`}
						key={service.label}
					>
						<HeaderLink
							to={service.path}
							className={`faj-header__service-title${pathIsActive(pathname, service.path, true) ? " is-active" : ""}`}
						>
							{service.label}
							<ArrowIcon />
						</HeaderLink>
						{service.description && (
							<p className="faj-header__service-description">
								{service.description}
							</p>
						)}
						{service.children?.length > 0 && (
							<ul className="faj-header__service-links">
								{service.children.map((item) => (
									<li key={item.path}>
										<HeaderLink
											to={item.path}
											className={
												pathIsActive(pathname, item.path) ? "is-active" : ""
											}
										>
											{item.label}
										</HeaderLink>
									</li>
								))}
							</ul>
						)}
					</section>
				))}
			</div>
		</div>
	);
}

function AboutPopover({ pathname, items }) {
	return (
		<div className="faj-header__popover faj-header__popover--about">
			<ul>
				{items.map((item) => (
					<li key={item.path}>
						<HeaderLink
							to={item.path}
							className={pathIsActive(pathname, item.path) ? "is-active" : ""}
						>
							<strong>{item.label}</strong>
							<span>{item.description}</span>
						</HeaderLink>
					</li>
				))}
			</ul>
		</div>
	);
}

function DesktopNavigation({ pathname, services, aboutItems }) {
	const servicesActive = pathIsActive(pathname, "/services/", true);
	const aboutActive = aboutItems.some((item) =>
		pathIsActive(pathname, item.path),
	);
	const [openMenu, setOpenMenu] = useState(null);
	const closeTimer = useRef(0);

	const showMenu = (menu) => {
		window.clearTimeout(closeTimer.current);
		setOpenMenu(menu);
	};

	const scheduleClose = () => {
		window.clearTimeout(closeTimer.current);
		closeTimer.current = window.setTimeout(() => setOpenMenu(null), 180);
	};

	useEffect(() => {
		setOpenMenu(null);
	}, [pathname]);

	useEffect(() => () => window.clearTimeout(closeTimer.current), []);

	return (
		<nav className="faj-header__desktop-nav" aria-label="Primary navigation">
			<div className="faj-header__nav-pill">
				<div
					className={`faj-header__nav-item faj-header__nav-item--services${openMenu === "services" ? " is-open" : ""}`}
					onMouseEnter={() => showMenu("services")}
					onMouseLeave={scheduleClose}
					onFocus={() => showMenu("services")}
					onBlur={(event) => {
						if (!event.currentTarget.contains(event.relatedTarget))
							scheduleClose();
					}}
				>
					<HeaderLink
						to="/services/"
						className={`faj-header__nav-link${servicesActive ? " is-active" : ""}`}
						aria-haspopup="true"
						aria-expanded={openMenu === "services"}
					>
						Services
						<ChevronIcon className="faj-header__chevron" />
					</HeaderLink>
					<ServicesPopover pathname={pathname} services={services} />
				</div>

				<div
					className={`faj-header__nav-item faj-header__nav-item--about${openMenu === "about" ? " is-open" : ""}`}
					onMouseEnter={() => showMenu("about")}
					onMouseLeave={scheduleClose}
					onFocus={() => showMenu("about")}
					onBlur={(event) => {
						if (!event.currentTarget.contains(event.relatedTarget))
							scheduleClose();
					}}
				>
					<HeaderLink
						to="/who-we-are/"
						className={`faj-header__nav-link${aboutActive ? " is-active" : ""}`}
						aria-haspopup="true"
						aria-expanded={openMenu === "about"}
					>
						About Us
						<ChevronIcon className="faj-header__chevron" />
					</HeaderLink>
					<AboutPopover pathname={pathname} items={aboutItems} />
				</div>

				<span
					className="faj-header__logo-space faj-header__logo-space--left"
					aria-hidden="true"
				/>

				<span
					className="faj-header__logo-space faj-header__logo-space--right"
					aria-hidden="true"
				/>

				<HeaderLink
					to="/blogs/"
					className={`faj-header__nav-link${pathIsActive(pathname, "/blogs/", true) ? " is-active" : ""}`}
				>
					Blog
				</HeaderLink>

				<HeaderLink
					to="/contact-us/"
					className={`faj-header__nav-link${pathIsActive(pathname, "/contact-us/") ? " is-active" : ""}`}
				>
					Get In Touch
				</HeaderLink>
			</div>
		</nav>
	);
}

function MobileServiceGroup({ service, closeMenu }) {
	if (!service.children?.length) {
		return (
			<HeaderLink
				to={service.path}
				className="faj-header__mobile-service-link"
				onClick={closeMenu}
			>
				<span>
					<strong>{service.label}</strong>
					{service.description && <small>{service.description}</small>}
				</span>
				<ArrowIcon />
			</HeaderLink>
		);
	}

	return (
		<details className="faj-header__mobile-subgroup">
			<summary>
				<span>
					<strong>{service.label}</strong>
					{service.description && <small>{service.description}</small>}
				</span>
				<ChevronIcon />
			</summary>
			<div className="faj-header__mobile-subgroup-links">
				<HeaderLink to={service.path} onClick={closeMenu}>
					View all {service.label}
				</HeaderLink>
				{service.children.map((item) => (
					<HeaderLink key={item.path} to={item.path} onClick={closeMenu}>
						{item.label}
					</HeaderLink>
				))}
			</div>
		</details>
	);
}

function MobileNavigation({ services, aboutItems, closeMenu }) {
	return (
		<div className="faj-header__mobile-overlay">
			<button
				type="button"
				className="faj-header__mobile-backdrop"
				onClick={closeMenu}
				aria-label="Close navigation"
			/>
			<nav className="faj-header__mobile-panel" aria-label="Mobile navigation">
				<HeaderLink
					to="/"
					className="faj-header__mobile-primary-link"
					onClick={closeMenu}
				>
					Home
				</HeaderLink>

				<details className="faj-header__mobile-group">
					<summary>
						Services
						<ChevronIcon />
					</summary>
					<div className="faj-header__mobile-group-content">
						<HeaderLink
							to="/services/"
							className="faj-header__mobile-view-all"
							onClick={closeMenu}
						>
							View all services
							<ArrowIcon />
						</HeaderLink>
						{services.map((service) => (
							<MobileServiceGroup
								key={service.label}
								service={service}
								closeMenu={closeMenu}
							/>
						))}
					</div>
				</details>

				<details className="faj-header__mobile-group">
					<summary>
						About Us
						<ChevronIcon />
					</summary>
					<div className="faj-header__mobile-about-links">
						{aboutItems.map((item) => (
							<HeaderLink key={item.path} to={item.path} onClick={closeMenu}>
								<strong>{item.label}</strong>
								<small>{item.description}</small>
							</HeaderLink>
						))}
					</div>
				</details>

				<HeaderLink
					to="/blogs/"
					className="faj-header__mobile-primary-link"
					onClick={closeMenu}
				>
					Blog
				</HeaderLink>
				<HeaderLink
					to="/contact-us/"
					className="faj-header__mobile-primary-link"
					onClick={closeMenu}
				>
					Get In Touch
				</HeaderLink>

				<HeaderLink
					to="/contact-us/"
					className="faj-header__mobile-cta"
					onClick={closeMenu}
				>
					Book a Service
					<ArrowIcon />
				</HeaderLink>

				<div className="faj-header__mobile-contact">
					<a href="tel:+97143300002">+971 4 330 0002</a>
					<a href="tel:+971507464712">+971 50 746 4712</a>
					<a href="mailto:info@fajservices.ae">info@fajservices.ae</a>
				</div>
			</nav>
		</div>
	);
}

function Header1({
	services = servicesNavigation,
	aboutItems = aboutNavigation,
	ctaLabel = "Book a Service",
	ctaPath = "/contact-us/",
	hideOnScroll = true,
	overlay = false,
}) {
	const { pathname } = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24);
	const [isVisible, setIsVisible] = useState(true);
	const previousY = useRef(window.scrollY);
	const frameId = useRef(0);
	const solid = !overlay || isScrolled || mobileOpen;

	useEffect(() => {
		setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!mobileOpen) return undefined;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const handleEscape = (event) => {
			if (event.key === "Escape") setMobileOpen(false);
		};

		window.addEventListener("keydown", handleEscape);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleEscape);
		};
	}, [mobileOpen]);

	useEffect(() => {
		const updateHeader = () => {
			const currentY = window.scrollY;
			setIsScrolled(currentY > 24);

			if (!hideOnScroll || mobileOpen || currentY < 96) {
				setIsVisible(true);
			} else if (currentY > previousY.current + 6) {
				setIsVisible(false);
			} else if (currentY < previousY.current - 6) {
				setIsVisible(true);
			}

			previousY.current = currentY;
			frameId.current = 0;
		};

		const handleScroll = () => {
			if (!frameId.current) {
				frameId.current = window.requestAnimationFrame(updateHeader);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (frameId.current) window.cancelAnimationFrame(frameId.current);
		};
	}, [hideOnScroll, mobileOpen]);

	const closeMenu = () => setMobileOpen(false);

	return (
		<>
			<header
				className={[
					"faj-header",
					solid ? "faj-header--solid" : "faj-header--transparent",
					isVisible ? "faj-header--visible" : "faj-header--hidden",
				].join(" ")}
			>
				<div className="faj-header__inner">
					<DesktopNavigation
						pathname={pathname}
						services={services}
						aboutItems={aboutItems}
					/>

					<HeaderLink
						to="/"
						className="faj-header__logo"
						aria-label="FAJ Technical Services home"
					>
						<img src="https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/97537e02-f71c-42f9-4ccb-d0ff689a8600/full" alt="FAJ LOGO" />
					</HeaderLink>

					<HeaderLink to={ctaPath} className="faj-header__desktop-cta">
						{ctaLabel}
						<ArrowIcon />
					</HeaderLink>

					<button
						type="button"
						className="faj-header__menu-toggle"
						onClick={() => setMobileOpen((open) => !open)}
						aria-label={
							mobileOpen ? "Close navigation menu" : "Open navigation menu"
						}
						aria-expanded={mobileOpen}
						aria-controls="faj-mobile-navigation"
					>
						{mobileOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>

				<div id="faj-mobile-navigation">
					{mobileOpen && (
						<MobileNavigation
							services={services}
							aboutItems={aboutItems}
							closeMenu={closeMenu}
						/>
					)}
				</div>
			</header>

			{!overlay && <div className="faj-header__spacer" aria-hidden="true" />}
		</>
	);
}

export default React.memo(Header1);
