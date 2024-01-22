module.exports = {
  testEnvironment: "node",
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
};
