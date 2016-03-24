var moveZeroes = function(nums) {
    for(var i=0; i<nums.length; i++){
        if(nums[i] == 0){

            for(var j = i+1; j<nums.length; j++){
                if(nums[j] != 0){
                    temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break
                }
            }

        }
    }
};
