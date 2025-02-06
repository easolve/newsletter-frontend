import { heroui } from "@heroui/theme/plugin";
import path from "path";
import type { Config } from "tailwindcss";

const nexUiThemePath = path.dirname(require.resolve("@heroui/theme"));

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    `${nexUiThemePath}/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            background: "#2D3034",
          },
        },
      },
    }),
  ],
} satisfies Config;
