module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'no-unused-vars': 1,
  },
};
