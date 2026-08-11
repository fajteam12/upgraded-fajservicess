import { memo } from "react";
import SectionHeader from "./SectionHeader";

function ContentGridSection({ content, tone = "soft" }) {
  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />
        <article className="service-landing__offered-panel">
          {content.introTitle && <h3>{content.introTitle}</h3>}
          {content.introText && <p>{content.introText}</p>}
          <div className="service-landing__offered-grid">
            {content.items.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default memo(ContentGridSection);
