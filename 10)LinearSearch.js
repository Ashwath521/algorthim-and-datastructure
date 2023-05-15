/*
Problem:- given an array of "n" elements & a target element "t" find the index of "t" in the array.
return -1 if the target element is not found
 */

let Arr = [-5, 2, 10, 4, 6];
let target = 6;

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch(Arr, target));
console.log(LinearSearch(Arr, 8));

// Note time complexity of the algorithm is Linear time complexity because it have one for loop
