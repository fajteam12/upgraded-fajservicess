import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  ResourceCTASection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
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
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />
        <BreadCumb />
        <ContentCardSection content={pageData.overview} tone="soft" />
        <TwoColumnInfoSection content={pageData.serviceOverview} contact={pageData.contact} tone="white" />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="white" columns="three" />
        <TwoColumnInfoSection content={pageData.peaceOfMind} tone="soft" />
        <ResourceCTASection content={pageData.repairPrice} tone="white" />
        <NumberedGridSection content={pageData.commonProblems} contact={pageData.contact} tone="soft" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="white" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <ActionCardsSection content={pageData.whyChooseUs} tone="white" columns="three" />
        <TwoColumnInfoSection content={pageData.amcImportance} tone="soft" />
        <TwoColumnInfoSection content={pageData.amcIncluded} tone="white" />
        <SearchableDirectorySection content={pageData.brands} tone="soft" onAction={openBooking} />
        <ResourceCTASection content={pageData.energyTips} tone="white" />
        <TestimonialsSection content={pageData.testimonials} tone="white" />
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="white" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
