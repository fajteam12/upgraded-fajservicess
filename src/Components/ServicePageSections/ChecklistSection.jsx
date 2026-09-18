import { memo } from "react";
import { Link } from "react-router-dom";

import SectionHeader from "./SectionHeader";

function renderRichContent(content, keyPrefix = "content") {
  if (content === null || content === undefined) {
    return null;
  }

  if (typeof content === "string" || typeof content === "number") {
    return content;
  }

  if (Array.isArray(content)) {
    return content.map((part, index) => (
      <span key={`${keyPrefix}-${index}`}>
        {renderRichContent(part, `${keyPrefix}-${index}`)}
      </span>
    ));
  }

  if (
    typeof content === "object" &&
    Array.isArray(content.parts)
  ) {
    return content.parts.map((part, index) => (
      <span key={`${keyPrefix}-part-${index}`}>
        {renderRichContent(
          part,
          `${keyPrefix}-part-${index}`
        )}
      </span>
    ));
  }

  if (
    typeof content === "object" &&
    content.text
  ) {
    const renderedText = content.strong ? (
      <strong>{content.text}</strong>
    ) : (
      content.text
    );

    if (!content.href) {
      return renderedText;
    }

    if (content.external) {
      return (
        <a
          href={content.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderedText}
        </a>
      );
    }

    return (
      <Link to={content.href}>
        {renderedText}
      </Link>
    );
  }

  return null;
}

function renderItemTitle(item) {
  if (!item?.title) {
    return null;
  }

  if (!item.href) {
    return <strong>{item.title}</strong>;
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>{item.title}</strong>
      </a>
    );
  }

  return (
    <Link to={item.href}>
      <strong>{item.title}</strong>
    </Link>
  );
}

function ChecklistSection({
  content,
  tone = "soft",
}) {
  if (!content?.items?.length) {
    return null;
  }

  /*
   * Do not send a rich description object into SectionHeader.
   * SectionHeader may try to render content.description directly,
   * which causes:
   *
   * Objects are not valid as a React child
   * (found: object with keys {parts})
   */
  const headerContent = {
    ...content,
    description: undefined,
  };

  return (
    <section
      className={`service-landing__section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__narrow">
        <SectionHeader
          content={headerContent}
          light={tone === "dark"}
        />

        {content.description && (
          <p className="service-landing__section-description">
            {renderRichContent(
              content.description,
              "section-description"
            )}
          </p>
        )}

        <article className="service-landing__highlights-panel">
          {content.intro && (
            <p>
              {renderRichContent(
                content.intro,
                "intro"
              )}
            </p>
          )}

          {content.listTitle && (
            <h3>{content.listTitle}</h3>
          )}

          <ul className="service-landing__highlights-grid">
            {content.items.map((item, index) => (
              <li key={item.title || index}>
                <span aria-hidden="true">
                  {"\u2713"}
                </span>

                <div>
                  {renderItemTitle(item)}

                  {item.description && (
                    <p>
                      {renderRichContent(
                        item.description,
                        `description-${index}`
                      )}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default memo(ChecklistSection);