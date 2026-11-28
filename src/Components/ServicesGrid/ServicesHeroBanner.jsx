import React, { memo } from "react";
import { getCloudflareImageUrl } from "../../utils/cloudflareImages";
import "./ServicesGrid.css";

function ServicesHeroBanner({
  title = "SERVICES",
  bgImage = "services/hero-services",
  mobileBgImage = "services/hero-services-mobile",
}) {
  const desktopUrl = getCloudflareImageUrl(bgImage, "large") || bgImage;
  const mobileUrl = mobileBgImage
    ? getCloudflareImageUrl(mobileBgImage, "large") || mobileBgImage
    : desktopUrl;

  return (
    <section className="services-hero-banner" aria-label="Services Header">
      <picture className="services-hero-banner__picture">
        {mobileUrl && mobileUrl !== desktopUrl && (
          <source media="(max-width: 768px)" srcSet={mobileUrl} />
        )}
        <img
          className="services-hero-banner__image"
          src={desktopUrl}
          alt={title || "Services Hero"}
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="services-hero-banner__overlay">
        <div className="services-hero-banner__band">
          <h1 className="services-hero-banner__title">{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesHeroBanner);
