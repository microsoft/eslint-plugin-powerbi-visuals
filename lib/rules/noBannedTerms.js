"use strict";

module.exports = {
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === "callee"
                    || node.name === "caller"
                    || node.name === "arguments"
                    || node.name === "eval"
                    || node.name === "cookie"
                    || node.name === "setInnerHTMLUnsafe"
                    || node.name === "execUnsafeLocalFunction") {
                    context.report({
                        node,
                        message: `Forbidden reference to banned term: ${node.name}`
                    });
                }
            }
        }
    }
}