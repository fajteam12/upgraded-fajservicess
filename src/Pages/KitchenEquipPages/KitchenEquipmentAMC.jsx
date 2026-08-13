import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SplitHeroSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/kitchenEquipmentAmc";

export default function KitchenEquipmentAMC() {
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

        <ContentCardSection content={pageData.ppmServices} tone="soft" />

        <EmbeddedVideoSection content={pageData.video} tone="dark" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="white"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="dark"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.maintenanceServices}
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

        <ChecklistSection content={pageData.contractInclusions} tone="soft" />

        <ActionCardsSection
          content={pageData.coverage}
          tone="white"
          columns="three"
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
