import { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./ValueCards.css";

function ValueIcon({ name }) {
  const props = {
    fill: "none",
    viewBox: "0 0 24 24",
    ariaHidden: true,
    focusable: false,
  };

  if (name === "users") {
    return (
      <svg {...props}>
        <path
          d="M16 20v-1.5A4.5 4.5 0 0 0 11.5 14h-3A4.5 4.5 0 0 0 4 18.5V20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="10"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M17 4.5a3 3 0 0 1 0 5.8M20 20v-1.5a4.5 4.5 0 0 0-2.6-4.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "wrench") {
    return (
      <svg {...props}>
        <path
          d="M14.7 6.2a4.2 4.2 0 0 0-5.4 5.4L4.2 16.7a2 2 0 1 0 2.8 2.8l5.1-5.1a4.2 4.2 0 0 0 5.4-5.4l-2.7 2.1-2.1-2.1 2-2.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...props}>
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m8.3 12.1 2.4 2.4 5-5.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        d="M12 3 19 6v5c0 4.5-2.9 8.3-7 10-4.1-1.7-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2.1 2.1 4.3-4.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ValueCards({
  eyebrow = "",
  title = "",
  description = "",
  supportingText = "",
  cards = [],
  className = "",
}) {
  if (!cards.length) {
    return null;
  }

  return (
    <section className={`value-cards ${className}`.trim()}>
      <div className="value-cards__shape" aria-hidden="true" />

      <div className="container">
        <div className="value-cards__heading">
          {eyebrow && (
            <ScrollSlide direction="up">
              <p className="value-cards__eyebrow">{eyebrow}</p>
            </ScrollSlide>
          )}

          {title && (
            <ScrollZoomText delay={0.08}>
              <h2 className="value-cards__title">{title}</h2>
            </ScrollZoomText>
          )}

          {description && (
            <ScrollZoomText delay={0.16}>
              <p className="value-cards__description">{description}</p>
            </ScrollZoomText>
          )}

          {supportingText && (
            <ScrollZoomText delay={0.22}>
              <p className="value-cards__supporting-text">{supportingText}</p>
            </ScrollZoomText>
          )}
        </div>

        <div className="value-cards__grid">
          {cards.map((card, index) => (
            <ScrollSlide
              direction="up"
              delay={0.12 + index * 0.09}
              key={card.id || card.title}
            >
              <article className="value-cards__card">
                <div className="value-cards__card-top">
                  <span className="value-cards__icon" aria-hidden="true">
                    <ValueIcon name={card.icon} />
                  </span>

                  {card.number && (
                    <span className="value-cards__number">
                      Value {card.number}
                    </span>
                  )}
                </div>

                <h3 className="value-cards__card-title">{card.title}</h3>
                <p className="value-cards__card-description">
                  {card.description}
                </p>

                <span className="value-cards__accent" aria-hidden="true" />
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ValueCards);