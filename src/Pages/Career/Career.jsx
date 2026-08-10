import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../Components/Common/BreadCumb";
import PageHero from "../../Components/PageHero/PageHero";
import CareerOpenings from "../../Components/Career/CareerOpenings";
import { careerJobs, careerPageData } from "../../data/careerJobsData";
import "./css/career.css";

const Career = () => {
  const title = "Careers at FAJ Technical Services | Jobs in Dubai";
  const description =
    "Explore technical, HVAC, appliance repair, coffee machine, customer service, and sales career opportunities at FAJ Technical Services in Dubai.";
  const canonical = "https://www.fajservices.ae/career/";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="FAJ Technical Services L.L.C" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <PageHero
        eyebrow={careerPageData.eyebrow}
        title={careerPageData.title}
        minHeight="clamp(300px, 31vw, 400px)"
        backgroundImage={{
					id: "careers-new-design-images/careers-hero",
					src: "/img/careers-new-design-images/careers-hero.webp",
					alt: "FAJ team and technical services operations",
					width: 1920,
					height: 700,
				}}
        overlay={0.82}
      />
      <Breadcrumb />
      <CareerOpenings jobs={careerJobs} content={careerPageData} />
    </>
  );
};

export default Career;