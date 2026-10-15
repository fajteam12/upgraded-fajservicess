import Breadcrumb from "../Components/Common/BreadCumb";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  BookingSection,
  ContentCardSection,
  EmbeddedVideoSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitMediaSection,
  useBookingRequest,
  TwoColumnInfoSection,
  TestimonialsSection,
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
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          showPhone={false}
          showCall={false}
          tone="white"
        />

        <Breadcrumb />

        <ContentCardSection content={pageData.overview} tone="soft" />

        <TwoColumnInfoSection
          content={pageData.serviceOverview}
          tone="white"
        />

        <EmbeddedVideoSection
          content={pageData.video}
          tone="soft"
        />

        <ActionCardsSection
          content={pageData.maintenanceImportance}
          tone="white"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.commonProblems}
          tone="soft"
          columns="four"
          showCta={true}
          cta={{
            phone: "",
            whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
          }}
        />

        <SplitMediaSection
          content={pageData.servicesOffered}
          tone="white"
        />

        <ActionCardsSection
          content={pageData.benefits}
          tone="soft"
          columns="three"
        />

        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="white"
        />

        <SearchableDirectorySection
          content={pageData.featuredBrands}
          onAction={openBooking}
          tone="soft"
        />

        <SearchableDirectorySection
          content={pageData.dryerBrands}
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

        <ActionCardsSection
          content={pageData.articles}
          columns="three"
          tone="soft"
        />

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
