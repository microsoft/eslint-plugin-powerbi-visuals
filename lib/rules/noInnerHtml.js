"use strict";

module.exports = {
    create: function (context) {
        return {
            AssignmentExpression(node) {
                if (node.left.property && (node.left.property.name === "innerHTML" || node.left.property.name === "outerHTML")) {
                    context.report({
                        node,
                        message: `Writing a string to the ${node.left.property.name} property is insecure`
                    });
                }
            }
        }
    }
}