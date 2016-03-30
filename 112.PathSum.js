var hasPathSum = function(root, sum) {

	//Edge case or when to stop
    if(root === null){
        return false;
    }
    
    //Check if it is at the very end AND equal to the value
    if(root.val === sum && root.left === null && root.right === null){
        return true;
    }
    
    //Use an OR statement because only ONE of them has to be true for it to return true!
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};