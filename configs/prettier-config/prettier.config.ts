import type { Config } from "prettier"

export default {
  semi: false,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  endOfLine: "lf",
  bracketSameLine: true,
  jsxSingleQuote: false,
  singleQuote: false,
  plugins: ["prettier-plugin-sh", "prettier-plugin-toml"],
  overrides: [
    {
      files: "package.json",
      options: {
        plugins: ["prettier-plugin-packagejson"],
      },
    },
    {
      files: "*.java",
      options: {
        plugins: ["prettier-plugin-java"],
      },
    },
    {
      files: "*.sql",
      options: {
        language: "postgresql",
        expressionWidth: 150,
        keywordCase: "upper",
        dataTypeCase: "upper",
        functionCase: "upper",
        identifierCase: "upper",
        plugins: ["prettier-plugin-sql"],
      },
    },
  ],
} satisfies Config
