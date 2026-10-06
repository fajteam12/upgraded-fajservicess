import { Helmet } from "react-helmet-async";

import BreadCumb from "../../../Common/BreadCumb";

import {
  AccordionSection,
  ActionCardsSection,
  ContentGridSection,
  FeatureDetailSection,
  PricingTableSection,
  ProblemSolutionSection,
  ProcessCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  BookingModal,
  BookingSection,
  useBookingRequest,
} from "../../../ServicePageSections";

import "../../../ServicePageSections/ServicePageSections.css";

import pageData from "../../../../data/servicePages/locations/ac/coverageArea";

const CoverageArea = ({
  titleSeo,
  description,
  Author,
  URL,
}) => {
  const {
    modalOpen,
    selectedItem,
    openBooking,
    closeBooking,
    bookingState,
  } = useBookingRequest({
    content: pageData.bookingData,
    contact: pageData.contactData,
  });

  const metatitle = String(
    titleSeo || pageData.seoData.title
  );

  const metadescription = String(
    description || pageData.seoData.description
  );

  const metaAuthor = String(
    Author || pageData.seoData.author
  );

  const metaURL = String(
    URL || pageData.seoData.url
  );

  const metaImage = String(
    pageData.seoData.image
  );

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>

        <meta
          name="description"
          content={metadescription}
        />

        <meta
          name="author"
          content={metaAuthor}
        />

        <meta
          name="robots"
          content={
            pageData.seoData.robots ||
            "index, follow"
          }
        />

        <link
          rel="canonical"
          href={metaURL}
        />

        <meta
          property="og:type"
          content={
            pageData.seoData.ogType ||
            "website"
          }
        />

        <meta
          property="og:locale"
          content={
            pageData.seoData.ogLocale ||
            "en_US"
          }
        />

        <meta
          property="og:title"
          content={metatitle}
        />

        <meta
          property="og:description"
          content={metadescription}
        />

        <meta
          property="og:image"
          content={metaImage}
        />

        <meta
          name="twitter:card"
          content={
            pageData.seoData.twitterCard ||
            "summary_large_image"
          }
        />

        <meta
          name="twitter:title"
          content={metatitle}
        />

        <meta
          name="twitter:description"
          content={metadescription}
        />

        <meta
          name="twitter:image"
          content={metaImage}
        />
      </Helmet>

      <main className="service-landing">
        <SplitHeroSection
          content={pageData.heroData}
          contact={pageData.contactData}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <TwoColumnInfoSection
          content={pageData.coverageIntroData}
          tone="white"
        />

        <ProcessCardsSection
          content={pageData.processData}
        />

        <ProblemSolutionSection
          content={pageData.commonIssuesData}
        />

        <ContentGridSection
          content={pageData.benefitsData}
          tone="soft"
        />

        <FeatureDetailSection
          content={pageData.inspectionData}
        />

        <PricingTableSection
          content={pageData.pricingData}
        />

        <SearchableDirectorySection
          content={pageData.serviceAreasData}
          tone="white"
          variant="compact"
        />

        <ActionCardsSection
          content={pageData.testimonialsData}
          tone="dark"
          columns="three"
          slider
          autoplay
          loop
        />

        <ActionCardsSection
          content={pageData.blogData}
          tone="soft"
          columns="three"
        />

        <AccordionSection
          content={pageData.faqsData}
          tone="white"
        />

        <BookingSection
          content={pageData.bookingData}
          bookingState={bookingState}
        />
      </main>
    </>
  );
};

export default CoverageArea;