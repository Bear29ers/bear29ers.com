/** @types {import('stylelint').Configuration} */

const config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['/node_modules', '/.next'],
  rules: {
    'no-empty-source': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer'],
      },
    ],
    'scss/function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme', 'screen'],
      },
    ],
  },
};

module.exports = config;
