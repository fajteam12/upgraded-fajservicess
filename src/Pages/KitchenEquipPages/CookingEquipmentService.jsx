import BreadCumb from "../../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  CalloutBannerSection,
  ContentGridSection,
  EmbeddedVideoSection,
  MetricCardsSection,
  NoticeBarSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  useBookingRequest,
  ContentCardSection
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
        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <NoticeBarSection content={pageData.notice} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <ContentCardSection content={pageData.emergencyServices} tone="soft" />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="dark"
        />

        <ContentCardSection content={pageData.warranty} tone="white" />

        <MetricCardsSection content={pageData.maintenanceImportance} />

        <ActionCardsSection
          content={pageData.commonProblems}
          columns="four"
        />

        <ActionCardsSection
          content={pageData.maintenanceServices}
          onAction={openBooking}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="dark"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
        />

        <ContentGridSection content={pageData.serviceDetails} />

        <SearchableDirectorySection content={pageData.brands} />

        <ActionCardsSection content={pageData.testimonials} tone="dark" columns="three" slider autoplay loop />

        <AccordionSection content={pageData.faqs} />

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
