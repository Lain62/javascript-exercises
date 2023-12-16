const reverseString = function(toReverse) {

    let stringArray = toReverse.split('')
    let stringReverse = stringArray.reverse()
    let stringJoinedBack = stringReverse.join('')

    return stringJoinedBack
};

// Do not edit below this line
module.exports = reverseString;
