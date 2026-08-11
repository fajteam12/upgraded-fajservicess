import { memo } from "react";
import BookingFields from "./BookingFields";

function BookingForm({
  content,
  form,
  setForm,
  onSubmit,
  submitted,
  prefix,
  submitLabel,
}) {
  return (
    <form className="service-landing__booking-form" onSubmit={onSubmit}>
      <BookingFields
        content={content}
        form={form}
        setForm={setForm}
        prefix={prefix}
      />
      <button
        type="submit"
        className="service-landing__button is-dark is-full"
      >
        {submitLabel || content.submitLabel}
      </button>
      {submitted && (
        <p className="service-landing__form-success" role="status">
          {content.successMessage}
        </p>
      )}
    </form>
  );
}

export default memo(BookingForm);
