import { memo, useId } from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./BlogArticleHeader.css";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

function BlogArticleHeader({ post = null, loading = false }) {
  const generatedId = useId();
  const titleId = `blog-article-title-${generatedId.replace(/:/g, "")}`;
  const imageSrc = post?.img
    ? getCloudflareImageUrl(post.img, "large")
    : "";
  const imageSrcSet = post?.img
    ? getCloudflareImageSrcSet(post.img)
    : undefined;

  const title = loading ? "Loading article..." : post?.title || "Article Not Found";
  const category = post?.blogcat;
  const commentCount = post?.comments ?? 0;

  return (
    <section
      className={`blog-article-header${loading ? " is-loading" : ""}`}
      aria-labelledby={titleId}
      aria-busy={loading || undefined}
    >
      <div className="blog-article-header__media" aria-hidden="true">
        {imageSrc && (
          <img
            src={imageSrc}
            srcSet={imageSrcSet}
            sizes="100vw"
            alt=""
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>
      <div className="blog-article-header__overlay" aria-hidden="true" />

      <div className="blog-article-header__container">
        <Link to="/blogs/" className="blog-article-header__back">
          <ArrowLeftIcon /> Back to Blog Grid
        </Link>

        {category && (
          <p className="blog-article-header__category">{category}</p>
        )}

        <h1 id={titleId}>{title}</h1>

        {post && (
          <div className="blog-article-header__meta" aria-label="Article details">
            {post.admin && (
              <span className="blog-article-header__author">
                <UserIcon /> <strong>{post.admin}</strong>
              </span>
            )}
            {post.date && <span><CalendarIcon />{post.date}</span>}
            {post.readtime && <span><ClockIcon />{post.readtime}</span>}
            {commentCount > 0 && (
              <span><CommentIcon />{commentCount} Comments</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(BlogArticleHeader);
