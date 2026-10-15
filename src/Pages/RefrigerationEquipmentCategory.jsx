import Breadcrumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  EmbeddedVideoSection,
  NoticeBarSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitHeroSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/refrigerationEquipment";

export default function RefrigerationEquipmentCategory() {
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
          onPrimaryAction={openBooking} tone="white" />

        <Breadcrumb />

        <NoticeBarSection content={pageData.notice} tone="soft" />

        <ActionCardsSection
          content={pageData.subServices}
          columns="three" tone="white" />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.repairOptions}
          onAction={openBooking}
          columns="three" tone="white" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="two" tone="soft" />

        <ActionCardsSection
          content={pageData.benefits}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three" tone="soft" />

        <SearchableDirectorySection
          content={pageData.equipmentTypes}
          onAction={openBooking}
          tone="white"
        />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="soft"
        />

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
