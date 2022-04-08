function myMutation(arr){

    var sameLetters;
    arr.split();
    for (var x = 0; x < arr.length; x++){

        if (arr.search(/arr[x]/i)){

            sameLetters = true;
        }
        else {

            sameLetters = false;
            
        }
    }
    if (sameLetters == true){

        return true;
    }
    else {

        return false;
    }
    
}

myMutation();

module.exports = myMutation;