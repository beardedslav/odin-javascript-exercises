const reverseString = function (input) {
  res = "";
  for (let index = input.length - 1; index >= 0; index--) {
    res += input[index];
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
