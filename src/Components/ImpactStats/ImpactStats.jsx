import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import "./ImpactStats.css";

function StatIcon({ name }) {
  const commonProps = {
    fill: "none",
    viewBox: "0 0 24 24",
    ariaHidden: true,
    focusable: false,
  };

  if (name === "users") {
    return (
      <svg {...commonProps}>
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
      <svg {...commonProps}>
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

  if (name === "shield") {
    return (
      <svg {...commonProps}>
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

  return (
    <svg {...commonProps}>
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

function ImpactStats({ cards = [], className = "" }) {
  if (!cards.length) {
    return null;
  }

  return (
    <section className={`impact-stats ${className}`.trim()}>
      <div className="container">
        <div className="impact-stats__grid">
          {cards.map((card, index) => (
            <ScrollSlide
              direction="up"
              delay={index * 0.1}
              key={card.id || card.label}
            >
              <article className="impact-stats__card">
                <div className="impact-stats__card-glow" aria-hidden="true" />

                <div className="impact-stats__top">
                  <span className="impact-stats__icon" aria-hidden="true">
                    <StatIcon name={card.icon} />
                  </span>

                  <span className="impact-stats__number-label">
                    Stat {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <strong className="impact-stats__value">{card.value}</strong>
                <h2 className="impact-stats__label">{card.label}</h2>
                <p className="impact-stats__description">{card.description}</p>
                <span className="impact-stats__accent" aria-hidden="true" />
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ImpactStats);