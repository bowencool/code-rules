module.exports = {
  extends: [
    'stylelint-config-standard',
    // todo properties order
  ],
  plugins: [/* 'stylelint-order', */ 'stylelint-declaration-block-no-ignored-properties'],

  overrides: [
    {
      files: ['**/*.vue', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'rule-empty-line-before': null,
    'selector-attribute-quotes': 'always',
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // webcomponent
    'selector-type-no-unknown': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['composes'] }],

    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep', 'global', 'v-deep', 'v-global', 'v-slotted'] },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'declaration-block-trailing-semicolon': [
      'always',
      {
        severity: 'warning',
      },
    ],
    'selector-class-pattern': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
// todo 内联样式非得加上一个分号，跟prettier冲突了
