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

function SplitHeroSection({ content, contact, onPrimaryAction }) {
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
  const imageSrcSet = canUseCloudflare
    ? cloudflareSrcSet || image.srcSet || undefined
    : image.srcSet || undefined;

  return (
    <section
      className={`service-landing__hero ${imageSrc ? "has-media" : "is-text-only"}`}
    >
      <div className="service-landing__hero-glow" aria-hidden="true" />

      <div className="service-landing__hero-content">
        {content.eyebrow && (
          <ScrollSlide direction="down">
            <span className="service-landing__hero-badge">
              {content.eyebrow}
            </span>
          </ScrollSlide>
        )}

        <ScrollZoomText as="div" delay={0.12}>
          <h1>{content.title}</h1>
        </ScrollZoomText>

        {content.subtitle && <h2>{content.subtitle}</h2>}

        {content.paragraphs?.map((paragraph, index) => (
          <ScrollSlide
            direction="up"
            delay={0.2 + index * 0.06}
            key={paragraph}
          >
            <p
              className={
                index === 1 ? "service-landing__hero-note" : ""
              }
            >
              {paragraph}
            </p>
          </ScrollSlide>
        ))}

        <ScrollSlide direction="up" delay={0.34}>
          <div className="service-landing__hero-actions">
            <button
              type="button"
              className="service-landing__button is-cyan"
              onClick={() => onPrimaryAction(content.bookingLabel)}
            >
              {content.primaryAction}
            </button>

            <a
              className="service-landing__button is-whatsapp"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="service-landing__button-icon" />
              {content.secondaryAction}
            </a>
          </div>
        </ScrollSlide>
      </div>

      {imageSrc && (
        <div className="service-landing__hero-media">
          <img
            src={imageSrc}
            srcSet={imageSrcSet}
            sizes="(max-width: 900px) 100vw, 50vw"
            alt={image.alt || ""}
            width={image.width}
            height={image.height}
            fetchPriority="high"
            decoding="async"
            onError={() => {
              setFailedSources((currentSources) => {
                const nextSources = new Set(currentSources);
                nextSources.add(imageSrc);
                return nextSources;
              });
            }}
          />
        </div>
      )}
    </section>
  );
}

export default memo(SplitHeroSection);
