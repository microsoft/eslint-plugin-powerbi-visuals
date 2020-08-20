"use strict";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee.name === "require") {
                    if (node.arguments && node.arguments.length > 0) {
                        if (node.arguments[0].type !== "Literal") {
                            context.report({
                                node,
                                message: `Non-literal (insecure) parameter passed to require()`
                            });
                        }
                    }
                }
            }
        }
    }
}