import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/ovenRepair";

export default function OvenRepair() {
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

        <ContentCardSection content={pageData.serviceOverview} tone="white" />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <TwoColumnInfoSection content={pageData.inspectionPolicy} tone="soft" />

        <EmbeddedVideoSection content={pageData.video} tone="dark" />

        <ContentCardSection content={pageData.ppmServices} tone="white" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="dark"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="white"
          columns="three"
          onAction={openBooking}
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          tone="soft"
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="two"
        />

        <AccordionSection content={pageData.faqs} tone="white" />

        <BookingSection
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
