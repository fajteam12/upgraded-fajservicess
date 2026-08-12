import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";

function SplitMediaSection({ content, tone = "white" }) {
  const [failedSources, setFailedSources] = useState(() => new Set());

  if (!content) return null;

  const image = content.image || {};
  const cloudflareSrc = image.id
    ? getCloudflareImageUrl(image.id, "public")
    : "";
  const cloudflareSrcSet = image.id
    ? getCloudflareImageSrcSet(image.id)
    : undefined;
  const fallbackSrc = image.src || "";
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
    ? cloudflareSrcSet || image.srcSet || undefined
    : image.srcSet || undefined;
  const imageSide = content.imageSide === "left" ? "left" : "right";

  return (
    <section
      className={`service-landing__section service-landing__media-section is-${tone}`}
      id={content.id}
    >
      <div
        className={`service-landing__media-split is-image-${imageSide} ${
          imageSrc ? "has-media" : "is-text-only"
        }`}
      >
        <div className="service-landing__media-copy">
          <SectionHeader content={content} light={tone === "dark"} />

          {content.paragraphs?.map((paragraph) => (
            <p className="service-landing__media-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}

          {content.notice && (
            <div className="service-landing__media-notice">
              <ServiceIcon name={content.notice.icon || "check"} />
              <strong>{content.notice.text}</strong>
            </div>
          )}

          {content.items?.length > 0 && (
            <div
              className="service-landing__media-items"
              style={{ "--service-media-columns": content.columns || 2 }}
            >
              {content.items.map((item, index) => (
                <ScrollSlide
                  direction="up"
                  delay={(index % 4) * 0.05}
                  key={item.title}
                >
                  <article>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </ScrollSlide>
              ))}
            </div>
          )}
        </div>

        {imageSrc && (
          <ScrollSlide
            className="service-landing__media-animation"
            direction={imageSide === "left" ? "left" : "right"}
          >
            <div className="service-landing__media-image">
              <img
                src={imageSrc}
                srcSet={imageSrcSet}
                sizes="(max-width: 900px) 100vw, 46vw"
                alt={image.alt || ""}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: image.position || "center" }}
                onError={() => {
                  setFailedSources((currentSources) => {
                    const nextSources = new Set(currentSources);
                    nextSources.add(imageSrc);
                    return nextSources;
                  });
                }}
              />
            </div>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(SplitMediaSection);
