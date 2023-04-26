// problem:- given an integer 'n' find the factorial of that integer
// factorial 0 is always one

let n = 5;

function FactorialNumber(n) {
  let result = 1;
  if (n < 1) return 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(FactorialNumber(n));

// Note:- time complexity of factorialNumber is linear time complexity
