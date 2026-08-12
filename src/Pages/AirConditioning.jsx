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
  SpotlightSection,
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

        <SpotlightSection content={pageData.introduction} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <ActionCardsSection
          content={pageData.problems}
          tone="white"
          columns="two"
        />

        <ActionCardsSection
          content={pageData.services}
          onAction={openBooking}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="dark"
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
