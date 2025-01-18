import pluginImport from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import pluginNext from '@next/eslint-plugin-next';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import pluginJest from 'eslint-plugin-jest';
import pluginJestDom from 'eslint-plugin-jest-dom';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginPrettier from 'eslint-config-prettier';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
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

const eslintConfig = [
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
  ...compat.extends(
    'eslint:recommended',
    'airbnb',
    'react',
    'prettier'
  ),
  ...tseslint.configs.recommended,
  ...pluginTailwind.configs['flat/recommended'],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      '@next/next': pluginNext,
      'import': pluginImport,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11Y,
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
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginImport.configs['recommended'].rules,
      ...pluginPrettier.rules,
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
    },
  },
  {
    files: ['**/*.test.tsx', '**/*.test.ts'],
    plugins: { jest: pluginJest, 'jest-dom': pluginJestDom, 'testing-library': pluginTestingLibrary },
    languageOptions: {
      globals: pluginJest.environments.globals.globals
    },
    rules: {
      ...pluginJest.configs['flat/style'].rules,
      ...pluginJest.configs['flat/recommended'].rules,
      ...pluginJestDom.configs['flat/recommended'].rules,
      ...pluginTestingLibrary.configs['flat/dom'].rules,
      'jest/consistent-test-it': [
        'error',
        {
          fn: 'it',
        },
      ],
      'jest/require-top-level-describe': ['error'],
      'testing-library/no-render-in-lifecycle': 'off',
      'testing-library/no-node-access': 'off',
    }
  }
];

export default eslintConfig;
