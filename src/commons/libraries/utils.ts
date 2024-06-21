export const getDate = (date: unknown): string => {
  if (typeof date !== "string") {
    return "-";
  }
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  const formattedMm = mm < 10 ? `0${mm}` : `${mm}`;
  const formattedDd = dd < 10 ? `0${dd}` : `${dd}`;
  return `${yyyy}-${formattedMm}-${formattedDd}`;
};
