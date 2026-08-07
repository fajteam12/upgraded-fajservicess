import { memo, useId, useState } from "react";
import contactFaqData from "../../data/contactFaqData";
import "./FaqAccordion.css";

function FaqIcon({ type }) {
  const path = type === "phone"
    ? "M6.6 3.5 8.8 3l2 4.8-2 1.3a14 14 0 0 0 6.1 6.1l1.3-2 4.8 2-.5 2.2a2 2 0 0 1-2.2 1.5A16 16 0 0 1 5.1 5.7 2 2 0 0 1 6.6 3.5Z"
    : "M3 5h18v14H3V5Zm1 1 8 6 8-6M4 18l5-5m11 5-5-5";
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>;
}

function FaqAccordion({ data = contactFaqData, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const baseId = useId();

  return (
    <section className="faj-faq" aria-labelledby={`${baseId}-title`}>
      <div className="container faj-faq__grid">
        <aside className="faj-faq__support faj-faq__reveal faj-faq__reveal--left">
          {data.support?.eyebrow && <p className="faj-faq__support-eyebrow">{data.support.eyebrow}</p>}
          <h3>{data.support?.title || "Need more help?"}</h3>
          {data.support?.phone && <a href={data.support.phoneHref}><FaqIcon type="phone" />{data.support.phone}</a>}
          {data.support?.email && <a href={data.support.emailHref}><FaqIcon type="email" />{data.support.email}</a>}
        </aside>

        <div className="faj-faq__content faj-faq__reveal faj-faq__reveal--right">
          {data.eyebrow && <p className="faj-faq__eyebrow">{data.eyebrow}</p>}
          {data.title && <h2 id={`${baseId}-title`}>{data.title}</h2>}
          {data.description && <p className="faj-faq__description">{data.description}</p>}
          <div className="faj-faq__list">
            {(data.questions || []).map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `${baseId}-answer-${index}`;
              return (
                <article className={`faj-faq__item${isOpen ? " is-open" : ""}`} key={item.question}>
                  <button type="button" className="faj-faq__question" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                    <span>{item.question}</span><i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                  </button>
                  <div className="faj-faq__answer" id={answerId} aria-hidden={!isOpen}>
                    <div className="faj-faq__answer-inner"><p>{item.answer}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FaqAccordion);
