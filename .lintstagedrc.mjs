export default {
  '**/*.{js,jsx,ts,tsx}': 'eslint --fix',
  '**/*.{js,jsx,ts,tsx,json}': 'prettier --write',
  '**/*.{html,jsx,tsx}': 'markuplint --fix',
  '**/*.{css,sass}': 'stylelint --fix',
  '**/*.{spec,test}.{js,jsx,ts,tsx}': 'jest',
};
