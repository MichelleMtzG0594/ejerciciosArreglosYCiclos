/* 
EJERCICIO 5 
 For each of the exercises below, assume you are starting with the following people array.
                let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
                Write a command that prints out all of the people in the list.
                Write the command to remove "Dani" from the array.
                Write the command to remove "Juan" from the array.
                Write the command to move "Luis" to the front of the array.
                Write the command to add your name to the end of the array.
                Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
                Write the command that gives the indexOf where "Maria" is located.
                At the end of the exercise, there should be 4 people in the array.
 */

export {people,printPeople,removeDaniFromPeople,removeJuanfromPeople,moveLuisToTheFront,addMyName,indexOfMaria,numPeople}

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//  Write a command that prints out all of the people in the list.
let printPeople = people.join(" - ");
console.log("Arreglo original:", printPeople);
//  Write the command to remove "Dani" from the array.
let removeDaniFromPeople = people.splice(1, 1).join();
console.log("Le decimos adios a:", removeDaniFromPeople);
//  Write the command to remove "Juan" from the array.
let removeJuanfromPeople = people.splice(2, 1).join();
console.log("Le decimos adios a:", removeJuanfromPeople);
//   Write the command to move "Luis" to the front of the array.
let moveLuisToTheFront = ([people[1], people[0]] = [people[0], people[1]]);
console.log(`Cambiamos de lugar a ${people[1]} por ${people[0]}  y quedó el arreglo asi: `, people.join(" - "));
//  Write the command to add your name to the end of the array.
let addMyName = people.push("MichMG");
//  Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let person of people) {
  console.log("", person);
  if (person === "Maria") break;
}
//  Write the command that gives the indexOf where "Maria" is located.
let indexOfMaria = people.indexOf("Maria");
console.log("Index de Maria:", indexOfMaria);
//  At the end of the exercise, there should be 4 people in the array.
console.log("Arreglo final: ", people.join(" - "));
let numPeople = people.length;
console.log("Numero de personas:", numPeople);

const printInDOM = () => {
    const parrFive = document.getElementById("resultado-ejercicio-5");
    
    parrFive.innerHTML = `Arreglo original: ${printPeople}.
    <br>Le decimos adios a: ${removeDaniFromPeople} y a ${removeJuanfromPeople}.
    <br>Cambiamos de lugar a: ${people[1]} por ${people[0]}.
    <br>Agregué mi nombre al array y quedó asi: ${people.join(" - ")}.
    <br>El index de Maria es: ${indexOfMaria}.
    <br>El arreglo final quedo como: ${people.join(" - ")} con ${numPeople} personas. `
}

printInDOM()