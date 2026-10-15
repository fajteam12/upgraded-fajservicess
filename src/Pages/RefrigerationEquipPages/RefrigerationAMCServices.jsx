import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/refrigerationAmcServices";

export default function RefrigerationAMCServices() {
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

        <TwoColumnInfoSection
          content={pageData.serviceOverview}
          tone="white"
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <TwoColumnInfoSection
          content={pageData.ppmServices}
          tone="white"
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        <ChecklistSection
          content={pageData.peaceOfMind}
          tone="soft"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="white"
          columns="four"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        <ActionCardsSection
          content={pageData.maintenanceProgrammes}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        <MaintenanceBenefits {...pageData.benefits} tone="white" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.specialisations}
          tone="white"
          columns="three"
          onAction={openBooking}
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: "",
          }}
        />

        <TestimonialsSection content={pageData.testimonials} tone="soft" />

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
