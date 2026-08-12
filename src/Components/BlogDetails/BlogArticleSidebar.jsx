import { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../../utils/cloudflareImages";
import "./BlogArticleSidebar.css";

const FORM_ENDPOINT = "https://formsubmit.co/info@fajservices.ae";
const EMPTY_FORM = { name: "", phone: "", service: "" };

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 12h4l2-6 4 12 2-6h6" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 5.5h5A3 3 0 0 1 12 8.5V20a3 3 0 0 0-3-3H4ZM20 5.5h-5a3 3 0 0 0-3 3V20a3 3 0 0 1 3-3h5Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 3.5 8.8 3l2 4.8-2 1.3a14 14 0 0 0 6.1 6.1l1.3-2 4.8 2-.5 2.2a2 2 0 0 1-2.2 1.5A16 16 0 0 1 5.1 5.7a2 2 0 0 1 1.5-2.2Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

function BlogArticleSidebar({ currentPost = null, posts = [] }) {
  const currentCategory = currentPost?.blogcat || "General Maintenance";
  const [form, setForm] = useState(() => ({
    ...EMPTY_FORM,
    service: currentCategory,
  }));
  const [status, setStatus] = useState({ submitting: false, message: "", error: false });

  useEffect(() => {
    setForm((current) => ({ ...current, service: currentCategory }));
  }, [currentCategory]);

  const serviceOptions = useMemo(() => Array.from(new Set([
    currentCategory,
    "AC Maintenance",
    "Home Appliance Repair",
    "Coffee Machine Service",
    "Kitchen Equipment Repair",
    "Refrigeration Equipment Repair",
  ])), [currentCategory]);

  const recommendedPosts = useMemo(() => posts
    .filter((post) => post.slug !== currentPost?.slug)
    .slice(0, 4), [currentPost?.slug, posts]);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitCallback = async (event) => {
    event.preventDefault();
    setStatus({ submitting: true, message: "", error: false });

    const payload = new FormData();
    payload.append("Name", form.name.trim());
    payload.append("Phone", form.phone.trim());
    payload.append("Service", form.service);
    payload.append("Article", currentPost?.title || "Blog article");
    payload.append("_subject", "Blog article callback request");
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("_cc", "faisaljuma.techservices@gmail.com");
    payload.append("_from_name", "FAJ Blog Callback");
    payload.append("page_url", window.location.href);

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });
      setForm({ ...EMPTY_FORM, service: currentCategory });
      setStatus({
        submitting: false,
        error: false,
        message: "Thank you. Your callback request has been sent.",
      });
    } catch {
      setStatus({
        submitting: false,
        error: true,
        message: "We could not send your request. Please call us directly.",
      });
    }
  };

  return (
    <div className="blog-article-sidebar__stack">
      <section className="blog-sidebar-consult" aria-labelledby="blog-consult-title">
        <p className="blog-sidebar-eyebrow"><ActivityIcon /> Immediate Assistance</p>
        <h2 id="blog-consult-title">Consult an Expert</h2>
        <p>
          Have a technical appliance emergency? Send your contact details below,
          and our Dubai customer support agent will call you back shortly.
        </p>

        <form onSubmit={submitCallback} className="blog-sidebar-consult__form">
          <label>
            <span className="visually-hidden">Your full name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={updateForm}
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </label>
          <label>
            <span className="visually-hidden">Your phone number</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={updateForm}
              placeholder="Your phone number (e.g. +971...)"
              autoComplete="tel"
              required
            />
          </label>
          <label>
            <span className="visually-hidden">Required service</span>
            <select name="service" value={form.service} onChange={updateForm}>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </label>

          {status.message && (
            <p className={`blog-sidebar-consult__status${status.error ? " is-error" : ""}`} role="status">
              {status.message}
            </p>
          )}

          <button type="submit" disabled={status.submitting}>
            {status.submitting ? "Sending Request..." : "Request Instant Callback"}
          </button>
        </form>
      </section>

      {recommendedPosts.length > 0 && (
        <section className="blog-sidebar-recommended" aria-labelledby="recommended-articles-title">
          <h2 id="recommended-articles-title"><BookIcon /> Recommended Articles</h2>
          <div className="blog-sidebar-recommended__list">
            {recommendedPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}/`}>
                <span className="blog-sidebar-recommended__image">
                  <img
                    src={getCloudflareImageUrl(post.img, "mobile")}
                    srcSet={getCloudflareImageSrcSet(post.img)}
                    sizes="64px"
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="blog-sidebar-recommended__content">
                  <small>{post.blogcat}</small>
                  <strong>{post.title}</strong>
                  {post.date && <span><CalendarIcon />{post.date}</span>}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="blog-sidebar-hotline" aria-labelledby="blog-hotline-title">
        <span className="blog-sidebar-hotline__label">Emergency Line</span>
        <h2 id="blog-hotline-title">Need Quick Repairs?</h2>
        <p>
          Our certified appliance technicians provide responsive breakdown support
          across Dubai, Abu Dhabi and Sharjah.
        </p>
        <a href="tel:+971507464712">
          <PhoneIcon /> Call +971 50 746 4712
        </a>
      </section>
    </div>
  );
}

export default memo(BlogArticleSidebar);
