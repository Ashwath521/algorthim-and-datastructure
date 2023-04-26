/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let nums = [2, 7, 11, 15];

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] === target) return i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else if (nums[i] === target) {
        return i;
      }
    }
  }
}

console.log(twoSum(nums, 26));
