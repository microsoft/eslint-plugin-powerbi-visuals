"use strict";

module.exports = {
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === "setInnerHTMLUnsafe" || node.name === "execUnsafeLocalFunction") {
                    context.report({
                        node,
                        message: `Forbidden reference to banned term: ${node.name}`
                    });
                }
            }
        }
    }
}