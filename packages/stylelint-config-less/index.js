module.exports = {
  plugins: ['stylelint-less'],
  extends: ['stylelint-config-standard-less', 'stylelint-config-recommended-less'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-no-invalid-hex': true,
    'less/color-no-invalid-hex': true,
    'less/no-duplicate-variables': true,
  },
};
