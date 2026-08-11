import { memo, useId, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./PageHero.css";

function PageHero({
  eyebrow = "",
  title = "",
  description = "",
  backgroundImage = null,
  overlay = 0.78,
  minHeight = "clamp(320px, 34vw, 420px)",
  className = "",
}) {
  const [failedSources, setFailedSources] = useState(() => new Set());
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

  const fallbackSrc = backgroundImage?.src || "";
  const canUseCloudflare =
    Boolean(cloudflareSrc) && !failedSources.has(cloudflareSrc);
  const canUseFallback =
    Boolean(fallbackSrc) && !failedSources.has(fallbackSrc);
  const imageSrc = canUseCloudflare
    ? cloudflareSrc
    : canUseFallback
      ? fallbackSrc
      : "";

  const imageSrcSet = canUseCloudflare
    ? cloudflareSrcSet || backgroundImage?.srcSet || undefined
    : backgroundImage?.srcSet || undefined;

  return (
    <section
      className={`faj-page-hero ${className}`.trim()}
      aria-labelledby={hasTitle ? titleId : undefined}
      style={{
        "--page-hero-overlay": overlay,
        "--page-hero-min-height": minHeight,
     }}
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
              setFailedSources((currentSources) => {
                const nextSources = new Set(currentSources);
                nextSources.add(imageSrc);
                return nextSources;
              });
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
