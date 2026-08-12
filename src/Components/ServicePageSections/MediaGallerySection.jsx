import { memo, useState } from "react";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function GalleryImage({ image }) {
  const [cloudflareFailed, setCloudflareFailed] = useState(false);
  const cloudflareSrc = image.id
    ? getCloudflareImageUrl(image.id, "public")
    : "";
  const imageSrc = cloudflareSrc && !cloudflareFailed
    ? cloudflareSrc
    : image.src;

  if (!imageSrc) return null;

  return (
    <img
      src={imageSrc}
      srcSet={
        cloudflareSrc && !cloudflareFailed
          ? getCloudflareImageSrcSet(image.id)
          : undefined
      }
      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
      alt={image.alt || image.title || ""}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      onError={() => setCloudflareFailed(true)}
    />
  );
}

function MediaGallerySection({ content, tone = "white" }) {
  if (!content?.items?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`} id={content.id}>
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />
        <div className="service-landing__media-gallery">
          {content.items.map((item, index) => (
            <ScrollSlide
              direction="up"
              delay={(index % 3) * 0.06}
              key={item.title}
            >
              <figure className="service-landing__media-gallery-item">
                <GalleryImage image={item} />
                <figcaption>
                  <span>{item.eyebrow || content.itemEyebrow}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(MediaGallerySection);
