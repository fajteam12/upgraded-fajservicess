import { memo } from "react";
import SectionHeader from "./SectionHeader";

function ChecklistSection({ content, tone = "soft" }) {
  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />
        <article className="service-landing__highlights-panel">
          {content.intro && <p>{content.intro}</p>}
          {content.listTitle && <h3>{content.listTitle}</h3>}
          <ul className="service-landing__highlights-grid">
            {content.items.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true">{"\u2713"}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
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
