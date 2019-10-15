module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '^.+\\.spec\\.ts$',
  collectCoverageFrom: [
  './src/**/*.ts',
  ],
  coverageReporters: [
    'text-summary',
  ]
};
