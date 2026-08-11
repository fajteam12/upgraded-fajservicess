import { memo, useMemo } from "react";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import WhatsAppIcon from "./WhatsAppIcon";

function EmbeddedVideoSection({ content, tone = "dark" }) {
  const videoId = content?.videoId;
  const parametersConfig = content?.parameters;
  const isTechnical = content?.variant === "technical";
  const isInteractive = content?.blockInteraction === false;
  const variantClass = content?.variant ? `is-${content.variant}` : "";

  const videoSrc = useMemo(() => {
    if (!videoId) return "";

    const parameters = new URLSearchParams(parametersConfig || {
      autoplay: "1",
      mute: "1",
      controls: "0",
      modestbranding: "1",
      rel: "0",
      showinfo: "0",
      loop: "1",
      playlist: videoId,
      playsinline: "1",
      cc_load_policy: "0",
    });

    return `https://www.youtube.com/embed/${videoId}?${parameters.toString()}`;
  }, [parametersConfig, videoId]);

  if (!videoSrc) return null;

  return (
    <section
      className={`service-landing__section is-${tone} service-landing__video`}
      id={content.id}
    >
      <div className="service-landing__narrow">
        <SectionHeader content={content} light={tone === "dark"} />

        <ScrollSlide direction="up">
          <div
            className={`service-landing__video-shell ${
              variantClass
            } ${isInteractive ? "is-interactive" : ""}`}
          >
            {isTechnical && (
              <>
                <span className="service-landing__viewfinder is-top-left" aria-hidden="true" />
                <span className="service-landing__viewfinder is-top-right" aria-hidden="true" />
                <span className="service-landing__viewfinder is-bottom-left" aria-hidden="true" />
                <span className="service-landing__viewfinder is-bottom-right" aria-hidden="true" />
                <div className="service-landing__video-meta" aria-hidden="true">
                  <span>
                    <i />
                    {content.frameMeta?.status}
                  </span>
                  <span>{content.frameMeta?.protocol}</span>
                </div>
              </>
            )}

            <div className="service-landing__video-frame">
              <iframe
                src={videoSrc}
                title={content.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={content.allowFullScreen}
              />
              {!isInteractive && (
                <div className="service-landing__video-overlay" aria-hidden="true" />
              )}
            </div>
          </div>
        </ScrollSlide>

        {content.description && (
          <p className="service-landing__video-description">
            {content.description}
          </p>
        )}

        {content.action?.href && (
          <div className="service-landing__center-action">
            <a
              className="service-landing__button is-whatsapp"
              href={content.action.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="service-landing__button-icon" />
              {content.action.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(EmbeddedVideoSection);
