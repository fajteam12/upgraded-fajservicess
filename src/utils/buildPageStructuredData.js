function formatAnswerText(ans) {
  if (!ans) return "";
  if (typeof ans === "string") {
    return ans
      .replace(/\\r\\n/g, "\n")
      .replace(/\\n/g, "\n")
      .replace(/<[^>]*>/g, "")
      .trim();
  }
  if (Array.isArray(ans)) {
    return ans
      .map((block) => {
        if (typeof block === "string") return block;
        if (block?.type === "bullets" && Array.isArray(block.items)) {
          return block.items.map((it) => `- ${it}`).join("\n");
        }
        if (block?.type === "numbered" && Array.isArray(block.items)) {
          return block.items.map((it, i) => `${i + 1}. ${it}`).join("\n");
        }
        return block?.text || "";
      })
      .filter(Boolean)
      .join("\n");
  }
  if (typeof ans === "object") {
    if (ans.type === "bullets" && Array.isArray(ans.items)) {
      return ans.items.map((it) => `- ${it}`).join("\n");
    }
    if (ans.type === "numbered" && Array.isArray(ans.items)) {
      return ans.items.map((it, i) => `${i + 1}. ${it}`).join("\n");
    }
    return ans.text || "";
  }
  return String(ans);
}

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
        name: item.question || item.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: formatAnswerText(item.answer || item.desc),
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
