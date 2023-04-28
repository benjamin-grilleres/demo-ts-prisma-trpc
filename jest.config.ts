import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

module.exports = {
  // moduleNameMapper: pathsToModuleNameMapper(
  //   compilerOptions.paths /*, { prefix: '<rootDir>/' } */
  // ),
  // TODO: Use tsconfig alias instead of redefine them
  moduleNameMapper: {
    "^@/tests(.*)": "<rootDir>/tests$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/js-with-ts",
  transform: {
    "^.+\\.mjs$": "ts-jest",
  },
};
