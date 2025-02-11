import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tsCheckCommand = () => `tsc --noEmit`;

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(__dirname, f)).join(' --file ')}`;

export default {
  '**/*.{js,jsx,ts,tsx}': [tsCheckCommand, buildEslintCommand],
  '**/*.{js,jsx,ts,tsx,json}': 'prettier --write',
  '**/*.{html,jsx,tsx}': 'markuplint --fix',
  '**/*.{css,scss,sass}': 'stylelint --fix',
  // '**/*.{spec,test}.{js,jsx,ts,tsx}': 'jest -- --coverage',
};
