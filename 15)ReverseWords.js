/*
Given an input string (str), reverse the string word by word.

Note: 

1. Your reversed string should not contain leading or trailing spaces

2. You need to reduce multiple spaces between two words to a single space in the reversed string.

 */

function reverseWords(str) {
  return str.trim().split(" ").reverse().join(" ");
}

console.log(reverseWords("World Hello"));
console.log(reverseWords(" This is a test string "));
