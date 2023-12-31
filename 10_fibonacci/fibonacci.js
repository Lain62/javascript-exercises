const fibonacci = function(n) {
	let num = parseInt(n)
	let lastnum = 0;
	let nextnum = 1;
	let currentnum = 1;
	if (num == 0) return lastnum;
	if (num < 0) return "OOPS";
	for (i=2; i <= num; i++){
		currentnum = lastnum + nextnum;
		lastnum = nextnum;
		nextnum = currentnum;
	}
	return currentnum;

};

// Do not edit below this line
module.exports = fibonacci;
