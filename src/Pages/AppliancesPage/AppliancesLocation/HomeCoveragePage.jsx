import { lazy, Suspense } from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceCategories from "../../../Components/Services/homeappliances/ApplianceCategories";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../../../Components/MaintenanceBenefits/MaintenanceBenefits")
);
const MaintenanceBenefits = (props) => (
  <Suspense fallback={null}>
    <MaintenanceBenefitsLazy {...props} />
  </Suspense>
);

import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  FeatureDetailSection,
  MediaGallerySection,
  ModernBookingSection,
  PageMetadata,
  ProblemSolutionSection,
  ProcessCardsSection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/locations/appliances/coverageArea";

export default function HomeCoveragePage({
  titleSeo,
  description,
  Author,
  URL,
}) {
  const {
    modalOpen,
    selectedItem,
    openBooking,
    closeBooking,
    bookingState,
  } = useBookingRequest({
    content: pageData.booking,
    contact: pageData.contact,
  });

  const customSeo = {
    ...pageData.seo,
    title: titleSeo || pageData.seo.title,
    description: description || pageData.seo.description,
    author: Author || pageData.seo.author,
    canonical: URL || pageData.seo.canonical,
    url: URL || pageData.seo.url,
  };

  const whatsappCta = {
    phone: "",
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello%20FAJ%20Technical%20Services`,
  };

  return (
    <>
      <PageMetadata
        seo={customSeo}
        contact={pageData.contact}
        faqItems={pageData.faqs.items}
        structuredData={pageData.structuredData}
      />

      <main className="service-landing">
        {/* Section 1: Hero */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          buttonStyle="classic"
          contentWidth={pageData.hero.contentWidth || "52%"}
          showPhone={false}
          showCall={false}
          showWhatsapp={true}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Coverage Overview Across Prime Dubai Locations */}
        <TwoColumnInfoSection
          content={pageData.coverageIntro}
          tone="white"
        />

        {/* Section 3: Our Process Quick and Efficient (5 Steps) */}
        <ProcessCardsSection
          content={pageData.process}
        />

        {/* Section 4: Common Issues in Home Appliances Maintenance */}
        <ProblemSolutionSection
          content={pageData.commonIssues}
        />

        {/* Section 5: The Benefits of Professional Home Appliances Services */}
        <MaintenanceBenefits
          eyebrow={pageData.benefits.eyebrow}
          title={pageData.benefits.title}
          description={pageData.benefits.description}
          stats={pageData.benefits.stats}
          benefits={pageData.benefits.items}
          tone="soft"
          showCta={false}
        />

        {/* Section 6: The Importance of Home Appliances Inspection (2 Alternating Feature Cards) */}
        <FeatureDetailSection
          content={pageData.inspection}
        />

        {/* Section 7: Explore Our Services (Pills with icons) */}
        <ApplianceCategories />

        {/* Section 8: We Are Home Appliance Repair Service Centers (Split Media) */}
        <SplitMediaSection
          content={pageData.serviceCenterOverview}
          tone="soft"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          cta={whatsappCta}
        />

        {/* Section 9: Why Choose FAJ Appliance Repair Service? (5 Value Pillar Cards) */}
        <ActionCardsSection
          content={pageData.whyChooseUsPillars}
          tone="white"
          columns="three"
          slider={false}
          showCta={false}
        />

        {/* Section 10: Our Service Areas Across Dubai (Directory Grid) */}
        <SearchableDirectorySection
          content={pageData.serviceAreas}
          tone="white"
          variant="compact"
        />

        {/* Section 10: Gallery (6 Authentic Photos) */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="soft"
        />

        {/* Section 11: What Our Clients Say (Testimonials Carousel) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="white"
          autoplay={true}
          loop={true}
        />

        {/* Section 12: News & Updates (3 Modern Blog Cards) */}
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        {/* Section 13: FAQs (Left Support Sidebar + Right Accordion) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 14: Book An Appointment (Modern Booking Form) */}
        <ModernBookingSection
          content={pageData.booking}
          bookingState={bookingState}
          tone="soft"
        />
      </main>

      <BookingModal
        isOpen={modalOpen}
        onClose={closeBooking}
        item={selectedItem}
        content={pageData.booking}
        contact={pageData.contact}
      />
    </>
  );
}
