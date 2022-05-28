let control: number = 1;
let numeros: number;
let media: number = 0;
let total: number;
let contador: number = 0;

numeros = Number(prompt("ingrese un valor - ingrese 0 para finalizar"));

let maximo: number = numeros;
let minimo: number = numeros;
total = numeros;

while (control < 2) {
  numeros = Number(prompt("ingrese un valor - ingrese 0 para finalizar"));
  contador = contador + 1;
  if (numeros === 0) {
    control = 3;
  } else if (numeros > maximo) {
    maximo = numeros;
    total = total + numeros;
  } else if (numeros < minimo) {
    minimo = numeros;
    total = total + numeros;
  }
}

media = total / contador;
console.log(
  "el maximo es: " +
    maximo +
    " el minimo es: " +
    minimo +
    " la media es: " +
    media
);
