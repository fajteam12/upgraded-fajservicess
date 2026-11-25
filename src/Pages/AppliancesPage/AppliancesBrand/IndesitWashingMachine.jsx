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
  BookingModal,
  ContentCardSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PricingCardsSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/brands/appliance/indesit";

export default function IndesitWashingMachine() {
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

        {/* Section 1.5: Home Appliances Transparent Pricing Cards */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* Section 2: Workshop Drop-off & Fast Reliable Service Cards */}
        <ContentCardSection
          content={pageData.serviceCenter}
          tone="soft"
        />

        {/* Section 3: Inspection and Preventive Care (Numbered Cards 01-06) */}
        <NumberedGridSection
          content={pageData.maintenanceImportance}
          tone="white"
          columns="three"
        />

        {/* Section 4: Warning Signals / Problems Grid (4x2 Numbered Grid) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="soft"
          columns="four"
        />

        {/* Section 5: Services Offered (4 Cards, No Images, Clean Distinctive Icons) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="four"
          slider={false}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 6: Key Benefits of Service (Distinct Icons, 2 Stats & WhatsApp CTA) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          cta={whatsappCta}
          tone="soft"
        />

        {/* Section 7: Why Choose FAJ (Distinct Icons) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
        />

        {/* Section 8: Service Specialization Types (Converted to Responsive 4x2 Cards Grid) */}
        <ActionCardsSection
          content={pageData.repairOverview}
          onAction={openBooking}
          tone="soft"
          columns="four"
        />

        {/* Section 9: Service Coverage Areas Directory */}
        <SearchableDirectorySection
          content={pageData.coverageDirectory}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* Section 10: Verified Customer Testimonials Carousel */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 11: FAQs — MUST BE 2nd TO LAST! */}
        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />

        {/* Section 12: Booking Form — MUST BE AT THE VERY END! */}
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
