import {
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import servicesShowcaseData from "../../data/servicesShowcaseData";
import ServicesShowcaseIcon from "./ServicesShowcaseIcon";
import "./ServicesShowcase.css";

function ServiceItem({
  service,
  index,
  active,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={`services-showcase__item ${
        active ? "is-active" : ""
      }`}
      onClick={() => onSelect(index)}
      aria-pressed={active}
    >
      <span className="services-showcase__item-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="services-showcase__item-icon"
        aria-hidden="true"
      >
        <ServicesShowcaseIcon name={service.icon} />
      </span>

      <span className="services-showcase__item-content">
        <strong>{service.title}</strong>

        {service.tags?.length > 0 && (
          <small>
            {service.tags.slice(0, 2).join(" \u2022 ")}
          </small>
        )}
      </span>
    </button>
  );
}

function ServicesShowcase({
  eyebrow = "FAJ Technical Services",
  title = "Services",
  description = "Choose any category to preview its details. Explore our specialized repair and maintenance solutions.",
  services = servicesShowcaseData,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fallbackImage, setFallbackImage] =
    useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const activeService = services?.[activeIndex];

  if (!activeService) {
    return null;
  }

  const splitIndex = Math.ceil(services.length / 2);

  const cloudflareSrc = activeService.image?.id
    ? getCloudflareImageUrl(
        activeService.image.id,
        "public"
      )
    : "";

  const cloudflareSrcSet = activeService.image?.id
    ? getCloudflareImageSrcSet(activeService.image.id)
    : undefined;

  const imageSrc = fallbackImage
    ? activeService.image?.src
    : cloudflareSrc || activeService.image?.src;

  const imageSrcSet = fallbackImage
    ? activeService.image?.srcSet
    : cloudflareSrcSet ||
      activeService.image?.srcSet ||
      undefined;

  const selectService = (index) => {
    setActiveIndex(index);
    setFallbackImage(false);
    setMobileMenuOpen(false);
  };

  return (
    <section
      className="services-showcase"
      aria-labelledby={
        title?.trim()
          ? "services-showcase-title"
          : undefined
      }
    >
      <div className="services-showcase__container">
        <header className="services-showcase__header">
          {eyebrow?.trim() && (
            <ScrollSlide direction="down">
              <span className="services-showcase__eyebrow">
                {eyebrow}
              </span>
            </ScrollSlide>
          )}

          {title?.trim() && (
            <ScrollZoomText as="div" delay={0.08}>
              <h2 id="services-showcase-title">
                {title}
              </h2>
            </ScrollZoomText>
          )}

          {description?.trim() && (
            <ScrollZoomText as="div" delay={0.16}>
              <p>{description}</p>
            </ScrollZoomText>
          )}
        </header>

        <ScrollSlide
          className="services-showcase__mobile-animation"
          direction="up"
          distance={20}
          delay={0.1}
        >
          <div
            className="services-showcase__mobile-select"
            ref={mobileMenuRef}
          >
            <span className="services-showcase__mobile-label">
              Select Service Category
            </span>

            <button
              type="button"
              className={`services-showcase__mobile-trigger ${
                mobileMenuOpen ? "is-open" : ""
              }`}
              onClick={() =>
                setMobileMenuOpen(
                  (current) => !current
                )
              }
              aria-expanded={mobileMenuOpen}
              aria-haspopup="listbox"
            >
              <span className="services-showcase__mobile-trigger-content">
                <span
                  className="services-showcase__mobile-trigger-icon"
                  aria-hidden="true"
                >
                  <ServicesShowcaseIcon name={activeService.icon} />
                </span>

                <span className="services-showcase__mobile-trigger-title">
                  {activeService.title}
                </span>
              </span>

              <span
                className="services-showcase__mobile-chevron"
                aria-hidden="true"
              >
                {mobileMenuOpen
                  ? "\u2303"
                  : "\u2304"}
              </span>
            </button>

            {mobileMenuOpen && (
              <div
                className="services-showcase__mobile-options"
                role="listbox"
                aria-label="Service categories"
              >
                {services.map((service, index) => {
                  const isActive =
                    activeIndex === index;

                  return (
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      key={service.id}
                      className={`services-showcase__mobile-option ${
                        isActive
                          ? "is-active"
                          : ""
                      }`}
                      onClick={() =>
                        selectService(index)
                      }
                    >
                      <span
                        className="services-showcase__mobile-option-icon"
                        aria-hidden="true"
                      >
                        <ServicesShowcaseIcon name={service.icon} />
                      </span>

                      <span className="services-showcase__mobile-option-title">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </ScrollSlide>

        <div className="services-showcase__layout">
          <ScrollSlide
            className="services-showcase__side-animation"
            direction="left"
            distance={24}
            delay={0.05}
          >
            <div className="services-showcase__column">
              {services
                .slice(0, splitIndex)
                .map((service, index) => (
                  <ServiceItem
                    key={service.id}
                    service={service}
                    index={index}
                    active={activeIndex === index}
                    onSelect={selectService}
                  />
                ))}
            </div>
          </ScrollSlide>

          <ScrollSlide
            className="services-showcase__preview-animation"
            direction="up"
            distance={28}
            delay={0.12}
          >
            <article className="services-showcase__preview">
              <div className="services-showcase__image-wrap">
                <img
                  src={imageSrc}
                  srcSet={imageSrcSet}
                  sizes="(max-width: 980px) calc(100vw - 24px), 50vw"
                  alt={activeService.image?.alt || ""}
                  width={activeService.image?.width}
                  height={activeService.image?.height}
                  loading="lazy"
                  decoding="async"
                  onError={() => {
                    if (
                      !fallbackImage &&
                      activeService.image?.src
                    ) {
                      setFallbackImage(true);
                    }
                  }}
                />

                <span className="services-showcase__image-label">
                  Maintenance &amp; Repair
                </span>

                <span
                  className="services-showcase__image-icon"
                  aria-hidden="true"
                >
                  <ServicesShowcaseIcon name={activeService.icon} />
                </span>
              </div>

              <div className="services-showcase__preview-content">
                <span className="services-showcase__service-number">
                  Service{" "}
                  {String(
                    activeIndex + 1
                  ).padStart(2, "0")}
                </span>

                <h3>{activeService.title}</h3>

                {activeService.description?.trim() && (
                  <p>{activeService.description}</p>
                )}

                {activeService.subpages?.length > 0 && (
                  <div className="services-showcase__subservices">
                    <span className="services-showcase__subservices-label">
                      Available Specialized Services
                    </span>

                    <div className="services-showcase__subservices-grid">
                      {activeService.subpages.map(
                        (subpage) => (
                          <Link
                            key={subpage.path}
                            to={subpage.path}
                            className="services-showcase__subservice-link"
                          >
                            <span
                              className="services-showcase__subservice-dot"
                              aria-hidden="true"
                            />
                            <span>{subpage.title}</span>
                            <span
                              className="services-showcase__subservice-arrow"
                              aria-hidden="true"
                            >
                              {"\u2192"}
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}

                <Link
                  to={activeService.path}
                  className="services-showcase__button"
                >
                  <span className="services-showcase__button-label">
                    Explore Details
                  </span>

                  <span
                    className="services-showcase__button-arrow"
                    aria-hidden="true"
                  >
                    {"\u2192"}
                  </span>
                </Link>
              </div>
            </article>
          </ScrollSlide>

          <ScrollSlide
            className="services-showcase__side-animation"
            direction="right"
            distance={24}
            delay={0.05}
          >
            <div className="services-showcase__column">
              {services
                .slice(splitIndex)
                .map((service, index) => {
                  const globalIndex =
                    index + splitIndex;

                  return (
                    <ServiceItem
                      key={service.id}
                      service={service}
                      index={globalIndex}
                      active={
                        activeIndex === globalIndex
                      }
                      onSelect={selectService}
                    />
                  );
                })}
            </div>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesShowcase);
