function myBouncer(arr){

    arr.split();
    for (var x = 0; x < arr.length; x++){

        if (arr[x] == false || arr[x] == null || arr[x] == 0 || arr[x] == "" || arr[x] == undefined || arr[x == NaN]){

            arr.shift(arr[x]);
        }
    }
}

myBouncer(arr);
module.exports = myBouncer;