import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function DetailColumnsSection({
  content,
  tone = "dark",
  showCta,
  cta,
  contact,
}) {
  if (!content?.columns?.length) return null;

  const hasHeader =
    Boolean(content.eyebrow) ||
    Boolean(content.title) ||
    Boolean(content.description);

  const isCtaEnabled = Boolean(
    content?.showCta === false
      ? false
      : (content?.showCta ?? showCta ?? (content?.cta || cta))
  );

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const hasContentCta = Boolean(
      typeof content?.cta === "object" && content?.cta
    );
    const hasExplicitCta = Boolean(
      hasContentCta || (typeof cta === "object" && cta)
    );

    const ctaConfig =
      (hasContentCta && content.cta) ||
      (typeof cta === "object" && cta) ||
      {};

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      return "";
    };

    // Phone URL resolution: empty string or false suppresses the button
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

    // WhatsApp URL resolution: empty string or false suppresses the button
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

  return (
    <section
      className={`service-landing__section service-landing__detail-columns-section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        {hasHeader && (
          <SectionHeader content={content} light={tone === "dark"} />
        )}

        <div className="service-landing__detail-columns">
          {content.columns.map((column, index) => (
            <ScrollSlide
              direction={index % 2 === 0 ? "left" : "right"}
              key={column.title}
            >
              <article className="service-landing__detail-column">
                {column.title && <h3>{column.title}</h3>}

                {column.description && (
                  <p className="service-landing__detail-column-intro">
                    {column.description}
                  </p>
                )}

                {column.items?.length > 0 && (
                  <ul className="service-landing__detail-list">
                    {column.items.map((item, itemIndex) => {
                      const isObject = typeof item === "object";
                      const label = isObject ? item.title : null;
                      const text = isObject ? item.text : item;

                      return (
                        <li key={`${label || "item"}-${itemIndex}`}>
                          <span className="service-landing__detail-bullet" aria-hidden="true" />
                          <span>
                            {label && <strong>{label}:</strong>} {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </article>
            </ScrollSlide>
          ))}
        </div>

        {(content.footerNote?.label || content.footerNote?.text) && (
          <div className="service-landing__detail-footer-note">
            {content.footerNote.label && (
              <strong>{content.footerNote.label}:</strong>
            )}
            {content.footerNote.text && <span>{content.footerNote.text}</span>}
          </div>
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

export default memo(DetailColumnsSection);
