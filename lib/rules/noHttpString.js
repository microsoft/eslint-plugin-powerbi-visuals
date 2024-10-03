"use strict";

module.exports = {
    meta: {
        schema: [
            {
                type: "array",
                items: {
                    type: "string"
                },
                minItems: 0,
                uniqueItems: true
            }
        ],
    },
    create: function (context) {
        return {
            Literal(node) {
                if (/^\s{0,}(http|ftp):/i.test(node.value)) {
                    let isExclusion = false;
                    for (let i = 0; i < context.options[0].length; i++) {
                        const regexpExlusion = new RegExp(context.options[0][i]);
                        if (regexpExlusion.test(node.value)) {
                            isExclusion = true;
                        }
                    }

                    if (!isExclusion) {
                        context.report({
                            node,
                            message: `Forbidden protocol in URL. Please use HTTPS to refer a page`
                        });
                    }
                }
            }
        };
    }
};