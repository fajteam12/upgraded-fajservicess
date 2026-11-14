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
import pageData from "../../data/servicePages/applianceAmc";

export default function AppliancesMaintenanceContract() {
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
    const target = document.getElementById("appliance-amc-services");
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
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Complete AMC & Emergency Support */}
        <ContentCardSection
          content={pageData.overview}
          plain={true}
          tone="white"
        />

        {/* Section 3: Service Contracts (AMC Cards above Video) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 4: Service Video (YouTube boj7h-gOf7M + Appliances Maintenance Contract) */}
        <EmbeddedVideoSection
          content={pageData.video}
          videoSide="left"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 5: Planned Preventative Maintenance (PPM) Services */}
        <ContentCardSection
          content={pageData.ppmOverview}
          plain={true}
          tone="white"
        />

        {/* Section 6: The Importance of Kitchen Equipment Maintenance Contract Service */}
        <SplitMediaSection
          content={pageData.maintenanceImportance}
          imageSide="right"
          headerAbove={true}
          checklistColumns={1}
          tone="soft"
        />

        {/* Section 7: Common Kitchen Equipment Problems (4x2 Numbered Grid) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="white"
          columns="four"
        />

        {/* Section 8: Maintenance Services Offered (5 Cards 3+2 + Schedule Callout) */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="soft"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 9: Benefits Of Regular Appliance Service and Maintenance */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="soft"
        />

        {/* Section 10: Why Choose FAJ */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
        />

        {/* Section 11: Approved Brand Partners (44 Brands) */}
        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={whatsappCta}
          tone="soft"
        />

        {/* Section 12: News & Updates / Blogs (Right above Testimonials) */}
        <ActionCardsSection
          content={pageData.blogs}
          tone="white"
          columns="three"
        />

        {/* Section 13: Customer Testimonials Carousel */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 14: FAQs (2nd to last) */}
        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        {/* Section 15: Booking Form (Very last) */}
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
