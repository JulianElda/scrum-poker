module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  //globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^@\\/components/(.*)$": "<rootDir>/src/app/components/$1",
  },
};
