/* invertir Arreglo
----------------------
• Almacene en un arreglo de tamaño N los números ingresados 
por el usuario.

• La dimensión N también es ingresada por el usuario

• Muestre los números del arreglo pero del último al primero. */

let longitud: number = Number(prompt("ingrese un valor"));
let numerosIngresados: number[] = new Array(longitud);

let cargarArreglo = (arreglo): number => {
  for (let indice: number = 0; indice < longitud; indice++) {
    arreglo[indice] = Number(prompt("ingrese un numero"));
  }
};
cargarArreglo(numerosIngresados);

for (let i: number = longitud - 1; i >= 0; i--) {
  console.log(numerosIngresados[i]);
}
