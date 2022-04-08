var myArray = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var Arr1 = [

    [2],
    [5, 6, 7],
    [8, 9]
]

var Arr2 = [

    [2.5, 2],
    [0.5, 0.2],
    [8]
]

var Arr3 = [

    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9]
]

function multipleArrayFunction(myArray){

    var product, sum;

    for (var x = 0; x < myArray.length; x++){

        for (var y = 0; y < myArray.length; y++){

            sum += myArray[x][y];
            product *= myArray[x][y];
        }
        myArray.push(product).push(sum);
    }

    return sum, product, myArray;
}

multipleArrayFunction(myArray);
multipleArrayFunction(Arr1);
multipleArrayFunction(Arr2);
multipleArrayFunction(Ar3);

module.exports = multipleArrayFunction;