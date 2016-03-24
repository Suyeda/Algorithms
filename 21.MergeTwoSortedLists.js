var mergeTwoLists = function(l1, l2) {

   var runner1 = l1;
   var runner2 = l2;

   //Create new list with whatever value I used negative one
   //THIS WILL NOT BE THE HEAD WE ARE RETURNING!
   var list3 = new ListNode(-1);
   var p = list3;

   //Cycle through each list and add in order to the new list until runner1 or runner2 == null
   while(runner1 && runner2){
       if(runner1.val >= runner2.val){
           p.next = runner2;
           runner2 = runner2.next;
       }
       else{
           p.next = runner1;
           runner1 = runner1.next;
       }
       p = p.next
   }

   //Optimize space! :)
   //We are bringing the entire nodes with us so...
   //We can just add the last node from the list that remains and it will bring everything behind it at the same time!
   if(runner1){
       p.next = runner1;
   }
   else{
       p.next = runner2;
   }

   //Return the head, the second thing inside list3 since we created a dummy -1 node at the start
   return list3.next;

};
