import { heroui } from "@heroui/theme/plugin";
import path from "path";
import type { Config } from "tailwindcss";

const nexUiThemePath = path.dirname(require.resolve("@heroui/theme"));

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    `${nexUiThemePath}/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
} satisfies Config;
