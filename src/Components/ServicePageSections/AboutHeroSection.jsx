import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import WhatsAppIcon from "./WhatsAppIcon";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function renderHighlightIcon(type) {
  switch (type) {
    case "home":
    case "residential":
    case "commercial":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10.5 12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20v-9.5Z" />
          <path d="M9 21.5v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
        </svg>
      );
    case "location":
    case "pin":
    case "map":
    case "coverage":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21s-6.5-6.5-6.5-11.5a6.5 6.5 0 1 1 13 0C18.5 14.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );
    case "clock":
    case "time":
    case "experience":
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
        </svg>
      );
  }
}

const defaultHighlights = [
  {
    icon: "clock",
    title: "Serving since 2010",
    description: "Established local service provider",
  },
  {
    icon: "home",
    title: "Residential & commercial",
    description: "Homes, offices and facilities",
  },
  {
    icon: "location",
    title: "Dubai service coverage",
    description: "Other emirates by arrangement",
  },
];

function AboutHeroSection({
  content,
  contact,
  onPrimaryAction,
  tone = "white",
  contentWidth,
  imageWidth,
  textWidth,
  showPhone,
  showCall,
  showWhatsapp,
  cta,
}) {
  const [failedSources, setFailedSources] = useState(() => new Set());

  if (!content) return null;

  const image = content.image || {};
  const cloudflareSrc = image.id
    ? getCloudflareImageUrl(image.id, "public")
    : "";
  const cloudflareSrcSet = image.id
    ? getCloudflareImageSrcSet(image.id)
    : undefined;
  const fallbackSrc = image.src || "";

  const canUseCloudflare =
    Boolean(cloudflareSrc) && !failedSources.has(cloudflareSrc);
  const canUseFallback =
    Boolean(fallbackSrc) && !failedSources.has(fallbackSrc);

  const imageSrc = canUseCloudflare
    ? cloudflareSrc
    : canUseFallback
      ? fallbackSrc
      : "";

  const imageSrcSet = imageSrc === cloudflareSrc ? cloudflareSrcSet : undefined;

  const effectiveTone = content.tone || tone || "white";

  const buttonStyle = content.buttonStyle || "classic"; // "classic" (old SVG buttons) | "modern" (pill buttons)

  const ctaConfig =
    (typeof cta === "object" && cta) ||
    (typeof content?.cta === "object" && content.cta) ||
    {};

  const isPhoneEnabled =
    (showPhone ?? showCall ?? content.showPhone ?? content.showCall ?? ctaConfig.showPhone ?? ctaConfig.showCall) !== false &&
    ctaConfig.phone !== "" &&
    ctaConfig.phone !== false &&
    content.phone !== false &&
    content.phone !== "";

  const isWhatsappEnabled =
    (showWhatsapp ?? content.showWhatsapp ?? ctaConfig.showWhatsapp) !== false &&
    ctaConfig.whatsapp !== "" &&
    ctaConfig.whatsapp !== false &&
    content.whatsapp !== false &&
    content.whatsapp !== "";

  const phoneLink =
    ctaConfig.phone ||
    content.phone ||
    (contact?.phone
      ? `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`
      : "tel:+971507464712");

  const whatsappLink =
    ctaConfig.whatsapp ||
    content.whatsapp ||
    (contact?.whatsapp
      ? `https://api.whatsapp.com/send?phone=+${String(contact.whatsapp).replace(/[^0-9]/g, "")}&text=Hello`
      : "https://api.whatsapp.com/send?phone=+971507464712&text=Hello");

  const hasPrimaryAction =
    Boolean(content.primaryAction) && typeof onPrimaryAction === "function";
  const hasSecondaryAction =
    Boolean(content.secondaryAction) && Boolean(contact?.whatsapp);
  const hasActions =
    buttonStyle === "classic"
      ? isPhoneEnabled || isWhatsappEnabled
      : hasPrimaryAction || hasSecondaryAction;

  const highlights = content.highlights || defaultHighlights;

  // Single paragraph: take first paragraph if array, or paragraph string
  const paragraph =
    content.paragraph ||
    (Array.isArray(content.paragraphs) && content.paragraphs[0]) ||
    "";

  // Mutual automatic calculation: setting contentWidth calculates imageWidth and vice-versa
  const rawContentWidth =
    content.contentWidth ?? content.textWidth ?? contentWidth ?? textWidth;
  const rawImageWidth = content.imageWidth ?? imageWidth;

  const parsePercent = (val) => {
    if (typeof val === "number") return val;
    if (typeof val === "string") {
      const match = val.trim().match(/^([0-9.]+)\s*%?$/);
      if (match) return parseFloat(match[1]);
    }
    return null;
  };

  let textPercent = parsePercent(rawContentWidth);
  let imgPercent = parsePercent(rawImageWidth);

  if (textPercent != null && textPercent > 0 && textPercent < 100) {
    imgPercent = 100 - textPercent;
  } else if (imgPercent != null && imgPercent > 0 && imgPercent < 100) {
    textPercent = 100 - imgPercent;
  }

  let customStyle = undefined;
  if (textPercent != null && imgPercent != null) {
    customStyle = {
      "--about-hero-text-width": `${textPercent}fr`,
      "--about-hero-image-width": `${imgPercent}fr`,
    };
  }

  return (
    <section
      className={`service-landing__section service-about-hero is-${effectiveTone}`}
      id={content.id}
    >
      <div className="service-about-hero__container" style={customStyle}>
        <div className="service-about-hero__content">
          <ScrollZoomText as="div" delay={0.08}>
            <h1 className="service-about-hero__title">{content.title}</h1>
          </ScrollZoomText>

          {content.subtitle && (
            <ScrollSlide direction="up" delay={0.16}>
              <h2 className="service-about-hero__subtitle">
                {content.subtitle}
              </h2>
            </ScrollSlide>
          )}

          {paragraph && (
            <ScrollSlide direction="up" delay={0.22}>
              <p className="service-about-hero__paragraph">{paragraph}</p>
            </ScrollSlide>
          )}

          {highlights && highlights.length > 0 && (
            <ScrollSlide direction="up" delay={0.28}>
              <div className="service-about-hero__highlights">
                {highlights.map((item, index) => (
                  <div key={index} className="service-about-hero__highlight-item">
                    <div
                      className="service-about-hero__highlight-icon"
                      aria-hidden="true"
                    >
                      {renderHighlightIcon(item.icon)}
                    </div>
                    <div className="service-about-hero__highlight-text">
                      <strong className="service-about-hero__highlight-title">
                        {item.title}
                      </strong>
                      {item.description && (
                        <span className="service-about-hero__highlight-desc">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSlide>
          )}

          {hasActions && (
            <ScrollSlide direction="up" delay={0.34}>
              <div className="service-about-hero__actions">
                {buttonStyle === "classic" ? (
                  <>
                    {isPhoneEnabled && <CallNowButton phone={phoneLink} />}
                    {isWhatsappEnabled && (
                      <WhatsappIconButton whatsapp={whatsappLink} />
                    )}
                  </>
                ) : (
                  <>
                    {hasPrimaryAction && (
                      <button
                        type="button"
                        className="service-landing__button is-cyan"
                        onClick={() => onPrimaryAction(content.bookingLabel)}
                      >
                        {content.primaryAction}
                      </button>
                    )}

                    {hasSecondaryAction && (
                      <a
                        className="service-landing__button is-whatsapp"
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="service-landing__button-icon" />
                        {content.secondaryAction}
                      </a>
                    )}
                  </>
                )}
              </div>
            </ScrollSlide>
          )}
        </div>

        {imageSrc && (
          <ScrollSlide
            direction="left"
            delay={0.18}
            className="service-about-hero__media-wrapper"
          >
            <div className="service-about-hero__media">
              <img
                className="service-about-hero__image"
                src={imageSrc}
                srcSet={imageSrcSet}
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 991px) calc(100vw - 48px), 58vw"
                alt={image.alt || ""}
                width={image.width || 853}
                height={image.height || 853}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ objectPosition: image.position || "center" }}
                onError={() => {
                  setFailedSources((prev) => {
                    const next = new Set(prev);
                    next.add(imageSrc);
                    return next;
                  });
                }}
              />
              <div
                className="service-about-hero__image-overlay"
                aria-hidden="true"
              />
            </div>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(AboutHeroSection);
