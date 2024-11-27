import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  ...tseslint.configs.recommended,
];
