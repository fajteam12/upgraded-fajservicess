import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/acAnnualMaintenance";

export default function AcAnnualMaintenanceContract() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        <SplitHeroSection content={pageData.hero} contact={pageData.contact} onPrimaryAction={openBooking} />
        <BreadCumb />
        <TwoColumnInfoSection content={pageData.serviceOverview} tone="soft" />
        <PlanCardsSection content={pageData.contracts} onAction={openBooking} />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="white" columns="three" />
        <NumberedGridSection content={pageData.commonProblems} tone="dark" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="white" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <ActionCardsSection content={pageData.whyChooseUs} tone="dark" columns="three" />
        <SearchableDirectorySection content={pageData.brands} tone="soft" onAction={openBooking} />
        <ActionCardsSection content={pageData.testimonials} tone="dark" columns="three" />
        <AccordionSection content={pageData.faqs} tone="white" />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="soft" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
