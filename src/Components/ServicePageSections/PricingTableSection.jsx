import { memo } from "react";

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m9 12 2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const hasWarranty = (value) =>
  String(value || "")
    .toLowerCase()
    .includes("month");

function PricingTableSection({ content }) {
  if (!content?.groups?.length) return null;

  const columns = content.columns || [];

  return (
    <section
      id={content.id}
      className="service-landing__section coverage-pricing-section"
    >
      <div className="service-landing__container">
        {(content.title || content.description) && (
          <header className="coverage-ai-heading coverage-ai-heading--pricing">
            {content.title && <h2>{content.title}</h2>}

            {content.description && (
              <p>{content.description}</p>
            )}
          </header>
        )}

        <div className="coverage-pricing__shell">
          <div className="coverage-pricing__scroll">
            <table className="coverage-pricing__table">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={`${column}-${index}`} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {content.groups.map((group, groupIndex) =>
                  group.items.map((item, itemIndex) => (
                    <tr
                      key={`${group.type}-${item.service}-${groupIndex}-${itemIndex}`}
                    >
                      {itemIndex === 0 && (
                        <th
                          className="coverage-pricing__type"
                          scope="rowgroup"
                          rowSpan={group.items.length}
                        >
                          <span className="coverage-pricing__type-inner">
                            <span
                              className="coverage-pricing__type-dot"
                              aria-hidden="true"
                            />

                            <span>{group.type}</span>
                          </span>
                        </th>
                      )}

                      <td className="coverage-pricing__service">
                        <span>{item.service}</span>
                      </td>

                      <td className="coverage-pricing__description">
                        {item.description}
                      </td>

                      <td className="coverage-pricing__price">
                        {item.price}
                      </td>

                      <td className="coverage-pricing__warranty">
                        <span
                          className={
                            hasWarranty(item.warranty)
                              ? "has-warranty"
                              : ""
                          }
                        >
                          <ShieldIcon />
                          {item.warranty}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(PricingTableSection);