/** @types {import('@jest/types').Config.InitialOptions} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.cjsとテスト環境用の.envファイルが配置されたディレクトリを設定
  dir: './',
});

// Jestのカスタム設定
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfigを定義することで、このファイルで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(customJestConfig);
