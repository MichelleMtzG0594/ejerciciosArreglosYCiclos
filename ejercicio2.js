/* 
EJERCICIO 2
Write a function that:
                Takes in an array of numbers.
                Doubles the value of each number in the array.
                Prints out the new updated array.
                Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

export {arrayDouble}

//Usando map()
    let arrayOfNumbers = [1,2,4,5];
    const arrayDouble = arrayOfNumbers.map( function ( num ) {
        const double = num * 2;
        return double;
    })

    console.log(arrayDouble);



//Usando ciclo for
let arr = [1, 2, 4, 5];

for (let num = 0; num < arr.length; num++) {
  arr[num] = arr[num] * 2;
}

console.log(arr);

const printInDOM = () => {
    const parrTwo = document.getElementById("resultado-ejercicio-2");
    
    const result = arrayDouble.join(" , ")
    parrTwo.innerHTML = `El doble de los valores del array [${arrayOfNumbers.join(" , ")}] es igual a [${result}]`
}

printInDOM()