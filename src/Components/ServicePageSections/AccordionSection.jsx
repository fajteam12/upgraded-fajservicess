import { memo, useState } from "react";
import SectionHeader from "./SectionHeader";

function AccordionSection({ content, tone = "soft" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />
        <div className="service-landing__faq-list">
          {content.items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`service-landing__faq ${isOpen ? "is-open" : ""}`}
                key={item.question}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true">
                      {isOpen ? "\u2212" : "+"}
                    </span>
                  </button>
                </h3>
                <div className="service-landing__faq-answer">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(AccordionSection);
