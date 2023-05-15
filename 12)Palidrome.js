/*
Given a string (str), determine if it is a palindrome.

Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.
 */
// solution 1
// function palindrome(target) {
//   if (target.split("").reverse().join("") === target) return true;
//   return false;
// }

// console.log(palindrome("racecar"));
// console.log(palindrome("raceca"));

function isPalindrome(target) {
  return target.split("").reverse().join("") === target;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceca"));

// time complexity of palindrome is constant time complexity O(1)
