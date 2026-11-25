import BreadCumb from "../Components/Common/BreadCumb";
import ApplianceCategories from "../Components/Services/homeappliances/ApplianceCategories";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/homeAppliances";

export default function HomeAppliancesPage() {
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
        {/* Section 1: Top Hero */}
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

        {/* Section 3: Explore Our Services (Pill Buttons) */}
        <ApplianceCategories />

        {/* Section 4: Primary Service Offerings */}
        <PricingCardsSection
          content={pageData.primaryServices}
          onAction={openBooking}
          tone="soft"
        />

        {/* Section 5: Specialized Repair Categories (Oven Technician Left, Copy Right) */}
        <SplitMediaSection
          content={pageData.specializedCategories}
          contact={pageData.contact}
          tone="white"
          imageSide="left"
          showWhatsapp={true}
          showPhone={false}
        />

        {/* Section 6: Why Choose FAJ Appliance Repair Service? (White Left, Dark Navy Right) */}
        <TwoColumnInfoSection
          content={pageData.serviceOverview}
          tone="soft"
        />

        {/* Section 7: Common Appliance Repair Issues We Fix (Numbered Grid 01-06) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="white"
          columns="three"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 8: The Benefits Of Home Appliances Service Dubai (Stats Left, Cards Right) */}
        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        {/* Section 9: FAJ Service Promise (6 Action Cards + CHAT NOW) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          contact={pageData.contact}
          tone="white"
          columns="three"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        {/* Section 10: Approved Brand Partners */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="soft"
          onAction={openBooking}
        />

        {/* Section 11: Preventive Protection / Flexible Maintenance Plans */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 12: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="white"
        />

        {/* Section 13: News & Updates (Blog Articles + View All Articles) */}
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        {/* Section 14: Home Appliances FAQs (Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 15: Book Your Service - Modern Booking Form (Bottom) */}
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
