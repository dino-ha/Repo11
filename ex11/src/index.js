function mySplice(arr1, arr2, n){

    arr1_temp = arr1;
    arr2_temp = arr2;

    for (n; n < arr2.length; n++){

        arr2[n] = arr1.splice(n, 0, arr1[n]);
    }
}

mySplice(arr1, arr2, n);

module.exports = mySplice;