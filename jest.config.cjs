/** @types {import('@jest/types').Config.InitialOptions} */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.cjsとテスト環境用の.envファイルが配置されたディレクトリを設定
  dir: './',
});

// Jestのカスタム設定
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
};

// createJestConfigを定義することで、このファイルで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(config);
