/** @type {import('tailwindcss').Config} */
import screens from "./tailwind/screens";
import fontFamily from "./tailwind/fontFamily";
import fontSize from "./tailwind/fontSize";
import colors from "./tailwind/colors";
import dropShadow from "./tailwind/dropShadow";
import boxShadow from "./tailwind/boxShadow";
import spacing from "./tailwind/spacing";
import padding from "./tailwind/padding";
import plugins from "./tailwind/plugins";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens,
      fontFamily,
      fontSize,
      colors,
      dropShadow,
      boxShadow,
      spacing,
      padding,
    },
  },
  plugins,
};
