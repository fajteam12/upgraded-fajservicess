import { memo, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function PricingCardsSection({ content, onAction }) {
	const [activeItem, setActiveItem] = useState(null);

	const closePopup = useCallback(() => {
		setActiveItem(null);
	}, []);

	useEffect(() => {
		if (!activeItem || typeof window === "undefined") return undefined;

		const scrollY = window.scrollY;
		const html = document.documentElement;
		const body = document.body;

		const previousHtmlOverflow = html.style.overflow;
		const previousBodyOverflow = body.style.overflow;
		const previousBodyPosition = body.style.position;
		const previousBodyTop = body.style.top;
		const previousBodyWidth = body.style.width;

		html.style.overflow = "hidden";
		body.style.overflow = "hidden";
		body.style.position = "fixed";
		body.style.top = `-${scrollY}px`;
		body.style.width = "100%";

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				closePopup();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			html.style.overflow = previousHtmlOverflow;
			body.style.overflow = previousBodyOverflow;
			body.style.position = previousBodyPosition;
			body.style.top = previousBodyTop;
			body.style.width = previousBodyWidth;

			window.removeEventListener("keydown", handleKeyDown);
			window.scrollTo(0, scrollY);
		};
	}, [activeItem, closePopup]);

	if (!content?.items?.length) return null;

	return (
		<>
			<section className="service-landing__section is-white">
				<div className="service-landing__container">
					<SectionHeader content={content} />

					<div className="service-landing__pricing-grid">
						{content.items.map((item, index) => {
							const hasPopupContent =
								Boolean(item.popup?.title) &&
								Array.isArray(item.popup?.sections) &&
								item.popup.sections.length > 0;

							return (
								<ScrollSlide
									direction="up"
									delay={(index % 3) * 0.08}
									key={item.title}
								>
									<article className="service-landing__price-card">
										<div>
											<span className="service-landing__card-badge">
												{item.badge || content.defaultBadge}
											</span>

											<h3>{item.title}</h3>

											{item.subtitle && <small>{item.subtitle}</small>}

											<strong className="service-landing__price">
												{(item.pricePrefix ?? content.pricePrefix) && (
													<>{item.pricePrefix ?? content.pricePrefix} </>
												)}
												<em>{item.price}</em>
											</strong>

											<p>{item.description}</p>

											{hasPopupContent && (
												<button
													type="button"
													className="service-landing__price-read-more"
													onClick={() => setActiveItem(item)}
													aria-haspopup="dialog"
												>
													Read more
													<span aria-hidden="true">→</span>
												</button>
											)}
										</div>

										<button
											type="button"
											className="service-landing__button is-dark is-full"
											onClick={() => onAction(item.title)}
										>
											{content.actionLabel}
										</button>
									</article>
								</ScrollSlide>
							);
						})}
					</div>
				</div>
			</section>

			{activeItem?.popup &&
				typeof document !== "undefined" &&
				createPortal(
					<div
						className="service-landing__modal-backdrop"
						onMouseDown={(event) => {
							if (event.target === event.currentTarget) {
								closePopup();
							}
						}}
					>
						<div
							className="service-landing__modal service-landing__pricing-modal"
							role="dialog"
							aria-modal="true"
							aria-labelledby="pricing-popup-title"
						>
							<button
								type="button"
								className="service-landing__modal-close"
								onClick={closePopup}
								aria-label="Close popup"
							>
								×
							</button>

							<span className="service-landing__modal-eyebrow">
								{activeItem.badge || content.defaultBadge}
							</span>

							<h2 id="pricing-popup-title">{activeItem.popup.title}</h2>

							<div className="service-landing__pricing-modal-content">
								{activeItem.popup.sections.map((section, sectionIndex) => (
									<section
										className="service-landing__pricing-modal-section"
										key={`${activeItem.title}-${sectionIndex}`}
									>
										{section.heading && <h3>{section.heading}</h3>}

										{section.items?.length > 0 && (
											<ul>
												{section.items.map((listItem) => (
													<li key={listItem}>
														<span aria-hidden="true">✓</span>
														<span>{listItem}</span>
													</li>
												))}
											</ul>
										)}

										{section.label && section.text && (
											<div className="service-landing__pricing-modal-note">
												<strong>{section.label}</strong>
												<p>{section.text}</p>
											</div>
										)}
									</section>
								))}
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}

export default memo(PricingCardsSection);
