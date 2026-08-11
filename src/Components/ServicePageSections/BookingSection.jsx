import { memo } from "react";
import BookingForm from "./BookingForm";
import SectionHeader from "./SectionHeader";

function BookingSection({ content, bookingState, tone = "soft" }) {
  if (!content) return null;

  return (
    <section className={`service-landing__section is-${tone}`}>
      <div className="service-landing__booking-card">
        <SectionHeader content={content} light={tone === "dark"} />
        <BookingForm
          content={content}
          {...bookingState}
          prefix="page-booking"
        />
      </div>
    </section>
  );
}

export default memo(BookingSection);
