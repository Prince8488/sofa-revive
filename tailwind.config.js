/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // "Brand" is your primary blue.
        // 600 is your main accent, 950 is for deep 'almost-black' UI elements.
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // Your Signature DreamDecore Blue
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // "Studio" is your neutral scale.
        // We use a "Slate" base which has a hint of blue to keep it 'premium' and cool.
        studio: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a", // Your Signature "Black" for headers
          950: "#020617",
        },
      },
      // Integrated Typography Scale from our previous step
      fontSize: {
        display: [
          "clamp(3.5rem, 8vw, 6.5rem)",
          {
            lineHeight: "0.9",
            letterSpacing: "-0.05em",
            fontWeight: "900",
          },
        ],
        heading: [
          "clamp(2.25rem, 5vw, 3.75rem)",
          {
            lineHeight: "1",
            letterSpacing: "-0.02em",
            fontWeight: "900",
          },
        ],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
};
