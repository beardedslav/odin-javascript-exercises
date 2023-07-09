const repeatString = function (what, howMany) {
  if (howMany < 0) return "ERROR";
  let res = "";
  for (let index = 0; index < howMany; index++) {
    res += what;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
