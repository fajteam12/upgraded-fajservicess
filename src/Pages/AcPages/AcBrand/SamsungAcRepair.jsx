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
import pageData from "../../../data/servicePages/brands/ac/samsung";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../../../Components/MaintenanceBenefits/MaintenanceBenefits")
);
const MaintenanceBenefits = (props) => (
  <Suspense fallback={null}>
    <MaintenanceBenefitsLazy {...props} />
  </Suspense>
);

export default function SamsungAcRepair() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  const callAndWhatsappCta = {
    phone: `tel:+${pageData.contact.phone}`,
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
  };

  const callOnlyCta = {
    phone: `tel:+${pageData.contact.phone}`,
    whatsapp: "",
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
        />

        {/* 1. Transparent Pricing Section */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* 2. Brand Overview: Who provides the best Samsung AC repair services in Dubai? (Image on RIGHT) */}
        <SplitMediaSection
          content={pageData.areaOverview}
          tone="soft"
          imageSide="right"
          showCta={true}
          cta={callAndWhatsappCta}
          contact={pageData.contact}
        />

        {/* 3. Section Showing AC Unit Service: Which signs show the AC needs service? */}
        <ChecklistSection
          content={pageData.commonSigns}
          showCta={false}
          tone="white"
        />

        {/* 4. Pricing List Resource CTA */}
        <ResourceCTASection content={pageData.repairPrice} tone="dark" />

        {/* 5. Why Is My Brand AC Not Cooling? (Image on LEFT) */}
        <SplitMediaSection
          content={pageData.serviceOverview}
          showCta={false}
          tone="soft"
          imageSide="left"
        />

        {/* 6. Why is Brand AC Maintenance Service Important in Dubai? (Image on RIGHT) */}
        <SplitMediaSection
          content={pageData.maintenanceImportance}
          showCta={true}
          cta={whatsappOnlyCta}
          showPhone={false}
          contact={pageData.contact}
          tone="white"
          imageSide="right"
        />

        {/* 7. Key Benefits of Regular Brand AC Maintenance in Dubai */}
        {/* 7. Key Benefits of Regular Brand AC Maintenance in Dubai */}
        <ActionCardsSection
          content={pageData.maintenanceImportanceCards || pageData.maintenanceImportanceCardsData}
          tone="soft"
          columns="three"
          showCta={false}
          contact={pageData.contact}
        />

        {/* 8. Emergency AC Repair (Video Section placed ABOVE Common Problems) */}
        <EmbeddedVideoSection
          content={pageData.video || pageData.videoData}
          tone="white"
          videoSide="left"
          showCta={false}
        />

        {/* 9. Common Problems */}
        <NumberedGridSection
          content={pageData.commonProblems || pageData.commonProblemsData}
          contact={pageData.contact}
          showCta={true}
          cta={callOnlyCta}
          showWhatsapp={false}
          tone="soft"
          columns="four"
        />

        {/* 10. Professional Air Conditioning Services for Brand AC (Cards - BETWEEN Common Problems & Benefits) */}
        <ActionCardsSection
          content={pageData.servicesOfferedCards || pageData.servicesOfferedCardsData}
          contact={pageData.contact}
          tone="white"
          columns="three"
          onAction={openBooking}
          showCta={false}
        />

        {/* 11. Benefits (above Choose Us) */}
        <MaintenanceBenefits
          {...(pageData.benefits || pageData.benefitsData)}
          showCta={true}
          cta={whatsappOnlyCta}
          contact={pageData.contact}
          tone="soft"
        />

        {/* 12. Choose Us */}
        <ActionCardsSection
          content={pageData.whyChooseUs || pageData.whyChooseUsData}
          tone="white"
          columns="three"
          showCta={false}
          contact={pageData.contact}
        />

        {/* 13. types (Spare Parts & Repairs) */}
        <DetailColumnsSection
          content={pageData.sparePartsRepair || pageData.sparePartsRepairData}
          contact={pageData.contact}
          showCta={false}
          tone="soft"
        />

        {/* 14. Before after */}
        <BeforeAfterSection content={pageData.beforeAfter || pageData.beforeAfterData} tone="white" />

        {/* 15. Service Coverage Areas across Dubai */}
        <SearchableDirectorySection
          content={pageData.coverage || pageData.brands}
          tone="soft"
          onAction={openBooking}
          showCta={false}
          contact={pageData.contact}
        />

        {/* 16. Gallery */}
        <MediaGallerySection content={pageData.gallery} tone="white" />

        {/* 17. tips */}
        <ResourceCTASection content={pageData.energyTips} tone="soft" />

        {/* 18. Blogs (between Tips and AMC) */}
        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
        />

        {/* 19. AMC */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* 20. Reviews */}
        <TestimonialsSection content={pageData.testimonials} tone="soft" />

        {/* 21. Faqs */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* 22. booking form */}
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
