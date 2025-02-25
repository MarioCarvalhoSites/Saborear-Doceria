import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [".next/*", "node_modules/*"],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    }
  }
];

export default eslintConfig;