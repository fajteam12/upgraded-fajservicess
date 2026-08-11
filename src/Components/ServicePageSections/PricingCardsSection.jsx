import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function PricingCardsSection({ content, onAction }) {
  if (!content?.items?.length) return null;

  return (
    <section className="service-landing__section is-white">
      <div className="service-landing__container">
        <SectionHeader content={content} />

        <div className="service-landing__pricing-grid">
          {content.items.map((item, index) => (
            <ScrollSlide
              direction="up"
              delay={(index % 3) * 0.08}
              key={item.title}
            >
              <article className="service-landing__price-card">
                <div>
                  <span className="service-landing__card-badge">
                    {item.badge || content.defaultBadge}
                  </span>
                  <h3>{item.title}</h3>
                  {item.subtitle && <small>{item.subtitle}</small>}
                  <strong className="service-landing__price">
                    {content.pricePrefix} <em>{item.price}</em>
                  </strong>
                  <p>{item.description}</p>
                </div>

                <button
                  type="button"
                  className="service-landing__button is-dark is-full"
                  onClick={() => onAction(item.title)}
                >
                  {content.actionLabel}
                </button>
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PricingCardsSection);
