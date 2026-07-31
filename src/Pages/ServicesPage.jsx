import React, { memo } from "react";
import { Helmet } from "react-helmet-async";

import Breadcrumb from "../Components/Common/BreadCumbServ";
import PageHero from "../Components/PageHero/PageHero";
import servicesShowcaseData from "../data/servicesShowcaseData";
import ServicesShowcase from "../Components/ServicesShowcase/ServicesShowcase";
import maintenanceBenefitsData from "../data/maintenanceBenefitsData";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const SEO_DEFAULTS = {
  title: "HVAC, Refrigeration, Kitchen Equipment Maintenance Company in Dubai",
  description:
    "FAJ has been the best maintenance company in Dubai since 2010, providing services for HVAC, appliances, refrigeration, kitchen equipment, and annual maintenance contracts.",
  author: "FAJ Technical Services L.L.C",
  keywords: "HVAC maintenance company Dubai, appliance repair Dubai, refrigeration repair Dubai",
  url: "https://www.fajservices.ae/services/",
  image:
    "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif",
};

function ServicesPage({
  titleSeo = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  Author = SEO_DEFAULTS.author,
  Keyword = SEO_DEFAULTS.keywords,
  URL = SEO_DEFAULTS.url,
  Image = SEO_DEFAULTS.image,

  heroEyebrow = "Our Services",
  heroTitle = "FAJ: Dubai’s Premier Maintenance Services Company in Dubai",
  heroDescription = "Since 2010, we have been providing repair and maintenance services for HVAC systems, appliances, refrigeration, and kitchen equipment, as well as annual contract services in Dubai, Sharjah, and Abu Dhabi.",
}) {
  const metaTitle = String(titleSeo || SEO_DEFAULTS.title);
  const metaDescription = String(description || SEO_DEFAULTS.description);
  const metaAuthor = String(Author || SEO_DEFAULTS.author);
  const metaKeywords = String(Keyword || SEO_DEFAULTS.keywords);
  const metaUrl = String(URL || SEO_DEFAULTS.url);
  const metaImage = String(Image || SEO_DEFAULTS.image);

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
			</Helmet>

			<main className="servicepage">
				<PageHero
					eyebrow="Our Services"
					title="FAJ: Dubai’s Premier Maintenance Services Company in Dubai"
					description="Since 2010, we have been providing repair and maintenance services for HVAC systems, appliances, refrigeration, and kitchen equipment, as well as annual contract services in Dubai, Sharjah, and Abu Dhabi."
					backgroundImage={{
						id: "new-services-page-images/services-page-hero",
						src: "/img/new-services-page-images/services-page-hero.webp",
						alt: "",
						width: 1920,
						height: 500,
					}}
				/>

				<Breadcrumb />

				<ServicesShowcase
					eyebrow="FAJ Technical Services"
					title="Services"
					description="Choose any category to preview its details. Explore our specialized repair and maintenance solutions."
					services={servicesShowcaseData}
				/>

				<MaintenanceBenefits {...maintenanceBenefitsData} />

				<CalloutSection {...calloutSectionData} />
			</main>
		</>
	);
}

export default memo(ServicesPage);