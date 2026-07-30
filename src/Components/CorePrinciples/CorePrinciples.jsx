import React, { memo, useId } from "react";
import { corePrinciplesData } from "./corePrinciplesData";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./CorePrinciples.css";

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

const PrincipleIcon = ({ name }) => {
  switch (name) {
    case "shield":
      return (
        <svg {...iconProps}>
          <path d="M12 3 19 6v5.2c0 4.3-2.8 7.2-7 9.8-4.2-2.6-7-5.5-7-9.8V6Z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      );

    case "people":
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M4 19c.4-3.2 2.1-5 5-5s4.6 1.8 5 5" />
          <path d="M14.5 15c2.8 0 4.5 1.3 5 4" />
        </svg>
      );

    case "check":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
      );

    case "tool":
      return (
        <svg {...iconProps}>
          <path d="M14.5 6.5a4 4 0 0 0-5-5l2.2 2.2-2.5 2.5L7 4a4 4 0 0 0 5 5l6.3 6.3a2.1 2.1 0 1 1-3 3L9 12" />
        </svg>
      );

    default:
      return null;
  }
};

const CorePrinciples = ({
  eyebrow = "Our Core Principles",
  title = "We deliver reliable, affordable services",
  highlightedTitle = "with dedicated support",
  description = "Installation, repair, and maintenance service agreements for homes, offices, and commercial properties across Dubai, Sharjah, and Abu Dhabi.",
  principles = corePrinciplesData,
  className = "",
}) => {
  const headingId = useId();

  const sectionClasses = ["core-principles", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={sectionClasses}
      aria-labelledby={headingId}
    >
      <div className="core-principles__container">
        <header className="core-principles__header">
          <ScrollSlide
            as="div"
            className="core-principles__eyebrow"
            direction="up"
            delay={0.05}
          >
            <span aria-hidden="true" />
            <p>{eyebrow}</p>
            <span aria-hidden="true" />
          </ScrollSlide>

          <ScrollZoomText
            as="h2"
            id={headingId}
            className="core-principles__title"
            delay={0.12}
          >
            <span>{title}</span>
            <span className="core-principles__title-highlight">
              {highlightedTitle}
            </span>
          </ScrollZoomText>

          {description && (
            <ScrollSlide
              as="p"
              className="core-principles__description"
              direction="up"
              delay={0.2}
            >
              {description}
            </ScrollSlide>
          )}
        </header>

        <ol className="core-principles__timeline">
          {principles.map((principle, index) => {
            const itemPosition = index % 2 === 0 ? "left" : "right";
            const direction = itemPosition === "left" ? "right" : "left";

            return (
              <ScrollSlide
                as="li"
                key={principle.id || principle.title}
                className={`core-principles__item core-principles__item--${itemPosition}`}
                direction={direction}
                delay={0.28 + index * 0.1}
                distance={36}
              >
                <article className="core-principles__card">
                  <span className="core-principles__icon">
                    <PrincipleIcon name={principle.icon} />
                  </span>

                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>

                <span
                  className="core-principles__marker"
                  aria-hidden="true"
                >
                  {principle.number}
                </span>
              </ScrollSlide>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default memo(CorePrinciples);