const getFormattedDate = (date: string, options?: object) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
};

const getFormattedTime = (date: string, options: object) => {
  const formattedTime = new Date(date).toLocaleTimeString('en-US', options);
  return formattedTime;
};

export const formatService = {
  getFormattedDate,
  getFormattedTime,
};
