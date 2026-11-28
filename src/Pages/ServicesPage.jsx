import React, { memo } from "react";
import { Helmet } from "react-helmet-async";

import Breadcrumb from "../Components/Common/BreadCumbServ";
import ServicesHeroBanner from "../Components/ServicesGrid/ServicesHeroBanner";
import ServicesGrid from "../Components/ServicesGrid/ServicesGrid";
import servicesPageData from "../data/servicesPageData";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

function ServicesPage({
  titleSeo = servicesPageData.seo.title,
  description = servicesPageData.seo.description,
  Author = servicesPageData.seo.author,
  Keyword = servicesPageData.seo.keywords,
  URL = servicesPageData.seo.url,
  Image = servicesPageData.seo.image,
}) {
  const metaTitle = String(titleSeo);
  const metaDescription = String(description);
  const metaAuthor = String(Author);
  const metaKeywords = String(Keyword);
  const metaUrl = String(URL);
  const metaImage = String(Image);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FAJ Technical Services L.L.C",
    "image": metaImage,
    "url": metaUrl,
    "telephone": "+971 50 746 4712",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": servicesPageData.seo.rating.ratingValue,
      "reviewCount": servicesPageData.seo.rating.reviewCount,
      "bestRating": "5",
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Sharjah" },
      { "@type": "City", "name": "Abu Dhabi" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={metaAuthor} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metaUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="services-hub-page">
        {/* Figma Hero Banner */}
        <ServicesHeroBanner
          title={servicesPageData.hero.title}
          bgImage={servicesPageData.hero.bgImage}
          mobileBgImage={servicesPageData.hero.mobileBgImage}
        />

        {/* Breadcrumb Navigation */}
        <Breadcrumb />

        {/* 15 Service Cards Directory Grid */}
        <ServicesGrid
          intro={servicesPageData.intro}
          services={servicesPageData.services}
        />

        {/* Bottom Callout Section */}
        <CalloutSection {...calloutSectionData} />
      </main>
    </>
  );
}

export default memo(ServicesPage);
