import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css";

const directionClass = {
  up: "scroll-animation--up",
  down: "scroll-animation--down",
  left: "scroll-animation--left",
  right: "scroll-animation--right",
};

function useScrollVisible({ once = true, rootMargin = "-10% 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setVisible(false);
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return [ref, visible];
}

export function ScrollZoomText({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
}) {
  const [ref, visible] = useScrollVisible();

  return (
    <Component
      ref={ref}
      className={`scroll-animation scroll-animation--zoom ${className}`.trim()}
      data-visible={visible ? "true" : "false"}
      style={{ "--scroll-animation-delay": `${delay}s` }}
    >
      {children}
    </Component>
  );
}

export function ScrollSlide({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
}) {
  const [ref, visible] = useScrollVisible();

  return (
    <div
      ref={ref}
      className={`scroll-animation ${directionClass[direction] || directionClass.up} ${className}`.trim()}
      data-visible={visible ? "true" : "false"}
      style={{
        "--scroll-animation-delay": `${delay}s`,
        "--scroll-animation-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}

export function ShutterImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  shutterColor = "#003048",
  delay = 0,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  srcSet,
  sizes,
}) {
  const [ref, visible] = useScrollVisible({ rootMargin: "-8% 0px" });

  return (
    <div
      ref={ref}
      className={`scroll-animation__shutter ${className}`.trim()}
      data-visible={visible ? "true" : "false"}
      style={{ "--scroll-animation-delay": `${delay}s` }}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        className={`scroll-animation__shutter-image ${imgClassName}`.trim()}
      />
      <span
        className="scroll-animation__shutter-panel"
        style={{ backgroundColor: shutterColor }}
        aria-hidden="true"
      />
    </div>
  );
}
