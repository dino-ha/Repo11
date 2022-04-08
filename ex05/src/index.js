var monitorsListArray = ["Apple", "Peach", "Berry"];

var monitorsList = [];

function myMonitorsFunction(){

    for (var i; i < monitorsListArray.length; i++){

        monitorsList.push(monitorsListArray[i]).push(i);
    }

    return monitorsList;
}

module.exports = myMonitorsFunction;