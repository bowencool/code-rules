# Code rules

My personal code rules.

If you want to use these config, write the following configuration into `${HomeDir/ProjectRootDir}/.npmrc`:

```
@bowen:registry=https://npm.bowen.cool:10443/
```

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

see [@bowen/eslint-config](./packages/eslint-config)

in `.stylelintrc.js`

see [@bowen/stylelint-config](./packages/stylelint-config)

in `.prettierrc.js`

```js
module.exports = require("@bowen/rules/prettier");
```

in `commitlint.config.js`

```js
module.exports = require("@bowen/rules/commitlint");
```
