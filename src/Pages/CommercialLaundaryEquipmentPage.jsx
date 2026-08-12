import Breadcrumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  SplitMediaSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/commercialLaundryEquipment";

export default function CommercialLaundaryEquipmentPage() {
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

        <Breadcrumb />

        <SplitMediaSection content={pageData.intro} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.repairOptions}
          onAction={openBooking}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.commonProblems}
          tone="dark"
          columns="four"
        />

        <SplitMediaSection content={pageData.servicesOffered} />

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
          content={pageData.dryerBrands}
          onAction={openBooking}
          tone="dark"
        />

        <SearchableDirectorySection
          content={pageData.otherBrands}
          onAction={openBooking}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.testimonials}
          tone="dark"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.articles}
          columns="three"
        />

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
