var temps = [

    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61] 
];

var averageDayTemp = [];

function myArrayFunction(tempArr){

    var sumy = 0;
    for (var x = 0; x < tempArr.length; x++){

        for (var y = 0; y < tempArr.length; y++){

            sumy += tempArr[y];
        }
        
        sumy = (sumy/tempArr.length);
        averageDayTemp.push(sumy);
        sumy = 0;
    }
    console.log(averageDayTemp);

    return averageDayTemp;
}

myArrayFunction(temps);
module.exports = myArrayFunction;

