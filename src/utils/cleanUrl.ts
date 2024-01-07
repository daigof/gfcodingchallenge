export const cleanUrl = (url: string) => {
  // Remove protocol
  const withoutProtocol = url.replace(/^https?:\/\//, "");

  // Remove path
  const withoutPath = withoutProtocol.replace(/\/.*$/, "");

  return withoutPath;
};
