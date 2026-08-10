import { memo } from "react";
import b2bEnterpriseData from "../../data/b2bEnterpriseData";
import B2BClients from "../B2BClients/B2BClients";
import "./B2BEnterpriseContent.css";

function BuildingIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-4h4v4" /></svg>;
}

function ChatIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-3.5-.7L4 20l1.2-3.6A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /></svg>;
}

function B2BEnterpriseContent({ data = b2bEnterpriseData }) {
  return (
    <section className="b2b-enterprise" aria-labelledby="b2b-enterprise-title">
      <div className="container">
        <div className="b2b-enterprise__card b2b-enterprise__reveal">
          <header className="b2b-enterprise__header">
            <span className="b2b-enterprise__header-icon"><BuildingIcon /></span>
            <div>
              {data.eyebrow && <p>{data.eyebrow}</p>}
              {data.subtitle && <small>{data.subtitle}</small>}
            </div>
          </header>

          <div className="b2b-enterprise__banner">
            <h2 id="b2b-enterprise-title">{data.title}</h2>
            <p>{data.banner}</p>
          </div>

          <p className="b2b-enterprise__introduction">{data.introduction}</p>

          <div className="b2b-enterprise__sections">
            {data.sections?.map((section) => (
              <article className="b2b-enterprise__section" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                {section.callout && <div className="b2b-enterprise__callout">{section.callout}</div>}
                {section.details && <div className="b2b-enterprise__details">{section.details.map((detail) => <p key={detail}>{detail}</p>)}</div>}
              </article>
            ))}
          </div>

          <div className="b2b-enterprise__actions" aria-label="Corporate contact options">
            <a className="b2b-enterprise__action b2b-enterprise__action--primary" href={data.actions.emailHref}>{data.actions.email}</a>
            <a className="b2b-enterprise__action b2b-enterprise__action--secondary" href={data.actions.phoneHref}>{data.actions.phone}</a>
            <a className="b2b-enterprise__action b2b-enterprise__action--whatsapp" href={data.actions.whatsappHref} target="_blank" rel="noreferrer"><ChatIcon />{data.actions.whatsapp}</a>
          </div>

          <B2BClients />
        </div>
      </div>
    </section>
  );
}

export default memo(B2BEnterpriseContent);
