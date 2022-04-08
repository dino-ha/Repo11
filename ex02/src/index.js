myStr = "Paragon is the best!";

function useMethod(str){

    myRev = str.split("").reverse().join("");
    countChar = str.split("").reverse().join("");
    countChar = countChar.split(" ");
    countChar = countChar.map(countChar => countChar.length);
    

    const Obj = {

        myReverse: myRev,
        countCharacters: countChar
    }

    console.log(Obj);
    console.log(Obj.countCharacters);
    return Obj;
}

useMethod(myStr);

module.exports = useMethod;