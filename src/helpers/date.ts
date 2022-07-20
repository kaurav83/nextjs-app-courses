export const getLocaleDateString = (date: string) => {
  const dateUpdated = new Date(date);
  return dateUpdated.toLocaleDateString("en-Us");
};
