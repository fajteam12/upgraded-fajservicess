import BreadCumb from "../../../Components/Common/BreadCumb";
import ApplianceCategories from "../../../Components/Services/homeappliances/ApplianceCategories";

import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  MediaGallerySection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../../../Components/ServicePageSections";
import "../../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../../data/servicePages/brands/appliance/brandPage";

export default function HomeAppBrandPage() {
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
        {/* Section 1: Hero (Authentic 2 Paragraphs with all 28 brand links) */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          buttonStyle="classic"
          contentWidth={pageData.hero.contentWidth || "55%"}
          showPhone={false}
          showCall={false}
          showWhatsapp={true}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Kitchen Appliance Repairs Dubai and Sharjah, UAE */}
        <ContentCardSection
          content={pageData.kitchenApplianceRepairs}
          plain={true}
          tone="soft"
        />

        {/* Section 3: Appliance Categories (Original 13 Service Categories) */}
        <ApplianceCategories />

        {/* Section 4: We Are Home Appliance Repair Service Centers (Split Media Section) */}
        <SplitMediaSection
          content={pageData.serviceCenterOverview}
          tone="soft"
          showCta={true}
          showPhone={false}
          showWhatsapp={true}
          contact={pageData.contact}
          cta={whatsappCta}
        />

        {/* Section 5: Why Choose FAJ Appliance Repair Service? (5 Value Pillar Cards) */}
        <ActionCardsSection
          content={pageData.whyChooseUsPillars}
          tone="white"
          columns="three"
          slider={false}
          showCta={false}
        />

        {/* Section 6: Common Appliance Repair Issues We Fix (Authentic 6 Cards) */}
        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={whatsappCta}
          showPhone={false}
          showWhatsapp={true}
          tone="soft"
          columns="three"
        />

        {/* Section 7: Media Gallery (Authentic 6 Images from Original Site) */}
        <MediaGallerySection
          content={pageData.gallery}
          tone="white"
        />

        {/* Section 8: Verified Customer Testimonials Carousel */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 9: News & Updates (Modern Blog Card Section) */}
        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
          onAction={openBooking}
        />

        {/* Section 10: FAQs — 2nd to last */}
        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

        {/* Section 11: Booking Form — at the very end */}
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