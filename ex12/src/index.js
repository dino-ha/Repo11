function splittingArrayInGroups(arr, n){

    var z = n;
    var result = [];
    for (var x = 0; x < arr.length; x++){

        for (n; n > 0; n--){

            result.push(arr[n]);
        }
        n = z;
    }
}

splittingArrayInGroups();

module.exports = splittingArrayInGroups;