const leapYears = function(year) {
    if ( year % 100 == 0 && year % 400 != 0) return false // checks if its divisible by 100 but not divisible 400
    if (year % 4 == 0) return true // check if divisible by 4
    return false // all else
};

// Do not edit below this line
module.exports = leapYears;
