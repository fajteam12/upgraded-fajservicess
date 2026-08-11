import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function PlanCardsSection({ content, onAction, dark = true }) {
  if (!content?.plans?.length) return null;

  return (
    <section
      className={`service-landing__section service-landing__contracts ${
        dark ? "is-dark" : "is-white"
      }`}
    >
      {dark && <div className="service-landing__dark-glow" aria-hidden="true" />}
      <div className="service-landing__container">
        <SectionHeader content={content} light={dark} />

        <div className="service-landing__contracts-grid">
          {content.plans.map((plan, index) => (
            <ScrollSlide
              direction="up"
              delay={(index % 3) * 0.08}
              key={plan.title}
            >
              <article
                className={`service-landing__contract-card ${
                  index === content.featuredIndex ? "is-featured" : ""
                }`}
              >
                {plan.badge && (
                  <span className="service-landing__contract-badge">
                    {plan.badge}
                  </span>
                )}
                <div className="service-landing__contract-icon" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{plan.title}</h3>
                <p>{plan.tagline}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">{"\u2713"}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="service-landing__button is-contract is-full"
                  onClick={() => onAction(plan.title)}
                >
                  {content.actionLabel} <span aria-hidden="true">{"\u2192"}</span>
                </button>
              </article>
            </ScrollSlide>
          ))}
        </div>

        {content.footnote && (
          <p className="service-landing__footnote">{content.footnote}</p>
        )}
      </div>
    </section>
  );
}

export default memo(PlanCardsSection);
