import React, { memo, useId, useState } from "react";
import { Link } from "react-router-dom";

import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";

import {
  ScrollSlide,
  ScrollZoomText,
  ShutterImage,
} from "../Animations/ScrollAnimation";

import { newsUpdatesData } from "./newsUpdatesData";
import "./NewsUpdates.css";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.5 10h12" />
    <path d="m11.5 6 4 4-4 4" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="14" height="12" rx="2" />
    <path d="M6.5 2.5v4M13.5 2.5v4M3 8h14" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="7" />
    <path d="M10 6.5V10l2.5 1.5" />
  </svg>
);

const CommentIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 4h12v9H9l-4 3v-3H4Z" />
  </svg>
);

const ArticleMeta = ({
  dateLabel,
  dateTime,
  readTime,
  comments,
  compact = false,
}) => (
  <div
    className={`news-updates__meta ${
      compact ? "news-updates__meta--compact" : ""
    }`}
  >
    {dateLabel && (
      <span>
        <CalendarIcon />
        <time dateTime={dateTime || undefined}>{dateLabel}</time>
      </span>
    )}

    {readTime && (
      <span>
        <ClockIcon />
        {readTime}
      </span>
    )}

    {comments && (
      <span>
        <CommentIcon />
        {comments}
      </span>
    )}
  </div>
);

const ArticleImage = ({
  article,
  className = "",
  loading = "lazy",
}) => {
  const [useFallback, setUseFallback] = useState(false);

  const cloudflareSrc = article.id
    ? getCloudflareImageUrl(article.id, "public")
    : "";

  const cloudflareSrcSet = article.id
    ? getCloudflareImageSrcSet(article.id)
    : undefined;

  const imageSrc = useFallback
    ? article.imageSrc
    : cloudflareSrc || article.imageSrc;

  const imageSrcSet = useFallback
    ? article.imageSrcSet || undefined
    : cloudflareSrcSet || article.imageSrcSet || undefined;

  return (
    <div
      className={`news-updates__image-wrapper ${className}`}
      style={{
        "--news-image-position": article.imagePosition || "center center",
      }}
    >
      <ShutterImage
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={article.imageSizes}
        width={article.imageWidth}
        height={article.imageHeight}
        loading={loading}
        decoding="async"
        alt={article.imageAlt || ""}
        className="news-updates__shutter"
        imgClassName="news-updates__image"
        shutterColor="#003048"
        onError={() => {
          if (!useFallback && article.imageSrc) {
            setUseFallback(true);
          }
        }}
      />
    </div>
  );
};

const FeaturedArticle = ({ article }) => (
  <ScrollSlide
    as="article"
    className="news-updates__featured-card"
    direction="right"
    delay={0.18}
  >
    <Link
      className="news-updates__featured-image-link"
      to={article.to}
      aria-label={`Read ${article.title}`}
    >
      <ArticleImage article={article} />
    </Link>

    <div className="news-updates__featured-content">
      {article.category && (
        <span className="news-updates__category">
          {article.category}
        </span>
      )}

      <ArticleMeta
        dateLabel={article.dateLabel}
        dateTime={article.dateTime}
        readTime={article.readTime}
        comments={article.comments}
      />

      <h3 className="news-updates__featured-title">
        <Link to={article.to}>{article.title}</Link>
      </h3>

      {article.excerpt && (
        <p className="news-updates__featured-excerpt">
          {article.excerpt}
        </p>
      )}

      <Link className="news-updates__article-link" to={article.to}>
        <span>{article.ctaLabel || "Read Article"}</span>
        <ArrowIcon />
      </Link>
    </div>
  </ScrollSlide>
);

const CompactArticle = ({ article, index }) => (
  <ScrollSlide
    as="article"
    className="news-updates__compact-card"
    direction="left"
    delay={0.25 + index * 0.1}
  >
    <Link
      className="news-updates__compact-image-link"
      to={article.to}
      aria-label={`Read ${article.title}`}
    >
      <ArticleImage
        article={article}
        className="news-updates__compact-image"
      />
    </Link>

    <div className="news-updates__compact-content">
      {article.category && (
        <span className="news-updates__category">
          {article.category}
        </span>
      )}

      <ArticleMeta
        dateLabel={article.dateLabel}
        dateTime={article.dateTime}
        readTime={article.readTime}
        compact
      />

      <h3 className="news-updates__compact-title">
        <Link to={article.to}>{article.title}</Link>
      </h3>

      {article.excerpt && (
        <p className="news-updates__compact-excerpt">
          {article.excerpt}
        </p>
      )}

      <Link
        className="news-updates__article-link news-updates__article-link--compact"
        to={article.to}
      >
        <span>{article.ctaLabel || "Read Article"}</span>
        <ArrowIcon />
      </Link>
    </div>
  </ScrollSlide>
);

const NewsUpdates = ({
  eyebrow = newsUpdatesData.eyebrow,
  title = newsUpdatesData.title,
  viewAllLabel = newsUpdatesData.viewAllLabel,
  viewAllTo = newsUpdatesData.viewAllTo,
  featuredArticle = newsUpdatesData.featuredArticle,
  sideArticles = newsUpdatesData.sideArticles,
  className = "",
}) => {
  const headingId = useId();

  const sectionClasses = ["news-updates", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} aria-labelledby={headingId}>
      <div className="news-updates__container">
        <header className="news-updates__header">
          <div>
            {eyebrow && (
              <ScrollSlide
                as="div"
                className="news-updates__eyebrow"
                direction="up"
                delay={0.05}
              >
                <span aria-hidden="true" />
                <p>{eyebrow}</p>
              </ScrollSlide>
            )}

            <ScrollZoomText
              as="h2"
              id={headingId}
              className="news-updates__section-title"
              delay={0.12}
            >
              {title}
            </ScrollZoomText>
          </div>

          {viewAllTo && (
            <ScrollSlide direction="left" delay={0.2}>
              <Link className="news-updates__view-all" to={viewAllTo}>
                <span>{viewAllLabel}</span>
                <ArrowIcon />
              </Link>
            </ScrollSlide>
          )}
        </header>

        <div className="news-updates__divider" />

        <div className="news-updates__layout">
          {featuredArticle && (
            <FeaturedArticle article={featuredArticle} />
          )}

          {sideArticles?.length > 0 && (
            <div className="news-updates__side-list">
              {sideArticles.map((article, index) => (
                <CompactArticle
                  key={article.id || article.title}
                  article={article}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(NewsUpdates);