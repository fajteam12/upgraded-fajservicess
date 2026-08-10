import { memo, useState } from "react";
import b2bClientsData from "../../data/b2bClientsData";
import "./B2BClients.css";

const CDN = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA";
const LOGO_VARIANT = "w=360,h=180,fit=scale-down,quality=90,format=auto";
const defaultImageResolver = (id) => `${CDN}/${id}/${LOGO_VARIANT}`;

function B2BClientLogoGrid({ clients, resolveImage = defaultImageResolver }) {
  const [usePublicVariant, setUsePublicVariant] = useState({});
  const [failedImages, setFailedImages] = useState({});

  return (
    <div className="b2b-clients__logo-grid" aria-label="FAJ business clients">
      {clients.map(([id, name], index) => (
        <article
          className="b2b-clients__logo-card"
          style={{ "--b2b-delay": `${Math.min(index * 25, 650)}ms` }}
          key={id}
        >
          <div className="b2b-clients__logo-media">
            {!failedImages[id] ? (
              <img
                src={
                  usePublicVariant[id]
                    ? `${CDN}/${id}/public`
                    : resolveImage(id, name)
                }
                alt={`${name} logo`}
                loading={index < 8 ? "eager" : "lazy"}
                decoding="async"
                onError={() => {
                  if (!usePublicVariant[id]) {
                    setUsePublicVariant((current) => ({
                      ...current,
                      [id]: true,
                    }));
                    return;
                  }

                  setFailedImages((current) => ({ ...current, [id]: true }));
                }}
              />
            ) : (
              <span className="b2b-clients__fallback" aria-hidden="true">
                {name?.charAt(0) || "F"}
              </span>
            )}
          </div>
          <h3>{name}</h3>
        </article>
      ))}
    </div>
  );
}

function B2BClients({ data = b2bClientsData, resolveImage = defaultImageResolver }) {
  return (
    <section className="b2b-clients" aria-labelledby="b2b-clients-title">
      <header className="b2b-clients__header">
        <h2 id="b2b-clients-title">
          {data.sectionTitle || "Our Corporate Partners"}
        </h2>
        {data.countLabel && <p>{data.countLabel}</p>}
      </header>

      <B2BClientLogoGrid
        clients={data.clients || []}
        resolveImage={resolveImage}
      />
    </section>
  );
}

export { B2BClientLogoGrid };
export default memo(B2BClients);
