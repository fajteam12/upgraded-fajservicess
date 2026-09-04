import { memo } from "react";
import { Link } from "react-router-dom";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function RichText({ content }) {
  if (typeof content === "string") return content;
  if (!content) return null;

  if (content.href && content.text) {
    const isExternal =
      content.external === true || /^https?:\/\//i.test(content.href);

    return isExternal ? (
      <a
        className="service-landing__inline-link"
        href={content.href}
        target={content.newTab === false ? undefined : "_blank"}
        rel={content.newTab === false ? undefined : "noopener noreferrer"}
      >
        {content.text}
      </a>
    ) : (
      <Link className="service-landing__inline-link" to={content.href}>
        {content.text}
      </Link>
    );
  }

  if (Array.isArray(content.parts)) {
    return content.parts.map((part, index) => {
      if (typeof part === "string") {
        return <span key={index}>{part}</span>;
      }

      if (!part) return null;

      if (part.strong && !part.href) {
        return <strong key={index}>{part.text}</strong>;
      }

      if (part.href) {
        const isExternal =
          part.external === true || /^https?:\/\//i.test(part.href);

        return isExternal ? (
          <a
            key={index}
            className="service-landing__inline-link"
            href={part.href}
            target={part.newTab === false ? undefined : "_blank"}
            rel={part.newTab === false ? undefined : "noopener noreferrer"}
          >
            {part.text}
          </a>
        ) : (
          <Link
            key={index}
            className="service-landing__inline-link"
            to={part.href}
          >
            {part.text}
          </Link>
        );
      }

      return <span key={index}>{part.text}</span>;
    });
  }

  return content.text || null;
}

function InfoBullets({ bullets, columns }) {
  if (!bullets?.length) return null;

  return (
    <ul
      className={`service-landing__info-card-bullets ${
        columns === 1 ? "is-single" : ""
      }`}
    >
      {bullets.map((bullet, index) => {
        if (typeof bullet === "string") {
          return <li key={`${bullet}-${index}`}>{bullet}</li>;
        }

        return (
          <li
            key={`${bullet.title || bullet.text || "bullet"}-${index}`}
            className={bullet.strong ? "is-strong" : ""}
          >
            {bullet.title && (
              <strong className="service-landing__info-bullet-title">
                {bullet.title}:
              </strong>
            )}

            {Array.isArray(bullet.parts) ? (
              <RichText content={{ parts: bullet.parts }} />
            ) : bullet.href ? (
              <RichText
                content={{
                  text: bullet.text,
                  href: bullet.href,
                  external: bullet.external,
                  newTab: bullet.newTab,
                }}
              />
            ) : (
              <span>{bullet.text}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Paragraphs({ paragraphs }) {
  if (!paragraphs?.length) return null;

  return paragraphs.map((paragraph, index) => (
    <p key={index}>
      <RichText content={paragraph} />
    </p>
  ));
}

function TwoColumnInfoSection({ content, tone = "white" }) {
  if (!content) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />

        {content.paragraphs?.length > 0 && (
          <div className="service-landing__center-copy">
            <Paragraphs paragraphs={content.paragraphs} />
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

                  <Paragraphs paragraphs={card.paragraphs} />

                  <InfoBullets
                    bullets={card.bullets}
                    columns={card.bulletColumns}
                  />

                  {card.sections?.map((section, sectionIndex) => (
                    <div
                      className="service-landing__info-card-section"
                      key={`${section.title || "section"}-${sectionIndex}`}
                    >
                      {section.title && <h4>{section.title}</h4>}

                      <Paragraphs paragraphs={section.paragraphs} />

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
