import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
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
  PricingCardsSection,
  SearchableDirectorySection,
  ServiceTabsNav,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/coffeeMachine";

export default function CoffeeMachine() {
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
          content={pageData.servicePolicy}
          tone="white"
        />

        <ChecklistSection content={pageData.maintenanceImportance} />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="dark"
          columns="two"
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
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
