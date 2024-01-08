import {
  cleanUrl,
  getArrayRandomIndex,
  pickRandomStringFromArray
} from "./index";

test("cleanUrl", () => {
  // Expect to remove protocol and trailing slashes
  expect(cleanUrl("http://www.tripadvisor.com")).toBe("www.tripadvisor.com");
  expect(cleanUrl("https://www.tripadvisor.com")).toBe("www.tripadvisor.com");
  expect(cleanUrl("http://www.tripadvisor.com/")).toBe("www.tripadvisor.com");
  expect(cleanUrl("https://www.tripadvisor.com/")).toBe("www.tripadvisor.com");
});

test("getArrayRandomIndex", () => {
  // Expect to fetch a valid index from an array
  const sampleArray = [1, 2, 3];
  expect(getArrayRandomIndex(sampleArray)).toBeGreaterThanOrEqual(0);
  expect(getArrayRandomIndex(sampleArray)).toBeLessThan(3);
});

test("pickRandomStringFromArray", () => {
  // Expect to fetch a valid index from an array
  const sampleStringArray = ["1", "2", "3"];
  const pickedString = pickRandomStringFromArray(sampleStringArray);
  expect(typeof pickedString).toBe("string");
  expect(sampleStringArray).toContain(pickedString);
});
