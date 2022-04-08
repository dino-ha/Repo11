var myArr = [2, 5, 9, 8, 2];

function bubbleSort(arr){

    var largestNum = 0;
    var z = 0;
    for (var x = arr.length-1; x >= 0; x--){
    
        for (var y = 0; y < arr.length-z; y++){

            if (arr[y] > largestNum){

                largestNum = arr[y];
            }
        }

        arr[x] = largestNum; 
        z++;
        largestNum = 0;

    }

    return arr;
}

bubbleSort(myArr);

module.exports = bubbleSort;
