import { memo } from "react";

function BookingFields({ content, form, setForm, prefix }) {
  const update = (field) => (event) =>
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));

  return (
    <div className="service-landing__form-grid">
      <label htmlFor={`${prefix}-name`}>
        <span>{content.fields.name.label}</span>
        <input
          id={`${prefix}-name`}
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          placeholder={content.fields.name.placeholder}
          required
        />
      </label>

      <label htmlFor={`${prefix}-phone`}>
        <span>{content.fields.phone.label}</span>
        <input
          id={`${prefix}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={update("phone")}
          placeholder={content.fields.phone.placeholder}
          required
        />
      </label>

      <label htmlFor={`${prefix}-location`}>
        <span>{content.fields.location.label}</span>
        <select
          id={`${prefix}-location`}
          autoComplete="address-level2"
          value={form.location}
          onChange={update("location")}
        >
          {content.locations.map((location) => (
            <option value={location} key={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor={`${prefix}-date`}>
        <span>{content.fields.date.label}</span>
        <input
          id={`${prefix}-date`}
          type="date"
          value={form.date}
          onChange={update("date")}
          required
        />
      </label>
    </div>
  );
}

export default memo(BookingFields);
