export const getFormattedDate = (dateStr: string | Date) => {
  const date = dateStr instanceof Date ? dateStr : new Date(dateStr);
  return {
    str: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
    hour: date.getHours(),
  };
};
