import { memo, useCallback, useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

function getInitials(name) {
  if (!name || typeof name !== "string") return "FC";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function StarRating({ rating = "5.0" }) {
  return (
    <div className="service-landing__testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="service-landing__testimonial-star-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#ffb800"
          stroke="#ffb800"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="service-landing__testimonial-rating-num">5.0</span>
    </div>
  );
}

function TestimonialsSection({
  content,
  tone = "soft",
  autoplay = true,
  autoplayDelay = 4500,
  loop = true,
  pauseOnHover = true,
}) {
  const sliderRef = useRef(null);
  const autoplayPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const items =
    Array.isArray(content?.items) && content.items.length > 0
      ? content.items
      : Array.isArray(content?.reviews)
      ? content.reviews
      : [];
  const itemCount = items.length;

  const updateLayout = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstSlide = slider.querySelector(".service-landing__testimonial-slide");
    if (!firstSlide) return;

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap || styles.gap || "24");
    const perView = Math.max(1, Math.round((slider.clientWidth + gap) / (slideWidth + gap)));
    const pages = Math.ceil(itemCount / perView);
    setPageCount(pages);
  }, [itemCount]);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const scrollSlider = useCallback(
    (direction) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const firstSlide = slider.querySelector(".service-landing__testimonial-slide");
      if (!firstSlide) return;

      const slideWidth = firstSlide.getBoundingClientRect().width;
      const styles = window.getComputedStyle(slider);
      const gap = parseFloat(styles.columnGap || styles.gap || "24");
      const perView = Math.max(1, Math.round((slider.clientWidth + gap) / (slideWidth + gap)));
      const pageSize = perView * (slideWidth + gap);

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (maxScroll <= 5) return;

      const currentScroll = slider.scrollLeft;

      if (loop && direction > 0 && currentScroll >= maxScroll - 15) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (loop && direction < 0 && currentScroll <= 15) {
        slider.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }

      slider.scrollBy({ left: direction * pageSize, behavior: "smooth" });
    },
    [loop]
  );

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstSlide = slider.querySelector(".service-landing__testimonial-slide");
    if (!firstSlide) return;

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap || styles.gap || "24");
    const perView = Math.max(1, Math.round((slider.clientWidth + gap) / (slideWidth + gap)));
    const pageSize = perView * (slideWidth + gap);
    const pages = Math.ceil(itemCount / perView);

    if (pageSize > 0) {
      const page = Math.round(slider.scrollLeft / pageSize);
      setActiveIndex(Math.max(0, Math.min(page, pages - 1)));
    }
  }, [itemCount]);

  const scrollToSlide = useCallback((pageIndex) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstSlide = slider.querySelector(".service-landing__testimonial-slide");
    if (!firstSlide) return;

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const styles = window.getComputedStyle(slider);
    const gap = parseFloat(styles.columnGap || styles.gap || "24");
    const perView = Math.max(1, Math.round((slider.clientWidth + gap) / (slideWidth + gap)));
    const pageSize = perView * (slideWidth + gap);
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    const targetLeft = Math.min(pageIndex * pageSize, maxScroll);
    slider.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!autoplay || pageCount <= 1) return;

    const timer = setInterval(() => {
      if (!autoplayPausedRef.current) {
        scrollSlider(1);
      }
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, pageCount, scrollSlider]);

  if (!itemCount) return null;

  return (
    <section
      className={`service-landing__section service-landing__testimonials-section is-${tone}`}
      id={content.id || "testimonials"}
    >
      <div className="service-landing__container">
        {/* Section Header with Navigation Controls */}
        <div className="service-landing__testimonials-header-row">
          <div className="service-landing__testimonials-heading-wrap">
            <SectionHeader content={content} light={tone === "dark"} />
          </div>

          {pageCount > 1 && (
            <div className="service-landing__testimonials-nav">
              <button
                type="button"
                className="service-landing__testimonials-arrow"
                onClick={() => scrollSlider(-1)}
                aria-label="Previous testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                className="service-landing__testimonials-arrow"
                onClick={() => scrollSlider(1)}
                aria-label="Next testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Carousel Track */}
        <div
          className="service-landing__testimonials-slider-track"
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseEnter={() => {
            if (pauseOnHover) autoplayPausedRef.current = true;
          }}
          onMouseLeave={() => {
            if (pauseOnHover) autoplayPausedRef.current = false;
          }}
          onTouchStart={() => {
            autoplayPausedRef.current = true;
          }}
          onTouchEnd={() => {
            autoplayPausedRef.current = false;
          }}
        >
          {items.map((item, index) => {
            const authorName = item.author || item.name || item.title || "Satisfied Client";
            const authorRole = item.role || item.subtitle || item.subTitle || item.badge || "Verified Customer";
            const reviewText = item.quote || item.content || item.description || item.desc || item.feedback || item.comment || item.review || item.text || "";
            const initials = getInitials(authorName);

            return (
              <div
                className="service-landing__testimonial-slide"
                key={`${authorName}-${index}`}
              >
                <article className="service-landing__testimonial-card">
                  {/* Card Top: 5 Yellow Stars + Quote Icon */}
                  <div className="service-landing__testimonial-card-top">
                    <StarRating rating={5} />
                    <svg
                      className="service-landing__testimonial-quote-icon"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Card Body: Client Feedback */}
                  <div className="service-landing__testimonial-body">
                    <blockquote className="service-landing__testimonial-quote">
                      &ldquo;{reviewText}&rdquo;
                    </blockquote>
                  </div>

                  {/* Card Footer: Client Avatar, Name & Verification Badge */}
                  <div className="service-landing__testimonial-footer">
                    <div className="service-landing__testimonial-author-wrap">
                      <div
                        className="service-landing__testimonial-avatar"
                        aria-hidden="true"
                      >
                        {initials}
                      </div>
                      <div className="service-landing__testimonial-author-info">
                        <strong className="service-landing__testimonial-name">
                          {authorName}
                        </strong>
                        <span className="service-landing__testimonial-role">
                          {authorRole}
                        </span>
                      </div>
                    </div>

                    <span className="service-landing__testimonial-verified">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Verified
                    </span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        {pageCount > 1 && (
          <div className="service-landing__testimonials-dots" role="tablist">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`service-landing__testimonials-dot ${
                  activeIndex === i ? "is-active" : ""
                }`}
                onClick={() => scrollToSlide(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                role="tab"
                aria-selected={activeIndex === i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
