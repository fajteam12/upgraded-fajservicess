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
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/meatGrinderRepair";

export default function MeatGrinderRepair() {
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

        <ContentCardSection content={pageData.repairOverview} />

        <EmbeddedVideoSection content={pageData.video} />

        <TwoColumnInfoSection
          content={pageData.inspectionPolicy}
          tone="soft"
        />

        <ChecklistSection content={pageData.maintenanceChecks} tone="white" />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="dark"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="two"
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          dark={false}
        />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="two"
        />

        <AccordionSection content={pageData.faqs} />

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
