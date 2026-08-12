import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import getBrandServiceRoute from "../../data/servicePages/brandServiceRoutes";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function SearchableDirectorySection({
  content,
  onAction,
  tone = "white",
}) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return content?.items || [];

    return content.items.filter((item) =>
      `${item.name} ${item.description}`
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [content, query]);

  if (!content?.items?.length) return null;

  const initialCount = content.initialCount || 12;
  const visibleItems = showAll
    ? filteredItems
    : filteredItems.slice(0, initialCount);

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />

        <label className="service-landing__brand-search">
          <span className="service-landing__sr-only">
            {content.searchLabel}
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setShowAll(false);
            }}
            placeholder={content.searchPlaceholder}
          />
        </label>

        <div className="service-landing__brand-grid">
          {visibleItems.map((item, index) => {
            const brandPath = getBrandServiceRoute(
              item.name,
              item.href || item.path
            );

            return (
              <ScrollSlide
                direction="up"
                delay={(index % 3) * 0.04}
                key={item.name}
              >
                <article className="service-landing__brand-card">
                  <h3>
                    {brandPath ? (
                      <Link to={brandPath}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p>{item.description}</p>
                  {content.actionLabel && onAction && (
                    <button
                      type="button"
                      className="service-landing__action-link"
                      onClick={() => onAction(item.name)}
                    >
                      {content.actionLabel}
                      <span aria-hidden="true">{"\u2192"}</span>
                    </button>
                  )}
                </article>
              </ScrollSlide>
            );
          })}
        </div>

        {!visibleItems.length && (
          <p className="service-landing__empty">{content.emptyMessage}</p>
        )}

        {filteredItems.length > initialCount && (
          <div className="service-landing__center-action">
            <button
              type="button"
              className="service-landing__button is-dark"
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll
                ? content.showLessLabel
                : `${content.showAllLabel} (${filteredItems.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(SearchableDirectorySection);
