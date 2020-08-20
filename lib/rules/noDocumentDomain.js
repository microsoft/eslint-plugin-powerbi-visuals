"use strict";

const FAILURE_STRING = 'Forbidden to write into document.domain';

module.exports = {
    create: function (context) {
        return {
            AssignmentExpression(node) {
                if (node.left.property && node.left.property.name === "domain") {
                    if (node.left.object && node.left.object.name === "document") {
                        context.report({
                            node,
                            message: FAILURE_STRING
                        });
                    } else if (node.left.object.object && node.left.object.property && node.left.object.property.name === "document") {
                        context.report({
                            node,
                            message: FAILURE_STRING
                        });
                    }
                }
            }
        }
    }
}