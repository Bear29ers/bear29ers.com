import { createRequire } from 'module';

import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const require = createRequire(import.meta.url);

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
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

const asyncConfig = createJestConfig(customJestConfig);

export default async () => {
  const config = await asyncConfig();
  config.transformIgnorePatterns = ['/node_modules/(?!next-intl)/', '^\\.next/$'];
  return config;
};
