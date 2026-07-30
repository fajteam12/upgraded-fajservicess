import React, { memo, useId } from "react";
import { Link } from "react-router-dom";

import { tradingSectionData } from "./tradingSectionData";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";

import "./TradingSection.css";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const TradingIcon = ({ name }) => {
  switch (name) {
    case "package":
      return (
        <svg {...iconProps}>
          <path d="m4 7 8-4 8 4-8 4Z" />
          <path d="M4 7v10l8 4 8-4V7" />
          <path d="M12 11v10" />
          <path d="m8 5 8 4" />
        </svg>
      );

    case "certificate":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="9" r="5" />
          <path d="m9 13-1 8 4-2 4 2-1-8" />
          <path d="m10 9 1.3 1.3L14.5 7" />
        </svg>
      );

    case "truck":
      return (
        <svg {...iconProps}>
          <path d="M3 6h11v10H3Z" />
          <path d="M14 10h4l3 3v3h-7Z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );

    case "shield":
      return (
        <svg {...iconProps}>
          <path d="M12 3 19 6v5.2c0 4.3-2.8 7.2-7 9.8-4.2-2.6-7-5.5-7-9.8V6Z" />
          <path d="m8.8 12 2.1 2.1 4.4-4.6" />
        </svg>
      );

    default:
      return null;
  }
};

const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3.5 10h12" />
    <path d="m11.5 6 4 4-4 4" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 7h12l-1 10H5Z" />
    <path d="M7 7a3 3 0 0 1 6 0" />
  </svg>
);

const TradingSection = ({
  badge = tradingSectionData.badge,
  title = tradingSectionData.title,
  secondLine = tradingSectionData.secondLine,
  highlightedTitle = tradingSectionData.highlightedTitle,
  paragraphs = tradingSectionData.paragraphs,
  primaryCta = tradingSectionData.primaryCta,
  secondaryCta = tradingSectionData.secondaryCta,
  features = tradingSectionData.features,
  className = "",
}) => {
  const headingId = useId();

  const sectionClasses = ["trading-section", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} aria-labelledby={headingId}>
      <div className="trading-section__container">
        <div className="trading-section__content">
          {badge && (
            <ScrollSlide
              as="p"
              className="trading-section__badge"
              direction="up"
              delay={0.05}
            >
              <span aria-hidden="true">
                <ShoppingBagIcon />
              </span>
              {badge}
            </ScrollSlide>
          )}

          <ScrollZoomText
            as="h2"
            id={headingId}
            className="trading-section__title"
            delay={0.12}
          >
            <span>{title}</span>
            <span>{secondLine}</span>
            <span className="trading-section__title-highlight">
              {highlightedTitle}
            </span>
          </ScrollZoomText>

          <div className="trading-section__description">
            {paragraphs.map((paragraph, index) => (
              <ScrollSlide
                as="p"
                direction="up"
                delay={0.2 + index * 0.08}
                key={`${index}-${paragraph.slice(0, 20)}`}
              >
                {paragraph}
              </ScrollSlide>
            ))}
          </div>

          <ScrollSlide direction="up" delay={0.38}>
            <div
              className="trading-section__actions"
              aria-label="FAJ Trading actions"
            >
              {primaryCta?.href && (
                <a
                  className="trading-section__button trading-section__button--primary"
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowIcon />
                </a>
              )}

              {secondaryCta?.to && (
                <Link
                  className="trading-section__button trading-section__button--secondary"
                  to={secondaryCta.to}
                >
                  <ShoppingBagIcon />
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          </ScrollSlide>
        </div>

        <ul className="trading-section__features">
          {features.map((feature, index) => (
            <ScrollSlide
              as="li"
              className="trading-section__feature-item"
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.22 + index * 0.1}
              key={feature.id || feature.title}
            >
              <article className="trading-section__feature-card">
                <span className="trading-section__feature-icon">
                  <TradingIcon name={feature.icon} />
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </ScrollSlide>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(TradingSection);