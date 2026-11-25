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
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/commercialLaundryEquipment";

export default function CommercialLaundaryEquipmentPage() {
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

        {/* Section 3: Overview Card */}
        <ContentCardSection content={pageData.overview} tone="soft" />

        {/* Section 4: Split Media / Video Section */}
        <EmbeddedVideoSection
          content={pageData.video}
          contact={pageData.contact}
          tone="white"
          videoSide="left"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello%20FAJ%2C%20I%27m%20interested%20in%20Commercial%20Laundry%20Equipment%20Maintenance%20Services`,
          }}
        />

        {/* Section 5: PPM Schedule Importance (6 cards) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 6: Warning Signals (Numbered Grid 01-08) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="white"
          columns="four"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 7: Why Choose FAJ Laundry Systems? */}
        <SplitMediaSection
          content={pageData.servicesOffered}
          tone="soft"
          imageSide="right"
          headerAbove={true}
        />

        {/* Section 8: The Benefits of Laundry Equipment's Service Dubai */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 9: FAJ Service Promise (6 Action Cards + CHAT NOW) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          contact={pageData.contact}
          tone="soft"
          columns="three"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 10: Approved Brand Partners */}
        <SearchableDirectorySection
          content={pageData.featuredBrands}
          onAction={openBooking}
          tone="white"
        />

        {/* Section 11: Service Contracts */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 12: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 13: News & Updates */}
        <ActionCardsSection
          content={pageData.articles}
          columns="three"
          tone="white"
        />

        {/* Section 14: FAQs (Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 15: Modern Booking Form (Bottom) */}
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
