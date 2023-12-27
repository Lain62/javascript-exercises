const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(...arr) {
  let x = 0;
  for (i=0; i < arr.length;i++){
  for (i=0; i < arr[0].length; i++){
    x+= arr[0][i]
  }}
  return x
};

const multiply = function(...arr) {
  let x = 1;
  for (i=0; i < arr.length;i++){
  for (i=0; i < arr[0].length; i++){
    x = x * arr[0][i]
  }}
  return x
};

const power = function(x, y) {
  let z = 1
	for (i=0; i < y; i++){
    z = z * x
  }
  return z
};

const factorial = function(x) {
  let z = 1
  let y = x
  for (i=0; i<x; i++){
    z = z * y
    y -= 1
  }
	return z
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
