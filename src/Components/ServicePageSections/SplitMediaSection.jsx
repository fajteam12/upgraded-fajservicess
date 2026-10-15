import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function SplitMediaSection({
  content,
  tone = "white",
  showCta,
  cta,
  contact,
}) {
  const [failedSources, setFailedSources] = useState(() => new Set());

  if (!content) return null;

  const isCtaEnabled = Boolean(
    showCta ?? content?.showCta ?? (cta || content?.cta)
  );

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const hasExplicitCta = Boolean(
      (typeof cta === "object" && cta) ||
      (typeof content?.cta === "object" && content?.cta)
    );

    const ctaConfig =
      (typeof cta === "object" && cta) ||
      (typeof content?.cta === "object" && content?.cta) ||
      {};

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      return "";
    };

    if ("phone" in ctaConfig) {
      phoneUrl = getCleanUrl(ctaConfig.phone);
    } else if ("phone" in content) {
      phoneUrl = getCleanUrl(content.phone);
    } else if (!hasExplicitCta && contact?.phone) {
      phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
    }

    if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
      phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
    }

    if ("whatsapp" in ctaConfig) {
      whatsappUrl = getCleanUrl(ctaConfig.whatsapp);
    } else if ("whatsapp" in content) {
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
  const imageSide = content.imageSide === "left" ? "left" : "right";

  return (
    <section
      className={`service-landing__section service-landing__media-section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        <div
          className={`service-landing__media-split is-image-${imageSide} ${
            imageSrc ? "has-media" : "is-text-only"
          }`}
        >
        <div className="service-landing__media-copy">
          <SectionHeader content={content} light={tone === "dark"} />

          {content.paragraphs?.map((paragraph) => (
            <p className="service-landing__media-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}

          {content.notice && (
            <div className="service-landing__media-notice">
              <ServiceIcon name={content.notice.icon || "check"} />
              <strong>{content.notice.text}</strong>
            </div>
          )}

          {content.items?.length > 0 && (
            <div
              className="service-landing__media-items"
              style={{ "--service-media-columns": content.columns || 2 }}
            >
              {content.items.map((item, index) => (
                <ScrollSlide
                  direction="up"
                  delay={(index % 4) * 0.05}
                  key={item.title}
                >
                  <article>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </ScrollSlide>
              ))}
            </div>
          )}
          {showAnyCta && (
              <ScrollSlide direction="up" delay={0.2}>
                <div className="service-landing__cta-actions" style={{ marginTop: "24px" }}>
                  {hasPhone && <CallNowButton phone={phoneUrl} />}
                  {hasWhatsapp && <WhatsappIconButton whatsapp={whatsappUrl} />}
                </div>
              </ScrollSlide>
            )}
          </div>

          {imageSrc && (
            <ScrollSlide
              className="service-landing__media-animation"
              direction={imageSide === "left" ? "left" : "right"}
            >
              <div className="service-landing__media-image">
                <img
                  src={imageSrc}
                  srcSet={imageSrcSet}
                  sizes="(max-width: 900px) 100vw, 46vw"
                  alt={image.alt || ""}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: image.position || "top center" }}
                  onError={() => {
                    setFailedSources((currentSources) => {
                      const nextSources = new Set(currentSources);
                      nextSources.add(imageSrc);
                      return nextSources;
                    });
                  }}
                />
              </div>
            </ScrollSlide>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(SplitMediaSection);
