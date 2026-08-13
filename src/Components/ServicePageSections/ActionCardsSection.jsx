import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";

function ActionCardsSection({
  content,
  onAction,
  tone = "white",
  columns = "three",
}) {
  if (!content?.items?.length) return null;

  const itemCount = content.items.length;
  const resolvedColumns = itemCount === 3
    ? "three"
    : itemCount === 4
      ? "four"
      : columns;

  return (
    <section className={`service-landing__section is-${tone}`} id={content.id}>
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />

        <div className={`service-landing__action-grid is-${resolvedColumns}`}>
          {content.items.map((item, index) => (
            <ScrollSlide
              direction="up"
              delay={(index % 4) * 0.06}
              key={item.title}
            >
              <article className="service-landing__action-card">
                <div className="service-landing__action-card-top">
                  <span className="service-landing__action-icon">
                    <ServiceIcon name={item.icon} />
                  </span>
                  {item.badge && (
                    <span className="service-landing__action-badge">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3>{item.title}</h3>
                {item.subtitle && <strong>{item.subtitle}</strong>}
                <p>{item.description}</p>

                {item.actionLabel && item.href && (
                  <Link
                    className="service-landing__action-link"
                    to={item.href}
                  >
                    {item.actionLabel} <span aria-hidden="true">{"\u2192"}</span>
                  </Link>
                )}

                {item.actionLabel && !item.href && onAction && (
                  <button
                    type="button"
                    className="service-landing__action-link"
                    onClick={() => onAction(item.bookingLabel || item.title)}
                  >
                    {item.actionLabel} <span aria-hidden="true">{"\u2192"}</span>
                  </button>
                )}
              </article>
            </ScrollSlide>
          ))}
        </div>

        {content.footerCard && (
          <ScrollSlide direction="up">
            <aside className="service-landing__action-footer-card">
              <div>
                <h3>{content.footerCard.title}</h3>
                <p>{content.footerCard.description}</p>
              </div>
              {content.footerCard.actionLabel && onAction && (
                <button
                  type="button"
                  className="service-landing__button"
                  onClick={() =>
                    onAction(
                      content.footerCard.bookingLabel ||
                        content.footerCard.title
                    )
                  }
                >
                  {content.footerCard.actionLabel}
                </button>
              )}
            </aside>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(ActionCardsSection);
