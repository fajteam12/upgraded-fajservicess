import React from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import {
  ScrollSlide,
  ScrollZoomText,
  ShutterImage,
} from "../Animations/ScrollAnimation";
import {
  premiumServices,
  premiumServicesUrgentCard,
} from "./premiumServicesData";
import "./PremiumServices.css";

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.6 3.5 10.3 7a1.5 1.5 0 0 1-.35 1.75l-1.2 1.1a14.2 14.2 0 0 0 5.4 5.4l1.1-1.2A1.5 1.5 0 0 1 17 13.7l3.5 1.7a1.5 1.5 0 0 1 .82 1.55v2.1a2.25 2.25 0 0 1-2.25 2.25C10.03 21.3 2.7 13.97 2.7 4.93A2.25 2.25 0 0 1 4.95 2.7h2.1a1.5 1.5 0 0 1 1.55.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ name }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  if (name === "fan") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 10c-2.6-1.8-3.4-4-2.2-5.5 1.2-1.4 4.2-.5 4.8 1.5.4 1.3-.4 2.7-2.6 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 12c1.8-2.6 4-3.4 5.5-2.2 1.4 1.2.5 4.2-1.5 4.8-1.3.4-2.7-.4-4-2.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 14c2.6 1.8 3.4 4 2.2 5.5-1.2 1.4-4.2.5-4.8-1.5-.4-1.3.4-2.7 2.6-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 12c-1.8 2.6-4 3.4-5.5 2.2C3.1 13 4 10 6 9.4c1.3-.4 2.7.4 4 2.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "kitchen") {
    return (
      <svg {...commonProps}>
        <path d="M5 4v6m3-6v6M5 7h3m-1.5 3v10M16 4c2.2 2 2.2 5.5 0 7.5V20m0-8.5h3V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "refrigeration") {
    return (
      <svg {...commonProps}>
        <rect x="6" y="2.5" width="12" height="19" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 10h12M9 6.2v1.5m0 5.2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "laundry") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="2.5" width="16" height="19" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="13.5" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.5 6.5h.01M11 6.5h5.5M9 14c1.8-1.5 4.2-1.5 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="m14.8 5.2 4 4M13.4 6.6l4 4M4 20l6.6-6.6m2.8-6.8 2.1-2.1a3 3 0 0 1 4.2 4.2l-2.1 2.1M10.6 13.4 6.8 9.6 4 12.4 7.6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceCard({ service, delay = 0 }) {
  const [useFallback, setUseFallback] = React.useState(false);

  const cloudflareSrc = service.image.id
    ? getCloudflareImageUrl(service.image.id, "public")
    : "";

  const cloudflareSrcSet = service.image.id
    ? getCloudflareImageSrcSet(service.image.id)
    : undefined;

  const imageSrc = useFallback
    ? service.image.src
    : cloudflareSrc || service.image.src;

  const imageSrcSet = useFallback
    ? service.image.srcSet
    : cloudflareSrcSet || service.image.srcSet || undefined;

  return (
    <ScrollSlide
      as="article"
      className="faj-premium-services__card"
      direction="up"
      delay={delay}
    >
      <div className="faj-premium-services__media">
        <ShutterImage
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes="(min-width: 1100px) 390px, (min-width: 700px) calc(50vw - 44px), calc(100vw - 32px)"
          width={1024}
          height={576}
          loading="lazy"
          decoding="async"
          alt={service.image.alt}
          className="faj-premium-services__image-shutter"
          imgClassName="faj-premium-services__image"
          shutterColor="#003048"
          onError={() => {
            if (!useFallback && service.image.src) {
              setUseFallback(true);
            }
          }}
        />

        <span className="faj-premium-services__icon">
          <ServiceIcon name={service.icon} />
        </span>
      </div>

      <div className="faj-premium-services__card-content">
        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>

        <Link to={service.path} className="faj-premium-services__card-link">
          Explore Service
          <ArrowIcon />
        </Link>
      </div>
    </ScrollSlide>
  );
}

function UrgentServiceCard({ content }) {
  return (
    <ScrollSlide
      as="aside"
      className="faj-premium-services__urgent"
      direction="up"
      delay={0.48}
    >
      <span
        className="faj-premium-services__corner faj-premium-services__corner--top"
        aria-hidden="true"
      />
      <span
        className="faj-premium-services__corner faj-premium-services__corner--bottom"
        aria-hidden="true"
      />

      <div className="faj-premium-services__urgent-content">
        <div>
          <p className="faj-premium-services__urgent-eyebrow">
            <span aria-hidden="true" />
            {content.eyebrow}
          </p>

          <a
            className="faj-premium-services__phone-icon"
            href={content.phone.href}
            aria-label={content.phone.label}
          >
            <PhoneIcon />
          </a>

          <h3>{content.title}</h3>

          <p className="faj-premium-services__urgent-description">
            {content.description}
          </p>
        </div>

        <Link
          className="faj-premium-services__urgent-action"
          to={content.action.path}
        >
          {content.action.label}
          <ArrowIcon />
        </Link>
      </div>
    </ScrollSlide>
  );
}

function PremiumServices({
  services = premiumServices,
  urgentCard = premiumServicesUrgentCard,
  eyebrow = "Precision Maintenance & Repair",
  title = "Our Premium Services",
  description = "Delivering top-tier engineering solutions, fast diagnostics, and uncompromising restoration for cooling, HVAC, laundry, and kitchen appliances across Dubai.",
  sectionId = "premium-services",
}) {
  return (
    <section
      className="faj-premium-services"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="faj-premium-services__container">
        <header className="faj-premium-services__heading">
          <ScrollSlide direction="up" delay={0.05}>
            <p className="faj-premium-services__eyebrow">
              <span aria-hidden="true" />
              {eyebrow}
            </p>
          </ScrollSlide>

          <ScrollZoomText delay={0.12}>
            <h2 id={`${sectionId}-title`}>{title}</h2>
          </ScrollZoomText>

          <ScrollSlide direction="up" delay={0.2}>
            <p className="faj-premium-services__intro">
              {description}
            </p>
          </ScrollSlide>
        </header>

        <div className="faj-premium-services__grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={0.26 + index * 0.08}
            />
          ))}

          {urgentCard && <UrgentServiceCard content={urgentCard} />}
        </div>
      </div>
    </section>
  );
}

export default React.memo(PremiumServices);