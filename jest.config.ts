import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

module.exports = {
  // moduleNameMapper: pathsToModuleNameMapper(
  //   compilerOptions.paths /*, { prefix: '<rootDir>/' } */
  // ),
  // TODO: Use tsconfig alias instead of redefine them
  moduleNameMapper: {
    "^@server/(.*)$": "<rootDir>/src/server/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@tests/(.*)$": "<rootDir>/tests/$1",
    "^@tests": "<rootDir>/tests",
  },
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/js-with-ts",
  transform: {
    "^.+\\.mjs$": "ts-jest",
  },
};
