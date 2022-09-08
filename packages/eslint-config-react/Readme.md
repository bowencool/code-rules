# react 的 eslint 规则

```bash
  yarn add @bowencool/eslint-config-react -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: ['@bowencool', '@bowencool/ts', '@bowencool/react'],
  rules: {
    // your rules
  },
};
```
