import React, { memo, useId } from "react";
import { Link } from "react-router-dom";

import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";

import { calloutSectionData } from "./calloutSectionData";
import "./CalloutSection.css";

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

const CalloutSection = ({
  eyebrow = calloutSectionData.eyebrow,
  title = calloutSectionData.title,
  highlightedTitle = calloutSectionData.highlightedTitle,
  description = calloutSectionData.description,
  action = calloutSectionData.action,

  align = "center",
  size = "default",
  theme = "dark",

  className = "",
}) => {
  const headingId = useId();

  const sectionClasses = [
    "callout-section",
    `callout-section--align-${align}`,
    `callout-section--size-${size}`,
    `callout-section--theme-${theme}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={sectionClasses}
      aria-labelledby={headingId}
    >
      <div
        className="callout-section__decoration callout-section__decoration--top"
        aria-hidden="true"
      />

      <div
        className="callout-section__decoration callout-section__decoration--bottom"
        aria-hidden="true"
      />

      <div className="callout-section__container">
        {eyebrow && (
          <ScrollSlide
            as="p"
            className="callout-section__eyebrow"
            direction="up"
            delay={0.05}
          >
            {eyebrow}
          </ScrollSlide>
        )}

        <ScrollZoomText
          as="h2"
          id={headingId}
          className="callout-section__title"
          delay={0.12}
        >
          <span>{title}</span>

          {highlightedTitle && (
            <span className="callout-section__title-highlight">
              {highlightedTitle}
            </span>
          )}
        </ScrollZoomText>

        {description && (
          <ScrollSlide
            as="p"
            className="callout-section__description"
            direction="up"
            delay={0.2}
          >
            {description}
          </ScrollSlide>
        )}

        {action?.to && action?.label && (
          <ScrollSlide direction="up" delay={0.3}>
            <Link className="callout-section__button" to={action.to}>
              <span>{action.label}</span>
              <ArrowIcon />
            </Link>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
};

export default memo(CalloutSection);