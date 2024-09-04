export const toQueryStringForName = (name: string): string => {
  const params = new URLSearchParams();

  params.append('name', name);

  return params.toString();
};

export const replaceCurrentUrl = (name: string) => {
  const queryString = toQueryStringForName(name);
  const newUrl = `${window.location.pathname}?${queryString}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
};
