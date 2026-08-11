import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function TwoColumnInfoSection({ content, tone = "white" }) {
  if (!content) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />

        {content.paragraphs?.length > 0 && (
          <div className="service-landing__center-copy">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="service-landing__info-grid">
          {content.cards?.map((card, index) => (
            <ScrollSlide
              direction={index % 2 === 0 ? "left" : "right"}
              key={card.title}
            >
              <article
                className={`service-landing__info-card ${
                  card.featured ? "is-dark" : ""
                }`}
              >
                <h3>{card.title}</h3>
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TwoColumnInfoSection);
