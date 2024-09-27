export const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return {
    str: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
    hour: date.getHours()
  };
}
