"use strict";

module.exports = {
    create: function (context) {
        return {
            Identifier(node) {
                if (node.name === "cookie") {
                    context.report({
                        node,
                        message: `Forbidden reference to banned term: ${node.name}`
                    });
                }
            }
        }
    }
}