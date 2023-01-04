/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

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
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
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
        highest: "999",
      },
      colors: {
        gray: {
          50: "hsla(var(--color-gray-50), <alpha-value>)",
          100: "hsla(var(--color-gray-100), <alpha-value>)",
          200: "hsla(var(--color-gray-200), <alpha-value>)",
          300: "hsla(var(--color-gray-300), <alpha-value>)",
          400: "hsla(var(--color-gray-400), <alpha-value>)",
          500: "hsla(var(--color-gray-500), <alpha-value>)",
          600: "hsla(var(--color-gray-600), <alpha-value>)",
          700: "hsla(var(--color-gray-700), <alpha-value>)",
          800: "hsla(var(--color-gray-800), <alpha-value>)",
          900: "hsla(var(--color-gray-900), <alpha-value>)",
        },
        content: {
          DEFAULT: "hsla(var(--color-content-base), <alpha-value>)",
          weak: "hsla(var(--color-content-weak), <alpha-value>)",
          strong: "hsla(var(--color-content-strong), <alpha-value>)",
          inverted: "hsla(var(--color-content-inverted), <alpha-value>)",
        },
        body: {
          DEFAULT: "hsla(var(--color-body), <alpha-value>)",
          50: "hsla(var(--color-body-50), <alpha-value>)",
          100: "hsla(var(--color-body-100), <alpha-value>)",
          200: "hsla(var(--color-body-200), <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsla(var(--color-primary-base), <alpha-value>)",
          effect: "hsla(var(--color-primary-effect), <alpha-value>)",
          content: "hsla(var(--color-primary-content), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsla(var(--color-secondary-base), <alpha-value>)",
          effect: "hsla(var(--color-secondary-effect), <alpha-value>)",
          content: "hsla(var(--color-secondary-content), <alpha-value>)",
        },
        neutral: {
          DEFAULT: "hsla(var(--color-neutral-base), <alpha-value>)",
          effect: "hsla(var(--color-neutral-effect), <alpha-value>)",
          content: "hsla(var(--color-neutral-content), <alpha-value>)",
        },
        success: {
          DEFAULT: "hsla(var(--color-success-base), <alpha-value>)",
          effect: "hsla(var(--color-success-effect), <alpha-value>)",
          content: "hsla(var(--color-success-content), <alpha-value>)",
        },
        error: {
          DEFAULT: "hsla(var(--color-error-base), <alpha-value>)",
          effect: "hsla(var(--color-error-effect), <alpha-value>)",
          content: "hsla(var(--color-error-content), <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsla(var(--color-warning-base), <alpha-value>)",
          effect: "hsla(var(--color-warning-effect), <alpha-value>)",
          content: "hsla(var(--color-warning-content), <alpha-value>)",
        },
        info: {
          DEFAULT: "hsla(var(--color-info-base), <alpha-value>)",
          effect: "hsla(var(--color-info-effect), <alpha-value>)",
          content: "hsla(var(--color-info-content), <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes -> https://github.com/tailwindlabs/tailwindcss-forms
    }),
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
};
