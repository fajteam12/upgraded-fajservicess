import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
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
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/kitchenEquipmentRepair";

export default function KitchenEquipmentRepair() {
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

        <ContentCardSection content={pageData.inspectionPolicy} tone="soft" />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ContentCardSection content={pageData.ppmServices} tone="soft" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="white"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="white"
          columns="three"
          onAction={openBooking}
        />

        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.specialisations}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        <SearchableDirectorySection
          content={pageData.brands}
          tone="white"
          onAction={openBooking}
        />

        <TestimonialsSection content={pageData.testimonials} tone="soft" />

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
