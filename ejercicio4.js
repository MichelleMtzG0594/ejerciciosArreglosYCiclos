/* 
EJERCICIO 4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

export {commonCourses}

//Usando filter() e includes()
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(courses => student2Courses.includes(courses));
console.log(`El curso en común entre el curso 1 [${student1Courses}] y el curso 2 [${student2Courses}] es: ${commonCourses}`);

const printInDOM = () => {
    const parrFour = document.getElementById("resultado-ejercicio-4");
    
    const result = commonCourses;
    parrFour.innerHTML = `El curso en común entre el curso 1 [${student1Courses}] y el curso 2 [${student2Courses}] es: ${result}`
}

printInDOM()