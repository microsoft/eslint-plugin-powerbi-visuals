"use strict";

const FAILURE_STRING_IT = "Do not commit Mocha it.only function call";
const FAILURE_STRING_SPECIFY = "Do not commit Mocha specify.only function call";
const FAILURE_STRING_DESCRIBE = "Do not commit Mocha describe.only function call";
const FAILURE_STRING_CONTEXT = "Do not commit Mocha context.only function call";

module.exports = {
    create: function (context) {
        return {
            CallExpression(node) {
                if (node.callee && node.arguments && node.arguments.length === 2) {
                    if (node.arguments[0].type === "Literal" && (node.arguments[1].type === "ArrowFunctionExpression" || node.arguments[1].type === "FunctionExpression")) {
                        if (node.callee.object && node.callee.property && node.callee.property.name === "only") {
                            let msg = "";
                            switch (node.callee.object.name) {
                                case "it":
                                    msg = FAILURE_STRING_IT;
                                    break;

                                case "specify":
                                    msg = FAILURE_STRING_SPECIFY;
                                    break;

                                case "describe":
                                    msg = FAILURE_STRING_DESCRIBE;
                                    break;

                                case "context":
                                default:
                                    msg = FAILURE_STRING_CONTEXT;
                                    break;
                            }
                            context.report({
                                node,
                                message: `${msg}`
                            });
                        }
                    }
                }
            }
        }
    }
}