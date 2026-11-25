import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import KitchenEmergencyPpmSection from "../../Components/Services/kitchenequipment/KitchenEmergencyPpmSection";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  EmbeddedVideoSection,
  MediaGallerySection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/kitchenEquipmentRepair";

export default function KitchenEquipmentRepair() {
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
        {/* Section 1: Hero */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
          showPhone={false}
          showCall={false}
          badges={pageData.hero.badges}
        />

        {/* Breadcrumb navigation */}
        <BreadCumb />

        {/* Section 2: Catering Equipment Maintenance & PPM Callouts */}
        <KitchenEmergencyPpmSection
          tone="soft"
          expressContent={pageData.callouts.express}
          ppmContent={pageData.callouts.ppm}
        />

        {/* Section 3: Service Video */}
        <EmbeddedVideoSection
          content={pageData.video}
          tone="white"
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 4: Why Restaurant Kitchen Equipment Maintenance Important */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 5: The Most Common Problems (01-08) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 6: Here Are the Services We Offer (4 cards + banner) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="soft"
          columns="four"
          onAction={openBooking}
        />

        {/* Section 7: Service Deliverables / Benefits */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 8: FAJ Service Promise (6 cards) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 9: Catering Equipment Specialisations / Brand Partners */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="white"
          onAction={openBooking}
          showCta={false}
        />

        {/* Section 10: Maintenance Plans (Dark Section) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 11: Gallery (6 photos) */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="soft"
        />

        {/* Section 12: News & Updates (3 blog articles) */}
        <ActionCardsSection
          content={pageData.articles}
          columns="three"
          tone="white"
        />

        {/* Section 13: Customer Testimonials (3 reviews) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 14: Kitchen Equipment Repair FAQs (Second to last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 15: Modern Booking Form (Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
          bookingState={bookingState}
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
