import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/kitchenEquipmentMaintenance";

export default function KitchenEquipmentPage() {
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

        <TwoColumnInfoSection content={pageData.ppm} tone="soft" />

        <EmbeddedVideoSection content={pageData.video} />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="four"
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.specialisedCategories}
          tone="soft"
          columns="two"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="soft"
          columns="three"
        />

        <AccordionSection content={pageData.faqs} tone="white" />

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
