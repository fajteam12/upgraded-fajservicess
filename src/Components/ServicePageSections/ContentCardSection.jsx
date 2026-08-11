import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function ContentCardSection({ content, tone = "soft" }) {
  if (!content) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />
        <ScrollSlide direction="up">
          <article className="service-landing__statement-card">
            {content.lead && <strong>{content.lead}</strong>}
            {content.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </ScrollSlide>
      </div>
    </section>
  );
}

export default memo(ContentCardSection);
