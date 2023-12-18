const removeFromArray = function(num, ...args) {

	let arraynum = []

	num.forEach(array_each)

	function array_each(item) {
		if(!args.includes(item)){
			arraynum.push(item)
		}
	}

	return arraynum
};


// array.filter
// check also infinite optional args

// Do not edit below this line
module.exports = removeFromArray;
