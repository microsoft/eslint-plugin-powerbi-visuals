"use strict";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee.property && node.arguments && node.arguments.length > 0) {
                    if (node.callee.property.name === "insertAdjacentHTML" || node.callee.property.name === "html") {
                        context.report({
                            node,
                            message: `Using the ${node.callee.property.name}() function to write a string as HTML is insecure`
                        });
                    }

                }
            }
        }
    }
}