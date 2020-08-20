"use strict";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee.object && node.callee.object.name === "fs") {
                    if (node.arguments && node.arguments.length > 0) {
                        let isOk = true;
                        for (let i = 0; i < node.arguments.length; i++) {
                            const arg = node.arguments[i];
                            if (arg.type !== "Literal") {
                                isOk = false;
                            }
                        }

                        if (!isOk) {
                            context.report({
                                node,
                                message: ` Non-literal (insecure) arguments has been passed to fs.${node.callee.property.name}`
                            });
                        }
                    }
                }
            }
        }
    }
}