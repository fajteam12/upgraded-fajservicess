import { memo, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import buildPageStructuredData from "../../utils/buildPageStructuredData";

function PageMetadata({
  seo,
  contact,
  faqItems = [],
  structuredData,
}) {
  const generatedStructuredData = useMemo(
    () =>
      buildPageStructuredData({
        seo,
        contact,
        faqItems,
      }),
    [contact, faqItems, seo]
  );

  const finalStructuredData = useMemo(() => {
    if (!structuredData) {
      return generatedStructuredData;
    }

    const customGraph = structuredData["@graph"] || [];

    const generatedGraph =
      generatedStructuredData?.["@graph"] || [];

    const generatedFaq = generatedGraph.find(
      (item) => item?.["@type"] === "FAQPage"
    );

    const customGraphWithoutFaq = customGraph.filter(
      (item) => item?.["@type"] !== "FAQPage"
    );

    return {
      "@context":
        structuredData["@context"] || "https://schema.org",
      "@graph": [
        ...customGraphWithoutFaq,
        ...(generatedFaq ? [generatedFaq] : []),
      ],
    };
  }, [generatedStructuredData, structuredData]);

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta
        name="description"
        content={seo.description}
      />

      {seo.keywords && (
        <meta
          name="keywords"
          content={seo.keywords}
        />
      )}

      {seo.author && (
        <meta
          name="author"
          content={seo.author}
        />
      )}

      <meta
        name="robots"
        content={seo.robots || "index, follow"}
      />

      <link
        rel="canonical"
        href={seo.url}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={seo.title}
      />

      <meta
        property="og:description"
        content={seo.description}
      />

      <meta
        property="og:url"
        content={seo.url}
      />

      {seo.image && (
        <meta
          property="og:image"
          content={seo.image}
        />
      )}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={seo.title}
      />

      <meta
        name="twitter:description"
        content={seo.description}
      />

      {seo.image && (
        <meta
          name="twitter:image"
          content={seo.image}
        />
      )}

      {finalStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      )}
    </Helmet>
  );
}

export default memo(PageMetadata);