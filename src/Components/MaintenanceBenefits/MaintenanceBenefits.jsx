import React, { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./MaintenanceBenefits.css";

function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <IconBase>
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </IconBase>
  );
}

function DollarSignIcon() {
  return (
    <IconBase>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </IconBase>
  );
}

function ClockIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </IconBase>
  );
}

function SparklesIcon() {
  return (
    <IconBase>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </IconBase>
  );
}

function ShieldCheckIcon() {
  return (
    <IconBase>
      <path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2.1 0 4.5-1.2 6.3-2.7a1.1 1.1 0 0 1 1.4 0C14.5 3.8 16.9 5 19 5a1 1 0 0 1 1 1Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

function WindIcon() {
  return (
    <IconBase>
      <path d="M2 8h9a2 2 0 1 0-2-2" />
      <path d="M2 12h15a2.5 2.5 0 1 0-2.5-2.5" />
      <path d="M2 16h9a2 2 0 1 1-2 2" />
    </IconBase>
  );
}

const BENEFIT_ICONS = {
  snowflake: SnowflakeIcon,
  "dollar-sign": DollarSignIcon,
  clock: ClockIcon,
  sparkles: SparklesIcon,
  "shield-check": ShieldCheckIcon,
  wind: WindIcon,
};

function MaintenanceBenefits({
  eyebrow = "",
  title = "",
  description = "",
  stats = [],
  benefits = [],
}) {
  const hasEyebrow = Boolean(eyebrow?.trim());
  const hasTitle = Boolean(title?.trim());
  const hasDescription = Boolean(description?.trim());

  return (
    <section
      className="maintenance-benefits"
      aria-labelledby={
        hasTitle
          ? "maintenance-benefits-title"
          : undefined
      }
    >
      <div className="maintenance-benefits__container">
        <div className="maintenance-benefits__layout">
          <aside className="maintenance-benefits__intro">
            {hasEyebrow && (
              <ScrollSlide direction="left">
                <span className="maintenance-benefits__eyebrow">
                  {eyebrow}
                </span>
              </ScrollSlide>
            )}

            {hasTitle && (
              <ScrollZoomText as="div" delay={0.08}>
                <h2 id="maintenance-benefits-title">
                  {title}
                </h2>
              </ScrollZoomText>
            )}

            {hasDescription && (
              <ScrollZoomText as="div" delay={0.16}>
                <p className="maintenance-benefits__description">
                  {description}
                </p>
              </ScrollZoomText>
            )}

            {stats?.length > 0 && (
              <ScrollSlide direction="up" delay={0.24}>
                <div className="maintenance-benefits__stats">
                  {stats.map((stat) => (
                    <div
                      className="maintenance-benefits__stat"
                      key={stat.label}
                    >
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollSlide>
            )}
          </aside>

          <div className="maintenance-benefits__grid">
            {benefits.map((benefit, index) => {
              const BenefitIcon =
                BENEFIT_ICONS[benefit.icon] ||
                SparklesIcon;

              return (
                <ScrollSlide
                  key={benefit.id}
                  direction="up"
                  delay={(index % 2) * 0.1}
                >
                  <article className="maintenance-benefits__card">
                    <div className="maintenance-benefits__card-top">
                      <span
                        className="maintenance-benefits__icon"
                        aria-hidden="true"
                      >
                        <BenefitIcon />
                      </span>

                      <span className="maintenance-benefits__number">
                        {benefit.number}
                      </span>
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>

                    <span
                      className="maintenance-benefits__accent"
                      aria-hidden="true"
                    />
                  </article>
                </ScrollSlide>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(MaintenanceBenefits);