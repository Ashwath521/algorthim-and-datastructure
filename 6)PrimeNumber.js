/* A prime number is a positive integer greater than 1 that has no positive integer divisors
other than 1 and itself. In other words, a prime number is only divisible by 1 and itself */

function isPrime(n) {
  if (n < 2) return false;
  //   why loop start with a 2 initial number because of 0 and 1 divisible itself only because of that
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(15));

// Note time complexity of isPrime is linear time complexity because of it have one for loop
