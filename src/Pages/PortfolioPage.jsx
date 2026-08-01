import BreadcrumbPort from "../Components/Common/BreadCumbPort";
import PortfolioDetail from "../Components/ServiceDetails/PortfolioDetail";
import PageHero from "../Components/PageHero/PageHero";
import ClientLogoMarquee from "../Components/ClientLogoMarquee/ClientLogoMarquee";
import { portfolioClientsData } from "../data/portfolioClientsData";
import LandmarkProjects from "../Components/LandmarkProjects/LandmarkProjects";
import { landmarkProjectsData } from "../data/landmarkProjectsData";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const PortfolioPage = () => {
	return (
		<div className="detail-page-portfolio">
			<PageHero
				eyebrow="Our Work"
				title="Our Portfolio"
				minHeight="clamp(300px, 31vw, 400px)"
				backgroundImage={{
					id: "new-about-page-images/our-portfolio-hero",
					src: "/img/new-about-page-images/our-portfolio-hero.webp",
					alt: "FAJ team and technical services operations",
					width: 1920,
					height: 700,
				}}
				overlay={0.82}
			/>

			<BreadcrumbPort />

      <ClientLogoMarquee {...portfolioClientsData} />

      <LandmarkProjects {...landmarkProjectsData} />

      <CalloutSection {...calloutSectionData} />
		</div>
	);
};

export default PortfolioPage;
