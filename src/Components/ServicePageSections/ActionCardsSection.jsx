import { Fragment, memo, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";

function RichText({ value, as: Tag = "p", className }) {
  if (!value) return null;

  if (typeof value === "string") {
    return <Tag className={className}>{value}</Tag>;
  }

  if (!value.parts?.length) return null;

  return (
    <Tag className={className}>
      {value.parts.map((part, index) => {
        if (typeof part === "string") {
          return <Fragment key={index}>{part}</Fragment>;
        }

        if (!part?.text) return null;

        const content = part.strong ? (
          <strong>{part.text}</strong>
        ) : (
          part.text
        );

        if (!part.href) {
          return <Fragment key={`${part.text}-${index}`}>{content}</Fragment>;
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
          <Link
            key={`${part.text}-${index}`}
            to={part.href}
          >
            {content}
          </Link>
        );
      })}
    </Tag>
  );
}

function ActionCardsSection({
  content,
  onAction,
  tone = "white",
  columns = "three",
  slider = false,
  showSliderArrows = true,
  loop = false,
  autoplay = false,
  autoplayDelay = 4000,
  pauseOnHover = true,
}) {
  const sliderRef = useRef(null);
  const autoplayPausedRef = useRef(false);

  const itemCount = content?.items?.length || 0;

  const scrollSlider = useCallback(
    (direction) => {
      const sliderElement = sliderRef.current;
      if (!sliderElement) return;

      const firstSlide = sliderElement.querySelector(
        ".service-landing__action-slide"
      );

      if (!firstSlide) return;

      const slideWidth = firstSlide.getBoundingClientRect().width;
      const sliderStyles = window.getComputedStyle(sliderElement);

      const gap = parseFloat(
        sliderStyles.columnGap || sliderStyles.gap || "0"
      );

      const scrollStep = slideWidth + gap;
      const currentScroll = sliderElement.scrollLeft;

      const maxScroll =
        sliderElement.scrollWidth - sliderElement.clientWidth;

      const atStart = currentScroll <= 4;
      const atEnd = currentScroll >= maxScroll - 4;

      if (loop && direction > 0 && atEnd) {
        sliderElement.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      if (loop && direction < 0 && atStart) {
        sliderElement.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });

        return;
      }

      sliderElement.scrollBy({
        left: direction * scrollStep,
        behavior: "smooth",
      });
    },
    [loop]
  );

  useEffect(() => {
    if (
      !slider ||
      !autoplay ||
      itemCount <= 1 ||
      autoplayDelay <= 0
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      if (!autoplayPausedRef.current) {
        scrollSlider(1);
      }
    }, autoplayDelay);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    slider,
    autoplay,
    autoplayDelay,
    itemCount,
    scrollSlider,
  ]);

  if (!content?.items?.length) return null;

  const resolvedColumns =
    itemCount === 3
      ? "three"
      : itemCount === 4
        ? "four"
        : columns;

  const shouldShowSliderArrows =
    slider && showSliderArrows && itemCount > 1;

  const pauseAutoplay = () => {
    if (pauseOnHover) {
      autoplayPausedRef.current = true;
    }
  };

  const resumeAutoplay = () => {
    if (pauseOnHover) {
      autoplayPausedRef.current = false;
    }
  };

  const renderCard = (item) => (
    <article className="service-landing__action-card">
      <div className="service-landing__action-card-top">
        <span className="service-landing__action-icon">
          <ServiceIcon name={item.icon} />
        </span>

        {item.badge && (
          <span className="service-landing__action-badge">
            {item.badge}
          </span>
        )}
      </div>

      <h3>{item.title}</h3>

      {item.subtitle && <strong>{item.subtitle}</strong>}

      <RichText value={item.description} />

      {item.actionLabel && item.href && item.external && (
        <a
          className="service-landing__action-link"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </a>
      )}

      {item.actionLabel && item.href && !item.external && (
        <Link
          className="service-landing__action-link"
          to={item.href}
        >
          {item.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      )}

      {item.actionLabel && !item.href && onAction && (
        <button
          type="button"
          className="service-landing__action-link"
          onClick={() =>
            onAction(item.bookingLabel || item.title)
          }
        >
          {item.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </button>
      )}
    </article>
  );

  return (
    <section
      className={`service-landing__section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        <SectionHeader
          content={content}
          light={tone === "dark"}
        />

        {(content.lead || content.paragraphs?.length > 0) && (
          <div className="service-landing__action-intro-copy">
            {content.lead && (
              <p>
                <strong>{content.lead}</strong>
              </p>
            )}

            {content.paragraphs?.map((paragraph, index) => (
              <RichText
                key={index}
                value={paragraph}
              />
            ))}
          </div>
        )}

        <div
          className={`service-landing__action-section-body ${
            slider ? "has-slider" : ""
          }`}
          onMouseEnter={slider ? pauseAutoplay : undefined}
          onMouseLeave={slider ? resumeAutoplay : undefined}
          onFocusCapture={slider ? pauseAutoplay : undefined}
          onBlurCapture={slider ? resumeAutoplay : undefined}
        >
          {shouldShowSliderArrows && (
            <div
              className="service-landing__action-slider-controls"
              aria-label="Card slider controls"
            >
              <button
                type="button"
                className="service-landing__action-slider-arrow"
                onClick={() => scrollSlider(-1)}
                aria-label="Show previous cards"
              >
                <span aria-hidden="true">{"\u2190"}</span>
              </button>

              <button
                type="button"
                className="service-landing__action-slider-arrow"
                onClick={() => scrollSlider(1)}
                aria-label="Show next cards"
              >
                <span aria-hidden="true">{"\u2192"}</span>
              </button>
            </div>
          )}

          {slider ? (
            <div
              ref={sliderRef}
              className={`service-landing__action-grid is-${resolvedColumns} is-slider`}
            >
              {content.items.map((item) => (
                <div
                  className="service-landing__action-slide"
                  key={item.title}
                >
                  {renderCard(item)}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`service-landing__action-grid is-${resolvedColumns}`}
            >
              {content.items.map((item, index) => (
                <ScrollSlide
                  direction="up"
                  delay={(index % 4) * 0.06}
                  key={item.title}
                >
                  {renderCard(item)}
                </ScrollSlide>
              ))}
            </div>
          )}
        </div>

        {content.footer && (
          <div className="service-landing__action-bottom-copy">
            <RichText value={content.footer} />
          </div>
        )}

        {(content.bottomTitle || content.bottomDescription) && (
          <div className="service-landing__action-bottom-copy">
            {content.bottomTitle && (
              <h3>{content.bottomTitle}</h3>
            )}

            {content.bottomDescription && (
              <RichText value={content.bottomDescription} />
            )}
          </div>
        )}

        {content.footerCard && (
          <ScrollSlide direction="up">
            <aside className="service-landing__action-footer-card">
              <div>
                <h3>{content.footerCard.title}</h3>

                <RichText
                  value={content.footerCard.description}
                />
              </div>

              {content.footerCard.actionLabel && onAction && (
                <button
                  type="button"
                  className="service-landing__button"
                  onClick={() =>
                    onAction(
                      content.footerCard.bookingLabel ||
                        content.footerCard.title
                    )
                  }
                >
                  {content.footerCard.actionLabel}
                </button>
              )}
            </aside>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(ActionCardsSection);