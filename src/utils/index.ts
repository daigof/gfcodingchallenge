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

// may be useful somewhere else: to extract the type of the array type
export type Unpacked<T> = T extends (infer U)[] ? U : T;
