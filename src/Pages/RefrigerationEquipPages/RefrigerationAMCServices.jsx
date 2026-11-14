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
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/refrigerationAmcServices";

export default function RefrigerationAMCServices() {
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
    const target = document.getElementById("refrigeration-specialisations");
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

        {/* Section 2: Complete AMC & Emergency Support */}
        <ContentCardSection
          content={pageData.overview}
          tone="soft"
        />

        {/* Section 3: Faj's Refrigeration Maintenance Service (Split Video/Media) */}
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

        {/* Section 4: Planned Preventive Maintenance (PPM) Services */}
        <ContentCardSection
          content={pageData.ppmServices}
          tone="soft"
          showCta={true}
          cta={whatsappCta}
        />

        {/* Section 5: Peace of Mind with Maintenance Contract of Refrigeration */}
        <SplitMediaSection
          content={pageData.peaceOfMind}
          imageSide="right"
          tone="white"
        />

        {/* Section 6: Common Refrigeration Problems That May Require Maintenance */}
        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 7: Refrigeration Preventative Maintenance Programmes */}
        <ActionCardsSection
          content={pageData.maintenanceProgrammes}
          onAction={openBooking}
          tone="white"
          columns="three"
          slider={false}
        />

        {/* Section 8: Benefits Of Regular Refrigeration Service and Maintenance in Dubai */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 9: Why Choose FAJ */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 10: Specialised Types Directory */}
        <SearchableDirectorySection
          content={pageData.specialisations}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />

        {/* Section 11: Service Contracts */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 12: News & Updates / Blogs */}
        <ActionCardsSection
          content={pageData.blogs}
          tone="white"
          columns="three"
        />

        {/* Section 13: Customer Testimonials */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 14: Refrigeration AMC FAQs */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 15: Booking Section */}
        <ModernBookingSection
          content={pageData.booking}
          bookingState={bookingState}
          onOurServices={scrollToServices}
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
