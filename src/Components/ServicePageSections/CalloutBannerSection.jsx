import { memo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import ServiceIcon from "./ServiceIcon";

function CalloutBannerSection({ content }) {
  if (!content) return null;

  return (
    <section className="service-landing__callout">
      <div className="service-landing__container service-landing__callout-layout">
        <ScrollSlide direction="left">
          <div className="service-landing__callout-copy">
            <span>{content.eyebrow}</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>
        </ScrollSlide>

        <div className="service-landing__callout-stats">
          {content.items?.map((item, index) => (
            <ScrollSlide direction="up" delay={index * 0.08} key={item.label}>
              <article>
                <ServiceIcon name={item.icon || "shield"} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(CalloutBannerSection);
