import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";

function SpotlightSection({ content, tone = "white" }) {
  if (!content) return null;

  return (
    <section
      className={`service-landing__section service-landing__spotlight is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container service-landing__spotlight-layout">
        <ScrollSlide direction="left">
          <div className="service-landing__spotlight-copy">
            <SectionHeader content={content} light={tone === "dark"} />
            {content.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ScrollSlide>

        {content.spotlight && (
          <ScrollSlide direction="right">
            <article className="service-landing__spotlight-card">
              <span className="service-landing__spotlight-icon" aria-hidden="true">
                <ServiceIcon name={content.spotlight.icon || "wind"} />
              </span>
              <h3>{content.spotlight.title}</h3>
              <p>{content.spotlight.description}</p>
              {content.spotlight.label && (
                <strong>{content.spotlight.label}</strong>
              )}
            </article>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(SpotlightSection);
