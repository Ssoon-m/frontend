/** @type {import('tailwindcss').Config} */
import sharedConfig from "tailwind-config/tailwind.config";
// const sharedConfig = require("tailwind-config/tailwind.config.js");

export default {
  presets: [sharedConfig],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
