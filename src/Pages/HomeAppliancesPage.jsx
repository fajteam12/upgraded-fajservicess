import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  MetricCardsSection,
  MediaGallerySection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
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
        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <PricingCardsSection
          content={pageData.primaryServices}
          onAction={openBooking}
        />

        <PlanCardsSection content={pageData.contracts} onAction={openBooking} />

        <ActionCardsSection
          content={pageData.categories}
          tone="soft"
          columns="four"
        />

        <TwoColumnInfoSection content={pageData.serviceOverview} />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="three"
        />

        {/* <MetricCardsSection content={pageData.maintenanceImportance} /> */}

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="four"
        />

        <MaintenanceBenefits {...pageData.benefits} />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="dark"
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.brands}
          onAction={openBooking}
        />

        <MediaGallerySection content={pageData.gallery} tone="soft" />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="three"
          slider
          autoPlay
          loop
        />

        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        <AccordionSection content={pageData.faqs} tone="white" />

        <BookingSection
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
