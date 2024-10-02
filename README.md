# Microsoft Power BI Custom Visuals ESLint Plugin
[![npm version](https://img.shields.io/npm/v/eslint-plugin-powerbi-visuals.svg)](https://www.npmjs.com/package/eslint-plugin-powerbi-visuals) [![npm](https://img.shields.io/npm/dm/eslint-plugin-powerbi-visuals.svg)](https://www.npmjs.com/package/eslint-plugin-powerbi-visuals)

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# How To Use

1. Install `eslint-plugin-powerbi-visuals` package
```javascript
npm install eslint-plugin-powerbi-visuals --saveDev
```

2. Create `eslint.config.mjs` file with the following content
```javascript
import powerbiVisualsConfigs from "eslint-plugin-powerbi-visuals";

export default [
    powerbiVisualsConfigs.configs.recommended,
    {
        ignores: ["node_modules/**", "dist/**", ".vscode/**", ".tmp/**"],
    },
];
```
You can add more configs and rules by extending this array

3. Add a script into `package.json`
```javascript
"eslint": "npx eslint ."
```

4. Run linter
```javascript
npm run eslint
```
