/*
Problem : given an array of integers , sort the array. 
It's a poor sort method in the sort method
 */

const arr = [6, 20, 8, -2, 4, -20, -1, -16];
// solution = [-2, 4, 6, 8, 20]

function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
console.log(bubbleSort(arr));

// Time complexity of bubble sort is O(2) quadratic time complexity.
