import React, { memo, useId, useState } from "react";
import { Link } from "react-router-dom";

import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";

import {
  ScrollSlide,
  ScrollZoomText,
  ShutterImage,
  ShutterVideo,
} from "../Animations/ScrollAnimation";

import "./ServiceContractCard.css";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const FeatureIcon = ({ name }) => {
  const icons = {
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16" />
        <path d="m8.5 14 2 2 4.5-4.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.2 2" />
      </>
    ),
    inspection: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4 4" />
        <path d="m8.5 10.5 1.4 1.4 2.8-3" />
      </>
    ),
    document: (
      <>
        <path d="M6 3.5h8l4 4v13H6z" />
        <path d="M14 3.5v4h4M9 12h6M9 16h6" />
      </>
    ),
    temperature: (
      <>
        <path d="M10 5a2 2 0 0 1 4 0v8.2a4.5 4.5 0 1 1-4 0Z" />
        <path d="M12 7v8" />
      </>
    ),
    snowflake: (
      <>
        <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
        <path d="m9.5 5.5 2.5 2 2.5-2M9.5 18.5l2.5-2 2.5 2" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19 13.5v-3l-2-.7a7 7 0 0 0-.7-1.7l.9-1.9-2.1-2.1-1.9.9a7 7 0 0 0-1.7-.7L10.5 2h-3l-.7 2a7 7 0 0 0-1.7.7l-1.9-.9-2.1 2.1.9 1.9a7 7 0 0 0-.7 1.7L0 10.5v3l2 .7c.2.6.4 1.2.7 1.7l-.9 1.9 2.1 2.1 1.9-.9c.5.3 1.1.5 1.7.7l.7 2h3l.7-2c.6-.2 1.2-.4 1.7-.7l1.9.9 2.1-2.1-.9-1.9c.3-.5.5-1.1.7-1.7Z" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 12h3v6H5a1 1 0 0 1-1-1ZM20 12h-3v6h2a1 1 0 0 0 1-1Z" />
        <path d="M17 18c-.8 1.6-2.4 2.5-5 2.5" />
      </>
    ),
    flame: (
      <path d="M13.5 3.5c.5 3-1.6 4.2-2.8 5.7-1 1.2-1.4 2.5-.7 4 .4-1.4 1.4-2.3 2.5-3.1 1.8 1.6 3.5 3.3 3.5 5.8a4.2 4.2 0 0 1-8.4 0c0-3.5 2.3-6.5 5.9-12.4Z" />
    ),
    electric: <path d="m13.5 2.5-7 11h5l-1 8 7-11h-5Z" />,
    clean: (
      <>
        <path d="m14 4 6 6-9.5 9.5H4.5V13.5Z" />
        <path d="m11.5 6.5 6 6M4 20h16" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5.2c0 4.3-2.8 7.2-7 9.8-4.2-2.6-7-5.5-7-9.8V6Z" />
        <path d="m8.8 12 2.1 2.1 4.4-4.6" />
      </>
    ),
    coffee: (
      <>
        <path d="M5 7h11v7a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z" />
        <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v2M12 3.5v2" />
      </>
    ),
    gauge: (
      <>
        <path d="M5 18a8 8 0 1 1 14 0" />
        <path d="m12 13 4-4" />
        <circle cx="12" cy="13" r="1.2" />
        <path d="M7.5 15.5h9" />
      </>
    ),
  };

  return <svg {...iconProps}>{icons[name] || null}</svg>;
};

const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.5 10h12" />
    <path d="m11.5 6 4 4-4 4" />
  </svg>
);

