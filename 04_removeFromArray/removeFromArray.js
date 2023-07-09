const removeFromArray = function (inputArray, ...itemsToRemove) {
  res = inputArray;
  for (let index = 0; index < itemsToRemove.length; index++) {
    res = res.filter((el) => el !== itemsToRemove[index]);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
