/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      boxShadow: {
        xs: "0 1px 8px 0px rgba(0, 0, 0, 0.08)",
        sm: "0 2px 8px 0px rgba(0, 0, 0, 0.08)",
        md: "0 4px 16px 0px rgba(0, 0, 0, 0.08)",
        lg: "0 6px 24px 0px rgba(0, 0, 0, 0.08)",
        xl: "0 10px 36px 0px rgba(0, 0, 0, 0.08)",
        "2xl": "0 24px 64px 0px rgba(0, 0, 0, 0.08)",
        inner: "inset 0 2px 8px 0px rgba(0, 0, 0, 0.08)",
        none: "0 0 rgba(0, 0, 0, 0)",
      },
      dropShadow: {
        xs: "0 1px 8px 0px rgba(0, 0, 0, 0.08)",
        sm: "0 2px 8px 0px rgba(0, 0, 0, 0.08)",
        md: "0 4px 16px 0px rgba(0, 0, 0, 0.08)",
        lg: "0 6px 24px 0px rgba(0, 0, 0, 0.08)",
        xl: "0 10px 36px 0px rgba(0, 0, 0, 0.08)",
        "2xl": "0 24px 64px 0px rgba(0, 0, 0, 0.08)",
        inner: "inset 0 2px 8px 0px rgba(0, 0, 0, 0.08)",
        none: "0 0 rgba(0, 0, 0, 0)",
      },
      backdropBlur: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
      },
      divideWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
      },
      ringWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
      },
      outlineWidth: {
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
      },
      textDecorationThickness: {
        auto: "auto",
        "from-font": "from-font",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px",
      },
      transitionTimingFunction: {
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },
    },
  },
};
