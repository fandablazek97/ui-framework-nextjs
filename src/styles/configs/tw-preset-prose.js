module.exports = {
  theme: {
    extend: {
      typography: {
        ui: {
          css: {
            "--tw-prose-body": "hsl(var(--ui-color-body))",
            "--tw-prose-headings": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-lead": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-links": "hsl(var(--ui-color-primary))",
            "--tw-prose-bold": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-counters": "hsl(var(--ui-color-body))",
            "--tw-prose-bullets": "hsl(var(--ui-color-primary))",
            "--tw-prose-hr": "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-quotes": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-quote-borders": "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-captions": "hsl(var(--ui-color-body))",
            "--tw-prose-code": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-pre-code": "hsl(var(--ui-color-body) / 0.2)",
            "--tw-prose-pre-bg": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-th-borders": "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-td-borders": "hsl(var(--ui-color-body) / 0.2)",
            // Invert variants
            // We don't actually need to set these, but in case of using "prose-invert" class
            // and prevent unexpected behavior, we set them to the same value as the default ones
            "--tw-prose-invert-body": "hsl(var(--ui-color-body))",
            "--tw-prose-invert-headings": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-lead": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-links": "hsl(var(--ui-color-primary))",
            "--tw-prose-invert-bold": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-counters": "hsl(var(--ui-color-body))",
            "--tw-prose-invert-bullets": "hsl(var(--ui-color-primary))",
            "--tw-prose-invert-hr": "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-invert-quotes": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-quote-borders":
              "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-invert-captions": "hsl(var(--ui-color-body))",
            "--tw-prose-invert-code": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-pre-code": "hsl(var(--ui-color-body) / 0.2)",
            "--tw-prose-invert-pre-bg": "hsl(var(--ui-color-body-rich))",
            "--tw-prose-invert-th-borders": "hsl(var(--ui-color-body) / 0.3)",
            "--tw-prose-invert-td-borders": "hsl(var(--ui-color-body) / 0.2)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
