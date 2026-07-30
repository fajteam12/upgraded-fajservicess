import React, { memo, useId } from "react";
import { Link } from "react-router-dom";

import { aboutCompanyFeatures } from "./aboutCompanyData";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";

import {
  ScrollSlide,
  ScrollZoomText,
  ShutterImage,
} from "../Animations/ScrollAnimation";

import "./AboutCompany.css";

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
  switch (name) {
    case "clock":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3.2 2" />
        </svg>
      );

    case "repair":
      return (
        <svg {...iconProps}>
          <path d="M14.2 6.7a4.3 4.3 0 0 0-5.6-5.2l2.5 2.5-2.7 2.7-2.5-2.5a4.3 4.3 0 0 0 5.2 5.6l6.8 6.8a2.2 2.2 0 0 1-3.1 3.1L8 12.9" />
        </svg>
      );

    case "shield":
      return (
        <svg {...iconProps}>
          <path d="M12 3 19 6v5.2c0 4.3-2.8 7.2-7 9.8-4.2-2.6-7-5.5-7-9.8V6l7-3Z" />
          <path d="m8.8 12 2.1 2.1 4.4-4.6" />
        </svg>
      );

    case "check":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.4 12 2.3 2.3 5-5.2" />
        </svg>
      );

    case "expert":
      return (
        <svg {...iconProps}>
          <circle cx="8.8" cy="8" r="3" />
          <path d="M3.8 19c.5-3.3 2.1-5 5-5 2.6 0 4.2 1.4 4.8 4" />
          <path d="m14.8 11.2 1.7 1.7 3.5-3.7" />
        </svg>
      );

    case "phone":
      return (
        <svg {...iconProps}>
          <path d="M8 4.3 10 8 8.5 9.5c1.1 2.4 2.7 4 5.1 5.1L15.1 13l3.7 2-.4 3.1c-.1.9-.8 1.5-1.7 1.5C9.8 19.6 4.4 14.2 4.4 7.3c0-.9.6-1.6 1.5-1.7L8 4.3Z" />
        </svg>
      );

    default:
      return null;
  }
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
    focusable="false"
  >
    <path d="M3.5 10h12" />
    <path d="m11.5 6 4 4-4 4" />
  </svg>
);

const AboutCompany = ({
  eyebrow = "About Our Company",
  title = "Speedy Services.",
  highlightedTitle = "Quality Results.",
  description = "We are committed to delivering professional repair, servicing, and maintenance solutions with dependable workmanship and exceptional customer care.",
  features = aboutCompanyFeatures,

  imageId = "new-homepage-design-images/home-speedy-services",
  imageSrc,
  imageSrcSet,
  imageSizes = "(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 46vw",
  imageAlt = "FAJ Technical Services technicians providing professional maintenance and repair services in Dubai",
  imageWidth = 1200,
  imageHeight = 1500,
  imagePosition = "center center",

  experienceValue = "14+",
  experienceTitle = "Years",
  experienceLabel = "Experience",

  ctaLabel = "Discover More",
  ctaTo = "/who-we-are/",

  className = "",
}) => {
  const headingId = useId();

  const resolvedImageSrc =
    getCloudflareImageUrl(imageId, "public") || imageSrc;

  const resolvedImageSrcSet =
    getCloudflareImageSrcSet(imageId) ||
    imageSrcSet ||
    undefined;

  const sectionClasses = ["about-company", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} aria-labelledby={headingId}>
      <div
        className="about-company__decoration about-company__decoration--top"
        aria-hidden="true"
      />

      <div
        className="about-company__decoration about-company__decoration--bottom"
        aria-hidden="true"
      />

      <div className="about-company__container">
        <div className="about-company__content">
          <ScrollSlide direction="up" delay={0.05}>
            <div className="about-company__eyebrow">
              <span aria-hidden="true" />
              <p>{eyebrow}</p>
            </div>
          </ScrollSlide>

          <ScrollZoomText delay={0.12}>
            <h2 id={headingId} className="about-company__title">
              <span>{title}</span>

              <span className="about-company__title-highlight">
                {highlightedTitle}
              </span>
            </h2>
          </ScrollZoomText>

          <ScrollSlide direction="up" delay={0.2}>
            <div className="about-company__description">
              <p>{description}</p>
            </div>
          </ScrollSlide>

          <ul className="about-company__features">
            {features.map((feature, index) => (
              <ScrollSlide
                as="li"
                className="about-company__feature"
                direction="up"
                delay={0.28 + index * 0.08}
                key={feature.id || feature.title}
              >
                <span className="about-company__feature-icon">
                  <FeatureIcon name={feature.icon} />
                </span>

                <span className="about-company__feature-content">
                  <strong>{feature.title}</strong>
                  <small>{feature.description}</small>
                </span>
              </ScrollSlide>
            ))}
          </ul>

          <ScrollSlide direction="up" delay={0.62}>
            <Link
              className="about-company__cta"
              to={ctaTo}
              aria-label={`${ctaLabel} about FAJ Technical Services`}
            >
              <span>{ctaLabel}</span>
              <ArrowIcon />
            </Link>
          </ScrollSlide>
        </div>

        <ScrollSlide
          direction="left"
          delay={0.16}
          className="about-company__media-reveal"
        >
          <div
            className="about-company__media"
            style={{
              "--about-company-image-position": imagePosition,
            }}
          >
            <ShutterImage
              className="about-company__image-shutter"
              imgClassName="about-company__image"
              src={resolvedImageSrc}
              srcSet={resolvedImageSrcSet}
              sizes={resolvedImageSrcSet ? imageSizes : undefined}
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
              decoding="async"
              alt={imageAlt}
              shutterColor="#003048"
            />

            <div
              className="about-company__image-overlay"
              aria-hidden="true"
            />

            <div
              className="about-company__experience"
              aria-label={`${experienceValue} years of experience`}
            >
              <span className="about-company__experience-value">
                {experienceValue}
              </span>

              <span className="about-company__experience-copy">
                <strong>{experienceTitle}</strong>
                <small>{experienceLabel}</small>
              </span>
            </div>
          </div>
        </ScrollSlide>
      </div>
    </section>
  );
};

export default memo(AboutCompany);