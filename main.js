function capitalize(string) {
  string = string.toLowerCase();
  return string.replace(string[0], string[0].toUpperCase());
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

// console.log(capitalize("a thing OF WOundS"));

module.exports = capitalize;
module.exports = reverseString;
