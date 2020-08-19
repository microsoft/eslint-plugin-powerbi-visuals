"use strict";

const noHTTPStringRule = require("./lib/rules/noHttpString");
const insecureRandom = require("./lib/rules/insecureRandom");
const configRecommended = require("./lib/configs/recommended");
const mochaAvoidOnly = require("./lib/rules/mochaAvoidOnly");
const noBannedTerms = require("./lib/rules/noBannedTerms");
const noCookies = require("./lib/rules/noCookies");
const noDisableAutoSanitization = require("./lib/rules/noDisableAutoSanitization");
const noDocumentDomain = require("./lib/rules/noDocumentDomain");
const noDocumentWrite = require("./lib/rules/noDocumentWrite");
const noInnerHtml = require("./lib/rules/noInnerHtml");
const noImpliedInnerHtml = require("./lib/rules/noImpliedInnerHtml");
const noStringBasedSetImmediate = require("./lib/rules/noStringBasedSetImmediate");
const nonLiteralFsPath = require("./lib/rules/nonLiteralFsPath");
const nonLiteralRequire = require("./lib/rules/nonLiteralRequire");

module.exports = {
    rules: {
        "no-banned-terms": noBannedTerms,
        "no-cookies": noCookies,
        "no-disable-auto-sanitization": noDisableAutoSanitization,
        "no-document-domain": noDocumentDomain,
        "no-document-write": noDocumentWrite,
        "no-http-string": noHTTPStringRule,
        "no-implied-inner-html": noImpliedInnerHtml,
        "no-inner-html": noInnerHtml,
        "no-string-based-set-immediate": noStringBasedSetImmediate,
        "non-literal-fs-path": nonLiteralFsPath,
        "non-literal-require": nonLiteralRequire,
        "insecure-random": insecureRandom,
        "mocha-avoid-only": mochaAvoidOnly
    },
    configs: {
        "recommended": configRecommended
    }
};