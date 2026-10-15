import BreadCumb from "../../../Components/Common/BreadCumb";

import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  CalloutBannerSection,
  ChecklistSection,
  ContentCardSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  useBookingRequest,
  TestimonialsSection
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
        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking} tone="white" />

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

        <TestimonialsSection content={pageData.testimonials} tone="white" />

        <SearchableDirectorySection
          content={pageData.brandsDirectory}
          tone="white"
          variant="compact"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        <BookingSection
          content={pageData.booking}
          bookingState={bookingState}
          tone="white"
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