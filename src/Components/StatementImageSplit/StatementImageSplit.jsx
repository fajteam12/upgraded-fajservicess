import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import "./StatementImageSplit.css";

function StatementIcon({ name }) {
  const props = {
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false,
  };

  if (name === "target") {
    return (
      <svg {...props}>
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <circle
          cx="12"
          cy="12"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path
        d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2.7"
        stroke="currentColor"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m8.3 12.1 2.4 2.4 5-5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatementImageSplit({
  badge = "",
  title = "",
  highlightedTitle = "",
  watermark = "",
  icon = "eye",
  description = "",
  items = [],
  image = {},
  imageSide = "right",
  imageHeight = "clamp(460px, 43vw, 620px)",
  className = "",
}) {
  const [useFallback, setUseFallback] = useState(false);

  const cloudflareSrc = image.id
    ? getCloudflareImageUrl(image.id, "public")
    : "";

  const cloudflareSrcSet = image.id
    ? getCloudflareImageSrcSet(image.id)
    : undefined;

  const imageSrc = useFallback ? image.src : cloudflareSrc || image.src;

  const imageSrcSet = useFallback
    ? image.srcSet
    : cloudflareSrcSet || image.srcSet || undefined;

  const hasImage = Boolean(imageSrc);

  return (
    <section
      className={`statement-image-split statement-image-split--image-${imageSide} ${className}`.trim()}
      style={{ "--statement-image-height": imageHeight }}
    >
      <div className="container">
        <div className="statement-image-split__layout">
          <div className="statement-image-split__content">
            <ScrollSlide
              direction={imageSide === "right" ? "right" : "left"}
              delay={0.08}
            >
              <article className="statement-image-split__card">
                {watermark && (
                  <span
                    className="statement-image-split__watermark"
                    aria-hidden="true"
                  >
                    {watermark}
                  </span>
                )}

                <span
                  className="statement-image-split__card-glow"
                  aria-hidden="true"
                />

                <div className="statement-image-split__card-content">
                  <div className="statement-image-split__top">
                    <span
                      className="statement-image-split__icon"
                      aria-hidden="true"
                    >
                      <StatementIcon name={icon} />
                    </span>

                    {badge && (
                      <span className="statement-image-split__badge">
                        {badge}
                      </span>
                    )}
                  </div>

                  {(title || highlightedTitle) && (
                    <ScrollZoomText delay={0.16}>
                      <h2 className="statement-image-split__title">
                        {title && <span>{title}</span>}
                        {highlightedTitle && (
                          <span className="statement-image-split__title-highlight">
                            {highlightedTitle}
                          </span>
                        )}
                      </h2>
                    </ScrollZoomText>
                  )}

                  {description && (
                    <ScrollZoomText delay={0.24}>
                      <p className="statement-image-split__description">
                        {description}
                      </p>
                    </ScrollZoomText>
                  )}

                  {items.length > 0 && (
                    <div className="statement-image-split__items">
                      {items.map((item, index) => (
                        <ScrollSlide
                          direction="up"
                          delay={0.25 + index * 0.06}
                          distance={16}
                          key={item.id || item.title}
                        >
                          <div className="statement-image-split__item">
                            <span
                              className="statement-image-split__item-icon"
                              aria-hidden="true"
                            >
                              <CheckIcon />
                            </span>

                            <div>
                              <h3>{item.title}</h3>
                              {item.description && (
                                <p>{item.description}</p>
                              )}
                            </div>
                          </div>
                        </ScrollSlide>
                      ))}
                    </div>
                  )}
                </div>

                <span
                  className="statement-image-split__accent"
                  aria-hidden="true"
                >
                  <span />
                </span>
              </article>
            </ScrollSlide>
          </div>

          {hasImage && (
            <div className="statement-image-split__media">
              <img
                src={imageSrc}
                srcSet={imageSrcSet}
                sizes="(max-width: 991px) 100vw, 55vw"
                alt={image.alt || ""}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: image.position || "center" }}
                onError={() => {
                  if (!useFallback && image.src) {
                    setUseFallback(true);
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(StatementImageSplit);