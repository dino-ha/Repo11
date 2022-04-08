myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets){

    myNewPets = [];
    myNewPets.push("Bird", "Fish");
    myNewPets.unshift("Lion");
    myNewPets.pop();
    myNewPets.pop();
    myNewPets.push("Cat", "Bird");
    firstPet = myNewPets[0];
    lastPet = myNewPets[myNewPets.length-1];
    return myNewPets;
}

myArrayFunction(myPetsArray);

console.log(firstPet);
console.log(lastPet);
console.log(myNewPets);

module.exports = myArrayFunction;