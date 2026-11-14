import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";


function renderSafeText(val) {
	if (val === null || val === undefined) return null;
	if (typeof val === 'string' || typeof val === 'number') return val;
	if (Array.isArray(val.parts)) {
		return val.parts.map((p) => (typeof p === 'string' ? p : p.text || '')).join('');
	}
	return val.text || String(val);
}

function StackedServicesPanelSection({ content, onAction, tone = "soft" }) {
  if (!content?.items?.length) return null;

  return (
    <section
      className={`service-landing__section service-landing__stacked-services is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />

        <ScrollSlide direction="up">
          <article className="service-landing__stacked-services-panel">
            {content.listTitle && <h3>{content.listTitle}</h3>}

            <div className="service-landing__stacked-services-list">
              {content.items.map((item) => (
                <div key={item.title}>
                  <span aria-hidden="true">{"\u2713"}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{renderSafeText(item.description)}</p>
                  </div>
                </div>
              ))}
            </div>

            {(content.footerText || content.actionLabel) && (
              <footer className="service-landing__stacked-services-footer">
                {content.footerText && <p>{renderSafeText(content.footerText)}</p>}
                {content.actionLabel && onAction && (
                  <button
                    type="button"
                    className="service-landing__button"
                    onClick={() => onAction(content.bookingLabel || content.title)}
                  >
                    {content.actionLabel}
                  </button>
                )}
              </footer>
            )}
          </article>
        </ScrollSlide>
      </div>
    </section>
  );
}

export default memo(StackedServicesPanelSection);
