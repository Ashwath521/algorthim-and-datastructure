/*
Problem :- given a sorted  array of  "n" elements and a target element "t", find the index of "t"
in the array. return -1 if the target element is not found.
Solution:- - - - - - - - - - - - - - - -
a). make the array sort in proper order 
b). findout the middle element of the array
c). check if the middle element is equal to the target element.
d) if it's greater than the target element then target right side of the array
e) if it's less than the target element then target left side of the array
*/

let arr = [6, 2, -5, 12, 4, 8];
let sortArr = arr.sort((a, b) => {
  return a - b;
});

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch(sortArr, 12));
