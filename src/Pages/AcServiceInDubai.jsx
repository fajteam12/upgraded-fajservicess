import { lazy, Suspense } from "react";
import BreadCumb from "../Components/Common/BreadCumb";

const MaintenanceBenefitsLazy = lazy(() =>
  import("../Components/MaintenanceBenefits/MaintenanceBenefits")
);
const MaintenanceBenefits = (props) => (
  <Suspense fallback={null}>
    <MaintenanceBenefitsLazy {...props} />
  </Suspense>
);
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BeforeAfterSection,
  BookingModal,
  BookingSection,
  ChecklistSection,
  DetailColumnsSection,
  EmbeddedVideoSection,
  MediaGallerySection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  PricingCardsSection,
  ResourceCTASection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  TwoColumnInfoSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/acService";

export default function AcServiceInDubai() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  const whatsappCta = {
    phone: "",
    whatsapp: `https://api.whatsapp.com/send?phone=+${pageData.contact.whatsapp}&text=Hello`,
  };

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
        />
        <BreadCumb />
        <TwoColumnInfoSection content={pageData.overview} tone="soft" />
        <PricingCardsSection content={pageData.pricing} onAction={openBooking} tone="white" />
        <SplitMediaSection
          content={pageData.serviceOverview}
          contact={pageData.contact}
          tone="soft"
        />
        <ChecklistSection content={pageData.commonSigns} tone="white" />
        <EmbeddedVideoSection content={pageData.video} tone="soft" />
        <ResourceCTASection
          content={pageData.repairPrice}
          tone="dark"
        />
        <SplitMediaSection
          content={pageData.maintenanceImportance}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />
        <ActionCardsSection
          content={pageData.maintenanceImportanceCards}
          tone="soft"
          columns="three"
        />
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="white"
          columns="four"
        />
        <SplitMediaSection
          content={pageData.servicesOffered}
          showCta={true}
          cta={whatsappCta}
          tone="soft"
        />
        <ActionCardsSection
          content={pageData.servicesOfferedCards}
          contact={pageData.contact}
          tone="white"
          columns="three"
          onAction={openBooking}
        />
        <MaintenanceBenefits {...pageData.benefits} />
        <SplitMediaSection
          content={pageData.cleaningService}
          showCta={true}
          cta={whatsappCta}
          tone="white"
        />
        <TwoColumnInfoSection
          content={pageData.cleaningServiceCards}
          tone="soft"
        />
        <ActionCardsSection content={pageData.whyChooseUs} tone="white" columns="three" />
        <BeforeAfterSection content={pageData.beforeAfter} tone="soft" />
        <SearchableDirectorySection content={pageData.brands} tone="white" onAction={openBooking} />
        <DetailColumnsSection
          content={pageData.sparePartsRepair}
          contact={pageData.contact}
          tone="soft"
        />
        <MediaGallerySection content={pageData.gallery} tone="white" />
        <ResourceCTASection content={pageData.energyTips} tone="soft" />
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />
        <TestimonialsSection content={pageData.testimonials} tone="white" />
        <ActionCardsSection
          content={pageData.news}
          tone="soft"
          columns="three"
        />

        <AccordionSection
          content={pageData.faqs}
          tone="white"
        />
        <BookingSection content={pageData.booking} bookingState={bookingState} tone="soft" />
      </main>
      <BookingModal content={pageData.booking} open={modalOpen} onClose={closeBooking} selectedItem={selectedItem} bookingState={bookingState} />
    </>
  );
}
