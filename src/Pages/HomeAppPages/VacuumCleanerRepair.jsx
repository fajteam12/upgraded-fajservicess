import { lazy, Suspense } from "react";
import BreadCumb from "../../Components/Common/BreadCumb";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../../Components/MaintenanceBenefits/MaintenanceBenefits")
);
const MaintenanceBenefits = (props) => (
  <Suspense fallback={null}>
    <MaintenanceBenefitsLazy {...props} />
  </Suspense>
);

import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BeforeAfterSection,
  BookingModal,
  ContentCardSection,
  EmbeddedVideoSection,
  MediaGallerySection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/robotVacuumCleaner";

export default function VacuumCleanerRepair() {
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

  const whatsappCta = {
    phone: "",
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
  };

  return (
    <>
      <PageMetadata
        seo={pageData.seo}
        contact={pageData.contact}
        faqItems={pageData.faqs.items}
        structuredData={pageData.structuredData}
      />

      <main className="service-landing">
        {/* Section 1: Hero (Figma 248:9210) */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          buttonStyle="classic"
          contentWidth={pageData.hero.contentWidth || "50%"}
          showPhone={false}
          showCall={false}
          showWhatsapp={true}
          tone="white"
        />

        <BreadCumb />

        {/* Pricing Cards Section (From /services/home-appliances-repair/) */}
        {/* <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        /> */}

        {/* Section 2: Service Video (Affordable Vacuum Cleaner Repair - Figma 248:9271) */}
        <EmbeddedVideoSection
          content={pageData.video}
          videoSide="left"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 3: Professional Care / Workshop Drop-off Banner (Top-Rated Service Center - Figma 248:9255) */}
        <ContentCardSection
          content={pageData.serviceCenter}
          tone="white"
        />

        {/* Section 9: Inspection and Cleaning 5 Benefit Cards (Figma 248:9289) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 10: Warning Signals / Problems Grid (Figma 248:9379) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="white"
          columns="four"
        />

        {/* Section 27: Services Offered (Figma 268:3656) - Sticky Image Split */}
        <SplitMediaSection
          content={pageData.servicesOffered}
          imageSide="left"
          stickyImage={true}
          headerAbove={true}
          onAction={openBooking}
          tone="soft"
        />

        {/* Section 15: Premium Outcomes / Key Benefits (Figma 248:9531) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="white"
        />

        {/* Section 18: Why Choose FAJ (Figma 248:9636) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 18: Approved Brand Partners (Figma 248:9739) */}
        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* Section 21: Terms & Warranty (Figma 248:9859) */}
        <ContentCardSection
          content={pageData.repairOverview}
          tone="soft"
        />

        {/* Section 22: Before & After Comparison Slider (Figma 248:9874) */}
        <BeforeAfterSection
          content={pageData.beforeAfter}
          tone="white"
        />

        {/* Section 23: Media Gallery 3x2 Grid (Figma 248:9895) */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="soft"
        />

        {/* Section 24: Maintenance Contracts (Figma 248:9922) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section: News & Updates / Blogs (Right above Testimonials) */}
        <ActionCardsSection
          content={pageData.blogs}
          tone="white"
          columns="three"
        />

        {/* Section 25: Customer Testimonials Carousel (Figma 248:10037) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 26: FAQs (Figma 248:10241) — MUST BE 2nd TO LAST! */}
        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />

        {/* Section 27: Booking Form (Figma 248:10184) — MUST BE AT THE VERY END! */}
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
