// const config = {
//   '**/*.{js,jsx,ts,tsx}': 'npx eslint --fix',
//   '**/*.{css,scss}': 'npx stylelint --fix',
//   '**/*.{html,jsx,tsx}': 'npx markuplint --fix',
//   '**/*.{js,jsx,ts,tsx,json}': 'npx prettier --write',
//   '**/*.{spec,test}.{js,jsx,ts,tsx}': 'npx jest',
// };
//
// export default config;

const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'eslint --fix', 'prettier --write'],
};
