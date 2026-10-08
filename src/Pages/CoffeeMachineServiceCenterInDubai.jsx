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
  PricingCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
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
        <SplitHeroSection content={pageData.hero} contact={pageData.contact} onPrimaryAction={openBooking} />
        <BreadCumb />
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} />
        <PlanCardsSection content={pageData.contracts} onAction={openBooking} tone="soft" />
        <TwoColumnInfoSection content={pageData.serviceOverview} tone="white" />
        <EmbeddedVideoSection content={pageData.video} tone="soft" />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="white" columns="three" />
        <NumberedGridSection content={pageData.commonProblems} tone="soft" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="white" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <ActionCardsSection content={pageData.whyChooseUs} tone="white" columns="three" />
        <SearchableDirectorySection content={pageData.brands} tone="soft" onAction={openBooking} />
        <ActionCardsSection content={pageData.testimonials} tone="white" columns="three" slider={true} autoplay={true} loop={true} />
        <AccordionSection content={pageData.faqs} tone="soft" />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="white" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
