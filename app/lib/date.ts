export function getFormattedDate(dateValue?: string) {
  if (!dateValue) {
    return null;
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString("en-FI", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
