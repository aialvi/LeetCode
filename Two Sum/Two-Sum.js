/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i];
        let secondIndex = nums.lastIndexOf(difference);
        if(secondIndex > 0 && secondIndex != i){
            return [i,secondIndex]
        }
    }
};
