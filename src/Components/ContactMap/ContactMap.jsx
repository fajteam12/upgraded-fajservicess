import { memo } from "react";
import contactMapData from "../../data/contactMapData";
import "./ContactMap.css";

function MapPinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Zm0-9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" /></svg>;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}

function ContactMap({ data = contactMapData, height = "clamp(330px, 35vw, 440px)" }) {
  return (
    <section className="contact-map" aria-label="FAJ Technical Services location">
      <div className="contact-map__frame" style={{ "--contact-map-height": height }}>
        <iframe
          title={`Map showing ${data.title}`}
          src={data.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="contact-map__card contact-map__reveal">
          <div className="contact-map__card-heading"><span><MapPinIcon /></span><div><strong>{data.title}</strong><small>{data.address}</small></div></div>
          {data.phone && <a className="contact-map__phone" href={data.phoneHref}>{data.phone}</a>}
          <a className="contact-map__directions" href={data.directionsHref} target="_blank" rel="noreferrer">{data.directionsLabel}<ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactMap);
