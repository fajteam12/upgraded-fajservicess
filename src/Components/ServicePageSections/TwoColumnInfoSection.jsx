import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function InfoBullets({ bullets, columns }) {
  if (!bullets?.length) return null;

  return (
    <ul
      className={`service-landing__info-card-bullets ${
        columns === 1 ? "is-single" : ""
      }`}
    >
      {bullets.map((bullet) => {
        const isObject = typeof bullet === "object";
        const text = isObject ? bullet.text : bullet;
        const label = isObject ? bullet.title : null;
        const isStrong = isObject && bullet.strong;

        return (
          <li key={`${label || ""}-${text}`} className={isStrong ? "is-strong" : ""}>
            {label && <strong>{label}:</strong>}
            <span>{text}</span>
          </li>
        );
      })}
    </ul>
  );
}

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

        {content.cards?.length > 0 && (
          <div className="service-landing__info-grid">
            {content.cards.map((card, index) => (
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

                  {card.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <InfoBullets
                    bullets={card.bullets}
                    columns={card.bulletColumns}
                  />

                  {card.sections?.map((section) => (
                    <div
                      className="service-landing__info-card-section"
                      key={section.title}
                    >
                      {section.title && <h4>{section.title}</h4>}

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      <InfoBullets
                        bullets={section.bullets}
                        columns={section.bulletColumns}
                      />
                    </div>
                  ))}
                </article>
              </ScrollSlide>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(TwoColumnInfoSection);
