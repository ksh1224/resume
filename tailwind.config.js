/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const plugin = require("tailwindcss/plugin");

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "36rem",
      },
      colors: {
        gray: {
          50: "#f7f8fa",
          100: "#f2f3f6",
          200: "#eaebee",
          300: "#dcdee3",
          400: "#d1d3d8",
          500: "#adb1ba",
          600: "#868b94",
          700: "#4d5159",
          800: "#393a40",
          900: "#212124",
        },
        carrot: {
          50: "#fff5f0",
          100: "#ffe2d2",
          200: "#ffd2b9",
          300: "#ffbc97",
          400: "#ff9e66",
          500: "#ff6f0f",
          600: "#fa6616",
          700: "#f05705",
          800: "#cc4700",
          900: "#b44104",
          950: "#a03a03",
        },
        blue: {
          50: "#ebf7fa",
          100: "#d2edfa",
          200: "#b9e3fa",
          300: "#87d7ff",
          400: "#57c7ff",
          500: "#009ceb",
          600: "#008ac",
          700: "#0077b2",
          800: "#006199",
          900: "#004c73",
          950: "#003b59",
        },
        red: {
          50: "#fff3f2",
          100: "#ffe5e3",
          200: "#fcd2cf",
          300: "#ffaca6",
          400: "#ff7e75",
          500: "#ff4133",
          600: "#fa2314",
          700: "#e81607",
          800: "#a62014",
          900: "#910c00",
          950: "#821006",
        },
        green: {
          50: "#e8faf6",
          100: "#c7f2e4",
          200: "#96ebc3",
          300: "#6adeac",
          400: "#30c795",
          500: "#1aa174",
          600: "#128c6e",
          700: "#077a5e",
          800: "#06614a",
          900: "#004f40",
          950: "#004034",
        },
        yellow: {
          50: "#fff7e6",
          100: "#ffe3ba",
          200: "#facc87",
          300: "#f7be68",
          400: "#dea651",
          500: "#c27f29",
          600: "#a66c21",
          700: "#805217",
          800: "#6b4717",
          900: "#593d17",
          950: "#4d361a",
        },
        pink: {
          50: "#fff5f5",
          100: "#ffdddb",
          200: "#ffbfc5",
          300: "#ffadb4",
          400: "#ff8a9d",
          500: "#f0657c",
          600: "#db4b6a",
          700: "#bd2b5c",
          800: "#991c45",
          900: "#800d3d",
          950: "#660a30",
        },
        purple: {
          50: "#f6f4fe",
          100: "#e3dafe",
          200: "#d5c7ff",
          300: "#cfbfff",
          400: "#b69eff",
          500: "#9675fa",
          600: "#8361e8",
          700: "#6748c7",
          800: "#4f3699",
          900: "#3f2687",
          950: "#331e70",
        },
        // Alpha colors
        "gray-alpha": {
          50: "#0017580d",
          100: "#15234e1a",
          200: "#19233e33",
          500: "#282e4080",
        },
        "carrot-alpha": {
          50: "#ff6f0f0d",
          100: "#ff6f0f24",
          200: "#ff6f0f33",
        },
        "blue-alpha": {
          50: "#009ceb0d",
          100: "#009ceb1a",
          200: "#009ceb33",
        },
        "red-alpha": {
          50: "#ff41330d",
          100: "#ff41331a",
          200: "#ff413333",
        },
        "yellow-alpha": {
          50: "#f7be6814",
          100: "#f7be6824",
          200: "#f7be683d",
        },
        "green-alpha": {
          50: "#1aa1740d",
          100: "#1aa17424",
          200: "#1aa17433",
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const customTypoStyles = {
        heading1: ["4.5rem", "5.625rem"],
        heading2: ["3.75rem", "5rem"],
        heading3: ["3.375rem", "4.5625rem"],
        heading4: ["2.625rem", "3.5625rem"],
        subtitle1: ["2rem", "3rem"],
        subtitle2: ["1.625rem", "2.4375rem"],
        subtitle3: ["1.25rem", "1.9375rem"],
        subtitle4: ["1.125rem", "1.75rem"],
        body1: ["1.125rem", "1.875rem"],
        body2: ["1rem", "1.75rem"],
        body3: ["0.9375rem", "1.625rem"],
        caption1: ["0.875rem", "1.5rem"],
        caption2: ["0.8125rem", "1.375rem"],
        caption3: ["0.75rem", "auto"], // Note: 'auto' may not work as expected in Tailwind
      };

      const newUtilities = {};

      // Generate the utilities
      Object.keys(customTypoStyles).forEach((key) => {
        const [fontSize, lineHeight] = customTypoStyles[key];
        newUtilities[`.typo-${key}`] = {
          fontSize,
          lineHeight,
        };
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
