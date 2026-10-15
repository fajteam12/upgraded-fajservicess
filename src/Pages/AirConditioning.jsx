import BreadCumb from "../Components/Common/BreadCumb";
import HeaderForm from "../Components/Headeform/HeaderForm";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  PageMetadata,
  PlanCardsSection,
  AboutHeroSection,
  ContentCardSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/airConditioning";

export default function AirConditioning() {
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
        <HeaderForm />

        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <ContentCardSection content={pageData.introduction} contact={pageData.contact} tone="white" />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ContentCardSection content={pageData.professionalMaintenance} contact={pageData.contact} tone="soft" />

        <SearchableDirectorySection
          content={pageData.shop}
          contact={pageData.contact}
          tone="white"
          variant="compact"
        />

        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="soft"
        />

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
