import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import ServiceIcon from "./ServiceIcon";

function CalloutBannerSection({
  content,
  onAction,
}) {
  if (!content) return null;

  const hasAction = Boolean(content.actionLabel);

  const isExternal =
    content.external ||
    content.openInNewTab ||
    /^https?:\/\//i.test(content.actionHref || "");

  const renderAction = () => {
    if (!hasAction) return null;

    if (content.actionHref && isExternal) {
      return (
        <a
          className="service-landing__button"
          href={content.actionHref}
          target={content.openInNewTab ? "_blank" : undefined}
          rel={content.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {content.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </a>
      );
    }

    if (content.actionHref) {
      return (
        <Link
          className="service-landing__button"
          to={content.actionHref}
        >
          {content.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      );
    }

    if (onAction) {
      return (
        <button
          type="button"
          className="service-landing__button"
          onClick={() =>
            onAction(content.bookingLabel || content.title)
          }
        >
          {content.actionLabel}
          <span aria-hidden="true">{"\u2192"}</span>
        </button>
      );
    }

    return null;
  };

  return (
    <section
      className="service-landing__callout"
      id={content.id}
    >
      <div className="service-landing__container service-landing__callout-layout">
        <ScrollSlide direction="left">
          <div className="service-landing__callout-copy">
            {content.eyebrow && (
              <span>{content.eyebrow}</span>
            )}

            {content.title && (
              <h2>{content.title}</h2>
            )}

            {content.description && (
              <p>{content.description}</p>
            )}

            {hasAction && (
              <div className="service-landing__callout-action">
                {renderAction()}
              </div>
            )}
          </div>
        </ScrollSlide>

        {content.items?.length > 0 && (
          <div className="service-landing__callout-stats">
            {content.items.map((item, index) => (
              <ScrollSlide
                direction="up"
                delay={index * 0.08}
                key={`${item.label}-${index}`}
              >
                <article>
                  <ServiceIcon
                    name={item.icon || "shield"}
                  />

                  {item.value && (
                    <strong>{item.value}</strong>
                  )}

                  {item.label && (
                    <span>{item.label}</span>
                  )}
                </article>
              </ScrollSlide>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(CalloutBannerSection);