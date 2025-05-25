/*
EJERCICIO 1 
let arr = ["This", "is", "a", "sentence."];
                    function printOutString() {
                        your code here
                    }
                    printOutString();
                    Complete the function to print out the string: This is a sentence. 
*/

export{printOutString}

const printOutString = () => {
    let arr = ["This", "is", "a", "sentence."];
    let arrJoin = arr.join(" ");
    return arrJoin;
}
console.log(printOutString());


const printInDOM = () => {
    const parrOne = document.getElementById("resultado-ejercicio-1");
    
    const result = printOutString()
    parrOne.innerHTML = `${result}`
}

printInDOM()