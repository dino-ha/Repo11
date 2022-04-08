var str = "Paragon";

function myReverse(str){

    var reverseString = [];
    
    for (var x = str.length-1; x >= 0; x--){

        reverseString.push(str[x]);
    }

    reverseString = reverseString.join();
    
    return reverseString;
}

console.log(myReverse(str));


module.exports = myReverse;