// Placeholder portrait — replace the PORTRAIT value later with your real image.
// For now this renders a blue square with "JE" — it keeps the layout working.
export const PORTRAIT =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
      <rect width="300" height="400" fill="#1a1a8c"/>
      <text x="150" y="230" font-family="monospace" font-size="90" fill="#ffd23f" text-anchor="middle">JE</text>
    </svg>`,
  );

// Project images — leave empty for now. Projects.jsx will render SVG mocks
// until you provide real images here later.
export const ELV = "";
export const PET = "";
export const HR = "";
export const KIDO = "";
