var twoSum = function(nums, target) {

    //Start on first number
    for(var idx1 = 0; idx1 < nums.length; idx1++){

        //Add numbers after first number one at a time to see if there is a match with target
        for(var idx2 = idx1+1; idx2 < nums.length; idx2++){
            if(nums[idx1] + nums[idx2] == target){
                return [idx1, idx2]
            }

        }
    }

};
