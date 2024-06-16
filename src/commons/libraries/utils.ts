export const getDate = (date: unknown): string => {
  if (typeof date !== "string") {
    return "-";
  }
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  const formattedDd = dd < 10 ? `0${dd}` : `${dd}`;
  console.log(dd);
  return `${yyyy}-${mm}-${formattedDd}`;
};
