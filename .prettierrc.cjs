/** @type {import('pretteir').Config} */

const config = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  jsxSingleQuote: false,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.css', '**/*.scss', '**/*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};

module.exports = config;
