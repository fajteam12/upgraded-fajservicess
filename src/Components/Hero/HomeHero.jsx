import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./HomeHero.css";

const defaultTitleLines = [
  { text: "Reliable AC, Appliance &" },
  { text: "Commercial Equipment", accent: true },
  { text: "Services in Dubai" },
];

const defaultFeatures = [
  "Domestic & Commercial Repair",
  "AC, Kitchen & Laundry Services",
  "Same-Day Expert Support",
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.36 1.78.7 2.61a2 2 0 0 1-.45 2.11L8.09 9.71a16 16 0 0 0 6.2 6.2l1.27-1.27a2 2 0 0 0 2.11-.45c.83.34 1.71.58 2.61.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeHero({
  eyebrow = "Trusted Technical Services Since 2010",
  titleLines = defaultTitleLines,
  description = "FAJ Technical Services L.L.C provides professional repair, installation and maintenance solutions for homes and commercial facilities across Dubai.",
  features = defaultFeatures,
  image = {
    id: "new-homepage-design-images/hero-image-desktop",
    src: "/img/new-homepage-design-images/hero-image-desktop.webp",
    alt: "FAJ Technical Services technician in Dubai",
    width: 1600,
    height: 900,
  },
  primaryAction = {
    label: "Book a Service Today",
    to: "/contact-us/",
  },
  secondaryAction = {
    label: "Call 24/7 Hotline",
    href: "tel:+971507464712",
  },
}) {
  const [useFallback, setUseFallback] = useState(false);

  const cloudflareSrc = image.id
    ? getCloudflareImageUrl(image.id, "public")
    : "";

  const cloudflareSrcSet = image.id
    ? getCloudflareImageSrcSet(image.id)
    : undefined;

  const imageSrc = useFallback
    ? image.src
    : cloudflareSrc || image.src;

  const imageSrcSet = useFallback
    ? image.srcSet
    : cloudflareSrcSet || image.srcSet || undefined;

  return (
    <section className="faj-home-hero" aria-labelledby="faj-home-hero-title">
      <div className="faj-home-hero__media">
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes="100vw"
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={() => {
            if (!useFallback && image.src) {
              setUseFallback(true);
            }
          }}
        />
      </div>

      <div className="faj-home-hero__container">
        <div className="faj-home-hero__content">
          <p className="faj-home-hero__eyebrow">
            <span aria-hidden="true" />
            {eyebrow}
          </p>

          <h1 id="faj-home-hero-title" className="faj-home-hero__title">
            {titleLines.map((line) => (
              <span
                key={line.text}
                className={
                  line.accent
                    ? "faj-home-hero__title-accent"
                    : undefined
                }
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="faj-home-hero__description">{description}</p>

          <ul className="faj-home-hero__features" aria-label="Service benefits">
            {features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="faj-home-hero__actions">
            {primaryAction && (
              <Link
                className="faj-home-hero__primary-action"
                to={primaryAction.to}
              >
                {primaryAction.label}
                <ArrowIcon />
              </Link>
            )}

            {secondaryAction && (
              <a
                className="faj-home-hero__secondary-action"
                href={secondaryAction.href}
              >
                <PhoneIcon />
                {secondaryAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HomeHero);