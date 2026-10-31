import { useCallback, useEffect, useMemo, useState } from "react";

function createInitialForm(content) {
  return {
    name: "",
    phone: "",
    location:
      content?.locations?.[0] ||
      content?.areas?.[0] ||
      "Dubai",
    date: "",
  };
}

export default function useBookingRequest({ content = {}, contact = {} } = {}) {
  const safeContent = content || {};
  const safeContact = contact || {};
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [form, setForm] = useState(() => createInitialForm(safeContent));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [modalOpen]);

  const openBooking = useCallback(
    (itemName) => {
      setSelectedItem(itemName || safeContent.defaultService || "");
      setSubmitted(false);
      setModalOpen(true);
    },
    [safeContent.defaultService]
  );

  const closeBooking = useCallback(() => setModalOpen(false), []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const itemName = selectedItem || safeContent.defaultService || "AC Service";
      const messageGreeting = safeContent.messageGreeting || "Hello FAJ, I would like to request";
      const labels = safeContent.messageLabels || {
        name: "Name",
        phone: "Phone",
        location: "Location",
        date: "Preferred Date",
        page: "Service Page",
      };
      const message = [
        `${messageGreeting} ${itemName}.`,
        `${labels.name || "Name"}: ${form.name}`,
        `${labels.phone || "Phone"}: ${form.phone}`,
        `${labels.location || "Location"}: ${form.location}`,
        `${labels.date || "Date"}: ${form.date}`,
        `${labels.page || "Page"}: ${window.location.href}`,
      ].join("\n");

      const waNumber = safeContact.whatsapp || "971507464712";
      window.open(
        `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setSubmitted(true);
    },
    [safeContact.whatsapp, safeContent, form, selectedItem]
  );

  const bookingState = useMemo(
    () => ({ form, setForm, onSubmit, submitted }),
    [form, onSubmit, submitted]
  );

  return {
    modalOpen,
    selectedItem,
    openBooking,
    closeBooking,
    bookingState,
  };
}
