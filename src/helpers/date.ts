export const formatStringToDate = (date: string): Date => {
  const [year, month, day] = date.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

export const formatDateToString = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month > 10 ? month : `0${month}`}-${
    day > 10 ? day : `0${day}`
  }`;
};
