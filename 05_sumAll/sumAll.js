const sumAll = function (lowerBound, upperBound) {
  if (lowerBound > upperBound) {
    let temp = upperBound;
    upperBound = lowerBound;
    lowerBound = temp;
  }
  if (
    typeof lowerBound !== "number" ||
    typeof upperBound !== "number" ||
    lowerBound < 0 ||
    upperBound < 0
  ) {
    return "ERROR";
  }
  allNums = Array.from(
    new Array(upperBound - lowerBound + 1),
    (x, i) => i + lowerBound
  );
  let sum = 0;
  allNums.forEach((element) => {
    sum += element;
  });
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
