var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++){
        for (let k = nums.length-1; i < k; k--) {
            if (nums[i] + nums[k] === target)
            return [i,k]
            
        }
    }
};