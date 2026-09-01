import { memo } from "react";
import { Helmet } from "react-helmet-async";

import HomeHero from "../Components/Hero/HomeHero";
import AboutCompany from "../Components/AboutCompany/AboutCompany";
import PremiumServices from "../Components/PremiumServices/PremiumServices";
import ServiceContractCard from "../Components/ServiceContractCard/ServiceContractCard";
import {
	annualMaintenanceData,
	refrigerationServicesData,
	kitchenEquipmentData,
	coffeeMachinesData,
} from "../Components/ServiceContractCard/serviceContractsData";
import CorePrinciples from "../Components/CorePrinciples/CorePrinciples";
import { homeCorePrinciplesData } from "../data/corePrinciplesData";
import TradingSection from "../Components/TradingSection/TradingSection";
import { tradingSectionData } from "../Components/TradingSection/tradingSectionData";
import NewsUpdates from "../Components/NewsUpdates/NewsUpdates";
import { newsUpdatesData } from "../Components/NewsUpdates/newsUpdatesData";
import ClientTestimonials from "../Components/ClientTestimonials/ClientTestimonials";
import { clientTestimonialsData } from "../Components/ClientTestimonials/clientTestimonialsData";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const DEFAULT_SEO = {
	title:
		"FAJ | Installation, Repair and Maintenance Company in Dubai",
	description:
		"FAJ Established in 2010, / with experts Air Conditioner, Refrigeration, Kitchen Equipment, Appliances installation, Repair & Maintenance Services in Dubai.",
	author: "FAJ Technical Services L.L.C",
	keywords:
		"AC repair Dubai, AC service Dubai, washing machine repair, refrigerator repair, freezer repair, appliance repair Dubai, appliance maintenance, appliance installation",
	url: "https://www.fajservices.ae/",
};

const schemaData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id":
				"https://www.fajservices.ae/#website",
			name: "FAJ Technical Services L.L.C",
			url: "https://www.fajservices.ae/",
			potentialAction: {
				"@type": "SearchAction",
				target: {
					"@type": "EntryPoint",
					urlTemplate:
						"https://www.fajservices.ae/?s={search_term_string}",
				},
				"query-input":
					"required name=search_term_string",
			},
		},
		{
			"@type": "Review",
			"@id":
				"https://www.fajservices.ae/#review1",
			itemReviewed: {
				"@id":
					"https://www.fajservices.ae/#organization",
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Bassam Sh",
			},
			reviewBody:
				"I am very satisfied with their prompt, efficient and cordial service. The technician was professional, on time, responsive and reasonably priced.",
		},
		{
			"@type": "Review",
			"@id":
				"https://www.fajservices.ae/#review2",
			itemReviewed: {
				"@id":
					"https://www.fajservices.ae/#organization",
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Laura Terrero González",
			},
			reviewBody:
				"I am very satisfied with their services. They are professional, easy to communicate with, effective, clean and reasonably priced.",
		},
		{
			"@type": "Review",
			"@id":
				"https://www.fajservices.ae/#review3",
			itemReviewed: {
				"@id":
					"https://www.fajservices.ae/#organization",
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Abdullah Kiani",
			},
			reviewBody:
				"My AC was not cooling properly. The FAJ technician provided clean, efficient and professional service.",
		},
		{
			"@type": "Review",
			"@id":
				"https://www.fajservices.ae/#review4",
			itemReviewed: {
				"@id":
					"https://www.fajservices.ae/#organization",
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Usman Ali",
			},
			reviewBody:
				"FAJ did a great job fixing our fridge and washing machine. The technician arrived on time and completed the work professionally.",
		},
		{
			"@type": "Review",
			"@id":
				"https://www.fajservices.ae/#review5",
			itemReviewed: {
				"@id":
					"https://www.fajservices.ae/#organization",
			},
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Dunja Lazović",
			},
			reviewBody:
				"Fast and reliable service. Our washing machine was assessed, repaired and returned promptly.",
		},
	],
};

const Home = ({
	titleSeo = DEFAULT_SEO.title,
	description = DEFAULT_SEO.description,
	Author = DEFAULT_SEO.author,
	Keyword = DEFAULT_SEO.keywords,
	URL = DEFAULT_SEO.url,
}) => {
	const canonicalUrl = URL.replace(/\/?$/, "/");

	return (
		<>
			<Helmet>
				<title>{titleSeo}</title>

				<meta
					name="description"
					content={description}
				/>

				<meta
					name="keywords"
					content={Keyword}
				/>

				<meta
					name="author"
					content={Author}
				/>

				<meta
					name="robots"
					content="index, follow"
				/>

				<link
					rel="canonical"
					href={canonicalUrl}
				/>

				<meta
					property="og:type"
					content="website"
				/>

				<meta
					property="og:locale"
					content="en_US"
				/>

				<meta
					property="og:title"
					content={titleSeo}
				/>

				<meta
					property="og:description"
					content={description}
				/>

				<meta
					property="og:url"
					content={canonicalUrl}
				/>

				<script type="application/ld+json">
					{JSON.stringify(schemaData)}
				</script>
			</Helmet>

			<main className="homepage">
				<HomeHero />

				<AboutCompany
					eyebrow="About Our Company"
					title="Speedy Services."
					highlightedTitle="Quality Results."
					description="FAJ Technical Services L.L.C has delivered trusted repair, maintenance, and installation solutions across Dubai since 2010. Our experienced technicians provide dependable support for homes and commercial properties."
					imageSrc="/img/home-speedy-services.webp"
					imageAlt="FAJ Technical Services maintenance team serving residential and commercial properties in Dubai"
					imageWidth={1200}
					imageHeight={1500}
					imagePosition="center center"
					experienceValue="16+"
					experienceTitle="Years"
					experienceLabel="Experience"
					ctaLabel="Discover More"
					ctaTo="/who-we-are/"
				/>

				<PremiumServices />

				<ServiceContractCard
					{...annualMaintenanceData}
					contentWidth={55}
				/>

				<ServiceContractCard
					{...refrigerationServicesData}
					contentWidth={55}
				/>

				<ServiceContractCard
					{...kitchenEquipmentData}
					contentWidth={55}
				/>

				<ServiceContractCard
					{...coffeeMachinesData}
					contentWidth={55}
				/>

				<CorePrinciples {...homeCorePrinciplesData} />

				<TradingSection
					{...tradingSectionData}
				/>

				<NewsUpdates
					{...newsUpdatesData}
				/>

				<ClientTestimonials
					{...clientTestimonialsData}
				/>

				<CalloutSection
					{...calloutSectionData}
				/>
			</main>
		</>
	);
};

export default memo(Home);