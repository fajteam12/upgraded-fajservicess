import {
  AboutHeroSection,
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
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        <TwoColumnInfoSection
          content={pageData.repairOverview}
          contact={pageData.contact}
          tone="soft"
        />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ChecklistSection content={pageData.maintenanceImportance} tone="soft" />

        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          columns="four"
          tone="white"
        />

        <ContentGridSection content={pageData.servicesOffered} tone="soft" />

        <NumberedGridSection
          content={pageData.benefits}
          columns="three"
          tone="white"
        />

        <NumberedGridSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          contact={pageData.contact}
          onAction={openBooking}
          tone="white"
        />

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
