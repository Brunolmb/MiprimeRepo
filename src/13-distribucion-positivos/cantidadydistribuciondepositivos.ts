let positivos: number = 0;
let total: number = 0;
let control: number = 1;
let numeros: number;
let porcentaje: number = 0;

while (control < 2) {
  numeros = Number(prompt("ingrese un valor - ingrese 0 para finalizar"));
  if (numeros === 0) {
    control = 3;
  } else if (numeros > 0) {
    positivos++;
    total++;
  } else {
    total++;
  }
}
porcentaje = (positivos / total) * 100;
console.log(
  "la cantidad de valores positivos: " +
    positivos +
    " el porcentaje de positivos es: " +
    porcentaje +
    "%"
);
