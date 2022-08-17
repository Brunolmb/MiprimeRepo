/*    Tipos de Números en Arreglo
-----------------------------------
• Almacene en un arreglo de dimensión N números (la 
cantidad es ingresada por el usuario)
-----------------------------------
• Muestre cuántos números son positivos, cuántos son 
negativos y cuántos ceros hay */
let positivo: number = 0;
let negativo: number = 0;
let cero: number = 0;
let longitud: number = Number(prompt("ingrese la dimension"));
let arregloNumeros: number[] = new Array(longitud);

for (let i: number = 0; i < longitud; i++) {
  arregloNumeros[i] = Number(prompt("ingrese un valor"));
  if (arregloNumeros[i] > 0) {
    positivo++;
  } else if (arregloNumeros[i] < 0) {
    negativo++;
  } else {
    cero++;
  }
}

console.log(
  "hay: " +
    positivo +
    " valores positivos, " +
    negativo +
    " valores negativos y " +
    cero +
    " iguales a cero"
);