const ServiceContractCard = ({
  number,
  showSectionHeading = false,
  sectionEyebrow = "Service Contracts",
  sectionTitle = "Annual Maintenance",
  sectionDescription,
  eyebrow,
  title,
  description,
  features = [],
  imageId,
  imageSrc,
  videoSrc,
  imageSrcSet,
  imageSizes = "(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 45vw, 40vw",
  imageAlt,
  imageWidth = 1200,
  imageHeight = 1000,
  imagePosition = "center center",
  imageSide = "right",
  contentWidth = 60,
  ctaLabel = "View Plans & Pricing",
  ctaTo = "/contact-us/",
  spacing = "middle",
  className = "",
}) => {
  const headingId = useId();
  const [useFallback, setUseFallback] = useState(false);

  const safeContentWidth = Math.min(
    70,
    Math.max(50, Number(contentWidth) || 60)
  );

  const imageColumnWidth = 100 - safeContentWidth;

  const resolvedImageSrc = useFallback
    ? imageSrc
    : getCloudflareImageUrl(imageId, "public") || imageSrc;

  const resolvedImageSrcSet = useFallback
    ? imageSrcSet || undefined
    : getCloudflareImageSrcSet(imageId) ||
      imageSrcSet ||
      undefined;

  const sectionClasses = [
    "service-contract-card",
    `service-contract-card--${spacing}`,
    `service-contract-card--image-${imageSide}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={sectionClasses}
      aria-labelledby={headingId}
      style={{
        "--service-contract-content-width": `${safeContentWidth}%`,
        "--service-contract-image-width": `${imageColumnWidth}%`,
      }}
    >
      <div className="service-contract-card__container">
        {showSectionHeading && (
          <header className="service-contract-card__section-header">
            <ScrollSlide direction="up" delay={0.05}>
              <div className="service-contract-card__section-eyebrow">
                <span aria-hidden="true" />
                <p>{sectionEyebrow}</p>
              </div>
            </ScrollSlide>

            <ScrollZoomText delay={0.12}>
              <h2 className="service-contract-card__section-title">
                {sectionTitle}
              </h2>
            </ScrollZoomText>

            {sectionDescription && (
              <ScrollSlide direction="up" delay={0.2}>
                <p className="service-contract-card__section-description">
                  {sectionDescription}
                </p>
              </ScrollSlide>
            )}
          </header>
        )}

        <article className="service-contract-card__panel">
          <div className="service-contract-card__content">
            <ScrollSlide direction="right" delay={0.08}>
              <span
                className="service-contract-card__number"
                aria-hidden="true"
              >
                {number}
              </span>
            </ScrollSlide>

            {eyebrow && (
              <ScrollSlide
                as="p"
                className="service-contract-card__eyebrow"
                direction="up"
                delay={0.14}
              >
                {eyebrow}
              </ScrollSlide>
            )}

            <ScrollZoomText delay={0.18}>
              <h3 id={headingId} className="service-contract-card__title">
                <span className="service-contract-card__title-icon">
                  <FeatureIcon name="shield" />
                </span>
                <span>{title}</span>
              </h3>
            </ScrollZoomText>

            <ScrollSlide direction="up" delay={0.20}>
              <p className="service-contract-card__description">
                {description}
              </p>
            </ScrollSlide>

            <ul className="service-contract-card__features">
              {features.map((feature, index) => (
                <ScrollSlide
                  as="li"
                  className="service-contract-card__feature"
                  direction="up"
                  delay={0.25 + index * 0.07}
                  key={feature.id || feature.title}
                >
                  <span className="service-contract-card__feature-icon">
                    <FeatureIcon name={feature.icon} />
                  </span>

                  <span className="service-contract-card__feature-copy">
                    <strong>{feature.title}</strong>
                    {feature.description && (
                      <small>{feature.description}</small>
                    )}
                  </span>
                </ScrollSlide>
              ))}
            </ul>

            <ScrollSlide direction="up" delay={0.45}>
              <Link className="service-contract-card__cta" to={ctaTo}>
                <span>{ctaLabel}</span>
                <ArrowIcon />
              </Link>
            </ScrollSlide>
          </div>

          <ScrollSlide
            direction={imageSide === "left" ? "right" : "left"}
            delay={0.18}
            className="service-contract-card__media-reveal"
          >
            <div
              className="service-contract-card__media"
              style={{
                "--service-contract-image-position": imagePosition,
              }}
            >
              <ShutterVideo
              className="service-contract-card__image-shutter"
              videoClassName="service-contract-card__image"
              src={videoSrc}
              poster={resolvedImageSrc}
              width={imageWidth}
              height={imageHeight}
              shutterColor="#003048"
            />

              <div
                className="service-contract-card__image-overlay"
                aria-hidden="true"
              />
            </div>
          </ScrollSlide>
        </article>
      </div>
    </section>
  );
};

export default memo(ServiceContractCard);