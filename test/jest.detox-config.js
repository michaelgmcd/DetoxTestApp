module.exports = {
  clearMocks: true,
  testEnvironment: '<rootDir>/test/detox-test-environment.js',
  testRunner: 'jest-circus/runner',
  preset: 'react-native',
  reporters: ['detox/runners/jest/streamlineReporter'],
  rootDir: '..',
  setupFilesAfterEnv: ['<rootDir>/test/detox-test-setup.js'],
  testMatch: ['<rootDir>/test/__e2e-tests__/**/*-test-e2e.js'],
  verbose: true,
};
