var deleteDuplicates = function(head) {

  //Check for edge case
    if(head === null || head.next === null){
        return head
    }

    //Assign variable to head starting point
    var current_node = head
    while(current_node.next){

        //Check if the next val is matching current one
        //If it matches only change the pointer "NEXT"
        if(current_node.val == current_node.next.val){
            current_node.next = current_node.next.next
        }
        else{
        //If there is no match procede on as usual
            current_node = current_node.next
        }

    }

    //Return the list by returning head
    return head

};
