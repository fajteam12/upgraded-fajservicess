import { lazy, Suspense } from "react";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BeforeAfterSection,
  BookingModal,
  ChecklistSection,
  DetailColumnsSection,
  EmbeddedVideoSection,
  MediaGallerySection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  ResourceCTASection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import BreadCumb from "../../../Components/Common/BreadCumb";
import pageData from "../../../data/servicePages/locations/ac/arabianRanches";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../../../Components/MaintenanceBenefits/MaintenanceBenefits")
);
const MaintenanceBenefits = (props) => (
  <Suspense fallback={null}>
    <MaintenanceBenefitsLazy {...props} />
  </Suspense>
);

export default function AcRepairInArabianRanches() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  const callAndWhatsappCta = {
    phone: `tel:+${pageData.contact.phone}`,
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
  };

  const whatsappOnlyCta = {
    phone: "",
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
  };

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

        {/* 1. Paragraph Section under Breadcrumb */}
        <TwoColumnInfoSection
          content={pageData.overview}
          tone="soft"
          showCta={false}
          contact={pageData.contact}
        />

        {/* 2. Transparent Pricing Section */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* 3. Area Overview (Image on RIGHT) */}
        <SplitMediaSection
          content={pageData.areaOverview}
          tone="soft"
          imageSide="right"
          showCta={true}
          cta={callAndWhatsappCta}
          contact={pageData.contact}
        />

        {/* 4. Section Showing AC Unit Service: Which signs show the AC needs service? */}
        <ChecklistSection
          content={pageData.commonSigns}
          showCta={false}
          tone="white"
        />

        {/* 5. Pricing List Resource CTA */}
        <ResourceCTASection content={pageData.repairPrice} tone="dark" />

        {/* 6. Why Is My AC Not Cooling? (Image on LEFT) */}
        <SplitMediaSection
          content={pageData.serviceOverview}
          contact={pageData.contact}
          showCta={false}
          tone="soft"
          imageSide="left"
        />

        {/* 7. Professional Air Conditioning Services (Cards) */}
        <ActionCardsSection
          content={pageData.servicesOfferedCards}
          contact={pageData.contact}
          tone="white"
          columns="three"
          onAction={openBooking}
          showCta={true}
          cta={whatsappOnlyCta}
        />

        {/* 8. Why is AC Maintenance Service Important? (Image on RIGHT) */}
        <SplitMediaSection
          content={pageData.maintenanceImportance}
          showCta={false}
          contact={pageData.contact}
          tone="soft"
          imageSide="right"
        />

        {/* 9. Key Benefits of Regular AC Maintenance */}
        <ActionCardsSection
          content={pageData.maintenanceImportanceCards}
          tone="white"
          columns="three"
          showCta={false}
          contact={pageData.contact}
        />

        {/* 10. Common Problems */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          showCta={true}
          cta={callAndWhatsappCta}
          tone="soft"
          columns="four"
        />

        {/* 11. Emergency AC Repair */}
        <EmbeddedVideoSection
          content={pageData.video}
          tone="white"
          videoSide="left"
          showCta={false}
        />

        {/* 12. Benefits (above Choose Us) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          showCta={true}
          cta={whatsappOnlyCta}
          contact={pageData.contact}
          tone="soft"
        />

        {/* 13. Choose Us */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
          showCta={false}
          contact={pageData.contact}
        />

        {/* 14. Before after */}
        <BeforeAfterSection content={pageData.beforeAfter} tone="soft" />

        {/* 15. Types of AC Systems */}
        <DetailColumnsSection
          content={pageData.sparePartsRepair}
          contact={pageData.contact}
          showCta={false}
          tone="white"
        />

        {/* 16. Brands Directory */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="soft"
          onAction={openBooking}
          showCta={false}
          contact={pageData.contact}
        />

        {/* 17. Gallery */}
        <MediaGallerySection content={pageData.gallery} tone="white" />

        {/* 18. Energy Saving Tips Resource CTA */}
        <ResourceCTASection content={pageData.energyTips} tone="soft" />

        {/* 19. Blogs (between Tips and AMC) */}
        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
        />

        {/* 20. Annual Maintenance Contracts (AMC) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* 21. Reviews */}
        <TestimonialsSection content={pageData.testimonials} tone="soft" />

        {/* 22. FAQs */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* 23. Modern Booking Form */}
        <ModernBookingSection
          content={pageData.booking}
          bookingState={bookingState}
          tone="soft"
        />
      </main>

      {/* Booking Modal */}
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
