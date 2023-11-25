module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  //globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^@scp\\/components/(.*)$": "<rootDir>/src/app/components/$1",
    "^@scp\\/pages/(.*)$": "<rootDir>/src/app/pages/$1",
    "^@scp\\/services/(.*)$": "<rootDir>/src/app/services/$1",
    "^@scp\\/types": "<rootDir>/src/app/types",
  },
};
