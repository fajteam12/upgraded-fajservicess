import { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";

function renderSafeText(val) {
  if (val === null || val === undefined) return null;
  if (typeof val === "string" || typeof val === "number") return val;
  if (Array.isArray(val.parts)) {
    return val.parts.map((p) => (typeof p === "string" ? p : p.text || "")).join("");
  }
  return val.text || String(val);
}

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
            {renderSafeText(content.eyebrow)}
          </span>
        </ScrollSlide>
      )}

      <ScrollZoomText as="div" delay={0.08}>
        <Heading>{renderSafeText(content.title)}</Heading>
      </ScrollZoomText>

      {content.description && <p>{renderSafeText(content.description)}</p>}

      <span
        className="service-landing__heading-line"
        aria-hidden="true"
      />
    </header>
  );
}

export default memo(SectionHeader);
