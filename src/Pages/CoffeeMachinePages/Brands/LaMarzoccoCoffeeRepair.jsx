import BreadCumb from "../../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  MediaGallerySection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/brands/coffeeMachine/laMarzocco";

export default function LaMarzoccoCoffeeRepair() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs?.items} />
      <main className="service-landing">
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero?.contentWidth || "50%"}
          tone="white"
        />
        <BreadCumb />
        <TwoColumnInfoSection content={pageData.overview} contact={pageData.contact} tone="soft" />
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} tone="white" />
        <TwoColumnInfoSection content={pageData.serviceOverview} contact={pageData.contact} tone="soft" />
        <EmbeddedVideoSection content={pageData.video} tone="white" />
        <ActionCardsSection content={pageData.maintenanceImportance} tone="soft" columns="four" />
        <NumberedGridSection content={pageData.commonProblems} contact={pageData.contact} tone="white" columns="four" />
        <ActionCardsSection content={pageData.servicesOffered} tone="soft" columns="three" onAction={openBooking} />
        <MaintenanceBenefits {...pageData.benefits} />
        <ActionCardsSection content={pageData.whyChooseUs} contact={pageData.contact} tone="white" columns="three" />
        <SearchableDirectorySection content={pageData.brands} contact={pageData.contact} tone="soft" onAction={openBooking} />
        {pageData.gallery && <MediaGallerySection content={pageData.gallery} tone="white" />}
        <TestimonialsSection content={pageData.testimonials} tone="soft" />
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />
        {pageData.news && (
          <ActionCardsSection
            content={pageData.news}
            tone="soft"
            columns="three"
          />
        )}
        <AccordionSection content={pageData.faqs} tone="soft" />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="white" />
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
