import { lazy, Suspense } from "react";
import BreadCumb from "../../../Components/Common/BreadCumb";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../../../Components/MaintenanceBenefits/MaintenanceBenefits")
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
import pageData from "../../../data/servicePages/locations/ac/burDubai";

export default function AcRepairInBurDubai() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  const whatsappCta = {
    phone: `tel:+${pageData.contact.phone}`,
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

        {/* 1. Paragraph Section: Who provides the best AC repair services in Bur Dubai? */}
        <TwoColumnInfoSection
          content={pageData.overview}
          tone="soft"
          showCta={true}
          contact={pageData.contact}
        />

        {/* 2. Transparent Pricing Section */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* 3. Pricing List Resource CTA */}
        <ResourceCTASection content={pageData.repairPrice} tone="dark" />

        {/* 4. Section Showing AC Unit Service: Which signs show the AC needs service? */}
        <ChecklistSection
          content={pageData.commonSigns}
          contact={pageData.contact}
          showCta={true}
          cta={whatsappCta}
          tone="soft"
        />

        {/* 5. Why Is My AC Not Cooling? (Image on LEFT) */}
        <SplitMediaSection
          content={pageData.serviceOverview}
          contact={pageData.contact}
          showCta={true}
          cta={whatsappCta}
          tone="white"
          imageSide="left"
        />

        {/* 6. Professional Air Conditioning Services in Bur Dubai (Image on RIGHT) */}
        <SplitMediaSection
          content={pageData.servicesOffered}
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
          tone="soft"
          imageSide="right"
        />

        {/* 7. Our Services Cards in Bur Dubai */}
        <ActionCardsSection
          content={pageData.servicesOfferedCards}
          contact={pageData.contact}
          tone="white"
          columns="three"
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
        />

        {/* 8. Why is AC Maintenance Service Important in Bur Dubai? (Image on LEFT) */}
        <SplitMediaSection
          content={pageData.maintenanceImportance}
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
          tone="soft"
          imageSide="left"
        />

        {/* 9. Key Benefits of Regular AC Maintenance in Bur Dubai */}
        <ActionCardsSection
          content={pageData.maintenanceImportanceCards}
          tone="white"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
        />

        {/* 10. Most Common AC Problems That May Require Maintenance */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          showCta={true}
          cta={whatsappCta}
          tone="soft"
          columns="four"
        />

        {/* 11. Emergency AC Repair Service in Bur Dubai (Video on RIGHT) */}
        <EmbeddedVideoSection
          content={pageData.video}
          tone="white"
          videoSide="right"
        />

        {/* 12. Best AC Cleaning & AC Service in Bur Dubai (Image on LEFT after Video) */}
        <SplitMediaSection
          content={pageData.cleaningService}
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
          tone="soft"
          imageSide="left"
        />

        {/* 13. Why Regular AC Cleaning is Essential */}
        <TwoColumnInfoSection
          content={pageData.cleaningServiceCards}
          tone="white"
          showCta={true}
          contact={pageData.contact}
        />

        {/* 14. Maintenance Outcomes & Benefits */}
        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        {/* 15. Which AC Needs Services - All Types of AC Systems & Repairs */}
        <DetailColumnsSection
          content={pageData.sparePartsRepair}
          contact={pageData.contact}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* 16. Before / After Slider */}
        <BeforeAfterSection content={pageData.beforeAfter} tone="soft" />

        {/* 17. Why Choose Us - The FAJ Guarantee */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
        />

        {/* 18. Searchable Brands Directory */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="soft"
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          contact={pageData.contact}
        />

        {/* 19. Gallery */}
        <MediaGallerySection content={pageData.gallery} tone="white" />

        {/* 20. Energy Saving Tips Resource CTA */}
        <ResourceCTASection content={pageData.energyTips} tone="soft" />

        {/* 21. Annual Maintenance Contracts (AMC) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* 22. Customer Testimonials */}
        <TestimonialsSection content={pageData.testimonials} tone="white" />

        {/* 23. News & Blog Updates */}
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        {/* 24. Location FAQs */}
        <AccordionSection content={pageData.faqs} tone="white" />

        {/* 25. Booking Form */}
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
