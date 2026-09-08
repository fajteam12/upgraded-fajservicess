import BreadCumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  CalloutBannerSection,
  EmbeddedVideoSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  SplitMediaSection,
  useBookingRequest,
  TwoColumnInfoSection
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/commercialDishwasher";

export default function CommercialDishwasherServices() {
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

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <TwoColumnInfoSection 
          content={pageData.serviceOverview} 
          tone="soft" 
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="dark"
        />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        <SplitMediaSection
          content={pageData.commonProblems}
          tone="dark"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="two"
        />

        <CalloutBannerSection content={pageData.serviceNotice} />

        <ActionCardsSection
          content={pageData.benefits}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
        />

        <SearchableDirectorySection
          content={pageData.featuredBrands}
          onAction={openBooking}
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.otherBrands}
          onAction={openBooking}
          tone="white"
        />

        <ActionCardsSection content={pageData.testimonials} tone="dark" columns="three" slider autoplay loop />

        <AccordionSection content={pageData.faqs} />

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
