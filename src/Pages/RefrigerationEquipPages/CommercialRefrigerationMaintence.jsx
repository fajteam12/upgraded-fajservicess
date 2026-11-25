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
  BookingModal,
  ContentCardSection,
  EmbeddedVideoSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  TestimonialsSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/commercialRefrigerationMaintenance";

export default function CommercialRefrigerationMaintence() {
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

  const scrollToServices = () => {
    const target = document.getElementById("commercial-refrigeration-services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
          cta={whatsappCta}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Professional Care / Refrigeration System Maintenance */}
        <ContentCardSection
          content={pageData.serviceCenter}
          tone="soft"
        />

        {/* Section 3: Service Video (Video left + copy & WhatsApp CTA right) */}
        <EmbeddedVideoSection
          content={pageData.video}
          videoSide="left"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          cta={whatsappCta}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 4: Why is Commercial Refrigeration Maintenance Important in Dubai? */}
        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        {/* Section 5: Warning Signals / Most Common Problems */}
        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 6: Services Offered (4 Cards, Static Grid) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="soft"
          columns="four"
          slider={false}
        />

        {/* Section 7: Benefits Of Regular Refrigeration Maintenance in Dubai */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 8: Why Choose FAJ */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 9: Specialised Refrigeration Types */}
        <ActionCardsSection
          content={pageData.specialisations}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          columns="three"
          tone="white"
        />

        {/* Section 10: Service Contracts */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 11: News & Updates / Blogs (Right above Testimonials) */}
        <ActionCardsSection
          content={pageData.blogs}
          tone="white"
          columns="three"
        />

        {/* Section 12: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 13: FAQs (2nd to last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 14: Booking Form (Very last) */}
        <ModernBookingSection
          content={pageData.booking}
          bookingState={bookingState}
          onOurServices={scrollToServices}
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
