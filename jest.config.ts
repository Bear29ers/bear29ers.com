/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'jest';

const nextJest = require('next/jest').default;
const createJestConfig = nextJest({ dir: './' });

const customJestConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^next$': require.resolve('next'),
    '^next/navigation$': require.resolve('next/navigation'),
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageReporters: ['text', 'lcov', 'html'],
};

module.exports = async () => {
  const config = await createJestConfig(customJestConfig)();
  config.transformIgnorePatterns = ['/node_modules/(?!next-intl)/', '^\\.next/$'];
  return config;
};
