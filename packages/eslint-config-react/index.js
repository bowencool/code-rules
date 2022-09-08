
module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    'react/self-closing-comp': 1,
    'react/jsx-key': 1,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 1, // ts 下不太需要
  },
};
