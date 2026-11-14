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
import pageData from "../../data/servicePages/barbecueRepair";

export default function BBQService() {
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
        {/* Section 1: Hero */}
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

        {/* Pricing Cards Section (Directly under Breadcrumbs) */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* Section 2: Service Video (BBQ Repair & Service Near You) */}
        <EmbeddedVideoSection
          content={pageData.video}
          videoSide="left"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 3: Professional Care / Workshop Drop-off Banner */}
        <ContentCardSection
          content={pageData.serviceCenter}
          tone="white"
        />

        {/* Section 4: Inspection and Cleaning (Why is BBQ Grill Regular Maintenance Service Important in Dubai?) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 5: Warning Signals / Problems Grid (4x2 Numbered Grid) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="white"
          columns="four"
        />

        {/* Section 6: Services Offered (4 Cards, Static Grid) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="soft"
          columns="four"
          slider={false}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 7: Tips for Preparing for Your BBQ / Maintenance Benefits */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="white"
        />

        {/* Section 8: Why Choose FAJ */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 9: Approved Brand Partners */}
        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* Section 10: Terms & Warranty */}
        <ContentCardSection
          content={pageData.repairOverview}
          tone="soft"
        />

        {/* Section 11: Before & After Comparison Slider */}
        {/* <BeforeAfterSection
          content={pageData.beforeAfter}
          tone="white"
        /> */}

        {/* Section 12: Media Gallery 3x2 Grid */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="soft"
        />

        {/* Section 13: Maintenance Contracts */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 14: News & Updates / Blogs (Right above Testimonials) */}
        <ActionCardsSection
          content={pageData.blogs}
          tone="white"
          columns="three"
        />

        {/* Section 15: Customer Testimonials Carousel */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 16: FAQs — MUST BE 2nd TO LAST! */}
        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        {/* Section 17: Booking Form — MUST BE AT THE VERY END! */}
        <ModernBookingSection
          content={pageData.booking}
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
