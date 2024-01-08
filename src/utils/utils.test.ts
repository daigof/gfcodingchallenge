import { cleanUrl } from "~utils";

test("cleanUrl", () => {
  expect(cleanUrl("asdsad")).toBe("asdasd");
});
