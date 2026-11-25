import BreadCumb from "../Components/Common/BreadCumb";
import { ScrollSlide } from "../Components/Animations/ScrollAnimation";
import SectionHeader from "../Components/ServicePageSections/SectionHeader";
import {
  getCloudflareImageSrcSet,
  getCloudflareImageUrl,
} from "../utils/cloudflareImages";
import {
  AboutHeroSection,
  AccordionSection,
  ActionCardsSection,
  BookingModal,
  ContentCardSection,
  ModernBookingSection,
  NumberedGridSection,
  PageMetadata,
  SplitMediaSection,
  TestimonialsSection,
  useBookingRequest,
} from "../Components/ServicePageSections";
import "../Components/ServicePageSections/ServicePageSections.css";
import pageData from "../data/servicePages/pcbRepair";

function PcbSpecialistsSection({ content, tone = "soft" }) {
  if (!content?.cards?.length) return null;

  return (
    <section className={`service-landing__section is-${tone}`} id={content.id}>
      <div className="service-landing__container">
        <SectionHeader content={content} light={tone === "dark"} />

        <div className="service-landing__pcb-cards-stack">
          {content.cards.map((card, idx) => {
            const imageSrc = getCloudflareImageUrl(card.image, "tablet");
            const imageSrcSet = getCloudflareImageSrcSet(card.image);

            return (
              <ScrollSlide direction="up" delay={idx * 0.08} key={card.title}>
                <article
                  className={`service-landing__pcb-split-card ${
                    card.imageSide === "right"
                      ? "is-image-right"
                      : "is-image-left"
                  }`}
                >
                  <div className="service-landing__pcb-card-media">
                    <img
                      src={imageSrc}
                      srcSet={imageSrcSet}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={card.alt || card.title}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                  </div>

                  <div className="service-landing__pcb-card-copy">
                    <h3 className="service-landing__pcb-card-title">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <div className="service-landing__pcb-card-subtitle">
                        {card.subtitle}
                      </div>
                    )}
                    <ul className="service-landing__pcb-card-bullets">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollSlide>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
        {/* Section 1: Hero (Screenshot 1) */}
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

        {/* Section 2: Terms & Conditions Inspection Fee (Screenshot 2) */}
        <ContentCardSection
          content={pageData.terms}
          tone="soft"
          plain={false}
        />

        {/* Section 3: Affordable Electronics PCB Repair / Split Media (Screenshot 3) */}
        <SplitMediaSection
          content={pageData.serviceOverview}
          imageSide="left"
          showPhone={false}
          showWhatsapp={true}
          showCta={true}
          tone="white"
        />

        {/* Section 4: Why Choose Our PCB Repair Services (Screenshot 4) */}
        <ActionCardsSection
          content={pageData.whyChooseUs}
          tone="soft"
          columns="three"
        />

        {/* Section 5: Our Repair Process (Screenshot 5) */}
        <NumberedGridSection
          content={pageData.repairProcess}
          columns="three"
          showPhone={false}
          showWhatsapp={true}
          showCta={true}
          tone="white"
        />

        {/* Section 6: PCB Specialists Cards - Industrial, Commercial, Consumer (Screenshots 6, 7, 8) */}
        <PcbSpecialistsSection
          content={pageData.pcbSpecialists}
          tone="soft"
        />

        {/* Section 7: News & Updates / Blogs (Screenshot 9) */}
        <ActionCardsSection
          content={pageData.blogs}
          columns="three"
          tone="white"
        />

        {/* Section 8: Customer Testimonials (Screenshot 10) */}
        <TestimonialsSection
          content={pageData.testimonials}
          tone="soft"
        />

        {/* Section 9: PCB Repair FAQs (Screenshot 11 — Second Last) */}
        <AccordionSection
          content={pageData.faqs}
          contact={pageData.contact}
          tone="white"
        />

        {/* Section 10: Book A PCB Repair Service Appointment Form (Screenshot 12 — Bottom) */}
        <ModernBookingSection
          content={pageData.booking}
          contact={pageData.contact}
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
