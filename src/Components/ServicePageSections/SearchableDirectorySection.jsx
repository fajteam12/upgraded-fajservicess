import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import getBrandServiceRoute from "../../data/servicePages/brandServiceRoutes";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";

function SearchableDirectorySection({
  content,
  onAction,
  tone = "white",
  variant = "default",
  showCta,
  cta,
  contact,
}) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return content?.items || [];

    return content.items.filter((item) => {
      const itemDescription =
        item.description || content.defaultItemDescription || "";

      const itemName = item.name || item.title || "";
      return `${itemName} ${itemDescription}`
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [content, query]);

  if (!content?.items?.length) return null;

  const initialCount = content.initialCount || 12;

  const visibleItems = showAll
    ? filteredItems
    : filteredItems.slice(0, initialCount);

  const isCompact = variant === "compact";

  const shouldShowSliderSearch =
    content.searchLabel || content.searchPlaceholder;

  const isCtaEnabled = Boolean(
    showCta ?? content?.showCta ?? (cta || content?.cta)
  );

  let phoneUrl = "";
  let whatsappUrl = "";

  if (isCtaEnabled) {
    const hasExplicitCta = Boolean(
      (typeof cta === "object" && cta) ||
      (typeof content?.cta === "object" && content?.cta)
    );

    const ctaConfig =
      (typeof cta === "object" && cta) ||
      (typeof content?.cta === "object" && content?.cta) ||
      {};

    const getCleanUrl = (val) => {
      if (typeof val === "string") return val.trim();
      return "";
    };

    // Phone URL resolution: empty string or false suppresses the button
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

    // WhatsApp URL resolution: empty string or false suppresses the button
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

  return (
    <section
      className={`service-landing__section is-${tone}`}
      id={content.id}
    >
      <div className="service-landing__container">
        <SectionHeader
          content={content}
          light={tone === "dark"}
        />

        {shouldShowSliderSearch && (
          <label className="service-landing__brand-search">
            <span className="service-landing__sr-only">
              {content.searchLabel || "Search"}
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setShowAll(false);
              }}
              placeholder={
                content.searchPlaceholder || "Search..."
              }
            />
          </label>
        )}

        <div
          className={`service-landing__brand-grid${
            isCompact ? " is-compact" : ""
          }`}
        >
          {visibleItems.map((item, index) => {
            const itemName = item.name || item.title || "";
            const itemPath = getBrandServiceRoute(
              itemName,
              item.href || item.path || item.link || item.to
            );
            const isExternal =
              item.external === true ||
              (itemPath && /^https?:\/\//i.test(itemPath));

            return (
              <ScrollSlide
                direction="up"
                delay={(index % 4) * 0.04}
                key={`${itemName}-${index}`}
              >
                {isCompact ? (
                  <div className="service-landing__directory-item">
                    {itemPath ? (
                      isExternal ? (
                        <a
                          className="service-landing__directory-link"
                          href={itemPath}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>{itemName}</span>
                          <span aria-hidden="true">
                            {"\u2192"}
                          </span>
                        </a>
                      ) : (
                        <Link
                          className="service-landing__directory-link"
                          to={itemPath}
                        >
                          <span>{itemName}</span>
                          <span aria-hidden="true">
                            {"\u2192"}
                          </span>
                        </Link>
                      )
                    ) : (
                      <div className="service-landing__directory-link is-static">
                        <span>{itemName}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <article className="service-landing__brand-card">
                    <h3>
                      {itemPath ? (
                        isExternal ? (
                          <a
                            href={itemPath}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {itemName}
                          </a>
                        ) : (
                          <Link to={itemPath}>
                            {itemName}
                          </Link>
                        )
                      ) : (
                        itemName
                      )}
                    </h3>

                    {(item.description ||
                      content.defaultItemDescription) && (
                      <p>
                        {item.description ||
                          content.defaultItemDescription}
                      </p>
                    )}

                    {content.actionLabel && onAction && (
                      <button
                        type="button"
                        className="service-landing__action-link"
                        onClick={() =>
                          onAction(item.name)
                        }
                      >
                        {content.actionLabel}
                        <span aria-hidden="true">
                          {"\u2192"}
                        </span>
                      </button>
                    )}
                  </article>
                )}
              </ScrollSlide>
            );
          })}
        </div>

        {!visibleItems.length && (
          <p className="service-landing__empty">
            {content.emptyMessage || "No results found."}
          </p>
        )}

        {filteredItems.length > initialCount && (
          <div className="service-landing__center-action">
            <button
              type="button"
              className="service-landing__button is-dark"
              onClick={() =>
                setShowAll((current) => !current)
              }
            >
              {showAll
                ? content.showLessLabel || "Show Less"
                : `${
                    content.showAllLabel || "Show All"
                  } (${filteredItems.length})`}
            </button>
          </div>
        )}

        {showAnyCta && (
          <ScrollSlide direction="up" delay={0.24}>
            <div className="service-landing__cta-actions">
              {hasPhone && <CallNowButton phone={phoneUrl} />}
              {hasWhatsapp && <WhatsappIconButton whatsapp={whatsappUrl} />}
            </div>
          </ScrollSlide>
        )}
      </div>
    </section>
  );
}

export default memo(SearchableDirectorySection);