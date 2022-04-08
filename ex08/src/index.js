function largestNumFromArr(arr){

    maxNumArray = [];
    var largestNum = 0;

    for (x = 0; x < arr.length; x++){

        for (y = 0; y < arr.length; y++){

            if (arr[x][y] > largestNum){

                largestNum = arr[x][y];
                
            }
        
        }
        maxNumArray.push(largestNum);
        largestNum = 0;
    }

    return maxNumArray;
}

module.exports = largestNumFromArr;