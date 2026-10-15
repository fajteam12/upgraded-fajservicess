import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
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
  PricingCardsSection,
  SearchableDirectorySection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/coffeeMachineServiceCenter";

export default function CoffeeMachineServiceCenterInDubai() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />
        <BreadCumb />
        <ContentCardSection content={pageData.overview} contact={pageData.contact} tone="soft" />
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} tone="white" />
        <TwoColumnInfoSection content={pageData.serviceOverview} contact={pageData.contact} tone="soft" />
        <EmbeddedVideoSection content={pageData.video} tone="white" />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="soft" columns="three" />
        <NumberedGridSection content={pageData.commonProblems} contact={pageData.contact} tone="white" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="soft" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <ActionCardsSection content={pageData.whyChooseUs} contact={pageData.contact} tone="white" columns="three" />
        <SearchableDirectorySection content={pageData.brands} contact={pageData.contact} tone="soft" onAction={openBooking} />
        <TestimonialsSection content={pageData.testimonials} tone="white" />
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection content={pageData.faqs} tone="soft" />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="white" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
