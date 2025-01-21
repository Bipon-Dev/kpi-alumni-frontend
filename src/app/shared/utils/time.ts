export const getTime = (timestamp: number) => {
  const time = new Date(timestamp);
  return time.toLocaleTimeString();
};
// get date from timestamp
export const getDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};
