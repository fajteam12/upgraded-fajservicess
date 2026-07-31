import React, { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./MaintenanceBenefits.css";

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
      aria-labelledby="maintenance-benefits-title"
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
            {benefits.map((benefit, index) => (
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
                      {benefit.icon}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(MaintenanceBenefits);