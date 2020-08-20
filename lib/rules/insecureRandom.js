"use strict";

const MATH_FAIL_STRING =
    "Math.random produces insecure random numbers. Use crypto.randomBytes() or window.crypto.getRandomValues() instead";

const NODE_FAIL_STRING = "crypto.pseudoRandomBytes produces insecure random numbers. Use crypto.randomBytes() instead";

module.exports = {
    create: function (context) {
        return {
            MemberExpression(node) {
                if (node.object && node.property) {
                    if (node.object.name === "Math" && node.property.name === "random") {
                        context.report({
                            node,
                            message: `${MATH_FAIL_STRING}`
                        });
                    }
                    if (node.property.name === "pseudoRandomBytes") {
                        context.report({
                            node,
                            message: `${NODE_FAIL_STRING}`
                        });
                    }
                }
            }
        }
    }
}