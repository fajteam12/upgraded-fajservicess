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
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/brands/ac/daikool";

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
          content={pageData.maintenance}
          tone="white"
        />

        <ChecklistSection
          content={pageData.maintenanceSigns}
          tone="soft"
        />

        <CalloutBannerSection
          content={pageData.repairPrice}
          onAction={openBooking}
        />

        <ChecklistSection
          content={pageData.maintenanceImportance}
          tone="white"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="dark"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="soft"
          columns="four"
        />

        <ChecklistSection
          content={pageData.benefits}
          tone="white"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.systemTypes}
          tone="white"
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.coverage}
          tone="soft"
          variant="compact"
        />

        <ResourceCTASection
          content={pageData.energyTips}
          tone="dark"
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

        <AccordionSection
          content={pageData.faqs}
          tone="white"
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