import BreadCumb from "../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ChecklistSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
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
        {/* Section 1: Hero with Explore Services Bar (Screenshots 1 & 2) */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Cleaning & Descaling (Screenshot 2) */}
        <ChecklistSection
          content={pageData.cleaningDescaling}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 3: Shop for Coffee Machines, Equipment, and Accessories (Screenshot 3) */}
        <ActionCardsSection
          content={pageData.shop}
          contact={pageData.contact}
          tone="white"
          columns="three"
        />

        {/* Section 4: Why Choose Our Coffee Machine Maintenance Services (Screenshot 4) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          contact={pageData.contact}
          tone="soft"
          columns="three"
        />

        {/* Section 5: The Most Common Problems of Coffee Machines (Screenshot 5) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="white"
          columns="four"
        />

        {/* Section 6: News & Updates (Screenshot 6) */}
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        {/* Section 7: Customer Testimonials (Screenshot 7) */}
        <TestimonialsSection content={pageData.testimonials} tone="white" />

        {/* Section 8: Coffee Machine FAQs (Second Last) */}
        <AccordionSection 
          content={pageData.faqs} 
          contact={pageData.contact}
          tone="soft" 
        />

        {/* Section 9: Book Coffee Machine Appointment (Bottom Form) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
          bookingState={bookingState}
          onAction={openBooking}
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
