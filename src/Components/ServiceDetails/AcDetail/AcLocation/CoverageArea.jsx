import { Helmet } from "react-helmet-async";

import BreadCumb from "../../../Common/BreadCumb";

import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  ContentGridSection,
  FeatureDetailSection,
  PricingTableSection,
  ProblemSolutionSection,
  ProcessCardsSection,
  SearchableDirectorySection,
  TwoColumnInfoSection,
  BookingModal,
  ModernBookingSection,
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
        <AboutHeroSection
          content={pageData.heroData}
          contact={pageData.contactData}
          buttonStyle="classic"
          contentWidth={pageData.heroData.contentWidth || "52%"}
          showPhone={false}
          showCall={false}
          showWhatsapp={true}
          tone="white"
        />

        <BreadCumb />

        <TwoColumnInfoSection
          content={pageData.coverageIntroData}
          tone="soft"
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
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.testimonialsData}
          tone="white"
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
          contact={pageData.contactData}
          tone="white"
        />

        <ModernBookingSection
          content={pageData.bookingData}
          bookingState={bookingState}
          onBookNow={openBooking}
          tone="soft"
        />

        <BookingModal
          isOpen={modalOpen}
          onClose={closeBooking}
          item={selectedItem}
          content={pageData.bookingData}
          contact={pageData.contactData}
        />
      </main>
    </>
  );
};

export default CoverageArea;
