module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import', 'node'],
  rules: {
    'react-native/no-inline-styles': 0,
    'no-console': 2,
    'prefer-promise-reject-errors': 2,
    'global-require': 2,
    'no-param-reassign': 2,
    'no-redeclare': 2,
    'no-var': 2,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {array: false, object: true},
        AssignmentExpression: {array: false, object: false},
      },
    ],

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L148
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'no-duplicate-imports': ['error', {includeExports: true}],
    'import/newline-after-import': ['error', {count: 1}],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],

    'react/prefer-stateless-function': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,

    // Somewhat useful, but VERY slow
    'prettier/prettier': 0,
  },
};
