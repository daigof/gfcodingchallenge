export const cleanUrl = (url: string) => {
  // Remove protocol
  const withoutProtocol = url.replace(/^https?:\/\//, "");

  // Remove path
  const cleanedUrl = withoutProtocol.replace(/\/.*$/, "");

  return cleanedUrl;
};

export const getArrayRandomIndex = <T>(arr: T[]) =>
  Math.floor(Math.random() * arr.length);

export const pickRandomStringFromArray = (inputStringArray: string[]) => {
  return inputStringArray[getArrayRandomIndex(inputStringArray)];
};
