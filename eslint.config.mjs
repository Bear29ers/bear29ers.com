import _import from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import testingLibrary from 'eslint-plugin-testing-library';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/*.cjs',
      '**/tailwind.config.ts',
      '**/jest.setup.js',
      '**/next.config.js',
      '**/build/',
      '**/bin/',
      '**/obj/',
      '**/out/',
      '**/.next/',
    ],
  },
  ...tseslint.configs.recommended,
  ...compat.extends(
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier'
  ),
  {
    plugins: {
      'import': fixupPluginRules(_import),
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11Y,
      tailwindcss,
      '@typescript-eslint': typescriptEslint,
      jest,
      'jest-dom': jestDom,
      'testing-library': testingLibrary,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: './tsconfig.json',
      },
    },

    rules: {
      'no-unused-vars': 'off',
      'arrow-body-style': 'off',

      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'DO NOT DECLARE ENUM',
        },
      ],

      'no-plusplus': 'off',

      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': false,
          'ts-nocheck': false,
          'ts-check': false,
        },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],

      'react/jsx-props-no-spreading': 'off',

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['space'],
        },
      ],

      'react/require-default-props': 'off',
      'react/no-array-index-key': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import/prefer-default-export': 'off',

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'always',

          'pathGroups': [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/app/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/components/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/stores/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/providers/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/hooks/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/constants/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/libs/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/utils/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],

          'alphabetize': {
            order: 'asc',
          },
        },
      ],

      'tailwindcss/no-custom-classname': [
        'warn',
        {
          config: 'tailwind.config.ts',

          cssFiles: ['**/*.scss', '**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],

          whitelist: ['gallery-intro-title'],
        },
      ],

      'tailwindcss/classnames-order': 'off',

      'jest/consistent-test-it': [
        'error',
        {
          fn: 'it',
        },
      ],

      'jest/require-top-level-describe': ['error'],
      'testing-library/no-render-in-lifecycle': 'off',
      'testing-library/no-node-access': 'off',
    },
  },
];

