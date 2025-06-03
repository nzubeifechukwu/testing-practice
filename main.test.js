const capitalize = require("./main");
const reverseString = require("./main");

test("Capitalizes only the first character in a string", () => {
  expect(capitalize("a thing OF WOundS")).toBe("A thing of wounds");
});

test("Reverses a string", () => {
  expect(reverseString("wounds")).toBe("sdnuow");
});
