import React, { memo } from "react";
import { Link } from "react-router-dom";
import KitchenServiceIcon from "../../icons/KitchenServiceIcon";
import FanServiceIcon from "../../icons/FanServiceIcon";
import LaundryServiceIcon from "../../icons/LaundryServiceIcon";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import {
  getCloudflareImageUrl,
  getCloudflareImageSrcSet,
} from "../../utils/cloudflareImages";
import "./ServicesGrid.css";

const iconComponentMap = {
  kitchen: KitchenServiceIcon,
  fan: FanServiceIcon,
  laundry: LaundryServiceIcon,
};

function ServiceCard({ item }) {
  const IconComponent = iconComponentMap[item.icon] || KitchenServiceIcon;
  const imageSrc = getCloudflareImageUrl(item.image, "public");
  const imageSrcSet = getCloudflareImageSrcSet(item.image);

  return (
    <article className="service-feature-card">
      <div className="service-feature-card__thumbnail">
        <div className="service-feature-card__img-container">
          <img
            src={imageSrc}
            srcSet={imageSrcSet}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={item.alt || item.title}
            className="service-feature-card__img"
            loading="lazy"
            decoding="async"
            width={410}
            height={255}
          />
        </div>
        <div className="service-feature-card__badge" aria-hidden="true">
          <IconComponent size={22} color="#0A84A6" />
        </div>
      </div>

      <div className="service-feature-card__content">
        <h3 className="service-feature-card__title">
          <Link to={item.btnLink}>{item.title}</Link>
        </h3>

        <div className="service-feature-card__divider" />

        <p className="service-feature-card__desc">{item.desc}</p>

        <div className="service-feature-card__divider" />

        <Link to={item.btnLink} className="service-feature-card__cta">
          <span>{item.btnText || "READ MORE"}</span>
          <ArrowRightIcon className="service-feature-card__arrow" size={18} color="#0A84A6" />
        </Link>
      </div>
    </article>
  );
}

function ServicesGrid({ intro, services }) {
  return (
    <section className="services-main-section">
      {intro && (
        <div className="services-header-intro">
          {intro.eyebrow && (
            <div className="services-eyebrow-wrapper">
              <span className="services-eyebrow-line" />
              <span className="services-eyebrow-text">{intro.eyebrow}</span>
              <span className="services-eyebrow-line" />
            </div>
          )}

          {intro.title && (
            <h2 className="services-intro-title">{intro.title}</h2>
          )}

          {intro.description && (
            <p className="services-intro-desc">{intro.description}</p>
          )}

          <div className="services-intro-divider" />
        </div>
      )}

      <div className="services-grid-wrapper">
        <div className="services-cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.id || service.btnLink} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesGrid);
