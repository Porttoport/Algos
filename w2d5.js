// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

const nums2 = [2, 11, 7, 4 , 5, 30, 13, 3, 15];
const targetSum2 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>targetSum){
            continue
        }
        for (let j = i; j < nums.length; j++) {
            if(nums[i]+nums[j] == targetSum){
                return [i,j];
            }
        }
    }
}

console.log(twoSum(nums2,targetSum2))


function twoSum3(nums, targetSum) {
  let result = [];
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
      dict[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = targetSum - nums[i];
    if(dict.hasOwnProperty(diff)) {
      result.push(dict[diff],i);
  }
  return result;
}

console.log(twoSum(nums1,targetSum1))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums2 = [1, 1, 1, 2, 2, 3];
const k2 = 2;
const expected2 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums3 = [0, 0, 0, 2, 2, 3];
const k3 = 1;
const expected3 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums4 = [1, 1, 2, 2, 3, 3, 5, 5, 5, 5];
const k4 = 3;
const expected4 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
  let freq = {};
  let dict = {};
    for(let i=0; i<nums.length; i++){
      if( !freq.hasOwnProperty(nums[i])){
        freq[nums[i]] = 1;
      }else{
        freq[nums[i]] +=1;
      }
    }
    for(let key, value in freq){
      if(!dict.hasOwnProperty(value)){
        dict[value] = `${key}`;
      }else{
        dict[value] += `${key}`;
      }
    }
    if(dict.hasOwnProperty(k)){
      return dict[k];
    }
}