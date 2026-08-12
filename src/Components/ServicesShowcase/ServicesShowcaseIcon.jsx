import { createElement, memo } from "react";

// Lucide icon paths from lucide-static v0.546.0 (ISC license), matching
// the icons selected in the original AI Studio Services design.
const ICON_NODES = {
  coffee: [
    ["path", { d: "M10 2v2" }],
    ["path", { d: "M14 2v2" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      },
    ],
    ["path", { d: "M6 2v2" }],
  ],
  flame: [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
      },
    ],
  ],
  refrigerator: [
    [
      "path",
      {
        d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
      },
    ],
    ["path", { d: "M5 10h14" }],
    ["path", { d: "M15 7v6" }],
  ],
  droplets: [
    [
      "path",
      {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      },
    ],
    [
      "path",
      {
        d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      },
    ],
  ],
  "washing-machine": [
    ["path", { d: "M3 6h3" }],
    ["path", { d: "M17 6h.01" }],
    ["rect", { width: 18, height: 20, x: 3, y: 2, rx: 2 }],
    ["circle", { cx: 12, cy: 13, r: 5 }],
    [
      "path",
      { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" },
    ],
  ],
  "chef-hat": [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      },
    ],
    ["path", { d: "M6 17h12" }],
  ],
  wrench: [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      },
    ],
  ],
  fan: [
    [
      "path",
      {
        d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      },
    ],
    ["path", { d: "M12 12v.01" }],
  ],
  sparkles: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      },
    ],
    ["path", { d: "M20 2v4" }],
    ["path", { d: "M22 4h-4" }],
    ["circle", { cx: 4, cy: 20, r: 2 }],
  ],
  plug: [
    ["path", { d: "M12 22v-5" }],
    ["path", { d: "M9 8V2" }],
    ["path", { d: "M15 8V2" }],
    ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }],
  ],
  snowflake: [
    ["path", { d: "m10 20-1.25-2.5L6 18" }],
    ["path", { d: "M10 4 8.75 6.5 6 6" }],
    ["path", { d: "m14 20 1.25-2.5L18 18" }],
    ["path", { d: "m14 4 1.25 2.5L18 6" }],
    ["path", { d: "m17 21-3-6h-4" }],
    ["path", { d: "m17 3-3 6 1.5 3" }],
    ["path", { d: "M2 12h6.5L10 9" }],
    ["path", { d: "m20 10-1.5 2 1.5 2" }],
    ["path", { d: "M22 12h-6.5L14 15" }],
    ["path", { d: "m4 10 1.5 2L4 14" }],
    ["path", { d: "m7 21 3-6-1.5-3" }],
    ["path", { d: "m7 3 3 6h4" }],
  ],
  gauge: [
    ["path", { d: "m12 14 4-4" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }],
  ],
};

function ServicesShowcaseIcon({ name = "wrench", className = "" }) {
  const nodes = ICON_NODES[name] || ICON_NODES.wrench;

  return (
    <svg
      className={`services-showcase-icon ${className}`.trim()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden="true"
    >
      {nodes.map(([tag, attributes], index) =>
        createElement(tag, { ...attributes, key: `${name}-${index}` })
      )}
    </svg>
  );
}

export default memo(ServicesShowcaseIcon);
