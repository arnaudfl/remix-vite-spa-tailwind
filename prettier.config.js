/** @type {import("prettier").Config} */
const functions = ["cn", "clsx"]
const config = {
  tailwindFunctions: functions,
  customFunctions: functions,
  endingPosition: "absolute-with-indent",
  plugins: [
    "prettier-plugin-classnames",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-merge",
  ],
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  printWidth: 120,
  arrowParens: "always",
};

export default config