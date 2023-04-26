//FactorialNumber With Recursion

function FactorialNumber(n) {
  if (n < 1) return 1;
  //   every function call it store the factorial function in call stack until it reaches base condition
  // once meet the base condition it start to return the factorial function result
  return n * FactorialNumber(n - 1);
}

console.log(FactorialNumber(2));
