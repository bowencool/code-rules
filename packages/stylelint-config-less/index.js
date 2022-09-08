module.exports = {
  plugins: ['stylelint-less'],
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
