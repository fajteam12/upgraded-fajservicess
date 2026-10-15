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
  SplitHeroSection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/meatGrinderRepair";

export default function MeatGrinderRepair() {
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
          content={pageData.repairOverview}
          tone="white"
        />

        <EmbeddedVideoSection content={pageData.video} tone="soft" />

        <ChecklistSection
          content={pageData.maintenanceChecks}
          tone="white"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          tone="white"
          columns="two"
        />

        <MaintenanceBenefits {...pageData.benefits} tone="soft" />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="white"
          columns="three"
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
