# LaxarJS ESLint Configuration

The [LaxarJS ESLint rules](.eslintrc.json) are a restrictive rule set extending the `eslint:recommended` rule set.
The rules are applicable to ES2016 projects.


## Installation

```console
npm install --save-dev eslint eslint-config-laxarjs
```

In your project, create a file `.eslintrc.json` with the following contents:

```json
{
   "extends": "laxarjs"
}
```

If applicable, define additional configuration rules, or override the *laxarjs* rules.
