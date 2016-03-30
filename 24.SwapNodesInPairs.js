var swapPairs = function(head) {
 var holder = new ListNode(0);
 holder.next = head;
 
 var n1 = holder;
 var n2 = head;
 
 while(n2 !== null && n2.next !== null){
     
     var newStart = n2.next.next
     
     n1.next = n2.next
     n1.next.next = n2
     n2.next = newStart
     
     n1 = n2
     n2 = n2.next
     
 }
 
 return holder.next
    
};