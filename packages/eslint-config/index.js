const config = {
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    // mocha: true,
  },
  extends: ["eslint:recommended", "airbnb-base"],
  settings: {},
  plugins: ["@babel"],
  rules: {
    "array-bracket-spacing": 0,
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "space-in-parens": 0,
    "spaced-comment": 0,
    camelcase: 0,
    "comma-dangle": 1,
    "dot-notation": 1,
    quotes: 0,
    "lines-between-class-members": 1,
    "operator-linebreak": 0,
    // "wrap-iife": 0,
    "func-names": 1,
    // 'max-len': 0,
    // 'max-lines': 0,
    // 'class-methods-use-this': 0,

    "no-restricted-syntax": 0,
    "no-new": 0,
    "object-curly-newline": 0,
    "no-new": 0,
    "no-void": 0,
    "no-unused-expressions": 1,
    "no-use-before-define": 1,
    "eol-last": 0,
    "prefer-promise-reject-errors": 1,
    "no-trailing-spaces": 0,
    // 'vue/max-attributes-per-line': 0,
    // 'vue/valid-v-for': 0,
    // 'vue/attribute-hyphenation': 0,
    // 'vue/prop-name-casing': 0,
    // 'vue/html-indent': 0,
    "no-tabs": 1,
    // 'vue/script-indent': 0,
    // 'no-nested-ternary': 0,
    "prefer-object-spread": 1,
    // 'prefer-destructuring': 0,
    // 'implicit-arrow-linebreak': 0,
    "function-paren-newline": 0,
    "consistent-return": 0,
    "linebreak-style": 0,
    "func-names": 0,
    "class-methods-use-this": 0,
    "max-len": [
      1,
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "max-lines": [1, { max: 300, skipBlankLines: true, skipComments: true }],
    "newline-per-chained-call": 1,
    "no-param-reassign": 0,
    "no-continue": 0,
    "no-bitwise": 0,
    "no-plusplus": 0,
    "no-await-in-loop": 0,
    "no-extend-native": 0,
    "no-return-assign": 2,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "no-throw-literal": 0,
    "no-async-promise-executor": 0,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 0 : 1,
    "no-console": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 0 : 1,
    "object-curly-newline": [
      2,
      {
        consistent: true,
      },
    ],
    "prefer-arrow-callback": 0,
    "prefer-destructuring": 1,
    "prefer-promise-reject-errors": 0,

    // todo babel-eslint报错
    // https://github.com/babel/babel-eslint/issues/681
    "template-curly-spacing": 0,
    indent: 0,
    "implicit-arrow-linebreak": 0,

    "import/no-unresolved": 0,
    "import/first": 0,
    // 交给 prettier 做
    "import/order": 0,
    "import/extensions": [
      0,
      "always",
      {
        js: "never",
        vue: "never",
      },
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": 1,
    // allow single export
    "import/prefer-default-export": 0,

    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    'react/self-closing-comp': 1,
    'react/jsx-key': 1,
  }
};

module.exports = config;
