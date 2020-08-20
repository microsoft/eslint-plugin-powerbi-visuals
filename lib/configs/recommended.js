"use strict";

module.exports = {
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    rules: {
        // Disabled to allow some code practics
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/no-var-requires": 0,
        // Strict ESLint Rules
        "max-lines-per-function": [2, { "max": 100, "skipBlankLines": true }],
        "no-constant-condition": 2,
        "no-delete-var": 2,
        "no-eval": 2,
        "no-implied-eval": 2,
        "no-invalid-regexp": 2,
        "no-octal": 2,
        "no-regex-spaces": 2,
        "no-script-url": 2,
        "no-with": 2,       
        // Power BI Rules
        "powerbi-visuals/no-banned-terms": 2,
        "powerbi-visuals/no-document-domain": 2,
        "powerbi-visuals/no-document-write": 2,
        "powerbi-visuals/no-http-string": [2, "http://www.example.com/?.*", "http://localhost:?.*"],
        "powerbi-visuals/no-implied-inner-html": 2,
        "powerbi-visuals/no-inner-outer-html": 2,
        "powerbi-visuals/no-string-based-set-immediate": 2,
        "powerbi-visuals/non-literal-fs-path":2,
        "powerbi-visuals/non-literal-require": 2,
        "powerbi-visuals/insecure-random": 2,
        "powerbi-visuals/mocha-avoid-only": 2
    }
}