import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
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
  useBookingRequest,
  TestimonialsSection,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/coffeeMachineServiceCenter";

export default function CoffeeMachineServiceCenterInDubai() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  const scrollToServices = () => {
    const target =
      document.getElementById("coffee-machine-service-center-services") ||
      document.getElementById("services-offered");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        {/* Section 1: Hero (Screenshot 1) */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Priority Overview (Screenshot 2) */}
        <ContentCardSection content={pageData.overview} tone="soft" plain={true} />

        {/* Section 3: Transparent Pricing (Screenshot 3 - Retaining Upgraded AED 187) */}
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} tone="white" />

        {/* Section 4: Service Video (Screenshot 4) */}
        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        {/* Section 5: Servicing and Maintenance Contract (Screenshot 5) */}
        <ContentCardSection content={pageData.serviceOverview} contact={pageData.contact} tone="white" />

        {/* Section 6: Value Upkeep / Why Maintenance Important (Screenshot 6) */}
        <ActionCardsSection content={pageData.maintenanceImportance} tone="soft" columns="four" />

        {/* Section 7: Common Problems / Warning Signals (Screenshot 7) */}
        <NumberedGridSection content={pageData.commonProblems} contact={pageData.contact} tone="white" columns="four" />

        {/* Section 8: Services Offered (Screenshot 8) */}
        <ActionCardsSection content={pageData.servicesOffered} tone="soft" columns="three" onAction={openBooking} />

        {/* Section 9: Maintenance Benefits (Screenshot 9) */}
        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        {/* Section 10: Why Choose FAJ (Screenshot 10) */}
        <ActionCardsSection content={pageData.whyChooseUs} contact={pageData.contact} tone="soft" columns="three" />

        {/* Section 11: Approved Brand Partners (Screenshot 11) */}
        <SearchableDirectorySection content={pageData.brands} contact={pageData.contact} tone="white" onAction={openBooking} />

        {/* Section 12: Before & After (Screenshot 12) */}
        {pageData.beforeAfter && <BeforeAfterSection content={pageData.beforeAfter} tone="soft" />}

        {/* Section 13: Our Gallery (Screenshot 13) */}
        {pageData.gallery && <MediaGallerySection content={pageData.gallery} tone="white" />}

        {/* Section 14: Service Contracts AMC Plans (Screenshot 14) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 15: News & Updates / Blogs (Screenshot 15) */}
        {pageData.blogs && <ActionCardsSection content={pageData.blogs} tone="soft" columns="three" />}

        {/* Section 16: Customer Testimonials (Screenshot 16) */}
        <TestimonialsSection content={pageData.testimonials} tone="white" />

        {/* Section 17: FAQs (Screenshot 17) */}
        <AccordionSection 
          content={pageData.faqs} 
          contact={pageData.contact}
          tone="soft" 
        />

        {/* Section 18: Modern Booking Section (Screenshot 18) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
          bookingState={bookingState}
          onAction={openBooking}
          onOurServices={scrollToServices}
          tone="white"
        />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
