import BreadCumb from "../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  useBookingRequest,
  TestimonialsSection,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/coffeeMachine";

export default function CoffeeMachine() {
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
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <ChecklistSection
          content={pageData.cleaningDescaling}
          contact={pageData.contact}
          tone="white"
        />

        <ActionCardsSection
          content={pageData.shop}
          contact={pageData.contact}
          tone="soft"
          columns="four"
        />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          contact={pageData.contact}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

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
