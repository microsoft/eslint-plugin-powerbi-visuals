"use strict";

module.exports = {
    create: function (context) {
        return {
            Literal(node) {
                if (/^\s{0,}(http|ftp):/i.test(node.value)) {
                    let isExclusion = false;
                    for (let i = 0; i < context.options.length; i++) {
                        const regexpExlusion = new RegExp(context.options[i]);
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
        }
    }
}