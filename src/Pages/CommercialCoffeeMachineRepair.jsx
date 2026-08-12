import {
  AccordionSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  ContentCardSection,
  ContentGridSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import BreadCumb from "../Components/Common/BreadCumb";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/commercialCoffeeMachineRepair";

export default function CommercialCoffeeMachineRepair() {
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

        <ContentCardSection content={pageData.repairOverview} />

        <EmbeddedVideoSection content={pageData.video} />

        <TwoColumnInfoSection
          content={pageData.maintenanceInformation}
        />

        <ChecklistSection content={pageData.maintenanceImportance} />

        <NumberedGridSection
          content={pageData.commonProblems}
          columns="four"
        />

        <ContentGridSection content={pageData.servicesOffered} />

        <NumberedGridSection
          content={pageData.benefits}
          columns="three"
        />

        <NumberedGridSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="dark"
        />

        <SearchableDirectorySection content={pageData.brands} />

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
