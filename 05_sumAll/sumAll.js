const sumAll = function( intA, intB) {
    if (!Number.isInteger(intA) || !Number.isInteger(intB)) return "ERROR";
    if (intA < 0 || intB < 0) return "ERROR" ;
    let sum = 0;
    let minSum = Math.min(intA,intB);
    let maxSum = Math.max(intA,intB);
    for (minSum; minSum <= maxSum; minSum += 1) {
        sum += minSum   ;
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
