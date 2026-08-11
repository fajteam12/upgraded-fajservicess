import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import ServiceIcon from "./ServiceIcon";

function MetricCardsSection({ content, tone = "dark" }) {
  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__container service-landing__metric-layout">
        <ScrollSlide direction="left">
          <aside className="service-landing__metric-intro">
            <span className="service-landing__eyebrow">{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {content.metric && (
              <article className="service-landing__metric-readout">
                <small>{content.metric.eyebrow}</small>
                <strong>{content.metric.value}</strong>
                <span>{content.metric.label}</span>
                <p>{content.metric.description}</p>
              </article>
            )}
          </aside>
        </ScrollSlide>

        <div className="service-landing__metric-grid">
          {content.items.map((item, index) => (
            <ScrollSlide direction="up" delay={(index % 4) * 0.06} key={item.title}>
              <article className="service-landing__metric-card">
                <div>
                  <ServiceIcon name={item.icon} />
                  {item.badge && <span>{item.badge}</span>}
                </div>
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

export default memo(MetricCardsSection);
