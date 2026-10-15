import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
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
  useBookingRequest,
  TestimonialsSection,
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
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          showPhone={false}
          showCall={false}
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <ContentCardSection content={pageData.serviceOverview} tone="white" />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <ContentCardSection content={pageData.ppmServices} tone="white" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.maintenanceServices}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        <ChecklistSection content={pageData.contractInclusions} tone="white" />

        <ActionCardsSection
          content={pageData.coverage}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        <TestimonialsSection content={pageData.testimonials} tone="white" />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection content={pageData.faqs} tone="soft" />

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
