import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  EmbeddedVideoSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/commercialDishwasher";

export default function CommercialDishwasherServices() {
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
        {/* Section 1: Hero (Screenshot 1) */}
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

        {/* Section 2: Dishwasher Technical Inspection Fee (Screenshot 2) */}
        <ContentCardSection
          content={pageData.inspectionFee}
          tone="soft"
          plain={false}
        />

        {/* Section 3: Dishwasher Repair and Service Near You / Video (Screenshot 3) */}
        <EmbeddedVideoSection
          content={pageData.video}
          tone="white"
          videoSide="left"
        />

        {/* Section 4: Why is Dishwasher Maintenance Service Important in Dubai? (Screenshot 4) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="four"
        />

        {/* Section 5: The Most Common Problems with Dishwashers (Screenshot 5) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        {/* Section 6: Here Are The Services We Offer for the Dishwasher (Screenshot 6) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="four"
          tone="soft"
        />

        {/* Section 7: The Benefits of Appliances Service Dubai (Screenshot 7) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="white"
        />

        {/* Section 8: Choose Us for Reliable, Exceptional Service (Screenshot 8) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="soft"
        />

        {/* Section 9: We Specialise in Dishwasher Services for the Following Brands (Screenshot 9) */}
        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          tone="white"
        />

        {/* Section 10: Commercial Dishwasher Maintenance Contracts (Screenshot 10) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 11: News & Updates (Screenshot 11) */}
        <ActionCardsSection
          content={pageData.blogs}
          columns="three"
          tone="soft"
        />

        {/* Section 12: Customer Testimonials (Screenshot 12) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="white"
        />

        {/* Section 13: Commercial Dishwasher FAQs (Screenshot 13 — Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 14: Book A Dishwasher Service Appointment Form (Screenshot 14 — Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
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
