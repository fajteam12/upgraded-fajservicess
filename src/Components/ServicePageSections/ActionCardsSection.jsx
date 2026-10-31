import { Fragment, memo, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

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
              className="service-landing__inline-link"
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
            className="service-landing__inline-link"
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
  showCta,
  cta,
  contact,
  align = "left",
}) {
  const hasExplicitShowCta = typeof showCta === "boolean";
  const isCtaEnabled = hasExplicitShowCta
    ? showCta
    : Boolean(
        content?.showCta !== undefined
          ? content.showCta
          : (content?.cta || cta)
      );

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const hasContentCta = Boolean(
      typeof content?.cta === "object" && content?.cta
    );
    const hasPropCta = Boolean(typeof cta === "object" && cta);
    const hasExplicitCta = hasContentCta || hasPropCta;

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      if (typeof val === "object" && val?.href) return String(val.href).trim();
      return "";
    };

    if (hasPropCta && getCleanUrl(cta.phone)) {
      phoneUrl = getCleanUrl(cta.phone);
    } else if (hasContentCta && getCleanUrl(content.cta.phone)) {
      phoneUrl = getCleanUrl(content.cta.phone);
    } else if (content?.phone) {
      phoneUrl = getCleanUrl(content.phone);
    } else if (!hasExplicitCta && contact?.phone) {
      phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
    }

    if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
      phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
    }

    if (hasPropCta && getCleanUrl(cta.whatsapp)) {
      whatsappUrl = getCleanUrl(cta.whatsapp);
    } else if (hasContentCta && getCleanUrl(content.cta.whatsapp)) {
      whatsappUrl = getCleanUrl(content.cta.whatsapp);
    } else if (content?.whatsapp) {
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

  const sliderRef = useRef(null);
  const autoplayPausedRef = useRef(false);

  const items = content?.items || content?.cards || [];
  const itemCount = items.length;

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

  if (!itemCount) return null;

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

  const renderCard = (item) => {
    const hasImage = Boolean(item.image || item.img);
    const imageKey = item.image || item.img;
    const imageSrc = hasImage ? getCloudflareImageUrl(imageKey, "tablet") : "";
    const imageSrcSet = hasImage ? getCloudflareImageSrcSet(imageKey) : undefined;

    return (
      <article
        className={`service-landing__action-card ${
          hasImage ? "has-image" : ""
        } ${align === "center" ? "is-aligned-center" : ""}`.trim()}
      >
        {hasImage && (
          <div className="service-landing__action-card-media">
            {item.href ? (
              item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-landing__action-media-link"
                  aria-label={`Read ${item.title}`}
                >
                  <img
                    src={imageSrc}
                    srcSet={imageSrcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.title}
                    width="1290"
                    height="530"
                    loading="lazy"
                    decoding="async"
                  />
                  {item.badge && (
                    <span className="service-landing__action-badge is-overlay">
                      {item.badge}
                    </span>
                  )}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="service-landing__action-media-link"
                  aria-label={`Read ${item.title}`}
                >
                  <img
                    src={imageSrc}
                    srcSet={imageSrcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.title}
                    width="1290"
                    height="530"
                    loading="lazy"
                    decoding="async"
                  />
                  {item.badge && (
                    <span className="service-landing__action-badge is-overlay">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            ) : (
              <div className="service-landing__action-media-link">
                <img
                  src={imageSrc}
                  srcSet={imageSrcSet}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.title}
                  width="1290"
                  height="530"
                  loading="lazy"
                  decoding="async"
                />
                {item.badge && (
                  <span className="service-landing__action-badge is-overlay">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        <div className="service-landing__action-card-content">
          {!hasImage && (
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
          )}

          <h3>
            {item.href ? (
              item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-landing__action-title-link"
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="service-landing__action-title-link"
                >
                  {item.title}
                </Link>
              )
            ) : (
              item.title
            )}
          </h3>

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
        </div>
      </article>
    );
  };

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
              {items.map((item) => (
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
              className={`service-landing__action-grid is-${resolvedColumns}${
                itemCount === 5 && resolvedColumns === "three"
                  ? " has-5-items"
                  : ""
              }${
                itemCount === 7 && resolvedColumns === "four"
                  ? " has-7-items"
                  : ""
              }${
                itemCount === 6 && resolvedColumns === "four"
                  ? " has-6-items"
                  : ""
              }${
                itemCount === 5 && resolvedColumns === "four"
                  ? " has-5-items"
                  : ""
              }`}
            >
              {items.map((item, index) => (
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

export default memo(ActionCardsSection);