import BreadCumb from "../Components/Common/BreadCumb";
import {
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  NumberedGridSection,
  PageMetadata,
  SplitHeroSection,
  ContentCardSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/pcbRepair";

export default function PcbRepairServicesDubai() {
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
        faqItems={pageData.faqs?.items || []}
      />

      <main className="service-landing">
        <SplitHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
        />

        <BreadCumb />

        <ContentCardSection
          content={pageData.serviceOverview}
          tone="white"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        <NumberedGridSection
          content={pageData.repairProcess}
          tone="dark"
          columns="three"
        />

        <ContentCardSection
          content={pageData.industrialPcb}
          tone="soft"
        />

        <ContentCardSection
          content={pageData.commercialPcb}
          tone="dark"
        />

        <ContentCardSection
          content={pageData.consumerPcb}
          tone="white"
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