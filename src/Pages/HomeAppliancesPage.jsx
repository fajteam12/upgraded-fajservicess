import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  MediaGallerySection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/homeAppliances";

export default function HomeAppliancesPage() {
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
          showPhone={false}
          showCall={false}
          tone="white"
        />

        <BreadCumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <PricingCardsSection
          content={pageData.primaryServices}
          onAction={openBooking}
          tone="white"
        />

        <ActionCardsSection
          content={pageData.categories}
          tone="soft"
          columns="four"
        />

        <TwoColumnInfoSection
          content={pageData.serviceOverview}
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
          tone="white"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="four"
        />

        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: "",
          }}
          tone="white"
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: "",
          }}
          tone="soft"
        />

        <MediaGallerySection content={pageData.gallery} tone="white" />

        <TestimonialsSection content={pageData.testimonials} tone="soft" />

        <ActionCardsSection
          content={pageData.news}
          tone="white"
          columns="three"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection content={pageData.faqs} tone="soft" />

        <BookingSection
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
