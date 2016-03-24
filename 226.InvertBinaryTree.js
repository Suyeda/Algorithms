var invertTree = function(root) {

    recursionTree(root);

    //return "head" root
    return root

};

//Created new function so I could do left and right of root at once
var recursionTree = function(root){
    //EdgeCase if the root is null we are DONE, DONE with it I say!
    if(root === null){
        return
    }
    //We know to stop if there are no children of the root
    else if(root.left === null && root.right === null){
        return
    }
    //Swap em up
    else{
        var temp = root.left;
        root.left = root.right;
        root.right = temp;
    }

    //Rinse and repeat till we get to the bottom null
    recursionTree(root.left)
    recursionTree(root.right)
}
