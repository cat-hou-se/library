import type { Linter } from "eslint"

import { includeIgnoreFile } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import { configs as javascript } from "@eslint/js"
import imports from "eslint-plugin-import"
import sort from "eslint-plugin-simple-import-sort"
import { globSync as glob } from "fast-glob"
import globals from "globals"

const compat = new FlatCompat()
const ignore = (pattern: string) =>
  glob(`**/${pattern}`, { absolute: true, ignore: ["**/node_modules/**"] }).map((path) => includeIgnoreFile(path))

export default [
  ...ignore(".gitignore"),
  ...ignore(".eslintignore"),
  javascript.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
    },
    plugins: {
      import: imports,
      "import-sort": sort,
    },
    rules: {
      "no-undef": "error",
      "no-dupe-keys": "error",
      "object-shorthand": ["error", "always"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-restricted-imports": ["error", { patterns: ["../*"] }],
      "no-restricted-modules": ["error", { patterns: ["../*"] }],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/first": "error",
      "import/newline-after-import": ["error", { considerComments: true }],
      "import/no-duplicates": "error",
      "import/no-named-default": "error",
      "import-sort/exports": "error",
      "import-sort/imports": [
        "error",
        {
          groups: [["\u0000"], ["^\\u0000"], ["^node:"], ["^@?\\w"], ["^"], ["^\\."]],
        },
      ],
    },
  },
  ...compat.extends("prettier"),
  ...compat.extends(
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic",
    "plugin:import/typescript",
  ),
] satisfies Linter.Config[] as Linter.Config[]
