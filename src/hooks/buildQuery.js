export const buildQueryString = (data) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      params.append(key, data[key]);
    }
  });
  return params.toString();
};