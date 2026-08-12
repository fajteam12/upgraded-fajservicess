import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./Blog1.css";

const POSTS_PER_PAGE = 20;

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
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

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const BlogCard = ({ post }) => {
  const postUrl = `/blog/${post.slug}/`;
  const imageSrc = getCloudflareImageUrl(post.img, "desktop");
  const imageSrcSet = getCloudflareImageSrcSet(post.img);

  return (
    <article className="blog-archive__card">
      <Link
        to={postUrl}
        className="blog-archive__image-link"
        aria-label={`Read ${post.title}`}
      >
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1099px) calc(100vw - 64px), 420px"
          alt={post.title}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
        />
        {post.blogcat && (
          <span className="blog-archive__category-badge">
            {post.blogcat}
          </span>
        )}
      </Link>

      <div className="blog-archive__card-content">
        <div className="blog-archive__meta" aria-label="Article details">
          {post.date && (
            <span><CalendarIcon />{post.date}</span>
          )}
          {post.admin && (
            <span><UserIcon />{post.admin}</span>
          )}
          {post.comments !== undefined && (
            <span><CommentIcon />{post.comments} Comments</span>
          )}
          {post.readtime && (
            <span><ClockIcon />{post.readtime}</span>
          )}
        </div>

        <h2>
          <Link to={postUrl}>{post.title}</Link>
        </h2>

        {post.shortdesc && <p>{post.shortdesc}</p>}

        <Link to={postUrl} className="blog-archive__read-more">
          Read More <ArrowRightIcon />
        </Link>
      </div>
    </article>
  );
};

const Blog1 = ({ titleSeo, description, Author, Keyword, URL }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const archiveRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/data/blog.json", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load blog data (${response.status})`);
        }
        return response.json();
      })
      .then((blogPosts) => {
        setPosts(Array.isArray(blogPosts) ? blogPosts : []);
        setLoadError(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error loading blogs:", error);
          setLoadError(true);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  const categories = useMemo(() => {
    const categoryCounts = posts.reduce((counts, post) => {
      if (post.blogcat) {
        counts.set(post.blogcat, (counts.get(post.blogcat) || 0) + 1);
      }
      return counts;
    }, new Map());

    return [
      { name: "All", count: posts.length },
      ...Array.from(categoryCounts, ([name, count]) => ({ name, count })),
    ];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.blogcat === selectedCategory;
      const matchesSearch =
        !normalizedQuery ||
        post.title?.toLowerCase().includes(normalizedQuery) ||
        post.shortdesc?.toLowerCase().includes(normalizedQuery) ||
        post.blogcat?.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [currentPage, filteredPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const changePage = (page) => {
    setCurrentPage(page);
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    archiveRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "end-gap", totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, "start-gap", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "start-gap", currentPage - 1, currentPage, currentPage + 1, "end-gap", totalPages];
  }, [currentPage, totalPages]);

  const metatitle = String(titleSeo || "Discover The Ultimate Guide To Home Maintenance - FAJ Blogs");
  const metadescription = String(description || "Welcome to FAJ Services blog! Expert insights, tips, and tricks for homeowners.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Latest Blogs");
  const metaURL = String(URL || "https://www.fajservices.ae/blogs/");
  const metaImage = getCloudflareImageUrl("page_heading_1", "public");

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
        <meta name="keywords" content={metaKeyword} />
        <meta name="author" content={metaAuthor} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metaURL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>

      <section className="blog-archive" ref={archiveRef} aria-labelledby="blog-archive-title">
        <div className="blog-archive__container">
          <aside className="blog-archive__sidebar" aria-label="Filter blog articles">
            <div className="blog-archive__sidebar-inner">
              <p className="blog-archive__eyebrow">Explore Our Journal</p>
              <h2 id="blog-archive-title">Topics</h2>

              <label className="blog-archive__search" htmlFor="blog-search">
                <span className="visually-hidden">Search articles</span>
                <SearchIcon />
                <input
                  id="blog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search articles..."
                />
              </label>

              <nav className="blog-archive__categories" aria-label="Blog topics">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.name}
                    className={selectedCategory === category.name ? "is-active" : ""}
                    onClick={() => setSelectedCategory(category.name)}
                    aria-pressed={selectedCategory === category.name}
                  >
                    <span>{category.name === "All" ? "All Articles" : category.name}</span>
                    <strong>{category.count}</strong>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="blog-archive__main">
            <div className="blog-archive__heading">
              <div>
                <p className="blog-archive__eyebrow">Expert Advice</p>
                <h2>{selectedCategory === "All" ? "Latest Articles" : selectedCategory}</h2>
              </div>
              {!loading && !loadError && (
                <p className="blog-archive__result-count" aria-live="polite">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                </p>
              )}
            </div>

            {loading && (
              <p className="blog-archive__status" role="status">Loading articles...</p>
            )}

            {!loading && loadError && (
              <p className="blog-archive__status" role="alert">
                Articles could not be loaded. Please refresh the page and try again.
              </p>
            )}

            {!loading && !loadError && paginatedPosts.length === 0 && (
              <div className="blog-archive__empty">
                <SearchIcon />
                <h3>No Articles Found</h3>
                <p>Try a different keyword or reset the selected topic.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}

            {paginatedPosts.length > 0 && (
              <div className="blog-archive__grid">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug || post.id} post={post} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav className="blog-archive__pagination" aria-label="Blog pagination">
                <button
                  type="button"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {pageNumbers.map((page) =>
                  typeof page === "string" ? (
                    <span key={page} aria-hidden="true">...</span>
                  ) : (
                    <button
                      type="button"
                      key={page}
                      className={currentPage === page ? "is-active" : ""}
                      onClick={() => changePage(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </nav>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog1;
