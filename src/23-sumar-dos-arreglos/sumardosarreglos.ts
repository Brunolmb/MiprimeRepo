/*  Estructuras de DatosSumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones 
de dos arreglos y guardar el resultado en otro arreglo


• El arreglo tiene dimensión 6 y los números de los dos 
vectores los carga el usuario. */

let vector1: number[] = new Array(6);
let vector2: number[] = new Array(6);
let suma: number[] = new Array(6);

let cargarArreglo = (vector: number): number => {
  for (let i: number = 0; i < 6; i++) {
    vector[i] = Number(
      prompt("ingrese un valor para la poscion " + (i + 1) + " de 6")
    );
  }
};

cargarArreglo(vector1);
cargarArreglo(vector2);

for (let i: number = 0; i < 6; i++) {
  suma[i] = vector1[i] + vector2[i];
}
console.log("El primer vector es: " + vector1);
console.log("El segundo vector es: " + vector2);
console.log("El resultado es: " + suma);
