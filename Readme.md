# Code rules

My personal code rules.

## Directory

```
└── packages
    ├── eslint-config
    ├── eslint-config-ts
    ├── eslint-config-react
    ├── eslint-config-vue
    ├── rules
    │   ├── prettier
    │   ├── editorconfig
    │   ├── vscode settings
    │   └── commitlint
    ├── stylelint-config
    ├── stylelint-config-scss
    └── stylelint-config-less
```

## Use

in `.eslintrc.js`

see [@bowencool/eslint-config](./packages/eslint-config)

in `.stylelintrc.js`

see [@bowencool/stylelint-config](./packages/stylelint-config)

in `.prettierrc.js`

```js
module.exports = require("@bowencool/rules/prettier");
```

in `commitlint.config.js`

```js
module.exports = require("@bowencool/rules/commitlint");
```
