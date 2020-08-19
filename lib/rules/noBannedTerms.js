"use strict";

module.exports = {
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === "callee" || node.name === "caller" || node.name === "arguments" || node.name === "eval") {
                    context.report({
                        node,
                        message: `Forbidden reference to banned term: ${node.name}`
                    });
                }
            }
        }
    }
}