/* Promedio Escolar
-------------------
• Desarrolle un algoritmo que 
permita cargar alumnos y sus 
notas en los tres trimestres

• Se debe permitir obtener el 
promedio anual (es decir, de sus 
tres notas) de un alumno 
(ingresado por el usuario)

• Luego de resolverlo, pensar en 
aprovechar métodos y discutir 
como representar la información */

let nombre: string = prompt("ingrese nombre del alumno");
let promedio: number = 0;

let calcularPromedio: number[] = new Array(3);

let llenarCalcularPromedio = (notas: number[]) => {
  let suma: number = 0;
  for (let i: number = 0; i < 3; i++) {
    notas[i] = Number(prompt(`ingrese la nota N° ${i + 1}`));
    suma += notas[i];
  }
  promedio = suma / 3;
  return promedio;
};

while (nombre !== "") {
  llenarCalcularPromedio(calcularPromedio);
  console.log(`el promedio de ${nombre} es: ${promedio}`);

  nombre = prompt("ingrese nombre del alumno");
}

/*
let nombre: string = Number(prompt("ingrese nombre del alumno"));
let promedio: number = 0;

let calcularPromedio: number[] = new Array(2);

let arrowFunction = (promedio) => {
  while (nombre !== "") {
    prompt("ingrese nota 1");
    prompt("ingrese nota 2");
    prompt("ingrese nota 3");
  }
};

promedio = promedio / 3;
*/
