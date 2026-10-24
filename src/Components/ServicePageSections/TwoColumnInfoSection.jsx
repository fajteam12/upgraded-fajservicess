import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function RichText({ content }) {
  if (typeof content === "string") return content;
  if (!content) return null;

  if (content.href && content.text) {
    const isExternal =
      content.external === true || /^https?:\/\//i.test(content.href);

    return isExternal ? (
      <a
        className="service-landing__inline-link"
        href={content.href}
        target={content.newTab === false ? undefined : "_blank"}
        rel={content.newTab === false ? undefined : "noopener noreferrer"}
      >
        {content.text}
      </a>
    ) : (
      <Link className="service-landing__inline-link" to={content.href}>
        {content.text}
      </Link>
    );
  }

  if (Array.isArray(content.parts)) {
    return content.parts.map((part, index) => {
      if (typeof part === "string") {
        return <span key={index}>{part}</span>;
      }

      if (!part) return null;

      if (part.strong && !part.href) {
        return <strong key={index}>{part.text}</strong>;
      }

      if (part.href) {
        const isExternal =
          part.external === true || /^https?:\/\//i.test(part.href);

        const linkContent = part.strong ? (
          <strong>{part.text}</strong>
        ) : (
          part.text
        );

        return isExternal ? (
          <a
            key={index}
            className="service-landing__inline-link"
            href={part.href}
            target={part.newTab === false ? undefined : "_blank"}
            rel={part.newTab === false ? undefined : "noopener noreferrer"}
          >
            {linkContent}
          </a>
        ) : (
          <Link
            key={index}
            className="service-landing__inline-link"
            to={part.href}
          >
            {linkContent}
          </Link>
        );
      }

      return <span key={index}>{part.text}</span>;
    });
  }

  return content.text || null;
}

function InfoBullets({ bullets, columns }) {
  if (!bullets?.length) return null;

  return (
    <ul
      className={`service-landing__info-card-bullets ${
        columns === 1 ? "is-single" : ""
      }`}
    >
      {bullets.map((bullet, index) => {
        if (typeof bullet === "string") {
          return <li key={`${bullet}-${index}`}>{bullet}</li>;
        }

        const hasTitle = Boolean(bullet.title);

        return (
          <li
            key={`${bullet.title || bullet.text || "bullet"}-${index}`}
            className={`${bullet.strong ? "is-strong" : ""} ${
              hasTitle ? "has-title" : ""
            }`.trim()}
          >
            {bullet.title && (
              <strong className="service-landing__info-bullet-title">
                {bullet.title}:{" "}
              </strong>
            )}

            {Array.isArray(bullet.parts) ? (
              <RichText content={{ parts: bullet.parts }} />
            ) : bullet.href ? (
              <RichText
                content={{
                  text: bullet.text,
                  href: bullet.href,
                  external: bullet.external,
                  newTab: bullet.newTab,
                }}
              />
            ) : (
              <span>{bullet.text}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Paragraphs({ paragraphs }) {
  if (!paragraphs?.length) return null;

  return paragraphs.map((paragraph, index) => (
    <p key={index}>
      <RichText content={paragraph} />
    </p>
  ));
}

function TwoColumnInfoSection({
  content,
  tone = "white",
  showCta,
  cta,
  contact,
}) {
  if (!content) return null;

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

  const containerClass =
    content.containerWidth === "wide" || content.wide === true || !content.cards?.length
      ? "service-landing__container"
      : "service-landing__narrow";

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className={containerClass}>
        <SectionHeader content={content} light={tone === "dark"} />

        {content.paragraphs?.length > 0 && (
          <div className="service-landing__center-copy">
            <Paragraphs paragraphs={content.paragraphs} />
          </div>
        )}

        {content.cards?.length > 0 && (
          <div className="service-landing__info-grid">
            {content.cards.map((card, index) => {
              const isFeatured =
                card.featured === true ||
                card.variant === "featured" ||
                card.variant === "dark" ||
                card.cardTone === "featured" ||
                card.cardTone === "dark" ||
                card.tone === "featured" ||
                card.tone === "dark";

              const explicitTone =
                card.variant || card.cardTone || card.tone;

              let toneClass = "is-soft";

              if (
                explicitTone === "cyan-tint" ||
                explicitTone === "tint" ||
                explicitTone === "accent-soft" ||
                explicitTone === "cyan"
              ) {
                toneClass = "is-cyan-tint";
              } else if (isFeatured) {
                toneClass = "is-dark is-featured";
              } else if (explicitTone === "white") {
                toneClass = "is-white";
              } else if (explicitTone === "soft") {
                toneClass = "is-soft";
              } else if (tone === "soft" || content.tone === "soft") {
                // Section background is grey (soft), so unfeatured cards must be white
                toneClass = "is-white";
              }

              return (
                <ScrollSlide
                  direction={index % 2 === 0 ? "left" : "right"}
                  key={card.title || index}
                >
                  <article
                    className={`service-landing__info-card ${toneClass} ${card.className || ""}`.trim()}
                  >
                    {card.title && <h3>{card.title}</h3>}

                    <Paragraphs paragraphs={card.paragraphs} />

                    <InfoBullets
                      bullets={card.bullets}
                      columns={card.bulletColumns}
                    />

                    {card.sections?.map((section, sectionIndex) => (
                      <div
                        className={`service-landing__info-card-section ${
                          section.noDivider ? "has-no-divider" : ""
                        }`.trim()}
                        key={`${section.title || "section"}-${sectionIndex}`}
                      >
                        {section.title && <h4>{section.title}</h4>}

                        <Paragraphs paragraphs={section.paragraphs} />

                        <InfoBullets
                          bullets={section.bullets}
                          columns={section.bulletColumns}
                        />
                      </div>
                    ))}
                  </article>
                </ScrollSlide>
              );
          })}
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

export default memo(TwoColumnInfoSection);
