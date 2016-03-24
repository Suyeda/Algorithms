var addDigits = function(num) {

    //Build a function that adds all numbers in a string together
    var combine = function(num){
        stringz = String(num)
        sum = 0;
        for(var i=0; i<stringz.length; i++){
            sum = sum + parseInt(stringz[i]);
        }
        return sum
    };

    //Assume numbers are positive check if the length is greater than 2
    //If length is one then we are finished! Return the num
    if(num < 10){
        return num;
    }
    else{
    var new_num = combine(num)

    //Run recursion to keep dividing until a single number with length of 1 is reached
    return addDigits(new_num)
    }
};
