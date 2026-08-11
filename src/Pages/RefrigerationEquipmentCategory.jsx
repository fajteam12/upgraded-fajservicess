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
          onPrimaryAction={openBooking}
        />

        <Breadcrumb />

        <NoticeBarSection content={pageData.notice} />

        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
        />

        <ActionCardsSection
          content={pageData.subServices}
          columns="three"
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.repairOptions}
          onAction={openBooking}
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

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="two"
        />

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
          content={pageData.equipmentTypes}
          onAction={openBooking}
          tone="soft"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />

        <BookingSection
          content={pageData.booking}
          bookingState={bookingState}
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
