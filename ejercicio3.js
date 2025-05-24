/* 
EJERCICIO 3
 Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
                    Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
export {sumOfNumbers}
export {multiOfNumbers}

//Usando reduce()

//Funcion para la suma de numeros

const numbers = [1,2,3,4];
const sumOfNumbers = numbers.reduce((accumulator,number)=> {
    const sum = accumulator + number;
    return sum;
})
console.log(`La suma de ${numbers.join(" + ")} es igual a :`, sumOfNumbers)

const multiOfNumbers = numbers.reduce((accumulator,number)=> {
     const multi = accumulator * number;
    return multi;
})
console.log(`La multiplicación de ${numbers.join(" * ")} es igual a :`, multiOfNumbers)

const printInDOM = () => {
    const parrThree = document.getElementById("resultado-ejercicio-3");
    
    const resultSum = sumOfNumbers
    const resultMulti = multiOfNumbers
    parrThree.innerHTML = `La suma de ${numbers.join(" + ")} es igual a : ${resultSum}.
    <br>La multiplicación ${numbers.join(" * ")} es igual a: ${resultMulti}. `
}

printInDOM()




