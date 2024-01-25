export const getDate = (date: any): string => {
  if (typeof date !== "string") {
    return "날짜 불러오기 실패";
  }
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
