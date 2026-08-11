import { memo, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import buildPageStructuredData from "../../utils/buildPageStructuredData";

function PageMetadata({ seo, contact, faqItems = [] }) {
  const structuredData = useMemo(
    () => buildPageStructuredData({ seo, contact, faqItems }),
    [contact, faqItems, seo]
  );

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.author && <meta name="author" content={seo.author} />}
      <meta name="robots" content={seo.robots || "index, follow"} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

export default memo(PageMetadata);
