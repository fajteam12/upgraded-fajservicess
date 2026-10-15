import BreadCumb from "../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  NumberedGridSection,
  PageMetadata,
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

        <ContentCardSection
          content={pageData.overview}
          tone="soft"
        />

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
          tone="white"
          columns="three"
        />

        <ContentCardSection
          content={pageData.industrialPcb}
          tone="soft"
        />

        <ContentCardSection
          content={pageData.commercialPcb}
          tone="white"
        />

        <ContentCardSection
          content={pageData.consumerPcb}
          tone="soft"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />

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