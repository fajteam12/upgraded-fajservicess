import { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";

function SectionHeader({ content, light = false, headingLevel = 2 }) {
  if (!content?.title) return null;

  const Heading = `h${headingLevel}`;

  return (
    <header
      className={`service-landing__section-heading ${
        light ? "is-light" : ""
      }`}
    >
      {content.eyebrow && (
        <ScrollSlide direction="down">
          <span className="service-landing__eyebrow">
            {content.eyebrow}
          </span>
        </ScrollSlide>
      )}

      <ScrollZoomText as="div" delay={0.08}>
        <Heading>{content.title}</Heading>
      </ScrollZoomText>

      {content.description && <p>{content.description}</p>}

      <span
        className="service-landing__heading-line"
        aria-hidden="true"
      />
    </header>
  );
}

export default memo(SectionHeader);
