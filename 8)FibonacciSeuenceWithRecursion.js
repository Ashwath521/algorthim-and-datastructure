/*
Problem:- give a number 'n', find the nth element of the fibonacci sequence with recursion
solution:- 
    a). It require base condition.
    b). we need to call this function recursively it should cut down the problem

    */

function FibonacciSequenceWithRecursion(n) {
  if (n < 2) {
    return n;
  }
  return (
    FibonacciSequenceWithRecursion(n - 1) +
    FibonacciSequenceWithRecursion(n - 2)
  );
}

console.log(FibonacciSequenceWithRecursion(6));
