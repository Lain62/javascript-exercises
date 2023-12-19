const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 !== 0) return false // checks if its divisible by 100 but not divisible 400
    return year % 4 === 0 // check if divisible by 4 and return true
};

// Do not edit below this line
module.exports = leapYears;
