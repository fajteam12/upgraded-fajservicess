import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet } from "react-helmet-async";
import PageHero from "../Components/PageHero/PageHero";
import ContactBooking from "../Components/ContactBooking/ContactBooking";
import FaqAccordion from "../Components/FaqAccordion/FaqAccordion";
import ContactMap from "../Components/ContactMap/ContactMap";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutContactSectionData } from "../Components/CalloutSection/calloutSectionData";

const ContactPage = ({ titleSeo, description, Author, Keyword, URL }) => {
	// For SEO
	const metatitle = String(
		titleSeo || "Contact Us for Service Center Near Me and Repairs | FAJ Dubai",
	);
	const metadescription = String(
		description ||
			"Reach out to FAJ Technical Service for any inquiries or to schedule maintenance services, & discover how we can help you with your home / office needs.",
	);
	const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
	const metaImage = String(
		Image ||
			"https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/page_heading_1/public",
	);
	const metaKeyword = String(Keyword || "FAJ");
	const metaURL = String(URL || "https://www.fajservices.ae/contact-us/");

	return (
		<>
			<Helmet>
				<title>{metatitle}</title>
				<meta name="description" content={metadescription} />
				<meta name="keywords" content={metaKeyword} />
				<meta name="author" content={metaAuthor} />
				<meta name="robots" content="index, follow" />

				<link rel="canonical" href={metaURL} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:title" content={metatitle} />
				<meta property="og:description" content={metadescription} />
				<meta property="og:url" content={metaURL} />
				<meta property="og:image" content={metaImage} />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metatitle} />
				<meta name="twitter:description" content={metadescription} />
				<meta name="twitter:image" content={metaImage} />
			</Helmet>
			<div>
				<PageHero
					eyebrow="Get In Touch"
					title="Contact Us"
					minHeight="clamp(300px, 31vw, 400px)"
					backgroundImage={{
						id: "new-contact-page-images/contact-page-hero",
						src: "/img/new-contact-page-images/contact-page-hero.webp",
						alt: "FAJ team and technical services operations",
						width: 1920,
						height: 700,
					}}
					overlay={0.82}
				/>

				<BreadCumb bgImg="img/page_heading_1.avif" Title="Contact"></BreadCumb>

				<ContactBooking />

				<FaqAccordion />

				<ContactMap />

				<CalloutSection {...calloutContactSectionData} />
			</div>
		</>
	);
};

export default ContactPage;
