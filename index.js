"use strict";

const noHTTPStringRule = require("./lib/rules/noHttpString");
const insecureRandom = require("./lib/rules/insecureRandom");
const configRecommended = require("./lib/configs/recommended");
const mochaAvoidOnly = require("./lib/rules/mochaAvoidOnly");
const noBannedTerms = require("./lib/rules/noBannedTerms");
const noDocumentDomain = require("./lib/rules/noDocumentDomain");
const noDocumentWrite = require("./lib/rules/noDocumentWrite");
const noInnerOuterHtml = require("./lib/rules/noInnerOuterHtml");
const noImpliedInnerHtml = require("./lib/rules/noImpliedInnerHtml");
const noStringBasedSetImmediate = require("./lib/rules/noStringBasedSetImmediate");
const nonLiteralFsPath = require("./lib/rules/nonLiteralFsPath");
const nonLiteralRequire = require("./lib/rules/nonLiteralRequire");

const plugin = {
    meta: {
        name: "powerbi-visuals",
        version: "1.0.0"
    },
    rules: {
        "no-banned-terms": noBannedTerms,
        "no-document-domain": noDocumentDomain,
        "no-document-write": noDocumentWrite,
        "no-http-string": noHTTPStringRule,
        "no-implied-inner-html": noImpliedInnerHtml,
        "no-inner-outer-html": noInnerOuterHtml,
        "no-string-based-set-immediate": noStringBasedSetImmediate,
        "non-literal-fs-path": nonLiteralFsPath,
        "non-literal-require": nonLiteralRequire,
        "insecure-random": insecureRandom,
        "mocha-avoid-only": mochaAvoidOnly
    },
    configs: {}
};

Object.assign(plugin.configs, {recommended: {
    ...configRecommended,
    plugins: {
        "powerbi-visuals": plugin,
        ...configRecommended.plugins
    }
}});

module.exports = plugin;