import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";

function ProcessCardsSection({ content }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [failedSources, setFailedSources] = useState(() => new Set());

  if (!content?.items?.length) return null;

  const hasActive = activeIndex !== null;

  return (
    <section
      id={content.id}
      className="service-landing__section coverage-process-section"
    >
      <div className="service-landing__container">
        <header className="coverage-ai-heading">
          <h2>{content.title}</h2>

          {content.description && (
            <p>{content.description}</p>
          )}
        </header>

        <div
          className={`coverage-process__cards ${
            hasActive ? "has-active" : ""
          }`}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {content.items.map((item, index) => {
            const isActive = activeIndex === index;

            const image =
              item.image ||
              content.image ||
              {};

            const cloudflareSrc = image.id
              ? getCloudflareImageUrl(
                  image.id,
                  "public"
                )
              : "";

            const cloudflareSrcSet = image.id
              ? getCloudflareImageSrcSet(
                  image.id
                )
              : undefined;

            const fallbackSrc =
              image.src || "";

            const canUseCloudflare =
              Boolean(cloudflareSrc) &&
              !failedSources.has(
                cloudflareSrc
              );

            const canUseFallback =
              Boolean(fallbackSrc) &&
              !failedSources.has(
                fallbackSrc
              );

            const imageSrc =
              canUseCloudflare
                ? cloudflareSrc
                : canUseFallback
                  ? fallbackSrc
                  : "";

            const imageSrcSet =
              canUseCloudflare
                ? cloudflareSrcSet ||
                  image.srcSet ||
                  undefined
                : image.srcSet ||
                  undefined;

            const stepNumber = String(
              index + 1
            ).padStart(2, "0");

            return (
              <button
                key={`${item.title}-${index}`}
                type="button"
                className={`coverage-process__card ${
                  isActive
                    ? "is-active"
                    : ""
                }`}
                onMouseEnter={() =>
                  setActiveIndex(index)
                }
                onFocus={() =>
                  setActiveIndex(index)
                }
                onClick={() =>
                  setActiveIndex(
                    (current) =>
                      current === index
                        ? null
                        : index
                  )
                }
                aria-expanded={isActive}
              >
                {imageSrc && (
                  <img
                    className="coverage-process__image"
                    src={imageSrc}
                    srcSet={imageSrcSet}
                    sizes="(max-width: 1023px) 100vw, 30vw"
                    alt={
                      image.alt ||
                      item.title ||
                      ""
                    }
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    onError={() => {
                      setFailedSources(
                        (currentSources) => {
                          const nextSources =
                            new Set(
                              currentSources
                            );

                          nextSources.add(
                            imageSrc
                          );

                          return nextSources;
                        }
                      );
                    }}
                  />
                )}

                <span
                  className="coverage-process__overlay"
                  aria-hidden="true"
                />

                <span className="coverage-process__step">
                  {stepNumber}
                </span>

                <span className="coverage-process__content">
                  <span className="coverage-process__title">
                    {item.title}
                  </span>

                  <span className="coverage-process__description">
                    {
                      item.description
                    }
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(ProcessCardsSection);