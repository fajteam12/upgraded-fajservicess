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

        <ContentCardSection content={pageData.introduction} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <ContentCardSection content={pageData.professionalMaintenance} tone="dark" />

        <ActionCardsSection
          content={pageData.shop}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection 
          content={pageData.testimonials} 
          tone="dark" 
          columns="three" 
          slider 
          autoplay 
          loop />

        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        <AccordionSection content={pageData.faqs} tone="white" />

        <BookingSection
          content={pageData.booking}
          bookingState={bookingState}
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
