import BreadCumb from "../Components/Common/BreadCumb";
import HeaderForm from "../Components/Headeform/HeaderForm";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  EmbeddedVideoSection,
  ModernBookingSection,
  PageMetadata,
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
        {/* Section 1: Hero with Highlights and Explore Our Services */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Best Commercial Air Conditioning Maintenance Services in Dubai */}
        <ContentCardSection
          content={pageData.commercialMaintenance}
          contact={pageData.contact}
          tone="soft"
          plain={true}
        />

        {/* Section 3: Professional AC Maintenance & Video Showcase */}
        <EmbeddedVideoSection
          content={pageData.video}
          contact={pageData.contact}
          videoSide="left"
          tone="white"
        />

        {/* Section 4: Shop for Air Conditioner, Spare Parts and Accessories (9 Cards) */}
        <SearchableDirectorySection
          content={pageData.shop}
          contact={pageData.contact}
          tone="soft"
          variant="compact"
          columns="three"
        />

        {/* Section 5: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="white"
        />

        {/* Section 6: News & Updates (3 Blog Cards) */}
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        {/* Section 7: FAQs & Contact Channels (Second-to-Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 8: Booking Appointment Form (Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
          bookingState={bookingState}
          onAction={openBooking}
          tone="soft"
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
