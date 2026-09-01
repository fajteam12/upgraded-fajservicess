import Breadcrumb from "../Components/Common/BreadCumb";
import B2bServicesPageDetail from "../Components/ServiceDetails/B2bServicesPageDetail";
import PageHero from "../Components/PageHero/PageHero";
import B2BEnterpriseServices from "../Components/B2BEnterpriseContent/B2BEnterpriseContent";
import B2BClients from "../Components/B2BClients/B2BClients";

const B2bServicesPagePage = () => {
	return (
		
		<div className="detail-page-B2bServicesPage">
			{/* SEO meta for B2B services page */}
			<B2bServicesPageDetail />
			<PageHero
				eyebrow="Corporate Solutions"
				title="B2B Services"
				minHeight="clamp(300px, 31vw, 400px)"
				backgroundImage={{
					id: "b2b-new-design-images/b2b-hero",
					src: "/img/b2b-new-design-images/b2b-hero.webp",
					alt: "FAJ team and technical services operations",
					width: 1920,
					height: 700,
				}}
				overlay={0.82}
			/>
			<Breadcrumb />
      <B2BEnterpriseServices />
		</div>
	);
};

export default B2bServicesPagePage;
