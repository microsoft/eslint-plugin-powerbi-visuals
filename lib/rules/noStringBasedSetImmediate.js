"use strict";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee.name === "setImmediate" || (node.callee.property && node.callee.property.name === "setImmediate")) {
                    if (node.arguments && node.arguments.length > 0 && node.arguments[0].type === "Literal") {
                        context.report({
                            node,
                            message: `Forbidden setImmediate string parameter`
                        });
                    }
                }
            }
        }
    }
}