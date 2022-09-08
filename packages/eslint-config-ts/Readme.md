eslint config for typescript

```bash
  yarn add @bowencool/eslint-config-ts -D
```

in `.eslintrc.js`

```js
module.exports = {
  extends: ['@bowencool', '@bowencool/ts'],
  rules: {
    // your rules
  },
};
```
