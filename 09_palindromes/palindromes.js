const palindromes = function (args) {
	args = args.toLowerCase().replace(/[^a-z0-9]/g,"")
	let reverse = args.split('').reverse().join('')
	return reverse.replace(/ /g, '') == args.replace(/ /g, '')

};

// Do not edit below this line
module.exports = palindromes;
