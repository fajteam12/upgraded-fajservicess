import { Helmet } from "react-helmet-async";
import Breadcrumb from "../Components/Common/BreadCumb";
import PageHero from "../Components/PageHero/PageHero";
import ContentImageSplit from "../Components/ContentImageSplit/ContentImageSplit";
import whoWeAreStoryData from "../data/whoWeAreData";
import ImpactStats from "../Components/ImpactStats/ImpactStats";
import whoWeAreStatsData from "../data/whoWeAreStatsData";
import ValueCards from "../Components/ValueCards/ValueCards";
import whoWeAreValuesData from "../data/whoWeAreValuesData";
import React from "react";
import CalloutSection from "../Components/CalloutSection/CalloutSection";
import { calloutSectionData } from "../Components/CalloutSection/calloutSectionData";

const WhoWeArePage = () => {
  return (
    <>
      <Helmet>
        <title>Who We Are | FAJ Technical Services L.L.C</title>
        <meta
          name="description"
          content="Learn about FAJ Technical Services L.L.C, a trusted UAE provider of AC, appliance, refrigeration, installation, and maintenance solutions since 2010."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.fajservices.ae/who-we-are/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Who We Are | FAJ Technical Services L.L.C"
        />
        <meta
          property="og:description"
          content="Trusted technical repair, installation, and maintenance expertise across the UAE since 2010."
        />
        <meta
          property="og:url"
          content="https://www.fajservices.ae/who-we-are/"
        />
      </Helmet>

      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        minHeight="clamp(300px, 31vw, 400px)"
        backgroundImage={{
          id: "about_img_1",
          src: "",
          alt: "FAJ Technical Services team at work",
          width: 1920,
          height: 700,
        }}
        overlay={0.8}
      />

      <Breadcrumb />

      <ContentImageSplit 
        {...whoWeAreStoryData}
        imageHeight="clamp(500px, 60vw, 780px)"
      />

      <ImpactStats {...whoWeAreStatsData} />

      <ValueCards {...whoWeAreValuesData} />

      <CalloutSection {...calloutSectionData} />
    </>
  );
};

export default WhoWeArePage;