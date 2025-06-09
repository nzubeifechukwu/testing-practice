function capitalize(string) {
  string = string.toLowerCase();
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

function caesarCipher(str, shift) {
  const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upper = lower.join().toUpperCase().split(",");
  let newStr = "";
  str.split("").forEach((item) => {
    if (lower.includes(item)) {
      if (lower.indexOf(item) + shift <= 25) {
        newStr += lower[lower.indexOf(item) + shift];
      } else {
        newStr += lower[lower.indexOf(item) + shift - 26];
      }
    } else if (upper.includes(item)) {
      if (upper.indexOf(item) + shift <= 25) {
        newStr += upper[upper.indexOf(item) + shift];
      } else {
        newStr += upper[upper.indexOf(item) + shift - 26];
      }
    } else {
      newStr += item;
    }
  });
  return newStr;
}

function analyzeArray(array) {
  return {
    average:
      array.reduce((previous, current) => previous + current) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => a - b)[array.length - 1],
    length: array.length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
