# code-rules

lint 配置文件合集

## 包结构

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

<!-- # 接入

```zsh
// 接入
npx @bowen/cli init-lint -f
ga . && gc -nm "接入lint"

// 跑全局
npx eslint src/**/*.{vue,js,jsx,ts,tsx} —fix
npx stylelint src/**/*.{vue,scss,sass,less,css} —fix
``` -->

# Use

in `.eslintrc.js`

see @bowen/eslint-config

in `.stylelintrc.js`

see @bowen/stylelint-config

in `.prettierrc.js`

```js
module.exports = require("@bowen/rules/prettier");
```

in `commitlint.config.js`

```js
module.exports = require("@bowen/rules/commitlint");
```
