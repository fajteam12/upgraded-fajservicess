import BreadCumb from "../../../Components/Common/BreadCumb";

import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  CalloutBannerSection,
  ChecklistSection,
  ContentCardSection,
  MediaGallerySection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";

import "../../../Components/ServicePageSections/ServicePageSections.css";

import pageData from "../../../data/servicePages/brands/ac/brandPage";

export default function BrandsPage() {
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

  return (
    <>
      <PageMetadata
        seo={pageData.seo}
        contact={pageData.contact}
        faqItems={pageData.faqs.items}
      />

      <main className="service-landing">
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        <ContentCardSection
          content={pageData.brandsOverview}
          tone="soft"
        />

        <NumberedGridSection
          content={pageData.process}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.commonIssues}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.services}
          tone="white"
          columns="three"
          showCta={true}
          cta={pageData.services.cta}
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="soft"
          columns="three"
        />

        <ChecklistSection
          content={pageData.inspection}
          tone="white"
        />

        <CalloutBannerSection
          content={pageData.practicalTips}
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.acProperties}
          tone="soft"
          columns="four"
        />

        {pageData.gallery && (
          <MediaGallerySection
            content={pageData.gallery}
            tone="white"
          />
        )}

        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {pageData.news && (
          <ActionCardsSection
            content={pageData.news}
            tone="white"
            columns="three"
          />
        )}

        <SearchableDirectorySection
          content={pageData.brandsDirectory}
          tone="soft"
          variant="compact"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />

        <ModernBookingSection
          content={pageData.booking}
          bookingState={bookingState}
          tone="soft"
        />
      </main>

      <BookingModal
        content={pageData.booking}
        open={modalOpen}
        onClose={closeBooking}
        selectedItem={selectedItem}
        bookingState={bookingState}
      />
    </>
  );
}