import BreadCumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  PageMetadata,
  PlanCardsSection,
  SplitHeroSection,
  ContentCardSection,
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
        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <ContentCardSection content={pageData.introduction} tone="white" />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="soft"
        />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ContentCardSection content={pageData.professionalMaintenance} tone="soft" />

        <ActionCardsSection
          content={pageData.shop}
          tone="white"
          columns="three"
        />

        <ActionCardsSection 
          content={pageData.testimonials} 
          tone="soft" 
          columns="three" 
          slider 
          autoplay 
          loop />

        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
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
