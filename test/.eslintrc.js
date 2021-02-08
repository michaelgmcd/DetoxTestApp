module.exports = {
  extends: '../.eslintrc.js',
  plugins: ['jest'],
  env: {
    jest: true,
    'jest/globals': true,
  },
  globals: {
    detoxExpect: false,
    detox: false,
    device: false,
    expect: false,
    waitFor: false,
    element: false,
    by: false,
  },
  rules: {
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
  },
};
