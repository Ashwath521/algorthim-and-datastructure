/*You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the
sum of all the numbers between them.

(Note: The lower number may not always be the first element in the array)

sum([1, 4]) - Returns 10

sum([4, 1]) - Returns 10

*/

function SumOfTwoNumber(...args) {
  let min = Math.min(...args);
  let max = Math.max(...args);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(SumOfTwoNumber(1, 2, 4));
