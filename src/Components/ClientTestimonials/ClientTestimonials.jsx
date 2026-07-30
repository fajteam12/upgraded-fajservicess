import React, {
  memo,
  useEffect,
  useId,
  useState,
} from "react";

import { getCloudflareImageUrl } from "../../utils/cloudflareImages";

import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";

import { clientTestimonialsData } from "./clientTestimonialsData";
import "./ClientTestimonials.css";

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

const StarIcon = () => (
  <svg {...iconProps}>
    <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 19 6v5.2c0 4.3-2.8 7.2-7 9.8-4.2-2.6-7-5.5-7-9.8V6Z" />
    <path d="m8.8 12 2.1 2.1 4.4-4.6" />
  </svg>
);

const ChevronIcon = ({ direction = "next" }) => (
  <svg
    {...iconProps}
    className={
      direction === "previous"
        ? "client-testimonials__chevron--previous"
        : ""
    }
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

const ClientTestimonials = ({
  eyebrow = clientTestimonialsData.eyebrow,
  title = clientTestimonialsData.title,
  highlightedTitle = clientTestimonialsData.highlightedTitle,
  description = clientTestimonialsData.description,
  backgroundImage = clientTestimonialsData.backgroundImage,
  testimonials = clientTestimonialsData.testimonials,
  initialIndex = 0,
  autoPlay = clientTestimonialsData.autoPlay,
  autoPlayDelay = clientTestimonialsData.autoPlayDelay,
  showControls = true,
  showDots = true,
  className = "",
}) => {
  const headingId = useId();
  const [useFallback, setUseFallback] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const safeInitialIndex =
    testimonials.length > 0
      ? Math.min(
          testimonials.length - 1,
          Math.max(0, Number(initialIndex) || 0)
        )
      : 0;

  const [activeIndex, setActiveIndex] = useState(
    safeInitialIndex
  );

  const activeTestimonial = testimonials[activeIndex] || null;
  const hasMultipleTestimonials = testimonials.length > 1;

  const sectionClasses = [
    "client-testimonials",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cloudflareBackgroundSrc = backgroundImage?.id
    ? getCloudflareImageUrl(backgroundImage.id, "public")
    : "";

  const resolvedBackgroundSrc = useFallback
    ? backgroundImage?.src
    : cloudflareBackgroundSrc || backgroundImage?.src;

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? testimonials.length - 1
        : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!autoPlay || !hasMultipleTestimonials || isPaused) {
      return undefined;
    }

    const delay = Math.max(
      3000,
      Number(autoPlayDelay) || 7000
    );

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === testimonials.length - 1
          ? 0
          : currentIndex + 1
      );
    }, delay);

    return () => window.clearInterval(intervalId);
  }, [
    autoPlay,
    autoPlayDelay,
    hasMultipleTestimonials,
    isPaused,
    testimonials.length,
  ]);

  if (!activeTestimonial) {
    return null;
  }

  return (
    <section
      className={sectionClasses}
      aria-labelledby={headingId}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {resolvedBackgroundSrc && (
        <div
          className="client-testimonials__background"
          style={{
            "--client-testimonials-background-position":
              backgroundImage.position || "center center",
          }}
          aria-hidden="true"
        >
          <img
            src={resolvedBackgroundSrc}
            width={backgroundImage.width}
            height={backgroundImage.height}
            loading="lazy"
            decoding="async"
            alt=""
            onError={() => {
              if (!useFallback && backgroundImage.src) {
                setUseFallback(true);
              }
            }}
          />
        </div>
      )}

      <div
        className="client-testimonials__overlay"
        aria-hidden="true"
      />

      <div className="client-testimonials__container">
        <header className="client-testimonials__header">
          <ScrollSlide
            as="div"
            className="client-testimonials__eyebrow"
            direction="up"
            delay={0.05}
          >
            <span aria-hidden="true" />
            <p>{eyebrow}</p>
            <span aria-hidden="true" />
          </ScrollSlide>

          <ScrollZoomText
            as="h2"
            id={headingId}
            className="client-testimonials__title"
            delay={0.12}
          >
            <span>{title}</span>
            <span className="client-testimonials__title-highlight">
              {highlightedTitle}
            </span>
          </ScrollZoomText>

          {description && (
            <ScrollSlide
              as="p"
              className="client-testimonials__description"
              direction="up"
              delay={0.2}
            >
              {description}
            </ScrollSlide>
          )}
        </header>

        <div
          className="client-testimonials__slider"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <ScrollSlide
            as="article"
            className="client-testimonials__card"
            direction="up"
            delay={0.28}
            distance={34}
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              className="client-testimonials__number"
              aria-hidden="true"
            >
              {activeTestimonial.number ||
                String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="client-testimonials__badges">
              {activeTestimonial.ratingLabel && (
                <span className="client-testimonials__badge">
                  <StarIcon />
                  {activeTestimonial.ratingLabel}
                </span>
              )}

              {activeTestimonial.verifiedLabel && (
                <span className="client-testimonials__badge client-testimonials__badge--verified">
                  <VerifiedIcon />
                  {activeTestimonial.verifiedLabel}
                </span>
              )}
            </div>

            <blockquote className="client-testimonials__quote">
              <p>“{activeTestimonial.quote}”</p>

              <footer className="client-testimonials__author">
                <span
                  className="client-testimonials__avatar"
                  aria-hidden="true"
                >
                  {activeTestimonial.avatarText ||
                    activeTestimonial.author
                      ?.split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                </span>

                <span className="client-testimonials__author-copy">
                  <cite>{activeTestimonial.author}</cite>

                  {activeTestimonial.role && (
                    <small>{activeTestimonial.role}</small>
                  )}
                </span>
              </footer>
            </blockquote>
          </ScrollSlide>

          {showControls && hasMultipleTestimonials && (
            <div className="client-testimonials__controls">
              <button
                type="button"
                className="client-testimonials__control"
                onClick={showPrevious}
                aria-label="Show previous testimonial"
              >
                <ChevronIcon direction="previous" />
              </button>

              <button
                type="button"
                className="client-testimonials__control"
                onClick={showNext}
                aria-label="Show next testimonial"
              >
                <ChevronIcon />
              </button>
            </div>
          )}

          {showDots && hasMultipleTestimonials && (
            <div
              className="client-testimonials__dots"
              aria-label="Choose testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id || testimonial.author}
                  type="button"
                  className={`client-testimonials__dot ${
                    index === activeIndex
                      ? "client-testimonials__dot--active"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={
                    index === activeIndex ? "true" : undefined
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientTestimonials);