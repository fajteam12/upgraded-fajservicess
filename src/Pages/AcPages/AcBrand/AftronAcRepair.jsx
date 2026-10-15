import BreadCumb from "../../../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  CalloutBannerSection,
  ChecklistSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  ResourceCTASection,
  SearchableDirectorySection,
  SplitHeroSection,
  useBookingRequest,
  TestimonialsSection
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/brands/ac/aftron";

export default function DaikinAcRepair() {
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
        structuredData={pageData.structured}
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
          content={pageData.maintenance}
          tone="soft"
        />

        <ChecklistSection
          content={pageData.maintenanceSigns}
          tone="white"
        />

        <CalloutBannerSection
          content={pageData.repairPrice}
          onAction={openBooking}
        />

        <ChecklistSection
          content={pageData.maintenanceImportance}
          tone="soft"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="white"
          columns="four"
        />

        <ChecklistSection
          content={pageData.benefits}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.systemTypes}
          tone="soft"
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.coverage}
          tone="white"
          variant="compact"
        />

        <ResourceCTASection
          content={pageData.energyTips}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.acProperties}
          tone="white"
          columns="four"
        />

        <TestimonialsSection content={pageData.testimonials} tone="white" />

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