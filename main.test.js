const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./main");

test("Capitalizes only the first character in a string", () => {
  expect(capitalize("a thing OF WOundS")).toBe("A thing of wounds");
});

test("Reverses a string", () => {
  expect(reverseString("wounds")).toBe("sdnuow");
});

test("Adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Subtracts a number from another", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Divide a number by another", () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Returns a new string in which each character of a given string is shifted by some factor", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Wrap from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher should be case-sensitive", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher should be preserve punctuations, spaces and numbers", () => {
  expect(caesarCipher("Hello, World! 6", 3)).toBe("Khoor, Zruog! 6");
});

test("Returns an object that gives the average, min and max values in an array, and the length of the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
