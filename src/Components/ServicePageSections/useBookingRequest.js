import { useCallback, useEffect, useMemo, useState } from "react";

function createInitialForm(content) {
  return {
    name: "",
    phone: "",
    location: content.locations?.[0] || "",
    date: "",
  };
}

export default function useBookingRequest({ content, contact }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [form, setForm] = useState(() => createInitialForm(content));
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
      setSelectedItem(itemName || content.defaultService);
      setSubmitted(false);
      setModalOpen(true);
    },
    [content.defaultService]
  );

  const closeBooking = useCallback(() => setModalOpen(false), []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const itemName = selectedItem || content.defaultService;
      const message = [
        `${content.messageGreeting} ${itemName}.`,
        `${content.messageLabels.name}: ${form.name}`,
        `${content.messageLabels.phone}: ${form.phone}`,
        `${content.messageLabels.location}: ${form.location}`,
        `${content.messageLabels.date}: ${form.date}`,
        `${content.messageLabels.page}: ${window.location.href}`,
      ].join("\n");

      window.open(
        `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setSubmitted(true);
    },
    [contact.whatsapp, content, form, selectedItem]
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
