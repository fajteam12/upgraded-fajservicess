import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";

function ResourceCTASection({ content, tone = "dark" }) {
  if (!content) return null;

  const hasContent =
    Boolean(content.title) ||
    Boolean(content.description) ||
    Boolean(content.actionLabel);

  if (!hasContent) return null;

  const hasAction = Boolean(content.actionLabel && content.actionHref);

  return (
    <section
      className={`service-landing__resource-cta is-${tone}`}
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

            {hasAction && (
              <a
                className="service-landing__resource-cta-button"
                href={content.actionHref}
                target={content.openInNewTab === false ? undefined : "_blank"}
                rel={
                  content.openInNewTab === false
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {content.actionLabel}
              </a>
            )}
          </div>
        </ScrollSlide>
      </div>
    </section>
  );
}

export default memo(ResourceCTASection);
