"use strict";

const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");

module.exports = {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
        sourceType: "module",
        parser: tsParser,
        globals: {
            ...globals.browser,
            ...globals.es2017,
        }
    },
    rules: {
        "powerbi-visuals/no-banned-terms": 2,
        "powerbi-visuals/no-document-domain": 2,
        "powerbi-visuals/no-document-write": 2,
        "powerbi-visuals/no-http-string": [2, ["http://www.example.com/?.*", "http://localhost:?.*", "^http:\\/\\/www.w3.org\\/2000\\/svg"]],
        "powerbi-visuals/no-implied-inner-html": 2,
        "powerbi-visuals/no-inner-outer-html": 2,
        "powerbi-visuals/no-string-based-set-immediate": 2,
        "powerbi-visuals/non-literal-fs-path":2,
        "powerbi-visuals/non-literal-require": 2,
        "powerbi-visuals/insecure-random": 2,
        "powerbi-visuals/mocha-avoid-only": 2
    }
}