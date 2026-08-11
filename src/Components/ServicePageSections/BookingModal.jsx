import { memo } from "react";
import BookingForm from "./BookingForm";

function BookingModal({
  content,
  open,
  onClose,
  selectedItem,
  bookingState,
}) {
  if (!open) return null;

  return (
    <div
      className="service-landing__modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="service-landing__modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="page-booking-modal-title"
      >
        <button
          type="button"
          className="service-landing__modal-close"
          onClick={onClose}
          aria-label={content.modal.closeLabel}
        >
          {"\u00D7"}
        </button>
        <span className="service-landing__modal-eyebrow">
          {content.modal.eyebrow}
        </span>
        <h2 id="page-booking-modal-title">
          {selectedItem || content.defaultService}
        </h2>
        <p>{content.modal.description}</p>
        <BookingForm
          content={content}
          {...bookingState}
          submitLabel={content.modal.submitLabel}
          prefix="modal-booking"
        />
      </section>
    </div>
  );
}

export default memo(BookingModal);
