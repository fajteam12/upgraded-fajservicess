import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function ResourceCTASection({ content, tone, onAction }) {
  if (!content) return null;

  const actionLabel = content.actionLabel || content.cta?.label;
  const actionHref = content.actionHref || content.cta?.href;

  const hasContent =
    Boolean(content.title) ||
    Boolean(content.description) ||
    Boolean(actionLabel);

  if (!hasContent) return null;

  const effectiveTone = content.tone || tone || "dark";
  const hasAction = Boolean(actionLabel && (actionHref || onAction));

  const isExternal =
    content.external ||
    (content.openInNewTab !== false &&
      (content.openInNewTab || /^https?:\/\//i.test(actionHref || "")));

  const isWhatsapp =
    Boolean(content.isWhatsapp) ||
    /whatsapp|wa\.me/i.test(actionHref || "");

  const buttonClass =
    content.buttonClass || "service-landing__resource-cta-button";

  const renderAction = () => {
    if (!hasAction) return null;

    if (actionHref) {
      if (isWhatsapp) {
        return <WhatsappIconButton whatsapp={actionHref} />;
      }

      if (isExternal) {
        return (
          <a
            className={buttonClass}
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {actionLabel}
          </a>
        );
      }

      return (
        <Link
          className={buttonClass}
          to={actionHref}
        >
          {actionLabel}
        </Link>
      );
    }

    if (onAction) {
      return (
        <button
          type="button"
          className={buttonClass}
          onClick={() => onAction(content.bookingLabel || content.title)}
        >
          {actionLabel}
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
