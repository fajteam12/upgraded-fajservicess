import { memo } from "react";

const commonProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

function ServiceIcon({ name = "wrench" }) {
  switch (name) {
    case "ac-wrench":
    case "ac-repair":
      return <svg {...commonProps}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/><path d="M4 4l3 3M17 17l3 3"/></svg>;
    case "ac-wash":
    case "ac-cleaning":
      return <svg {...commonProps}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>;
    case "ac-shield":
    case "ac-maintenance":
      return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "ac-mount":
    case "ac-installation":
      return <svg {...commonProps}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 2v4M8 4l4-4 4 4"/><path d="M6 12h12M6 15h6"/><circle cx="18" cy="14" r="1" fill="currentColor"/></svg>;
    case "ac-lightning":
    case "ac-emergency":
      return <svg {...commonProps}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M12 2v3M5 3l2 2M19 3l-2 2"/><path d="M4 17l-2 2M20 17l2 2"/></svg>;
    case "ac-sun":
    case "ac-sun-snowflake":
    case "ac-summer":
      return <svg {...commonProps}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/><path d="M9 12h6M12 9v6"/></svg>;
    case "ac-split":
      return <svg {...commonProps}><rect x="2" y="5" width="20" height="9" rx="2"/><path d="M6 10h12"/><path d="M5 18c2-1 4-1 6 0s4 1 6 0"/><circle cx="18" cy="8" r="0.75" fill="currentColor"/></svg>;
    case "ac-ducted":
      return <svg {...commonProps}><rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M5 10h14M5 14h14"/></svg>;
    case "ac-cassette":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M8 8L4 4M16 8l4-4M16 16l4 4M8 16l-4 4"/></svg>;
    case "ac-central":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6.5 6.5l11 11M6.5 17.5l11-11"/></svg>;
    case "ac-vrv":
      return <svg {...commonProps}><rect x="2" y="2" width="7" height="7" rx="1.5"/><rect x="15" y="2" width="7" height="7" rx="1.5"/><rect x="2" y="15" width="7" height="7" rx="1.5"/><rect x="15" y="15" width="7" height="7" rx="1.5"/><path d="M5.5 9v6M18.5 9v6M9 5.5h6M9 18.5h6"/></svg>;
    case "ac-chiller":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>;
    case "ac-package":
      return <svg {...commonProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 11h20M9 4v7M15 4v7M6 16h3M15 16h3"/></svg>;
    case "ac-standing":
      return <svg {...commonProps}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M7 6h10M10 10h4M10 13h4M10 16h4M9 19h6"/></svg>;
    case "ac-window":
      return <svg {...commonProps}><rect x="2" y="5" width="20" height="14" rx="2"/><rect x="4" y="8" width="9" height="8" rx="1"/><path d="M15 9h5M15 12h5M15 15h5"/></svg>;
    case "ac-thermostat":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>;
    case "ac-duct-clean":
      return <svg {...commonProps}><path d="M4 14h6a2 2 0 0 0 2-2V4"/><circle cx="12" cy="4" r="2"/><path d="M15 8h5M13 12h7M16 16h4M3 19h18"/></svg>;
    case "ac-gas-leak":
      return <svg {...commonProps}><circle cx="8" cy="8" r="5"/><circle cx="16" cy="8" r="5"/><path d="M8 8l2-2M16 8l-2-2M8 13v5l4 3 4-3v-5"/></svg>;
    case "ac-air-filter":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>;
    case "ac-drain":
      return <svg {...commonProps}><path d="M3 6h18v4H3z"/><path d="M8 10v6a4 4 0 0 0 8 0v-6"/><path d="M12 16v5M10 21h4"/></svg>;
    case "ac-inverter":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M6 12c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 3-3M6 8h.01M6 16h.01"/></svg>;
    case "washing-machine":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 7h18M7 4.5h.01M10 4.5h.01"/><circle cx="12" cy="14" r="5"/><path d="M9.5 13.5c1.3 1.1 3.7 1.1 5 0"/></svg>;
    case "washer-repair":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 7h18M7 4.5h.01M10 4.5h.01"/><circle cx="12" cy="14" r="5"/><path d="M14 14l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "washer-install":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 7h18M7 4.5h.01M10 4.5h.01"/><circle cx="12" cy="14" r="5"/><path d="M12 11v6M10 13l2-2 2 2"/></svg>;
    case "dryer":
      return <svg {...commonProps}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M4 7h16M8 4.5h.01M11 4.5h.01"/><circle cx="12" cy="14" r="5"/><path d="M9 15c1.5-2 4.5-2 6 0"/></svg>;
    case "dryer-repair":
      return <svg {...commonProps}><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M9 15c1.5-2 4.5-2 6 0"/><path d="M14 14l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "refrigerator":
      return <svg {...commonProps}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 9h14M8 5v2M8 12v3"/></svg>;
    case "fridge-repair":
      return <svg {...commonProps}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 9h14M8 5v2M8 12v3"/><path d="M13 16l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "fridge-install":
      return <svg {...commonProps}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M5 9h14M8 5v2M8 12v3"/><path d="M12 12v5M10 14l2-2 2 2"/></svg>;
    case "freezer":
      return <svg {...commonProps}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 11h16M12 7h.01M12 15h.01M8 16l8-8M8 8l8 8"/></svg>;
    case "dishwasher":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M10 5.5h.01"/><path d="M7 14h10M9 17h6"/></svg>;
    case "dishwasher-repair":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M10 5.5h.01"/><circle cx="12" cy="14" r="4"/><path d="M14 14l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "dishwasher-install":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18"/><path d="M12 11v6M9 14l3-3 3 3"/></svg>;
    case "home-oven":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M12 5.5h.01M17 5.5h.01"/><rect x="6" y="11" width="12" height="7" rx="1"/></svg>;
    case "oven-repair":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M12 5.5h.01M17 5.5h.01"/><rect x="6" y="11" width="12" height="7" rx="1"/><path d="M14 14l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "oven-install":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M12 5.5h.01M17 5.5h.01"/><path d="M12 11v6M9 14l3-3 3 3"/></svg>;
    case "gas-hob":
      return <svg {...commonProps}><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="7" cy="9" r="2.5"/><circle cx="17" cy="9" r="2.5"/><circle cx="7" cy="16" r="1.5"/><circle cx="17" cy="16" r="1.5"/><circle cx="12" cy="12.5" r="3"/></svg>;
    case "gas-range":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 6h18M6 4h2M11 4h2M16 4h2"/><rect x="6" y="9" width="12" height="9" rx="1"/><path d="M6 20h12"/></svg>;
    case "cooker-repair":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><circle cx="8" cy="4" r="1"/><circle cx="12" cy="4" r="1"/><circle cx="16" cy="4" r="1"/><rect x="6" y="8" width="12" height="9" rx="1"/><path d="M14 13l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "robot-vacuum":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="2.5"/><path d="M8 16c1.5 1 6.5 1 8 0M5 12h2M17 12h2"/></svg>;
    case "cigar-humidor":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M7 4v6M12 4v6M17 4v6"/><circle cx="12" cy="15" r="3"/><path d="M12 15l1.5-1.5"/></svg>;
    case "bbq-grill":
      return <svg {...commonProps}><path d="M4 11h16a8 8 0 0 1-16 0z"/><path d="M4 11a8 8 0 0 1 16 0"/><path d="M12 3v2M7 4l1 2M17 4l-1 2"/><path d="M7 16l-3 6M17 16l3 6M12 16v6M6 19h12"/></svg>;
    case "icemaker-repair":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><rect x="6" y="7" width="5" height="5" rx="1"/><rect x="13" y="7" width="5" height="5" rx="1"/><path d="M6 16h12M12 13v6"/></svg>;
    case "pcb-repair":
      return <svg {...commonProps}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>;
    case "integrated-appliance":
      return <svg {...commonProps}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h6M3 15h6M15 7h3M15 12h3M15 17h3"/></svg>;
    case "small-appliances":
      return <svg {...commonProps}><path d="M4 9h6v10H4zM14 6h6v13h-6z"/><path d="M7 4v5M17 3v3M4 14h6M14 12h6"/></svg>;
    case "vacuum-cleaner":
      return <svg {...commonProps}><circle cx="16" cy="16" r="5"/><path d="M16 11V4M12 4h8M11 16H6a2 2 0 0 0-2 2v2h8"/></svg>;
    case "coffee":
      return <svg {...commonProps}><path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 2v3M12 2v3M4 22h14"/></svg>;
    case "coffee-repair":
      return <svg {...commonProps}><path d="M4 19h16M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"/><rect x="9" y="7" width="6" height="4" rx="1"/><path d="M10 15h4M12 11v4"/><path d="M15 16l4 4a1 1 0 0 0 1.4-1.4l-4-4"/></svg>;
    case "coffee-install":
      return <svg {...commonProps}><path d="M4 19h16M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"/><rect x="9" y="7" width="6" height="4" rx="1"/><path d="M12 11v6M10 13l2-2 2 2"/></svg>;
    case "coffee-espresso":
      return <svg {...commonProps}><path d="M3 10h12v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4z"/><path d="M15 12h5a2 2 0 0 1 0 4h-5M9 18v3M5 21h8M8 6V4M10 6V4"/></svg>;
    case "coffee-grinder":
      return <svg {...commonProps}><path d="M8 2h8l2 6H6l2-6z"/><rect x="7" y="8" width="10" height="8" rx="1"/><path d="M6 16h12v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5z"/><circle cx="12" cy="12" r="1.5"/></svg>;
    case "coffee-bean":
      return <svg {...commonProps}><ellipse cx="12" cy="12" rx="7" ry="9" transform="rotate(30 12 12)"/><path d="M10 6c2 4 1 8 4 12"/></svg>;
    case "coffee-steam":
      return <svg {...commonProps}><path d="M6 4c0 3 2 4 2 7s-2 4-2 7M12 4c0 3 2 4 2 7s-2 4-2 7M18 4c0 3 2 4 2 7s-2 4-2 7"/></svg>;
    case "coffee-commercial":
      return <svg {...commonProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 9h3M15 9h3M7.5 9v5M16.5 9v5"/><circle cx="12" cy="9" r="2"/><path d="M4 17h16M2 20h20"/></svg>;
    case "coffee-service":
      return <svg {...commonProps}><path d="M4 19h16M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"/><circle cx="12" cy="10" r="3"/><path d="M12 9v2l1 1"/><path d="M8 15h8"/></svg>;
    case "commercial-dishwasher":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M6 4v6M18 4v6M7 15h10M9 18h6"/></svg>;
    case "commercial-washer":
      return <svg {...commonProps}><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="6"/><circle cx="12" cy="13" r="3"/><path d="M6 5h2M10 5h4M16 5h2"/></svg>;
    case "cold-room":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M15 2v20M6 11h3M18 6l2-1M18 18l2 1"/><path d="M9 10l-2 2 2 2"/></svg>;
    case "blast-freezer":
      return <svg {...commonProps}><rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 8h18M3 16h18"/><path d="M12 2v20M8 5l-2 2M16 5l2 2M8 19l-2-2M16 19l2-2"/></svg>;
    case "meat-grinder":
      return <svg {...commonProps}><path d="M4 6h12v4H4zM16 7l5-2v8l-5-2V7zM8 10v7H5v3h10v-3h-3v-7"/><circle cx="18" cy="9" r="1"/></svg>;
    case "undercounter-fridge":
      return <svg {...commonProps}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M12 5v14M5 9h2M17 9h2M2 9h20"/></svg>;
    case "display-fridge":
      return <svg {...commonProps}><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="6" y="5" width="12" height="14" rx="1"/><path d="M6 9h12M6 13h12M6 16h12"/></svg>;
    case "beverage-cooler":
      return <svg {...commonProps}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h1v6H9zM14 7h1v6h-1zM5 15h14"/></svg>;
    case "van-chiller":
      return <svg {...commonProps}><rect x="2" y="6" width="13" height="11" rx="2"/><path d="M15 9h4l3 3v5h-7V9z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 4h3v2H7z"/></svg>;
    case "biomedical-cooling":
      return <svg {...commonProps}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 7v6M9 10h6"/><path d="M8 17h8"/></svg>;
    case "sushi-fridge":
      return <svg {...commonProps}><rect x="2" y="7" width="20" height="12" rx="3"/><path d="M2 13h20M6 10h3M15 10h3"/></svg>;
    case "chef-kitchen":
      return <svg {...commonProps}><path d="M6 15h12l1-5a4 4 0 0 0-5.2-4.7A4 4 0 0 0 6.2 6 4 4 0 0 0 5 14l1 1Z"/><path d="M6 15v5h12v-5M9 18h6"/></svg>;
    case "catering-equip":
      return <svg {...commonProps}><ellipse cx="12" cy="7" rx="9" ry="3"/><path d="M3 7v6c0 1.66 4 3 9 3s9-1.34 9-3V7M6 16v4M18 16v4"/></svg>;
    case "amc-contract":
      return <svg {...commonProps}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/><circle cx="9" cy="9" r="1" fill="currentColor"/></svg>;
    case "shield":
      return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "shield-check":
      return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "clock":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "clock-urgent":
      return <svg {...commonProps}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M12 2v3M5 3l2 2M19 3l-2 2"/></svg>;
    case "dollar-sign":
    case "dollar":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><path d="M16 8.5c-.8-1-2-1.5-3.6-1.5-2 0-3.4 1-3.4 2.5 0 3.8 7 1.2 7 5 0 1.5-1.4 2.5-3.6 2.5-1.8 0-3.2-.6-4-1.7M12 5v14"/></svg>;
    case "dollar-savings":
      return <svg {...commonProps}><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01M6 2v4M18 2v4"/></svg>;
    case "budget-check":
      return <svg {...commonProps}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/><path d="M13 11l2 2 4-4"/></svg>;
    case "award":
      return <svg {...commonProps}><circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9"/></svg>;
    case "tool":
    case "repair":
    case "wrench":
      return <svg {...commonProps}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
    case "wrench-screwdriver":
      return <svg {...commonProps}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/><path d="M4 20l4-4M16 4l4 4"/></svg>;
    case "zap":
      return <svg {...commonProps}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>;
    case "thermometer":
      return <svg {...commonProps}><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 9v7"/></svg>;
    case "wind":
      return <svg {...commonProps}><path d="M3 8h10a2 2 0 1 0-2-2M3 12h15a2 2 0 1 1-2 2M3 16h8"/></svg>;
    case "droplet":
      return <svg {...commonProps}><path d="M12 2s6 6.3 6 12a6 6 0 0 1-12 0c0-5.7 6-12 6-12Z"/></svg>;
    case "sparkles":
      return <svg {...commonProps}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/></svg>;
    case "flame":
      return <svg {...commonProps}><path d="M12 22c5 0 8-3.6 8-8 0-3.7-2.1-6.8-5.2-9.7.2 3-1.1 5.1-2.8 6.2.2-3.9-2.2-6.8-4.2-8.5.2 4.8-3.8 7.8-3.8 12 0 4.4 3 8 8 8Z"/><path d="M9.5 18.5c0-1.8 1-3 2.5-4.5 1.5 1.5 2.5 2.7 2.5 4.5"/></svg>;
    case "map-pin":
      return <svg {...commonProps}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "calendar":
      return <svg {...commonProps}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>;
    case "peace-of-mind":
      return <svg {...commonProps}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/><path d="M12 5l-4 4"/></svg>;
    case "damage-control":
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>;
    case "check":
      return <svg {...commonProps}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/></svg>;
    case "alert":
      return <svg {...commonProps}><path d="M10.3 3.8 2.5 17.3A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.7L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>;
    case "snowflake":
      return <svg {...commonProps}><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11M8.5 4 12 7.5 15.5 4M8.5 20l3.5-3.5 3.5 3.5M3.5 10.5 8 12l-4.5 1.5M20.5 10.5 16 12l4.5 1.5"/></svg>;
    case "percent":
      return <svg {...commonProps}><path d="m19 5-14 14"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>;
    case "warehouse":
      return <svg {...commonProps}><path d="m3 9 9-6 9 6v12H3V9Z"/><path d="M7 21v-8h10v8M7 17h10"/></svg>;
    case "lifespan":
      return <svg {...commonProps}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/><circle cx="6" cy="6" r="3"/></svg>;
    case "cleaning":
      return <svg {...commonProps}><path d="M14 8V5a2 2 0 0 0-2-2H9v7l-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10l-3-2z"/><path d="M7 5h5M17 7l2-1"/><circle cx="19" cy="11" r="1.5"/><circle cx="20" cy="16" r="1"/></svg>;
    case "fast-response":
      return <svg {...commonProps}><rect x="1" y="5" width="15" height="11" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/><path d="M2 3h4M1 7h2"/></svg>;
    case "safety-compliance":
      return <svg {...commonProps}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 12l2 2 4-4M9 4v2M15 4v2"/></svg>;
    case "inspection-checklist":
      return <svg {...commonProps}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 11h3M9 15h2"/><circle cx="15.5" cy="15.5" r="3.5"/><path d="M18 18l3 3"/></svg>;
    case "award-expert":
    case "certified-expert":
      return <svg {...commonProps}><circle cx="12" cy="9" r="6"/><path d="m9 9 2 2 4-4"/><path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/></svg>;
    case "gear-precision":
    case "genuine-parts":
      return <svg {...commonProps}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/><path d="m9 12 2 2 4-4"/></svg>;
    case "phone-support":
      return <svg {...commonProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14 2a8 8 0 0 1 8 8M14 6a4 4 0 0 1 4 4"/></svg>;
    case "ac-odour":
      return <svg {...commonProps}><rect x="2" y="4" width="20" height="9" rx="2"/><path d="M6 17c1-1.5 2-1.5 3 0s2 1.5 3 0 2-1.5 3 0M6 20c1-1.5 2-1.5 3 0s2 1.5 3 0 2-1.5 3 0"/><circle cx="18" cy="7" r="0.75" fill="currentColor"/></svg>;
    case "eco-leaf":
      return <svg {...commonProps}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
    case "ice-crusher":
      return <svg {...commonProps}><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11"/><rect x="8" y="8" width="8" height="8" rx="2"/></svg>;
    case "trust-shield":
      return <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "quality-badge":
    case "guarantee-seal":
      return <svg {...commonProps}><circle cx="12" cy="9" r="6"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/><path d="m9.5 9 1.5 1.5 3.5-3.5"/></svg>;
    case "clean-handshake":
      return <svg {...commonProps}><path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6"/><path d="m13 7-2-2a1 1 0 0 0-1.4 0L5.3 9.3a1 1 0 0 0 0 1.4l2.6 2.6"/><path d="m8 13 4 4"/><path d="m16 9-4-4"/></svg>;
    case "search-check":
    case "ac-inspect":
    case "diagnostics":
      return <svg {...commonProps}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="m8 11 2 2 4-4"/></svg>;
    case "customer-feedback":
    case "feedback":
      return (
        <svg {...commonProps}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      );
    case "fan":
    case "ac-fan":
      return (
        <svg {...commonProps}>
          <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "git-branch":
    case "git-fork":
    case "control-path":
    case "route":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
          <path d="M12 12v3" />
        </svg>
      );
    case "arrow-down-circle":
    case "download-circle":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 12 16 16 12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      );
    case "file-cog":
    case "document-cog":
      return (
        <svg {...commonProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="12" cy="15" r="2" />
          <path d="m12 12 .5 1" />
          <path d="m14 13.5-.5.5" />
          <path d="m14.5 15-.5.5" />
          <path d="m13.5 16.5-.5-.5" />
          <path d="m12 18-.5-1" />
          <path d="m10 16.5.5-.5" />
          <path d="m9.5 15 .5-.5" />
          <path d="m10.5 13.5.5-.5" />
        </svg>
      );
    case "rosette-check":
    case "award-check":
      return (
        <svg {...commonProps}>
          <path d="M12 2l2.4 2.4 3.4-.4 1.4 3.1 3.2 1.2-.4 3.4 2.4 2.4-2.4 2.4.4 3.4-3.2 1.2-1.4 3.1-3.4-.4L12 22l-2.4-2.4-3.4.4-1.4-3.1-3.2-1.2.4-3.4L2 12l2.4-2.4-.4-3.4 3.2-1.2 1.4-3.1 3.4.4L12 2z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "shield-dollar":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8M10 10.5c.5-.8 1.4-1 2-1 1.2 0 2 .6 2 1.5s-.8 1.5-2 1.8c-1.2.3-2 .9-2 1.8 0 .9.8 1.4 2 1.4.8 0 1.6-.3 2-1" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
  }
}

export default memo(ServiceIcon);
