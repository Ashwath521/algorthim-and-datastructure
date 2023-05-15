/*
Problem:-An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. 
The anagram problem involves determining whether two given strings are anagrams of each other.
 */

// isAnagram('racecar', 'carrace') - Returns true
// solution1
function isAnagram(str1, str2) {
  const rev1 = str1.split("").sort().join("").toLowerCase();
  const rev2 = str2.split("").sort().join("").toLowerCase();
  if (rev1 === rev2) return true;
  return false;
}

console.log(isAnagram("racecar", "carrace"));

// solution2

function isAnagram(str1, str2) {
  return (
    str1.split("").sort().join("").toLowerCase() ===
    str2.split("").sort().join("").toLowerCase()
  );
}

console.log(isAnagram("racecar", "carrace"));

// solution3

function sortArr(str) {
  if (!str) return;
  return str.split("").sort().join("").toLowerCase;
}

function isAnagramCheck(str1, str2) {
  if (str1.length !== str2.length) return false;
  return sortArr(str1) === sortArr(str2);
}

console.log(isAnagramCheck("racecar", "carrae"));
