import type { JestConfigWithTsJest } from 'ts-jest';
import util from 'util';

util.inspect.defaultOptions.depth = null;

const config: JestConfigWithTsJest = {
  verbose: true,
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  testTimeout: process.env.OPENAI_CLIENT_TEST_TIMEOUT ? parseInt(process.env.OPENAI_CLIENT_TEST_TIMEOUT) : 5000,
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
