/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    screens: {
      xs: "374px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: [
        "var(--font-sans)",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: ["var(--font-serif)", "serif", "ui-serif", "Georgia"],
      display: [
        "var(--font-display)",
        "sans-serif",
        "ui-sans-serif",
        "system-ui",
      ],
      mono: ["var(--font-mono)", "monospace", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      fontSize: {
        "10xl": ["9rem", { lineHeight: "1" }],
      },
      zIndex: {
        dropbown: "100",
        "sticky-below": "225",
        sticky: "250",
        "sticky-above": "275",
        "fixed-below": "325",
        fixed: "350",
        "fixed-above": "375",
        "offcanvas-below": "425",
        offcanvas: "450",
        "offcanvas-above": "475",
        "popover-below": "525",
        popover: "550",
        "popover-above": "575",
        "modal-below": "625",
        modal: "650",
        "modal-above": "675",
        tooltip: "700",
        highest: "9999",
      },
      colors: {
        gray: {
          50: "hsl(var(--token-gray-50) / <alpha-value>)",
          100: "hsl(var(--token-gray-100) / <alpha-value>)",
          200: "hsl(var(--token-gray-200) / <alpha-value>)",
          300: "hsl(var(--token-gray-300) / <alpha-value>)",
          400: "hsl(var(--token-gray-400) / <alpha-value>)",
          500: "hsl(var(--token-gray-500) / <alpha-value>)",
          600: "hsl(var(--token-gray-600) / <alpha-value>)",
          700: "hsl(var(--token-gray-700) / <alpha-value>)",
          800: "hsl(var(--token-gray-800) / <alpha-value>)",
          900: "hsl(var(--token-gray-900) / <alpha-value>)",
          950: "hsl(var(--token-gray-950) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--ui-color-surface) / <alpha-value>)",
          50: "hsl(var(--ui-color-surface-50) / <alpha-value>)",
          100: "hsl(var(--ui-color-surface-100) / <alpha-value>)",
          200: "hsl(var(--ui-color-surface-200) / <alpha-value>)",
          300: "hsl(var(--ui-color-surface-300) / <alpha-value>)",
        },
        body: {
          DEFAULT: "hsl(var(--ui-color-body) / <alpha-value>)",
          muted: "hsl(var(--ui-color-body-muted) / <alpha-value>)",
          rich: "hsl(var(--ui-color-body-rich) / <alpha-value>)",
          invert: "hsl(var(--ui-color-body-invert) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--ui-color-primary) / <alpha-value>)",
          hover: "hsl(var(--ui-color-primary-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-primary-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-primary-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-primary-subtle-content) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--ui-color-secondary) / <alpha-value>)",
          hover: "hsl(var(--ui-color-secondary-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-secondary-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-secondary-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-secondary-subtle-content) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--ui-color-success) / <alpha-value>)",
          hover: "hsl(var(--ui-color-success-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-success-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-success-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-success-subtle-content) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--ui-color-warning) / <alpha-value>)",
          hover: "hsl(var(--ui-color-warning-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-warning-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-warning-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-warning-subtle-content) / <alpha-value>)",
        },
        error: {
          DEFAULT: "hsl(var(--ui-color-error) / <alpha-value>)",
          hover: "hsl(var(--ui-color-error-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-error-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-error-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-error-subtle-content) / <alpha-value>)",
        },
        neutral: {
          DEFAULT: "hsl(var(--ui-color-neutral) / <alpha-value>)",
          hover: "hsl(var(--ui-color-neutral-hover) / <alpha-value>)",
          content: "hsl(var(--ui-color-neutral-content) / <alpha-value>)",
          subtle: "hsl(var(--ui-color-neutral-subtle) / <alpha-value>)",
          "subtle-content":
            "hsl(var(--ui-color-neutral-subtle-content) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
};
