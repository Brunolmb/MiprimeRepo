/*   Producto Escalar

 • Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)

• Calcule el producto escalar entre los dos arreglos: */

let longitud: number = Number(prompt("ingrese la dimension"));
let arregloUno: number[] = new Array(longitud);
let arregloDos: number[] = new Array(longitud);
let arregloResultado: number[] = new Array(longitud);

let cargarArreglo = (arreglo: number, dimension: number) => {
  for (let i: number = 0; i < dimension; i++) {
    arreglo[i] = Number(
      prompt(
        "ingrese un valor para esta posicion " + (i + 1) + " de " + dimension
      )
    );
  }
};

cargarArreglo(arregloUno, longitud);
cargarArreglo(arregloDos, longitud);

let escalarArreglo = (
  arreglo1: number,
  arreglo2: number,
  arregloMultiplicar: number,
  dimension: number
) => {
  let suma: number = 0;
  for (let i: number = 0; i < dimension; i++) {
    arregloMultiplicar[i] = arreglo1[i] * arreglo2[i];
    suma = suma + arregloMultiplicar[i];
  }
  console.log("el producto escalar es: " + suma);
};
escalarArreglo(arregloUno, arregloDos, arregloResultado, longitud);
