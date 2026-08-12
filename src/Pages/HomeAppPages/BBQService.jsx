import BreadCumb from "../../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  MetricCardsSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  SplitListSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/barbecueRepair";

export default function BBQService() {
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

        <PlanCardsSection content={pageData.contracts} onAction={openBooking} />

        <SplitListSection content={pageData.process} tone="white" />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <MetricCardsSection content={pageData.maintenanceImportance} />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.preparationTips}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.emergencyService}
          onAction={openBooking}
          tone="dark"
          columns="three"
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

        <BookingSection content={pageData.booking} bookingState={bookingState} />
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
