import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['**/src/**'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          noImplicitAny: false
        }
      }
    ]
  }
};

export default config;
