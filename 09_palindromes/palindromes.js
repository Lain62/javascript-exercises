const palindromes = function (args) {
	args = args.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
	let reverse = "";
	let i = 0;
	while (i < args.length){
		i++;
		reverse += args[args.length-i]
	}
	if (reverse.replace(/ /g, '')== args.replace(/ /g, '')){
		return true
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
