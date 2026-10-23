import { memo, useRef } from "react";
import { ScrollSlide, ScrollZoomText } from "../Animations/ScrollAnimation";

function ModernBookingSection({
  content,
  bookingState,
  onBookNow,
  onOurServices,
  tone = "soft",
}) {
  const formCardRef = useRef(null);

  if (!content) return null;

  const { form, setForm, onSubmit, submitted } = bookingState || {};

  const update = (field) => (event) => {
    if (setForm) {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (typeof onBookNow === "function") {
      onBookNow();
      return;
    }
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formCardRef.current.querySelector("input");
      if (firstInput) firstInput.focus();
    }
  };

  const handleOurServices = (e) => {
    if (typeof onOurServices === "function") {
      e.preventDefault();
      onOurServices();
      return;
    }
    const target = document.getElementById("ac-services-offered") || document.getElementById("services-offered");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const locationsList = Array.isArray(content?.locations)
    ? content.locations
    : Array.isArray(content?.areas)
    ? content.areas
    : ["Dubai", "Sharjah", "Abu Dhabi"];

  return (
    <section
      className={`service-landing__section service-landing__modern-booking is-${tone}`}
      id="book-service"
    >
      <div className="service-landing__container">
        <div className="service-landing__modern-booking-grid">
          {/* Left Column: Context & CTA */}
          <div className="service-landing__modern-booking-info">
            {content.eyebrow && (
              <ScrollSlide direction="down">
                <span className="service-landing__modern-booking-eyebrow">
                  {content.eyebrow}
                </span>
              </ScrollSlide>
            )}

            <ScrollZoomText as="div" delay={0.08}>
              <h2 className="service-landing__modern-booking-title">
                {content.title || "REQUEST AC SERVICE"}
              </h2>
            </ScrollZoomText>

            {content.description && (
              <ScrollSlide direction="up" delay={0.16}>
                <p className="service-landing__modern-booking-desc">
                  {content.description}
                </p>
              </ScrollSlide>
            )}

            <ScrollSlide direction="up" delay={0.22}>
              <div
                className="service-landing__modern-booking-divider"
                aria-hidden="true"
              />
            </ScrollSlide>

            <ScrollSlide direction="up" delay={0.28}>
              <div className="service-landing__modern-booking-actions">
                <button
                  type="button"
                  className="service-landing__modern-btn is-dark"
                  onClick={handleBookNow}
                >
                  {content.primaryAction || "Book Now"}
                </button>

                <a
                  href="#ac-services-offered"
                  className="service-landing__modern-btn is-outline"
                  onClick={handleOurServices}
                >
                  {content.secondaryAction || "Our Services"}
                </a>
              </div>
            </ScrollSlide>
          </div>

          {/* Right Column: Interactive Card Form */}
          <ScrollSlide direction="left" delay={0.18}>
            <div
              className="service-landing__modern-booking-card"
              ref={formCardRef}
            >
              <div className="service-landing__modern-card-header">
                <h3 className="service-landing__modern-card-title">
                  {content.cardTitle || "IT'S QUICK & EASY"}
                </h3>

                <p className="service-landing__modern-card-desc">
                  {content.cardDescription ||
                    "Share your preferred date and location, then continue through WhatsApp to request inspection, cleaning, repair, maintenance or a contract quotation."}
                </p>

                <div
                  className="service-landing__modern-card-divider"
                  aria-hidden="true"
                />
              </div>

              <form
                className="service-landing__modern-form"
                onSubmit={onSubmit}
              >
                <div className="service-landing__modern-form-grid">
                  <label className="service-landing__modern-field">
                    <span>
                      {content.fields?.name?.label || "FULL NAME"}
                    </span>
                    <input
                      type="text"
                      autoComplete="name"
                      value={form?.name || ""}
                      onChange={update("name")}
                      placeholder={
                        content.fields?.name?.placeholder || "e.g. John Doe"
                      }
                      required
                    />
                  </label>

                  <label className="service-landing__modern-field">
                    <span>
                      {content.fields?.phone?.label || "PHONE NUMBER (UAE)"}
                    </span>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form?.phone || ""}
                      onChange={update("phone")}
                      placeholder={
                        content.fields?.phone?.placeholder ||
                        "e.g. +971 50 123 4567"
                      }
                      required
                    />
                  </label>

                  <label className="service-landing__modern-field">
                    <span>
                      {content.fields?.location?.label ||
                        "PROPERTY LOCATION / CITY"}
                    </span>
                    <div className="service-landing__select-wrapper">
                      <select
                        autoComplete="address-level2"
                        value={form?.location || locationsList[0]}
                        onChange={update("location")}
                      >
                        {locationsList.map((loc) => (
                          <option value={loc} key={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                      <span
                        className="service-landing__select-arrow"
                        aria-hidden="true"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                  </label>

                  <label className="service-landing__modern-field">
                    <span>
                      {content.fields?.date?.label ||
                        "PREFERRED APPOINTMENT DATE"}
                    </span>
                    <input
                      type="date"
                      value={form?.date || ""}
                      onChange={update("date")}
                      required
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="service-landing__modern-submit-btn"
                >
                  {content.submitLabel || "CONTINUE WITH BOOKING REQUEST"}
                </button>

                {submitted && (
                  <p className="service-landing__form-success" role="status">
                    {content.successMessage ||
                      "Your request is ready. Continue in WhatsApp to send it directly to our team."}
                  </p>
                )}
              </form>
            </div>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}

export default memo(ModernBookingSection);
