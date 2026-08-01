import Brand1 from "../Components/Brand/Brand1";
import Process from "../Components/Process/Process";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageHero from "../Components/PageHero/PageHero";
import Breadcrumb from "../Components/Common/BreadCumb";
import StatementImageSplit from "../Components/StatementImageSplit/StatementImageSplit";
import {
	visionStatementData,
	missionStatementData,
} from "../data/visionMissionData";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const PhoneCallIcon = ({ size = 24, color = "currentColor" }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill={color}
		aria-hidden="true"
	>
		<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v2h2v2h2V5h2v2h2V3h-2V1h-2v2h-2V1h-2v2z" />
	</svg>
);

const OurVisionOurMissionPage = () => {
	return (
		<>
			<Helmet>
				<title>FAJ Vision & Mission | Excellence in Technical Services</title>
				<meta
					name="description"
					content="Explore FAJ's vision and mission to deliver trusted, innovative, and customer-focused AC, appliance, and maintenance services across Dubai and UAE"
				/>
				<meta name="keywords" content="About FAJ Group" />
				<meta name="author" content="FAJ Technical Services L.L.C." />
				<meta name="robots" content="index, follow" />
				<link
					rel="canonical"
					href="https://www.fajservices.ae/our-vision-and-mission/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta
					property="og:title"
					content="FAJ Vision & Mission | Excellence in Technical Services"
				/>
				<meta
					property="og:description"
					content="Explore FAJ's vision and mission to deliver trusted, innovative, and customer-focused AC, appliance, and maintenance services across Dubai and UAE"
				/>
				<meta
					property="og:url"
					content="https://www.fajservices.ae/our-vision-and-mission/"
				/>
			</Helmet>
			<PageHero
				eyebrow="Our Purpose"
				title="Our Vision & Mission"
				minHeight="clamp(300px, 31vw, 400px)"
				backgroundImage={{
					id: "new-about-page-images/our-mission-hero",
					src: "/img/new-about-page-images/our-mission-hero.webp",
					alt: "FAJ team and technical services operations",
					width: 1920,
					height: 700,
				}}
				overlay={0.82}
			/>
			<Breadcrumb />

			<StatementImageSplit
				{...visionStatementData}
				imageHeight="clamp(480px, 43vw, 640px)"
			/>

			<StatementImageSplit
				{...missionStatementData}
				imageHeight="clamp(580px, 48vw, 7000px)"
			/>

			<CalloutSection {...calloutSectionData} />
		</>
	);
};

export default OurVisionOurMissionPage;
