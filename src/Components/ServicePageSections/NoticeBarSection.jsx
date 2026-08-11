import { memo } from "react";

function NoticeBarSection({ content }) {
  if (!content?.text) return null;

  return (
    <section className="service-landing__notice" aria-label={content.label}>
      <div className="service-landing__container">
        <p>{content.text}</p>
      </div>
    </section>
  );
}

export default memo(NoticeBarSection);
