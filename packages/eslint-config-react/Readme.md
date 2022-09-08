eslint config for react

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
