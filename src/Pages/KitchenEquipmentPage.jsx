import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import KitchenEquipmentCategories from "../Components/Services/kitchenequipment/KitchenEquipmentCategories";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/kitchenEquipmentMaintenance";

export default function KitchenEquipmentPage() {
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
          showWhatsapp={true}
        />

        {/* Section 2: Breadcrumb */}
        <BreadCumb />

        {/* Section 3: Explore Our Services (5 Pills) */}
        <KitchenEquipmentCategories tone="soft" />

        {/* Section 4: Operational Continuity / B2B Overview */}
        <ContentCardSection content={pageData.overview} tone="white" />

        {/* Section 5: Essential Kitchen Longevity (4 Cards) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          columns="four"
          tone="soft"
        />

        {/* Section 6: Service Deliverables / Benefits */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 7: Troubleshooting Guide (Numbered Grid 01-06) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="soft"
          columns="three"
          showCta={true}
          cta={{
            phone: `+${pageData.contact.phone}`,
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 8: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="white"
        />

        {/* Section 9: News & Updates */}
        <ActionCardsSection
          content={pageData.articles}
          columns="three"
          tone="soft"
        />

        {/* Section 10: FAQs (Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 11: Modern Booking Form (Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
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
