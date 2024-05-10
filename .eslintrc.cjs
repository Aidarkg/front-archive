module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "semi": ["warn", "always"],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'MemberExpression[property.name="log"]',
        message: 'Remove all logs before release',
      },
    ],
    'no-var': 'error',
    'no-self-compare': 'error', //?
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
