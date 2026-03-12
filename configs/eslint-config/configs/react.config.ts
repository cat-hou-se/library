import type { Linter } from "eslint"

import tailwindcss from "eslint-plugin-better-tailwindcss"
import a11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import hooks from "eslint-plugin-react-hooks"

export default [
  hooks.configs.flat.recommended,
  {
    files: ["**/*.tsx"],
    plugins: {
      react,
      "jsx-a11y": a11y,
      "better-tailwindcss": tailwindcss,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...(react.configs.flat?.recommended?.rules ?? {}),
      ...(tailwindcss.configs["recommended-warn"]?.rules ?? {}),
      ...(tailwindcss.configs["recommended-error"]?.rules ?? {}),
      "no-restricted-syntax": [
        "error",
        {
          message: "Use named imports for React.",
          selector: "ImportDeclaration[source.value='react'] ImportNamespaceSpecifier",
        },
      ],
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/no-unregistered-classes": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "never", { always: [] }],
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/no-string-refs": "error",
      "react/no-unknown-property": "error",
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
        },
      ],
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
      "react/no-find-dom-node": "warn",
      "react/self-closing-comp": "error",
    },
  },
] satisfies Linter.Config[] as Linter.Config[]
