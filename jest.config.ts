import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  // next.config.cjsとテスト環境用の.envファイルが配置されたディレクトリを設定
  dir: './',
});

// Jestのカスタム設定
/** @type {import('jest').Config} */
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfigを定義することで、このファイルで定義された設定がNext.jsの設定に反映される
export default createJestConfig(config);
