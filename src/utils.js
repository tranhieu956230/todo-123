export const generateId = () => {
  return `${Math.floor(Math.random() * 10000)}-${new Date()}`;
};
