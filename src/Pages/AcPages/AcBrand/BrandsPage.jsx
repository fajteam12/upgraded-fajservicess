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
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <ContentCardSection
          content={pageData.brandsOverview}
          tone="white"
        />

        <NumberedGridSection
          content={pageData.process}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.commonIssues}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.services}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="white"
          columns="three"
        />

        <ChecklistSection
          content={pageData.inspection}
          tone="soft"
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

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="three"
          slider
          autoplay
          loop
        />

        <SearchableDirectorySection
          content={pageData.brandsDirectory}
          tone="white"
          variant="compact"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        <BookingSection
          content={pageData.booking}
          bookingState={bookingState}
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