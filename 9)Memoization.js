/*
Memoization is good technique for performance optimization
cache the expensive function call result 
if the function call argument it's changes then it will return the new result other wise it will return
cache the existing result
*/

function Memoization(fun) {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log("cache", cache);
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
}

function calc(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const Memo = Memoization(calc);
console.time();
console.log(Memo(1000000));
console.timeEnd();
console.time();
console.log(Memo(100000));
console.timeEnd();
console.time();
console.log(Memo(1000000));
console.timeEnd();
