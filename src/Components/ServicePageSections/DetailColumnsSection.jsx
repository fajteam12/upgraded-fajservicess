import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function DetailColumnsSection({ content, tone = "dark" }) {
  if (!content?.columns?.length) return null;

  const hasHeader =
    Boolean(content.eyebrow) ||
    Boolean(content.title) ||
    Boolean(content.description);

  return (
    <section
      className={`service-landing__section service-landing__detail-columns-section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        {hasHeader && (
          <SectionHeader content={content} light={tone === "dark"} />
        )}

        <div className="service-landing__detail-columns">
          {content.columns.map((column, index) => (
            <ScrollSlide
              direction={index % 2 === 0 ? "left" : "right"}
              key={column.title}
            >
              <article className="service-landing__detail-column">
                {column.title && <h3>{column.title}</h3>}

                {column.description && (
                  <p className="service-landing__detail-column-intro">
                    {column.description}
                  </p>
                )}

                {column.items?.length > 0 && (
                  <ul className="service-landing__detail-list">
                    {column.items.map((item, itemIndex) => {
                      const isObject = typeof item === "object";
                      const label = isObject ? item.title : null;
                      const text = isObject ? item.text : item;

                      return (
                        <li key={`${label || "item"}-${itemIndex}`}>
                          <span className="service-landing__detail-bullet" aria-hidden="true" />
                          <span>
                            {label && <strong>{label}:</strong>} {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </article>
            </ScrollSlide>
          ))}
        </div>

        {(content.footerNote?.label || content.footerNote?.text) && (
          <div className="service-landing__detail-footer-note">
            {content.footerNote.label && (
              <strong>{content.footerNote.label}:</strong>
            )}
            {content.footerNote.text && <span>{content.footerNote.text}</span>}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(DetailColumnsSection);
