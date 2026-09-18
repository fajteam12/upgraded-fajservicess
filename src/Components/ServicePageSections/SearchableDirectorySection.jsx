import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import getBrandServiceRoute from "../../data/servicePages/brandServiceRoutes";
import { ScrollSlide } from "../Animations/ScrollAnimation";
import SectionHeader from "./SectionHeader";

function SearchableDirectorySection({
  content,
  onAction,
  tone = "white",
  variant = "default",
}) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return content?.items || [];

    return content.items.filter((item) => {
      const itemDescription =
        item.description || content.defaultItemDescription || "";

      return `${item.name} ${itemDescription}`
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
            const itemPath = getBrandServiceRoute(
              item.name,
              item.href || item.path
            );

            return (
              <ScrollSlide
                direction="up"
                delay={(index % 4) * 0.04}
                key={`${item.name}-${index}`}
              >
                {isCompact ? (
                  <div className="service-landing__directory-item">
                    {itemPath ? (
                      <Link
                        className="service-landing__directory-link"
                        to={itemPath}
                      >
                        <span>{item.name}</span>
                        <span aria-hidden="true">
                          {"\u2192"}
                        </span>
                      </Link>
                    ) : (
                      <div className="service-landing__directory-link is-static">
                        <span>{item.name}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <article className="service-landing__brand-card">
                    <h3>
                      {itemPath ? (
                        <Link to={itemPath}>
                          {item.name}
                        </Link>
                      ) : (
                        item.name
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
      </div>
    </section>
  );
}

export default memo(SearchableDirectorySection);