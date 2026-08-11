import { memo } from "react";

const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

function ServiceIcon({ name = "wrench" }) {
  switch (name) {
    case "snowflake":
      return <svg {...commonProps}><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M8.5 4 12 7.5 15.5 4M8.5 20l3.5-3.5 3.5 3.5M3.5 10.5 8 12l-4.5 1.5M20.5 10.5 16 12l4.5 1.5"/></svg>;
    case "refrigerator":
      return <svg {...commonProps}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 9h12M9 5v1M9 12v2"/></svg>;
    case "warehouse":
      return <svg {...commonProps}><path d="m3 9 9-6 9 6v12H3V9Z"/><path d="M7 21v-8h10v8M7 17h10"/></svg>;
    case "percent":
      return <svg {...commonProps}><path d="m19 5-14 14"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>;
    case "flame":
      return <svg {...commonProps}><path d="M12 22c5 0 8-3.6 8-8 0-3.7-2.1-6.8-5.2-9.7.2 3-1.1 5.1-2.8 6.2.2-3.9-2.2-6.8-4.2-8.5.2 4.8-3.8 7.8-3.8 12 0 4.4 3 8 8 8Z"/><path d="M9.5 18.5c0-1.8 1-3 2.5-4.5 1.5 1.5 2.5 2.7 2.5 4.5"/></svg>;
    case "chef":
      return <svg {...commonProps}><path d="M6 15h12l1-5a4 4 0 0 0-5.2-4.7A4 4 0 0 0 6.2 6 4 4 0 0 0 5 14l1 1Z"/><path d="M6 15v5h12v-5M9 18h6"/></svg>;
    case "shield":
      return <svg {...commonProps}><path d="M12 3 5 6v5c0 4.6 2.9 8.3 7 10 4.1-1.7 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "zap":
      return <svg {...commonProps}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>;
    case "check":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></svg>;
    case "alert":
      return <svg {...commonProps}><path d="M10.3 3.8 2.5 17.3A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>;
    case "thermometer":
      return <svg {...commonProps}><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 9v7"/></svg>;
    case "wind":
      return <svg {...commonProps}><path d="M3 8h10a2 2 0 1 0-2-2M3 12h15a2 2 0 1 1-2 2M3 16h8"/></svg>;
    case "droplet":
      return <svg {...commonProps}><path d="M12 2s6 6.3 6 12a6 6 0 0 1-12 0c0-5.7 6-12 6-12Z"/></svg>;
    case "award":
      return <svg {...commonProps}><circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9"/></svg>;
    default:
      return <svg {...commonProps}><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.4 7.2 6.1 4.9a4 4 0 0 0 5 5L20 18.8 18.8 20l-8.9-8.9a4 4 0 0 0-5-5L7.2 9.4 3.6 13 1.3 10.7a4 4 0 0 0 5 5Z"/></svg>;
  }
}

export default memo(ServiceIcon);
