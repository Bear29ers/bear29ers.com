const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリを設定
  dir: './',
});

// Jestのカスタム設定
const customJestConfig = {
  moduleNameMapper: {
    // aliasを定義 （tsconfig.jsonのcompilerOptions > pathsの定義に合わせる）
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfigを定義することで、このファイルで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(customJestConfig);
