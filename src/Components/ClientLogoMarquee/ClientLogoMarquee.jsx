import { memo } from "react";
import { getCloudflareImageUrl } from "../../utils/cloudflareImages";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./ClientLogoMarquee.css";

function LogoGroup({ logos, duplicate = false }) {
  return (
    <div className="client-logo-marquee__group" aria-hidden={duplicate}>
      {logos.map((logo) => (
        <div className="client-logo-marquee__logo" key={logo.id}>
          <img
            src={getCloudflareImageUrl(logo.id, "public")}
            alt={duplicate ? "" : logo.alt}
            width="180"
            height="90"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({ logos, reverse = false }) {
  if (!logos.length) {
    return null;
  }

  return (
    <div
      className={`client-logo-marquee__viewport ${
        reverse ? "client-logo-marquee__viewport--reverse" : ""
      }`}
    >
      <div className="client-logo-marquee__track">
        <LogoGroup logos={logos} />
        <LogoGroup logos={logos} duplicate />
      </div>
    </div>
  );
}

function ClientLogoMarquee({
  eyebrow = "",
  title = "",
  description = "",
  logos = [],
  className = "",
}) {
  const firstRow = logos.filter((_, index) => index % 2 === 0);
  const secondRow = logos.filter((_, index) => index % 2 !== 0);

  if (!logos.length) {
    return null;
  }

  return (
    <section className={`client-logo-marquee ${className}`.trim()}>
      <div className="container">
        <header className="client-logo-marquee__header">
          {eyebrow && (
            <ScrollSlide direction="up">
              <p className="client-logo-marquee__eyebrow">{eyebrow}</p>
            </ScrollSlide>
          )}

          {title && (
            <ScrollZoomText delay={0.08}>
              <h2 className="client-logo-marquee__title">{title}</h2>
            </ScrollZoomText>
          )}

          {description && (
            <ScrollSlide direction="up" delay={0.16}>
              <p className="client-logo-marquee__description">{description}</p>
            </ScrollSlide>
          )}
        </header>
      </div>

      <ScrollSlide direction="up" delay={0.2}>
        <div className="client-logo-marquee__rows">
          <MarqueeRow logos={firstRow} />
          <MarqueeRow logos={secondRow} reverse />
        </div>
      </ScrollSlide>
    </section>
  );
}

export default memo(ClientLogoMarquee);