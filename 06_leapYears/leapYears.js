const leapYears = function (year) {
  return !(year % 4 || (year % 400 && !(year % 100)));
};

// Do not edit below this line
module.exports = leapYears;
