import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/commercialRefrigerationMaintenance";

export default function CommercialRefrigerationMaintence() {
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

        <TwoColumnInfoSection content={pageData.serviceOverview} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <TwoColumnInfoSection content={pageData.servicePolicy} tone="soft" />

        <EmbeddedVideoSection content={pageData.video} tone="dark" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="dark"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="soft"
          columns="four"
          onAction={openBooking}
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.specialisations}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="three"
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
