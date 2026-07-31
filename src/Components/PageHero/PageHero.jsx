import React, { memo, useId, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./PageHero.css";

const defaultBackgroundImage = {
  id: "services-page-hero",
  src: "/img/services-page-hero.webp",
  alt: "",
  width: 1920,
  height: 700,
};

function PageHero({
  eyebrow = "",
  title = "",
  description = "",
  backgroundImage = defaultBackgroundImage,
  overlay = 0.78,
  className = "",
}) {
  const [useFallback, setUseFallback] = useState(false);
  const generatedId = useId();
  const titleId = `page-hero-title-${generatedId.replace(/:/g, "")}`;

  const hasEyebrow = Boolean(eyebrow?.trim());
  const hasTitle = Boolean(title?.trim());
  const hasDescription = Boolean(description?.trim());

  const cloudflareSrc = backgroundImage?.id
    ? getCloudflareImageUrl(backgroundImage.id, "public")
    : "";

  const cloudflareSrcSet = backgroundImage?.id
    ? getCloudflareImageSrcSet(backgroundImage.id)
    : undefined;

  const imageSrc = useFallback
    ? backgroundImage?.src
    : cloudflareSrc || backgroundImage?.src;

  const imageSrcSet = useFallback
    ? backgroundImage?.srcSet
    : cloudflareSrcSet || backgroundImage?.srcSet || undefined;

  return (
    <section
      className={`faj-page-hero ${className}`.trim()}
      aria-labelledby={hasTitle ? titleId : undefined}
      style={{ "--page-hero-overlay": overlay }}
    >
      <div className="faj-page-hero__media" aria-hidden="true">
        {imageSrc && (
          <img
            src={imageSrc}
            srcSet={imageSrcSet}
            sizes="100vw"
            alt={backgroundImage?.alt || ""}
            width={backgroundImage?.width}
            height={backgroundImage?.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={() => {
              if (!useFallback && backgroundImage?.src) {
                setUseFallback(true);
              }
            }}
          />
        )}
      </div>

      <div className="faj-page-hero__overlay" aria-hidden="true" />

      <div className="faj-page-hero__container">
        <div className="faj-page-hero__content">
          {hasEyebrow && (
            <p className="faj-page-hero__eyebrow">{eyebrow}</p>
          )}

          {hasTitle && (
            <h1 id={titleId} className="faj-page-hero__title">
              {title}
            </h1>
          )}

          {hasDescription && (
            <p className="faj-page-hero__description">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(PageHero);