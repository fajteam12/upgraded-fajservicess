import { memo } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";

const getImageData = (image = {}) => ({
  src: image.id
    ? getCloudflareImageUrl(image.id, "public")
    : image.src || "",
  srcSet: image.id
    ? getCloudflareImageSrcSet(image.id)
    : image.srcSet,
});

function FeatureDetailSection({ content }) {
  if (!content?.items?.length) return null;

  return (
    <section
      id={content.id}
      className="service-landing__section coverage-feature-section"
    >
      <div className="service-landing__container">
        <header className="coverage-ai-heading coverage-ai-heading--feature">
          <h2>{content.title}</h2>

          {content.description && (
            <p>{content.description}</p>
          )}
        </header>

        <div className="coverage-feature__stack">
          {content.items.map((item, index) => {
            const { src, srcSet } = getImageData(item.image);
            const reversed = index % 2 !== 0;

            return (
              <article
                key={`${item.title}-${index}`}
                className={`coverage-feature__card ${
                  reversed ? "is-reversed" : ""
                }`}
              >
                <div className="coverage-feature__content">
                  <div className="coverage-feature__content-inner">
                    <h3>{item.title}</h3>

                    {item.description && (
                      <p className="coverage-feature__description">
                        {item.description}
                      </p>
                    )}

                    {(item.detailTitle || item.detail) && (
                      <div className="coverage-feature__detail-card">
                        {item.detailTitle && (
                          <h4>{item.detailTitle}</h4>
                        )}

                        {item.detail && (
                          <p>{item.detail}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {src && (
                  <div className="coverage-feature__media">
                    <img
                      src={src}
                      srcSet={srcSet}
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      alt={item.image?.alt || item.title || ""}
                      width={item.image?.width}
                      height={item.image?.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(FeatureDetailSection);