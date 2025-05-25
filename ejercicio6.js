/* 
EJERCICIO 6
 Write a function that performs the bubble algorithm.
                Input [3, 6, 12, 5, 100, 1]
                Output [1, 3, 5, 6, 12, 100]
*/

export{burbuja}


function burbuja(arr) {
  for (let i = 0; i < arr.length; i++) {  //Se repite hasta que ya no ocurran intercambios en el arreglo
    for (let j = 0; j < arr.length - 1; j++) { //Compara los numeros adyacentes y los intercambia si estan en el lugar equivocado
      if (arr[j] > arr[j + 1]) {// Intercambio de numeros (si  a > b )
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // (a,b) = (b,a)
       } 

    }
  
}
       return arr;
}
const input = [3, 6, 12, 5, 100, 1];
console.log(input);
const output = burbuja(input);
console.log(output);

const printInDOM = () => {
    const parrSix = document.getElementById("resultado-ejercicio-6");
    
    parrSix.innerHTML = `Input: [3, 6, 12, 5, 100, 1]  
    <br> Output: [${output.join(" , ")}]`
}

printInDOM()