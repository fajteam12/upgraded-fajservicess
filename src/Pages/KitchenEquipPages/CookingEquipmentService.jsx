import BreadCumb from "../../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  ContentGridSection,
  EmbeddedVideoSection,
  MetricCardsSection,
  NoticeBarSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/cookingEquipmentService";

export default function CookingEquipmentService() {
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

        <NoticeBarSection content={pageData.notice} />

        <ContentCardSection content={pageData.emergencyServices} tone="white" />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <ContentCardSection content={pageData.warranty} tone="white" />

        <MetricCardsSection content={pageData.maintenanceImportance} tone="soft" />

        <ActionCardsSection
          content={pageData.commonProblems}
          columns="four"
          tone="white"
        />

        <ActionCardsSection
          content={pageData.maintenanceServices}
          onAction={openBooking}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="soft"
        />

        <ContentGridSection content={pageData.serviceDetails} tone="white" />

        <SearchableDirectorySection content={pageData.brands} tone="soft" />

        <TestimonialsSection content={pageData.testimonials} tone="white" />

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
