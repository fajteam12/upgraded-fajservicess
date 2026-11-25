import { memo } from "react";
import SectionHeader from "../../ServicePageSections/SectionHeader";
import "./KitchenEmergencyPpmSection.css";

function KitchenEmergencyPpmSection({ tone = "soft", expressContent, ppmContent }) {
  return (
    <section className={`kitchen-callouts-section is-${tone}`}>
      <div className="service-landing__narrow">
        {/* Callout 1: Catering Equipment Maintenance Services / Call-out */}
        {expressContent && (
          <div className="kitchen-callout-block">
            <SectionHeader
              content={{
                title: expressContent.title,
              }}
            />
            <div className="kitchen-callout-card">
              {expressContent.paragraphs?.map((p, idx) => (
                <p key={idx} className="kitchen-callout-card__text">
                  {p}
                </p>
              ))}
              {expressContent.subTitle && (
                <>
                  <div className="kitchen-callout-card__divider" />
                  <h4 className="kitchen-callout-card__sublabel">
                    {expressContent.subTitle}
                  </h4>
                  <p className="kitchen-callout-card__subtext">
                    {expressContent.subText}
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Callout 2: Planned Preventive Maintenance (PPM) Services */}
        {ppmContent && (
          <div className="kitchen-callout-block">
            <SectionHeader
              content={{
                title: ppmContent.title,
              }}
            />
            <div className="kitchen-callout-card">
              {ppmContent.paragraphs?.map((p, idx) => (
                <p key={idx} className="kitchen-callout-card__text">
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

export default memo(KitchenEmergencyPpmSection);
