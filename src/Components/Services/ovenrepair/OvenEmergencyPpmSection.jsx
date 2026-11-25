import { memo } from "react";
import SectionHeader from "../../ServicePageSections/SectionHeader";
import "./OvenEmergencyPpmSection.css";

function OvenEmergencyPpmSection({ tone = "soft", expressContent, ppmContent }) {
  return (
    <section className={`oven-callouts-section is-${tone}`}>
      <div className="service-landing__narrow">
        {/* Callout 1: Express & Emergency Oven Repair Service */}
        {expressContent && (
          <div className="oven-callout-block">
            <SectionHeader
              content={{
                title: expressContent.title,
              }}
            />
            <div className="oven-callout-card">
              <h4 className="oven-callout-card__label">
                {expressContent.termsLabel || "TERMS & CONDITIONS:"}
              </h4>
              <p className="oven-callout-card__text">
                {expressContent.termsText}
              </p>
              <div className="oven-callout-card__divider" />
              <h4 className="oven-callout-card__sublabel">
                {expressContent.peaceLabel || "CHOOSE FAJ FOR YOUR PEACE OF MIND"}
              </h4>
              <p className="oven-callout-card__subtext">
                {expressContent.peaceText}
              </p>
            </div>
          </div>
        )}

        {/* Callout 2: Planned Preventive Maintenance (PPM) Services */}
        {ppmContent && (
          <div className="oven-callout-block">
            <SectionHeader
              content={{
                title: ppmContent.title,
              }}
            />
            <div className="oven-callout-card">
              {ppmContent.paragraphs?.map((p, idx) => (
                <p key={idx} className="oven-callout-card__text">
                  {p}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(OvenEmergencyPpmSection);
