import BreadCumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SplitHeroSection,
  useBookingRequest,
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

        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <ChecklistSection
          content={pageData.cleaningDescaling}
          tone="soft"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.shop}
          tone="soft"
          columns="four"
        />

        <EmbeddedVideoSection content={pageData.video} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />


        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="three"
          slider
          autoplay
          loop
        />

        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        <AccordionSection 
          content={pageData.faqs} 
          tone="white" 
          />

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
