import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import OvenEmergencyPpmSection from "../../Components/Services/ovenrepair/OvenEmergencyPpmSection";
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
import pageData from "../../data/servicePages/ovenRepair";

export default function OvenRepair() {
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
          tone="white"
          showPhone={false}
          showCall={false}
          badges={pageData.hero.badges}
        />

        {/* Breadcrumb navigation */}
        <BreadCumb />

        {/* Section 2: Express & PPM Callouts (Screenshot 2) */}
        <OvenEmergencyPpmSection
          tone="soft"
          expressContent={pageData.callouts.express}
          ppmContent={pageData.callouts.ppm}
        />

        {/* Section 3: Service Video (Screenshot 3) */}
        <EmbeddedVideoSection
          content={pageData.video}
          tone="white"
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 4: Preventative Oven Care / Why Oven Maintenance Important (Screenshot 4 - 5 cards 3 & 2) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 5: Troubleshooting Guide 01-08 (Screenshot 5) */}
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

        {/* Section 6: Comprehensive Commercial Oven Repair Services in Dubai (Screenshot 6 - 4 cards + banner) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="soft"
          columns="four"
          onAction={openBooking}
        />

        {/* Section 7: Service Deliverables / Benefits (Screenshot 7 - Stats + 6 cards) */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 8: FAJ Service Promise (Screenshot 8 - 6 cards) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 9: Approved Brand Partners (Screenshot 9 - 8 cards) */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="white"
          onAction={openBooking}
          showCta={false}
        />

        {/* Section 10: Maintenance Plans (Screenshot 10 - Dark Section) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 11: Gallery (Screenshot 11 - 6 photos) */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="soft"
        />

        {/* Section 12: News & Updates (Screenshot 12 - 3 blog articles) */}
        <ActionCardsSection
          content={pageData.articles}
          columns="three"
          tone="white"
        />

        {/* Section 13: Customer Testimonials (Screenshot 13 - 3 reviews) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 14: Oven Repair FAQs (Screenshot 14 - Second to last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 15: Modern Booking Form (Screenshot 15 - Bottom) */}
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
