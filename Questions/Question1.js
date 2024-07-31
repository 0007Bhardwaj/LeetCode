// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// solution

function twoSum(arr = [], target) {
  const cacheData = new Map();

  for (let index = 0; index < arr.length; index++) {
    const elementToFind = target - arr[index];
    if (cacheData.has(elementToFind)) {
      return [cacheData.get(elementToFind), index];
    }
    cacheData.set(arr[index], index)
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 12], 13)); // [ 5, 6 ]



// Complexity Analysis

// Time complexity: O(n).
// We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.

// Space complexity: O(n).
// The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
