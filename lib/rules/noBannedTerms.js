"use strict";

module.exports = {
    create: function (context) {
        return {
            Identifier(node) {
                const bannedTerms = [
                    "callee", "caller", "arguments", "eval", "cookie", 
                    "setInnerHTMLUnsafe", "execUnsafeLocalFunction"
                ];

                if (bannedTerms.includes(node.name)) {
                    context.report({
                        node,
                        message: `Forbidden reference to banned term: ${node.name}`
                    });
                }
            }
        }
    }
}