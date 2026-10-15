import BreadCumb from "../../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  EmbeddedVideoSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  SearchableDirectorySection,
  TwoColumnInfoSection,
  useBookingRequest,
  TestimonialsSection,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/homeApplianceRepair";

export default function FreestandingHomeAppliancesRepairService() {
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
          content={pageData.pricing}
          onAction={openBooking}
          tone="white"
        />

        <TwoColumnInfoSection
          content={pageData.serviceCenter}
          tone="soft"
        />

        <EmbeddedVideoSection content={pageData.video} tone="white" />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          columns="three"
          tone="soft"
        />

        <NumberedGridSection
          content={pageData.commonProblems}
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
          tone="white"
          columns="four"
        />

        <ActionCardsSection
          content={pageData.servicesOffered}
          onAction={openBooking}
          columns="four"
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.featuredBrands}
          onAction={openBooking}
          tone="white"
        />

        <SearchableDirectorySection
          content={pageData.otherBrands}
          onAction={openBooking}
          tone="soft"
          showCta={true}
          cta={{
            phone: `tel:+${pageData.contact.phone}`,
            whatsapp: "",
          }}
        />

        <TestimonialsSection content={pageData.testimonials} tone="white" />

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
