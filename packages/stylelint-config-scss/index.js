module.exports = {
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    // {
    //   files: ['**/*.sass'],
    //   customSyntax: 'postcss-sass',
    // },
  ],
  rules: {
    // your rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
