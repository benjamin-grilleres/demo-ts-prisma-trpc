export const fromISOToReadableDate = (
  date: string,
  locale = "fr-FR",
  options = {}
): string => {
  try {
    if (date) {
      const dateObj = new Date(date);

      return new Intl.DateTimeFormat(locale, options).format(dateObj);
    }
  } catch (error) {}

  return "";
};
