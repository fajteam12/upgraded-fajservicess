import BreadCumb from "../../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/homeApplianceRepair";

export default function FreestandingHomeAppliancesRepairService() {
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
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <TwoColumnInfoSection
          content={pageData.serviceCenter}
          tone="soft"
        />

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

        <ActionCardsSection
          content={pageData.benefits}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.featuredBrands}
          onAction={openBooking}
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.otherBrands}
          onAction={openBooking}
          tone="dark"
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
