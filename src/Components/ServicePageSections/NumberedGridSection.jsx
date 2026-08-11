import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function NumberedGridSection({
  content,
  tone = "white",
  columns = "four",
}) {
  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />
        <div className={`service-landing__number-grid is-${columns}`}>
          {content.items.map((item, index) => (
            <ScrollSlide
              direction="up"
              delay={(index % 4) * 0.05}
              key={`${item.title}-${index}`}
            >
              <article className="service-landing__number-card">
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(NumberedGridSection);
