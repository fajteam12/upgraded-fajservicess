import React, { memo } from "react";
import { getCloudflareImageUrl } from "../../utils/cloudflareImages";
import "./ServicesGrid.css";

function ServicesHeroBanner({ title = "SERVICES", bgImage = "/img/services/hero-services.png" }) {
  const bgUrl = getCloudflareImageUrl(bgImage, "large") || bgImage;

  return (
    <section
      className="services-hero-banner"
      style={{ backgroundImage: `url(${bgUrl})` }}
      aria-label="Services Header"
    >
      <div className="services-hero-banner__overlay">
        <div className="services-hero-banner__band">
          <h1 className="services-hero-banner__title">{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesHeroBanner);
