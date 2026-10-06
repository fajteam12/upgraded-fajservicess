import { memo } from "react";

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18 6 6 18M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m5 12 4 4L19 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProblemSolutionSection({ content }) {
  if (!content?.items?.length) return null;

  return (
    <section
      id={content.id}
      className="service-landing__section coverage-issues-section"
    >
      <div className="service-landing__container">
        <header className="coverage-ai-heading">
          <h2>{content.title}</h2>

          {content.description && (
            <p>{content.description}</p>
          )}

          {content.subText && (
            <h3 className="coverage-ai-heading__sub">
              {content.subText}
            </h3>
          )}
        </header>

        <div className="coverage-issues__table">
          <div className="coverage-issues__rows">
            {content.items.map((item, index) => (
              <article
                className="coverage-issues__row"
                key={`${item.title}-${index}`}
              >
                <div className="coverage-issues__problem">
                  <span
                    className="coverage-issues__icon coverage-issues__icon--problem"
                    aria-hidden="true"
                  >
                    <CrossIcon />
                  </span>

                  <div className="coverage-issues__copy">
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>

                <div className="coverage-issues__solution">
                  <span
                    className="coverage-issues__icon coverage-issues__icon--solution"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>

                  <div className="coverage-issues__copy">
                    {item.solutionTitle && (
                      <h4>{item.solutionTitle}</h4>
                    )}

                    <p>{item.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ProblemSolutionSection);