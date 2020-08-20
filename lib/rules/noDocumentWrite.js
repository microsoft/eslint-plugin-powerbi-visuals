"use strict";

const WRITE_FAILURE = "Forbidden call to document.";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee && node.arguments && node.arguments.length === 1) {
                    if (node.callee.property && (node.callee.property.name === "write" || node.callee.property.name === "writeln"))
                        if (node.callee.object && node.callee.object.name === "document") {
                            context.report({
                                node,
                                message: `${WRITE_FAILURE}${node.callee.property.name}`
                            });
                        } else if (node.callee.object.object && node.callee.object.property && node.callee.object.property.name === "document") {
                            context.report({
                                node,
                                message: `${WRITE_FAILURE}${node.callee.property.name}`
                            });
                        }

                }
            }
        }
    }
}