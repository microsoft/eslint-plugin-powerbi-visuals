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

1. Install ES Lint packages
```javascript
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --saveDev
 ```

2. Install `eslint-plugin-pbivisuals` package
```javascript
npm install eslint-plugin-powerbi-visuals --saveDev
```

3. Create `.eslintrc.js` file with the following content
```javascript
module.exports = {
	env: {
	    "browser": true,
	    "es6": true,
	    "es2017": true
	},
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
	    project: "tsconfig.json",
	    tsconfigRootDir: ".",
	},
	plugins: [
	    "powerbi-visuals"
	],
	extends: [
	    "plugin:powerbi-visuals/recommended"
	],
	rules: {}
};
```

4. Create `.eslintignore` file with the following content
```javascript
node_modules
dist
coverage
test
.eslintrc.js
karma.conf.ts
test.webpack.config.js
```

5. Add a script into `package.json`
```javascript
"eslint": "npx eslint . --ext .js,.jsx,.ts,.tsx"
```

6. Run linter
```javascript
npm run eslint
```
