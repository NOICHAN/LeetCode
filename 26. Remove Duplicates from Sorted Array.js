var removeDuplicates = function(nums) {
    if (nums === null || nums.length === 0) return 0
    if (nums.length === 1) return 1

    let k = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]){
            k++
            nums[k] = nums[i]
        }
    }
    return k+1
};