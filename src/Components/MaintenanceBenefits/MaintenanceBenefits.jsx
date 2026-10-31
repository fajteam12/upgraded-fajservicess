import React, { memo } from "react";
import {
  ScrollSlide,
  ScrollZoomText,
} from "../Animations/ScrollAnimation";
import ServiceIcon from "../ServicePageSections/ServiceIcon";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import "./MaintenanceBenefits.css";

function MaintenanceBenefits({
  eyebrow = "",
  title = "",
  description = "",
  stats = [],
  benefits = [],
  tone = "soft",
  showCta,
  cta,
  contact,
  items = [],
  showPhone,
  showWhatsapp,
}) {
  const hasEyebrow = Boolean(eyebrow?.trim());
  const hasTitle = Boolean(title?.trim());
  const hasDescription = Boolean(description?.trim());

  const benefitsList =
    Array.isArray(benefits) && benefits.length > 0
      ? benefits
      : Array.isArray(items) && items.length > 0
      ? items
      : [];

  const hasExplicitShowCta = typeof showCta === "boolean";
  const isCtaEnabled = hasExplicitShowCta
    ? showCta
    : Boolean(cta);

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const ctaConfig = (typeof cta === "object" && cta) || {};

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      return "";
    };

    const hasExplicitCta = Boolean(typeof cta === "object" && cta);

    if (getCleanUrl(ctaConfig.phone)) {
      phoneUrl = getCleanUrl(ctaConfig.phone);
    } else if (!hasExplicitCta && contact?.phone) {
      phoneUrl = `tel:+${String(contact.phone).replace(/[^0-9]/g, "")}`;
    }

    if (phoneUrl && !phoneUrl.startsWith("tel:") && !phoneUrl.startsWith("http")) {
      phoneUrl = `tel:+${phoneUrl.replace(/[^0-9]/g, "")}`;
    }

    if (getCleanUrl(ctaConfig.whatsapp)) {
      whatsappUrl = getCleanUrl(ctaConfig.whatsapp);
    } else if (contact?.whatsapp) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${String(contact.whatsapp).replace(/[^0-9]/g, "")}&text=Hello`;
    }

    if (whatsappUrl && !whatsappUrl.startsWith("http")) {
      whatsappUrl = `https://api.whatsapp.com/send?phone=+${whatsappUrl.replace(/[^0-9]/g, "")}&text=Hello`;
    }

    if (showPhone === false || ctaConfig.showPhone === false) {
      phoneUrl = "";
    }
    if (showWhatsapp === false || ctaConfig.showWhatsapp === false) {
      whatsappUrl = "";
    }
  }

  const hasPhone = Boolean(phoneUrl);
  const hasWhatsapp = Boolean(whatsappUrl);
  const showAnyCta = isCtaEnabled && (hasPhone || hasWhatsapp);

  return (
    <section
      className={`maintenance-benefits is-${tone}`}
      aria-labelledby={
        hasTitle
          ? "maintenance-benefits-title"
          : undefined
      }
    >
      <div className="maintenance-benefits__container">
        <div className="maintenance-benefits__layout">
          <aside className="maintenance-benefits__intro">
            {hasEyebrow && (
              <ScrollSlide direction="left">
                <span className="maintenance-benefits__eyebrow">
                  {eyebrow}
                </span>
              </ScrollSlide>
            )}

            {hasTitle && (
              <ScrollZoomText as="div" delay={0.08}>
                <h2 id="maintenance-benefits-title">
                  {title}
                </h2>
              </ScrollZoomText>
            )}

            {hasDescription && (
              <ScrollZoomText as="div" delay={0.16}>
                <p className="maintenance-benefits__description">
                  {description}
                </p>
              </ScrollZoomText>
            )}

            {stats?.length > 0 && (
              <ScrollSlide direction="up" delay={0.24}>
                <div className="maintenance-benefits__stats">
                  {stats.map((stat) => (
                    <div
                      className="maintenance-benefits__stat"
                      key={stat.label}
                    >
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollSlide>
            )}

            {showAnyCta && (
              <ScrollSlide direction="up" delay={0.28}>
                <div className="maintenance-benefits__actions service-landing__cta-actions">
                  {hasPhone && <CallNowButton phone={phoneUrl} />}
                  {hasWhatsapp && <WhatsappIconButton whatsapp={whatsappUrl} />}
                </div>
              </ScrollSlide>
            )}
          </aside>

          <div className="maintenance-benefits__grid">
            {benefitsList.map((benefit, index) => {
              return (
                <ScrollSlide
                  key={benefit.id || benefit.title || index}
                  direction="up"
                  delay={(index % 2) * 0.1}
                >
                  <article className="maintenance-benefits__card">
                    <div className="maintenance-benefits__card-top">
                      <span
                        className="maintenance-benefits__icon"
                        aria-hidden="true"
                      >
                        <ServiceIcon name={benefit.icon || "snowflake"} />
                      </span>

                      <span className="maintenance-benefits__number">
                        {benefit.number || String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>

                    <span
                      className="maintenance-benefits__accent"
                      aria-hidden="true"
                    />
                  </article>
                </ScrollSlide>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(MaintenanceBenefits);
