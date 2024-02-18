const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'eslint --fix'],
  '**/*.{js,jsx,ts,tsx,json}': 'prettier --write',
  '**/*.{html,jsx,tsx}': 'markuplint --fix',
  '**/*.{spec,test}.{js,jsx,ts,tsx}': 'jest -- --coverage',
};
