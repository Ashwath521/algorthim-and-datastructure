/*
    problem:- give a positive integer "n", determines if the number is a power of 2 or not

 */

function PowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = 0; i <= 32; i++) {
    if (n === Math.pow(2, i)) return true;
  }
  return false;
}

console.log(PowerOfTwo(12));
console.log(PowerOfTwo(16));
console.log(PowerOfTwo(32));
