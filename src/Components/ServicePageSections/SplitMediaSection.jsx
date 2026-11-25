import { memo, useState } from "react";
import { Link } from "react-router-dom";

function renderParagraphContent(content, keyPrefix = "p") {
  if (content === null || content === undefined) return null;
  if (typeof content === "string" || typeof content === "number") return content;
  if (Array.isArray(content)) {
    return content.map((part, index) => (
      <span key={`${keyPrefix}-${index}`}>{renderParagraphContent(part, `${keyPrefix}-${index}`)}</span>
    ));
  }
  if (typeof content === "object" && Array.isArray(content.parts)) {
    return content.parts.map((part, index) => (
      <span key={`${keyPrefix}-part-${index}`}>{renderParagraphContent(part, `${keyPrefix}-part-${index}`)}</span>
    ));
  }
  if (typeof content === "object" && content.text) {
    const renderedText = content.strong ? <strong>{content.text}</strong> : content.text;
    if (!content.href) return renderedText;
    if (content.external) {
      return (
        <a href={content.href} target="_blank" rel="noopener noreferrer">
          {renderedText}
        </a>
      );
    }
    return <Link to={content.href}>{renderedText}</Link>;
  }
  return null;
}

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
  imageSide,
  stickyImage = false,
  showPhone,
  showWhatsapp,
  onAction,
  headerAbove,
  checklistColumns,
}) {
  const [failedSources, setFailedSources] = useState(() => new Set());

  if (!content) return null;

  const isSticky = Boolean(stickyImage || content?.stickyImage);
  const isHeaderAbove = Boolean(headerAbove || content?.headerAbove);
  const isCard = Boolean(content?.cardBox || content?.variant === "card");

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
    } else if (!hasPropCta && hasContentCta && getCleanUrl(content.cta.phone)) {
      phoneUrl = getCleanUrl(content.cta.phone);
    } else if (!hasPropCta && content?.phone) {
      phoneUrl = getCleanUrl(content.phone);
    } else if (!hasExplicitCta && contact?.phone) {
      phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
    }

    if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
      phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
    }

    if (hasPropCta && getCleanUrl(cta.whatsapp)) {
      whatsappUrl = getCleanUrl(cta.whatsapp);
    } else if (!hasPropCta && hasContentCta && getCleanUrl(content.cta.whatsapp)) {
      whatsappUrl = getCleanUrl(content.cta.whatsapp);
    } else if (!hasPropCta && content?.whatsapp) {
      whatsappUrl = getCleanUrl(content.whatsapp);
    } else if (!hasExplicitCta && contact?.whatsapp) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${String(contact.whatsapp).replace(/[^0-9]/g, "")}&text=Hello`;
    }

    if (whatsappUrl && !whatsappUrl.startsWith("http")) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${whatsappUrl.replace(/[^0-9]/g, "")}&text=Hello`;
    }

    const ctaConfig = (typeof cta === "object" && cta) || {};
    if (showPhone === false || ctaConfig.showPhone === false) {
      phoneUrl = "";
    }
    if (showWhatsapp === false || ctaConfig.showWhatsapp === false) {
      whatsappUrl = "";
    }
  }

  const hasPhone = Boolean(phoneUrl);
  const hasWhatsapp = Boolean(whatsappUrl);
  const showAnyCta = isCtaEnabled && (hasPhone || hasWhatsapp);

  const rawImage = content.image;
  const image = typeof rawImage === "string" ? { id: rawImage } : (rawImage || {});
  const imageId = image.id || image.src || "";
  const cloudflareSrc = imageId
    ? getCloudflareImageUrl(imageId, "public")
    : "";
  const cloudflareSrcSet = imageId
    ? getCloudflareImageSrcSet(imageId)
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
  const effectiveImageSide = imageSide || (content.imageSide === "left" ? "left" : "right");

  const checklistItems =
    (Array.isArray(content.checklist) && content.checklist) ||
    (Array.isArray(content.causes) && content.causes) ||
    (Array.isArray(content.bullets) && content.bullets) ||
    (Array.isArray(content.items) && typeof content.items[0] === "string" ? content.items : null);

  const isSingleColChecklist = Boolean(
    checklistColumns === 1 ||
      content.checklistColumns === 1 ||
      checklistItems?.some(
        (item) => typeof item === "object" && item !== null && item.description
      )
  );

  return (
    <section
      className={`service-landing__section service-landing__media-section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        {isHeaderAbove && (
          <SectionHeader content={content} light={tone === "dark"} />
        )}
        <div
          className={`service-landing__media-split is-image-${effectiveImageSide} ${
            imageSrc ? "has-media" : "is-text-only"
          } ${isSticky ? "is-sticky-image" : ""} ${isCard ? "is-card" : ""}`}
        >
        <div className="service-landing__media-copy">
          {!isHeaderAbove && (
            <SectionHeader content={content} light={tone === "dark"} />
          )}

          {content.innerTitle && (
            <h3 className="service-landing__media-inner-title">
              {content.innerTitle}
            </h3>
          )}

          {content.paragraphs?.map((paragraph, idx) => (
            <p className="service-landing__media-paragraph" key={idx}>
              {renderParagraphContent(paragraph, `p-${idx}`)}
            </p>
          ))}

          {content.paragraph && (
            <p className="service-landing__media-paragraph">
              {renderParagraphContent(content.paragraph, "p-main")}
            </p>
          )}

          {content.listTitle && (
            <p className="service-landing__media-list-title">
              <strong>{content.listTitle}</strong>
            </p>
          )}

          {checklistItems?.length > 0 && (
            <ul
              className={`service-landing__media-checklist${
                isSingleColChecklist ? " is-single-col" : ""
              }`}
            >
              {checklistItems.map((item, idx) => {
                const isRichItem =
                  typeof item === "object" && item !== null && item.description;
                return (
                  <li key={idx} className={isRichItem ? "is-rich-item" : undefined}>
                    <span className="service-landing__media-check" aria-hidden="true">
                      {"\u2713"}
                    </span>
                    <span>
                      {typeof item === "string" ? (
                        item
                      ) : isRichItem ? (
                        <>
                          {item.title && <strong>{item.title} </strong>}
                          {renderParagraphContent(item.description, `bullet-${idx}`)}
                        </>
                      ) : (
                        item.title || item.text
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {content.conclusion && (
            <p className="service-landing__media-paragraph" style={{ marginTop: "16px" }}>
              {renderParagraphContent(content.conclusion, "p-conclusion")}
            </p>
          )}

          {content.notice && (
            <div className="service-landing__media-notice">
              <ServiceIcon name={content.notice.icon || "check"} />
              <strong>{content.notice.text}</strong>
            </div>
          )}

          {content.items?.length > 0 && typeof content.items[0] === "object" && content.items[0].description && (
            <div
              className={`service-landing__media-items ${
                Number(content.columns) === 1 ? "is-single-col" : ""
              }`}
              style={{ "--service-media-columns": content.columns || 2 }}
            >
              {content.items.map((item, index) => (
                <ScrollSlide
                  direction="up"
                  delay={(index % 4) * 0.05}
                  key={item.title}
                >
                  <article className="service-landing__media-item-card">
                    {item.icon ? (
                      <span className="service-landing__action-icon" aria-hidden="true">
                        <ServiceIcon name={item.icon} />
                      </span>
                    ) : (
                      <span aria-hidden="true">
                        {item.number || String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    <h3>{item.title}</h3>
                    <p>{renderParagraphContent(item.description, 'item-desc-' + index)}</p>
                    {item.actionLabel && (
                      <button
                        type="button"
                        className="service-landing__action-link"
                        onClick={() =>
                          onAction && onAction(item.bookingLabel || item.title)
                        }
                      >
                        {item.actionLabel}
                        <span aria-hidden="true">{"\u2192"}</span>
                      </button>
                    )}
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
            isSticky ? (
              <div className="service-landing__media-animation is-sticky">
                <div className="service-landing__media-image">
                  <img
                    src={imageSrc}
                    srcSet={imageSrcSet}
                    sizes="(max-width: 900px) 100vw, 46vw"
                    alt={image.alt || ""}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    style={{ objectPosition: image.position || "center" }}
                    onError={() => {
                      setFailedSources((currentSources) => {
                        const nextSources = new Set(currentSources);
                        nextSources.add(imageSrc);
                        return nextSources;
                      });
                    }}
                  />
                </div>
              </div>
            ) : (
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
                    fetchPriority="low"
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
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(SplitMediaSection);
