import { Helmet } from "react-helmet-async";
import PageHero from "../Components/PageHero/PageHero";
import Breadcrumb from "../Components/Common/BreadCumb";
import CorePrinciples from "../Components/CorePrinciples/CorePrinciples";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { ourHistoryCorePrinciplesData } from "../data/corePrinciplesData";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const OurHistoryPage = () => {
  return (
    <>
      <Helmet>
        <title>FAJ History | From AC Maintenance to UAE Service Leader</title>
        <meta
          name="description"
          content="Established in 2010 as an AC maintenance firm in Dubai, FAJ has grown into a trusted provider of comprehensive technical services across the UAE."
        />
        <meta name="keywords" content="FAJ history, technical services UAE" />
        <meta name="author" content="FAJ Technical Services L.L.C." />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.fajservices.ae/our-history/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="FAJ History | From AC Maintenance to UAE Service Leader"
        />
        <meta
          property="og:description"
          content="Explore the FAJ journey from a Dubai technical services company to a trusted UAE service provider."
        />
        <meta
          property="og:url"
          content="https://www.fajservices.ae/our-history/"
        />
      </Helmet>

      <PageHero
        eyebrow="Our Journey"
        title="Our History"
        minHeight="clamp(300px, 31vw, 400px)"
        backgroundImage={{
          id: "new-about-page-images/our-history-hero",
          src: "/img/new-about-page-images/our-history-hero.webp",
          alt: "FAJ team and technical services operations",
          width: 1920,
          height: 700,
        }}
        overlay={0.82}
      />

      <Breadcrumb />

      <CorePrinciples {...ourHistoryCorePrinciplesData} />

      <CalloutSection {...calloutSectionData} />
    </>
  );
};

export default OurHistoryPage;