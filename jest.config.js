module.exports = {
  moduleNameMapper: {
    "\\.module\\.scss$": "identity-obj-proxy",
  },
  // Specifies the root of your source files
  roots: ["<rootDir>/src"],

  // Match files with .test.js or .spec.js extensions for tests
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // Transform files using Babel or TypeScript
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // or 'ts-jest' for TypeScript
  },

  // Setup file to run before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Mock CSS files
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // Mock static assets like images or files
  moduleNameMapper: {
    "\\.(gif|jpg|jpeg|ttf|eot|svg|png|css|scss|less)$":
      "<rootDir>/__mocks__/fileMock.js",
  },

  // Enable code coverage collection
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],

  // Specify test environment (e.g., Node.js or jsdom for browser-like behavior)
  testEnvironment: "jsdom", // Use 'node' if testing in a Node.js environment
};
