import { Fragment, memo, useMemo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import { ScrollSlide, ScrollZoomText } from "../Animations/ScrollAnimation";
import WhatsAppIcon from "./WhatsAppIcon";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";


function RichText({ value, as: Tag = "p", className }) {
  if (!value) return null;

  if (typeof value === "string") {
    return <Tag className={className}>{value}</Tag>;
  }

  if (!value.parts?.length) return null;

  return (
    <Tag className={className}>
      {value.parts.map((part, index) => {
        if (typeof part === "string") {
          return <Fragment key={index}>{part}</Fragment>;
        }

        if (!part?.text) return null;

        const elContent = part.strong ? (
          <strong>{part.text}</strong>
        ) : (
          part.text
        );

        if (!part.href) {
          return <Fragment key={`${part.text}-${index}`}>{elContent}</Fragment>;
        }

        if (part.external) {
          return (
            <a
              key={`${part.text}-${index}`}
              className="service-landing__inline-link"
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {elContent}
            </a>
          );
        }

        return (
          <Link
            key={`${part.text}-${index}`}
            className="service-landing__inline-link"
            to={part.href}
          >
            {elContent}
          </Link>
        );
      })}
    </Tag>
  );
}

function EmbeddedVideoSection({ content, tone = "dark", showCta, cta, contact, videoSide }) {
  const hasExplicitShowCta = typeof showCta === "boolean";
  const isCtaEnabled = hasExplicitShowCta
    ? showCta
    : Boolean(
        content?.showCta !== undefined
          ? content.showCta
          : (content?.cta || cta)
      );

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const hasContentCta = Boolean(
      typeof content?.cta === "object" && content?.cta
    );
    const hasExplicitCta = Boolean(
      (typeof cta === "object" && cta) || hasContentCta
    );

    const ctaConfig =
      (typeof cta === "object" && cta) ||
      (hasContentCta && content.cta) ||
      {};

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      return "";
    };

    if ("phone" in ctaConfig) {
      phoneUrl = getCleanUrl(ctaConfig.phone);
    } else if ("phone" in content) {
      phoneUrl = getCleanUrl(content.phone);
    } else if (!hasExplicitCta && contact?.phone) {
      phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
    }

    if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
      phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
    }

    if ("whatsapp" in ctaConfig) {
      whatsappUrl = getCleanUrl(ctaConfig.whatsapp);
    } else if ("whatsapp" in content) {
      whatsappUrl = getCleanUrl(content.whatsapp);
    } else if (!hasExplicitCta && contact?.whatsapp) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${String(contact.whatsapp).replace(/[^0-9]/g, "")}&text=Hello`;
    }

    if (whatsappUrl && !whatsappUrl.startsWith("http")) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${whatsappUrl.replace(/[^0-9]/g, "")}&text=Hello`;
    }
  }

  const hasPhone = Boolean(phoneUrl);
  const hasWhatsapp = Boolean(whatsappUrl);
  const showAnyCta = isCtaEnabled && (hasPhone || hasWhatsapp);

  const videoId = content?.videoId;
  const parametersConfig = content?.parameters;
  const isTechnical = content?.variant === "technical";
  const isInteractive = content?.blockInteraction !== true;
  const variantClass = content?.variant ? `is-${content.variant}` : "";
  const Heading = content?.headingLevel ? `h${content.headingLevel}` : "h2";

  const [isPlaying, setIsPlaying] = useState(false);
  const [failedSources, setFailedSources] = useState(() => new Set());

  const image = useMemo(() => {
    if (content?.image && typeof content.image === "object") return content.image;
    if (content?.posterImage) {
      if (typeof content.posterImage === "object") return content.posterImage;
      if (typeof content.posterImage === "string") {
        if (/^https?:\/\//i.test(content.posterImage) || content.posterImage.startsWith("/")) {
          return { src: content.posterImage };
        }
        return { id: content.posterImage };
      }
    }
    return {};
  }, [content?.image, content?.posterImage]);

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

  const youtubeWebp = videoId ? `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp` : "";
  const youtubeJpg = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";

  const posterSrc = canUseCloudflare
    ? cloudflareSrc
    : canUseFallback
      ? fallbackSrc
      : !failedSources.has(youtubeWebp) && youtubeWebp
        ? youtubeWebp
        : youtubeJpg;

  const posterSrcSet = canUseCloudflare
    ? cloudflareSrcSet || image.srcSet || undefined
    : image.srcSet || undefined;

  useEffect(() => {
    setIsPlaying(false);
  }, [videoId, content?.image, content?.posterImage]);

  const handlePosterError = useCallback(() => {
    if (posterSrc && !failedSources.has(posterSrc)) {
      setFailedSources((current) => {
        const next = new Set(current);
        next.add(posterSrc);
        return next;
      });
    }
  }, [posterSrc, failedSources]);

  // Hover & focus warmup: dynamically preconnect to youtube-nocookie.com
  const handleWarmup = useCallback(() => {
    if (typeof document === "undefined") return;
    const preconnectDomain = "https://www.youtube-nocookie.com";
    if (!document.querySelector(`link[rel="preconnect"][href="${preconnectDomain}"]`)) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = preconnectDomain;
      document.head.appendChild(link);
    }
  }, []);

  // Single-click / keyboard play handler
  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPlaying(true);
    }
  }, []);

  // Build privacy-enhanced video embed URL with autoplay=1 on user play
  const videoSrc = useMemo(() => {
    if (!videoId) return "";

    const params = new URLSearchParams({
      autoplay: "1",
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
      controls: "1",
      ...(parametersConfig || {}),
    });

    // Enforce immediate autoplay & controls for seamless 1-click playback
    params.set("autoplay", "1");
    params.set("playsinline", "1");
    params.set("controls", "1");

    if (content?.mute === true) {
      params.set("mute", "1");
    } else if (content?.mute === false) {
      params.delete("mute");
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  }, [parametersConfig, videoId, content?.mute]);

  if (!videoId) return null;

  return (
    <section
      className={`service-landing__section is-${tone} service-landing__video`}
      id={content?.id}
    >
      <div className="service-landing__narrow">
        <div className={`service-landing__video-split is-video-${videoSide || content?.videoSide || "right"}`}>
          {/* Left Column: Textual Content */}
          <div className="service-landing__video-content">
            {content?.eyebrow && (
              <ScrollSlide direction="down">
                <span className="service-landing__eyebrow">
                  {content.eyebrow}
                </span>
              </ScrollSlide>
            )}

            {content?.title && (
              <ScrollZoomText as="div" delay={0.08}>
                <Heading className="service-landing__video-title">
                  {content.title}
                </Heading>
              </ScrollZoomText>
            )}

            <span
              className="service-landing__heading-line"
              aria-hidden="true"
            />

            {content?.lead ? (
              <ScrollSlide direction="up" delay={0.12}>
                <RichText className="service-landing__video-description" value={content.lead} />
              </ScrollSlide>
            ) : null}

            {content?.listTitle ? (
              <ScrollSlide direction="up" delay={0.14}>
                <p className="service-landing__video-list-title">
                  <strong>{content.listTitle}</strong>
                </p>
              </ScrollSlide>
            ) : null}

            {Array.isArray(content?.items) && content.items.length > 0 ? (
              <ScrollSlide direction="up" delay={0.16}>
                <ul className="service-landing__video-list">
                  {content.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="service-landing__video-list-check" aria-hidden="true">
                        {"\u2713"}
                      </span>
                      <span>
                        {typeof item === "string" ? item : item.title || item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollSlide>
            ) : null}

            {content?.conclusion ? (
              <ScrollSlide direction="up" delay={0.18}>
                <RichText className="service-landing__video-description" value={content.conclusion} />
              </ScrollSlide>
            ) : null}

            {!content?.lead && !content?.items && (
              Array.isArray(content?.description) ? (
                content.description.map((desc, idx) => (
                  <ScrollSlide key={idx} direction="up" delay={0.12 + idx * 0.04}>
                    <p className="service-landing__video-description">{desc}</p>
                  </ScrollSlide>
                ))
              ) : content?.description ? (
                <ScrollSlide direction="up" delay={0.12}>
                  <p className="service-landing__video-description">
                    {content.description}
                  </p>
                </ScrollSlide>
              ) : null
            )}

            {showAnyCta ? (
              <ScrollSlide direction="up" delay={0.16}>
                <div className="service-landing__video-action service-landing__cta-actions">
                  {hasPhone && <CallNowButton phone={phoneUrl} />}
                  {hasWhatsapp && <WhatsappIconButton whatsapp={whatsappUrl} />}
                </div>
              </ScrollSlide>
            ) : content?.action ? (
              <ScrollSlide direction="up" delay={0.16}>
                <div className="service-landing__video-action">
                  {content.action.href ? (
                    <a
                      className="service-landing__button is-whatsapp"
                      href={content.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="service-landing__button-icon" />
                      {content.action.label || "Call now on WhatsApp!"}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="service-landing__button is-whatsapp"
                      onClick={content.action.onClick}
                    >
                      <WhatsAppIcon className="service-landing__button-icon" />
                      {content.action.label || "Call now on WhatsApp!"}
                    </button>
                  )}
                </div>
              </ScrollSlide>
            ) : null}
          </div>

          {/* Right Column: Video Media */}
          <div className="service-landing__video-media">
            <ScrollSlide direction="up" delay={0.1}>
              <div
                className={`service-landing__video-shell ${variantClass} ${
                  isInteractive ? "is-interactive" : ""
                }`}
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
                        {content.frameMeta?.status || "LIVE FEED"}
                      </span>
                      <span>{content.frameMeta?.protocol || "REC // 1080P"}</span>
                    </div>
                  </>
                )}

                <div className="service-landing__video-frame">
                  {isPlaying ? (
                    <iframe
                      src={videoSrc}
                      title={content?.frameTitle || content?.title || "Service video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen={content?.allowFullScreen ?? true}
                    />
                  ) : (
                    <button
                      type="button"
                      className="service-landing__video-facade"
                      onClick={handlePlay}
                      onKeyDown={handleKeyDown}
                      onPointerEnter={handleWarmup}
                      onFocus={handleWarmup}
                      aria-label={`Play video: ${content?.title || "Service video"}`}
                    >
                      <img
                        src={posterSrc}
                        srcSet={posterSrcSet}
                        sizes="(max-width: 900px) 100vw, 46vw"
                        alt={image.alt || content?.title || "Video thumbnail"}
                        loading="lazy"
                        decoding="async"
                        className="service-landing__video-poster"
                        onError={handlePosterError}
                      />
                      <div className="service-landing__video-facade-overlay" aria-hidden="true" />
                      <div className="service-landing__video-play-btn" aria-hidden="true">
                        <svg
                          className="service-landing__video-play-svg"
                          viewBox="0 0 68 48"
                          width="68"
                          height="48"
                          aria-hidden="true"
                        >
                          <path
                            className="service-landing__video-play-bg"
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                          />
                          <path d="M 45,24 27,14 27,34" fill="#ffffff" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </ScrollSlide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(EmbeddedVideoSection);
