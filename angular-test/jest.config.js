process.env.TZ = 'UTC';

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'dist', 'assets', 'environments', '.module.ts', '.html', 'mocks', 'state-management-demo'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  },
  modulePathIgnorePatterns: ['environment.test.ts'],
  modulePaths: ['<rootDir>', '/src']
};
