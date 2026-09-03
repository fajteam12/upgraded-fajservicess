import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  DetailColumnsSection,
  ResourceCTASection,
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
import pageData from "../data/servicePages/acService";

export default function AcServiceInDubai() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        <SplitHeroSection content={pageData.hero} contact={pageData.contact} onPrimaryAction={openBooking} />
        <BreadCumb />
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} />
        <PlanCardsSection content={pageData.contracts} onAction={openBooking} />
        <TwoColumnInfoSection content={pageData.serviceOverview} tone="soft" />
        <EmbeddedVideoSection content={pageData.video} tone="dark" />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="white" columns="three" />
        <NumberedGridSection content={pageData.commonProblems} tone="dark" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="white" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <TwoColumnInfoSection content={pageData.cleaningService} tone="dark" />
        <ActionCardsSection content={pageData.whyChooseUs} tone="white" columns="three" />
        <SearchableDirectorySection content={pageData.brands} tone="soft" onAction={openBooking} />
        <DetailColumnsSection content={pageData.sparePartsRepair} tone="dark" />
        <ResourceCTASection content={pageData.energyTips} tone="soft" />
        <ActionCardsSection content={pageData.testimonials} tone="dark" columns="three" slider={true} autoplay={true} loop={true} />
        <AccordionSection content={pageData.faqs} tone="white" />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="soft" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
