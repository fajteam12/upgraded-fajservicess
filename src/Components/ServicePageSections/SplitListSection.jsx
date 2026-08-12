import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function SplitListSection({ content, tone = "soft" }) {
  if (!content?.items?.length) return null;

  return (
    <section
      className={`service-landing__section service-landing__split-list is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container service-landing__split-list-layout">
        <div className="service-landing__split-list-intro">
          <SectionHeader content={content} light={tone === "dark"} />
        </div>

        <div className="service-landing__split-list-items">
          {content.items.map((item, index) => (
            <ScrollSlide
              direction="right"
              delay={(index % 5) * 0.08}
              key={item.title}
            >
              <article className="service-landing__split-list-card">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SplitListSection);
