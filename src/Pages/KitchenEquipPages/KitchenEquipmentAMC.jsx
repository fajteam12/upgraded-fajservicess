import BreadCumb from "../../Components/Common/BreadCumb";
import MaintenanceBenefits from "../../Components/MaintenanceBenefits/MaintenanceBenefits";
import { ScrollSlide } from "../../Components/Animations/ScrollAnimation";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  PlanCardsSection,
  SearchableDirectorySection,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../../Components/ServicePageSections";
import "../../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../../data/servicePages/kitchenEquipmentAmc";

function AmcStackedCardsSection({ content, tone = "soft" }) {
  if (!content?.cards?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`} id={content.id}>
      <div className="service-landing__narrow">
        <div className="service-landing__amc-stacked-stack">
          {content.cards.map((card, idx) => (
            <div key={idx} className="service-landing__amc-stacked-block">
              <div className="service-landing__header service-landing__amc-stacked-header">
                <h2 className="service-landing__title">{card.title}</h2>
                <div className="service-landing__divider" aria-hidden="true" />
              </div>
              <ScrollSlide direction="up" delay={idx * 0.1}>
                <article className="service-landing__statement-card">
                  {card.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </article>
              </ScrollSlide>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function KitchenEquipmentAMC() {
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
        {/* Section 1: Hero (Screenshot 1) */}
        <AboutHeroSection
          content={pageData.hero}
          contact={pageData.contact}
          onPrimaryAction={openBooking}
          contentWidth={pageData.hero.contentWidth || "50%"}
          showPhone={false}
          showCall={false}
          showWhatsapp={true}
          tone="white"
        />

        <BreadCumb />

        {/* Section 2: Complete AMC & Emergency Support Banner (Screenshot 2) */}
        <ContentCardSection
          content={pageData.banner}
          tone="soft"
          plain={true}
        />

        {/* Section 3: Explore FAJ's Appliances Maintenance Agreement (Screenshot 3) */}
        <SplitMediaSection
          content={pageData.exploreAgreement}
          imageSide="left"
          tone="white"
          showPhone={false}
          showWhatsapp={true}
          showCta={true}
        />

        {/* Section 4: Stacked PPM & Peace of Mind Cards (Screenshot 4) */}
        <AmcStackedCardsSection
          content={pageData.stackedCards}
          tone="soft"
        />

        {/* Section 5: The Importance of Kitchen Equipment AMC (Screenshot 5) */}
        <NumberedGridSection
          content={pageData.maintenanceImportance}
          columns="three"
          tone="white"
          showPhone={false}
          showWhatsapp={false}
          showCta={false}
        />

        {/* Section 6: Common Kitchen Equipment Problems That May Require Maintenance */}
        <NumberedGridSection
          content={pageData.commonProblems}
          columns="four"
          tone="soft"
          showPhone={false}
          showWhatsapp={true}
          showCta={true}
        />

        {/* Section 7: Maintenance Services We Offer (Screenshot 7 - 5 items: 3 top, 2 centered) */}
        <ActionCardsSection
          content={pageData.maintenanceServices}
          columns="three"
          tone="white"
        />

        {/* Section 8: Preventive Maintenance Outcomes / Benefits (Screenshot 8) */}
        <MaintenanceBenefits
          {...pageData.benefits}
          tone="soft"
        />

        {/* Section 9: Choose Us for Reliable, Exceptional Service (Screenshot 9) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          columns="three"
          tone="white"
          showPhone={false}
          showWhatsapp={true}
          showCta={true}
        />

        {/* Section 10: What is Included in an Appliance Maintenance Contract? (Screenshot 10) */}
        <SplitMediaSection
          content={pageData.contractInclusions}
          imageSide="right"
          tone="soft"
          showPhone={false}
          showWhatsapp={false}
          showCta={false}
        />

        {/* Section 11: Multi-Brand Expertise / Categories Directory (Screenshot 11) */}
        <SearchableDirectorySection
          content={pageData.coverage}
          columns="four"
          onAction={openBooking}
          tone="white"
        />

        {/* Section 12: Commercial Kitchen Maintenance Contracts (Screenshot 12) */}
        <PlanCardsSection
          content={pageData.contracts}
          onAction={openBooking}
          tone="dark"
        />

        {/* Section 13: News & Updates / Blogs (Screenshot 13) */}
        <ActionCardsSection
          content={pageData.blogs}
          columns="three"
          tone="white"
        />

        {/* Section 14: Direct Testimonials (Screenshot 14) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 15: Commercial Kitchen Equipment FAQs (SECOND LAST) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 16: Request AMC Service Form (Screenshot 15 — AT THE BOTTOM) */}
        <ModernBookingSection
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
