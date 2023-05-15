/*
Longest Word in a String
Given a string (str), find the longest word in the string.

Note: If one more more words have the same length, return the first occuring word of the same length.


longestWord('My name is Vishwas') - Returns 'Vishwas'

longestWord('Hello world') - Returns 'Hello'
*/

function LongestWord(str) {
  let val = str.split(" ");
  let word = 0;
  let res;
  for (let i = 0; i < val.length; i++) {
    if (word <= val[i].length) {
      word = val[i].length;
      res = val[i];
    }
  }
  return res;
}

console.log(
  LongestWord("My name is ashwathgowda Vis acchu vishwas s ashwathgowdadd")
);
