export default function buildPageStructuredData({
  seo,
  contact,
  faqItems = [],
}) {
  const graph = [
    {
      "@type": seo.schemaType || "LocalBusiness",
      name: seo.businessName,
      image: seo.image,
      url: seo.url,
      telephone: contact.phoneDisplay,
      areaServed: seo.areaServed?.map((name) => ({
        "@type": "City",
        name,
      })),
      serviceType: seo.serviceType,
    },
  ];

  if (faqItems.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (seo.breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: seo.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
