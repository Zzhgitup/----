/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let left = 0;
	let right = nums.length-1;
	while(left<=right){
		let middle = Math.floor((left+right)/2);
		if(target < (nums[middle])){
			right = middle-1;
		}else if(target>nums[middle]){
			left = middle+1
		}
		else{
			return middle;
		}
	}
	return -1;
};
// @lc code=end

