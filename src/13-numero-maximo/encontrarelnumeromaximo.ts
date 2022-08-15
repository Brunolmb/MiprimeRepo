let numero: number = 0;
let numeroMaximo: number = 0;
let control: number = 1;

while (control < 2) {
  numero = Number(prompt("ingrese un valor - ingrese 0 para finalizar"));
  if (numero === 0) {
    control = 3;
  } else if (numero > numeroMaximo) {
    numeroMaximo = numero;
  }
}
console.log("el numero maximo es:", numeroMaximo);

//MODIFICAR PARA OBTENER EL VALOR MINIMO

/* let numero: number = 0;
let numeroMinimo: number = 0;
let control: number = 1;

while (control < 2) {
  numero = Number(prompt("ingrese un valor - ingrese 0 para finalizar"));
  if (numero === 0) {
    control = 3;
  } else if (numero < numeroMinimo) {
    numeroMinimo = numero;
  }
}
console.log("el numero minimo es:", numeroMinimo);
*/
