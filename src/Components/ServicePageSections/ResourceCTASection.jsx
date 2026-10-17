import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function ResourceCTASection({ content, tone, onAction }) {
  if (!content) return null;

  const hasContent =
    Boolean(content.title) ||
    Boolean(content.description) ||
    Boolean(content.actionLabel);

  if (!hasContent) return null;

  const effectiveTone = content.tone || tone || "dark";
  const hasAction = Boolean(content.actionLabel && (content.actionHref || onAction));

  const isExternal =
    content.external ||
    (content.openInNewTab !== false &&
      (content.openInNewTab || /^https?:\/\//i.test(content.actionHref || "")));

  const isWhatsapp =
    Boolean(content.isWhatsapp) ||
    /whatsapp|wa\.me/i.test(content.actionHref || "");

  const renderAction = () => {
    if (!hasAction) return null;

    if (content.actionHref) {
      if (isWhatsapp) {
        return <WhatsappIconButton whatsapp={content.actionHref} />;
      }

      if (isExternal) {
        return (
          <a
            className="service-landing__resource-cta-button"
            href={content.actionHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.actionLabel}
          </a>
        );
      }

      return (
        <Link
          className="service-landing__resource-cta-button"
          to={content.actionHref}
        >
          {content.actionLabel}
        </Link>
      );
    }

    if (onAction) {
      return (
        <button
          type="button"
          className="service-landing__resource-cta-button"
          onClick={() => onAction(content.bookingLabel || content.title)}
        >
          {content.actionLabel}
        </button>
      );
    }

    return null;
  };

  return (
    <section
      className={`service-landing__resource-cta is-${effectiveTone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        <ScrollSlide direction="up">
          <div className="service-landing__resource-cta-inner">
            {content.eyebrow && (
              <span className="service-landing__resource-cta-eyebrow">
                {content.eyebrow}
              </span>
            )}

            {content.title && <h2>{content.title}</h2>}

            {content.description && <p>{content.description}</p>}

            {hasAction && renderAction()}
          </div>
        </ScrollSlide>
      </div>
    </section>
  );
}

export default memo(ResourceCTASection);
