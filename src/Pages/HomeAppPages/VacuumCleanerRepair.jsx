import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
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
  SearchableDirectorySection,
  SplitListSection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/robotVacuumCleaner";

export default function VacuumCleanerRepair() {
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
          showPhone={false}
          showCall={false}
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <TwoColumnInfoSection content={pageData.serviceOverview} tone="white" />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <SplitListSection content={pageData.maintenanceImportance} tone="white" />

        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
          tone="soft"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="three"
        />

        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
        />

        <ContentCardSection
          content={pageData.repairOverview}
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
          tone="white"
        />

        <TestimonialsSection content={pageData.testimonials} tone="soft" />

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
