const sumAll = function( intA, intB) {

    let sum = 0
    let minSum = Math.min(intA,intB)
    let maxSum = Math.max(intA,intB)

    if (Number.isInteger(intA) && Number.isInteger(intB)) {
        if (intA > 0 && intB > 0) {
            for (minSum; minSum <= maxSum; minSum += 1) {
                sum += minSum
            }
        } else {
            return "ERROR"
        }
    } else {
        return "ERROR"
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
