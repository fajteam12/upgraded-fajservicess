import { memo, useCallback, useEffect, useRef, useState } from "react";
import { getCloudflareImageUrl } from "../../utils/cloudflareImages";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function BeforeAfterSection({ content, tone = "soft" }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const beforeImageSrc = content?.beforeImage?.id
    ? getCloudflareImageUrl(content.beforeImage.id, "public")
    : content?.beforeImage?.src || "";

  const afterImageSrc = content?.afterImage?.id
    ? getCloudflareImageUrl(content.afterImage.id, "public")
    : content?.afterImage?.src || "";

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleDragStop = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseup", handleDragStop);
    window.addEventListener("touchend", handleDragStop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleDragStop);
      window.removeEventListener("touchend", handleDragStop);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleDragStop]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  }, []);

  if (!content) return null;

  return (
    <section
      className={`service-landing__section service-landing__before-after is-${tone}`}
      id={content.id || "before-after-service"}
    >
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />

        <ScrollSlide direction="up" delay={0.15}>
          <div className="service-landing__before-after-wrapper">
            <div
              className="service-landing__before-after-slider"
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              role="slider"
              tabIndex={0}
              aria-label="Before and after service comparison slider"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={handleKeyDown}
            >
              {/* After image (base layer) */}
              <div className="service-landing__before-after-image is-after">
                <img
                  src={afterImageSrc}
                  alt={content.afterAlt || "After service"}
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-landing__before-after-badge is-after">
                  {content.afterLabel || "After"}
                </span>
              </div>

              {/* Before image (clipped top layer) */}
              <div
                className="service-landing__before-after-image is-before"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={beforeImageSrc}
                  alt={content.beforeAlt || "Before service"}
                  loading="lazy"
                  decoding="async"
                />
                <span className="service-landing__before-after-badge is-before">
                  {content.beforeLabel || "Before"}
                </span>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="service-landing__before-after-handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="service-landing__before-after-handle-line" />
                <div
                  className="service-landing__before-after-handle-button"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>

            {content.caption && (
              <p className="service-landing__before-after-caption">
                {content.caption}
              </p>
            )}
          </div>
        </ScrollSlide>
      </div>
    </section>
  );
}

export default memo(BeforeAfterSection);
