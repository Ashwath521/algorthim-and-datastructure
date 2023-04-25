// Problem give a number 'n', find the first 'n' elements of the fibonacci sequence
// in mathematics, the fibonacci sequence is a sequence in which each number is
// the sum of the two preceding ones

function FibonacciSequence(n) {
  // it should require one array with 2 element
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(FibonacciSequence(5));
