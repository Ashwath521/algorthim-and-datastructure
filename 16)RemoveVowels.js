/*
Problem:- Given an input string (str), remove all vowels from the string.
*/

// function removeVowels(str) {
//   let a = ["a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!a.includes(str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeVowels("Hello World"));

function removeVowels(str) {
  // let a = ["a", "e", "i", "o", "u"];
  let result = str
    .trim()
    .split("")
    .filter((item) => !["a", "e", "i", "o", "u"].includes(item));
  return result.join("");
}
console.log(removeVowels("Hello World"));
