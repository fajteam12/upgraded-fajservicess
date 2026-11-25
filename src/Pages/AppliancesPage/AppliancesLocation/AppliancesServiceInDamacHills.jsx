import pageData from "../../../data/servicePages/locations/appliances/damacHills";
import BreadCumb from "../../../Components/Common/BreadCumb";
import { lazy, Suspense } from "react";

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
  EmbeddedVideoSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  TestimonialsSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";

export default function AppliancesServiceInDamacHills() {
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

        {/* Section 2: Breadcrumbs */}
        <BreadCumb />

        {/* Section 3: Pricing Cards Section (Directly under Breadcrumbs) */}
        <PricingCardsSection
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        {/* Section 4: Service Video */}
        <EmbeddedVideoSection
          content={pageData.video}
          videoSide="left"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 5: Professional Care / Fast and Reliable Banner */}
        <ContentCardSection
          content={pageData.serviceCenter}
          tone="white"
        />

        {/* Section 6: Inspection and Care (3-Column Grid) */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 7: Warning Signals / Problems Grid (4x2 Numbered Grid) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="white"
          columns="four"
        />

        {/* Section 8: Services Offered (4 Cards, Static Grid) */}
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

        {/* Section 9: Key Benefits (Sticky Left + 6 Numbered Cards Right) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="white"
        />

        {/* Section 10: Why Choose FAJ (3-Column Grid) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 11: Approved Brand Partners */}
        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* Section 12: Maintenance Contracts */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 13: Customer Testimonials Carousel */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 14: FAQs — 2nd to last */}
        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        {/* Section 15: Booking Form — At the very end */}
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
