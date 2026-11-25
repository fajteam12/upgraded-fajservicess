import BreadCumb from "../Components/Common/BreadCumb";
import MaintenanceBenefits from "../Components/MaintenanceBenefits/MaintenanceBenefits";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BeforeAfterSection,
  BookingModal,
  ContentCardSection,
  EmbeddedVideoSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  ResourceCTASection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/acAnnualMaintenance";

export default function AcAnnualMaintenanceContract() {
  const { modalOpen, selectedItem, openBooking, closeBooking, bookingState } =
    useBookingRequest({ content: pageData.booking, contact: pageData.contact });

  return (
    <>
      <PageMetadata seo={pageData.seo} contact={pageData.contact} faqItems={pageData.faqs.items} />
      <main className="service-landing">
        {/* Section 1: Top Hero */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          tone="white"
          showPhone={false}
          showWhatsapp={true}
        />
        <BreadCumb />

        {/* Section 2: Complete AMC & Emergency Support */}
        <ContentCardSection content={pageData.overview} tone="soft" />

        {/* Section 3: AC System with Annual AC Maintenance Contract (Video Left) */}
        <EmbeddedVideoSection
          content={pageData.serviceOverview}
          contact={pageData.contact}
          tone="white"
          videoSide="left"
        />

        {/* Section 4: Year-Round Protection For Your AC AMC Services */}
        <ContentCardSection
          content={pageData.yearRoundProtection}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 5: Peace of Mind with AC Annual Maintenance Contracts */}
        <SplitMediaSection
          content={pageData.peaceOfMind}
          contact={pageData.contact}
          tone="white"
          imageSide="right"
        />

        {/* Section 6: Price CTA Banner */}
        <ResourceCTASection content={pageData.repairPrice} tone="dark" />

        {/* Section 7: Signs You Need An Annual AC Maintenance Contract */}
        <NumberedGridSection
          content={pageData.commonProblems}
          contact={pageData.contact}
          tone="soft"
          columns="four"
        />

        {/* Section 8: Services We Offer For Air Conditioning Systems */}
        <ActionCardsSection
          content={pageData.servicesOffered}
          tone="white"
          columns="four"
          onAction={openBooking}
        />

        {/* Section 9: Benefits of Regular AC Service and Maintenance */}
        <MaintenanceBenefits {...pageData.benefits} />

        {/* Section 10: Why Choose FAJ ? */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          contact={pageData.contact}
          tone="white"
          columns="three"
        />

        {/* Section 11: The Importance of AC Maintenance Contract Service */}
        <SplitMediaSection
          content={pageData.amcImportance}
          tone="soft"
          imageSide="right"
          headerAbove={true}
        />

        {/* Section 12: What is Included in an AC Maintenance Contract? */}
        <SplitMediaSection
          content={pageData.amcIncluded}
          tone="white"
          imageSide="left"
          headerAbove={true}
        />

        {/* Section 13: Recent Completed Service (Before & After) */}
        <BeforeAfterSection content={pageData.beforeAfter} tone="soft" />

        {/* Section 14: Multi-Brand Expertise */}
        <SearchableDirectorySection
          content={pageData.brands}
          tone="white"
          onAction={openBooking}
        />

        {/* Section 15: UAE: 7 Tips To Reduce AC Bills This Summer */}
        <ResourceCTASection content={pageData.energyTips} tone="dark" />

        {/* Section 16: News & Updates (Blog Cards) */}
        <ActionCardsSection
          content={pageData.newsUpdates}
          tone="soft"
          columns="three"
          onAction={openBooking}
        />

        {/* Section 17: Direct Testimonials */}
        <TestimonialsSection content={pageData.testimonials} tone="white" />

        {/* Section 18: Service Contracts / Plans */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 19: AC Repair and Maintenance FAQs (Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="soft"
        />

        {/* Section 20: Request AC Service (Modern Booking - Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
          bookingState={bookingState}
          onAction={openBooking}
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
