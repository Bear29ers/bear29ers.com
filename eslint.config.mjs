import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginNext from '@next/eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
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

/**
 * @type {import('eslint').Linter.Config}
 */
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
  /* JavaScript */
  js.configs.recommended,
  {
    plugins: {
      'import': pluginImport,
      'unused-imports': pluginUnusedImports,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
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
      // unused-imports
      'unused-imports/no-unused-imports': 'error',
      // import
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
    }
  },
  /* TypeScript */
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      typescript: tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2015,
      }
    },
    rules: {
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
    },
  },
  /* TailwindCSS */
  ...pluginTailwind.configs['flat/recommended'],
  {
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          config: 'tailwind.config.ts',

          cssFiles: ['**/*.scss', '**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],

          whitelist: ['gallery-intro-title'],
        },
      ],
      'tailwindcss/classnames-order': 'off',
    }
  },
  // React & Next
  pluginReact.configs.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      '@next/next': pluginNext,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
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
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['space'],
        },
      ],
      'react/require-default-props': 'off',
      'react/no-array-index-key': 'off',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // Jest & Testing Library
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
  },
  ...pluginPrettier,
];

export default eslintConfig;
