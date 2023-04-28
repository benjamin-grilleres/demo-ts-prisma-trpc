type cssModules = {
  [key: string]: string;
};
/**
 * Wrapper to generate the right class format in next components
 *
 * @param cssModules
 * @returns {(classes: string) => string}
 */
export const cssModulesClasses =
  (cssModules: cssModules) => (classes: string) =>
    classes
      .split(" ")
      .map((className) => cssModules[className])
      .join(" ");
